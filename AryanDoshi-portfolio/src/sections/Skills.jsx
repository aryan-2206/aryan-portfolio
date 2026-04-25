import { motion } from "framer-motion";
import React from "react";

export default function Skills() {

const skills = [
  //c,c++,python,java,js,react,fastapi,tailwindcss,node,express,mongodb,sql,git,machine learning, deep learning, competitive programming
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", label: "FastAPI"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: "Express"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", label: "Machine Learning"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", label: "Deep Learning"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeforces/codeforces-original.svg", label: "Competitive Programming"},
  {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind CSS"}
]
const repeated = [...skills, ...skills]; //repeat skills to fill space
  return (
    <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* //glowing blocks */}
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"></div>
        <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500"></div>
      </div>
      <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
      initial={{opacity: 0, y: -30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay:0.1}}
      >
        My Skills
      </motion.h2>
      <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
      initial={{opacity: 0, y: -10}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay:0.1}}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
      <motion.div className="flex gap-10 text-6xl text-[#1cd8d2]">
        {repeated.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]"
          aria-label={skill.label}
          title={skill.label}
          >
            <span className="hover:scale-125 transition-transform duration-300">
              <img src={skill.icon} alt={skill.label} className="w-15 h-15 object-contain"/>
            </span>
            <p className="text-sm">
              {skill.label}
            </p>
          </div>
        ))}

      </motion.div>
      </div>
    </section>
  )
}