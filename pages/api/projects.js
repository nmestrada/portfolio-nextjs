export default (req, res) => {
    res.statusCode = 200
    res.json([
        {
            title: "WeJay",
            role: '1 of 3 Full Stack Developers',
            description: 'A mobile application for voting on songs on a Spotify playlist',
            techStack: ['React Native','Redux','Expo SDK', 'Google Firebase', 'Spotify API', 'Node.js'],
            image:'/images/weJay1.png',
            github: 'https://github.com/weJayCapstone/weJay',
            youtube: 'https://www.youtube.com/watch?v=2NvC6te1Nak'
        },
        {
            title: 'BeerHopper',
            role: '1 of 4 Full Stack Developers',
            description: 'An e-commerce site',
            techStack:['React', 'Redux', 'Express', 'Postgres', 'Sequelize ORM', 'Node.js', 'Heroku CLI', 'OAuth', 'Passport.js'],
            image: '/images/beerHopper1.png',
            github: 'https://github.com/TeamForLoops/beerHopper',
            deployLink: 'https://beerhopperfullstack.herokuapp.com/beers'
        },
        {
            title: 'Plantify',
            role: 'Sole Developer',
            description: 'A mobile application to identify plants',
            techStack: ['React Native', 'Node.js','Expo SDK', 'Google Firebase', 'Clarifai API'],
            image: '/images/plantify2.jpg',
            github:'https://github.com/nmestrada/Plantify'
        }
    ])
  }
  