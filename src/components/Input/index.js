import styled from "styled-components";

const Input = styled.input`
font-size: 18px;
padding: 10px;
margin: 10px;
background: papayawhip;
border: none;
border-radius: 3px;
::placeholder {
  color: palevioletred;
}
@media (max-width: 768px) {
  width: 92%;
  margin: 10px 0px;
}
`;
export default Input;