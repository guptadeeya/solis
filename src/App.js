import './App.css';
import Navbar from './containers/Navbar'
import Header from './containers/Header'
import Details from './containers/Details'
import Items from './components/Home/Items'
import Carousal from './components/Home/Carousal'
import Categories from './components/Home/Categories'

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

      <Categories />


{/* ************************************************** */}
      {/* <ProductSlider/> */}
      {/* <Nav/> */}
    </div>
  );
}

export default App;
