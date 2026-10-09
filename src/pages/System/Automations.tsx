import { useState } from "react";
import { Zap, Bot, EyeOff, MessageSquareReply, Power, Plus, Trash2 } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

type AutomationRule = {
  id: string;
  title: string;
  description: string;
  icon: any;
  active: boolean;
};

const initialAutomations: AutomationRule[] = [
  { id: "1", title: "Ẩn bình luận chứa SĐT", description: "Tự động ẩn các bình luận có chứa số điện thoại để tránh bị cướp khách.", icon: EyeOff, active: true },
  { id: "2", title: "Chatbot chào mừng", description: "Tự động gửi tin nhắn chào mừng khi khách hàng inbox lần đầu.", icon: Bot, active: true },
  { id: "3", title: "Tự động trả lời theo từ khóa", description: "Gửi tin nhắn mẫu dựa trên từ khóa (vd: giá, size, địa chỉ).", icon: MessageSquareReply, active: false },
];

export function Automations() {
  const navigate = useNavigate();
  const [automations, setAutomations] = useState<AutomationRule[]>(initialAutomations);

  const toggleActive = (id: string) => {
    setAutomations(automations.map(a => a.id === id ? { ...a, active: !a.active } : a));
  };

  const handleDelete = (id: string) => {
    setAutomations(automations.filter(a => a.id !== id));
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Tự động hóa (Automations)" 
        description="Thiết lập các quy tắc tự động để tiết kiệm thời gian phản hồi và quản lý."
        actions={
          <Button leftIcon={<Plus className="w-4 h-4" />} onClick={() => navigate('/automations/create')}>
            Tạo quy tắc mới
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {automations.map(auto => (
          <Card key={auto.id} className={`transition-all ${!auto.active ? "opacity-75" : "border-primary"}`}>
            <CardContent className="p-6 flex flex-col h-full gap-4">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${auto.active ? "bg-primary-light text-primary" : "bg-[#F1F5F9] text-text-muted"}`}>
                  <auto.icon className="w-6 h-6" />
                </div>
                <div className={`px-2 py-1 rounded text-[11px] font-semibold uppercase ${auto.active ? "bg-success/10 text-success" : "bg-[#E2E8F0] text-text-secondary"}`}>
                  {auto.active ? "Đang chạy" : "Tạm dừng"}
                </div>
              </div>
              
              <div>
                <h3 className="text-[16px] font-semibold text-text-primary mb-1 line-clamp-1">{auto.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed line-clamp-2">{auto.description}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="text-primary h-8 px-2 -ml-2 text-[13px]">
                    Cấu hình
                  </Button>
                  <Button variant="ghost" className="text-error h-8 px-2 text-[13px] hover:bg-error/10" onClick={() => handleDelete(auto.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="h-8" 
                  leftIcon={<Power className="w-3.5 h-3.5" />}
                  onClick={() => toggleActive(auto.id)}
                >
                  {auto.active ? "Tắt" : "Bật"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}
