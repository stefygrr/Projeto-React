import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;