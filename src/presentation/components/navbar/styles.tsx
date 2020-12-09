import styled from 'styled-components'

export const Box = styled.div`
  background: #06050a;
`

export const Nav = styled.div`
  text-align: center;
  padding: 7px 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    max-width: 220px;
  }
`

export const List = styled.div`
  a {
    color: #aaa;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 0 15px;
    transition: color .3s ease;
    margin: 10px 0;
    @media (min-width: 576px) {
      margin: 0;    
    }
    &:hover {
      color: #ffffff;
    }
  }
`
