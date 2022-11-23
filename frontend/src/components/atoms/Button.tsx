export default function Button(props: Props) {
  // value is a secondary=Secondarybutton
  const { value, callback, type } = props;

  if (type === 'Tertiary') {
    return (
      <button
        type="button"
        onClick={callback}
        className="my-2 bg-gray-100 text-black text-lg px-10 p-3 rounded-full hover:bg-gray-300"
      >
        {value}
      </button>
    );
  } else if (type === 'Secondary') {
    return (
      <button
        type="button"
        onClick={callback}
        className="my-2 bg-black text-white text-lg px-10 p-3 rounded-full hover:bg-gray-800"
      >
        {value}
      </button>
    );
  }
  // value is a undefined=primaryButton
  return (
    <button
      type="button"
      onClick={callback}
      className="my-2 bg-blue-600 text-white text-lg  px-10 p-3 rounded-full hover:bg-blue-700"
    >
      {value}
    </button>
  );
}

type Props = {
  value: string;
  type: 'Primary' | 'Secondary' | 'Tertiary';
  // This may need a fix
  callback: () => void;
};
