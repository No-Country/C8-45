import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';

export default function SignUpForm(props:Props) {
  const [inputs, setInputs] = useState({})
  const {callback}=props;
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    callback(inputs);
  }

  return (
    <div className="flex flex-col">
      <form className='flex flex-col' onSubmit={handleSubmit}>
       <Input type="text" name='name' placeholder="Name" callback={handleChange} />
      <Input
        type="text"
        name='lastName'
        placeholder="Last Name"
        callback={handleChange}
      />
      <Input type="text" name='email' placeholder="Email" callback={handleChange} />
      <InputPassword callback={handleChange} />
      <input type='submit' className='p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700'/>
      </form>
      
    </div>
  );
}

type Props={
  callback:(inputs:any)=>void;
}
