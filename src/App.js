import { useAuthStore } from "./store/auth";
import { getCookie } from "./apis/cookie";
import { useState, useEffect } from "react";
import { refreshAPI } from "./apis/auth";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardWrite from "./pages/BoardWrite";
import BoardLayout from "./layout/BoardLayout";
import BoardDetail from "./pages/BoardDetail";
import BoardEdit from "./pages/BoardEdit";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { accessToken, tokenExp } = useAuthStore();

  const checkLogin = async () => {
    const now = new Date();
    const refreshToken = getCookie("refreshToken");

    if (refreshToken !== undefined && accessToken.length > 0) {
      //로그인 정보 존재

      if (new Date(tokenExp) - new Date(now) - 5000 <= 0) {
        if (refreshToken !== undefined) {
          const res = await refreshAPI({ refreshToken: refreshToken });
          if (res.status === 200) {
          } else {
            alert("토큰이 만료되었습니다. 다시 로그인해 주세요");
            window.location.href = "/login";
          }
        }
      }
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return;
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (!tokenExp || !accessToken) return;
    console.log("만료시간>>", new Date(tokenExp));
    const tokenTimeout =
      new Date(tokenExp).getTime() - new Date().getTime() - 5000;

    const timer = setTimeout(() => {
      checkLogin();
    }, tokenTimeout);
    return () => clearTimeout(timer);
  }, [tokenExp, accessToken]);

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="boards" element={<BoardLayout />}>
            <Route index element={<Board />} />
            <Route path="write" element={<BoardWrite />} />
            <Route path=":id" element={<BoardDetail />} />
            <Route path=":id/edit" element={<BoardEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
