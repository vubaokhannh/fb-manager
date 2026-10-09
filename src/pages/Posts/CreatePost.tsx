import { useState } from "react";
import { ArrowLeft, Image as ImageIcon, Video, MapPin, Smile, Link2, Calendar, Clock, Send, Eye } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/Label";
import { Textarea } from "../../components/ui/Textarea";
import { Avatar } from "../../components/ui/Avatar";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("now");

  return (
    <div className="flex flex-col gap-[24px] h-full">
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-full" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-[24px] font-bold text-text-primary">Trình Studio Sáng tạo</h1>
          <p className="text-[14px] text-text-secondary">Soạn thảo, xem trước và lên lịch bài viết siêu chi tiết.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-[16px] font-semibold text-text-primary mb-4">1. Đích đến (Fanpage)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: 1, name: "Thương Hiệu Thời Trang A", active: true },
                  { id: 2, name: "Cửa Hàng Mỹ Phẩm B", active: false },
                  { id: 3, name: "Dịch Vụ Tư Vấn C", active: true },
                ].map((page) => (
                  <div key={page.id} className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${page.active ? "border-primary bg-primary-light/50" : "border-border hover:bg-surface"}`}>
                    <input type="checkbox" checked={page.active} readOnly className="w-4 h-4 text-primary rounded border-gray-300" />
                    <Avatar fallback={page.name.charAt(0)} size="sm" shape="square" />
                    <span className="text-[14px] font-medium text-text-primary line-clamp-1">{page.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-[16px] font-semibold text-text-primary mb-4">2. Nội dung bài viết</h3>
              
              <div className="bg-[#F8FAFC] border border-border rounded-xl overflow-hidden mb-4">
                <Textarea 
                  className="min-h-[150px] border-0 focus-visible:ring-0 bg-transparent text-[15px] p-4 resize-y"
                  placeholder="Hôm nay bạn muốn chia sẻ điều gì với khách hàng?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="p-3 border-t border-border flex items-center justify-between bg-white">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-text-secondary hover:text-primary"><Smile className="w-4 h-4 mr-1"/> Emoji</Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-text-secondary hover:text-primary"><MapPin className="w-4 h-4 mr-1"/> Vị trí</Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-text-secondary hover:text-primary"><Link2 className="w-4 h-4 mr-1"/> Link</Button>
                  </div>
                  <span className="text-[12px] text-text-muted">{content.length}/2200 ký tự</span>
                </div>
              </div>

              <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-text-secondary hover:bg-[#F1F5F9] cursor-pointer transition-all hover:border-primary">
                <div className="flex gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary">
                    <Video className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-[15px] font-medium text-text-primary mb-1">Thêm Ảnh / Video</p>
                <p className="text-[13px]">Kéo thả file vào đây hoặc bấm để chọn từ máy tính</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-[16px] font-semibold text-text-primary mb-4">3. Tùy chọn xuất bản</h3>
              
              <div className="flex flex-col gap-3">
                <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${postType === 'now' ? 'border-primary bg-primary-light/30' : 'border-border hover:bg-surface'}`}>
                  <input type="radio" name="postType" value="now" checked={postType === 'now'} onChange={() => setPostType('now')} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1 flex items-center gap-2"><Send className="w-4 h-4" /> Đăng ngay</p>
                    <p className="text-[13px] text-text-secondary">Bài viết sẽ được đăng tải ngay lập tức lên các Fanpage đã chọn.</p>
                  </div>
                </label>
                
                <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${postType === 'schedule' ? 'border-primary bg-primary-light/30' : 'border-border hover:bg-surface'}`}>
                  <input type="radio" name="postType" value="schedule" checked={postType === 'schedule'} onChange={() => setPostType('schedule')} className="mt-1 text-primary" />
                  <div className="w-full">
                    <p className="font-semibold text-text-primary mb-1 flex items-center gap-2"><Calendar className="w-4 h-4" /> Lên lịch đăng</p>
                    <p className="text-[13px] text-text-secondary mb-3">Chọn thời điểm vàng để tiếp cận nhiều khách hàng nhất.</p>
                    {postType === 'schedule' && (
                      <div className="grid grid-cols-2 gap-4 mt-2 p-3 bg-white border border-border rounded-lg">
                        <div>
                          <Label className="text-[12px]">Ngày đăng</Label>
                          <input type="date" className="w-full mt-1 border border-border rounded p-2 text-[14px]" />
                        </div>
                        <div>
                          <Label className="text-[12px]">Giờ đăng</Label>
                          <input type="time" className="w-full mt-1 border border-border rounded p-2 text-[14px]" />
                        </div>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <Button variant="secondary" className="px-6">Lưu bản nháp</Button>
                <Button className="px-8 shadow-md">
                  {postType === 'now' ? "Đăng bài viết" : "Lưu lịch đăng"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview Column */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-24">
            <h3 className="text-[16px] font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> Xem trước (Live Preview)
            </h3>
            
            <div className="w-full bg-[#F0F2F5] rounded-2xl border-[8px] border-white shadow-xl overflow-hidden min-h-[400px]">
              {/* Facebook Post Mockup */}
              <div className="bg-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Avatar fallback="T" shape="circle" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-text-primary">Thương Hiệu Thời Trang A</h4>
                    <div className="flex items-center gap-1 text-[12px] text-text-muted">
                      <span>Vừa xong</span>
                      <span>•</span>
                      <span className="flex items-center"><Eye className="w-3 h-3 mr-0.5" /> Công khai</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-[14px] text-text-primary whitespace-pre-wrap break-words leading-relaxed">
                  {content || "Nội dung bài viết sẽ hiển thị ở đây..."}
                </div>
              </div>
              
              {!content && (
                <div className="w-full h-[200px] bg-[#E4E6EB] flex flex-col items-center justify-center text-text-muted">
                  <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                  <span className="text-[13px]">Khu vực hiển thị ảnh/video</span>
                </div>
              )}
            </div>
            <p className="text-center text-[12px] text-text-muted mt-4">
              * Bản xem trước mang tính chất tham khảo, hiển thị thực tế trên thiết bị di động có thể thay đổi nhẹ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
