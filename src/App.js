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

      {/* header - Search input area*/}
      <Header />

      {/* Details - home/about/contact*/}
      <Details />

      {/* Items - automatic roduct slider*/}
      <Items />

      {/* Carousal - 2 images*/}
      <Carousal />

      {/* Top categories section */}
      <Categories />

    </div>
  );
}

export default App;
