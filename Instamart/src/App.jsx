import Body from "./components/Body"
import CategoryName from "./components/CategoryName"
import Header from "./components/Header"
import Hero from "./components/Hero"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"


function App() {
  

  return (
    <div className="w-full">
    <Header />
    <Outlet />
    {/* <Hero />
    <Body /> */}
    </div>
  )
}





export default App
