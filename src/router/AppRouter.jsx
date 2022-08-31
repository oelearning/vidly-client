import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClientsPage } from '../pages'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clients' element={<ClientsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
