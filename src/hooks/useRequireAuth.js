import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useRequireAuth = () => {
  const navigate = useNavigate(); // 로그인 여부 확인
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      toast.info('로그인이 필요한 서비스입니다.');
      navigate('/login', { replace: true });
    }
  }, [navigate]);
};

export default useRequireAuth;
