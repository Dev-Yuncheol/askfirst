import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미리 묻다",
  description: "고객에게 미리 묻고, 더 나은 선택을 시작하세요.",
  icons: { icon: "/logo-mark.svg", shortcut: "/logo-mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
