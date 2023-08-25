import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from './Pages/Home/Home';
import Registeration from './Pages/Registeration/Registeration';
import Login from './Pages/Login/Login';
import {store , persistor} from './Pages/Store/Store';
import Navbar from './Components/Navbar';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  // const data = fs.readFileSync('./db.json', 'utf8');
// console.log(data)
  // const {store , persistor} = configuration();
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading = {null} persistor={persistor}>

      <ToastContainer />
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registeration" element={<Registeration/>} />
        <Route path="/Login" element={<Login/>} />
    const data = fs.readFileSync('./db.json', 'utf8');

      </Routes>
      </BrowserRouter>
        </PersistGate>
      </Provider>
          </div>
  );
}

export default App;
