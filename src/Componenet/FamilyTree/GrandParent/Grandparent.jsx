
import Father from '../Father';
import Aunt from '../Aunt';
import Uncle from '../Uncle';
import './Grandparent.css';


const GrandParent = ({asset}) => {
    
    return (
        <div className='Family-tree'>
            <h2>Grand Parent</h2>
            <div className='siblings'>
                <Father asset={asset}></Father>
            <Aunt></Aunt>
            <Uncle></Uncle>
            </div>
        </div>
    );
};

export default GrandParent;