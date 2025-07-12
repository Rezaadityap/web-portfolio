import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web Applicaton Tracking & Monitoring",
    description:
      "A web application for tracking and monitoring motor vehicle testing at BPLJSKB",
    image: "/projects/tracking.png",
    tags: ["PHP", "Codeigniter", "Tailwind CSS", "Alpine.JS", "Node.js"],
    demoUrl: "https://tracking.rezaadityapratama.com/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Saas Landing Page for Caffio",
    description:
      "SaaS landing page for Caffio, a digital solution for coffee shop management and promotion.",
    image: "/projects/caffio.png",
    tags: ["HTML", "CSS", "Javascript", "Tailwind CSS", "React.js", "Node.js"],
    demoUrl: "https://rezaadityap.github.io/caffio/",
    githubUrl: "https://github.com/Rezaadityap/caffio",
  },
  {
    id: 3,
    title: "KKN – QR Ordering System for Coffee Shop",
    description:
      "KKN is a complete QR-based ordering system for coffee shops with user login and seamless payment via Midtrans.",
    image: "/projects/kkn.png",
    tags: ["PHP", "Codeigniter", "Bootstrap", "Tailwind CSS", "Midtrans"],
    demoUrl: "https://kkn.rezaadityapratama.com/list_menu?meja=1",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Informatics Engineering – STTI Sony Sugema",
    description:
      "Web system for Informatics Engineering at STTI Sony Sugema with a dynamic landing page and admin panel to manage content and student data.",
    image: "/projects/informatika.png",
    tags: ["PHP", "Codeigniter", "Tailwind CSS", "Alpine.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "IPPTORY - Inventory Management System",
    description:
      "a web-based inventory management system designed to help companies manage stock, monitor inventory, and optimize procurement processes.",
    image: "/projects/ipptory.png",
    tags: ["PHP", "Codeigniter", "Bootstrap", "PHP Excel", "Mpdf"],
    demoUrl: "https://ipptory.rezaadityapratama.com/",
    githubUrl: "https://github.com/Rezaadityap/inventory",
  },
  {
    id: 6,
    title: "Rare Store - UMKM Landing Page",
    description:
      "Landing page for local UMKM showcasing curated, handcrafted, and limited-edition products with a focus on creativity and uniqueness.",
    image: "/projects/rare-store.png",
    tags: ["HTML", "CSS", "Javascript", "AOS Animation"],
    demoUrl: "https://rare-store.rezaadityapratama.com/",
    githubUrl: "https://github.com/Rezaadityap/inventory",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Latest <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rezaadityap/">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
