import { colorStore } from "@/store/colorStore";
import { Button } from "../ui/button";
import downloadImage from "@/lib/downloadImage";

export default function DownloadImageButton() {
  const { currentResolution, currentColor } = colorStore((state) => state);
  return (
    <Button onClick={() => downloadImage(currentResolution, currentColor)}>
      Download Image
    </Button>
  );
}
