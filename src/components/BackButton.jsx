import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SIZE } from "../style/Theme";
const Button = styled.button`
  width: fit-content;
  padding: 4px;
  background-color: #fff;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  @media screen and (min-width: ${SIZE.mobileMax}) {
    font-size: 18px;
  }
`;

export const BackButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>⬅︎Back</Button>;
};
