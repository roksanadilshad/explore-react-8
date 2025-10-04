import React from 'react';
import SpecialOne from './SpecialOne';

const MySelf = ({asset}) => {
    return (
        <div>
            <h4>My Self</h4>
            <div>
                <SpecialOne special='Tanvir' asset={asset}></SpecialOne>
            </div>
        </div>
    );
};

export default MySelf;