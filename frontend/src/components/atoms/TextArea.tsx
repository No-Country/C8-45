import React from 'react';

export default function TextArea(
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) {
  const { placeholder } = props;
  return (
    <textarea
      className="my-2 block p-3 bg-gray-100 border border-slate-300 rounded-3xl text-md shadow-sm placeholder-slate-500 gap-2 font-poppins"
      placeholder={placeholder}
      rows={5}
    />
  );
}
