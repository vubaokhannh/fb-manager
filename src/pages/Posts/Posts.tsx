import { useState } from "react";
import { Plus, Search, Calendar, Image as ImageIcon, Send, MoreHorizontal, Clock, ThumbsUp, MessageSquare, Share2, Type } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Input } from "../../components/ui/Input";
import { SearchInput } from "../../components/ui/SearchInput";
import { Select } from "../../components/ui/Select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";
import { Post } from "../../types";
import { useNavigate } from "react-router-dom";

const initialPosts: Post[] = [
  { id: "1", content: "🎉 Bộ sưu tập Mùa Thu mới nhất đã cập bến! Nhanh tay săn sale 50% chỉ trong tuần này.", imageUrls: ["/demo1.jpg"], fanpageIds: ["1", "2"], status: "published", publishedTime: "Hôm qua, 15:30", likes: 1205, comments: 342, shares: 56 },
  { id: "2", content: "Khởi động ngày mới với siêu deal cực sốc từ shop...", imageUrls: [], fanpageIds: ["1"], status: "scheduled", scheduledTime: "Ngày mai, 08:00", likes: 0, comments: 0, shares: 0 },
  { id: "3", content: "Chương trình tri ân khách hàng thân thiết tháng 10.", imageUrls: ["/demo2.jpg"], fanpageIds: ["3"], status: "draft", likes: 0, comments: 0, shares: 0 },
];

export function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Quản lý bài viết" 
        description="Lên lịch, xuất bản và theo dõi hiệu suất các bài đăng trên Fanpage."
        actions={
          <Button leftIcon={<Plus className="w-4 h-4" />} onClick={() => navigate('/posts/create')}>
            Tạo bài viết mới
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {/* Soạn bài viết nhanh */}
        <Card className="lg:col-span-1 hidden lg:block">
          <div className="p-5 border-b border-border">
            <h3 className="text-[16px] font-semibold text-text-primary">Tạo nhanh</h3>
          </div>
          <CardContent className="p-5 pt-5 flex flex-col gap-4">
            <div>
              <label className="text-[13px] font-medium text-text-primary mb-1.5 block">Nội dung</label>
              <textarea 
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-[14px] text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary min-h-[120px] resize-none"
                placeholder="Bạn đang nghĩ gì?"
              />
            </div>
            
            <div>
              <label className="text-[13px] font-medium text-text-primary mb-1.5 block">Chọn Fanpage đăng tải</label>
              <Select 
                options={[
                  { value: "all", label: "Tất cả Fanpage đã chọn (3)" },
                  { value: "pageA", label: "Thương Hiệu Thời Trang A" },
                  { value: "pageB", label: "Cửa Hàng Mỹ Phẩm B" }
                ]}
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Button variant="secondary" className="flex-1" leftIcon={<ImageIcon className="w-4 h-4" />}>
                Thêm ảnh
              </Button>
              <Button variant="secondary" className="flex-1" leftIcon={<Calendar className="w-4 h-4" />}>
                Lên lịch
              </Button>
            </div>
            
            <Button className="w-full mt-2" leftIcon={<Send className="w-4 h-4" />}>
              Đăng ngay
            </Button>
          </CardContent>
        </Card>

        {/* Danh sách bài viết */}
        <Card className="lg:col-span-2 flex flex-col min-h-0">
          <div className="p-5 border-b border-border flex items-center justify-between gap-4">
            <SearchInput wrapperClassName="max-w-sm" placeholder="Tìm bài viết..." />
            <div className="flex gap-2">
              <Button variant="ghost" className="text-text-secondary">Tất cả</Button>
              <Button variant="ghost" className="text-primary bg-primary-light">Đã đăng</Button>
              <Button variant="ghost" className="text-text-secondary">Lên lịch</Button>
              <Button variant="ghost" className="text-text-secondary">Nháp</Button>
            </div>
          </div>
          
          <CardContent className="p-0 overflow-auto flex-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bài viết</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Tương tác</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id} className="h-auto">
                    <TableCell className="py-4">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-background rounded border border-border flex items-center justify-center flex-shrink-0">
                          {post.imageUrls.length > 0 ? (
                            <ImageIcon className="w-5 h-5 text-text-muted" />
                          ) : (
                            <Type className="w-5 h-5 text-text-muted" />
                          )}
                        </div>
                        <div>
                          <p className="text-[14px] text-text-primary font-medium line-clamp-2 mb-1">{post.content}</p>
                          <div className="flex items-center gap-1 text-text-secondary text-[12px]">
                            {post.status === 'scheduled' ? (
                              <><Clock className="w-3 h-3" /> {post.scheduledTime}</>
                            ) : post.status === 'published' ? (
                              <><Clock className="w-3 h-3" /> {post.publishedTime}</>
                            ) : (
                              "Chưa đăng"
                            )}
                            <span className="mx-1">•</span>
                            <span>{post.fanpageIds.length} Fanpage</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {post.status === 'published' && <Badge variant="success">Đã đăng</Badge>}
                      {post.status === 'scheduled' && <Badge variant="primaryLight">Lên lịch</Badge>}
                      {post.status === 'draft' && <Badge variant="default">Bản nháp</Badge>}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 text-text-secondary text-[13px]">
                        <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> {post.likes}</span>
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {post.comments}</span>
                        <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> {post.shares}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-text-secondary">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
