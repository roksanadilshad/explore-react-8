import React, { use } from 'react';
import { MoneyContext } from './Familytree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h4>Brother</h4>
            <button onClick={() => setMoney(money + 1000)}>Add Money</button>
        </div>
    );
};

export default Brother;