import { useState } from "react";
import { Search, Filter, Download, Plus, MapPin, Phone, Mail, MoreHorizontal } from "lucide-react";
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
import { useNavigate } from "react-router-dom";

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  tags: string[];
  lastOrder: string;
  spent: string;
};

const initialCustomers: Customer[] = [
  { id: "1", name: "Nguyễn Văn A", phone: "0901 234 567", email: "nguyenvana@email.com", tags: ["VIP", "Mua nhiều"], lastOrder: "2 ngày trước", spent: "1,250,000 ₫" },
  { id: "2", name: "Trần Thị B", phone: "0987 654 321", email: "tranthib@email.com", tags: ["Khách mới"], lastOrder: "Hôm nay", spent: "350,000 ₫" },
  { id: "3", name: "Lê Hoàng C", phone: "0933 444 555", email: "lehoangc@email.com", tags: ["Sỉ"], lastOrder: "1 tuần trước", spent: "5,000,000 ₫" },
];

export function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: "", phone: "", email: "" });

  const handleAddCustomer = () => {
    const customer: Customer = {
      id: Date.now().toString(),
      name: newCustomer.name || "Khách hàng mới",
      phone: newCustomer.phone || "Chưa cập nhật",
      email: newCustomer.email || "Chưa cập nhật",
      tags: ["Khách mới"],
      lastOrder: "Chưa có",
      spent: "0 ₫"
    };
    setCustomers([customer, ...customers]);
    setIsAddOpen(false);
    setNewCustomer({ name: "", phone: "", email: "" });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Quản lý Khách hàng (CRM)" 
        description="Lưu trữ và phân tích dữ liệu khách hàng từ các Fanpage."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="secondary" leftIcon={<Download className="w-4 h-4" />}>Xuất Excel</Button>
            <Button leftIcon={<Plus className="w-4 h-4" />} onClick={() => setIsAddOpen(true)}>Thêm khách hàng</Button>
          </div>
        }
      />

      <Card>
        <div className="p-5 border-b border-border flex items-center justify-between gap-4">
          <SearchInput wrapperClassName="max-w-md" placeholder="Tìm theo tên, SĐT, hoặc Email..." />
          <div className="flex gap-2">
            <Button variant="secondary" leftIcon={<Filter className="w-4 h-4" />}>Lọc theo thẻ</Button>
          </div>
        </div>
        
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Liên hệ</TableHead>
                <TableHead>Phân loại (Tags)</TableHead>
                <TableHead>Mua gần nhất</TableHead>
                <TableHead>Tổng chi tiêu</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow 
                  key={customer.id} 
                  className="cursor-pointer hover:bg-surface/50"
                  onClick={() => navigate(`/customers/${customer.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar fallback={customer.name.charAt(0)} />
                      <span className="font-medium text-[14px] text-text-primary">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-[13px] text-text-secondary">
                      <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {customer.phone}</span>
                      <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {customer.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1.5">
                      {customer.tags.map(tag => (
                        <Badge key={tag} variant={tag === 'VIP' ? 'primaryLight' : 'default'}>{tag}</Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-text-secondary text-[13px]">{customer.lastOrder}</TableCell>
                  <TableCell className="font-semibold text-text-primary text-[14px]">{customer.spent}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-text-secondary">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Modal */}
      <Dialog isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Thêm khách hàng mới" size="md">
        <div className="space-y-4 my-4">
          <div className="space-y-2">
            <Label>Tên khách hàng</Label>
            <Input 
              placeholder="VD: Nguyễn Văn A" 
              value={newCustomer.name}
              onChange={e => setNewCustomer({...newCustomer, name: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Số điện thoại</Label>
              <Input 
                placeholder="VD: 0901234567" 
                value={newCustomer.phone}
                onChange={e => setNewCustomer({...newCustomer, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input 
                placeholder="VD: email@example.com" 
                value={newCustomer.email}
                onChange={e => setNewCustomer({...newCustomer, email: e.target.value})}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border">
          <Button variant="secondary" onClick={() => setIsAddOpen(false)}>Hủy</Button>
          <Button onClick={handleAddCustomer}>Lưu khách hàng</Button>
        </div>
      </Dialog>
    </div>
  );
}
