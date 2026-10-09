import { Search, Filter, MessageSquare, ThumbsUp, Reply, ExternalLink } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Avatar } from "../../components/ui/Avatar";
import { SearchInput } from "../../components/ui/SearchInput";
import { Textarea } from "../../components/ui/Textarea";
import { cn } from "../../lib/utils";

const mockComments = [
  { id: "1", author: "Trần Anh", post: "Bộ sưu tập Mùa Thu mới nhất...", text: "Áo này có size M không shop ơi?", time: "10 phút trước", unread: true },
  { id: "2", author: "Lê Bình", post: "Khởi động ngày mới với siêu deal...", text: "Cho mình xin giá", time: "1 giờ trước", unread: false },
  { id: "3", author: "Phạm Cường", post: "Chương trình tri ân khách hàng...", text: "Shop tư vấn nhiệt tình lắm", time: "Hôm qua", unread: false },
];

export function Comments() {
  return (
    <div className="flex h-[calc(100vh-112px)] -m-[24px] overflow-hidden bg-background">
      {/* Cột trái: Danh sách bình luận */}
      <div className="w-[360px] flex-shrink-0 border-r border-border bg-surface flex flex-col h-full z-10">
        <div className="p-4 border-b border-border">
          <h2 className="text-[18px] font-semibold text-text-primary mb-4">Bình luận mới</h2>
          <div className="flex gap-2">
            <SearchInput wrapperClassName="flex-1" className="h-9" placeholder="Tìm người bình luận..." />
            <Button variant="secondary" className="w-9 h-9 p-0 flex-shrink-0">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockComments.map((comment, idx) => (
            <div 
              key={comment.id} 
              className={cn(
                "p-4 border-b border-border cursor-pointer transition-colors hover:bg-[#F1F5F9]",
                idx === 0 ? "bg-primary-light border-l-2 border-l-primary" : "border-l-2 border-l-transparent"
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Avatar fallback={comment.author.charAt(0)} size="sm" />
                  <h4 className="text-[14px] font-semibold text-text-primary">{comment.author}</h4>
                </div>
                <span className="text-[12px] text-text-muted flex-shrink-0">{comment.time}</span>
              </div>
              <p className={cn("text-[13px] line-clamp-2 mb-2", comment.unread ? "font-semibold text-text-primary" : "text-text-primary")}>
                {comment.text}
              </p>
              <div className="flex items-center gap-1 text-[12px] text-text-muted p-2 bg-background rounded">
                <MessageSquare className="w-3 h-3" />
                <span className="line-clamp-1">{comment.post}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cột phải: Chi tiết bình luận và trả lời */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        <div className="h-[64px] px-6 border-b border-border bg-surface flex items-center justify-between flex-shrink-0">
          <h3 className="text-[16px] font-semibold text-text-primary">Chi tiết bình luận</h3>
          <Button variant="ghost" size="sm" leftIcon={<ExternalLink className="w-4 h-4" />}>
            Xem trên Facebook
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Post Context */}
          <div className="p-4 bg-surface border border-border rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-text-secondary text-[12px]">
              <MessageSquare className="w-4 h-4" />
              <span>Bài viết gốc</span>
            </div>
            <p className="text-[14px] text-text-primary">
              🎉 Bộ sưu tập Mùa Thu mới nhất đã cập bến! Nhanh tay săn sale 50% chỉ trong tuần này. 
            </p>
          </div>

          {/* Comment Thread */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Avatar fallback="T" />
              <div className="flex-1">
                <div className="bg-surface p-4 rounded-xl border border-border inline-block max-w-[80%]">
                  <h4 className="text-[14px] font-semibold text-text-primary mb-1">Trần Anh</h4>
                  <p className="text-[14px] text-text-primary mb-2">Áo này có size M không shop ơi?</p>
                  <div className="flex items-center gap-4 text-[12px] text-text-secondary font-medium">
                    <button className="hover:text-primary transition-colors">Thích</button>
                    <button className="hover:text-primary transition-colors">Phản hồi</button>
                    <span>10 phút trước</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khung trả lời */}
        <div className="p-4 bg-surface border-t border-border flex-shrink-0">
          <div className="flex flex-col gap-2">
            <Textarea 
              className="min-h-[80px] bg-background"
              placeholder="Viết phản hồi bình luận..."
            />
            <div className="flex justify-between items-center">
              <div className="text-[12px] text-text-muted">Nhấn Enter để gửi</div>
              <Button leftIcon={<Reply className="w-4 h-4" />}>
                Gửi phản hồi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
