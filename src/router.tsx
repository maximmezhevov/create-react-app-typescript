import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { App } from './app'
import { Typescript } from './_null/typescript/typescript'

export const Router:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Typescript />} />
      </Route>
    </Routes>
  )
}