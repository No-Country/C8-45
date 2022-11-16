export const Button = (props: ButtonProps) => {
    // value is a secondary=Secondarybutton
    if (props.value === 'secondary' || props.value === 'Secondary') {
        return (
            <button
                className="bg-black text-white  px-10 rounded-full"
            >    {props.children} 
            </button>   // use props.children to pass in the text
        )
    }
    // value is a undefined=primaryButton
    return (
        <button
            className="bg-blue-600 text-white px-10 rounded-full"
            {...props}
        />
    );
};

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    specialProp?: string;
}
