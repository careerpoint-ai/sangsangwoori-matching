import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "담당자 대시보드 | 상상우리 매칭",
};

/* 추후 Supabase에서 실제 집계 — 지금은 빈 뼈대 */
const stats = [
  { label: "미매칭", count: 0, color: "bg-red-50 border-red-300 text-red-700", badgeClass: "bg-red-100 text-red-800" },
  { label: "매칭 대기", count: 0, color: "bg-yellow-50 border-yellow-300 text-yellow-700", badgeClass: "bg-yellow-100 text-yellow-800" },
  { label: "배정 완료", count: 0, color: "bg-green-50 border-green-300 text-green-700", badgeClass: "bg-green-100 text-green-800" },
];

const placeholderRows = [
  { name: "—", region: "—", desiredJob: "—", status: "미매칭", score: null },
  { name: "—", region: "—", desiredJob: "—", status: "매칭 대기", score: null },
  { name: "—", region: "—", desiredJob: "—", status: "배정 완료", score: null },
];

function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "배정 완료" ? "bg-green-100 text-green-800" :
    status === "매칭 대기" ? "bg-yellow-100 text-yellow-800" :
    "bg-red-100 text-red-800";
  return <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${cls}`}>{status}</span>;
}

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">담당자 대시보드</h1>
        <p className="mt-2 text-lg text-gray-500">전체 매칭 현황을 관리합니다. (기능 구현 예정)</p>
      </div>

      {/* 요약 카드 3종 */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, count, color, badgeClass }) => (
          <Card key={label} className={`border-2 ${color}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className={`text-4xl font-bold px-3 py-1 rounded-full ${badgeClass}`}>
                {count}
              </span>
              <p className="mt-2 text-sm opacity-70">건</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 시니어 목록 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">시니어 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">이름</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">지역</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">희망 직종</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">매칭 점수</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">상태</th>
                </tr>
              </thead>
              <tbody>
                {placeholderRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{row.name}</td>
                    <td className="py-4 px-4 text-gray-600">{row.region}</td>
                    <td className="py-4 px-4 text-gray-600">{row.desiredJob}</td>
                    <td className="py-4 px-4 text-gray-500">{row.score ?? "—"}</td>
                    <td className="py-4 px-4">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            * 실제 데이터는 다음 블록(규칙 기반 매칭 구현) 후 표시됩니다.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
