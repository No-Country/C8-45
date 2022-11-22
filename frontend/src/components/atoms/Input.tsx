export default function Input(props: Props) {
  const { type, placeholder, callback, name ,disabled} = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="my-2 block text-md p-3 bg-gray-100 border border-slate-300 rounded-full shadow-sm placeholder-slate-500 gap-2"
      onChange={callback}
      disabled={disabled}
    />
  );
}

type Props = {
  type: 'text' | 'file' | 'password' | 'email' | 'number' | 'date';
  placeholder: string;
  name:string;
  disabled?:boolean;
  // eslint-disable-next-line react/require-default-props
  callback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
