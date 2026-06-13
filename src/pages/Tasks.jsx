import React, { useEffect, useState } from "react";

// Simple task shape: { id: string, title: string, description: string }
const STORAGE_KEY = "taskflow_tasks_v1";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load tasks", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks", e);
    }
  }, [tasks]);

  function resetForm() {
    setTitle("");
    setDescription("");
    setEditingId(null);
  }

  function handleAddOrUpdate(e) {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingId) {
      // Update
      setTasks((prev) => prev.map((t) => (t.id === editingId ? { ...t, title: title.trim(), description } : t)));
    } else {
      const newTask = { id: Date.now().toString(), title: title.trim(), description };
      setTasks((prev) => [newTask, ...prev]);
    }

    resetForm();
  }

  function handleEdit(task) {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    if (!window.confirm("Xác nhận xóa công việc này?")) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2>Quản lý công việc</h2>

      <form onSubmit={handleAddOrUpdate} style={{ background: "#fff", padding: 16, borderRadius: 6, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Tiêu đề</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nhập tiêu đề công việc" style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ddd" }} />
          </div>
          <div style={{ flex: 2 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Mô tả</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Mô tả ngắn (tùy chọn)" style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ddd" }} />
          </div>
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: "8px 14px", background: "#6f42c1", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}>{editingId ? "Lưu" : "Thêm công việc"}</button>
          <button type="button" onClick={resetForm} style={{ padding: "8px 14px", background: "#e9ecef", border: "none", borderRadius: 4, cursor: "pointer" }}>Hủy</button>
        </div>
      </form>

      <div>
        <h3 style={{ marginBottom: 8 }}>Danh sách công việc ({tasks.length})</h3>
        {tasks.length === 0 ? (
          <div style={{ padding: 20, background: "#fff", borderRadius: 6, color: "#666" }}>Chưa có công việc nào. Thêm công việc mới ở trên.</div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
            {tasks.map((task) => (
              <li key={task.id} style={{ background: "#fff", padding: 12, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{task.title}</div>
                  {task.description && <div style={{ color: "#555", marginTop: 6 }}>{task.description}</div>}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => handleEdit(task)} style={{ padding: "6px 10px", background: "#ffc107", border: "none", borderRadius: 4, cursor: "pointer" }}>Edit</button>
                  <button onClick={() => handleDelete(task.id)} style={{ padding: "6px 10px", background: "#dc3545", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
