import React, { createContext } from 'react';
import Grandparent from './GrandParent/Grandparent';

export const AssetContext = createContext("")

const Familytree = () => {

    const asset = 'Diamond 💎';
    const newAsset = 'Gold 🪙'
    return (
        <div>
            <h1>Family Tree</h1>

            <AssetContext.Provider value={newAsset}>
                
            <Grandparent asset={asset}></Grandparent>
            </AssetContext.Provider>
        </div>
    );
};

export default Familytree;