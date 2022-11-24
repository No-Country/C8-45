import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Switch from "../atoms/Switch";

function UserSettings(props: Props) {
  const { name, lastname, image } = props;

  return (
    <div>
      <span className='font-bold m-3 text-xl'>Personal Settings</span>
      <div className='flex justify-between m-3'>
        <Avatar name={name} lastname={lastname} image={image} size='large' />
        <div className='flex flex-col'>
          <Button callback={() => { }} type='Secondary' value='New Profile Picture' />
          <Button callback={() => { }} type='Tertiary' value='Remove Profile Picture' />
        </div>
      </div>
      <div className='flex flex-col max-w-sm'>
        <Input type='text' name='email' placeholder="Email" />
        <Input type='text' name='name' placeholder="Name" />
        <Input type='text' name='country' placeholder="Country" />
        <Input type='text' name='language' placeholder="Language" />
      </div>
      <Button callback={() => { }} type='Secondary' value='Save Changes' />
      <div className='pt-4'>
        <div className='font-bold text-xl m-8'>Privacy</div>
        <div className='pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</div>
        <Switch />
      </div>
      <div>
        <div className='font-bold text-xl m-8'>Delete Account</div>
        <div className='pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</div>
        <Button callback={() => { }} type='Secondary' value='Delete Account' />
      </div>
      <div></div>
    </div>
  )
}

type Props = {
  name: string;
  lastname: string;
  // eslint-disable-next-line react/require-default-props
  image?: string;
};

export default UserSettings;