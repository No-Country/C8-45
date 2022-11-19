import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard(props: Props) {
  const [hover, sethover] = useState(false);
  const { path, icon, title } = props;
  return (
    <Link
      to={path}
      className="min-w-min p-8 w-full mx-auto bg-gray-50 rounded-xl border-2 hover:border-blue-500 flex items-center"
    >
      <span className="text-3xl mx-2">{icon}</span>
      <div>
        <div className="text-xl font-roboto text-black">{title}</div>
      </div>
    </Link>
  );
}

type Props = {
  title: string;
  icon: JSX.Element;
  path: string;
};
