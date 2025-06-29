import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "SBAggroB";
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
