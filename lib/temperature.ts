// Helper function to convert a number to a 2-digit hex
const componentToHex = (c: number): string => {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

// Convert RGB to HEX
const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const temperatureToHex = (temperature: number): string => {
  // Ensure temperature is within bounds
  temperature = Math.max(1000, Math.min(12000, temperature));

  let r = 255,
    g = 0,
    b = 0;

  // For temperatures 1000K-12000K
  if (temperature < 6600) {
    g = temperature / 100 - 2;
    g =
      -155.25485562709179 -
      0.44596950469579133 * g +
      104.49216199393888 * Math.log(g);

    if (temperature > 2000) {
      b = temperature - 2000;
      b =
        -254.76935184120902 +
        0.8274096064007395 * b +
        115.67994401066147 * Math.log(b);
    }
  } else {
    r = temperature / 100 - 55;
    r =
      351.97690566805693 +
      0.114206453784165 * r -
      40.25366309332127 * Math.log(r);

    g = temperature / 100 - 50;
    g =
      325.4494125711974 +
      0.07943456536662342 * g -
      28.0852963507957 * Math.log(g);

    b = 255;
  }

  // Ensure values are within valid range
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return rgbToHex(r, g, b);
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const hexToTemperature = (hexColor: string): number | null => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return null;

  // Approximate temperature based on RGB values
  if (rgb.b === 255) {
    // Cool temperature (> 6600K)
    return Math.round(6600 + (rgb.r / 255) * 5400);
  } else {
    // Warm temperature (1000K-6600K)
    return Math.round(1000 + (rgb.g / 255) * 5600);
  }
};

export { rgbToHex, temperatureToHex, hexToRgb, hexToTemperature };
