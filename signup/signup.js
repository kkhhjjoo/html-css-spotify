// 이메일 다음 → 비밀번호 단계
document.getElementById('email-next-btn').addEventListener('click', function () {
  document.getElementById('step-email').classList.add('hidden');
  document.getElementById('step-password').classList.remove('hidden');
});

// 비밀번호 뒤로 → 이메일 단계
document.getElementById('back-btn-pw').addEventListener('click', function () {
  document.getElementById('step-password').classList.add('hidden');
  document.getElementById('step-email').classList.remove('hidden');
});

// 비밀번호 다음 → 프로필 단계
document.getElementById('pw-next-btn').addEventListener('click', function () {
  document.getElementById('step-password').classList.add('hidden');
  document.getElementById('step-profile').classList.remove('hidden');
});

// 프로필 뒤로 → 비밀번호 단계
document.getElementById('back-btn-profile').addEventListener('click', function () {
  document.getElementById('step-profile').classList.add('hidden');
  document.getElementById('step-password').classList.remove('hidden');
});

// 프로필 다음 → 약관 단계
document.getElementById('profile-next-btn').addEventListener('click', function () {
  document.getElementById('step-profile').classList.add('hidden');
  document.getElementById('step-terms').classList.remove('hidden');
});

// 약관 뒤로 → 프로필 단계
document.getElementById('back-btn-terms').addEventListener('click', function () {
  document.getElementById('step-terms').classList.add('hidden');
  document.getElementById('step-profile').classList.remove('hidden');
});

// 비밀번호 표시/숨기기 토글
var pwInput = document.getElementById('password');
var eyeBtn = document.getElementById('eye-btn');

var eyeSlash = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
var eyeOpen = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

eyeBtn.addEventListener('click', function () {
  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    eyeBtn.innerHTML = eyeOpen;
  } else {
    pwInput.type = 'password';
    eyeBtn.innerHTML = eyeSlash;
  }
});
