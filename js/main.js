let staffs = [];
function addStaff() {
    let id = document.getElementById("tknv").value;
    let ten = document.getElementById("txtten").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ngayLam = document.getElementById("datepicker").value;
    let chucVu = document.getElementById("chucVu").value;
    let luongCB = +document.getElementById("luongCB").value;
    let gioLam = +document.getElementById("gioLam").value;


    let staff = new Staff(
        id,
        ten,
        email,
        password,
        ngayLam,
        chucVu,
        luongCB,
        gioLam
    );


    staffs.push(staff)

    display(staffs);
    $("#myModal").modal("hide");
    resetForm()

}




function removeStaff(staffId) {
    let index = staffs.findIndex((value) => {
        return value.id === staffId;
    });
    if (index !== -1) {
        staffs.splice(index, 1)
    }
    display(staffs)
}


function selectStaff(staffId) {
    let staff = staffs.find((value) => {
        return value.id === staffId;
    });

    document.getElementById("tknv").value = staff.id;
    document.getElementById("txtten").value = staff.ten;
    document.getElementById("email").value = staff.email;
    document.getElementById("password").value = staff.password;
    document.getElementById("datepicker").value = staff.ngayLam;
    document.getElementById("chucVu").value = staff.chucVu;
    document.getElementById("luongCB").value = staff.luongCB;
    document.getElementById("gioLam").value = staff.gioLamss;





}


function updateStaff() {

    let id = document.getElementById("tknv").value;
    let ten = document.getElementById("txtten").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ngayLam = document.getElementById("datepicker").value;
    let chucVu = document.getElementById("chucVu").value;
    let luongCB = document.getElementById("luongCB").value;
    let gioLam = document.getElementById("gioLam").value;
    let staff = new Staff(
        id,
        ten,
        email,
        password,
        ngayLam,
        chucVu,
        luongCB,
        gioLam
    );
    let index = staffs.findIndex((value) => {
        return value.id === id
    });
    staffs[index] = staff;
    
    $("#myModal").modal("hide");
    display(staffs)
    resetForm()
}





function display(staffs) {
    let html = staffs.reduce((result, value) => {
        return (
            result +
            `
                <tr>
                    <td> ${value.id}</td>
                    <td> ${value.ten}</td>
                    <td> ${value.email}</td>
                    <td> ${value.ngayLam}</td>
                    <td> ${value.chucVu}</td>
                    <td> ${value.tinhTongLuong()}</td>
                    <td> ${value.xepLoai()}</td>
                    <td>
                        <button class="btn btn-success" id="btnThem" data-toggle="modal"
                    data-target="#myModal" onclick = "selectStaff('${value.id}')">Chỉnh Sửa</button>
                        
                        <button onclick ="removeStaff('${value.id}')" class ="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        );
    }, "");
    document.getElementById("tableDanhSach").innerHTML = html;
}

function resetForm() {
    document.getElementById("tknv").value = "";
    document.getElementById("txtten").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementById("chucVu").value = "";
    document.getElementById("luongCB").value = "";
    document.getElementById("gioLam").value = "";

}


