# 📋 TaskFlow Management System

Hệ thống quản lý công việc nhóm – cho phép người dùng đăng ký, đăng nhập, tạo và theo dõi tiến độ công việc theo trạng thái.

---

## 📑 Mục lục

- [Giới thiệu hệ thống](#giới-thiệu-hệ-thống)
- [Tính năng chính](#tính-năng-chính)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
- [Quy trình làm việc nhóm (Git Workflow)](#quy-trình-làm-việc-nhóm-git-workflow)
- [Phân công công việc](#phân-công-công-việc)
- [Danh sách thành viên](#danh-sách-thành-viên)

---

## 🖥️ Giới thiệu hệ thống

**TaskFlow Management** là ứng dụng web hỗ trợ quản lý công việc cá nhân và nhóm. Người dùng có thể:

- Đăng ký và đăng nhập tài khoản an toàn.
- Tạo, chỉnh sửa và xóa công việc.
- Theo dõi tiến độ qua các trạng thái: **To Do**, **In Progress**, **Done**.
- Xem thống kê tổng hợp số lượng công việc theo từng trạng thái.

Dự án được xây dựng trong khuôn khổ học tập thực hành Git & GitHub theo mô hình **Feature Branch Workflow**.

---

## ✨ Tính năng chính

|         Tính năng        |                       Mô tả                               |
|--------------------------|-----------------------------------------------------------|
| 🔐 Xác thực người dùng  | Đăng ký, đăng nhập, kiểm tra dữ liệu đầu vào              |
| ✅ Quản lý công việc    | Thêm, sửa, xóa công việc (CRUD)                           |
| 🔄 Trạng thái công việc | Chuyển đổi giữa To Do / In Progress / Done                |
| 📊 Thống kê             | Hiển thị bảng tổng hợp số lượng công việc theo trạng thái |

---

## ⚙️ Hướng dẫn cài đặt

### Yêu cầu

- Git đã được cài đặt trên máy.
- Trình duyệt web hiện đại (Chrome, Firefox, Edge...).
- _(Tùy stack dự án)_ Node.js / Python / ... _(cập nhật theo công nghệ nhóm sử dụng)_

### Các bước cài đặt

```bash
# 1. Clone repository về máy
git clone https://github.com/<tên-nhóm-trưởng>/taskflow-management.git

# 2. Di chuyển vào thư mục dự án
cd taskflow-management

# 3. Cài đặt dependencies (nếu có)
# ví dụ với Node.js:
npm install

# 4. Chạy ứng dụng
# ví dụ:
npm start
```

> ⚠️ Cập nhật lệnh chạy phù hợp với công nghệ thực tế của nhóm.

---

## 📖 Hướng dẫn sử dụng

### 1. Đăng ký tài khoản

- Truy cập trang **Register**.
- Nhập **username** và **password** (không được để trống).
- Nhấn **Đăng ký** để tạo tài khoản mới.

### 2. Đăng nhập

- Truy cập trang **Login**.
- Nhập đúng username và password đã đăng ký.
- Nhấn **Đăng nhập** để vào hệ thống.

### 3. Quản lý công việc

- Nhấn **Thêm công việc** để tạo task mới.
- Nhấn biểu tượng ✏️ để chỉnh sửa nội dung công việc.
- Nhấn biểu tượng 🗑️ để xóa công việc.

### 4. Cập nhật trạng thái

- Mỗi công việc có nhãn trạng thái màu sắc riêng:
  - 🔵 **To Do** – Chưa bắt đầu
  - 🟡 **In Progress** – Đang thực hiện
  - 🟢 **Done** – Hoàn thành
- Nhấn vào trạng thái để chuyển sang bước tiếp theo.

### 5. Xem thống kê

- Truy cập trang **Thống kê** để xem bảng tổng hợp số lượng công việc theo từng trạng thái.

---

## 🔀 Quy trình làm việc nhóm (Git Workflow)

```
main
 ├── feature/authentication      (Thành viên 1)
 ├── feature/task-management     (Thành viên 2)
 ├── feature/task-status         (Thành viên 3)
 └── feature/report-and-docs     (Thành viên 4, 5)
```

### Quy trình từng thành viên

```bash
# 1. Clone repository (chỉ làm 1 lần)
git clone https://github.com/t0fu12345/taskflow-management.git
cd taskflow-management

# 2. Tạo và chuyển sang branch của mình
git checkout -b feature/<tên-branch>

# 3. Thực hiện công việc, commit thường xuyên
git add .
git commit -m "feat: mô tả ngắn những gì vừa làm"

# 4. Đẩy branch lên GitHub
git push origin feature/<tên-branch>

# 5. Tạo Pull Request vào nhánh main trên GitHub
```

### Quy trình Review & Merge

1. Các thành viên còn lại **review Pull Request**, đưa ra nhận xét nếu cần.
2. Sau khi được ít nhất **1 thành viên Approve**, PR được merge vào `main`.
3. Cuối buổi, nhóm trưởng kiểm tra toàn bộ hệ thống sau khi merge.

---

## 📋 Phân công công việc

|   Thành viên   |                   Công việc                  |          Branch           |
|----------------|----------------------------------------------|---------------------------|
| Thành viên 1   | Đăng ký, đăng nhập, kiểm tra dữ liệu đầu vào | `feature/authentication`  |
| Thành viên 2   | Thêm, sửa, xóa công việc (CRUD)              | `feature/task-management` |
| Thành viên 3   | Quản lý & hiển thị trạng thái công việc      | `feature/task-status`     |
| Thành viên 4,5 | Trang thống kê & tài liệu dự án              | `feature/report-and-docs` |

---

## 👥 Danh sách thành viên

| STT |      Họ và tên    |       Vai trò       |
|-----|-------------------|---------------------|
|  1  | Nguyễn Anh Thư    | Quản lý người dùng  |
|  2  | Đặng Ngọc Quang   | Quản lý công việc   |
|  3  | Trần Tuấn Hùng    | Quản lý trạng thái  |
|  4  | Lê Đắc Minh Quang | Thống kê & Tài liệu |
|  5  | Cao Việt Cường    | Thống kê & Tài liệu |

---

> 📌 **Ghi chú:** Đây là dự án học tập thực hành Git & GitHub. Mọi đóng góp và phản hồi đều được hoan nghênh!