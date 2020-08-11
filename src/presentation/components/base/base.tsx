import React from 'react'
import { Footer, Header } from '@/presentation/components'

type Props = React.HTMLAttributes<HTMLDivElement>

const Base: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Base
