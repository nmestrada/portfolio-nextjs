
export default function SingleProject({project}) {
    const images = project.images;
    return (
        <div className="project" key={project.title}>
            <section>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </section>
            <div className='images-container'>
                {images.map(image => <img src={image} alt='project-image' className='image'/>)}
            </div>
        </div>
    )
}