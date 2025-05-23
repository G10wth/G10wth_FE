import { useEffect, useState, useRef } from 'react';
import Button from '@/components/common/Button';

const BottomFixedButton = ({ page, text = '', onClick, disabled }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const initialHeight = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      // 키보드가 올라온 경우 추정
      const currentHeight = window.innerHeight;
      const keyboardAppeared = currentHeight < initialHeight.current - 100;
      setIsKeyboardOpen(keyboardAppeared);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-[425px] w-full 
        px-4 pt-4 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 bg-white
        ${isKeyboardOpen ? 'pb-40' : 'pb-6'}`}
    >
      {page === 'signup' ? (
        <Button text={text} onClick={onClick} disabled={disabled} />
      ) : (
        <div className="flex gap-2">
          <Button text="취소" onClick={onClick.handleCancel} />
          <Button text="저장" onClick={onClick.handleSave} disabled={disabled} />
        </div>
      )}
    </div>
  );
};

export default BottomFixedButton;
