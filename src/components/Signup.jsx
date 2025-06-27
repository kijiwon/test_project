import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidatedEmail, setIsValidatedEmail] = useState(true);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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

    await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.status === 200) {
          alert("회원가입 완료");
        } else {
          const message = await res.json();
          console.log(message.username[0]);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
      });
  };

  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => checkEmail(e.target.value)}
        required
      />
      {!isValidatedEmail && <p>이메일 형식이 아닙니다</p>}

      <label htmlFor="name">이름</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="password">비밀번호 </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          checkPassword(e.target.value);
        }}
        required
      />
      {!isValidatedPassword && password.length > 0 && (
        <p>
          비밀번호는 8자 이상, 숫자, 영문자, 특수문자(!%*#?&) 1개 이상을 사용해
          주세요
        </p>
      )}

      <label htmlFor="confirmPassword">비밀번호 확인</label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          checkConfirmPassword(e.target.value);
        }}
        required
      />
      {!isConfirmed && confirmPassword.length > 0 && (
        <p>비밀번호와 일치하지 않습니다</p>
      )}

      <button
        type="submit"
        disabled={!(isConfirmed && isValidatedPassword)}
        onClick={handleSignup}
      >
        회원가입
      </button>
    </form>
  );
};
