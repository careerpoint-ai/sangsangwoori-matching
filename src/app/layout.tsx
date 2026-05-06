import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "상상우리 매칭 — 시니어 일자리 자동 매칭",
  description: "시니어와 일자리를 규칙 기반으로 자동 매칭합니다.",
};

const navLinks = [
  { href: "/register", label: "프로필 등록" },
  { href: "/recommendations", label: "매칭 추천" },
  { href: "/admin", label: "담당자 대시보드" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-700 shrink-0">
              상상우리
            </Link>
            <nav className="flex gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors px-2 py-1 rounded"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-200">
          © 2024 상상우리 — 시니어 일자리 매칭 플랫폼
        </footer>
      </body>
    </html>
  );
}
