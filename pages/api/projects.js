export default (req, res) => {
    res.statusCode = 200
    res.json([
        {
            title: "WeJay",
            description: 'A mobile application',
            techStack: ['React Native','Redux','Expo SDK', 'Google Firebase', 'Spotify API', 'Node.js'],
            images:[],
        },
        {
            title: 'BeerHopper',
            description: 'An e-commerce site',
            techStack:['React', 'Redux', 'Express', 'Postgres', 'Sequelize ORM', 'Node.js', 'Heroku CLI', 'OAuth', 'Passport.js'],
            images: []
        },
        {
            title: 'Plantify',
            description: 'A mobile application to identify plants',
            techStack: ['React Native', 'Node.js','Expo SDK', 'Google Firebase', 'Clarifai API'],
            images: []
        }
    ])
  }
  