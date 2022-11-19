export default function Avatar(props: Props) {
  const { name, lastname, image } = props;

  return (
    <div>
      {image ? <img
        className='w-10 h-10 rounded-full'
        src={image}
        alt='Rounded avatar' /> :
        <div
          className='inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600'>
          <span className='font-medium text-gray-600 dark:text-gray-300'>{name[0] + lastname[0]}</span>
        </div>}
    </div>
  )
};

type Props = {
  name: string;
  lastname: string;
  // eslint-disable-next-line react/require-default-props
  image: string;
};
