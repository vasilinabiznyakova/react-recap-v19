import axios from 'axios';
import { useEffect, useState } from 'react';

import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHOmeData = async () => {
      const response = await axios('/api/products');
      setProducts(response.data);
    };

    getHOmeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className='home-page'>
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
