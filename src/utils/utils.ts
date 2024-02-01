

export function getRandomColor() {
 const num = Math.floor(Math.random() * 999);
 const hue = num * 137.508;
 return `hsl(${hue},50%,75%)`;
}