const partyConfig = {
    event: {
        name: "Until Rhythm's Birthday Party!",
        TextOnDateCome: "Happy Birthday Rhythm!",
        date: "2025-01-01T08:00:00",
    },
    info: [
        {
            type: "Text",
            ButtonName: "Venue",
            content: "Secret Location: My house... duh"
        },
        {
            type: "cards",
            ButtonName: "Schedule",
            content: [
                {
                    title: "Arrival",
                    time: "8:00 AM"
                },
                {
                    title: "FUN!!!",
                    time: "8am to 8pm"
                },
                {
                    title: "Get out of my house",
                    time: "8:00 PM"
                }
            ]
        },
        {
            type: "cards",
            ButtonName: "Menu",
            content: [
                {
                    title: "Breakfast",
                    time: "Pizza, juice, sandwich???"
                },
                {
                    title: "Lunch",
                    time: "Pizza!!!"
                },
                {
                    title: "Dinner",
                    time: "Pizza!!!"
                },
                {
                    title: "Snacks - always",
                    time: "Chips, Cold Drinks, Juice, etc"
                }
            ]
        },
        {
            type: "Iframe",
            ButtonName: "Music",
            content: "https://open.spotify.com/embed/playlist/3J8pvNBplKW9zXJNvpAAR5"
        }
    ],
    theme: {
        colors: {
            primary: "#ff6b35", 
            secondary: "#ffa447",
            accent: "#2978b5",
            text: "#f4e3d7",      
            background: {
                gradient1: "#1e1e2f",
                gradient2: "#3b1e29"
            }
        },
        
        fonts: {
            heading: "Audiowide",
            subheading: "Geo",
            body: "Poppins"
        }
    }
};