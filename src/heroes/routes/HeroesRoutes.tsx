import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/NavBar"
import  {MarvelPage, DcPage, SearchPage, HeroPage} from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path= "DC" element={<DcPage/>}/>
            <Route path= "/Search" element={<SearchPage/>}/>
            <Route path ="/hero/:id" element = {<HeroPage/>}/>
            <Route path= "/" element={<Navigate to="/marvel"/>}/>
        </Routes>
        </div>
    </>
  )
}
