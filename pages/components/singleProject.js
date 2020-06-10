
export default function SingleProject({project}) {
    const images = project.images;
    const techStack = project.techStack;
    return (
        <div 
            className="project card" 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[0]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            key={project.title}
        >
            <div 
                className="project-content"
            >
                <h2>{project.title}</h2>
                <h4>{project.description}</h4>
                {/* <ul className="techStack">
                    {techStack.map(item => <li key={item}>{item}</li>)}
                </ul> */}
            </div>
            {/* <div className='images-container'>
                <img src={images[0]} alt='project-image' className='image'/>
                {/* {images.map(image => <img key={image} src={image} alt='project-image' className='image'/>)} 
            </div> */}
        </div>
    )
}