import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const Input = ({ label = '', type, placeholder, value, onChange, error }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div>
      <div
        className={`flex w-full my-2 py-3 px-4 border rounded-[8px] text-sm placeholder-gray-400
        ${error ? 'border-orangeStrong' : 'border-normalGray'}`}
      >
        {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={isPassword && isShowPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-black focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            className=" right-4 top-4 text-gray-400"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>
      {error && <p className="text-orangeStrong text-sm mb-2 pl-1">{error}</p>}
    </div>
  );
};

export default Input;
