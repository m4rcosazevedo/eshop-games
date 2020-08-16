import React from 'react'
import SliderItem from '@/presentation/components/slider/slider-item'
import { Items, Wrap } from '@/presentation/components/slider/slider-styles'

export type SliderProps = {
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
  const contents: SliderProps[] = []

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
