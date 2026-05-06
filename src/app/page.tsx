import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menus = [
  {
    href: "/register",
    title: "프로필 등록",
    desc: "이름, 지역, 희망 직종, 경력을 입력해 매칭을 시작하세요.",
    icon: "📝",
  },
  {
    href: "/recommendations",
    title: "매칭 추천 목록",
    desc: "자동으로 계산된 점수 순으로 적합한 일자리를 확인하세요.",
    icon: "⭐",
  },
  {
    href: "/admin",
    title: "담당자 대시보드",
    desc: "미매칭 / 대기 / 배정 완료 현황을 한눈에 관리하세요.",
    icon: "📊",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">상상우리 매칭</h1>
        <p className="text-xl text-gray-600">시니어와 일자리를 자동으로 연결합니다</p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {menus.map(({ href, title, desc, icon }) => (
          <Card key={href} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <span>{icon}</span> {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
              <Link
                href={href}
                className={buttonVariants({ size: "lg", className: "w-full text-lg" })}
              >
                바로가기
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
