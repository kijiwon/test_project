import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { getCookie } from "../apis/cookie";
import { useState } from "react";
import { useEffect } from "react";
import { refreshAPI } from "../apis/auth";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userId, accessToken, tokenExp } = useAuthStore();

  const checkLogin = async () => {
    const now = new Date();
    const refreshToken = getCookie("refreshToken");

    if (refreshToken !== undefined && accessToken.length > 0) {
      //로그인 정보 존재

      if (new Date(tokenExp) - new Date(now) - 5000 <= 0) {
        if (refreshToken !== undefined) {
          const res = await refreshAPI({ refreshToken: refreshToken });
          if (res.status !== 200) {
            alert("토큰이 만료되었습니다. 다시 로그인해 주세요");
          }
        }
      }
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (!tokenExp) return;
    console.log("만료시간>>", new Date(tokenExp));
    const tokenTimeout =
      new Date(tokenExp).getTime() - new Date().getTime() - 5000;

    console.log("남은 시간>>", tokenTimeout);
    const timer = setTimeout(() => {
      checkLogin();
    }, tokenTimeout);
    return () => clearTimeout(timer);
  }, [tokenExp]);

  return (
    <div>
      Home
      {isLoggedIn && userId.length > 0 && <p>{userId}</p>}
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}
