import type { ReactNode } from "react";
import Layout from "#components/layout";
import { buildMetadata } from "#lib/metadata";

export const metadata = buildMetadata({
  title: "Uses",
  description: "What I use",
  path: "/uses",
});

export default function UsesLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
