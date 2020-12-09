import React, { useState } from 'react'
import {
  Cover, LogoWrap, Logo, Item, ArrowWrap, MetaInfo, Row, Column, Space, IndicatedFor,
  ArrowWrapCenter, ClosedInfo, Description, PrincipalInformation
} from '@/presentation/components/slider/slide-item-styles'
import { Arrow, Button, Like } from '@/presentation/components'
import { ContentItemModel } from '@/models/content-item'

interface Props {
  content: ContentItemModel
}

const SliderItem: React.FC<Props> = ({ content }: Props) => {
  const [active, setActive] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const toggleActive = (): void => {
    setActive(!active)
  }

  const toggleOpen = (): void => {
    setOpen(!open)
  }

  return (
    <Item active={active}>
      <Cover src={content.image} alt={content.title} onClick={toggleActive}/>
      <MetaInfo>
        <LogoWrap>
          <ArrowWrap onClick={toggleActive}>
            <Arrow height={25} width={25} color="#f2f2f2" position="left" />
          </ArrowWrap>
          <Logo src={content.logo} alt={content.title} />
        </LogoWrap>
        <PrincipalInformation>
          <Row vertical={15}>
            <Column larger={2.5}>
              <Button type="button">Comprar R$ {content.price.toString().replace('.', ',')}</Button>
            </Column>
            <Column larger={2.5}>
              <h3>Lançamento {new Date(content.coming).toLocaleDateString('pt', {
                day: 'numeric', month: 'short', year: 'numeric'
              }).replace(/ de /g, ' ').replace('.', '')}</h3>
            </Column>
            <Column larger={2.5} position="end" alignText="right">
              <Like width={25} height={25} color="#ffffff" />
            </Column>
          </Row>
          <Space color="#ffffff" />
          <Row vertical={15}>
            <Column larger={2.5}>
              <IndicatedFor>
                <img src={content.indicatedImage} alt="Maiores de 18 anos" />
                <div dangerouslySetInnerHTML={{ __html: content.indicatedFor }} />
              </IndicatedFor>
            </Column>
            <Column larger={2.5} position="end" alignText="right">
              <div dangerouslySetInnerHTML={{ __html: content.extras }} />
            </Column>
          </Row>
          <Row>
            <Column larger={10} alignText="center">
              <ArrowWrapCenter onClick={toggleOpen}>
                <Arrow height={25} width={25} color="#f2f2f2" position="down" />
              </ArrowWrapCenter>
            </Column>
          </Row>
        </PrincipalInformation>
        <ClosedInfo active={open}>
          <Row>
            <Column larger={10} alignText="center">
              <ArrowWrapCenter onClick={toggleOpen}>
                <Arrow height={25} width={25} color="#f2f2f2" position="up" />
              </ArrowWrapCenter>
            </Column>
          </Row>
          <Description dangerouslySetInnerHTML={{ __html: content.description }} />
        </ClosedInfo>
      </MetaInfo>
    </Item>
  )
}

export default SliderItem
