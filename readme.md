# 🎉 Birthday Party Countdown Website

A dynamic and interactive birthday party countdown website with a modern, gradient-based design. Features a live countdown timer, event details, schedule, menu, and integrated Spotify playlist.

## ✨ Features

- Real-time countdown to the event date
- Responsive design that works on all devices
- Interactive buttons for displaying different types of information
- Dynamic content rendering for schedule and menu items
- Embedded Spotify playlist integration
- Customizable theme with gradient backgrounds
- Smooth animations and hover effects
- Glassmorphism design elements

## 🛠️ Tech Stack

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript
- Google Fonts (Audiowide, Geo, Poppins)
- Spotify Embed API

## 🎨 Customization

The website is fully customizable through the `party-config.js` file. You can modify:

### Event Details
- Event name
- Target date and time
- Message displayed when the date arrives

### Information Sections
- Venue details
- Schedule
- Menu items
- Music playlist

### Theme
- Color scheme (primary, secondary, accent colors)
- Background gradients
- Font families

## 📝 Configuration Example

```javascript
const partyConfig = {
    event: {
        name: "Until [Event Name]!",
        date: "YYYY-MM-DDThh:mm:ss",
        TextOnDateCome: "Happy Birthday!"
    },
    // ... other configurations
}
```

## 🚀 Getting Started

1. Clone the repository
2. Modify the `party-config.js` file with your event details
3. Update the Spotify playlist URL in the config (if desired)
4. Host the files on any web server

## 📱 Responsive Design

The website is fully responsive and includes:
- Fluid typography
- Flexible grid layouts
- Mobile-friendly button arrangements
- Adaptive spacing and padding

## 🎵 Music Integration

The website includes a Spotify playlist embed that:
- Maintains theme consistency
- Supports playback controls
- Works seamlessly on mobile devices
- Respects user autoplay preferences

## 📄 License

Feel free to modify and use this code for your own party countdown website!

---
Made with ❤️ for birthday celebrations