import React from 'react'
import styled, { css, keyframes } from 'styled-components'

interface PropsImg {
  src: string
  alt: string
}

interface PropsItem extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean
}

interface PropsRow {
  vertical?: number
  horizontal?: number
}

interface PropsColumn {
  small?: 1 | 2 | 2.5 | 3.333 | 5 | 10
  larger?: 1 | 2 | 2.5 | 3.333 | 5 | 10
  position?: 'start' | 'end'
  alignText?: 'left' | 'center' | 'right'
}

interface PropsSpace {
  color: string
}

export const Cover = styled.img<PropsImg>`
  width: 120%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  margin-right: 0;
  transition: all 2s ease-out 2s;
`
export const MetaInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 60px;
  right: 60px;
  transition: 1s;
`

export const PrincipalInformation = styled.div`
  max-height: 0;
  transition: max-height 1s ease-out;
  position: relative;
  z-index: 9;
`

export const LogoWrap = styled.div`
  text-align: center;
  width: calc(25vw - 120px);
  margin-bottom: 30px;
  @media (max-width: 767px) {
    transition: opacity 1s ease-out;
    opacity: 0;
  }
`

const ArrowCycle = styled.div`
  transition: opacity 1s ease;
  svg {
    background: rgba(255,255,255,0.2);
    padding: 5px;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const ArrowWrap = styled(ArrowCycle)`
  margin-bottom: 60px;
  text-align: left;
  pointer-events: none;
  opacity: 0;
  width: 25px;
`

export const ArrowWrapCenter = styled(ArrowCycle)`
  margin-bottom: 15px;
  height: 25px;
`

export const Logo = styled.img<PropsImg>`
  max-width: 100%;
  @media (min-width: 1280px) {
    max-width: 200px;  
  }
  margin: 0 auto;
`

const HorizontalShake = keyframes`
  0% { margin-left: -5px; }
  33% { margin-left: 5px; }
  66% { margin-left: -5px; }
  100% { margin-left: 0; }
`

const VerticalShake = keyframes`
  0% { margin-top: -5px; }
  33% { margin-top: 5px; }
  66% { margin-top: -5px; }
  100% { margin-top: 0; }
`

const FadeIn = keyframes`
  0% { opacity: 1; }
  0.1% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

export const Row = styled.div<PropsRow>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: ${(props) => props.vertical ? `${props.vertical}px` : 0};
  padding-bottom: ${(props) => props.vertical ? `${props.vertical}px` : 0};
  padding-left: ${(props) => props.horizontal ? `${props.horizontal}px` : 0};
  padding-right: ${(props) => props.horizontal ? `${props.horizontal}px` : 0};
`

export const Column = styled.div<PropsColumn>`
  width: ${(props) => props.small ? `${(props.small * 10)}%` : '100%'};
  flex-basis: ${(props) => props.small ? `${(props.small * 10)}%` : '100%'};
  @media (min-width: 768px) {
    width: ${(props) => props.larger ? `${(props.larger * 10)}%` : '100%'};
    flex-basis: ${(props) => props.larger ? `${(props.larger * 10)}%` : '100%'};
  }
  text-align: ${(props) => props.alignText ? props.alignText : 'left'};
  margin-right: 30px;
  margin-bottom: 15px;
  &:last-child {
    margin-right: ${(props) => props.small === 10 ? 15 : 0};
    @media (min-width: 768px) {
      margin-right: ${(props) => props.larger === 10 ? 15 : 0};
    }
  }
  ${(props) => props.position === 'end' && css`
    margin-left: auto;
  `}
`

export const Space = styled.div<PropsSpace>`
  height: 1px;
  background: ${(props) => props.color ? props.color : '#ffffff'};
  margin: 15px 0;
`

export const IndicatedFor = styled.div`
  display: flex;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`

export const ClosedInfo = styled.div<PropsItem>`
  height: 0;
  transition: 1s;
  ${(props) => props.active && css`
    transition: 1s;
    height: 100vh;
    padding: 60px 0;
    overflow-y: auto;
    
    ${ArrowWrapCenter} {
      animation-name: ${FadeIn};
      animation-duration: 2.2s;
      animation-delay: 0s;
      animation-iteration-count: 1;
    }
  `}
`

export const Description = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
`

export const Item = styled.div<PropsItem>`
  position: relative;
  flex: none;
  width: 25%;
  height: 100vh;
  scroll-snap-align: start;
  transition-duration: 1s;
  transition-delay: 1.1s;
  flex: 1;
  color: #ffffff;
  
  h3 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 1px;
  }
  
  ${(props) => props.active && css`
    flex: 100%;
    transition: 1s;

    ${Cover} {
      margin-left: -20%;
      transition: all 2s ease-in 1s;
    }
    
    ${LogoWrap} {
      @media (max-width: 767px) {
        transition: all .5s ease-in .3s;
        opacity: 1;
      }
    }
    
    ${Cover} {
      pointer-events: none;
    }
    
    ${PrincipalInformation} {
      max-height: 100vh;
      transition: max-height 1s ease-in 0.8s;
    }
    
    ${ArrowWrap} {
      pointer-events: inherit;
      opacity: 1;
      transition: opacity 1s ease 1s;
      svg:hover {
        animation-name: ${HorizontalShake};
        animation-duration: 1.4s;
        animation-delay: 0.2s;
      }
    }
    
    ${ArrowWrapCenter} {
      svg:hover {
        animation-name: ${VerticalShake};
        animation-duration: 1.4s;
        animation-delay: 0.2s;
      }
    }
    
`}`
