import { Input } from '@/components/ui/input';
import motivationQuotesStore from './motivationQuotesStore';
import { useState } from 'react';

export default function MotivationQuotesRight() {
  const { paragraph, author, additionalSize, setParagraph, setAuthor, setAdditionalSize } = motivationQuotesStore();
  const [customParagraph, setCustomParagraph] = useState(paragraph);
  const [customAuthor, setCustomAuthor] = useState(author);
  return (
    <div className="flex flex-col gap-6 p-6 w-[300px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Size: {additionalSize}px</label>
        <Input
          type="range"
          value={additionalSize}
          onChange={(e) => setAdditionalSize(Number(e.target.value))}
          min={0}
          max={100}
          step={1}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Custom quote text"
            value={customParagraph}
            onChange={(e) => {
              setCustomParagraph(e.target.value)
              setParagraph(e.target.value)
            }}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Custom quote author"
            value={customAuthor}
            onChange={(e) => {
              setCustomAuthor(e.target.value)
              setAuthor(e.target.value)
            }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
