import tinycolor from "tinycolor2";

export const hexToRgb = (
  hex: string,
): {
  r: number;
  g: number;
  b: number;
} => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: -1,
        g: -1,
        b: -1,
      };
};

export const hexToRgba = (color: string, alpha: number) => {
  const value = hexToRgb(color);
  return `rgba(${value.r}, ${value.g}, ${value.b}, ${alpha});`;
};

export const lighten = (color: string, amount: number) => {
  return tinycolor(color)
    .lighten(amount)
    .toString();
};

export const darken = (color: string, amount: number) => {
  return tinycolor(color)
    .darken(amount)
    .toString();
};

export enum Variant {
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
}
