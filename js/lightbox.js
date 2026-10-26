var dsAnh = [
  {
    src: "images/kien-truc-toan-canh.jpg",
    alt: "Toàn cảnh tòa nhà Bến Nhà Rồng nhìn từ bến cảng Sài Gòn",
    title: "1. Toàn cảnh kiến trúc Bến Nhà Rồng",
    description: "Công trình khởi công năm 1863 với lối kiến trúc phương Tây kết hợp mái ngói đỏ và đôi rồng Á Đông trên đỉnh mái. Nguồn: Bảo tàng Hồ Chí Minh - Chi nhánh TP.HCM."
  },
  {
    src: "images/dinh-hai-con-rong.jpg",
    alt: "Cận cảnh đôi rồng gốm tráng men xanh trên đỉnh mái Bến Nhà Rồng",
    title: "2. Chi tiết đôi rồng gốm men xanh trên đỉnh mái",
    description: "Đôi rồng lớn bằng gốm tráng men xanh dài khoảng 4,5m trên nóc tòa nhà theo phong cách Á Đông, tạo nên tên gọi dân gian Bến Nhà Rồng. Nguồn: Tư liệu di sản."
  },
  {
    src: "images/hanh-lang-vom.jpg",
    alt: "Hành lang vòm cuốn và hệ cửa lá sách cổ tại tầng lầu Bến Nhà Rồng",
    title: "3. Hành lang vòm cuốn và cửa chớp lá sách",
    description: "Hệ thống hành lang vòm bao quanh 4 phía giúp che nắng mưa và đối lưu không khí tự nhiên từ sông Sài Gòn. Nguồn: Ảnh tư liệu kiến trúc."
  },
  {
    src: "images/mo-hinh-tau-latouche.jpg",
    alt: "Mô hình tàu buôn Amiral Latouche-Tréville tại phòng trưng bày số 2",
    title: "4. Mô hình tàu buôn Amiral Latouche-Tréville",
    description: "Mô hình con tàu nơi người thanh niên Nguyễn Tất Thành (Văn Ba) làm phụ bếp và rời Bến Nhà Rồng ngày 05/06/1911. Nguồn: Bảo tàng Hồ Chí Minh."
  },
  {
    src: "images/phong-trung-bay-1.jpg",
    alt: "Không gian phòng trưng bày chuyên đề thời niên thiếu và quê hương",
    title: "5. Không gian phòng trưng bày chuyên đề",
    description: "Trưng bày các tài liệu, hình ảnh và hiện vật về quê hương, gia đình và thời niên thiếu của Chủ tịch Hồ Chí Minh. Nguồn: Bảo tàng Hồ Chí Minh."
  },
  {
    src: "images/khong-gian-tuong-niem.jpg",
    alt: "Khuôn viên tượng đài Nguyễn Tất Thành trước tòa nhà Bến Nhà Rồng",
    title: "6. Quảng trường và Tượng đài Nguyễn Tất Thành",
    description: "Không gian tưởng niệm ngoài trời hướng ra bến cảng lịch sử bên sông Sài Gòn, nơi đón tiếp các đoàn khách tham quan. Nguồn: Ảnh tư liệu."
  },
  {
    src: "images/banner-ben-nha-rong.jpg",
    alt: "Ấn phẩm Banner chủ đạo Bến Nhà Rồng Dấu Ấn Lịch Sử",
    title: "7. Sản phẩm thiết kế: Banner nhận diện đề tài",
    description: "Banner chính của website thể hiện tên đề tài, thông điệp truyền thông và bộ màu nhận diện đỏ gạch – vàng đồng. Thực hiện: Yến Nhi."
  },
  {
    src: "images/poster-tuyen-kham-pha.jpg",
    alt: "Ấn phẩm Poster giới thiệu tuyến khám phá Kiến trúc và Không gian Di sản Bến Nhà Rồng",
    title: "8. Sản phẩm thiết kế: Poster Tuyến khám phá di sản",
    description: "Poster giới thiệu lộ trình 4 điểm dừng tham quan kiến trúc và phòng trưng bày tại Bến Nhà Rồng. Thực hiện: Trung Hiếu."
  },
  {
    src: "images/infographic-dau-moc.jpg",
    alt: "Ấn phẩm Infographic tóm tắt các dấu mốc lịch sử Bến Nhà Rồng",
    title: "9. Sản phẩm thiết kế: Infographic Dấu mốc lịch sử",
    description: "Infographic hệ thống hóa các mốc sự kiện quan trọng của Bến Nhà Rồng từ năm 1863 đến nay. Thực hiện: Như Quỳnh."
  }
];

var viTriHienTai = 0;

var cacTheAnh = document.querySelectorAll(".gallery-item");
var hopDen = document.getElementById("lightboxModal");
var anhLon = document.getElementById("lightboxImage");
var tieuDeAnh = document.getElementById("lightboxTitle");
var moTaAnh = document.getElementById("lightboxDesc");
var demSoAnh = document.getElementById("lightboxCounter");
var nutDong = document.getElementById("closeLightboxBtn");
var nutTruoc = document.getElementById("prevImgBtn");
var nutSau = document.getElementById("nextImgBtn");

function capNhatAnh(viTri) {
  if (viTri < 0) {
    viTriHienTai = dsAnh.length - 1;
  } else if (viTri >= dsAnh.length) {
    viTriHienTai = 0;
  } else {
    viTriHienTai = viTri;
  }

  var anh = dsAnh[viTriHienTai];
  anhLon.src = anh.src;
  anhLon.alt = anh.alt;
  tieuDeAnh.textContent = anh.title;
  moTaAnh.textContent = anh.description;
  demSoAnh.textContent = "Tư liệu " + (viTriHienTai + 1) + " / " + dsAnh.length;
}

function moHopAnh(viTri) {
  capNhatAnh(viTri);
  hopDen.classList.add("is-open");
  hopDen.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (nutDong) {
    nutDong.focus();
  }
}

function dongHopAnh() {
  hopDen.classList.remove("is-open");
  hopDen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (cacTheAnh[viTriHienTai]) {
    cacTheAnh[viTriHienTai].focus();
  }
}

if (cacTheAnh.length > 0 && hopDen) {
  for (var i = 0; i < cacTheAnh.length; i++) {
    cacTheAnh[i].addEventListener("click", function () {
      var chiSo = parseInt(this.getAttribute("data-index"), 10);
      if (!isNaN(chiSo)) {
        moHopAnh(chiSo);
      }
    });
  }

  nutDong.addEventListener("click", function () {
    dongHopAnh();
  });

  nutTruoc.addEventListener("click", function () {
    capNhatAnh(viTriHienTai - 1);
  });

  nutSau.addEventListener("click", function () {
    capNhatAnh(viTriHienTai + 1);
  });

  hopDen.addEventListener("click", function (e) {
    if (e.target === hopDen) {
      dongHopAnh();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!hopDen.classList.contains("is-open")) {
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      dongHopAnh();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      capNhatAnh(viTriHienTai - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      capNhatAnh(viTriHienTai + 1);
    } else if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === nutTruoc) {
        e.preventDefault();
        nutDong.focus();
      } else if (!e.shiftKey && document.activeElement === nutDong) {
        e.preventDefault();
        nutTruoc.focus();
      }
    }
  });
}