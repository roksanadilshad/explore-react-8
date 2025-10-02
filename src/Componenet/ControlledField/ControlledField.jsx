import React, { useState } from 'react';


const ControlledField = () => {
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log();
        //password.length < 6 ? setError("6 Characters or more") : setError("")
      
    }

    const handlePasswordOnChange = (i) =>{
      setPassword(i.target.value);
      password.length < 6 ? setError("6 Characters or more") : setError("")
      //per input per stat will diclier
    }
    return (
         <div onSubmit={handleSubmit}>
            <form action=""> 
                <input type="text" name="name" placeholder='Your Name' />
                <br />
               <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder='Password' required/>
               <p>{error}</p>
                <input type="submit" name="submit"
                 value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;