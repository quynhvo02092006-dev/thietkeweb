// Website/js/form-faq.js
// Phụ trách: Như Quỳnh (Kiểm tra Form Gửi câu hỏi/Góp ý & Đóng/mở FAQ)

// 1. Xử lý đóng/mở FAQ trên trang faq.html
const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length > 0) {
  faqItems.forEach(function (item) {
    const questionBtn = item.querySelector(".faq-question");
    const iconSpan = item.querySelector(".faq-icon");

    questionBtn.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");
      if (isOpen) {
        item.classList.remove("open");
        questionBtn.setAttribute("aria-expanded", "false");
        if (iconSpan) {
          iconSpan.textContent = "+";
        }
      } else {
        item.classList.add("open");
        questionBtn.setAttribute("aria-expanded", "true");
        if (iconSpan) {
          iconSpan.textContent = "−";
        }
      }
    });
  });
}

// 2. Xử lý kiểm tra Biểu mẫu trên trang lien-he.html
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
  const fullNameInput = document.getElementById("fullName");
  const userEmailInput = document.getElementById("userEmail");
  const topicSelect = document.getElementById("topicSelect");
  const messageContentInput = document.getElementById("messageContent");

  const fullNameError = document.getElementById("fullNameError");
  const userEmailError = document.getElementById("userEmailError");
  const topicSelectError = document.getElementById("topicSelectError");
  const visitorRoleError = document.getElementById("visitorRoleError");
  const messageContentError = document.getElementById("messageContentError");

  const formResultBox = document.getElementById("formResultBox");
  const resName = document.getElementById("resName");
  const resEmail = document.getElementById("resEmail");
  const resTopic = document.getElementById("resTopic");
  const resRole = document.getElementById("resRole");
  const resMessage = document.getElementById("resMessage");

  function isValidEmail(emailStr) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailStr);
  }

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Xóa thông báo lỗi cũ
    fullNameError.textContent = "";
    userEmailError.textContent = "";
    topicSelectError.textContent = "";
    visitorRoleError.textContent = "";
    messageContentError.textContent = "";
    formResultBox.classList.remove("visible");

    let isValid = true;
    let firstErrorField = null;

    // 1. Kiểm tra Họ và tên (không để trống hoặc chỉ chứa khoảng trắng)
    const nameValue = fullNameInput.value.trim();
    if (nameValue === "") {
      fullNameError.textContent = "Vui lòng nhập họ và tên (không được để trống hoặc chỉ nhập khoảng trắng).";
      isValid = false;
      firstErrorField = firstErrorField || fullNameInput;
    } else if (nameValue.length < 2) {
      fullNameError.textContent = "Họ và tên phải có ít nhất 2 ký tự.";
      isValid = false;
      firstErrorField = firstErrorField || fullNameInput;
    }

    // 2. Kiểm tra Email
    const emailValue = userEmailInput.value.trim();
    if (emailValue === "") {
      userEmailError.textContent = "Vui lòng nhập địa chỉ email liên hệ.";
      isValid = false;
      firstErrorField = firstErrorField || userEmailInput;
    } else if (!isValidEmail(emailValue)) {
      userEmailError.textContent = "Địa chỉ email không đúng định dạng (ví dụ hợp lệ: ten@mien.com).";
      isValid = false;
      firstErrorField = firstErrorField || userEmailInput;
    }

    // 3. Kiểm tra Chủ đề (Select bắt buộc)
    const topicValue = topicSelect.value.trim();
    if (topicValue === "") {
      topicSelectError.textContent = "Vui lòng chọn một chủ đề câu hỏi hoặc góp ý.";
      isValid = false;
      firstErrorField = firstErrorField || topicSelect;
    }

    // 4. Kiểm tra Nhóm đối tượng (Radio bắt buộc)
    const selectedRoleRadio = document.querySelector('input[name="visitorRole"]:checked');
    if (!selectedRoleRadio) {
      visitorRoleError.textContent = "Vui lòng chọn nhóm đối tượng người xem.";
      isValid = false;
      firstErrorField = firstErrorField || document.getElementById("roleStudent");
    }

    // 5. Kiểm tra Nội dung câu hỏi/góp ý (Textarea không rỗng, tối thiểu 15 ký tự)
    const messageValue = messageContentInput.value.trim();
    if (messageValue === "") {
      messageContentError.textContent = "Vui lòng nhập nội dung câu hỏi hoặc góp ý (không chỉ nhập khoảng trắng).";
      isValid = false;
      firstErrorField = firstErrorField || messageContentInput;
    } else if (messageValue.length < 15) {
      messageContentError.textContent = "Nội dung quá ngắn, vui lòng nhập tối thiểu 15 ký tự.";
      isValid = false;
      firstErrorField = firstErrorField || messageContentInput;
    }

    if (!isValid) {
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    // Khi hợp lệ: Hiển thị tóm tắt mô phỏng bằng textContent (an toàn XSS)
    resName.textContent = nameValue;
    resEmail.textContent = emailValue;
    resTopic.textContent = topicValue;
    resRole.textContent = selectedRoleRadio.value;
    resMessage.textContent = messageValue;

    formResultBox.classList.add("visible");
  });
}