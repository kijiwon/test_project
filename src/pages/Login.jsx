import { useState } from "react";
import { signinAPI } from "../apis/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import {
  InputWrapper,
  SignWrapper,
  SignButton,
  SignInput,
} from "../components/ui/Sign";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUserId } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      username: email,
      password: password,
    };
    if (email.length === 0) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (password.length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    const res = await signinAPI(formData);
    if (res.status === 200) {
      updateUserId(email);
      alert("로그인 완료");
      navigate("/boards", { replace: true });
    } else {
      alert(res);
    }
  };

  return (
    <SignWrapper>
      <form>
        <InputWrapper>
          <label htmlFor="email">이메일</label>
          <SignInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">비밀번호 </label>
          <SignInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <SignButton type="submit" onClick={handleLogin}>
          로그인
        </SignButton>
      </form>
    </SignWrapper>
  );
}
