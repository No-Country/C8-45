export default function Input(props: Props) {
  const { type, placeholder, callback } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="my-2 block p-3 bg-gray-100 border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 gap-2"
      onChange={callback}
    />
  );
}

type Props = {
  type: 'text' | 'file' | 'password' | 'email' | 'number' | 'date';
  placeholder: string;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
