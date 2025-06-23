import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Auth from './pages/Auth';



function App() {
  const [token] = useToken()
  const {modal} = useSelector(state => state.modal)

  // console.log(token.token, "token");

  return (
    <div>
      <BrowserRouter>
      {token?.token && <Navbar/>}
      {modal && <Modal/>}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
