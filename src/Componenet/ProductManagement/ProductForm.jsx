import React, { useState } from 'react';

const Product = ({handleProduct}) => {
       const [error, setError] = useState("")
    const handleSubmit = (e) =>{
       e.preventDefault()
       //console.log(e.target);
       const name = e.target.name.value;
       const price = e.target.price.value;
       const quantity = e.target.quantity.value;
      // console.log(name, price, quantity);
       if(name.length === 0){
        setError('Please products Name')
        return
       }
       else if(price <= 0 && price !== isNaN){
        setError('Please provide a valid Price')
        return
       }
       else if(quantity <= 0){
        setError('Please provide a valid Quentity')
        return
       }
       else{setError('')}
       const newProduct = {
        name,
        price,
        quantity
       }
       //console.log(newProduct);
       handleProduct(newProduct)
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" placeholder='Product name' id="" />
                <input type="text" name="price" placeholder='Product price' id="" />
                <input type="number" name="quantity" placeholder='Product quantity' id="" />
                <input type="submit" name="submit" value='Submit' id="" />
            </form>
            <p><small>{error}</small></p>
            
        </div>
    );
};

export default Product;