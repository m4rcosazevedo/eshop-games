import React, { useEffect, useState } from 'react'
import SliderItem from '@/presentation/components/slider/slider-item'
import { Items, Wrap } from '@/presentation/components/slider/slider-styles'
import { api } from '@/infra/http/axios-client'
import { ContentItemModel } from '@/models/content-item'

const Slider: React.FC = () => {
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
    <Wrap>
      <Items>
        {contents.map((content) => (
          <SliderItem content={content} key={content.id} />
        ))}
      </Items>
    </Wrap>
  )
}

export default Slider
