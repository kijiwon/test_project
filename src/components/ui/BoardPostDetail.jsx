import styled from "styled-components";
import { SIZE, COLOR } from "../../style/Theme";

export const PageWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 60%;
    flex-direction: row;
    align-items: start;
    gap: 20px;
  }
`;
export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 80%;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: end;
  border-bottom: 2px solid ${COLOR.main_blue};
  font-size: 14px;

  gap: 10px;
  overflow-x: scroll;

  > p {
    margin-bottom: 5px;
  }
  > p:first-child {
    padding: 10px 6px 6px 6px;
    background-color: ${COLOR.main_blue};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 0;
    font-weight: 700;
  }
  @media screen and (min-width: ${SIZE.mobileMax}) {
    font-size: 18px;
  }
`;

export const PostContent = styled.article`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-all;
  margin-top: 8px;
  font-size: 16px;
  > p:first-child {
    font-size: 12px;
    color: ${COLOR.main_gray};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > button {
    padding: 10px 14px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
  background-color: #fff;
  border: 2px solid ${COLOR.main_navy};

  color: ${COLOR.main_navy};

  &:hover {
    background-color: ${COLOR.main_navy};
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: ${COLOR.main_lightgray};
  color: white;

  &:hover {
    background-color: ${COLOR.main_gray};
  }
`;
