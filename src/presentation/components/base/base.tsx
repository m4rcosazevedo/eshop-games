import React, { ReactNode } from 'react'
import { Footer, Header } from '@/presentation/components'

type Props = {
  children?: ReactNode
}

const Base: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Base
