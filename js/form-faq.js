var dsFaq = document.querySelectorAll(".faq-item");

for (var i = 0; i < dsFaq.length; i++) {
  var nutCauHoi = dsFaq[i].querySelector(".faq-question");
  if (nutCauHoi) {
    nutCauHoi.addEventListener("click", function () {
      var theCha = this.parentElement;
      var dauCong = this.querySelector(".faq-icon");

      if (theCha.classList.contains("open")) {
        theCha.classList.remove("open");
        this.setAttribute("aria-expanded", "false");
        if (dauCong) {
          dauCong.textContent = "+";
        }
      } else {
        theCha.classList.add("open");
        this.setAttribute("aria-expanded", "true");
        if (dauCong) {
          dauCong.textContent = "−";
        }
      }
    });
  }
}

var formLienHe = document.getElementById("feedbackForm");

function kiemTraEmail(chuoiEmail) {
  var mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mauEmail.test(chuoiEmail);
}

if (formLienHe) {
  var oHoTen = document.getElementById("fullName");
  var oEmail = document.getElementById("userEmail");
  var oChuDe = document.getElementById("topicSelect");
  var nhomDoiTuong = document.getElementById("visitorRoleGroup");
  var oNoiDung = document.getElementById("messageContent");

  var loiHoTen = document.getElementById("fullNameError");
  var loiEmail = document.getElementById("userEmailError");
  var loiChuDe = document.getElementById("topicSelectError");
  var loiDoiTuong = document.getElementById("visitorRoleError");
  var loiNoiDung = document.getElementById("messageContentError");
  var khungKetQua = document.getElementById("formResultBox");

  formLienHe.addEventListener("submit", function (e) {
    e.preventDefault();

    var hoTen = oHoTen.value.trim();
    var email = oEmail.value.trim();
    var chuDe = oChuDe.value.trim();
    var noiDung = oNoiDung.value.trim();

    loiHoTen.textContent = "";
    loiEmail.textContent = "";
    loiChuDe.textContent = "";
    loiDoiTuong.textContent = "";
    loiNoiDung.textContent = "";

    oHoTen.classList.remove("input-error");
    oEmail.classList.remove("input-error");
    oChuDe.classList.remove("input-error");
    oNoiDung.classList.remove("input-error");
    if (nhomDoiTuong) {
      nhomDoiTuong.classList.remove("input-error");
    }

    oHoTen.setAttribute("aria-invalid", "false");
    oEmail.setAttribute("aria-invalid", "false");
    oChuDe.setAttribute("aria-invalid", "false");
    oNoiDung.setAttribute("aria-invalid", "false");
    khungKetQua.classList.remove("visible");

    var hopLe = true;
    var truongLoiDauTien = null;

    if (hoTen === "") {
      loiHoTen.textContent = "Vui lòng nhập họ và tên (không để trống hoặc chỉ nhập khoảng trắng).";
      oHoTen.classList.add("input-error");
      oHoTen.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oHoTen;
    } else if (hoTen.length < 2) {
      loiHoTen.textContent = "Họ và tên phải có ít nhất 2 ký tự.";
      oHoTen.classList.add("input-error");
      oHoTen.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oHoTen;
    } else if (hoTen.length > 80) {
      loiHoTen.textContent = "Họ và tên không vượt quá 80 ký tự.";
      oHoTen.classList.add("input-error");
      oHoTen.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oHoTen;
    }

    if (email === "") {
      loiEmail.textContent = "Vui lòng nhập địa chỉ email nhận phản hồi.";
      oEmail.classList.add("input-error");
      oEmail.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oEmail;
    } else if (email.length > 100) {
      loiEmail.textContent = "Địa chỉ email không vượt quá 100 ký tự.";
      oEmail.classList.add("input-error");
      oEmail.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oEmail;
    } else if (!kiemTraEmail(email)) {
      loiEmail.textContent = "Địa chỉ email không đúng định dạng (ví dụ: sinhvien@truong.edu.vn).";
      oEmail.classList.add("input-error");
      oEmail.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oEmail;
    }

    if (chuDe === "") {
      loiChuDe.textContent = "Vui lòng chọn một chủ đề câu hỏi hoặc góp ý.";
      oChuDe.classList.add("input-error");
      oChuDe.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oChuDe;
    }

    var dsRadio = document.querySelectorAll('input[name="visitorRole"]');
    var doiTuong = "";
    for (var j = 0; j < dsRadio.length; j++) {
      if (dsRadio[j].checked) {
        doiTuong = dsRadio[j].value;
      }
    }

    if (doiTuong === "") {
      loiDoiTuong.textContent = "Vui lòng chọn nhóm đối tượng người xem.";
      if (nhomDoiTuong) {
        nhomDoiTuong.classList.add("input-error");
      }
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || document.getElementById("roleStudent");
    }

    if (noiDung === "") {
      loiNoiDung.textContent = "Vui lòng nhập nội dung câu hỏi hoặc góp ý (không chỉ nhập khoảng trắng).";
      oNoiDung.classList.add("input-error");
      oNoiDung.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oNoiDung;
    } else if (noiDung.length < 15) {
      loiNoiDung.textContent = "Nội dung quá ngắn, vui lòng nhập ít nhất 15 ký tự.";
      oNoiDung.classList.add("input-error");
      oNoiDung.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oNoiDung;
    } else if (noiDung.length > 800) {
      loiNoiDung.textContent = "Nội dung không vượt quá 800 ký tự.";
      oNoiDung.classList.add("input-error");
      oNoiDung.setAttribute("aria-invalid", "true");
      hopLe = false;
      truongLoiDauTien = truongLoiDauTien || oNoiDung;
    }

    if (!hopLe) {
      if (truongLoiDauTien) {
        truongLoiDauTien.focus();
      }
      return;
    }

    document.getElementById("resName").textContent = hoTen;
    document.getElementById("resEmail").textContent = email;
    document.getElementById("resTopic").textContent = chuDe;
    document.getElementById("resRole").textContent = doiTuong;
    document.getElementById("resMessage").textContent = noiDung;

    khungKetQua.classList.add("visible");
  });
}