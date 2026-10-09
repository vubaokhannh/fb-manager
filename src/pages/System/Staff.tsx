import { useState } from "react";
import { Plus, Search, Shield, MoreHorizontal, Mail, Trash2, Edit2 } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { SearchInput } from "../../components/ui/SearchInput";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Select } from "../../components/ui/Select";
import { Dialog } from "../../components/ui/Dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";

const initialStaff = [
  { id: "1", name: "Nguyễn Tuấn", email: "tuan@fbmanager.com", role: "admin", status: "active", lastActive: "Vừa xong" },
  { id: "2", name: "Trần Mai", email: "mai@fbmanager.com", role: "editor", status: "active", lastActive: "2 giờ trước" },
  { id: "3", name: "Lê Khang", email: "khang@fbmanager.com", role: "moderator", status: "invited", lastActive: "Chưa đăng nhập" },
];

export function Staff() {
  const [staffList, setStaffList] = useState(initialStaff);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);

  // Form states for Add/Edit
  const [formData, setFormData] = useState({ name: "", email: "", role: "editor" });

  const handleOpenAdd = () => {
    setFormData({ name: "", email: "", role: "editor" });
    setIsAddOpen(true);
  };

  const handleAdd = () => {
    const newStaff = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: "invited",
      lastActive: "Chưa đăng nhập"
    };
    setStaffList([...staffList, newStaff]);
    setIsAddOpen(false);
  };

  const handleDelete = () => {
    if (selectedStaff) {
      setStaffList(staffList.filter(s => s.id !== selectedStaff.id));
      setIsDeleteOpen(false);
      setSelectedStaff(null);
    }
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Quản lý nhân viên" 
        description="Phân quyền và quản lý các thành viên trong đội ngũ."
        actions={
          <Button leftIcon={<Plus className="w-4 h-4" />} onClick={handleOpenAdd}>
            Mời nhân viên
          </Button>
        }
      />

      <Card>
        <div className="p-5 border-b border-border flex items-center justify-between gap-4">
          <SearchInput wrapperClassName="max-w-sm" placeholder="Tìm nhân viên theo tên hoặc email..." />
          <div className="flex gap-2">
            <Button variant="secondary">Vai trò</Button>
            <Button variant="secondary">Trạng thái</Button>
          </div>
        </div>
        
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Vai trò</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hoạt động gần nhất</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffList.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar fallback={staff.name.charAt(0)} variant="primary" />
                      <div>
                        <p className="font-medium text-[14px] text-text-primary">{staff.name}</p>
                        <p className="text-[13px] text-text-muted">{staff.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-text-secondary text-[14px]">
                      <Shield className="w-4 h-4" />
                      {staff.role === 'admin' && 'Quản trị viên'}
                      {staff.role === 'editor' && 'Biên tập viên'}
                      {staff.role === 'moderator' && 'Kiểm duyệt viên'}
                    </div>
                  </TableCell>
                  <TableCell>
                    {staff.status === 'active' ? (
                      <Badge variant="success">Hoạt động</Badge>
                    ) : (
                      <Badge variant="warning">Đã gửi lời mời</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-text-secondary text-[13px]">{staff.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-text-secondary hover:text-primary">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-danger hover:bg-red-50 hover:text-danger"
                        onClick={() => {
                          setSelectedStaff(staff);
                          setIsDeleteOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {staffList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-text-muted">
                    Chưa có nhân viên nào. Hãy thêm nhân viên mới!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal Thêm Nhân viên */}
      <Dialog 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Mời nhân viên mới"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsAddOpen(false)}>Hủy bỏ</Button>
            <Button onClick={handleAdd} disabled={!formData.name || !formData.email}>Gửi lời mời</Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Họ và tên</Label>
            <Input 
              placeholder="Nhập tên nhân viên" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Email</Label>
            <Input 
              type="email" 
              placeholder="nhanvien@email.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Vai trò</Label>
            <Select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              options={[
                { label: "Quản trị viên (Admin)", value: "admin" },
                { label: "Biên tập viên (Editor)", value: "editor" },
                { label: "Kiểm duyệt viên (Moderator)", value: "moderator" },
              ]}
            />
            <p className="text-[12px] text-text-muted mt-1">
              Biên tập viên có quyền trả lời tin nhắn, đăng bài nhưng không thể quản lý nhân sự.
            </p>
          </div>
        </div>
      </Dialog>

      {/* Modal Xóa Nhân viên */}
      <Dialog 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        title="Xóa nhân viên"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsDeleteOpen(false)}>Hủy</Button>
            <Button className="bg-danger hover:bg-red-700 text-white" onClick={handleDelete}>Xóa vĩnh viễn</Button>
          </>
        }
      >
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Bạn có chắc chắn muốn xóa nhân viên <span className="font-semibold text-text-primary">{selectedStaff?.name}</span> khỏi hệ thống không? Hành động này không thể hoàn tác và họ sẽ mất toàn quyền truy cập.
        </p>
      </Dialog>
    </div>
  );
}
