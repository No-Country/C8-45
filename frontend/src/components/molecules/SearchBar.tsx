import React, { useState } from 'react';

function SearchBar() {
  const [url, setUrl] = useState('');
  return (
    <div className="border rounded-full p-2 flex justify-between">
      <form
        action="
        "
        className="flex w-full"
      >
        <input
          type="text"
          className="p-3 rounded-full text-xl w-8/12"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
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
