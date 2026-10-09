import { Search, Filter, Send, Image as ImageIcon, Paperclip, MoreVertical, Phone, Mail, MapPin, Tag } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { SearchInput } from "../../components/ui/SearchInput";
import { Textarea } from "../../components/ui/Textarea";
import { cn } from "../../lib/utils";

const mockConversations = [
  { id: "1", name: "Nguyễn Văn A", page: "Shop Thời Trang", lastMessage: "Cho mình hỏi size L còn không?", time: "10:24", unread: true },
  { id: "2", name: "Trần Thị B", page: "Cửa Hàng Mỹ Phẩm", lastMessage: "Cảm ơn shop nhé!", time: "Hôm qua", unread: false },
  { id: "3", name: "Lê Hoàng C", page: "Shop Thời Trang", lastMessage: "Giao hàng đến đâu rồi?", time: "T2", unread: true },
  { id: "4", name: "Phạm D", page: "Cửa Hàng Mỹ Phẩm", lastMessage: "Sản phẩm này dùng như thế nào?", time: "T7 tuần trước", unread: false },
];

const mockMessages = [
  { id: "1", sender: "customer", text: "Chào shop, áo khoác mã AK01 còn hàng không ạ?", time: "10:15" },
  { id: "2", sender: "page", text: "Dạ chào bạn, áo khoác AK01 bên mình vẫn còn size M và L ạ. Bạn cao nặng bao nhiêu để shop tư vấn size phù hợp nhé!", time: "10:20" },
  { id: "3", sender: "customer", text: "Cho mình hỏi size L còn không?", time: "10:24" },
];

export function Inbox() {
  return (
    <div className="flex h-[calc(100vh-112px)] -m-[24px] overflow-hidden bg-background">
      {/* Cột 1: Danh sách hội thoại */}
      <div className="w-[320px] flex-shrink-0 border-r border-border bg-surface flex flex-col h-full z-10">
        <div className="p-4 border-b border-border">
          <h2 className="text-[18px] font-semibold text-text-primary mb-4">Hộp thư</h2>
          <div className="flex gap-2">
            <SearchInput wrapperClassName="flex-1" className="h-9" placeholder="Tìm tin nhắn..." />
            <Button variant="secondary" className="w-9 h-9 p-0 flex-shrink-0">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockConversations.map((conv, idx) => (
            <div 
              key={conv.id} 
              className={cn(
                "p-4 border-b border-border cursor-pointer transition-colors hover:bg-[#F1F5F9]",
                idx === 0 ? "bg-primary-light border-l-2 border-l-primary" : "border-l-2 border-l-transparent"
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-[14px] font-semibold text-text-primary line-clamp-1">{conv.name}</h4>
                <span className="text-[12px] text-text-muted flex-shrink-0 ml-2">{conv.time}</span>
              </div>
              <p className="text-[12px] text-primary mb-1">{conv.page}</p>
              <div className="flex justify-between items-center gap-2">
                <p className={cn("text-[13px] line-clamp-1", conv.unread ? "font-semibold text-text-primary" : "text-text-secondary")}>
                  {conv.lastMessage}
                </p>
                {conv.unread && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cột 2: Nội dung tin nhắn */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Header tin nhắn */}
        <div className="h-[64px] px-6 border-b border-border bg-surface flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <Avatar fallback="N" />
            <div>
              <h3 className="text-[16px] font-semibold text-text-primary">Nguyễn Văn A</h3>
              <p className="text-[12px] text-text-secondary">Shop Thời Trang</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Đánh dấu chưa đọc</Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Nội dung */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          <div className="text-center">
            <Badge variant="default" className="bg-surface text-text-muted font-normal">Hôm nay</Badge>
          </div>
          
          {mockMessages.map((msg) => (
            <div key={msg.id} className={cn("flex max-w-[70%]", msg.sender === 'page' ? "ml-auto justify-end" : "")}>
              <div className={cn(
                "p-3 rounded-2xl",
                msg.sender === 'page' 
                  ? "bg-primary text-white rounded-tr-sm" 
                  : "bg-surface border border-border text-text-primary rounded-tl-sm"
              )}>
                <p className="text-[14px] leading-relaxed">{msg.text}</p>
                <div className={cn("text-[11px] mt-1 text-right", msg.sender === 'page' ? "text-primary-light" : "text-text-muted")}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ô nhập tin nhắn */}
        <div className="p-4 bg-surface border-t border-border flex-shrink-0">
          <div className="flex items-end gap-2 bg-background border border-border rounded-xl p-2 focus-within:ring-2 focus-within:ring-primary-light focus-within:border-primary transition-all">
            <div className="flex gap-1 pb-1 pl-1">
              <Button variant="ghost" className="w-8 h-8 p-0 text-text-muted hover:text-text-primary rounded-full">
                <ImageIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-text-muted hover:text-text-primary rounded-full">
                <Paperclip className="w-5 h-5" />
              </Button>
            </div>
            <Textarea 
              className="min-h-[44px] h-[44px] max-h-[120px] border-0 focus-visible:ring-0 px-2 py-3 bg-transparent resize-none"
              placeholder="Nhập tin nhắn..."
            />
            <Button className="w-10 h-10 p-0 rounded-lg flex-shrink-0 mb-0.5">
              <Send className="w-4 h-4 ml-0.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Cột 3: Thông tin khách hàng */}
      <div className="w-[300px] flex-shrink-0 border-l border-border bg-surface h-full overflow-y-auto hidden lg:block z-10">
        <div className="p-6 flex flex-col items-center border-b border-border">
          <Avatar fallback="N" size="xl" className="mb-4" />
          <h3 className="text-[18px] font-bold text-text-primary text-center">Nguyễn Văn A</h3>
          <p className="text-[13px] text-text-secondary text-center mt-1">Khách hàng mới</p>
        </div>
        
        <div className="p-6">
          <h4 className="text-[14px] font-semibold text-text-primary mb-4">Thông tin liên hệ</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-text-muted mt-0.5" />
              <div>
                <p className="text-[12px] text-text-muted mb-0.5">Số điện thoại</p>
                <p className="text-[14px] text-text-primary font-medium">0901 234 567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-text-muted mt-0.5" />
              <div>
                <p className="text-[12px] text-text-muted mb-0.5">Email</p>
                <p className="text-[14px] text-text-primary font-medium">nguyenvana@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-text-muted mt-0.5" />
              <div>
                <p className="text-[12px] text-text-muted mb-0.5">Địa chỉ</p>
                <p className="text-[14px] text-text-primary font-medium">Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[14px] font-semibold text-text-primary">Gắn thẻ (Tags)</h4>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-primary text-[12px]">Thêm</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primaryLight"><Tag className="w-3 h-3 mr-1" /> VIP</Badge>
              <Badge variant="default"><Tag className="w-3 h-3 mr-1" /> Mua nhiều</Badge>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="text-[14px] font-semibold text-text-primary mb-4">Ghi chú</h4>
            <Textarea className="min-h-[100px] text-[13px]" placeholder="Thêm ghi chú về khách hàng này..." />
            <Button variant="secondary" className="w-full mt-3">Lưu ghi chú</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
