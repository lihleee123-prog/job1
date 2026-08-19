const fs = require('fs');
let content = fs.readFileSync('G:/projectngoai/resetpass.html', 'utf8');

// Fix HTML text
content = content.replace(/V\? TRANG CH\?/g, "VỀ TRANG CHỦ");
content = content.replace(/KHOI PH\?C<br\/>M\?T KH\?U/g, "KHÔI PHỤC<br/>MẬT KHẨU");
content = content.replace(/Nh\?p email da dang ky d\? nh\?n link khi ph\?c m\?t kh\?u\./g, "Nhập email đã đăng ký để nhận link khôi phục mật khẩu.");
content = content.replace(/Qun M\?t Kh\?u/g, "Quên Mật Khẩu");
content = content.replace(/Nh\?p email da dang ky d\? nh\?n link d\?t l\?i m\?t kh\?u\./g, "Nhập email đã đăng ký để nhận link đặt lại mật khẩu.");
content = content.replace(/H\? th\?ng dang t\?i ho\?c b\? l\?i k\?t n\?i m\?ng\. Vui lng nh\?n Ctrl \+ F5 d\? t\?i l\?i trang!/g, "Hệ thống đang tải hoặc bị lỗi kết nối mạng. Vui lòng nhấn Ctrl + F5 để tải lại trang!");
content = content.replace(/G\?i Link D\?t L\?i/g, "Gửi Link Đặt Lại");
content = content.replace(/Quay l\?i Dang Nh\?p/g, "Quay lại Đăng Nhập");
content = content.replace(/Email Da Du\?c G\?i!/g, "Email Đã Được Gửi!");
content = content.replace(/Chng ti da g\?i link d\?t l\?i m\?t kh\?u d\?n:/g, "Chúng tôi đã gửi link đặt lại mật khẩu đến:");
content = content.replace(/Vui lng ki\?m tra h\?p thu \(k\? c\? Spam\)\. Link c hi\?u l\?c trong 24 gi\?\./g, "Vui lòng kiểm tra hộp thư (kể cả Spam). Link có hiệu lực trong 24 giờ.");
content = content.replace(/G\?i l\?i email khc/g, "Gửi lại email khác");

// Fix JS text
content = content.replace(/Vui lng nh\?p d\?a ch\? email\./g, "Vui lòng nhập địa chỉ email.");
content = content.replace(/Dang g\?i\.\.\./g, "Đang gửi...");
content = content.replace(/Da g\?i link d\?t l\?i m\?t kh\?u! Vui lng ki\?m tra email c\?a b\?n\./g, "Đã gửi link đặt lại mật khẩu! Vui lòng kiểm tra email của bạn.");
content = content.replace(/G\?i email th\?t b\?i\. Vui lng th\? l\?i\./g, "Gửi email thất bại. Vui lòng thử lại.");
content = content.replace(/Khng tm th\?y ti kho\?n v\?i email ny\./g, "Không tìm thấy tài khoản với email này.");
content = content.replace(/D\?a ch\? email khng h\?p l\?\./g, "Địa chỉ email không hợp lệ.");
content = content.replace(/Qu nhi\?u l\?n th\?\. Vui lng ch\? vi pht\./g, "Quá nhiều lần thử. Vui lòng chờ vài phút.");

fs.writeFileSync('G:/projectngoai/resetpass.html', content, 'utf8');
console.log('Fixed text in resetpass.html');
