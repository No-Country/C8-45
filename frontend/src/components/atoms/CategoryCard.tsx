import { Link } from 'react-router-dom';

export default function CategoryCard(props: Props) {
  const { link, image, title } = props;
  return (
    <Link to={link}>
      <div className="p-6 py-8 max-w-sm mx-auto bg-gray-50 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-20 w-20" src={image} alt={title} />
        </div>
        <div>
          <div className="text-xl font-roboto text-black">{title}</div>
        </div>
      </div>
    </Link>
  );
}

type Props = {
  title: string;
  image: string;
  link: string;
};
