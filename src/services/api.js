import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getCategorias = async () => {
  const response = await axios.get(`${API_URL}/categorias/`);
  return response.data;
};

export const getProductos = async () => {
  const response = await axios.get(`${API_URL}/productos/`);
  return response.data;
};

export const getNovedades = async () => {
  const response = await axios.get(`${API_URL}/productos/?es_novedad=true`);
  return response.data;
};

export const getOriginals = async () => {
  const response = await axios.get(`${API_URL}/productos/?subcategoria=1`);
  return response.data;
};

export const getSidekicksOriginals = async () => {
  const response = await axios.get(`${API_URL}/productos/?subcategoria=3`);
  return response.data;
};

export const getSubcategorias = async () => {
  const response = await axios.get(`${API_URL}/subcategorias/`);
  return response.data;
};

export const getTallasRopa = async () => {
  const response = await axios.get(`${API_URL}/tallas-ropa/`);
  return response.data;
};

export const getTallasZapatilla = async () => {
  const response = await axios.get(`${API_URL}/tallas-zapatilla/`);
  return response.data;
};

export const getProductosPorCategoria = async (categoriaId) => {
  const response = await axios.get(`${API_URL}/productos/?categoria=${categoriaId}`);
  return response.data;
};