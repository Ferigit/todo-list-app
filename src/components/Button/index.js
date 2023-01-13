import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 10px 1em;
  border-radius: 6px;
  background: rgb(118,120,224);
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0px;
  }
`;

export default Button;