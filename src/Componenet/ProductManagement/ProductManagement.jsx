import React, { useState } from 'react';
import ProducetTable from './ProducetTable';
import ProductForm from './ProductForm'

const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const handleProduct = (p) =>{
         setProducts([...products, p])
    }
    return (
        <div>
           <ProductForm handleProduct={handleProduct}></ProductForm>
            <ProducetTable products={products}></ProducetTable>
            
        </div>
    );
};

export default ProductManagement;