import React from 'react'
import styled from 'styled-components'

interface ContentItemProps {
  data: {
    image?: string
    title: string
  }
}

const ContentItem: React.FC<ContentItemProps> = ({ data: item }: ContentItemProps) => {
  return (
    <BoxItem>
      <AspectRatio>
        <img src={item.image} alt={item.title} />
      </AspectRatio>
      <Title>{item.title}</Title>
    </BoxItem>
  )
}

export default ContentItem

const BoxItem = styled.div`
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`

const AspectRatio = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    padding-bottom: 150%;
    height: 0;
    display: block;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
  }
`

const Title = styled.div`
  position: absolute;
  z-index: 9;
  bottom: 0;
  left: 0;
  padding: 10px;
  color: #ffffff;
  text-transform: uppercase;
`
