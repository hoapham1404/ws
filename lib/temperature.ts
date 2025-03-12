/**
 * Represents RGB color values
 */
export type RGB = {
  r: number;
  g: number;
  b: number;
};

/**
 * Temperature range constants in Kelvin
 */
const TEMPERATURE_RANGE = {
  MIN: 1000,
  MAX: 12000,
  PIVOT: 6600,
} as const;

/**
 * Converts a number to a 2-digit hexadecimal string
 * @param c - Number to convert (0-255)
 * @returns Two-digit hexadecimal string
 */
const componentToHex = (c: number): string => {
  const hex = Math.round(Math.max(0, Math.min(255, c))).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

/**
 * Converts RGB values to a hexadecimal color string
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns Hexadecimal color string (e.g., "#FF0000")
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

/**
 * Converts color temperature to RGB values using a modified algorithm
 * to match specific temperature color points
 * @param temperature - Color temperature in Kelvin (1000K-12000K)
 * @returns RGB color object
 */
const temperatureToRGB = (temperature: number): RGB => {
  // Ensure temperature is within bounds
  temperature = Math.max(TEMPERATURE_RANGE.MIN, Math.min(TEMPERATURE_RANGE.MAX, temperature));

  // Define key temperature points and their RGB values
  const temperaturePoints = {
    1000: { r: 255, g: 68, b: 0 },
    2000: { r: 255, g: 137, b: 14 },
    3000: { r: 255, g: 177, b: 110 },
    4000: { r: 255, g: 206, b: 166 },
    5000: { r: 255, g: 228, b: 206 },
    6000: { r: 255, g: 246, b: 237 },
    7000: { r: 243, g: 242, b: 255 },
    8000: { r: 221, g: 230, b: 255 },
    9000: { r: 210, g: 223, b: 255 },
    10000: { r: 202, g: 218, b: 255 },
    11000: { r: 196, g: 214, b: 255 },
    12000: { r: 191, g: 211, b: 255 }
  } as const;

  // Find the two closest temperature points for interpolation
  const temperatures = Object.keys(temperaturePoints).map(Number);
  const lowerTemp = Math.max(...temperatures.filter(t => t <= temperature));
  const upperTemp = Math.min(...temperatures.filter(t => t >= temperature));

  // If temperature matches exactly one of our points, return that value
  if (lowerTemp === upperTemp) {
    return { ...temperaturePoints[lowerTemp as keyof typeof temperaturePoints] };
  }

  // Interpolate between the two closest points
  const lower = temperaturePoints[lowerTemp as keyof typeof temperaturePoints];
  const upper = temperaturePoints[upperTemp as keyof typeof temperaturePoints];
  const factor = (temperature - lowerTemp) / (upperTemp - lowerTemp);

  return {
    r: Math.round(lower.r + (upper.r - lower.r) * factor),
    g: Math.round(lower.g + (upper.g - lower.g) * factor),
    b: Math.round(lower.b + (lower.b - lower.b) * factor)
  };
};

/**
 * Converts color temperature to hexadecimal color string
 * @param temperature - Color temperature in Kelvin (1000K-12000K)
 * @returns Hexadecimal color string
 */
const temperatureToHex = (temperature: number): string => {
  const { r, g, b } = temperatureToRGB(temperature);
  return rgbToHex(r, g, b);
};

/**
 * Converts hexadecimal color string to RGB values
 * @param hex - Hexadecimal color string (e.g., "#FF0000")
 * @returns RGB color object or null if invalid hex
 */
const hexToRgb = (hex: string): RGB | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

/**
 * Converts hexadecimal color to approximate color temperature with improved accuracy
 * @param hexColor - Hexadecimal color string
 * @returns Approximate temperature in Kelvin or null if invalid hex
 */
const hexToTemperature = (hexColor: string): number | null => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return null;

  // More accurate temperature approximation using both RGB components
  if (rgb.b === 255) {
    // Cool temperature (> 6600K)
    const normalizedRed = rgb.r / 255;
    const normalizedGreen = rgb.g / 255;
    // Weight both red and green components for better accuracy
    const weightedValue = (normalizedRed * 0.6 + normalizedGreen * 0.4);
    return Math.round(TEMPERATURE_RANGE.PIVOT + weightedValue * (TEMPERATURE_RANGE.MAX - TEMPERATURE_RANGE.PIVOT));
  } else {
    // Warm temperature (1000K-6600K)
    const normalizedBlue = rgb.b / 255;
    const normalizedGreen = rgb.g / 255;
    // Weight both blue and green components for better accuracy
    const weightedValue = (normalizedGreen * 0.6 + normalizedBlue * 0.4);
    return Math.round(TEMPERATURE_RANGE.MIN + weightedValue * (TEMPERATURE_RANGE.PIVOT - TEMPERATURE_RANGE.MIN));
  }
};

/**
 * Checks if a temperature value is within valid range
 * @param temperature - Temperature value to check
 * @returns Boolean indicating if temperature is valid
 */
const isValidTemperature = (temperature: number): boolean => {
  return temperature >= TEMPERATURE_RANGE.MIN && temperature <= TEMPERATURE_RANGE.MAX;
};

/**
 * Gets the relative "warmth" of a temperature (0-1)
 * @param temperature - Temperature in Kelvin
 * @returns Number between 0 (cool) and 1 (warm)
 */
const getTemperatureWarmth = (temperature: number): number => {
  const normalized = (temperature - TEMPERATURE_RANGE.MIN) / (TEMPERATURE_RANGE.MAX - TEMPERATURE_RANGE.MIN);
  return 1 - Math.min(1, Math.max(0, normalized));
};

export {
  TEMPERATURE_RANGE,
  rgbToHex,
  temperatureToHex,
  temperatureToRGB,
  hexToRgb,
  hexToTemperature,
  isValidTemperature,
  getTemperatureWarmth
};
