import { BsFillPatchCheckFill } from 'react-icons/bs';
const VerifyBadge = () => {
  return (
    <div className="p-2 max-w-max flex items-center text-blue-600 bg-blue-200 rounded-lg">
      <span>
        <BsFillPatchCheckFill />
      </span>
      <span>Verified Company</span>
    </div>
  );
};

export default VerifyBadge;
