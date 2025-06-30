import styled from "styled-components";
import { SIZE, COLOR } from "../../style/Theme";

export const BoardHeader = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 20px 30px 30px 0;
  > p {
    font-size: 16px;
    margin-right: 16px;
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
  }
`;

export const BoardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  h1 {
    font-family: "SBAggroB";
  }
`;

export const BoardPostButton = styled.button`
  font-size: 18px;
  padding: 4px 6px;
  margin-bottom: 20px;
`;

export const BoardListWrapper = styled.section`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
`;
