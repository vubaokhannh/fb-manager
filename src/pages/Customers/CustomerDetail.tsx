import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Phone, Mail, MapPin, Tag, ShoppingBag, MessageSquare } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";

export function CustomerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title={
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => navigate('/customers')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <span>Chi tiết Khách hàng</span>
          </div>
        }
        actions={
          <Button variant="secondary" leftIcon={<Edit className="w-4 h-4" />}>
            Chỉnh sửa
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {/* Thông tin hồ sơ */}
        <Card className="lg:col-span-1 h-fit">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center border-b border-border pb-6 mb-6">
              <Avatar fallback="N" size="xl" className="mb-4" />
              <h3 className="text-[20px] font-bold text-text-primary">Nguyễn Văn A</h3>
              <p className="text-[14px] text-text-secondary mt-1">Khách hàng hạng VIP</p>
              
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <Badge variant="primaryLight">VIP</Badge>
                <Badge variant="default">Mua nhiều</Badge>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[14px] font-semibold text-text-primary">Thông tin liên hệ</h4>
              <div className="flex items-center gap-3 text-text-secondary text-[13px]">
                <Phone className="w-4 h-4 text-text-muted" />
                <span>0901 234 567</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-[13px]">
                <Mail className="w-4 h-4 text-text-muted" />
                <span>nguyenvana@email.com</span>
              </div>
              <div className="flex items-start gap-3 text-text-secondary text-[13px]">
                <MapPin className="w-4 h-4 text-text-muted mt-0.5" />
                <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lịch sử hoạt động */}
        <div className="lg:col-span-2 flex flex-col gap-[24px]">
          <div className="grid grid-cols-2 gap-[16px]">
            <Card>
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[13px] text-text-secondary font-medium">Tổng chi tiêu</p>
                  <p className="text-[20px] font-bold text-text-primary">1,250,000 ₫</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-text-secondary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[13px] text-text-secondary font-medium">Lượt tương tác</p>
                  <p className="text-[20px] font-bold text-text-primary">24 tin nhắn</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Lịch sử mua hàng</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã đơn</TableHead>
                    <TableHead>Ngày mua</TableHead>
                    <TableHead>Sản phẩm</TableHead>
                    <TableHead className="text-right">Giá trị</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-0921</TableCell>
                    <TableCell>10/10/2026</TableCell>
                    <TableCell>Áo thun nam x2</TableCell>
                    <TableCell className="text-right font-semibold">500,000 ₫</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-0145</TableCell>
                    <TableCell>15/09/2026</TableCell>
                    <TableCell>Quần Jeans</TableCell>
                    <TableCell className="text-right font-semibold">750,000 ₫</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
