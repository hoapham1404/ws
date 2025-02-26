import { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';

interface MotivationQuotesRightProps {
  size: number;
  onSizeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customQuoteText: string;
  customQuoteAuthor: string;
  onCustomQuoteTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCustomQuoteAuthorChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MotivationQuotesRight({
  size,
  onSizeChange,
  customQuoteText,
  customQuoteAuthor,
  onCustomQuoteTextChange,
  onCustomQuoteAuthorChange,
}: MotivationQuotesRightProps) {
  return (
    <div className="flex flex-col gap-6 p-6 w-[300px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Size: {size}px</label>
        <Input
          type="range"
          value={size}
          onChange={onSizeChange}
          min={10}
          max={100}
          step={1}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Custom quote text"
            value={customQuoteText}
            onChange={onCustomQuoteTextChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Custom quote author"
            value={customQuoteAuthor}
            onChange={onCustomQuoteAuthorChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
