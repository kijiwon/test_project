import styled from "styled-components";
import { SIZE, COLOR } from "../../style/Theme";

export const BoardPostWrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 60%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 20px;
  }
`;

export const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 80%;
  }
`;

export const PostInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 16px;
  font-family: "Pretendard-Regular";

  > input {
    border: 1px solid ${COLOR.main_lightgray};
    border-radius: 3px;
    outline: none;
    padding-top: 4px;
    font-size: 16px;
  }

  > textarea {
    border-radius: 3px;
    font-size: 16px;
    min-height: 200px;
    outline: none;
    border: 1px solid ${COLOR.main_lightgray};
  }

  > select {
    border-radius: 3px;
    font-size: 16px;
    border: 1px solid ${COLOR.main_lightgray};
    height: 28px;
  }
  @media screen and (min-width: ${SIZE.mobileMax}) {
    font-size: 18px;
    > input,
    > textarea,
    > select {
      font-size: 18px;
    }
  }
`;

export const PostButton = styled.button`
  height: 40px;
  background-color: ${COLOR.main_navy};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 30%;
    margin-left: auto;
  }
`;
