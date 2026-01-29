import { Outlet } from 'react-router'
import ScrollToTop from './components/common/ScrollToTop'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default App
