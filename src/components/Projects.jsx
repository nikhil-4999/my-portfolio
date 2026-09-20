import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Code Zenith AI",
    description: "Explore the live Code Zenith AI project and its AI-focused web experience.",
    image: "/assets/code-zenith-ai-preview.png",
    tag: "View live project",
    link: "https://code-zenith-ai.vercel.app/"
  },
  {
    id: 2,
    title: "Starbucks Café",
    description: "A cinematic coffee shop experience with refined visuals, menu exploration, and a premium artisan café feel.",
    image: "/assets/starbucks-cafe-preview.webp",
    tag: "View live project",
    link: "https://starbucks-cafe-three.vercel.app/"
  },
  {
    id: 3,
    title: "Nagar Panchayat Sahjanwa",
    description: "A smart civic command center prototype for Nagar Panchayat Sahjanwa, bringing services, local information, and governance into one accessible interface.",
    image: "/assets/nagar-panchayat-sahjanwa-preview.png",
    tag: "View live project",
    link: "https://npsahjanwa-prototype-1.vercel.app/"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 mt-3 text-sm text-white border border-white/40 rounded-full px-3 py-1 hover:bg-white hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbExternalLink size={16} /> {project.tag}
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 mt-3 text-sm text-white border border-white/40 rounded-full px-3 py-1">
                  <TbExternalLink size={16} /> {project.tag}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
