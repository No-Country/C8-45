export default function Avatar(props: Props) {
  const { name, lastname, image, size } = props;

  return (
    <div>
      {size === 'small' ? image ? <img
        className='w-14 h-14 rounded-full'
        src={image}
        alt='Rounded avatar' /> :
        <div
          className={'w-14 h-14 inline-flex overflow-hidden relative justify-center items-centerbg-gray-100 rounded-full dark:bg-gray-600'}>
          <span className='font-medium text-gray-600 dark:text-gray-300 flex items-center'>{name[0] + lastname[0]}</span>
        </div> : ''}
      {size === 'medium' ? image ? <img
        className='w-20 h-20 rounded-full'
        src={image}
        alt='Rounded avatar' /> :
        <div
          className={'w-20 h-20 inline-flex overflow-hidden relative justify-center items-centerbg-gray-100 rounded-full dark:bg-gray-600'}>
          <span className='font-medium text-gray-600 dark:text-gray-300 flex items-center'>{name[0] + lastname[0]}</span>
        </div> : ''}
      {size === 'large' ? image ? <img
        className='w-32 h-32 rounded-full'
        src={image}
        alt='Rounded avatar' /> :
        <div
          className={'w-32 h-32 inline-flex overflow-hidden relative justify-center items-centerbg-gray-100 rounded-full dark:bg-gray-600'}>
          <span className='font-medium text-gray-600 dark:text-gray-300 flex items-center'>{name[0] + lastname[0]}</span>
        </div> : ''}
    </div>
  )
};

type Props = {
  name: string;
  lastname: string;
  size: 'small' | 'medium' | 'large';
  // eslint-disable-next-line react/require-default-props
  image?: string;
};
