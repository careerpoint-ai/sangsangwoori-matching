import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "프로필 등록 | 상상우리 매칭",
};

const regions = ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const jobTypes = ["경비·보안", "청소·환경미화", "요양·돌봄", "음식 조리·서빙", "농·축·수산업", "사무 보조", "판매·계산", "운전·배달", "제조·생산", "기타"];

export default function RegisterPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">시니어 프로필 등록</h1>
        <p className="mt-2 text-lg text-gray-500">정보를 입력하시면 맞춤 일자리를 자동으로 추천해 드립니다.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">기본 정보</CardTitle>
          <CardDescription className="text-base">* 표시는 필수 항목입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" action="#" method="POST">
            {/* 이름 */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-semibold">
                이름 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="홍길동"
                required
                className="text-lg h-12 px-4"
              />
            </div>

            {/* 지역 */}
            <div className="space-y-2">
              <Label htmlFor="region" className="text-lg font-semibold">
                거주 지역 <span className="text-red-500">*</span>
              </Label>
              <select
                id="region"
                name="region"
                required
                className="w-full h-12 px-4 text-lg border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">지역을 선택하세요</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* 희망 직종 */}
            <div className="space-y-2">
              <Label htmlFor="desired_job" className="text-lg font-semibold">
                희망 직종 <span className="text-red-500">*</span>
              </Label>
              <select
                id="desired_job"
                name="desired_job"
                required
                className="w-full h-12 px-4 text-lg border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">직종을 선택하세요</option>
                {jobTypes.map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>

            {/* 경력 */}
            <div className="space-y-2">
              <Label htmlFor="career_years" className="text-lg font-semibold">
                경력 (년수) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="career_years"
                name="career_years"
                type="number"
                min={0}
                max={50}
                placeholder="0"
                required
                className="text-lg h-12 px-4"
              />
              <p className="text-sm text-gray-400">관련 업무 경험이 없으면 0을 입력하세요.</p>
            </div>

            <Button type="submit" size="lg" className="w-full text-xl h-14 font-bold">
              프로필 등록하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
