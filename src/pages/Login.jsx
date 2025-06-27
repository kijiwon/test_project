import axios from "axios";
import { useState } from "react";
import { signinAPI } from "../services/sign";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      username: email,
      password: password,
    };
    const res = await signinAPI(formData);
    console.log(res);
    if (res.status === 200) {
      alert("로그인 완료");
    } else {
      alert(res);
    }
  };

  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">비밀번호 </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleLogin}>
        로그인
      </button>
    </form>
  );
}
