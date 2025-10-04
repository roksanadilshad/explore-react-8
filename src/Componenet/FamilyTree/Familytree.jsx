import React, { createContext, useState } from 'react';
import Grandparent from './GrandParent/Grandparent';

export const AssetContext = createContext("")
export const MoneyContext = createContext(0)

const Familytree = () => {
    const [money, setMoney] = useState(0)
    const asset = 'Diamond 💎';
    const newAsset = 'Gold 🪙';
    //console.log(money);
    
    return (
        <div>
            <h1>Family Tree</h1>
            <p>Total Family Money : {money}</p>
         <MoneyContext value={[money, setMoney]}>
            <AssetContext.Provider value={newAsset}>              
            <Grandparent asset={asset}></Grandparent>
            </AssetContext.Provider>
         </MoneyContext>
        </div>
    );
};

export default Familytree;