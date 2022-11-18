import { BsStarFill } from "react-icons/bs";

export default function Rating(props: Props) {
  const { rating } = props;
  return (
    <div className='flex my-1 gap-1 my-3'>
      {rating > 0 ? <BsStarFill color='#fbbf24' style={{ stroke: 'black', strokeWidth: '1' }} />
        : <BsStarFill color='transparent' style={{ stroke: 'black', strokeWidth: '1' }} />}
      {rating > 1 ? <BsStarFill color='#fbbf24' style={{ stroke: 'black', strokeWidth: '1' }} />
        : <BsStarFill color='transparent' style={{ stroke: 'black', strokeWidth: '1' }} />}
      {rating > 2 ? <BsStarFill color='#fbbf24' style={{ stroke: 'black', strokeWidth: '1' }} />
        : <BsStarFill color='transparent' style={{ stroke: 'black', strokeWidth: '1' }} />}
      {rating > 3 ? <BsStarFill color='#fbbf24' style={{ stroke: 'black', strokeWidth: '1' }} />
        : <BsStarFill color='transparent' style={{ stroke: 'black', strokeWidth: '1' }} />}
      {rating > 4 ? <BsStarFill color='#fbbf24' style={{ stroke: 'black', strokeWidth: '1' }} />
        : <BsStarFill color='transparent' style={{ stroke: 'black', strokeWidth: '1' }} />}
    </div>
  )
};

type Props = {
  rating: number;
};
