import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/api/authApi';
import { setCredentials } from '../../redux/features/userSlice';
import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';
export default function LogInForm() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isSuccess, error, isError, data }] =
    useLoginUserMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await loginUser(inputs).unwrap();
    localStorage.setItem('auth_token', data.token);
    dispatch(setCredentials(data));
    if(isSuccess){
      console.log("WOrks")
    }
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit} className="flex flex-col">
        <Input
          disabled={isLoading && true}
          name="email"
          type="email"
          placeholder="Email"
          callback={handleChange}
        />
        <InputPassword callback={handleChange} disabled={isLoading && true} />
        <button
          type="submit"
          className="p-3 bg-blue-600 my-2 text-center flex justify-center text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700"
        >
          {isLoading ? (
            <span className="text-center text-3xl animate-spin">
              <CgSpinner />
            </span>
          ) : (
            <span>Sign Up</span>
          )}
        </button>
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
