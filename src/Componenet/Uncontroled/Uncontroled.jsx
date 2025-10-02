import React, { useRef } from 'react';

const Uncontroled = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password);

        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input ref={emailRef} type="email" placeholder='Email' />
                <br />
                <input ref={passwordRef} type="password" placeholder='password' />
                <br />
                <input type="submit" name="submit" value="Submit" id="" />
            </form>
            
        </div>
    );
};

export default Uncontroled;