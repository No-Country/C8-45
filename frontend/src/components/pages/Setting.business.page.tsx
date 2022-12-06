import { useState } from 'react';
import { useDeleteCompanyMutation, useGetCompanyQuery, useUpdateCompanyMutation } from '../../redux/api/companyApi';
import Button from '../atoms/Button';
import ButtonWithModal from '../atoms/ButtonWithModal';
import Input from '../atoms/Input';
import { logOut } from '../../redux/features/userSlice';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { getCompany } from '../../redux/features/companySlice';

const BusinessSettings = () => {
  const [inputs, setInputs] = useState({});
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showFirstDeleteModal, setShowFirstDeleteModal] = useState(false);
  const [showSecondDeleteModal, setShowSecondDeleteModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [updateCompany] = useUpdateCompanyMutation();
  const [deleteCompany] = useDeleteCompanyMutation();
  const { data } = useGetCompanyQuery(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateCompany(inputs);
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };

  const handleDelete = () => {
    deleteCompany(null);
    setShowFirstDeleteModal(false);
    setShowSecondDeleteModal(true);
    dispatch(logOut());
    navigate('/');
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
      <form id={'updateForm'} method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-sm">
          <Input type="text" name="name" placeholder="Name" callback={handleChange} />
          <Input type="text" name="description" placeholder="Description" callback={handleChange} />
          <Input type="text" name="address" placeholder="Address" callback={handleChange} />
          <Input type="text" name="country" placeholder="Country" callback={handleChange} />
          <Input type="text" name="city" placeholder="City" callback={handleChange} />
        </div>
        <ButtonWithModal
          showFirstModal={showFirstModal}
          setShowFirstModal={setShowFirstModal}
          showSecondModal={showSecondModal}
          setShowSecondModal={setShowSecondModal}
          form={"updateForm"}
          type={"submit"}
          name={"Save changes"}
          title={'Save changes?'}
          text={'Are you sure you want to update your company\'s profile information.'}
          successText={'You have successfully update your company\'s profile information.'}
          successTitle={'Success!'}
        />
      </form>
      <div className="py-8">
        <div className="font-bold font-title text-xl my-4">Delete Account</div>
        <div className="pb-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <ButtonWithModal
          showFirstModal={showFirstDeleteModal}
          setShowFirstModal={setShowFirstDeleteModal}
          showSecondModal={showSecondDeleteModal}
          setShowSecondModal={setShowSecondDeleteModal}
          type={"button"}
          name={"Delete Account"}
          title={'Delete Account?'}
          text={'Are you sure you want to permanently delete your company\'s profile account. This will NOT delete reviews ABOUT your company'}
          successText={'You have successfully deleted your company\'s profile account.'}
          successTitle={'Success!'}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default BusinessSettings;
