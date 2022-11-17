import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col border p-3 rounded-xl">
      <input
        onChange={handleChangeEmail}
        className="p-3 rounded-2xl my-3 text-gray-500 bg-gray-100 border-solid border border-gray-300"
        placeholder="Email"
      />
      <div className="relative">
        <input
          onChange={handleChangePassword}
          className="p-3 rounded-2xl my-3 text-gray-500 bg-gray-100 border-solid border border-gray-300 w-full"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
        />
        <div className="icon_button relative ">
          <button
            type="button"
            onClick={handleClickShowPassword}
            className="absolute bottom-6 right-4 bg-transparent focus:bg-transparent focus:outline-none focus:border-transparent hover:border-transparent"
          >
            <span className="text-xl">
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </button>
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-600 text-white text-xl my-3 p-3 rounded-2xl hover:bg-blue-700"
      >
        Log in
      </button>
      <Link
        to="password-recovery"
        className="my-3 text-black flex justify-center"
      >
        Forgot password?
      </Link>
    </div>
  );
}
