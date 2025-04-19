// Function to generate random colored placeholder backgrounds
export const getPlaceholderImage = (id: number): string => {
  // Array of aesthetically pleasing colors
  const colors = [
    '#3498db', // Blue
    '#9b59b6', // Purple
    '#1abc9c', // Teal
    '#e74c3c', // Red
    '#f1c40f', // Yellow
    '#2ecc71', // Green
    '#34495e', // Dark blue
    '#fd79a8', // Pink
    '#6c5ce7', // Indigo
    '#fdcb6e'  // Light yellow
  ];
  
  // Get a color based on the id (mod for repeating colors if more items than colors)
  const color = colors[id % colors.length];
  
  // Create a data URL for a colored SVG
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='${color.replace('#', '%23')}' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EZer0ality%3C/text%3E%3C/svg%3E`;
};
