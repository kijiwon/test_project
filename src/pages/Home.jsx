import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { getCookie } from "../apis/cookie";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userId, accessToken, tokenExp } = useAuthStore();

  const checkLogin = () => {
    const now = new Date();
    const tokenExpDate = new Date(tokenExp);
    console.log("now>>>", now);
    console.log(tokenExpDate);
    if (tokenExpDate <= now) {
      console.log("만료됨");
    }
    if (getCookie("refreshToken") !== undefined && accessToken.length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    console.log("최초 체크");
    checkLogin();
    const timer = setInterval(() => {
      checkLogin();
      console.log("로그인 체크");
    }, 1000 * 60);
    return () => clearInterval(timer);
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
