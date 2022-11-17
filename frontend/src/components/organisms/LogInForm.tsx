import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  return (
    <div className="flex flex-col">
      <Input type="email" placeholder="Email" callback={handleChangeEmail} />
      <InputPassword callback={handleChangePassword} />
      <Button value="Log In" type="Primary" callback={() => {}} />
      <Link
        to="password-recovery"
        className="my-3 text-black flex justify-center"
      >
        Forgot password?
      </Link>
    </div>
  );
}
