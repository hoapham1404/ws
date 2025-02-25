import { getRouteByPath } from "@/constants/routes";
import { useColorContext } from "@/context/ColorContext";
import { notFound } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { setBackgroundColor } = useColorContext();
  const slug = (await params).slug;
  const route = getRouteByPath(slug);
  if (!route) return notFound();
  switch (route.type) {
    case "color":
      iii;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
