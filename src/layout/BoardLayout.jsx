import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SIZE, COLOR } from "../style/Theme";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: inherit;
    padding-top: 30px;
    padding-bottom: 12px;
    font-family: "SBAggroB";
    font-size: 22px;
    text-align: center;
    background-color: ${COLOR.main_skyblue};

    letter-spacing: 2px;
    text-shadow: 3px 2px ${COLOR.main_navy};
  }
  @media screen and (min-width: ${SIZE.mobileMax}) {
    h1 {
      font-size: 32px;
    }
  }
`;

export default function BoardLayout() {
  return (
    <Layout>
      <h1>Board</h1>

      <Outlet />
    </Layout>
  );
}
