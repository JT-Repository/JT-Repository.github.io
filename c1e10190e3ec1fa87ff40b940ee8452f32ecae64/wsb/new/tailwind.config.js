/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/**/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      'courier': ['Courier New', 'Courier', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'video-poster': "url('https://wesellboxes.net/we_sell_boxes-video-screenshot.jpg')",
        'hands': "url('../src/images/hands.jpeg')",
        'bg1': "url('../src/images/studio.jpg')",
        'bg2': "url('../src/images/space.jpg')",
        'bg3': "url('../src/images/warehouse.jpg')",
        'bg4': "url('../src/images/warehouse2.jpg')",
        'bg5': "url('../src/images/odyssey-1979.jpg')",
        'bc-logo': "url('https://upload.wikimedia.org/wikipedia/commons/8/80/Bandcamp-logotype-color.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
