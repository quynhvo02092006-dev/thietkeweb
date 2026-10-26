var dsTuLieu = [
  {
    id: 1,
    loai: "hien-vat",
    tenLoai: "Hiện vật lịch sử",
    tieuDe: "Mô hình tàu buôn Amiral Latouche-Tréville",
    tomTat: "Hiện vật tái hiện con tàu của hãng Chargeurs Réunis nơi người thanh niên Văn Ba làm phụ bếp rời cảng Sài Gòn ngày 05/06/1911.",
    nguon: "Phòng trưng bày số 2 – Bảo tàng Hồ Chí Minh"
  },
  {
    id: 2,
    loai: "van-ban",
    tenLoai: "Tài liệu & Văn bản",
    tieuDe: "Danh sách thủy thủ đoàn tàu Latouche-Tréville năm 1911",
    tomTat: "Bản chụp tư liệu lưu trữ ghi tên phụ bếp Văn Ba (Nguyễn Tất Thành) nhận việc trên tàu từ ngày 02/06/1911 tại Sài Gòn.",
    nguon: "Tư liệu lưu trữ Bảo tàng Hồ Chí Minh"
  },
  {
    id: 3,
    loai: "kien-truc",
    tenLoai: "Bản vẽ & Kiến trúc",
    tieuDe: "Tư liệu kiến trúc đôi rồng gốm men xanh chầu nguyệt",
    tomTat: "Phân tích kỹ thuật chế tác gốm tráng men vùng Cây Mai và ý nghĩa biểu tượng Lưỡng long chầu nguyệt trên mái tòa nhà Pháp.",
    nguon: "Hồ sơ di tích kiến trúc TP.HCM"
  },
  {
    id: 4,
    loai: "hien-vat",
    tenLoai: "Hiện vật lịch sử",
    tieuDe: "Bộ sưu tập kỷ vật đồng bào miền Nam gửi tặng Bác Hồ",
    tomTat: "Các hiện vật, thư tay và quà tặng thể hiện tình cảm sâu nặng của nhân dân và chiến sĩ miền Nam đối với Chủ tịch Hồ Chí Minh.",
    nguon: "Phòng trưng bày chuyên đề Bác Hồ với miền Nam"
  },
  {
    id: 5,
    loai: "van-ban",
    tenLoai: "Tài liệu & Văn bản",
    tieuDe: "Bản Yêu sách của nhân dân An Nam (1919) và Đường Kách Mệnh (1927)",
    tomTat: "Tư liệu trưng bày đánh dấu quá trình hoạt động lý luận và truyền bá chủ nghĩa Mác – Lênin về trong nước.",
    nguon: "Phòng trưng bày số 2 – Bảo tàng Hồ Chí Minh"
  },
  {
    id: 6,
    loai: "kien-truc",
    tenLoai: "Bản vẽ & Kiến trúc",
    tieuDe: "Cấu trúc hành lang vòm cuốn và cửa gỗ lá sách thế kỷ XIX",
    tomTat: "Tài liệu khảo sát giải pháp chống nóng, thông gió tự nhiên từ sông Sài Gòn của tòa nhà trụ sở Messageries Impériales.",
    nguon: "Tư liệu nghiên cứu kiến trúc cổ Sài Gòn"
  },
  {
    id: 7,
    loai: "huong-dan",
    tenLoai: "Hướng dẫn học tập",
    tieuDe: "Sổ tay gợi ý câu hỏi thu hoạch dành cho học sinh – sinh viên",
    tomTat: "Tổng hợp 10 câu hỏi định hướng quan sát hiện vật và ghi chép thông tin khi đi thực tế môn Lịch sử tại Bến Nhà Rồng.",
    nguon: "Tài liệu biên tập của Nhóm Đề tài 26"
  },
  {
    id: 8,
    loai: "huong-dan",
    tenLoai: "Hướng dẫn học tập",
    tieuDe: "Sơ đồ lộ trình tham quan 90 phút ngoài trời và trong nhà",
    tomTat: "Hướng dẫn chi tiết 4 điểm dừng từ Quảng trường Nguyễn Tất Thành đến hệ thống 9 phòng trưng bày chuyên đề.",
    nguon: "Ấn phẩm Poster truyền thông của Nhóm Đề tài 26"
  }
];

var nhomDangChon = "all";
var tuKhoa = "";

var khungTuLieu = document.getElementById("documentGrid");
var cacNutLoc = document.querySelectorAll(".filter-btn");
var oTimKiem = document.getElementById("searchDocInput");
var dongTrangThai = document.getElementById("filterStatus");
var khungTrong = document.getElementById("emptyDocState");
var nutReset = document.getElementById("resetFilterBtn");

function hienThiTuLieu() {
  if (!khungTuLieu) {
    return;
  }

  var ketQua = [];
  var tuKhoaThuong = tuKhoa.trim().toLowerCase();

  for (var i = 0; i < dsTuLieu.length; i++) {
    var tl = dsTuLieu[i];
    var dungNhom = false;
    if (nhomDangChon === "all" || tl.loai === nhomDangChon) {
      dungNhom = true;
    }

    var dungTuKhoa = false;
    if (
      tuKhoaThuong === "" ||
      tl.tieuDe.toLowerCase().indexOf(tuKhoaThuong) !== -1 ||
      tl.tomTat.toLowerCase().indexOf(tuKhoaThuong) !== -1 ||
      tl.tenLoai.toLowerCase().indexOf(tuKhoaThuong) !== -1 ||
      tl.nguon.toLowerCase().indexOf(tuKhoaThuong) !== -1
    ) {
      dungTuKhoa = true;
    }

    if (dungNhom && dungTuKhoa) {
      ketQua.push(tl);
    }
  }

  khungTuLieu.textContent = "";

  if (ketQua.length === 0) {
    dongTrangThai.textContent = "Tìm thấy 0 tư liệu phù hợp.";
    khungTrong.classList.add("visible");
    return;
  }

  khungTrong.classList.remove("visible");
  dongTrangThai.textContent = "Đang hiển thị " + ketQua.length + " / " + dsTuLieu.length + " tư liệu.";

  for (var j = 0; j < ketQua.length; j++) {
    var item = ketQua[j];
    var theBai = document.createElement("article");
    theBai.className = "card";

    var thanBai = document.createElement("div");
    thanBai.className = "card-body";

    var nhanLoai = document.createElement("span");
    nhanLoai.className = "badge";
    nhanLoai.textContent = item.tenLoai;

    var tieuDe = document.createElement("h3");
    tieuDe.textContent = item.tieuDe;

    var doanTomTat = document.createElement("p");
    doanTomTat.textContent = item.tomTat;

    var doanNguon = document.createElement("p");
    doanNguon.className = "card-source";
    doanNguon.textContent = "Nguồn: " + item.nguon;

    thanBai.appendChild(nhanLoai);
    thanBai.appendChild(tieuDe);
    thanBai.appendChild(doanTomTat);
    thanBai.appendChild(doanNguon);
    theBai.appendChild(thanBai);
    khungTuLieu.appendChild(theBai);
  }
}

if (khungTuLieu) {
  for (var i = 0; i < cacNutLoc.length; i++) {
    cacNutLoc[i].addEventListener("click", function () {
      for (var k = 0; k < cacNutLoc.length; k++) {
        cacNutLoc[k].classList.remove("active");
        cacNutLoc[k].setAttribute("aria-pressed", "false");
      }
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");
      nhomDangChon = this.getAttribute("data-category");
      hienThiTuLieu();
    });
  }

  if (oTimKiem) {
    oTimKiem.addEventListener("input", function () {
      tuKhoa = oTimKiem.value;
      hienThiTuLieu();
    });
  }

  if (nutReset) {
    nutReset.addEventListener("click", function () {
      nhomDangChon = "all";
      tuKhoa = "";
      if (oTimKiem) {
        oTimKiem.value = "";
      }
      for (var k = 0; k < cacNutLoc.length; k++) {
        if (cacNutLoc[k].getAttribute("data-category") === "all") {
          cacNutLoc[k].classList.add("active");
          cacNutLoc[k].setAttribute("aria-pressed", "true");
        } else {
          cacNutLoc[k].classList.remove("active");
          cacNutLoc[k].setAttribute("aria-pressed", "false");
        }
      }
      hienThiTuLieu();
    });
  }

  hienThiTuLieu();
}