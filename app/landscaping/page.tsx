import type { Metadata } from "next";
import AudienceLanding from "@/components/AudienceLanding";
import { AUDIENCES } from "@/content/audiences";

const data = AUDIENCES.landscaping;

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/landscaping" },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: "/landscaping" },
};

export default function LandscapingPage() {
  return <AudienceLanding data={data} />;
}
