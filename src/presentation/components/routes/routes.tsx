import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
