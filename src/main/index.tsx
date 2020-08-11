import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.scss'

const App: React.FC = () => {
  return <p>Oi</p>
}

ReactDOM.render(
  <App/>,
  document.getElementById('main')
)
