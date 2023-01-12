import styled from "styled-components";

const Image = styled.img`
    src: ${props => props.src};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    cursor: pointer;
  `;

export default Image;