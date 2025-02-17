import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

function ContadorDificil(props){
  return (
  <div className = "container">
    <div className = "reloj">
      <i className="fa-regular fa-clock"></i>
    </div>
    <div className = "sexto">{props.numeroSeis % 10}</div>
    <div className = "quinto">{props.numeroCinco % 10}</div>
    <div className = "cuarto">{props.numeroCuatro% 10}</div>
    <div className = "tercero">{props.numeroTres % 10}</div>
    <div className = "segundo">{props.numeroDos % 10}</div>
    <div className = "primero">{props.numeroUno % 10}</div>
  </div>);

}

ContadorDificil.propTypes = {
  numeroSeis: PropTypes.number,
  numeroCinco: PropTypes.number,
  numeroCuatro: PropTypes.number,
  numeroTres: PropTypes.number,
  numeroDos: PropTypes.number,
  numeroUno: PropTypes.number
};

const root = ReactDOM.createRoot(document.getElementById('root'));

function Logica() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seis = Math.floor(contador / 100000);
  const cinco = Math.floor(contador / 10000);
  const cuatro = Math.floor(contador / 1000);
  const tres = Math.floor(contador / 100);
  const dos = Math.floor(contador / 10);
  const uno = Math.floor(contador / 1);

  return (
    <React.StrictMode>
      <ContadorDificil 
        numeroSeis={seis} 
        numeroCinco={cinco} 
        numeroCuatro={cuatro} 
        numeroTres={tres} 
        numeroDos={dos} 
        numeroUno={uno} 
      />
    </React.StrictMode>
  );
}

root.render(<Logica />);