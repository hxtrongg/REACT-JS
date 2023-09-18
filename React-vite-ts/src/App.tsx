
import './Apps.css'
import Product from "./Pages/Product"
import AttribuesColor from "./components/AtributesColor"
import ColorChangeButton from "./components/AtributesColor/ChangeColor"
import Buttons from "./components/Button"
import Guarantee from "./components/Guarantee"
import DefaultLayout from "./components/Layouts/DefaultLayouts"
import Lighting from "./components/Lighting"
import VideosList from "./components/ListVideos"
import Medias from "./components/Medias"
import ProductsList from "./components/Products"

function App() {

  return (
    <>
    <Product/>
    {/* <DefaultLayout >
    <ColorChangeButton />
    <VideosList/>
    <Medias />
    <AttribuesColor/>
    <Guarantee />
    <Buttons />
    <ProductsList />
    <Lighting />
    </DefaultLayout> */}
    </>
  )
}

export default App

