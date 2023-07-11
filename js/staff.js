
function Staff(
    id,
    ten,
    email,
    password,
    ngayLam,
    chucVu,
    luongCB,
    gioLam
    
) {
    this.id = id; 
    this.ten = ten;
    this.email = email;
    this.password = password
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.luongCB = luongCB;
    this.gioLam = gioLam;
}


Staff.prototype.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
        return this.luongCB * 3;
    } else if (this.chucVu === "Trưởng Phòng") {
        return this.luongCB * 2;
    } else {
        return this.luongCB;
    }
};




Staff.prototype.xepLoai = function () {
    if (this.gioLam >= 192) {
        return 'Nhân viên xuất sắc';
    } else if (this.gioLam >= 176) {
        return 'Nhân viên giỏi';
    } else if (this.gioLam >= 160) {
        return 'Nhân viên khá';
    } else {
        return 'Nhân viên trung bình';
    }
};