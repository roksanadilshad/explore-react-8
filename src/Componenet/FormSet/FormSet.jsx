import React from 'react';

const FormSet = () => {
    const handleSubmit = (e) =>{
     e.preventDefault();
     console.log(e.target.name.value);
     console.log(e.target.email.value);
     //e.target.[name of the input fild].value
    }
    return (
        <div onSubmit={handleSubmit}>
            <form action=""> 
                <input type="text" name="name" placeholder='Your Name'  id="" />
                <br />
                <input type="email" name="email" id="" placeholder='Your email'/>
                <br />
                <input type="submit" name="submit"
                 value="submit" id="" />
            </form>
        </div>
    );
};

export default FormSet;