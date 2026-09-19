import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { SiCanva } from "react-icons/si";

const skills = [
  { id: 1, name: "Figma", icon: <CgFigma size={50} /> },
  { id: 2, name: "UI/UX Design", icon: <CgFigma size={50} /> },
  { id: 3, name: "Web Design", icon: <FaHtml5 size={50} /> },
  { id: 4, name: "HTML", icon: <FaHtml5 size={50} /> },
  { id: 5, name: "CSS", icon: <FaCss3Alt size={50} /> },
  { id: 6, name: "JavaScript", icon: <FaJs size={50} /> },
  { id: 7, name: "Canva", icon: <SiCanva size={50} /> },
  { id: 8, name: "Visual Design", icon: <CgFigma size={50} /> },
  { id: 9, name: "Graphic Design", icon: <SiCanva size={50} /> },
  { id: 10, name: "AI Tools", icon: <FaJs size={50} /> },
];

export default function Skills() {
  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          <motion.div
            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center gap-4">
              <div className="flex items-center gap-5">
                <CgFigma className="text-white w-8 h-8" />
                <h2 className="font-semibold text-white text-lg lg:text-xl">UI/UX Designer at University Dekho</h2>
              </div>
              <span className="text-[#D4D4D8] font-semibold text-sm lg:text-base">May 2026 – Present</span>
            </div>
            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
              Design and update website pages and layouts in Figma; support interface enhancements with HTML, CSS and JavaScript; and create banners, brochures, promotional creatives and branding materials in Canva.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
