import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';
 export default function LogInForm(props:Props) {
  const [inputs, setInputs] = useState({})
  const {callback}=props;
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    callback(inputs)
  }
  
  return (
    <div>
      <form
        action="POST"
      onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <Input type="email" placeholder="Email" callback={handleChange} />
        <InputPassword callback={handleChange} />
        <input type='submit' className='p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700'/>
        <Link
          to="password-recovery"
          className="my-3 text-black flex justify-center"
        >
          Forgot password?
        </Link>
      </form>
    </div>
  );
}
type Props={
  callback:(inputs:any)=>void;
}
