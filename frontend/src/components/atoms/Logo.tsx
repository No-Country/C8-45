import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
function Logo(props: Props) {
  const { type } = props;
  return (
    <Link to="/" className="flex text-2xl items-center">
      <span
        className={` flex items-center ${
          type === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        <img src={logo} className="h-10" />
      </span>
      <span>Checksite</span>
    </Link>
  );
}
type Props = {
  type: 'dark' | 'light';
};
export default Logo;
