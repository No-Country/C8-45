import { Link } from 'react-router-dom';
import { BsLightningFill } from 'react-icons/bs';

function Logo() {
  return (
    <Link to="/">
      <span className="text-3xl flex items-center">
        <BsLightningFill /> Checksite
      </span>
    </Link>
  );
}

export default Logo;
