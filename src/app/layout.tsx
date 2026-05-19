import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { cn, getAssetPath } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: "RF Planner",
  description: "Página web de RF Planner",
  icons: {
    icon: "/Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(montserrat.variable, nunito.variable, "font-sans")} suppressHydrationWarning>
      <head>
        <link rel="icon" href={getAssetPath("/Favicon.svg")} type="image/svg+xml" />
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('rf-planner-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

