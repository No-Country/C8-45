import React from 'react';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Switch from '../atoms/Switch';
const UserSettings = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <span className="font-bold m-3 text-xl">Personal Settings</span>
      <div className="flex justify-between m-3">
        <div className="flex flex-col">
          <Button
            callback={() => {}}
            type="Secondary"
            value="New Profile Picture"
          />
          <Button
            callback={() => {}}
            type="Tertiary"
            value="Remove Profile Picture"
          />
        </div>
      </div>
      <div className="flex flex-col max-w-sm">
        <Input type="text" name="email" placeholder="Email" />
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="country" placeholder="Country" />
        <Input type="text" name="language" placeholder="Language" />
      </div>
      <Button callback={() => {}} type="Secondary" value="Save Changes" />
      <div className="pt-4">
        <div className="font-bold text-xl font-title my-4">Privacy</div>
        <div className="pb-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <Switch />
      </div>
      <div className="py-8">
        <div className="font-bold font-title text-xl my-4">Delete Account</div>
        <div className="pb-4 font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <Button callback={() => {}} type="Secondary" value="Delete Account" />
      </div>
    </div>
  );
};

export default UserSettings;
