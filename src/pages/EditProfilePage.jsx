import { useState, useEffect, useRef, useMemo } from 'react';
import { isValidNickname, isValidPassword } from '@/utils/validation';
import { toast } from 'react-toastify';
import defaultProfileIcon from '@/assets/icons/profile-icon.svg';
import TopBar from '@/components/common/TopBar';
import Input from '@/components/common/Input';
import UpdateButton from '@/components/edit-profile/UpdateButton';
import BottomButtonBar from '@/components/common/BottomButtonBar';
import ConfirmModal from '@/components/edit-profile/ConfirmModal';
import LoopLoading from '@/components/common/LoopLoading';
// import useRequireAuth from '@/hooks/useRequireAuth';
import useLogout from '@/hooks/useLogout';
import TextButton from '@/components/common/TextButton';
// import axios from '@/apis/axios-instance';

// 테스트용 데이터
// const mockData = {
//   profileImage: '/logo2.svg',
//   username: 'mockUser',
//   email: 'mock@example.com',
//   password: 'MockPass123!',
//   authProvider: 'local',
// };
const mockData2 = {
  profileImage: '/logo2.svg',
  username: 'mockUser',
  email: 'mock@naver.com',
  authProvider: 'kakao',
};

const EditProfilePage = () => {
  const logout = useLogout();
  const [isLoading, setIsLoading] = useState(true);
  const [profileImage, setProfileImage] = useState('');
  const [preview, setPreview] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pwStep, setPwStep] = useState(0); // 0: 숨김, 1: 현재 비밀번호 검증, 2: 새 비밀번호 입력
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [authProvider, setAuthProvider] = useState('local');
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const initialData = useRef({
    profileImage: '',
    username: '',
    password: '',
  });
  let initial = initialData.current;
  const resetStates = () => {
    setIsEditUsername(false);
    setPwStep(0);
    setCurrentPw('');
    setNewPw('');
  };

  // useRequireAuth(); //로그인 여부 체크
  // 유저 정보 불러오기
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        // const res = await axios.get('/api/userInfo');
        // const { profileImage, username, email } = res.data;
        // setProfileImage(profileImage);
        // setPreview(profileImage);
        // setUsername(username);
        // setAuthProvider(authProvider);
        // initialData.current = {
        //   profileImage,
        //   username,
        //   password,
        // }
        setProfileImage(mockData2.profileImage);
        setPreview(mockData2.profileImage);
        setUsername(mockData2.username);
        setEmail(mockData2.email);
        setAuthProvider(mockData2.authProvider);
        initialData.current = {
          profileImage: mockData2.profileImage,
          username: mockData2.username,
          password: mockData2.password,
        };
      } catch (err) {
        console.error(err);
        toast.error('프로필 정보를 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile().catch(console.error);
  }, []);

  // 프로필 사진 변경
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setProfileImage(file);
    }
  };

  // 현재 비밀번호 검증
  const verifyCurrentPassword = async () => {
    try {
      setIsLoading(true);
      // await axios.post('/api/user/verify-password', { password: currentPw });
      // setPwStep(2);
      // toast.success('비밀번호가 일치합니다.');
      if (currentPw === initial.password) {
        setPwStep(2);
        toast.success('비밀번호가 일치합니다.');
      } else {
        toast.error('현재 비밀번호가 일치하지 않습니다.');
      }
    } catch (err) {
      console.error(err);
      toast.error('현재 비밀번호가 일치하지 않습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    // 유효성 검사
    if (isEditUsername && !isValidNickname(username)) {
      toast.error('닉네임은 2자 이상 8자 이하로 입력해주세요.');
      return;
    }
    if (pwStep === 2 && !isValidPassword(newPw)) {
      toast.error('비밀번호는 영문, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.');
      return;
    }

    // api 로직
    // const formData = new FormData();
    // if (profileImage instanceof File) {
    //   formData.append('profileImage', profileImage);
    // } else {
    //   formData.append('profileImage', profileImage);
    // }
    // if (isEditUsername) {
    //   formData.append('username', username);
    // }
    // if (pwStep === 2) {
    //   formData.append('password', newPw);
    // }
    // try {
    //   setIsLoading(true);
    //   // await axios.put('/api/user/profile', formData, {
    //   //   headers: { 'Content-Type': 'multipart/form-data' },
    //   // });
    //   toast.success('프로필이 저장되었습니다.');
    //   resetStates();
    // } catch (err) {
    //   console.error(err);
    //   toast.error('저장에 실패했습니다.');
    // } finally {
    //   setIsLoading(false);
    // }

    // 테스트용 로직
    initial.profileImage = profileImage;
    if (isEditUsername) initial.username = username;
    if (pwStep === 2) initial.password = newPw;
    toast.success('프로필이 저장되었습니다.');
    resetStates();
  };

  const handleCancel = () => {
    setProfileImage(initial.profileImage);
    setPreview(initial.profileImage);
    setUsername(initial.username);
    resetStates();
  };

  // 변경사항이 있는지 감지
  const isSavable = useMemo(() => {
    const imgChanged = profileImage !== initial.profileImage;
    const nameChanged = username !== initial.username && isValidNickname(username);
    const pwdChanged = pwStep === 2 && isValidPassword(newPw);
    if (pwStep === 2 && isEditUsername) return pwdChanged && nameChanged;
    return imgChanged || nameChanged || pwdChanged;
  }, [
    profileImage,
    username,
    pwStep,
    newPw,
    isEditUsername,
    initial.profileImage,
    initial.username,
  ]);

  const handleDeleteAccount = async () => {
    try {
      setIsLoading(true);
      // await axios.delete('/api/user/delete-account');
      toast.success('회원탈퇴가 완료되었습니다.');
      logout();
    } catch (err) {
      console.error(err);
      toast.error('회원탈퇴에 실패했습니다.');
    } finally {
      setIsLoading(false);
      setIsShowModal(false);
    }
  };

  return (
    <div>
      <TopBar title="내 정보 수정" />
      <div className="text-black fixed max-w-[425px] w-full h-full top-[60px] gap-6">
        <div className="max-w-[425px] max-h-[calc(100vh-155px)] w-full overflow-auto bg-bg space-y-4">
          <section className="w-full bg-white rounded-b-2xl shadow-[0px_3px_5px_-3px_rgba(0,0,0,0.1)] p-6 space-y-6">
            <header className="text-xl font-semibold text-gray500 py-2">기본 정보</header>
            {/* 프로필 사진 섹션 */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray500">프로필 사진</p>
              <div className="flex flex-col items-center w-full h-full overflow-hidden gap-4">
                <img
                  src={preview || defaultProfileIcon}
                  alt="profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <p className="text-sm text-black font-semibold">
                  EasyPlace에서 사용할 프로필 사진을 등록해주세요.
                </p>
              </div>
              <div className="w-full flex justify-around gap-2">
                <button
                  className="w-1/2 py-2.5 border border-gray-300 rounded-lg text-sm font-medium"
                  onClick={() => {
                    setPreview(defaultProfileIcon);
                    setProfileImage('');
                  }}
                >
                  기본 이미지로 변경
                </button>
                <label className="w-1/2 flex items-center justify-center border border-gray-300 rounded-lg text-sm font-medium cursor-pointer">
                  이미지 변경
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            {/* 닉네임 */}
            <div>
              <label className="text-sm text-black font-medium">닉네임</label>
              <div className="flex items-start h-24 gap-2">
                <Input
                  type="text"
                  placeholder={username}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  disabled={!isEditUsername}
                  error={isValidNickname(username) ? '' : '2자 이상 8자 이하로 입력해주세요.'}
                />
                <UpdateButton
                  onClick={() => setIsEditUsername(prev => !prev)}
                  text={!isEditUsername ? '변경하기' : '완료'}
                />
              </div>
            </div>
          </section>

          <section className="w-full bg-white rounded-2xl shadow-[0px_3px_5px_-3px_rgba(0,0,0,0.1)] p-6 space-y-6">
            <header className="text-xl font-semibold text-gray500 py-2">회원 정보</header>
            {/* 이메일 */}
            <div className="space-y-1">
              <Input label="이메일" type="email" value={email} disabled={true} />
            </div>

            {/* 비밀번호 변경 */}
            {authProvider === 'local' && (
              <div className="space-y-2">
                <label className="text-sm text-black font-medium">비밀번호</label>
                {pwStep === 0 && (
                  <UpdateButton
                    section="pwd"
                    text="비밀번호 변경하기"
                    onClick={() => setPwStep(1)}
                  />
                )}
                {pwStep === 1 && (
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="현재 비밀번호"
                      value={currentPw}
                      onChange={e => setCurrentPw(e.target.value)}
                      error={
                        isValidPassword(currentPw)
                          ? ''
                          : '영문, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.'
                      }
                    />
                    <UpdateButton section="pwd" text="확인" onClick={verifyCurrentPassword} />
                  </div>
                )}
                {pwStep === 2 && (
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="새 비밀번호"
                      value={newPw}
                      onChange={e => setNewPw(e.target.value)}
                      error={
                        isValidPassword(newPw)
                          ? ''
                          : '영문, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.'
                      }
                    />
                  </div>
                )}
              </div>
            )}
          </section>

          {/* 로그아웃 & 회원탈퇴 */}
          <section className="flex px-6 pb-12">
            <div className="w-1/2 flex justify-center">
              <TextButton text="로그아웃" color="text-gray300" onClick={logout} />
            </div>
            <div className="w-1/2 flex justify-center">
              <TextButton
                text="회원탈퇴"
                color="text-orangeStrong"
                onClick={() => setIsShowModal(true)}
              />
            </div>
          </section>
        </div>
        <BottomButtonBar
          page="mypage"
          onClick={{ handleCancel, handleSave }}
          disabled={!isSavable}
        />
      </div>
      {isShowModal && (
        <ConfirmModal
          title="정말 탈퇴하시겠습니까?"
          content={['탈퇴 시 등록하신 모든 정보가 삭제되며,', '복구하실 수 없습니다.']}
          onCancel={() => setIsShowModal(false)}
          onConfirm={handleDeleteAccount}
        />
      )}
      {isLoading && <LoopLoading />}
    </div>
  );
};

export default EditProfilePage;
