const fs = require('fs');
let content = fs.readFileSync('G:/projectngoai/resetpass.html', 'utf8');

// Fix JS text completely
const newJs = \
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
  import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

  const firebaseConfig = {
    apiKey: "AIzaSyDk4ies5X6BSqd9igMv2M0xY3e7f2F8H48",
    authDomain: "project1234-4f440.firebaseapp.com",
    projectId: "project1234-4f440",
    storageBucket: "project1234-4f440.firebasestorage.app",
    messagingSenderId: "698848283898",
    appId: "1:698848283898:web:84eca38cdc370c7f3f4d43",
    measurementId: "G-P0KJH5C58Q"
  };

  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function showToast(message, type = 'error') {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = message;
    document.getElementById('toast-icon').textContent = type === 'error' ? 'error' : 'check_circle';
    toast.className = \\\	oast toast-\\\\\\;
    setTimeout(() => toast.classList.add('toast-hide'), 4000);
  }

  window.handleSendReset = async (e) => {
    if (e) e.preventDefault();
    const email  = document.getElementById('identifier').value.trim();
    const btn    = document.getElementById('send-btn');
    const btnTxt = document.getElementById('send-btn-text');
    const btnIco = document.getElementById('send-btn-icon');

    if (!email) return showToast('Vui lòng nhập địa chỉ email.', 'error');

    btn.disabled = true;
    btnTxt.textContent = 'Đang gửi...';
    btnIco.textContent = 'hourglass_empty';

    try {
      await sendPasswordResetEmail(auth, email);
      sessionStorage.setItem('toastMessage', 'Đã gửi link đặt lại mật khẩu! Vui lòng kiểm tra email của bạn.');
      window.location.href = 'signin.html';
    } catch (err) {
      btn.disabled = false;
      btnTxt.textContent = 'Gửi Link Đặt Lại';
      btnIco.textContent = 'send';

      let errMsg = 'Gửi email thất bại. Vui lòng thử lại.';
      if (err.code === 'auth/user-not-found') errMsg = 'Không tìm thấy tài khoản với email này.';
      else if (err.code === 'auth/invalid-email') errMsg = 'Địa chỉ email không hợp lệ.';
      else if (err.code === 'auth/too-many-requests') errMsg = 'Quá nhiều lần thử. Vui lòng chờ vài phút.';
      showToast(errMsg, 'error');
    }
  };
\;

content = content.replace(/import \{ initializeApp \}[\s\S]*?showToast\(errMsg, 'error'\);\s*\}/, newJs);

// Fix some HTML text manually
content = content.replace(/V\? TRANG CH\?/g, "VỀ TRANG CHỦ");
content = content.replace(/Qu.n M.t Kh.u/g, "Quên Mật Khẩu");
content = content.replace(/KHOI PH.C<br\/>M.T KH.U/g, "KHÔI PHỤC<br/>MẬT KHẨU");
content = content.replace(/Nh.p email da dang ky d. nh.n link kh.i ph.c m.t kh.u./g, "Nhập email đã đăng ký để nhận link khôi phục mật khẩu.");
content = content.replace(/Nh.p email da dang ky d. nh.n link d.t l.i m.t kh.u./g, "Nhập email đã đăng ký để nhận link đặt lại mật khẩu.");
content = content.replace(/G.i Link D.t L.i/g, "Gửi Link Đặt Lại");
content = content.replace(/Quay l.i Dang Nh.p/g, "Quay lại Đăng Nhập");
content = content.replace(/Email Da Du.c G.i!/g, "Email Đã Được Gửi!");
content = content.replace(/Ch.ng t.i da g.i link d.t l.i m.t kh.u d.n:/g, "Chúng tôi đã gửi link đặt lại mật khẩu đến:");
content = content.replace(/Vui l.ng ki.m tra h.p thu \(k. c. Spam\)\. Link c. hi.u l.c trong 24 gi../g, "Vui lòng kiểm tra hộp thư (kể cả Spam). Link có hiệu lực trong 24 giờ.");
content = content.replace(/G.i l.i email kh.c/g, "Gửi lại email khác");

fs.writeFileSync('G:/projectngoai/resetpass.html', content, 'utf8');
console.log('Fixed resetpass');
