import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '@/utils/validation';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import LoopLoading from '@/components/common/LoopLoading';
import axios from '@/apis/axios-instance';

const DirectLoginForm = ({ autoLogin, setAutoLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // 초기화
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!isValidEmail(email)) {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
      valid = false;
    }

    if (!isValidPassword(password)) {
      setPasswordError('영문, 숫자, 특수기호를 모두 포함하여 입력해주세요. (8글자 이상)');
      valid = false;
    }

    if (!valid) return;

    try {
      setIsLoading(true);
      const res = await axios.post('/api/auth/login', { email, password });
      const token = res.data.token;

      // autoLogin 여부에 따라 저장소 선택
      if (autoLogin) {
        localStorage.setItem('token', token); // 자동 로그인
      } else {
        sessionStorage.setItem('token', token); // 비자동 로그인
      }

      navigate('/');
    } catch (err) {
      console.error(err);
      setError('이메일 또는 비밀번호를 잘못 입력하셨습니다. 다시 확인 후 입력해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={emailError}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={passwordError}
        />
        {error && <p className="text-orangeStrong text-sm mb-2 pl-1">{error}</p>}
        <label className="w-full pl-1 my-2 flex items-center justify-start gap-2 text-black">
          <input
            type="checkbox"
            checked={autoLogin}
            onChange={setAutoLogin}
            className="w-6 h-6 cursor-pointer appearance-none border border-normalGray rounded-[8px]
            checked:bg-orangeStrong checked:bg-[url('/src/assets/icons/checkbox.svg')] checked:border-none bg-center"
          />
          <p className="text-sm font-medium">자동로그인</p>
        </label>
      </div>
      <Button text="로그인" onClick={handleLogin} />
      {isLoading && <LoopLoading />}
    </div>
  );
};

export default DirectLoginForm;
