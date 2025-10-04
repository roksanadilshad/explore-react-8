import React, { useContext } from 'react';
import { AssetContext } from './Familytree';

const SpecialOne = ({special, asset}) => {
    const newAsset = useContext(AssetContext)
    console.log(newAsset);
    
    return (
        <div>
            <h5>{special}</h5>
            <p><small>Asset : {asset}</small></p>
            <p><small>New Asset : {newAsset}</small></p>

            
        </div>
    );
};

export default SpecialOne;