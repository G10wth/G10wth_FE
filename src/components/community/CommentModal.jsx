import { useEffect, useRef } from 'react';

const CommentModal = ({ isMine, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="absolute top-10 left-4 z-50 w-28 bg-white shadow-md rounded-lg p-2 space-y-2"
    >
      {isMine ? (
        <>
          <div className="text-sm text-black font-medium px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
            수정하기
          </div>
          <div className="text-sm text-red-500 font-medium px-2 py-1 rounded hover:bg-red-100 cursor-pointer">
            삭제하기
          </div>
        </>
      ) : (
        <div className="text-sm text-red-500 font-medium px-2 py-1 rounded hover:bg-red-50 cursor-pointer">
          신고하기
        </div>
      )}
    </div>
  );
};

export default CommentModal;
