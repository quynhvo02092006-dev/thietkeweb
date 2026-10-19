// Website/js/filter.js
// Chức năng đặc thù: Chọn nhóm tư liệu để lọc nội dung (Phụ trách: Yến Nhi)

const documentsData = [
  {
    id: 1,
    category: "hien-vat",
    categoryName: "Hiện vật lịch sử",
    title: "Mô hình tàu buôn Amiral Latouche-Tréville",
    summary: "Hiện vật tái hiện con tàu của hãng Chargeurs Réunis nơi người thanh niên Văn Ba làm phụ bếp rời cảng Sài Gòn ngày 05/06/1911.",
    source: "Phòng trưng bày số 2 – Bảo tàng Hồ Chí Minh"
  },
  {
    id: 2,
    category: "van-ban",
    categoryName: "Tài liệu & Văn bản",
    title: "Danh sách thủy thủ đoàn tàu Latouche-Tréville năm 1911",
    summary: "Bản chụp tư liệu lưu trữ ghi tên phụ bếp Văn Ba (Nguyễn Tất Thành) nhận việc trên tàu từ ngày 02/06/1911 tại Sài Gòn.",
    source: "Tư liệu lưu trữ Bảo tàng Hồ Chí Minh"
  },
  {
    id: 3,
    category: "kien-truc",
    categoryName: "Bản vẽ & Kiến trúc",
    title: "Tư liệu kiến trúc đôi rồng gốm men xanh chầu nguyệt",
    summary: "Phân tích kỹ thuật chế tác gốm tráng men vùng Cây Mai và ý nghĩa biểu tượng Lưỡng long chầu nguyệt trên mái tòa nhà Pháp.",
    source: "Hồ sơ di tích kiến trúc TP.HCM"
  },
  {
    id: 4,
    category: "hien-vat",
    categoryName: "Hiện vật lịch sử",
    title: "Bộ sưu tập kỷ vật đồng bào miền Nam gửi tặng Bác Hồ",
    summary: "Các hiện vật, thư tay và quà tặng thể hiện tình cảm sâu nặng của nhân dân và chiến sĩ miền Nam đối với Chủ tịch Hồ Chí Minh.",
    source: "Phòng trưng bày chuyên đề Bác Hồ với miền Nam"
  },
  {
    id: 5,
    category: "van-ban",
    categoryName: "Tài liệu & Văn bản",
    title: "Bản Yêu sách của nhân dân An Nam (1919) và Đường Kách Mệnh (1927)",
    summary: "Tư liệu trưng bày đánh dấu quá trình hoạt động lý luận và truyền bá chủ nghĩa Mác – Lênin về trong nước.",
    source: "Phòng trưng bày số 2 – Bảo tàng Hồ Chí Minh"
  },
  {
    id: 6,
    category: "kien-truc",
    categoryName: "Bản vẽ & Kiến trúc",
    title: "Cấu trúc hành lang vòm cuốn và cửa gỗ lá sách thế kỷ XIX",
    summary: "Tài liệu khảo sát giải pháp chống nóng, thông gió tự nhiên từ sông Sài Gòn của tòa nhà trụ sở Messageries Impériales.",
    source: "Tư liệu nghiên cứu kiến trúc cổ Sài Gòn"
  },
  {
    id: 7,
    category: "huong-dan",
    categoryName: "Hướng dẫn học tập",
    title: "Sổ tay gợi ý câu hỏi thu hoạch dành cho học sinh – sinh viên",
    summary: "Tổng hợp 10 câu hỏi định hướng quan sát hiện vật và ghi chép thông tin khi đi thực tế môn Lịch sử tại Bến Nhà Rồng.",
    source: "Tài liệu biên tập của Nhóm Đề tài 26"
  },
  {
    id: 8,
    category: "huong-dan",
    categoryName: "Hướng dẫn học tập",
    title: "Sơ đồ lộ trình tham quan 90 phút ngoài trời và trong nhà",
    summary: "Hướng dẫn chi tiết 4 điểm dừng từ Quảng trường Nguyễn Tất Thành đến hệ thống 9 phòng trưng bày chuyên đề.",
    source: "Ấn phẩm Poster truyền thông của Nhóm Đề tài 26"
  }
];

let selectedCategory = "all";
let searchKeyword = "";

const documentGrid = document.getElementById("documentGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchDocInput = document.getElementById("searchDocInput");
const filterStatus = document.getElementById("filterStatus");
const emptyDocState = document.getElementById("emptyDocState");
const resetFilterBtn = document.getElementById("resetFilterBtn");

function renderDocuments() {
  if (!documentGrid) {
    return;
  }

  // Lọc danh sách tư liệu theo nhóm và từ khóa
  const filteredList = documentsData.filter(function (doc) {
    const matchCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const normalizedKeyword = searchKeyword.trim().toLowerCase();
    const matchKeyword =
      normalizedKeyword === "" ||
      doc.title.toLowerCase().indexOf(normalizedKeyword) !== -1 ||
      doc.summary.toLowerCase().indexOf(normalizedKeyword) !== -1;

    return matchCategory && matchKeyword;
  });

  // Xóa danh sách cũ
  documentGrid.textContent = "";

  // Xử lý trường hợp không có kết quả
  if (filteredList.length === 0) {
    filterStatus.textContent = "Tìm thấy 0 tư liệu phù hợp.";
    emptyDocState.style.display = "block";
    return;
  }

  emptyDocState.style.display = "none";
  filterStatus.textContent = "Đang hiển thị " + filteredList.length + " / " + documentsData.length + " tư liệu.";

  // Duyệt mảng bằng forEach và tạo phần tử DOM an toàn bằng textContent
  filteredList.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "card";

    const body = document.createElement("div");
    body.className = "card-body";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = item.categoryName;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.summary;

    const source = document.createElement("p");
    source.style.fontSize = "0.85rem";
    source.style.color = "#555555";
    source.textContent = "Nguồn: " + item.source;

    body.appendChild(badge);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(source);
    card.appendChild(body);
    documentGrid.appendChild(card);
  });
}

if (documentGrid) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      selectedCategory = btn.getAttribute("data-category");
      renderDocuments();
    });
  });

  if (searchDocInput) {
    searchDocInput.addEventListener("input", function (event) {
      searchKeyword = event.target.value;
      renderDocuments();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", function () {
      selectedCategory = "all";
      searchKeyword = "";
      if (searchDocInput) {
        searchDocInput.value = "";
      }
      filterButtons.forEach(function (b) {
        if (b.getAttribute("data-category") === "all") {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });
      renderDocuments();
    });
  }

  renderDocuments();
}