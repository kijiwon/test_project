import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR, SIZE } from "../style/Theme";

const HomeWrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${SIZE.mobileMax}) {
    flex-direction: row;
  }
`;
const Button = styled.button`
  width: 60%;
  display: block;
  position: relative;
  float: left;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  transition: all 0.2s;
  font-size: 22px;
  background-color: ${COLOR.main_blue};
  color: white;
  font-family: "SBAggroB";
  font-size: 20px;
  margin: 10px 20px 30px 0;
  padding: 26px 0;
  border: none;
  box-shadow: 0px 10px 0px 0px ${COLOR.hover_blue};

  &:hover {
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: none;
  }

  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 30%;
    margin-bottom: 10;
    font-size: 30px;

    &:hover {
      margin-top: 15px;
      margin-bottom: 5px;
      box-shadow: none;
    }
  }
`;

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/boards");
  }, []);

  return (
    <HomeWrapper>
      {!isLoggedIn && (
        <>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
          <Button onClick={() => navigate("/login")}>로그인</Button>
        </>
      )}
    </HomeWrapper>
  );
}
