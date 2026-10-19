// js/lightbox.js
// Chức năng: Xem ảnh lớn (Lightbox Modal) kèm chú thích và điều hướng ảnh
// Phụ trách: Trung Hiếu

const galleryData = [
  {
    src: "images/kien-truc-toan-canh.jpg",
    alt: "Toàn cảnh tòa nhà Bến Nhà Rồng nhìn từ bến cảng Sài Gòn",
    title: "1. Toàn cảnh kiến trúc Bến Nhà Rồng",
    description: "Công trình khởi công năm 1863 với lối kiến trúc phương Tây kết hợp mái ngói đỏ và đôi rồng Á Đông trên đỉnh mái. Nguồn: Bảo tàng Hồ Chí Minh - Chi nhánh TP.HCM."
  },
  {
    src: "images/dinh-hai-con-rong.jpg",
    alt: "Cận cảnh đôi rồng gốm tráng men xanh chầu trái châu trên đỉnh mái",
    title: "2. Chi tiết đôi rồng gốm men xanh chầu nguyệt",
    description: "Mô-típ 'Lưỡng long chầu nguyệt' bằng gốm tráng men xanh dài khoảng 4,5m trên nóc tòa nhà, tạo nên tên gọi dân gian Bến Nhà Rồng. Nguồn: Tư liệu di sản."
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
    src: "images/poster-tuyen-kham-pha.svg",
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

// Biến lưu vị trí ảnh đang mở
let currentImageIndex = 0;

// Chọn các phần tử DOM bằng getElementById và querySelectorAll
const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxCounter = document.getElementById("lightboxCounter");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");
const prevImgBtn = document.getElementById("prevImgBtn");
const nextImgBtn = document.getElementById("nextImgBtn");

// Hàm cập nhật nội dung ảnh lớn trong Modal
function updateLightboxContent(index) {
  if (galleryData.length === 0) {
    lightboxTitle.textContent = "Không có dữ liệu hình ảnh";
    lightboxDesc.textContent = "Hiện chưa có hình ảnh nào trong thư viện.";
    return;
  }

  // Xử lý vòng lặp chỉ số nếu vượt quá giới hạn mảng
  if (index < 0) {
    currentImageIndex = galleryData.length - 1;
  } else if (index >= galleryData.length) {
    currentImageIndex = 0;
  } else {
    currentImageIndex = index;
  }

  const item = galleryData[currentImageIndex];
  lightboxImage.setAttribute("src", item.src);
  lightboxImage.setAttribute("alt", item.alt);
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.description;
  lightboxCounter.textContent = "Tư liệu " + (currentImageIndex + 1) + " / " + galleryData.length;
}

// Hàm mở hộp thoại xem ảnh lớn
function openLightbox(index) {
  updateLightboxContent(index);
  lightboxModal.classList.add("is-open");
  lightboxModal.setAttribute("aria-hidden", "false");
  closeLightboxBtn.focus();
}

// Hàm đóng hộp thoại xem ảnh lớn
function closeLightbox() {
  lightboxModal.classList.remove("is-open");
  lightboxModal.setAttribute("aria-hidden", "true");
  if (galleryItems[currentImageIndex]) {
    galleryItems[currentImageIndex].focus();
  }
}

// Duyệt danh sách các thẻ ảnh bằng forEach để gắn sự kiện click
if (galleryItems.length > 0 && lightboxModal) {
  galleryItems.forEach(function (buttonElement, idx) {
    buttonElement.addEventListener("click", function () {
      const dataIdx = Number(buttonElement.getAttribute("data-index"));
      const targetIndex = !Number.isNaN(dataIdx) ? dataIdx : idx;
      openLightbox(targetIndex);
    });
  });

  // Sự kiện nút Đóng, Ảnh trước, Ảnh tiếp theo
  closeLightboxBtn.addEventListener("click", closeLightbox);

  prevImgBtn.addEventListener("click", function () {
    updateLightboxContent(currentImageIndex - 1);
  });

  nextImgBtn.addEventListener("click", function () {
    updateLightboxContent(currentImageIndex + 1);
  });

  // Đóng khi nhấn vào vùng nền tối bên ngoài hộp thoại
  lightboxModal.addEventListener("click", function (event) {
    if (event.target === lightboxModal) {
      closeLightbox();
    }
  });

  // Hỗ trợ điều khiển bằng bàn phím (ESC để đóng, mũi tên Trái/Phải để chuyển ảnh)
  document.addEventListener("keydown", function (event) {
    const isOpen = lightboxModal.classList.contains("is-open");
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      updateLightboxContent(currentImageIndex - 1);
    } else if (event.key === "ArrowRight") {
      updateLightboxContent(currentImageIndex + 1);
    }
  });
}