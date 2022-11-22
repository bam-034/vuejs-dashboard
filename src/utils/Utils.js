import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const formatThousands = (value) => Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const formatPosts = (value) => Intl.NumberFormat('en-GB', {
  style: 'unit',
  unit: 'gigabyte',
  //maximumSignificantDigits: 3,
  //notation: 'compact',
}).format(value);

export const formatNormal = (value) => Intl.NumberFormat('en-US', {
  style: 'decimal'
}).format(value);

export const formatPercent = (value) => Intl.NumberFormat('en-US', {
  style: 'percentage'
}).format(value);


// export const xSelector = d => d.x;
// export const ySelector = d => d.y;