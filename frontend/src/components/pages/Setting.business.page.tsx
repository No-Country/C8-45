import { useState } from 'react';
import { useAppSelector } from '../../redux/store';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const BusinessSettings = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [inputs, setInputs] = useState({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <div>
      <span className="font-bold m-3 text-xl">Company Settings</span>
      <div className="flex justify-between m-3">
        <div className="flex flex-col">
          <Button
            callback={() => { }}
            type="Secondary"
            value="New Profile Picture"
          />
          <Button
            callback={() => { }}
            type="Tertiary"
            value="Remove Profile Picture"
          />
        </div>
      </div>
      <div className="flex flex-col max-w-sm">
        <Input type="text" name="email" placeholder="Email" callback={handleChange} />
        <Input type="text" name="name" placeholder="Name" callback={handleChange} />
        <Input type="text" name="website" placeholder="Website" callback={handleChange} />
        <Input type="text" name="country" placeholder="Country" callback={handleChange} />
        <Input type="text" name="language" placeholder="Language" callback={handleChange} />
      </div>
      <Button callback={() => { }} type="Secondary" value="Save Changes" />
      <div className="py-8">
        <div className="font-bold font-title text-xl my-4">Delete Account</div>
        <div className="pb-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <Button callback={() => { }} type="Secondary" value="Delete Account" />
      </div>
    </div>
  );
};

export default BusinessSettings;
