import Input from '../atoms/Input';
import InputPassword from '../atoms/InputPassword';
import ListPhoneCode from '../../assets/data/phoneCode.json';
import { useState } from 'react';

export default function SignUpBusinessForm(props: Props) {
  const { callback } = props;
  const [inputs, setInputs] = useState({ phone: '' });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(inputs);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "countryCode") {
      setInputs(values => ({ ...values, phone: `${value}-${values.phone.split('-')[1]}` }));
    } else if (name === "phoneNumber") {
      setInputs(values => ({ ...values, phone: `${values.phone.split('-')[0]}-${value}` }));
    } else {
      setInputs(values => ({ ...values, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Input name="name" type="text" placeholder="Name" callback={handleChange} />
        <Input name="email" type="text" placeholder="Email" callback={handleChange} />
        <Input name="website" type="text" placeholder="Website" callback={handleChange} />
        <Input name="description" type="text" placeholder="Description" callback={handleChange} />
        <Input name="workEmail" type="text" placeholder="Work email" callback={handleChange} />
        <InputPassword callback={handleChange} />

        <Input name="country" type="text" placeholder="Country" callback={handleChange} />
        <Input name="city" type="text" placeholder="City" callback={handleChange} />
        <Input name="address" type="text" placeholder="Address" callback={handleChange} />
        <div className='flex flex-row gap-5'>
          <select name="countryCode" className='w-1/3 my-2 block text-sm p-3 bg-gray-100 border border-slate-300 rounded-full shadow-sm placeholder-slate-500' onChange={handleChange}>
            {ListPhoneCode.data.map((item: any, index: number) => (
              <option key={index} value={item.phone_code} >
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

type Props = {
  callback: (inputs: any) => void;
};
