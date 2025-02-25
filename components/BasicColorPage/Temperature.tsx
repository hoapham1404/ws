"use client";
import { hexToRgb } from "@/lib/temperature";
import { colorStore } from "@/store/colorStore";
import React from "react";

export default function Temperature() {
  const { currentColor } = colorStore();
  const rgb = hexToRgb(currentColor);
  if (!rgb) return null;
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">R:</label>
        <span>{rgb.r}</span>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">G:</label>
        <span>{rgb.g}</span>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">B:</label>
        <span>{rgb.b}</span>
      </div>
    </div>
  );
}
