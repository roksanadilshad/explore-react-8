import React from 'react';

const FormAction = () => {
    const handleAction =(formData) =>{
        console.log(formData.get("email"));
        //Not importent for now
    }
    return (
        <div>
            <form action={handleAction}> 
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

export default FormAction;