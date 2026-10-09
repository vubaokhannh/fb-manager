import { useState } from "react";
import { ArrowLeft, Zap, MessageCircle, EyeOff, Tag, MousePointerClick, Filter, Save, Play } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/Label";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Textarea } from "../../components/ui/Textarea";
import { useNavigate } from "react-router-dom";

export function CreateAutomation() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex flex-col gap-[24px] h-full">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-[24px] font-bold text-text-primary">Tạo Kịch Bản Tự Động</h1>
            <p className="text-[14px] text-text-secondary">Xây dựng luồng xử lý tự động cho Fanpage của bạn.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" leftIcon={<Save className="w-4 h-4" />}>Lưu nháp</Button>
          <Button leftIcon={<Play className="w-4 h-4" />}>Kích hoạt kịch bản</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-0">
        
        {/* Left Column - Steps config */}
        <div className="lg:col-span-8 flex flex-col gap-6 overflow-y-auto pb-8">
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-[18px] font-semibold text-text-primary">Thông tin chung</h3>
              </div>
              <div className="space-y-4 ml-11">
                <div className="space-y-2">
                  <Label>Tên kịch bản</Label>
                  <Input placeholder="VD: Tự động ẩn comment chứa số điện thoại..." />
                </div>
                <div className="space-y-2">
                  <Label>Áp dụng cho Fanpage</Label>
                  <Select options={[
                    { value: "all", label: "Tất cả Fanpage (Đã chọn 3)" },
                    { value: "1", label: "Thương Hiệu Thời Trang A" }
                  ]} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-[18px] font-semibold text-text-primary">Khi nào kịch bản chạy? (Trigger)</h3>
              </div>
              <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'comment', title: 'Khách hàng bình luận', desc: 'Khi có người bình luận vào bài viết', icon: MessageCircle, active: true },
                  { id: 'inbox', title: 'Khách hàng nhắn tin', desc: 'Khi có người gửi tin nhắn mới', icon: MousePointerClick, active: false }
                ].map(trigger => (
                  <div key={trigger.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${trigger.active ? 'border-primary bg-primary-light/20' : 'border-border hover:border-primary/50'}`}>
                    <trigger.icon className={`w-6 h-6 mb-3 ${trigger.active ? 'text-primary' : 'text-text-muted'}`} />
                    <h4 className="font-semibold text-text-primary mb-1">{trigger.title}</h4>
                    <p className="text-[13px] text-text-secondary">{trigger.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="ml-11 mt-6 p-4 bg-[#F8FAFC] border border-border rounded-xl space-y-4">
                <h4 className="font-medium text-[14px] flex items-center gap-2"><Filter className="w-4 h-4"/> Kèm theo điều kiện</h4>
                <div className="space-y-2">
                  <Select options={[
                    { value: "phone", label: "Bình luận có chứa Số điện thoại" },
                    { value: "keyword", label: "Bình luận có chứa Từ khóa cụ thể" },
                    { value: "all", label: "Áp dụng cho mọi bình luận" }
                  ]} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-[18px] font-semibold text-text-primary">Hành động tự động (Actions)</h3>
              </div>
              <div className="ml-11 space-y-4">
                <div className="p-4 border border-border rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium">
                      <EyeOff className="w-4 h-4 text-warning" />
                      Ẩn bình luận
                    </div>
                    <input type="checkbox" className="w-4 h-4 text-primary" defaultChecked />
                  </div>
                  <p className="text-[13px] text-text-secondary">Ngay lập tức ẩn bình luận khỏi bài viết để tránh đối thủ cướp khách.</p>
                </div>

                <div className="p-4 border border-primary bg-primary-light/10 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium text-primary">
                      <MessageCircle className="w-4 h-4" />
                      Trả lời bình luận / Inbox tự động
                    </div>
                    <input type="checkbox" className="w-4 h-4 text-primary" defaultChecked />
                  </div>
                  <div className="space-y-2 pt-2">
                    <Label className="text-[12px]">Nội dung tin nhắn mẫu (Hỗ trợ spin text {`{name}`})</Label>
                    <Textarea 
                      placeholder="Dạ chào {name}, shop đã nhận được thông tin của bạn. Vui lòng check inbox nhé!" 
                      className="min-h-[80px]"
                      defaultValue="Dạ chào {name}, shop đã nhận được thông tin của bạn. Vui lòng check inbox nhé!"
                    />
                  </div>
                </div>

                <div className="p-4 border border-border rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium">
                      <Tag className="w-4 h-4 text-success" />
                      Gắn thẻ khách hàng (Tag)
                    </div>
                    <input type="checkbox" className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <Button variant="secondary" className="w-full border-dashed" leftIcon={<Zap className="w-4 h-4" />}>
                  Thêm hành động khác
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Flow Preview */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-[16px] font-semibold text-text-primary mb-4">Sơ đồ kịch bản (Preview)</h3>
            <div className="bg-[#F8FAFC] border border-border rounded-xl p-6 min-h-[400px] flex flex-col items-center">
              
              <div className="bg-white border border-border rounded-lg p-3 text-center w-full shadow-sm">
                <p className="text-[12px] text-text-secondary mb-1">Trigger</p>
                <p className="font-medium text-[14px]">Khách hàng bình luận</p>
              </div>

              <div className="w-px h-6 bg-border"></div>
              
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 text-center w-full shadow-sm text-warning-dark">
                <p className="text-[12px] mb-1">Điều kiện</p>
                <p className="font-medium text-[14px]">Chứa Số Điện Thoại</p>
              </div>

              <div className="w-px h-6 bg-border"></div>

              <div className="w-full space-y-3">
                <div className="bg-primary text-white rounded-lg p-3 text-center shadow-sm flex items-center justify-center gap-2">
                  <EyeOff className="w-4 h-4" /> Ẩn bình luận
                </div>
                <div className="bg-primary text-white rounded-lg p-3 text-center shadow-sm flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Gửi tin nhắn mẫu
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
