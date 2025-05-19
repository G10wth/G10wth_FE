import { useState } from 'react';
import { FiSearch, FiSend } from 'react-icons/fi';

export default function SearchBar({ placeholder = '검색어를 입력해 주세요.', onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-full bg-white flex items-center px-4 py-3"
      style={{
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
      }}
    >
      <FiSearch className="text-gray-400 w-5 h-5 mr-2" />

      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 text-sm placeholder-gray-400 text-black outline-none bg-transparent"
      />

      <button type="submit">
        <FiSend className="text-gray-400 w-5 h-5 ml-2" />
      </button>
    </form>
  );
}
