// Add any interactive JavaScript functionality here
console.log('SVG Demo loaded successfully!');

// Example: Add click interaction to SVG elements
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('svg');

    if (svg) {
        svg.addEventListener('click', (e) => {
            console.log('SVG clicked!', e.target);
        });
    }
});
