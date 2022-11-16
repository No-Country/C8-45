import { Link } from 'react-router-dom';
import NavigationLink from '../atoms/NavigationLink';

function Footer() {
  // Todo Finish Footer
  return (
    <footer className="bg-black text-white p-5">
      <div className="flex flex-col text-white">
        <Link to="/" className="text-white text-lg">
          Centro de Soporte
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
