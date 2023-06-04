import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from "react-redux";
import store from "./store/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const TestComponent: React.FC = () => {
  return <div>Hello, world!</div>;
}



function App() {

  return (
    <Provider store={store} >
      <ToastContainer />
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
        <Route path="/temas" element={<ListaTemas/>}/>
        <Route path="/posts" element={<ListaPostagens/>}/>
        <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  )
}

export default App;