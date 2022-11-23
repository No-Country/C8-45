import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';
import ListPhoneCode from '../../assets/data/phoneCode.json';
import { useState } from 'react';

export default function SignUpBusinessForm() {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Input name="website" type="text" placeholder="Website" callback={handleChange} />
        <Input name="company" type="text" placeholder="Company Name" callback={handleChange} />
        <Input name="firstName" type="text" placeholder="First Name" callback={handleChange} />
        <Input name="lastName" type="text" placeholder="Last Name" callback={handleChange} />
        <Input name="jobTitle" type="text" placeholder="Job Title" callback={handleChange} />
        <Input name="email" type="text" placeholder="Work Email" callback={handleChange} />
        <InputPassword callback={handleChange} />

        <div className='flex flex-row gap-5'>
          <select name="countryCode" className='w-1/3 my-2 block text-sm p-3 bg-gray-100 border border-slate-300 rounded-full shadow-sm placeholder-slate-500' onChange={handleChange}>
            {ListPhoneCode.data.map((item: any, index: number) => (
              <option key={index} value={item.code} >
                {item.name + ' +' + item.phone_code}
              </option>
            ))}
          </select>
          <input name="phoneNumber" type="text" placeholder="Phone Number" onChange={handleChange} className="w-2/3 my-2 block p-3 bg-gray-100 border border-slate-300 rounded-full shadow-sm placeholder-slate-500 gap-2" />         
        </div>

        <input type='submit' value={'Create Account'} className='p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700' />
      </div>
    </form>
  );
};
