import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, Users, MessageSquare, ThumbsUp, ArrowUpRight, CheckCircle2, ShieldAlert, Clock, Link2 } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Avatar } from "../../components/ui/Avatar";
import { Badge } from "../../components/ui/Badge";

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

export function FanpageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title={
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-surface" onClick={() => navigate('/pages')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <span>Thương Hiệu Thời Trang A</span>
          </div>
        }
        actions={
          <Button variant="secondary" leftIcon={<Settings className="w-4 h-4" />}>
            Cấu hình Fanpage
          </Button>
        }
      />

      <div className="flex flex-col gap-[24px]">
        {/* Banner & Basic Info */}
        <Card className="overflow-hidden border-0 shadow-sm ring-1 ring-border/50">
          <div className="h-[200px] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200&h=300" 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <CardContent className="px-8 pb-8 pt-0 -mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
              <Avatar 
                fallback="T" 
                size="xl" 
                shape="circle" 
                className="w-[140px] h-[140px] ring-4 ring-white shadow-xl bg-white text-primary text-[48px]" 
              />
              <div className="mb-2">
                <h2 className="text-[28px] font-bold text-white md:text-text-primary drop-shadow-md md:drop-shadow-none flex items-center justify-center md:justify-start gap-2">
                  Thương Hiệu Thời Trang A
                  <CheckCircle2 className="w-6 h-6 text-blue-500 hidden md:block" />
                </h2>
                <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
                  <Badge variant="success" className="px-3 py-1">Đang hoạt động</Badge>
                  <span className="flex items-center gap-1.5 text-[13px] text-text-secondary bg-surface px-3 py-1 rounded-full border border-border">
                    <Clock className="w-3.5 h-3.5" /> Đồng bộ 10 phút trước
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-2">
              <Button variant="secondary" className="bg-white hover:bg-surface border-border text-text-primary shadow-sm" leftIcon={<Link2 className="w-4 h-4" />}>
                Xem trên Facebook
              </Button>
              <Button className="shadow-md">
                Đồng bộ dữ liệu ngay
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <Card className="hover:border-primary/30 transition-colors cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <Badge variant="success" className="bg-green-50 text-green-700 border-0 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> 12%
                </Badge>
              </div>
              <p className="text-[14px] text-text-secondary font-medium mb-1">Tổng người theo dõi</p>
              <p className="text-[32px] font-bold text-text-primary">125,430</p>
            </CardContent>
          </Card>
          
          <Card className="hover:border-primary/30 transition-colors cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <Badge variant="success" className="bg-green-50 text-green-700 border-0 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> 8.4%
                </Badge>
              </div>
              <p className="text-[14px] text-text-secondary font-medium mb-1">Tin nhắn tuần này</p>
              <p className="text-[32px] font-bold text-text-primary">1,482</p>
            </CardContent>
          </Card>
          
          <Card className="hover:border-primary/30 transition-colors cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <Badge variant="danger" className="bg-red-50 text-red-700 border-0 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 rotate-90" /> 2.1%
                </Badge>
              </div>
              <p className="text-[14px] text-text-secondary font-medium mb-1">Lượt tương tác (30 ngày)</p>
              <p className="text-[32px] font-bold text-text-primary">45.2K</p>
            </CardContent>
          </Card>
        </div>

        {/* 2 Column Detail Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader className="p-6 border-b border-border flex flex-row items-center justify-between">
              <CardTitle className="text-[16px]">Bài viết nổi bật gần đây</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary h-8" onClick={() => navigate('/posts')}>Xem tất cả</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {[
                  { id: 1, text: "🎉 Bộ sưu tập Mùa Thu mới nhất đã cập bến! Nhanh tay săn sale 50% chỉ trong tuần này...", date: "Hôm qua", likes: 1240, cmt: 342 },
                  { id: 2, text: "Góc nhá hàng BST sắp ra mắt. Các nàng thấy sao về siêu phẩm này? 🔥", date: "3 ngày trước", likes: 890, cmt: 120 },
                  { id: 3, text: "Chương trình Flash Sale cuối tuần 10/10. Miễn phí vận chuyển toàn quốc!", date: "1 tuần trước", likes: 450, cmt: 89 },
                ].map(post => (
                  <div key={post.id} className="p-6 hover:bg-surface/50 transition-colors flex gap-4">
                    <div className="w-16 h-16 rounded-lg bg-border flex-shrink-0 flex items-center justify-center text-text-muted">
                      <FacebookIcon className="w-6 h-6 opacity-50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] text-text-primary font-medium line-clamp-2 leading-relaxed mb-2">{post.text}</p>
                      <div className="flex items-center gap-4 text-[13px] text-text-secondary">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5 text-blue-500" /> {post.likes}</span>
                        <span className="flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-green-500" /> {post.cmt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Connected Rules & Staff */}
          <div className="space-y-[24px]">
            <Card>
              <CardHeader className="p-5 border-b border-border">
                <CardTitle className="text-[15px]">Tự động hóa đang chạy</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light/50 flex items-center justify-center text-primary">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-text-primary">Tự động ẩn Comment</p>
                      <p className="text-[12px] text-text-secondary">Có chứa số điện thoại</p>
                    </div>
                  </div>
                  <Badge variant="primaryLight" className="text-[11px]">Đang bật</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full flex items-center justify-center py-2 border-2 border-dashed border-border rounded-lg text-[13px] text-text-secondary hover:text-primary hover:border-primary/50 cursor-pointer transition-colors" onClick={() => navigate('/automations/create')}>
                    + Thêm kịch bản mới
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-5 border-b border-border">
                <CardTitle className="text-[15px] flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-warning" /> Trạng thái kết nối
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div>
                    <p className="text-[13px] text-text-secondary mb-1">Tài khoản Facebook liên kết</p>
                    <div className="flex items-center gap-2">
                      <Avatar fallback="K" size="sm" className="w-6 h-6" />
                      <span className="text-[14px] font-medium text-text-primary">Khanh Nguyen</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] text-text-secondary mb-1">Quyền truy cập (Permissions)</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default" className="text-[11px] font-normal bg-surface">Đọc bình luận</Badge>
                      <Badge variant="default" className="text-[11px] font-normal bg-surface">Nhắn tin</Badge>
                      <Badge variant="default" className="text-[11px] font-normal bg-surface">Đăng bài</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full text-danger hover:bg-danger/10">Ngắt kết nối Fanpage</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
