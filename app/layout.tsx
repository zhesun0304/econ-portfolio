import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zhe Sun — Data Science Portfolio",
  description:
    "Economics & Computer Science student at Northeastern University. Data science, causal inference, and applied machine learning.",
  openGraph: {
    title: "Zhe Sun — Data Science Portfolio",
    description:
      "Projects in causal inference, predictive modeling, NLP, and interactive dashboards.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
