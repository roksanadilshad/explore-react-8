import React from 'react';
import SpecialOne from '../SpecialOne';

import Friend from '../Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h4>{name}</h4>
            {
             name === 'Rahim' && <SpecialOne asset={asset}></SpecialOne>
            }
            {
                name === 'Kodu' && <Friend
                ></Friend>
            }
        </div>
    );
};

export default Cousin;