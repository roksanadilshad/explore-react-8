import React from 'react';

const ProducetTable = ({products}) => {
    return (
        <div>
            <h3>products : {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quentity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         products.map((product, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                
                            </tr>
                         )
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default ProducetTable;