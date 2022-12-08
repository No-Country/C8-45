import { FiExternalLink } from 'react-icons/fi';

const VisitWebsite = (props: Props) => {
  const { website } = props;

  return (
    <div className="bg-white p-4 pr-12 rounded-lg flex flex-col border">
      <a className="text-blue-600 text-xl font-title" href={`http://${website}`} target="_blank">
        {website}
      </a>
      <span className="flex items-centerm my-3">
        Visit their website{' '}
        <span className="text-xl mx-2">
          <FiExternalLink />
        </span>{' '}
      </span>
    </div>
  );
};

type Props = {
  website: string,
}

export default VisitWebsite;
