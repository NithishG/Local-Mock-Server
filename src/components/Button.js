import styled from "styled-components";

const Button = styled.button`
  background: aqua;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
  /* border-radius: 18px; */
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  height: ${props => (props.height ? props.height : "40px")};
  width: ${props => (props.width ? props.width : "150px")};
`;

export default Button;