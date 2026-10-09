import { useState } from "react";
import { Plus, Search, Link2, Unlink, ExternalLink } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { SearchInput } from "../../components/ui/SearchInput";
import { Dialog } from "../../components/ui/Dialog";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";
import { FacebookAccount } from "../../types";
import { useNavigate } from "react-router-dom";

const initialAccounts: FacebookAccount[] = [
  { id: "1", name: "Nguyễn Văn A", status: "active", connectedPages: 3, lastSync: "10 phút trước" },
  { id: "2", name: "Trần Thị B", status: "active", connectedPages: 1, lastSync: "2 giờ trước" },
  { id: "3", name: "Lê Hoàng C", status: "expired", connectedPages: 4, lastSync: "1 ngày trước" },
];

export function Accounts() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState(initialAccounts);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<FacebookAccount | null>(null);
  
  // State for Add Modal
  const [newAccountToken, setNewAccountToken] = useState("");

  const handleAddAccount = () => {
    const newAcc: FacebookAccount = {
      id: Date.now().toString(),
      name: "Tài khoản Mới (Demo)", // Mock name derived from token in real app
      status: "active",
      connectedPages: 0,
      lastSync: "Vừa xong"
    };
    setAccounts([newAcc, ...accounts]);
    setIsAddOpen(false);
    setNewAccountToken("");
  };

  const handleDeleteAccount = () => {
    if (selectedAccount) {
      setAccounts(accounts.filter(acc => acc.id !== selectedAccount.id));
      setIsDeleteOpen(false);
      setSelectedAccount(null);
    }
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Quản lý Tài khoản Facebook" 
        description="Quản lý các tài khoản cá nhân dùng để cấp quyền truy cập Fanpage."
        actions={
          <Button leftIcon={<Plus className="w-4 h-4" />} onClick={() => setIsAddOpen(true)}>
            Thêm tài khoản
          </Button>
        }
      />

      <Card>
        <div className="p-5 border-b border-border flex items-center justify-between gap-4">
          <SearchInput wrapperClassName="max-w-md" placeholder="Tìm kiếm tài khoản..." />
        </div>
        
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên tài khoản</TableHead>
                <TableHead>Trạng thái Token</TableHead>
                <TableHead>Fanpage đang quản lý</TableHead>
                <TableHead>Đồng bộ lần cuối</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow 
                  key={account.id}
                  className="cursor-pointer hover:bg-surface/50 transition-colors"
                  onClick={() => navigate(`/accounts/${account.id}`)}
                >
                  <TableCell className="font-medium flex items-center gap-3">
                    <Avatar fallback={account.name.charAt(0)} />
                    {account.name}
                  </TableCell>
                  <TableCell>
                    {account.status === 'active' ? (
                      <Badge variant="success">Đang hoạt động</Badge>
                    ) : (
                      <Badge variant="danger">Hết hạn</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{account.connectedPages}</span> Fanpage
                  </TableCell>
                  <TableCell className="text-text-secondary text-[13px]">{account.lastSync}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                      <Button variant="secondary" size="sm" leftIcon={<Link2 className="w-3 h-3" />}>
                        Cập nhật
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-danger hover:bg-red-50 hover:text-danger"
                        onClick={() => {
                          setSelectedAccount(account);
                          setIsDeleteOpen(true);
                        }}
                      >
                        <Unlink className="w-4 h-4 mr-1" /> Gỡ
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {accounts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-text-muted">
                    Chưa có tài khoản Facebook nào được kết nối.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal Thêm tài khoản */}
      <Dialog 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Kết nối tài khoản Facebook"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsAddOpen(false)}>Hủy</Button>
            <Button onClick={handleAddAccount} disabled={!newAccountToken}>Xác nhận kết nối</Button>
          </>
        }
      >
        <div className="flex flex-col gap-6">
          <div className="bg-primary/10 p-4 rounded-xl flex items-start gap-3">
            <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-[13px] text-text-primary leading-relaxed">
              Thông thường nút này sẽ mở cửa sổ đăng nhập Facebook chính thức. 
              Trong bản Demo này, bạn có thể dán mã Access Token ảo vào bên dưới để tiếp tục.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <Label>Facebook Access Token</Label>
            <Input 
              placeholder="Dán token EAAG... của bạn vào đây" 
              value={newAccountToken}
              onChange={(e) => setNewAccountToken(e.target.value)}
            />
          </div>
        </div>
      </Dialog>

      {/* Modal Xóa tài khoản */}
      <Dialog 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        title="Gỡ tài khoản Facebook"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsDeleteOpen(false)}>Hủy</Button>
            <Button className="bg-danger hover:bg-red-700 text-white" onClick={handleDeleteAccount}>
              Xác nhận gỡ
            </Button>
          </>
        }
      >
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Bạn có chắc chắn muốn ngắt kết nối tài khoản <span className="font-semibold text-text-primary">{selectedAccount?.name}</span>? 
          <br/><br/>
          Tất cả các Fanpage (hiện có {selectedAccount?.connectedPages}) đang sử dụng Token của tài khoản này sẽ <strong>lập tức ngừng hoạt động</strong> và không thể gửi/nhận tin nhắn cho đến khi bạn kết nối lại.
        </p>
      </Dialog>
    </div>
  );
}
