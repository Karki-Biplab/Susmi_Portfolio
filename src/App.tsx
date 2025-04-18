import React from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-lg relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Susmita Yogi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-600"
            >
              Software Developer | Quality Assurance Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex justify-center items-center gap-6 text-gray-600"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1"
              >
                <MapPin size={18} />
                Woodside, New York
              </motion.span>
              <motion.a
                whileHover={{ scale: 1.05, color: '#000' }}
                href="mailto:yogisusmita99@gmail.com"
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                <Mail size={18} />
                Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#000' }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                <Github size={18} />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#000' }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
              About Me
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h2>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:shadow-2xl"
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                Computer Science graduate with experience in software development and quality assurance. 
                Passionate about creating efficient solutions and ensuring software quality. Currently working 
                in New York's hospitality sector while pursuing opportunities in technology.
              </p>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
              Skills
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-gray-900 mb-6 text-xl">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Django', 'MongoDB', 'HTML', 'CSS', 'GitHub'].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-gray-900 mb-6 text-xl">Professional Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Quality Assurance',
                    'Project Management',
                    'Team Collaboration',
                    'Problem Solving',
                    'Communication',
                    'Time Management'
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
              Projects
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Blood Bank Management System</h3>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                A comprehensive system built with Django and MongoDB to manage blood bank operations, 
                donor records, and blood inventory tracking.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Django', 'MongoDB', 'Python', 'HTML/CSS'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
              Experience
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {[
                {
                  title: 'Hospitality Assistant',
                  company: 'New York • Current',
                  description: 'Managing customer service operations and utilizing organizational skills in a fast-paced environment.'
                },
                {
                  title: 'QA Engineer',
                  company: 'Swift Technologies',
                  description: 'Performed comprehensive software testing and quality assurance procedures to ensure product reliability.'
                },
                {
                  title: 'Django Developer Intern',
                  company: 'Artificial Info Tech',
                  description: 'Developed web applications using Django framework and contributed to database management.'
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-purple-600 mt-2 font-medium">{job.company}</p>
                  <p className="text-gray-600 mt-4 text-lg">{job.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-gray-500"
          >
            © {new Date().getFullYear()} Susmita Yogi. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;