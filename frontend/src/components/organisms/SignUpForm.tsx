import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event?.target.value);
};
  
const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setLastName(event?.target.value);
};

const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event?.target.value);
};

const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event?.target.value);
};

  return (
    <div className='flex flex-col'>
      <Input type='text' placeholder='Name' callback={handleChangeName} />
      <Input type='text' placeholder='Last Name' callback={handleChangeLastName} />
      <Input type='text' placeholder='Email' callback={handleChangeEmail} />
      <InputPassword callback={handleChangePassword} />
      <Button value={'Sign Up'} type={'Primary'} callback={()=>{}} />
    </div>
  )
}
