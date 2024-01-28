export interface RGBAObject {
  r: number;
  g: number;
  b: number;
  a: number;
}

export const isValidHexColor = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

export function colorLuminance(hex: string, lum: number): string {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  let rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substring(c.length);
  }

  return rgb;
}

export function getContrast(hex: string): string {
  const r = parseInt(hex.substring(1, 3), 16),
    g = parseInt(hex.substring(3, 5), 16),
    b = parseInt(hex.substring(5, 7), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#001f3f" : "#F6F5F7";
}

export const rgbaStringToRGBAObject = (rgbaString: string): RGBAObject => {
  const [r, g, b, a] = rgbaString
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  return { r, g, b, a };
};

export const RGBAObjectToRGBAString = (rgbaObject: RGBAObject): string => {
  const { r, g, b, a } = rgbaObject;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const hexToRGBAObject = (hex: string, alpha: number = 1): RGBAObject => {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  return { r: red, g: green, b: blue, a: alpha };
};

export const hexToRGBAStr = (hex: string, alpha: number = 1): string => {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  // Concatenate these codes into proper RGBA format
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return rgba;
};

interface NewRootStyle {
  color_primary: string;
  color_secondary: string;
  color_ternary: string;
  color_danger: string;
  color_hardgrey: string;
  color_mediumgrey: string;
  color_lightgrey: string;
  color_neu_shadow_start: string;
  color_neu_shadow_end: string;
}
export const setNewColorsToRootStyle = (params: { colors: NewRootStyle }) => {
  const { colors } = params;

  for (const color of Object.keys(colors) as Array<keyof NewRootStyle>) {
    const name = `--${color.replace(/_/g, "-")}`;

    const root = document.documentElement;
    root.style.setProperty(name, colors[color]);
  }
};

export const calcAndSetNewColorStyles = (
  baseHexColor: string,
  colorDiff: number = 0.2
) => {
  if (!baseHexColor || isNaN(colorDiff)) {
    return {
      background: "",
      textColor: "",
    };
  }

  const primaryHexColor = colorLuminance(baseHexColor, -0.2);
  const neuShadowStart = colorLuminance(baseHexColor, -0.15);
  const neuShadowEnd = colorLuminance(baseHexColor, 0.09);

  const ternary = colorLuminance(baseHexColor, colorDiff);
  const mediumText = colorLuminance(baseHexColor, 0.85);
  const lightText = colorLuminance(baseHexColor, 0.95);
  const hardText = colorLuminance(baseHexColor, 0.55);

  setNewColorsToRootStyle({
    colors: {
      color_primary: hexToRGBAStr(primaryHexColor),
      color_secondary: hexToRGBAStr(baseHexColor),
      color_ternary: hexToRGBAStr(ternary),
      color_danger: hexToRGBAStr("#FF4136"),
      color_hardgrey: hexToRGBAStr(hardText),
      color_mediumgrey: hexToRGBAStr(mediumText),
      color_lightgrey: hexToRGBAStr(lightText),
      color_neu_shadow_start: hexToRGBAStr(neuShadowStart),
      color_neu_shadow_end: hexToRGBAStr(neuShadowEnd),
    },
  });
};
