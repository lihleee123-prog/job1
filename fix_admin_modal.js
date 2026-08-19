const fs = require('fs');
let content = fs.readFileSync('G:/projectngoai/admindashboard.html', 'utf8');

// Fix remaining text in product modal
content = content.replace(/Thm s\?n ph\?m/g, "Thêm sản phẩm");
content = content.replace(/S\?a s\?n ph\?m/g, "Sửa sản phẩm");
content = content.replace(/Luu s\?n ph\?m/gi, "Lưu sản phẩm");
content = content.replace(/Dang luu.../g, "Đang lưu...");
content = content.replace(/Loi: /g, "Lỗi: ");
content = content.replace(/Vui lng di\?n tn v gi s\?n ph\?m/g, "Vui lòng điền tên và giá sản phẩm");
content = content.replace(/Gi\?i phng s\?n ph\?m ny v\? "Cn hng"\? \(Dng khi hu\? \?\?t hng\)/g, "Giải phóng sản phẩm này về 'Còn hàng'? (Dùng khi huỷ đặt hàng)");

fs.writeFileSync('G:/projectngoai/admindashboard.html', content, 'utf8');
console.log('Fixed additional mojibake in admindashboard.html');
