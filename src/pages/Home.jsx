import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function Home() {
  const navigate = useNavigate();
  const userId = useAuthStore((state) => state.userId);

  return (
    <div>
      Home
      {userId.length > 0 && <p>{userId}</p>}
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}
