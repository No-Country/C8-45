import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginCompanyMutation } from '../../redux/api/authApi';
import { setCompanyCredentials } from '../../redux/features/userSlice';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';

export default function LogInBusinessForm() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [loginCompany, { isLoading, isSuccess, error, isError, data }] =
    useLoginCompanyMutation();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await loginCompany(inputs).unwrap();
    localStorage.setItem('auth_token', data.token);
    dispatch(setCompanyCredentials(data));
  };

  return (
    <div className="flex flex-col">
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <Input type="text" name='email' placeholder="Email" callback={handleChange} />
        <InputPassword callback={handleChange} />
        <input type='submit' value='Log In' className='p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700' />
      </form>
    </div>
  );
};
