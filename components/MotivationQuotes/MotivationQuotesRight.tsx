import { Input } from '@/components/ui/input';
import motivationQuotesStore from './motivationQuotesStore';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';

export default function MotivationQuotesRight() {
  const { paragraph, author, additionalSize, setParagraph, setAuthor, setAdditionalSize } = motivationQuotesStore();
  const [customParagraph, setCustomParagraph] = useState(paragraph);
  const [customAuthor, setCustomAuthor] = useState(author);
  return (
    <div className="h-full flex flex-col gap-8 p-2">
      <div className="">
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

      <div className="space-y-2">
        <div className="space-y-2">
          <Textarea
            placeholder="Custom quote text"
            value={customParagraph}
            onChange={(e) => {
              setCustomParagraph(e.target.value)
              setParagraph(e.target.value)
            }}
            className="w-full h-[130px]"
          />
        </div>

        <div className="space-y-2">
          <Textarea
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
