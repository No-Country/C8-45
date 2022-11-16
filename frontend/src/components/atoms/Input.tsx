export default function Input(props: Props) {
    
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className="block px-7 py-5 bg-gray-100 border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 gap-2"
            
        />
    );
}

type Props = {
    type?: "text" | "file" | "password" | "email" | "number" | "date" ; // type is optional
    placeholder?: string; // placeholder is optional
    callback?: () => void; // callback is optional
}