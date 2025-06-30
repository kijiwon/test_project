import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/boards");
  }, []);

  return (
    <div>
      {!isLoggedIn && (
        <>
          <button onClick={() => navigate("/signup")}>회원가입</button>
          <button onClick={() => navigate("/login")}>로그인</button>
        </>
      )}
    </div>
  );
}
