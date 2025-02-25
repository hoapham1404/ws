"use client";

export default function downloadImage(
  currentResolution: { resX: number; resY: number },
  currentColor: string,
) {
  if (typeof window === "undefined") {
    console.error("downloadImage can only run on the client.");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = currentResolution?.resX || 1920;
  canvas.height = currentResolution?.resY || 1080;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Failed to get 2D context.");
    return;
  }

  ctx.fillStyle = currentColor || "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.toBlob((blob) => {
    if (blob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `image_${canvas.width}x${canvas.height}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } else {
      console.warn("toBlob() failed, falling back to toDataURL()");
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `image_${canvas.width}x${canvas.height}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, "image/png");
}
