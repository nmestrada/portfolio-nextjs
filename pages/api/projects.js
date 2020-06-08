export default (req, res) => {
    res.statusCode = 200
    res.json([
        {
            title: "WeJay",
            description: 'A mobile application',
            techStack: ['React Native','Redux','Expo SDK', 'Google Firebase', 'Spotify API', 'Node.js'],
            images:['/images/weJay1.png','/images/wejay2.png'],
        },
        {
            title: 'BeerHopper',
            description: 'An e-commerce site',
            techStack:['React', 'Redux', 'Express', 'Postgres', 'Sequelize ORM', 'Node.js', 'Heroku CLI', 'OAuth', 'Passport.js'],
            images: ['/images/beerHopper1.png']
        },
        {
            title: 'Plantify',
            description: 'A mobile application to identify plants',
            techStack: ['React Native', 'Node.js','Expo SDK', 'Google Firebase', 'Clarifai API'],
            images: ['/images/plantify1.jpg','/images/plantify2.jpg']
        }
    ])
  }
  