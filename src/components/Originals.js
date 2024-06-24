import React, { useEffect, useState } from 'react';
import { getSidekicksOriginals } from '../services/api';

const Originals = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const originals = await getSidekicksOriginals();
            setProductos(originals);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Sidekicks Originals</h2>
            <div className="productos-lista" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {productos.slice(0, 8).map(producto => (  // Mostramos solo 8 productos
                    <div key={producto.id} className="producto" style={{
                        margin: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: '10px',
                        width: '200px',
                        textAlign: 'center'
                    }}>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: 'auto' }} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>{producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Originals;