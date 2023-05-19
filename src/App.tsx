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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;