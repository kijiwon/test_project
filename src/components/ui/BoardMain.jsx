import styled from "styled-components";
import { SIZE, COLOR } from "../../style/Theme";

export const BoardHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-top: 10px;

  > p {
    font-size: 16px;
    font-weight: 600;
  }
  > button {
    font-size: 16px;
    font-weight: 600;
    padding: 5px 8px;

    background-color: ${COLOR.main_blue};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export const BoardWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: start;

  h1 {
    font-family: "SBAggroB";
  }
  @media screen and (min-width: ${SIZE.mobileMax}) {
    width: 60%;
    padding: 0;
  }
`;

export const BoardPostButton = styled.button`
  font-size: 14px;
  padding: 4px 6px;
  /* margin-bottom: 20px; */
  border: none;
  background-color: white;
  border-bottom: 2px solid ${COLOR.main_blue};
  cursor: pointer;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    font-size: 16px;
  }
`;

export const BoardListWrapper = styled.section`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;

  > p:first-child {
    text-align: end;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const BoardList = styled.ul`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    min-height: 580px;
    gap: 16px;
  }
`;

export const PostItem = styled.li`
  padding: 8px 0px 8px 6px;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid ${COLOR.main_lightgray};
  border-radius: 5px;
  box-shadow: 2px 2px 1px 0px ${COLOR.main_lightgray};
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    box-shadow: none;
    margin-top: 1px;
    margin-bottom: -1px;
  }

  cursor: pointer;

  > p:first-child {
    color: ${COLOR.main_gray};
  }

  @media screen and (min-width: ${SIZE.mobileMax}) {
    padding: 12px 0px 12px 14px;
    font-size: 16px;
  }
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;

  > button {
    border: none;
    padding: 5px 8px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: ${COLOR.main_skyblue};
    }
  }
  @media screen and (min-width: ${SIZE.mobileMax}) {
    > button {
      padding: 10px 12px;
    }
  }
`;
export const PageButton = styled.button`
  background-color: ${COLOR.main_navy};
`;

export const CurrentPageButton = styled.button`
  background-color: ${COLOR.main_skyblue};
`;
