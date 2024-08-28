import { Routes, Route, Link } from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contacts} from "./pages/Contacts"
import {Stocks} from "./pages/Stocks"
import {Dap} from "./pages/Dap"
import {Catalog} from "./pages/Catalog"
import {Cart} from "./pages/Cart"
import {Notfoundpage} from "./pages/Notfoundpage"
import {Layout} from "./components/Layout"

function App() {


  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contacts' element={<Contacts/>} />
                <Route path='/dap' element={<Dap/>} />
                <Route path='/stocks' element={<Stocks/>} />
                <Route path='/catalog' element={<Catalog/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<Notfoundpage/>} />
            </Route>
        </Routes>
    </>
  )
}

export default App
