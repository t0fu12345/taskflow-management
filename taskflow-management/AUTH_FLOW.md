# TÀI LIỆU MÔ TẢ LUỒNG ĐĂNG NHẬP (AUTH FLOW)

### 1. Phía Người dùng (Giao diện công khai)
- Người dùng truy cập vào trang Login.
- Nhập thông tin vào 2 ô: `Username` và `Password`.
- Nhấn nút "Đăng Nhập".

### 2. Xử lý Logic tại Client (React)
- Hệ thống bắt sự kiện `onSubmit` của Form.
- Kiểm tra dữ liệu đầu vào (Validation):
  - Nếu `username` hoặc `password` rỗng/chỉ chứa dấu cách $\rightarrow$ Hiển thị thông báo lỗi lên màn hình, dừng luồng xử lý.
  - Nếu dữ liệu hợp lệ $\rightarrow$ Gửi thông tin (hoặc thông báo thành công) sang bước tiếp theo.