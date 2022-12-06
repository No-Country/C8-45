import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useDeleteCompanyMutation, useUpdateCompanyMutation } from '../../redux/api/companyApi';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const BusinessSettings = () => {
  const [inputs, setInputs] = useState({});

  const [updateCompany, { isLoading, isSuccess, error, isError, data }] = useUpdateCompanyMutation();
  const [deleteCompany] = useDeleteCompanyMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateCompany(inputs);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };

  const handleDelete = () => {
    deleteCompany(null);
  };

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
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-sm">
          <Input type="text" name="name" placeholder="Name" callback={handleChange} />
          <Input type="text" name="descriptioni" placeholder="Description" callback={handleChange} />
          <Input type="text" name="address" placeholder="Address" callback={handleChange} />
          <Input type="text" name="country" placeholder="Country" callback={handleChange} />
          <Input type="text" name="city" placeholder="City" callback={handleChange} />
        </div>
        <button
          type="submit"
          className="my-2 bg-black text-white text-lg px-10 p-3 rounded-full hover:bg-gray-800"
        >
          {isLoading ? (
            <span className="text-center text-3xl animate-spin">
              <CgSpinner />
            </span>
          ) : (
            <span>Save changes</span>
          )}
        </button>
      </form>
      <div className="py-8">
        <div className="font-bold font-title text-xl my-4">Delete Account</div>
        <div className="pb-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <Button callback={handleDelete} type="Secondary" value="Delete Account" />
      </div>
    </div>
  );
};

export default BusinessSettings;
