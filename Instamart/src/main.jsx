import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import CategoryName from './components/CategoryName.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        path:"/", 
        element: <Body />
      },
      {
        path:"/category/:categoryname", 
        element: <CategoryName />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
)
