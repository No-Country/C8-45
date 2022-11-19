import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';

export default function LogInForm() {
  const [inputs, setInputs] = useState({})
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }
  return (
    <div>
      <form
        action="
      "
        className="flex flex-col"
      >
        <Input type="email" placeholder="Email" callback={handleChange} />
        <InputPassword callback={handleChange} />
        <Button value="Log In" type="Primary" callback={() => {}} />
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
