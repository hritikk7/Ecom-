import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import {useState} from 'react';
// screens
import HomeScreen from './components/screens/HomeScreen';
import CartScreen from './components/screens/CartScreen';
import ProductScreen from './components/screens/ProductScreen';

// components
import NavBar from './components/NavBar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <NavBar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
        <main>
          <Routes>
              <Route exact path="/" element={<HomeScreen />}/>              
              <Route exact path="/product/:id" element={<ProductScreen />}/>
              <Route exact path="/cart" element={<CartScreen/>}/>
          </Routes>
        </main>
    </Router>
  );
}

export default App;
 