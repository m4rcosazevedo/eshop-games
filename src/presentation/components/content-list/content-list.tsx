import React, { useEffect, useState } from 'react'
import { Container } from '@/presentation/components'
import styled from 'styled-components'
import ContentItem from '@/presentation/components/content-item/content-item'
import { api } from '@/infra/http/axios-client'
import { ContentItemModel } from '@/models/content-item'

const ContentList: React.FC = () => {
  const [error, setError] = useState<string>('')
  const [contents, setContents] = useState<ContentItemModel[]>([])

  useEffect(() => {
    api.get('/slider?limit=4').then((response) => {
      setContents(response.data)
    }).catch(error => {
      console.error('Ocorreu um erro ao carregar os dados.', error)
      setError('Ocorreu um erro ao carregar os dados.')
    })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <Box>
      <Container>
        <h1>Minha Biblioteca</h1>
        <Flex>
          {contents.map((content) => (
            <Col key={content.id} >
              <ContentItem data={{
                image: content.image || null,
                title: content.title
              }} />
            </Col>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default ContentList

const Box = styled.div`
  padding: 75px 0;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`

const Col = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  
  @media (min-width: 576px) {
    max-width: 50%;
  }

  @media (min-width: 992px) {
    max-width: 33%;
  }

  @media (min-width: 1200px) {
    max-width: 25%;
  }
`
