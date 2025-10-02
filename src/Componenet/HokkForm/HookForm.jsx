import React from 'react';
import useInputField from '../../Hooks/USeInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
     const [email, emailOnChange] = useInputField('')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('sumbit', name, email);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input defaultValue={name} onChange={nameOnChange} type="text" name="name" placeholder='Name' />
                <br />
                <input defaultValue={email} onChange={emailOnChange} type="email" name="email" placeholder='Email' />
                <br />
                <input type="submit" name="submit" value='Submit' />
            </form>
        </div>
    );
};

export default HookForm;