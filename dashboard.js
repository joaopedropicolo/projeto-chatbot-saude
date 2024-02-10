import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom';

export default function Dashboard () {
  return (
    <div>
      <img width="100%" height="auto" src="./public/images/bemvindo3.png" />
      <h2>Este é o painel do nosso chatbot! </h2>
      <p>Nele estão contidas diversas informações que são inseridas por usuários <br></br> como nome, email, tipo sanguíneo e suas avaliações com uma nota dada de <br></br> acordo com o desempenho do chatbot. </p>

      <Link to="/admin/resources/usuarios">
      <img src="./public/images/usuariosGota.png" alt="Usuários" width="100px" height="100px" /></Link>

      <Link to="/admin/resources/usuarios">
      <img src="./public/images/pacientesGota.png" alt="Pacientes" width="100px" height="100px" /></Link>

      <Link to="/admin/resources/agendamentos">
      <img src="./public/images/agendamentosGota.png" alt="Agendamentos" width="100px" height="100px" /></Link>

      <Link to="/admin/resources/informações">
      <img src="./public/images/informaçõesGota.png" alt="Informações" width="100px" height="100px" /></Link>

      <Link to="/admin/resources/avaliações">
      <img src="./public/images/avaliaçõesGota.png" alt="Avaliações" width="100px" height="100px" /></Link>
      
    </div>
  )
}
