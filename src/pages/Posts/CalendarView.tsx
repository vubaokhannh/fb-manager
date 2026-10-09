import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Calendar, Clock, Image as ImageIcon } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Dialog } from "../../components/ui/Dialog";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Select } from "../../components/ui/Select";
import { Textarea } from "../../components/ui/Textarea";

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const initialMockDays = Array.from({ length: 35 }, (_, i) => {
  const date = i - 2; // offset for previous month
  return {
    date: date > 0 && date <= 31 ? date : date <= 0 ? 30 + date : date - 31,
    isCurrentMonth: date > 0 && date <= 31,
    isToday: date === 15,
    posts: date === 15 ? [{ time: "10:30", title: "Đăng ảnh SP Thu Đông" }, { time: "15:00", title: "Khuyến mãi Flash Sale" }] 
         : date === 18 ? [{ time: "09:00", title: "Minigame Tặng quà" }]
         : date === 24 ? [{ time: "08:30", title: "Chào ngày mới" }, { time: "12:00", title: "Livestream" }, { time: "20:00", title: "Tips làm đẹp" }] 
         : []
  };
});

export function CalendarView() {
  const [days, setDays] = useState(initialMockDays);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState({ title: "", time: "09:00" });

  const handleDayClick = (day: any) => {
    if (!day.isCurrentMonth) return;
    setSelectedDate(day.date);
    setIsAddOpen(true);
  };

  const handleAddEvent = () => {
    if (selectedDate) {
      const updatedDays = days.map(d => {
        if (d.date === selectedDate && d.isCurrentMonth) {
          return {
            ...d,
            posts: [...d.posts, { time: newEvent.time, title: newEvent.title || "Bài viết mới" }]
          };
        }
        return d;
      });
      setDays(updatedDays);
    }
    setIsAddOpen(false);
    setNewEvent({ title: "", time: "09:00" });
    setSelectedDate(null);
  };

  return (
    <div className="flex flex-col gap-[24px] h-full">
      <PageHeader 
        title="Lịch đăng bài" 
        description="Lên kế hoạch và theo dõi lịch đăng bài viết trên tất cả Fanpage."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="secondary" leftIcon={<ChevronLeft className="w-4 h-4" />} className="px-2" />
            <span className="text-[14px] font-semibold min-w-[120px] text-center">Tháng 10, 2026</span>
            <Button variant="secondary" leftIcon={<ChevronRight className="w-4 h-4" />} className="px-2" />
            <Button className="ml-2" leftIcon={<Plus className="w-4 h-4" />} onClick={() => { setSelectedDate(15); setIsAddOpen(true); }}>
              Tạo lịch mới
            </Button>
          </div>
        }
      />

      <Card className="flex-1 flex flex-col min-h-0 bg-surface">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b border-border bg-background rounded-t-xl">
          {weekDays.map(day => (
            <div key={day} className="p-3 text-center text-[13px] font-semibold text-text-secondary">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="flex-1 grid grid-cols-7 grid-rows-5 bg-border gap-[1px]">
          {days.map((day, idx) => (
            <div 
              key={idx} 
              className={`bg-surface p-2 flex flex-col min-h-[100px] transition-colors hover:bg-background cursor-pointer ${
                !day.isCurrentMonth ? "opacity-50 bg-[#F8FAFC] cursor-not-allowed" : ""
              } ${day.isToday ? "bg-[#F8FAFC]" : ""}`}
              onClick={() => handleDayClick(day)}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-medium ${
                  day.isToday ? "bg-primary text-white" : "text-text-primary"
                }`}>
                  {day.date}
                </span>
                {day.posts.length > 0 && (
                  <span className="text-[11px] font-medium text-text-muted">{day.posts.length} bài</span>
                )}
              </div>
              
              {/* Post items */}
              <div className="flex flex-col gap-1 overflow-y-auto">
                {day.posts.map((post, i) => (
                  <div key={i} className="text-[11px] bg-primary-light text-primary border border-primary/20 px-1.5 py-1 rounded truncate shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span>{post.time} - {post.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Add Event Modal */}
      <Dialog isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Lên lịch bài viết" size="md">
        <div className="space-y-4 my-4">
          <div className="flex items-center gap-2 text-primary font-medium bg-primary-light p-3 rounded-lg text-[14px]">
            <Calendar className="w-5 h-5" />
            <span>Ngày {selectedDate} tháng 10 năm 2026</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Thời gian đăng (Giờ:Phút)</Label>
              <Input 
                type="time"
                value={newEvent.time}
                onChange={e => setNewEvent({...newEvent, time: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Fanpage</Label>
              <Select 
                options={[
                  { value: "1", label: "Thương Hiệu Thời Trang A" },
                  { value: "2", label: "Cửa Hàng Mỹ Phẩm B" },
                ]}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Chủ đề / Tiêu đề ngắn gọn (để hiển thị trên lịch)</Label>
            <Input 
              placeholder="VD: Khuyến mãi Flash Sale..." 
              value={newEvent.title}
              onChange={e => setNewEvent({...newEvent, title: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label>Nội dung chi tiết</Label>
            <Textarea placeholder="Nội dung sẽ đăng lên Fanpage..." className="min-h-[100px]" />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border">
          <Button variant="secondary" onClick={() => setIsAddOpen(false)}>Hủy</Button>
          <Button onClick={handleAddEvent}>Lưu vào lịch</Button>
        </div>
      </Dialog>
    </div>
  );
}
