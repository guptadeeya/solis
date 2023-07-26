import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Details from './components/Details'
import Items from './components/Items'
import Carousal from './components/Carousal'
import TopProducts from './components/TopProducts'
// import ProductSlider from './components/ProductSlider'
// import Nav from './components/Nav'

function App() {
  return (
    <div className="App">

      {/* navbar - coupon area */}
      <Navbar />

      {/* header */}
      <Header />

      {/* Details */}
      <Details />
      {/* <Nav/> */}

      {/* Items-categories */}
      <Items />

      {/* Carousal*/}
      <Carousal />
      
      {/* TopProducts*/}
      <TopProducts />


{/* ************************************************** */}
      {/* <ProductSlider/> */}
      {/* <Nav/> */}
    </div>
  );
}

export default App;
