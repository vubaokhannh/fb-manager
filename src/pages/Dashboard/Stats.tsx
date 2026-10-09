import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { Download } from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const barData = [
  { name: "Fanpage A", likes: 4000, comments: 2400 },
  { name: "Fanpage B", likes: 3000, comments: 1398 },
  { name: "Fanpage C", likes: 2000, comments: 9800 },
  { name: "Fanpage D", likes: 2780, comments: 3908 },
];

const pieData = [
  { name: "Đã phản hồi", value: 65 },
  { name: "Chưa phản hồi", value: 20 },
  { name: "Spam/Bỏ qua", value: 15 },
];
const COLORS = ["#16A34A", "#F59E0B", "#94A3B8"];

export function Stats() {
  return (
    <div className="flex flex-col gap-[24px]">
      <PageHeader 
        title="Thống kê chi tiết" 
        description="Phân tích hiệu suất toàn diện của tất cả Fanpage trong tháng."
        actions={
          <Button variant="secondary" leftIcon={<Download className="w-4 h-4" />}>
            Xuất dữ liệu PDF
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        {/* Tương tác theo Fanpage */}
        <Card>
          <CardHeader>
            <CardTitle>Tương tác theo Fanpage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-card)' }}
                    itemStyle={{ fontSize: '13px' }}
                    labelStyle={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="likes" name="Lượt Thích" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comments" name="Bình luận" fill="#16A34A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Tỷ lệ phản hồi tin nhắn */}
        <Card>
          <CardHeader>
            <CardTitle>Tỷ lệ phản hồi tin nhắn</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="h-[300px] w-full max-w-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-card)' }}
                    itemStyle={{ fontSize: '13px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
