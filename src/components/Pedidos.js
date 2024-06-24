import React from 'react';
import './Pedidos.css';  // Importa el archivo CSS para estilos

const Pedidos = () => {
  return (
    <div className="pedidos-container">
      <h2 className="pedidos-title">Pedidos</h2>
      <div className="pedidos-content">
        <p>
          Nos encargamos de traer productos desde Estados Unidos. Solo deben contactarse con nosotros y consultar acerca del artículo, puede ser alguna prenda, zapatilla o cualquier cosa.
        </p>
        <div className="pedidos-steps">
          <h3>1. Identificar su producto</h3>
          <p>Encuentra el producto que deseas adquirir.</p>
          <h3>2. Contactarse y acordar</h3>
          <p>Contacta con nosotros a través de WhatsApp, Instagram o TikTok y acuerda la compra.</p>
          <h3>3. Recibir</h3>
          <p>Recibe tu producto. Todos los artículos son verificados y 100% originales por nosotros.</p>
        </div>
        <div className="pedidos-contact">
          <h3>Contáctanos</h3>
          <p>WhatsApp, Instagram, TikTok</p>
        </div>
        <img src="/path/to/reference/image.jpg" alt="Referencia" className="pedidos-image" />
      </div>
    </div>
  );
};

export default Pedidos;