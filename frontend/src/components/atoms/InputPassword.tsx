import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function InputPassword(props: Props) {
  const { callback } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Password"
        className="my-2 block p-3 bg-gray-100 border border-slate-300 rounded-full text-md shadow-sm placeholder-slate-500 gap-2"
        onChange={callback}
      />
      <div className="icon_button relative ">
        <button
          type="button"
          onClick={handleClickShowPassword}
          className="absolute bottom-5 right-4 bg-transparent focus:bg-transparent focus:outline-none focus:border-transparent hover:border-transparent"
        >
          <span className="text-xl z-0">
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </button>
      </div>
    </div>
  );
}

type Props = {
  // eslint-disable-next-line react/require-default-props
  callback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
