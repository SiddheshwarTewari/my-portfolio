const projects = [
  {
    title: "AI Stock Predictor",
    description: "React app using OpenAI + Alpaca API to predict stock trends.",
    link: "https://github.com/yourusername/ai-stock-predictor",
  },
  {
    title: "Malware Classifier",
    description: "Python model that classifies malware types with 93% accuracy.",
    link: "https://github.com/yourusername/malware-classifier",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 border rounded shadow bg-white">
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="mb-4">{project.description}</p>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
