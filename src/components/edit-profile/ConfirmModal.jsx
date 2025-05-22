const ConfirmModal = ({ title, content, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl p-6 max-w-[90%] w-[360px] space-y-6 shadow-xl">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <div className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
          {content.join('\n')}
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <button
            className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="px-4 py-2 text-sm bg-orangeStrong text-white rounded-lg"
            onClick={onConfirm}
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
