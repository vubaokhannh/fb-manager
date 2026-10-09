import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, Unlink, Key, Clock, ShieldCheck, Flag } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Avatar } from "../../components/ui/Avatar";
import { Badge } from "../../components/ui/Badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";

export function AccountDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title={
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => navigate('/accounts')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <span>Nguyễn Văn A</span>
          </div>
        }
        actions={
          <div className="flex gap-2">
            <Button variant="ghost" className="text-danger hover:bg-red-50 hover:text-danger" leftIcon={<Unlink className="w-4 h-4" />}>
              Gỡ tài khoản
            </Button>
            <Button variant="secondary" leftIcon={<RefreshCw className="w-4 h-4" />}>
              Làm mới Token
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {/* Thông tin Token & Quyền */}
        <div className="lg:col-span-1 flex flex-col gap-[24px]">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar fallback="N" size="xl" className="mb-4 shadow-sm" />
              <h3 className="text-[18px] font-bold text-text-primary">Nguyễn Văn A</h3>
              <p className="text-[13px] text-text-secondary mt-1">Facebook ID: 1000123456789</p>
              
              <div className="mt-4 p-3 bg-success/10 rounded-lg w-full flex items-center justify-between border border-success/20">
                <div className="flex items-center gap-2 text-success font-semibold text-[14px]">
                  <ShieldCheck className="w-5 h-5" /> Token hợp lệ
                </div>
                <span className="text-[12px] text-success">Còn 50 ngày</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Quyền hạn đã cấp</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="flex flex-col">
                <li className="p-4 border-b border-border flex items-start gap-3">
                  <Key className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-[14px] font-medium text-text-primary">Đọc tin nhắn Fanpage</p>
                    <p className="text-[12px] text-text-secondary">pages_messaging</p>
                  </div>
                </li>
                <li className="p-4 border-b border-border flex items-start gap-3">
                  <Key className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-[14px] font-medium text-text-primary">Quản lý bài viết</p>
                    <p className="text-[12px] text-text-secondary">pages_manage_posts</p>
                  </div>
                </li>
                <li className="p-4 flex items-start gap-3">
                  <Key className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-[14px] font-medium text-text-primary">Đọc thông tin người dùng</p>
                    <p className="text-[12px] text-text-secondary">pages_user_profile</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Danh sách Fanpage & Lịch sử */}
        <div className="lg:col-span-2 flex flex-col gap-[24px]">
          <Card>
            <CardHeader className="border-b border-border pb-4 flex flex-row items-center justify-between">
              <CardTitle>Fanpage đang quản lý (3)</CardTitle>
              <Button variant="secondary" size="sm">Đồng bộ lại Fanpage</Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên Fanpage</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Vai trò</TableHead>
                    <TableHead className="text-right">Hành động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar fallback="T" shape="square" variant="primary" />
                        <span className="font-medium text-[14px] text-text-primary">Thương Hiệu Thời Trang A</span>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="success">Hoạt động</Badge></TableCell>
                    <TableCell><span className="text-[13px] text-text-secondary">Quản trị viên</span></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Xem</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar fallback="C" shape="square" />
                        <span className="font-medium text-[14px] text-text-primary">Cửa Hàng Mỹ Phẩm B</span>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="success">Hoạt động</Badge></TableCell>
                    <TableCell><span className="text-[13px] text-text-secondary">Biên tập viên</span></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Xem</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar fallback="D" shape="square" />
                        <span className="font-medium text-[14px] text-text-primary">Dịch Vụ Tư Vấn C</span>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="warning">Lỗi Token</Badge></TableCell>
                    <TableCell><span className="text-[13px] text-text-secondary">Quản trị viên</span></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Xem</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Nhật ký hệ thống</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="p-4 flex gap-4 border-b border-border hover:bg-[#F1F5F9] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center flex-shrink-0 mt-1">
                    <RefreshCw className="w-4 h-4 text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-text-primary">Gia hạn Token thành công</p>
                    <p className="text-[13px] text-text-secondary">Hệ thống đã tự động gia hạn token Facebook cho tài khoản này.</p>
                    <p className="text-[12px] text-text-muted mt-1">10 phút trước</p>
                  </div>
                </div>
                <div className="p-4 flex gap-4 border-b border-border hover:bg-[#F1F5F9] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Flag className="w-4 h-4 text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-text-primary">Đồng bộ Fanpage mới</p>
                    <p className="text-[13px] text-text-secondary">Đã phát hiện và thêm "Cửa Hàng Mỹ Phẩm B" vào hệ thống.</p>
                    <p className="text-[12px] text-text-muted mt-1">2 ngày trước</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
