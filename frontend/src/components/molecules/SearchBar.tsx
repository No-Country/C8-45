import React, { useState } from 'react';

function SearchBar() {
  const [url, setUrl] = useState('');
  return (
    <div className="border rounded-full p-2 flex justify-between bg-white mx-3">
      <form action={`/search/${url}`} className="flex w-full">
        <input
          type="text"
          className="p-3 rounded-full font-poppins text-lg text-blue-600 w-8/12"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="Insert the URL here"
          required
        />
        <button
          type="submit"
          className="text-xl bg-blue-600 text-white p-3 rounded-full ml-2 w-4/12 hover:bg-blue-700"
          onClick={() => {}}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
