import { useNavigate } from "react-router-dom";

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();
  if (isLoggedIn) navigate("/board");

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
