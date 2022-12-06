export default function ButtonWithModal(props: Props) {

  const { form, type, name, title, text, successTitle, successText,
    showFirstModal, setShowFirstModal, showSecondModal, setShowSecondModal, onClick } = props;

  return (
    <>
      <button
        className="my-2 bg-black text-white text-lg px-10 p-3 rounded-full hover:bg-gray-800"
        type="button"
        onClick={() => setShowFirstModal(true)}
      >
        <span>{name}</span>
      </button>
      {showFirstModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-50 w-32 p-2 rounded-xl text-red-600 hover:bg-red-100"
                    type="button"
                    onClick={() => setShowFirstModal(false)}
                  >
                    Cancel
                  </button>
                  {(type === 'button') && <button
                    className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100"
                    type={type}
                    onClick={onClick}
                  >{name}</button>}
                  {(type === 'submit') && <button
                    className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100"
                    type={type}
                    form={form}
                  >
                    {name}
                  </button>}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {showSecondModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {successTitle}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {successText}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100"
                    type="button"
                    onClick={() => setShowSecondModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

type Props = {
  showFirstModal: boolean,
  setShowFirstModal: (arg: boolean) => void,
  showSecondModal: boolean,
  setShowSecondModal: (arg: boolean) => void,
  form?: string,
  type: 'submit' | 'button',
  name: string,
  title: string,
  text: string,
  successTitle: string,
  successText: string,
  onClick?: () => void,
}
