import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
export default function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <img src="/images/headshoticon1.jpg" alt="NatalieEstradaImage" />
      <p>
        I've always been passionate about teaching myself web development. I
        started by building a blog during my free time working in customer
        service. I have a background studying Materials Science Engineering at
        University of Michigan and I've always loved problem solving, building
        projects and creating solutions that make people's lives easier.{' '}
      </p>
      <h3>Learning & Growing</h3>
      <p>
        I'm just starting my journey in Software Development so I'm eager to
        learn different languages, libraries and frameworks.
      </p>
      <p>
        <strong>Currently Learning:</strong> Vue.js, Python & Deep Learning with
        PyTorch
      </p>
      <h3>Not Just A Coder</h3>
      <p>
        When I'm not coding you can find me: Taking care of my many plants,
        painting with watercolors, dancing and teaching Argentine Tango or
        learning how to use LMMS, an open source music producing software.
      </p>
      <h3>Let's Connect!</h3>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/natalie-estrada-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/chakrasandwhich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/nmestrada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
