import { useState } from "react";
import { signupAPI } from "../apis/auth";
import { useNavigate } from "react-router-dom";
import {
  InputWrapper,
  SignInput,
  SignWrapper,
  SignButton,
  ErrorMessage,
} from "../components/ui/Sign";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidatedEmail, setIsValidatedEmail] = useState(true);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  // 이메일 유효성 검사
  const checkEmail = (email) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setIsValidatedEmail(regEmail.test(email));
  };

  //비밀번호 유효성 검사
  const checkPassword = (pw) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%*#?&])[A-Za-z\d!%*#?&]{8,}$/;
    setIsValidatedPassword(regex.test(pw));
  };

  const checkConfirmPassword = (cp) => {
    cp === password ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = {
      username: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    };

    const res = await signupAPI(formData);
    if (res.status === 200) {
      alert("회원가입 완료");
      navigate("/login", { replace: true });
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
            onBlur={(e) => checkEmail(e.target.value)}
            required
          />
        </InputWrapper>
        {!isValidatedEmail && (
          <ErrorMessage>이메일 형식이 아닙니다</ErrorMessage>
        )}
        <InputWrapper>
          <label htmlFor="name">이름</label>
          <SignInput
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">비밀번호 </label>
          <SignInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPassword(e.target.value);
            }}
            required
          />
        </InputWrapper>
        {!isValidatedPassword && password.length > 0 && (
          <ErrorMessage>
            비밀번호는 8자 이상, 숫자, 영문자, 특수문자(!%*#?&) 1개 이상을
            사용해 주세요
          </ErrorMessage>
        )}
        <InputWrapper>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <SignInput
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              checkConfirmPassword(e.target.value);
            }}
            required
          />
        </InputWrapper>{" "}
        {!isConfirmed && confirmPassword.length > 0 && (
          <ErrorMessage>비밀번호와 일치하지 않습니다</ErrorMessage>
        )}
        <SignButton
          type="submit"
          disabled={!(isConfirmed && isValidatedPassword)}
          onClick={handleSignup}
        >
          회원가입
        </SignButton>
      </form>
    </SignWrapper>
  );
};
