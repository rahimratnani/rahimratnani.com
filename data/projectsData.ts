const projectsData = [
  {
    title: 'Members Only',
    description: `Members Only is an exclusive clubhouse where anyone can come and see the messages but only logged-in users can write new messages. To see who created the message and when users have to get the membership by entering a SECRET code. Secret code: The Odin Project`,
    imgSrc: '/images/members-only.png',
    live: 'https://members-only-top.netlify.app/',
    github: 'https://github.com/rahimratnani/members-only',
    tectStack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST',
    ],
  },
  {
    title: 'Portfolio v1',
    description: `My old portfolio site created using React.js and Chakra UI component library.`,
    imgSrc: '/images/portfolio-old.png',
    live: 'https://rahimratnani.netlify.app/',
    github: 'https://github.com/rahimratnani/portfolio-site',
    tectStack: ['JavaScript', 'React.js', 'Chakra UI'],
  },
  {
    title: 'Weather App',
    description: `A weather app that shows current weather for a city. It uses OpenWeatherMap API to fetch current weather. It can show weather in two units (celsius and fahrenheit). It can also fetch weather based on your location if location service is enabled in your browser.`,
    imgSrc: '/images/weather-app.png',
    live: 'https://rahimratnani.github.io/weather-app/',
    github: 'https://github.com/rahimratnani/weather-app',
    tectStack: ['TypeScript', 'React.js', 'HTML', 'CSS'],
  },
  {
    title: 'Memory Game',
    description: `Built with React and Bulma CSS, this game puts your memory to the test. You'll be presented with multiple images. The images will shuffle every-time they are clicked. DO NOT click any images twice, else the score will reset to zero. The goal is to get the highest score possible.`,
    imgSrc: '/images/memory-game.png',
    live: 'https://rahimratnani.github.io/memory-game/',
    github: 'https://github.com/rahimratnani/memory-game',
    tectStack: ['JavaScript', 'React.js', 'Bulma CSS'],
  },
  {
    title: 'Tic Tac Toe',
    description: `Implementation of classic Tic-Tac-Toe game with JavaScript, HTML, and CSS. It has two game modes: Normal mode and AI mode. AI Mode uses the Minimax algorithm to make decisions against the human player.`,
    imgSrc: '/images/tic-tac-toe.png',
    live: 'https://rahimratnani.github.io/tic-tac-toe/',
    github: 'https://github.com/rahimratnani/tic-tac-toe',
    tectStack: ['Minimax Algorithm', 'JavaScript', 'HTML', 'CSS'],
  },
];

export default projectsData;
