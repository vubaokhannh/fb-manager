import { useState } from "react";
import { Plus, Settings, Trash2 } from "lucide-react";

const FacebookIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { SearchInput } from "../../components/ui/SearchInput";
import { Dialog } from "../../components/ui/Dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";
import { Fanpage } from "../../types";
import { useNavigate } from "react-router-dom";

const initialFanpages: Fanpage[] = [
  { id: "1", name: "Thương Hiệu Thời Trang A", status: "connected", unreadMessages: 45, lastUpdated: "10 phút trước" },
  { id: "2", name: "Cửa Hàng Mỹ Phẩm B", status: "connected", unreadMessages: 12, lastUpdated: "1 giờ trước" },
  { id: "3", name: "Dịch Vụ Tư Vấn C", status: "reauth_required", unreadMessages: 102, lastUpdated: "1 ngày trước" },
];

export function Fanpages() {
  const navigate = useNavigate();
  const [pages, setPages] = useState<Fanpage[]>(initialFanpages);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<Fanpage | null>(null);

  const handleAddPage = () => {
    const newPage: Fanpage = {
      id: Date.now().toString(),
      name: "Fanpage Mới Vừa Thêm",
      status: "connected",
      unreadMessages: 0,
      lastUpdated: "Vừa xong"
    };
    setPages([newPage, ...pages]);
    setIsAddOpen(false);
  };

  const handleDelete = () => {
    if (selectedPage) {
      setPages(pages.filter(p => p.id !== selectedPage.id));
      setIsDeleteOpen(false);
      setSelectedPage(null);
    }
  };

  return (
    <div className="flex flex-col gap-[24px] h-full">
      <PageHeader 
        title="Quản lý Fanpage" 
        description="Xem và quản lý tất cả các Fanpage đã kết nối vào hệ thống."
        actions={
          <Button leftIcon={<Plus className="w-4 h-4" />} onClick={() => setIsAddOpen(true)}>
            Thêm Fanpage mới
          </Button>
        }
      />

      <Card className="flex-1 flex flex-col min-h-0">
        <div className="p-5 border-b border-border flex items-center justify-between gap-4">
          <SearchInput wrapperClassName="max-w-md" placeholder="Tìm kiếm theo tên Fanpage..." />
          <div className="flex gap-2">
            <Button variant="secondary">Lọc trạng thái</Button>
            <Button variant="secondary">Đồng bộ dữ liệu</Button>
          </div>
        </div>
        
        <CardContent className="p-0 flex-1 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên Fanpage</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Tin nhắn chưa đọc</TableHead>
                <TableHead>Cập nhật lần cuối</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12 text-text-muted">
                    Chưa có Fanpage nào được kết nối.
                  </TableCell>
                </TableRow>
              ) : pages.map((page) => (
                <TableRow 
                  key={page.id}
                  className="cursor-pointer hover:bg-surface/50"
                  onClick={() => navigate(`/pages/${page.id}`)}
                >
                  <TableCell className="font-medium flex items-center gap-3">
                    <Avatar fallback={page.name.charAt(0)} variant="primary" shape="square" />
                    {page.name}
                  </TableCell>
                  <TableCell>
                    {page.status === 'connected' && <Badge variant="success">Đang kết nối</Badge>}
                    {page.status === 'reauth_required' && <Badge variant="warning">Cần xác thực lại</Badge>}
                    {page.status === 'disconnected' && <Badge variant="danger">Mất kết nối</Badge>}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{page.unreadMessages}</span>
                      <span className="text-text-muted text-[12px]">tin nhắn</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-text-secondary text-[13px]">{page.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-text-secondary hover:text-primary">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-danger hover:bg-error/10 hover:text-error"
                        onClick={() => {
                          setSelectedPage(page);
                          setIsDeleteOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Modal */}
      <Dialog isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Thêm Fanpage mới" size="md">
        <div className="py-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-primary mb-4">
            <FacebookIcon className="w-8 h-8" />
          </div>
          <h3 className="text-[18px] font-semibold text-text-primary mb-2">Kết nối với Facebook</h3>
          <p className="text-[14px] text-text-secondary mb-6 px-4">
            Hệ thống sẽ chuyển hướng bạn sang Facebook để cấp quyền truy cập. Vui lòng cấp quyền cho tất cả các Fanpage bạn muốn quản lý.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <Button className="w-full" onClick={handleAddPage}>Tiếp tục với Facebook</Button>
            <Button variant="secondary" className="w-full" onClick={() => setIsAddOpen(false)}>Để sau</Button>
          </div>
        </div>
      </Dialog>

      {/* Delete Modal */}
      <Dialog isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Ngắt kết nối Fanpage" size="sm">
        <div className="space-y-4 my-4">
          <p className="text-[14px] text-text-secondary">
            Bạn có chắc chắn muốn ngắt kết nối Fanpage <span className="font-semibold text-text-primary">{selectedPage?.name}</span>? 
            Hệ thống sẽ ngừng đồng bộ tin nhắn và bình luận mới.
          </p>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" onClick={() => setIsDeleteOpen(false)}>Hủy</Button>
          <Button className="bg-error hover:bg-error/90 text-white" onClick={handleDelete}>Ngắt kết nối</Button>
        </div>
      </Dialog>
    </div>
  );
}
