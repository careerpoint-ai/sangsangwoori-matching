import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "매칭 추천 | 상상우리 매칭",
};

/* 추후 Supabase에서 실제 데이터를 가져올 자리 — 지금은 빈 뼈대 */
const placeholderMatches = [
  { rank: 1, jobTitle: "—", region: "—", jobType: "—", score: 0, seniorName: "—" },
  { rank: 2, jobTitle: "—", region: "—", jobType: "—", score: 0, seniorName: "—" },
  { rank: 3, jobTitle: "—", region: "—", jobType: "—", score: 0, seniorName: "—" },
];

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 80 ? "bg-green-100 text-green-800" :
    score >= 50 ? "bg-yellow-100 text-yellow-800" :
    "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
      {score}점
    </span>
  );
}

export default function RecommendationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">자동 매칭 추천 목록</h1>
        <p className="mt-2 text-lg text-gray-500">매칭 점수 높은 순으로 정렬됩니다. (기능 구현 예정)</p>
      </div>

      {/* 필터 영역 — 기능 구현 예정 */}
      <Card>
        <CardContent className="pt-4 pb-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="outline" className="text-base px-4 py-2 cursor-pointer hover:bg-gray-100">
              전체
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2 cursor-pointer hover:bg-gray-100">
              점수 80점 이상
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2 cursor-pointer hover:bg-gray-100">
              서울·경기
            </Badge>
            <span className="text-sm text-gray-400 ml-auto">필터 기능 — 다음 블록에서 구현</span>
          </div>
        </CardContent>
      </Card>

      {/* 추천 카드 목록 */}
      <div className="space-y-4">
        {placeholderMatches.map(({ rank, jobTitle, region, jobType, score, seniorName }) => (
          <Card key={rank} className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-blue-600">#{rank}</span>
                  <CardTitle className="text-xl">{jobTitle}</CardTitle>
                </div>
                <ScoreBadge score={score} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-base text-gray-600">
                <div><span className="font-medium">지역:</span> {region}</div>
                <div><span className="font-medium">직종:</span> {jobType}</div>
                <div><span className="font-medium">시니어:</span> {seniorName}</div>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                * 실제 매칭 데이터는 다음 블록(규칙 기반 매칭 구현) 후 표시됩니다.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
