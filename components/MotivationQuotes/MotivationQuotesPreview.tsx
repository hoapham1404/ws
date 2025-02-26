"use client";

interface MotivationQuotesPreviewProps {
  paragraph?: string;
  author?: string;
  textSize?: number;
}

const DEFAULT_PARAGRAPH =
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.";
const DEFAULT_AUTHOR = "Steve Jobs";
const BASE_PARAGRAPH_SIZE = 14;
const BASE_AUTHOR_SIZE = 2;

export default function MotivationQuotesPreview({
  paragraph = DEFAULT_PARAGRAPH,
  author = DEFAULT_AUTHOR,
  textSize = 0,
}: MotivationQuotesPreviewProps) {
  const displayParagraph =
    paragraph?.trim() === "" ? DEFAULT_PARAGRAPH : paragraph;
  const displayAuthor = author?.trim() === "" ? DEFAULT_AUTHOR : author;

  const paragraphSize = BASE_PARAGRAPH_SIZE + textSize;
  const authorSize = BASE_AUTHOR_SIZE + textSize;

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="max-w-2xl p-8 text-center overflow-hidden">
        <p
          style={{ fontSize: `${paragraphSize}px` }}
          className="mb-4 overflow-auto max-h-[60vh] break-words"
        >
          {displayParagraph}
        </p>
        <p style={{ fontSize: `${authorSize}px` }} className="mt-4">
          - {displayAuthor}
        </p>
      </div>
    </div>
  );
}
