// src/pages/About.jsx
const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-gray-800 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-800  dark:text-white">
          Hello! I'm <strong>Ashiful Islam</strong>, a passionate{" "}
          <strong>Frontend Web Developer</strong> with a love for turning
          creative ideas into fully functional, user-friendly web applications.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-800  dark:text-white">
          My programming journey began 2 years ago with a curiosity to
          understand how websites work. What started as a hobby has now become a
          deep passion. Over time, I’ve become confident working with tools and
          technologies like{" "}
          <strong>React, Tailwind CSS, Firebase, and MongoDB</strong>. I
          continuously strive to improve my skills and learn new frameworks to
          stay updated with the latest in web development.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-800  dark:text-white">
          I enjoy building responsive user interfaces, interactive features, and
          clean, optimized code that enhances user experience. My favorite type
          of work involves collaborating on creative, challenging projects that
          require solving real-world problems through thoughtful design and
          smooth functionality.
        </p>

        {/* <p className="mt-4 text-lg leading-relaxed text-gray-800">
          Outside of programming, I'm a passionate <strong>photographer</strong> who loves capturing meaningful moments. I also enjoy <strong>playing football</strong>, exploring nature, and occasionally diving into graphic design. These hobbies keep me inspired, energized, and balanced.
        </p> */}

        <p className="mt-4 text-lg leading-relaxed text-gray-800  dark:text-white">
          I’m always excited to meet like-minded people, work on meaningful
          projects, and contribute to communities that value innovation and
          creativity. Thanks for stopping by!
        </p>
      </div>
    </section>
  );
};

export default About;
