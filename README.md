# Bến Nhà Rồng – Dấu Ấn Lịch Sử Bên Sông Sài Gòn

Website truyền thông số giới thiệu câu chuyện lịch sử ngày 05/06/1911, kiến trúc giao thoa Á – Âu và không gian trưng bày tại Bảo tàng Hồ Chí Minh – Chi nhánh TP.HCM (Di tích Bến Nhà Rồng).

Dự án phục vụ đồ án / tiểu luận học phần **Thiết kế Web (MMC403)** – **Nhóm Đề tài 26**.

---

## 1. Thành viên thực hiện & Phân công

- **Yến Nhi:** Thiết kế Banner nhận diện chủ đạo, xây dựng trang Chủ / Lịch sử / Tư liệu, lập trình chức năng lọc & tìm kiếm tư liệu (`js/filter.js`).
- **Trung Hiếu:** Thiết kế Poster tuyến khám phá di sản, xây dựng trang Kiến trúc / Trưng bày / Thư viện, lập trình chức năng xem ảnh lớn Lightbox (`js/lightbox.js`).
- **Như Quỳnh:** Thiết kế Infographic dấu mốc lịch sử, xây dựng trang Dấu mốc / FAQ / Liên hệ, lập trình chức năng đóng mở câu hỏi FAQ & kiểm tra biểu mẫu (`js/form-faq.js`).

---

## 2. Cấu trúc thư mục

```text
web/
├── index.html          # Trang chủ
├── lich-su.html        # Chuyên đề 1: Câu chuyện lịch sử
├── dau-moc.html        # Các dấu mốc lịch sử & Infographic
├── kien-truc.html      # Chuyên đề 2: Kiến trúc Bến Nhà Rồng & Poster
├── trung-bay.html      # Không gian trưng bày & Bảng phân bổ phòng
├── thu-vien.html       # Thư viện 9 hình ảnh & ấn phẩm truyền thông
├── tu-lieu.html        # Chuyên đề 3: Kho tư liệu & Hướng dẫn tìm hiểu
├── faq.html            # 6 câu hỏi thường gặp (FAQ)
├── lien-he.html        # Biểu mẫu gửi câu hỏi / góp ý
├── css/
│   └── style.css       # File định dạng giao diện chung & Responsive
├── js/
│   ├── filter.js       # Lọc tư liệu theo nhóm và từ khóa (trang tu-lieu.html)
│   ├── lightbox.js     # Phóng to và chuyển ảnh (trang thu-vien.html)
│   └── form-faq.js     # Đóng mở FAQ (faq.html) và kiểm tra form (lien-he.html)
└── images/             # Thư mục chứa 6 ảnh tư liệu và 3 ấn phẩm thiết kế
```

---

## 3. Các chức năng chính

1. **Điều hướng 9 trang nội dung:** Liên kết xuyên suốt giữa 3 chuyên đề chính (Lịch sử, Kiến trúc & Trưng bày, Tư liệu & Hướng dẫn).
2. **Lọc và tìm kiếm tư liệu (`tu-lieu.html`):** Cho phép lọc nhanh danh sách 8 tư liệu theo từng nhóm chủ đề (Hiện vật, Văn bản, Kiến trúc, Hướng dẫn) kết hợp ô nhập từ khóa.
3. **Thư viện ảnh Lightbox (`thu-vien.html`):** Nhấn vào từng ảnh để xem ảnh kích thước lớn, đọc chú thích, chuyển ảnh trước/sau hoặc đóng bằng phím `ESC`.
4. **Câu hỏi thường gặp (`faq.html`):** Nhấn vào từng câu hỏi để đóng/mở nội dung trả lời.
5. **Kiểm tra biểu mẫu liên hệ (`lien-he.html`):** Kiểm tra dữ liệu nhập (họ tên, định dạng email, chủ đề, nhóm đối tượng, độ dài nội dung) và hiển thị bảng tóm tắt kết quả ngay trên trình duyệt.
6. **Giao diện đáp ứng (Responsive):** Tương thích màn hình máy tính (`1366px`), máy tính bảng (`768px`) và điện thoại (`390px`).

---

## 4. Công cụ thực hiện & Nội dung cần Internet

- **Công cụ lập trình & kiểm thử:** Visual Studio Code (HTML5, CSS3, JavaScript thuần – DOM API), kiểm thử giao diện đáp ứng (Responsive) trên trình duyệt ở độ phân giải `1366px`, `768px` và `390px`.
- **Công cụ thiết kế ấn phẩm truyền thông:** Thiết kế 3 sản phẩm truyền thông (Banner nhận diện đề tài, Poster tuyến khám phá di sản, Infographic dấu mốc lịch sử) xuất định dạng `.jpg` lưu trực tiếp trong thư mục `images/`.
- **Các nội dung cần kết nối Internet & Phương án thay thế Offline:**
  - Website **không phụ thuộc CDN** cho CSS hay JavaScript cốt lõi; toàn bộ mã nguồn và 9 hình ảnh đều được lưu cục bộ trong thư mục dự án.
  - Khi có kết nối Internet, tệp `css/style.css` tải phông chữ tiếng Việt (`Be Vietnam Pro` và `Merriweather`) từ Google Fonts để tối ưu thẩm mỹ.
  - Khi mở ngoại tuyến (Offline không có Internet), website tự động chuyển sang phông chữ hệ thống dự phòng (`Segoe UI`, `Tahoma`, `Arial`, `Georgia`, `Times New Roman`) mà không làm vỡ bố cục hay mất dấu tiếng Việt.

---

## 5. Kịch bản kiểm thử nhanh các chức năng JavaScript

1. **Chức năng Lọc & Tìm kiếm tư liệu (`tu-lieu.html` - `js/filter.js`):**
   - *Trường hợp 1 (Lọc theo nhóm):* Nhấn nút `Hiện vật lịch sử` → Hiển thị 2 tư liệu thuộc nhóm hiện vật và cập nhật trạng thái `Đang hiển thị 2 / 8 tư liệu.`.
   - *Trường hợp 2 (Kết hợp nhóm + từ khóa):* Chọn `Tất cả tư liệu` và nhập từ khóa `Latouche` → Hiển thị 2 tư liệu liên quan đến tàu Amiral Latouche-Tréville.
   - *Trường hợp 3 (Không có kết quả & Đặt lại):* Nhập từ khóa `xyz123` → Hiển thị thông báo `Tìm thấy 0 tư liệu phù hợp.` cùng khung trạng thái rỗng; nhấn nút `Hiển thị lại tất cả tư liệu` để khôi phục 8 tư liệu.
2. **Chức năng Thư viện ảnh Lightbox (`thu-vien.html` - `js/lightbox.js`):**
   - *Trường hợp 1:* Nhấn chuột hoặc nhấn phím `Enter` vào một ảnh bất kỳ → Mở hộp thoại Lightbox hiển thị đúng ảnh lớn, tiêu đề, chú thích và số thứ tự `Tư liệu X / 9`.
   - *Trường hợp 2:* Nhấn nút `Ảnh tiếp →` / `← Ảnh trước` hoặc phím mũi tên trái/phải → Chuyển ảnh tuần hoàn giữa 9 tư liệu.
   - *Trường hợp 3:* Nhấn nút `Đóng (ESC)`, phím `Escape` hoặc vùng nền tối → Đóng hộp thoại và trả lại tiêu điểm bàn phím.
3. **Chức năng Đóng/mở FAQ & Kiểm tra biểu mẫu (`faq.html`, `lien-he.html` - `js/form-faq.js`):**
   - *Trường hợp 1 (FAQ):* Nhấn chuột hoặc dùng phím `Tab` + `Enter` trên từng câu hỏi tại `faq.html` → Đóng/mở nội dung trả lời, cập nhật ký hiệu `+` / `−` và thuộc tính `aria-expanded`.
   - *Trường hợp 2 (Biểu mẫu lỗi):* Để trống trường bắt buộc, chỉ nhập khoảng trắng, nhập email sai định dạng (`abc@`) hoặc nội dung dưới 15 ký tự → Hiển thị thông báo lỗi dưới từng trường, viền đỏ trường lỗi và tự động đưa con trỏ (`focus`) về trường lỗi đầu tiên.
   - *Trường hợp 3 (Biểu mẫu hợp lệ):* Nhập đầy đủ 5 trường hợp lệ và nhấn gửi → Ẩn toàn bộ lỗi và hiển thị khung `Tóm tắt thông tin biểu mẫu hợp lệ (Mô phỏng tại trình duyệt)`.

---

## 6. Hướng dẫn chạy dự án

Website được xây dựng thuần bằng **HTML, CSS và JavaScript** (không yêu cầu cài đặt máy chủ, cơ sở dữ liệu hay công cụ lập trình để xem):

- **Cách 1:** Giải nén thư mục dự án và nhấn đúp chuột trực tiếp vào tệp `index.html` để mở trên trình duyệt (Chrome, Edge, Firefox...).
- **Cách 2:** Mở thư mục dự án bằng VS Code và chạy tiện ích **Live Server**.
