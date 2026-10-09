import { User, Shield, Link2, Palette, Camera, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Select } from "../../components/ui/Select";

const menuItems = [
  { id: "profile", label: "Thông tin cá nhân", icon: User },
  { id: "security", label: "Bảo mật & Đăng nhập", icon: Shield },
  { id: "connections", label: "Quản lý kết nối", icon: Link2 },
  { id: "appearance", label: "Tùy chọn giao diện", icon: Palette },
];

export function Settings() {
  return (
    <div className="flex flex-col gap-[24px] w-full h-full">
      <PageHeader 
        title="Cài đặt hệ thống" 
        description="Quản lý cấu hình, giao diện và thông tin tài khoản của bạn."
      />

      <div className="flex flex-col gap-[24px]">
        {/* Menu cài đặt (Tab ngang) */}
        <div className="flex items-center gap-2 border-b border-border pb-4 overflow-x-auto flex-nowrap">
          {menuItems.map((item, idx) => (
            <Button 
              key={item.id}
              variant="ghost" 
              className={`whitespace-nowrap h-[40px] px-4 ${
                idx === 0 
                  ? "bg-primary-light text-primary font-semibold hover:bg-primary-light" 
                  : "text-text-secondary hover:text-text-primary hover:bg-[#F1F5F9]"
              }`}
              leftIcon={<item.icon className={`w-[18px] h-[18px] ${idx === 0 ? "text-primary" : "text-text-muted"}`} />}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Nội dung cài đặt */}
        <div className="flex-1 flex flex-col gap-[24px] w-full">
          <Card>
            <CardHeader className="border-b border-border pb-5">
              <CardTitle>Thông tin hồ sơ</CardTitle>
              <CardDescription>Cập nhật thông tin cá nhân và địa chỉ email của bạn.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-[32px] ring-4 ring-surface">
                    A
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center text-text-secondary hover:text-primary transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-text-primary mb-1">Ảnh đại diện</h4>
                  <p className="text-[12px] text-text-muted">Định dạng JPG, GIF hoặc PNG. Tối đa 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-1.5">
                  <Label>Họ và tên</Label>
                  <Input defaultValue="Admin FB Manager" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Email</Label>
                  <Input defaultValue="admin@fbmanager.com" type="email" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Số điện thoại</Label>
                  <Input defaultValue="0987654321" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Vai trò</Label>
                  <Select 
                    options={[{ label: "Quản trị viên (Admin)", value: "admin" }]} 
                    defaultValue="admin"
                    disabled
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-background border-t border-border p-4 flex justify-end gap-2 rounded-b-xl mt-2">
              <Button variant="secondary">Hủy</Button>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-5">
              <CardTitle>Đổi mật khẩu</CardTitle>
              <CardDescription>Đảm bảo tài khoản của bạn đang sử dụng mật khẩu mạnh và ngẫu nhiên để an toàn.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              {/* Form đổi mật khẩu */}
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-1.5">
                  <Label>Mật khẩu hiện tại</Label>
                  <Input type="password" placeholder="Nhập mật khẩu hiện tại" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Mật khẩu mới</Label>
                  <Input type="password" placeholder="Nhập mật khẩu mới" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Xác nhận mật khẩu mới</Label>
                  <Input type="password" placeholder="Nhập lại mật khẩu mới" />
                </div>
              </div>
              
              {/* Box yêu cầu mật khẩu */}
              <div className="flex flex-col gap-[12px] bg-[#F8FAFC] p-5 rounded-xl border border-border h-fit">
                <h4 className="text-[14px] font-semibold text-text-primary">Yêu cầu mật khẩu</h4>
                <p className="text-[13px] text-text-secondary mb-2">Để đảm bảo an toàn, mật khẩu của bạn phải đáp ứng các tiêu chí sau:</p>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2 text-[13px] text-success font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Ít nhất 8 ký tự
                  </li>
                  <li className="flex items-center gap-2 text-[13px] text-text-muted">
                    <div className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" /> Chứa ít nhất một chữ hoa (A-Z)
                  </li>
                  <li className="flex items-center gap-2 text-[13px] text-text-muted">
                    <div className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" /> Chứa ít nhất một số (0-9)
                  </li>
                  <li className="flex items-center gap-2 text-[13px] text-text-muted">
                    <div className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" /> Chứa ký tự đặc biệt (!@#$%^&*)
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="bg-background border-t border-border p-4 flex justify-end gap-2 rounded-b-xl mt-2">
              <Button>Cập nhật mật khẩu</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
