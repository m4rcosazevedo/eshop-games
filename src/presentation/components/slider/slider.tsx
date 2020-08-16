import React, { useEffect, useState } from 'react'
import SliderItem from '@/presentation/components/slider/slider-item'
import { Items, Wrap } from '@/presentation/components/slider/slider-styles'
import { api } from '@/infra/http/axios-client'

export interface SliderProps {
  id: number
  title: string
  image: string
  logo: string
  price: number
  coming: Date
  indicatedFor: string
  indicatedImage: string
  extras: string
  description: string
}

const Slider: React.FC = () => {
  const [error, setError] = useState<string>('')
  const [contents, setContents] = useState<SliderProps[]>([])

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
