import styled from "styled-components";
import { space, color, width, fontSize } from "styled-system";
import { Link } from "gatsby";

const Button = styled.button.attrs(p => ({
  as: p.link ? Link : "button"
}))`
  display: inline-block;
  position: relative;
  box-shadow: ${p => p.theme.shadows.z2};
  border-radius: 5px;
  border: 2px solid transparent;
  color: ${p => p.theme.colors.white};
  background: ${({ secondary, theme: { colors } }) =>
    secondary ? colors.brand : colors.yellow};
  transition: background 0.2s, box-shadow 0.2s;
  display: inline-block;
  outline: none;
  &:hover{
    background: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.brandDark : colors.yellowDark};
    opacity: 1;
  };

  &:disabled{
    background: ${p => p.theme.colors.grey};
  }

  &:active{
    box-shadow: ${p => p.theme.shadows.z1};
  }

  &:focus{
    &::after{
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px dotted #fff;
    border-radius: 5px;
  }
  }
  

  ${space}
  ${color}
  ${width}
  ${fontSize}
`;

Button.defaultProps = {
  py: "15px",
  px: "26px",
  fontSize: "20px"
};

export default Button;
