import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  background: none;
  color: #fff;
  padding: 0 15px;
  height: 45px;
  width: 100%;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  position: relative;

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 500, 0;
    transition: all 0.35s linear;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);

    rect {
      stroke-width: 4;
      stroke-dasharray: 15, 315;
      stroke-dashoffset: 45;
      transition: all 1.35s cubic-bezier(0.2, 1, 0.2, 1);
    }
  }
`
