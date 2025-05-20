// 이메일 형식 검사
export const isValidEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// 비밀번호 유효성 검사: 8자 이상 + 영문 + 숫자 + 특수문자 포함
export const isValidPassword = password => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

// 닉네임 유효성 검사: 2자 이상 8자 미만
export const isValidNickname = nickname => {
  return nickname.length >= 2 && nickname.length < 8;
};

// 비밀번호 확인 검사
export const isPasswordConfirmed = (password, confirmPassword) => {
  return password === confirmPassword;
};
