import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user";

export default function Home() {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);

  return (
    <div>
      Home
      {userId.length > 0 && <p>{userId}</p>}
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}
