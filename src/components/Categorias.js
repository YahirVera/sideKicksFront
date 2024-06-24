import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/api';
import './Categorias.css';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };

    fetchCategorias();
  }, []);

  return (
    <section className="categorias">
      <h2>Categorías</h2>
      <div className="categorias-items">
        {categorias.map(categoria => (
          <div key={categoria.id} className="categoria-item">
            <h3>{categoria.nombre}</h3>
            <p>{categoria.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;