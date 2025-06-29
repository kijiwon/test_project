import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { getCookie } from "../apis/cookie";
import { useState } from "react";
import { useEffect } from "react";
import { refreshAPI } from "../apis/auth";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);
  const { userId, accessToken, tokenExp } = useAuthStore();

  const checkLogin = async () => {
    const now = new Date();
    const tokenExpDate = new Date(tokenExp);

    if (tokenExpDate <= now) {
      console.log("만료됨");
      setIsTokenAvailable(false);
      if (getCookie("refreshToken") !== undefined) {
        const res = await refreshAPI(getCookie("refreshToken"));
        console.log(res);
      }
    } else {
      setIsTokenAvailable(true);
    }
    if (
      getCookie("refreshToken") !== undefined &&
      accessToken.length > 0 &&
      isTokenAvailable
    ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    // console.log("최초 체크");
    // checkLogin();
    console.log("현재 시간>>", new Date().getTime());
    console.log("만료시간>>", new Date(tokenExp).getTime());
    console.log(
      "남은 시간>>",
      new Date(tokenExp).getTime() - new Date().getTime()
    );
    // const timer = setInterval(() => {
    //   console.log("로그인 체크");
    //   checkLogin();
    // }, 1000 * 60);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div>
      Home
      {isLoggedIn && userId.length > 0 && <p>{userId}</p>}
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}
