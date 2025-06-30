import styled from "styled-components";
import { COLOR, SIZE } from "../../style/Theme";

export const SignWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";

  > form {
    width: 80%;
    padding: 60px 30px 20px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${SIZE.mobileMax}) {
    > form {
      width: 50%;
      justify-content: start;
      border: 3px solid ${COLOR.main_skyblue};
      border-radius: 25px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  font-size: 18px;
  margin-top: 20px;

  @media screen and (min-width: ${SIZE.mobileMax}) {
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

export const SignInput = styled.input`
  width: 60%;
  border: none;
  border-bottom: 2px solid ${COLOR.main_navy};
  outline: none;
  font-size: 16px;
  font-family: "Pretendard-Regular";

  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 50%;
    font-size: 18px;
  }
`;

export const SignButton = styled.button`
  width: 100%;
  font-size: 20px;
  padding: 14px 0;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${COLOR.main_lightgray};
  color: white;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  @media screen and (min-width: ${SIZE.mobileMax}) {
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-left: auto;
  margin-top: 5px;
  font-size: 12px;
  font-family: "Pretendard-Regular";

  @media screen and (min-width: ${SIZE.mobileMax}) {
    font-size: 14px;
    margin-top: -20px;
  }
`;
