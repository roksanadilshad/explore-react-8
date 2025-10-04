import React, { use } from 'react';
import { MoneyContext } from './Familytree';

const Friend = () => {
     const [money, setmoney] = use(MoneyContext)
     console.log(money);
     
    return (
        <div>
            <h3>Friend</h3>
            <p><small>Show Off:{money}</small></p>
        </div>
    );
};

export default Friend;