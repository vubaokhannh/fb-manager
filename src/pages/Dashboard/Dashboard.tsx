import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/DataTable";

const data = [
  { name: "T2", messages: 4000, comments: 2400 },
  { name: "T3", messages: 3000, comments: 1398 },
  { name: "T4", messages: 2000, comments: 9800 },
  { name: "T5", messages: 2780, comments: 3908 },
  { name: "T6", messages: 1890, comments: 4800 },
  { name: "T7", messages: 2390, comments: 3800 },
  { name: "CN", messages: 3490, comments: 4300 },
];

const statCards = [
  {
    title: "Tổng Fanpage",
    value: "24",
    trend: "+2",
    trendUp: true,
    icon: Users,
    color: "text-primary",
    bg: "bg-primary-light"
  },
  {
    title: "Tin nhắn mới",
    value: "1,234",
    trend: "+12.5%",
    trendUp: true,
    icon: MessageSquare,
    color: "text-success",
    bg: "bg-[#DCFCE7]"
  },
  {
    title: "Bình luận mới",
    value: "842",
    trend: "-4.2%",
    trendUp: false,
    icon: ThumbsUp,
    color: "text-warning",
    bg: "bg-[#FEF3C7]"
  },
  {
    title: "Lượt tương tác",
    value: "24.5K",
    trend: "+24.5%",
    trendUp: true,
    icon: TrendingUp,
    color: "text-danger",
    bg: "bg-[#FEE2E2]"
  }
];

export function Dashboard() {
  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Tổng quan" 
        description="Theo dõi hoạt động và hiệu suất của các Fanpage trong 7 ngày qua."
        actions={
          <>
            <Button variant="secondary">Xuất báo cáo</Button>
            <Button>Kết nối Fanpage</Button>
          </>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        {statCards.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-[13px] font-medium text-text-secondary mb-1">{stat.title}</p>
                <div className="flex items-end gap-2">
                  <h3 className="text-[24px] font-bold text-text-primary leading-none">{stat.value}</h3>
                  <span className={`text-[12px] font-medium flex items-center mb-0.5 ${stat.trendUp ? 'text-success' : 'text-danger'}`}>
                    {stat.trendUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {/* Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Biểu đồ tương tác</CardTitle>
              <CardDescription>So sánh lượng tin nhắn và bình luận</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="h-8">7 ngày qua</Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#16A34A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-card)' }}
                    itemStyle={{ fontSize: '13px' }}
                    labelStyle={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="messages" name="Tin nhắn" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorMessages)" />
                  <Area type="monotone" dataKey="comments" name="Bình luận" stroke="#16A34A" strokeWidth={2} fillOpacity={1} fill="url(#colorComments)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Cập nhật trong 24 giờ qua</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-light flex-shrink-0 flex items-center justify-center text-primary mt-1">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] text-text-primary">
                      <span className="font-medium">Khách hàng {i+1}</span> đã gửi tin nhắn đến <span className="font-medium">Fanpage Shop {i+1}</span>
                    </p>
                    <p className="text-[12px] text-text-secondary mt-1">1{i} phút trước</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-primary">Xem tất cả hoạt động</Button>
          </CardContent>
        </Card>
      </div>

      {/* Active Fanpages Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Fanpage đang hoạt động</CardTitle>
            <CardDescription>Trạng thái kết nối của các Fanpage</CardDescription>
          </div>
          <Button variant="secondary" size="sm">Xem tất cả</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên Fanpage</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Tin nhắn chưa đọc</TableHead>
                <TableHead>Cập nhật lần cuối</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5].map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#E2E8F0] flex items-center justify-center text-text-secondary font-bold">
                      F{item}
                    </div>
                    Thương Hiệu Shop {item}
                  </TableCell>
                  <TableCell>
                    <Badge variant={item % 2 === 0 ? "success" : "warning"}>
                      {item % 2 === 0 ? "Đang kết nối" : "Cần xác thực lại"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{item * 12}</span>
                      <span className="text-text-muted text-[12px]">tin nhắn</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-text-secondary text-[13px]">Vừa xong</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
  );
}
