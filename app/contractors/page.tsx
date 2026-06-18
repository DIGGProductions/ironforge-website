import type { Metadata } from "next";
import AudienceLanding from "@/components/AudienceLanding";
import { AUDIENCES } from "@/content/audiences";

const data = AUDIENCES.contractors;

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/contractors" },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: "/contractors" },
};

export default function ContractorsPage() {
  return <AudienceLanding data={data} />;
}
