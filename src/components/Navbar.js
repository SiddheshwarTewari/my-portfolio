export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">YourName</h1>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-blue-500">Resume</a>
        </div>
      </div>
    </nav>
  );
}
