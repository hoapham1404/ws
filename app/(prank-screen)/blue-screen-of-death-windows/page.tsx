import { Metadata } from "next";
import { getRouteByPath } from "@/constants/routes";
import FakeBlueScreen from "./components/FakeBlueScreen";
import PageLayout from "../PageLayout";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const screen = getRouteByPath("/blue-screen-of-death-windows");

  if (!screen) {
    return { title: "Unknown Screen" };
  }

  return {
    title: `Color: ${screen.name}`,
    icons: screen.color
      ? [
          {
            url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(screen.color)}'/>
        </svg>`,
          },
        ]
      : screen.icon
        ? [{ url: screen.icon }]
        : undefined,
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <h1 className="text-5xl text-center mb-8">Fake Blue Screen of Death</h1>
      <PageLayout
        mid={<FakeBlueScreen />}
        left={<div></div>}
        right={<div></div>}
      />
    </React.Fragment>
  );
}
