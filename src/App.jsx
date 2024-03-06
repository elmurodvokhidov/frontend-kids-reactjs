import { useContext } from 'react';
import { Context } from './context/Context';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EditOne from './components/EditOne';
import AddNew from './components/AddNew';
import Navbar from './components/Navbar';
import Wishlist from './components/Wishlist';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add' element={<AddNew />} />
        <Route path='edit/:id' element={<EditOne />} />
        <Route path='wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  )
}

export default App