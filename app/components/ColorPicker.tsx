import React, { ReactElement } from "react";
import { getColorRoutes } from "@/constants/routes";
import Link from "next/link";

export interface ColorPickerProps {
  color?: string
}

export default function ColorPicker(
  props: ColorPickerProps
): ReactElement {

  const color = props.color || "#FFFFFF";
  const listColorRoutes = getColorRoutes();
  return (
    <div>
      <div className="grid grid-cols-3">

        <div>
          {
            listColorRoutes.map((route) => (
              <div key={route.path} className="flex gap-4">
                <div className="w-8 h-8" style={{ backgroundColor: route.color }} />

                <Link href={route.path}>
                  {route.name}
                </Link>
              </div>
            ))
          }
        </div>

        <div className="col-span-2">
          <div className="w-full h-96" style={{ backgroundColor: color }} />
          <div>
            <p>{color} Background</p>
          </div>
        </div>
      </div>
    </div>
  );
}
