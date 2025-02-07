const Projects = () => {
  const projects = [
    {
      name: "Flight Tracker API Project",
      description: "Live flight tracking app using aviationstack API.",
      github: "https://github.com/apexsha/Flight_Tracker_API_Project",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React and TailwindCSS.",
      github: "https://github.com/apexsha/Apeksha-Portfolio-Website",
    },
  ];
 
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 dark:bg-gray-700"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 dark:text-blue-300 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;