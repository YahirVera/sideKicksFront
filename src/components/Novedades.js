import React, { useEffect, useState } from 'react';
import { getNovedades } from '../services/api';

const Novedades = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const novedades = await getNovedades();
                setProductos(novedades);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Novedades</h2>
            <div className="productos-lista" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {productos.map(producto => (
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

export default Novedades;