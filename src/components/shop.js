import React, { useEffect, useState } from 'react';
import { getCategorias, getSubcategorias, getTallasRopa, getTallasZapatilla, getProductos } from '../services/api';

const Shop = () => {
    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);
    const [tallasRopa, setTallasRopa] = useState([]);
    const [tallasZapatilla, setTallasZapatilla] = useState([]);
    const [productos, setProductos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('Todas');
    const [filtroSubcategoria, setFiltroSubcategoria] = useState('Todas');
    const [filtroTallaRopa, setFiltroTallaRopa] = useState('Todas');
    const [filtroTallaZapatilla, setFiltroTallaZapatilla] = useState('Todas');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categorias = await getCategorias();
                const subcategorias = await getSubcategorias();
                const tallasRopa = await getTallasRopa();
                const tallasZapatilla = await getTallasZapatilla();
                const productos = await getProductos();

                setCategorias(categorias);
                setSubcategorias(subcategorias);
                setTallasRopa(tallasRopa);
                setTallasZapatilla(tallasZapatilla);
                setProductos(productos);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);

    const filtrarProductos = () => {
        return productos.filter(producto => {
            const categoriaMatch = filtroCategoria === 'Todas' || producto.categoria === filtroCategoria;
            const subcategoriaMatch = filtroSubcategoria === 'Todas' || producto.subcategoria === filtroSubcategoria;
            const tallaRopaMatch = filtroTallaRopa === 'Todas' || producto.tallas_ropa.includes(filtroTallaRopa);
            const tallaZapatillaMatch = filtroTallaZapatilla === 'Todas' || producto.tallas_zapatilla.includes(filtroTallaZapatilla);
            return categoriaMatch && subcategoriaMatch && tallaRopaMatch && tallaZapatillaMatch;
        });
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Todos los Productos</h2>
            <div style={{ display: 'flex', padding: '20px' }}>
                <div style={{ width: '200px', marginRight: '40px' }}>
                    <h3>Filtrar Productos</h3>
                    <div>
                        <label>Categoría:</label>
                        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
                            <option value="Todas">Todas</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Subcategoría:</label>
                        <select value={filtroSubcategoria} onChange={(e) => setFiltroSubcategoria(e.target.value)}>
                            <option value="Todas">Todas</option>
                            {subcategorias.map(subcategoria => (
                                <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Talla Ropa:</label>
                        <select value={filtroTallaRopa} onChange={(e) => setFiltroTallaRopa(e.target.value)}>
                            <option value="Todas">Todas</option>
                            {tallasRopa.map(talla => (
                                <option key={talla.id} value={talla.id}>{talla.talla}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Talla Zapatilla:</label>
                        <select value={filtroTallaZapatilla} onChange={(e) => setFiltroTallaZapatilla(e.target.value)}>
                            <option value="Todas">Todas</option>
                            {tallasZapatilla.map(talla => (
                                <option key={talla.id} value={talla.id}>{talla.talla}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="productos-lista" style={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
                    {filtrarProductos().map(producto => (
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
        </div>
    );
};

export default Shop;
