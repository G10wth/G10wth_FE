import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  isValidEmail,
  isValidPassword,
  isValidNickname,
  isPasswordConfirmed,
} from '@/utils/validation';
import Input from '@/components/common/Input';
import AuthHeader from '@/components/common/AuthHeader';
import LoopLoading from '@/components/common/LoopLoading';
import BottomButtonBar from '@/components/common/BottomButtonBar';
import TopBar from '@/components/common/TopBar';
import axios from '@/apis/axios-instance';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isNextEnabled = (() => {
    switch (step) {
      case 1:
        if (!isValidEmail(email)) return false;
        if (!isEmailSent) return true;
        if (!isEmailVerified) return verificationCode.length >= 6;
        return true;
      case 2:
        return isValidPassword(password) && isPasswordConfirmed(password, passwordConfirm);
      case 3:
        return isValidNickname(nickname);
      default:
        return false;
    }
  })();

  const getButtonText = () => {
    if (step === 1) {
      if (!isEmailSent) return '인증 메일 발송';
      if (isEmailSent && !isEmailVerified) return '인증하기';
      if (isEmailVerified) return '다음';
    }
    if (step === 2 || step === 3) return isNextEnabled ? '완료' : '다음';
    return '';
  };

  const handleNext = async () => {
    setError('');
    try {
      setIsLoading(true);
      if (step === 1) {
        setEmail(email.trim());

        if (!isValidEmail(email)) return setError('올바른 이메일 형식을 입력해주세요.');

        // 이메일 중복 체크
        const res = await axios.get(`/api/auth/check-email?email=${email}`);
        if (!res.data.isAvailable) return setError('이미 가입된 이메일입니다.');

        // 이메일 인증
        if (!isEmailSent) {
          await axios.post('/api/auth/send-verification', { email: email });
          setIsEmailSent(true);
          alert('입력하신 이메일로 인증 메일을 보냈습니다. 메일함을 확인해 주세요.');
          return;
        }

        // 이메일 인증 코드 확인
        if (!isEmailVerified) {
          const verifyRes = await axios.post('/api/auth/verify-code', {
            email: email,
            code: verificationCode,
          });
          if (!verifyRes.data.isVerified) return setError('인증 코드가 일치하지 않습니다.');

          setIsEmailVerified(true);
          alert('이메일 인증이 완료되었습니다.');
          setStep(2);
          return;
        }

        // 이메일 인증 완료
        setStep(2);
      }

      if (step === 2) {
        setPasswordError('');
        setConfirmError('');
        if (!isValidPassword(password))
          return setPasswordError('영문, 숫자, 특수기호를 모두 포함한 8자 이상 입력해주세요.');
        if (!isPasswordConfirmed(password, passwordConfirm))
          return setConfirmError('비밀번호가 일치하지 않습니다.');
        setStep(3);
      }

      if (step === 3) {
        if (!isValidNickname(nickname))
          return setError('닉네임은 2자 이상 8자 이하로 입력해주세요.');
        await axios.post('/api/auth/signup', { email, password, nickname });
        setStep(4);
      }
    } catch (err) {
      console.error(err);
      setError('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Input
              label="이메일"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setIsEmailSent(false); // 이메일 변경 시 인증 초기화
                setIsEmailVerified(false);
                setVerificationCode('');
              }}
              error={error}
            />
            {isEmailSent && !isEmailVerified && (
              <Input
                label="인증 코드"
                placeholder="이메일로 받은 인증 코드를 입력하세요"
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                error={error}
              />
            )}
            {isEmailVerified && (
              <div className="text-sm text-green-600 ml-1 mt-1">✅ 인증이 완료되었습니다.</div>
            )}
          </>
        );
      case 2:
        return (
          <div>
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={passwordError}
            />
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
              error={confirmError}
            />
          </div>
        );
      case 3:
        return (
          <>
            <Input
              label="닉네임"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              error={error}
            />
          </>
        );
      case 4:
        return (
          <div className="flex flex-col items-center gap-4 my-4">
            <img src="/logo2.svg" alt="logo" className="mx-auto mb-4" />
            <p className="text-2xl font-semibold">회원가입이 완료되었습니다</p>
            <p className="text-center max-w-[50%] break-keep text-sm text-gray300 mt-1">
              {nickname}님, 이제 EasyPlace에서 편하고 빠르게 장소를 찾아보세요!
            </p>
            <BottomButtonBar page="signup" text="로그인" onClick={() => navigate('/login')} />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {step !== 4 && (
        <>
          <TopBar title="회원가입" />
          <AuthHeader step={step} />
        </>
      )}
      {renderStep()}
      {step !== 4 && (
        <BottomButtonBar
          page="signup"
          text={getButtonText()}
          onClick={handleNext}
          disabled={!isNextEnabled || isLoading}
        />
      )}
      {isLoading && <LoopLoading />}
    </div>
  );
};

export default SignUpForm;
