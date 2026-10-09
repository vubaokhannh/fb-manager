import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { ROUTES } from "../../config/constants";

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Giả lập call API
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Đăng nhập thành công!");
      navigate(ROUTES.DASHBOARD);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex bg-surface">
      {/* Cột trái - Decoration */}
      <div className="hidden lg:flex flex-col justify-between w-[50%] p-12 bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <img src="/logofb.png" alt="Socialyn Logo" className="h-14 w-auto object-contain max-w-[250px] filter brightness-0 invert drop-shadow-md" />
        </div>

        <div className="relative z-10 max-w-[480px]">
          <h1 className="text-[48px] font-bold text-white leading-[1.1] mb-6">
            Giải pháp quản lý Fanpage tối ưu nhất.
          </h1>
          <p className="text-[18px] text-white/80 leading-relaxed mb-12">
            Đồng bộ tin nhắn, tự động hóa quy trình chăm sóc khách hàng và gia tăng doanh số ngay hôm nay.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt={`User ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                />
              ))}
            </div>
            <div className="text-white">
              <div className="flex text-[#FFD700] text-[14px]">★★★★★</div>
              <p className="text-[14px] text-white/80 mt-1">Được tin dùng bởi 10,000+ Agency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cột phải - Form */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 relative">
        <div className="w-full max-w-[420px] mx-auto">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center mb-10">
            <img src="/logofb.png" alt="Socialyn Logo" className="h-14 w-auto object-contain max-w-[250px]" />
          </div>

          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-[32px] font-bold text-text-primary mb-2">Đăng nhập</h2>
            <p className="text-[15px] text-text-secondary">Chào mừng bạn quay trở lại với Socialyn!</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5" noValidate>
            <div className="space-y-1.5">
              <label className="text-[14px] font-medium text-text-primary">Email</label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="admin@socialyn.com"
                  className={`pl-11 h-[48px] ${errors.email ? 'border-danger focus:ring-danger/20' : ''}`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: ""});
                  }}
                />
                <Mail className={`w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? 'text-danger' : 'text-text-muted'}`} />
              </div>
              {errors.email && <p className="text-[12px] text-danger mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[14px] font-medium text-text-primary">Mật khẩu</label>
                <a href="#" className="text-[13px] font-medium text-primary hover:underline">Quên mật khẩu?</a>
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className={`pl-11 h-[48px] ${errors.password ? 'border-danger focus:ring-danger/20' : ''}`}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({...formData, password: e.target.value});
                    if (errors.password) setErrors({...errors, password: ""});
                  }}
                />
                <Lock className={`w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 ${errors.password ? 'text-danger' : 'text-text-muted'}`} />
              </div>
              {errors.password && <p className="text-[12px] text-danger mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-[14px] text-text-secondary cursor-pointer">Ghi nhớ đăng nhập</label>
            </div>

            <Button
              type="submit"
              className="w-full h-[48px] text-[16px] font-medium shadow-md hover:shadow-lg transition-all mt-6"
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý..." : "Đăng nhập ngay"}
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}
