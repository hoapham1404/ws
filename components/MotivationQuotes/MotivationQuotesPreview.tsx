"use client";

import motivationQuotesStore from "./motivationQuotesStore";

export default function MotivationQuotesPreview() {
  const { paragraph, author, additionalSize } = motivationQuotesStore();

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="max-w-2xl p-8 text-center overflow-hidden">
        <p
          style={{ fontSize: `${10 + additionalSize}px` }}
          className="mb-4 overflow-auto max-h-[60vh] break-words"
        >
          {paragraph}
        </p>
        <p style={{ fontSize: `${1 + additionalSize}px` }} className="mt-4">
          - {author}
        </p>
      </div>
    </div>
  );
}
