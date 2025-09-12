'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarDaysIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  UserGroupIcon,
  CodeBracketIcon,
  CogIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Experience {
  id: string;
  period: string;
  company: string;
  position: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  color: string;
  current?: boolean;
  projectsUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 'inxeniux',
    period: '2022 - 2025',
    company: 'Grupo Inxeniux',
    position: 'Líder Técnico & Full-Stack Developer',
    location: 'León, Guanajuato',
    type: 'work',
    description: 'Liderando equipos de desarrollo en proyectos enterprise críticos para grandes corporaciones.',
    achievements: [
      'Lideré 5 desarrolladores en proyectos multidisciplinarios',
      'Arquitectura de 10+ aplicaciones críticas en producción',
      'Implementación de metodologías ágiles y DevOps',
      'Reducción del 40% en tiempos de desarrollo mediante automatización',
      'Mentoría técnica y crecimiento profesional del equipo'
    ],
    technologies: ['React', 'Node.js', 'Flutter', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
    color: 'from-blue-500 to-cyan-500',
    current: true,
    projectsUrl: '#projects'
  },
  {
    id: 'hispanoamericano',
    period: '2019 - 2022',
    company: 'Complejo Educativo Hispanoamericano',
    position: 'Maker Xpert & Desarrollador',
    location: 'León, Guanajuato',
    type: 'work',
    description: 'Desarrollo de sistemas IoT educativos y capacitación tecnológica a docentes.',
    achievements: [
      'Sistema IoT con NFC y control de temperatura en tiempo real',
      'Capacité a 50+ docentes en tecnologías emergentes',
      'Implementación de laboratorio de innovación tecnológica',
      'Desarrollo de plataforma educativa interactiva',
      'Integración de hardware y software para proyectos STEM'
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'NFC', 'IoT', 'Python', 'JavaScript', 'MySQL'],
    color: 'from-green-500 to-emerald-500',
    projectsUrl: '#projects'
  },
  {
    id: 'medusa',
    period: '2018 - 2019',
    company: 'Medusa-System',
    position: 'Mobile Developer',
    location: 'León, Guanajuato',
    type: 'work',
    description: 'Desarrollo de aplicaciones móviles nativas para Android con enfoque en experiencia de usuario.',
    achievements: [
      '3 aplicaciones Android en producción exitosas',
      'Implementación de arquitectura MVVM',
      'Integración con APIs REST y bases de datos locales',
      'Optimización de rendimiento y UX/UI',
      'Publicación en Google Play Store con ratings 4.5+'
    ],
    technologies: ['Java', 'Android SDK', 'MySQL', 'PHP', 'REST APIs', 'SQLite'],
    color: 'from-purple-500 to-pink-500',
    projectsUrl: '#projects'
  },
  {
    id: 'utl',
    period: '2016 - 2020',
    company: 'Universidad Tecnológica de León',
    position: 'Ingeniería en Tecnologías de la Información',
    location: 'León, Guanajuato',
    type: 'education',
    description: 'Formación integral en desarrollo de software, base de datos, redes y gestión de proyectos tecnológicos.',
    achievements: [
      'Titulado con promedio de excelencia académica',
      'Proyecto de titulación: Sistema de gestión integral',
      'Certificaciones en metodologías ágiles',
      'Participación en concursos de programación',
      'Desarrollo de proyectos reales para empresas locales'
    ],
    technologies: ['Java', 'C#', '.NET', 'SQL Server', 'HTML/CSS', 'JavaScript', 'UML'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experiencia <span className="text-blue-600">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional construyendo soluciones tecnológicas que impactan positivamente
            en organizaciones y usuarios finales.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <BriefcaseIcon className="w-6 h-6 mr-3" />
            Experiencia Laboral
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onHoverStart={() => setHoveredExperience(exp.id)}
                  onHoverEnd={() => setHoveredExperience(null)}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block" />
                  
                  <div className="md:ml-20">
                    <div 
                      className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer ${
                        selectedExperience === exp.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedExperience(
                        selectedExperience === exp.id ? null : exp.id
                      )}
                    >
                      {/* Header */}
                      <div className="p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}>
                                <BuildingOfficeIcon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {exp.position}
                                </h4>
                                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                  {exp.company}
                                </p>
                              </div>
                              {exp.current && (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                  Actual
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-2">
                                <CalendarDaysIcon className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPinIcon className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <ChevronRightIcon 
                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                              selectedExperience === exp.id ? 'rotate-90' : ''
                            }`} 
                          />
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {selectedExperience === exp.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                          >
                            <div className="p-6">
                              {/* Achievements */}
                              <div className="mb-6">
                                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                  <UserGroupIcon className="w-5 h-5 mr-2" />
                                  Logros Principales
                                </h5>
                                <div className="space-y-3">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start space-x-3"
                                    >
                                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                                        {achievement}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Technologies */}
                              <div className="mb-6">
                                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                  <CogIcon className="w-5 h-5 mr-2" />
                                  Stack Tecnológico
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* CTA */}
                              {exp.projectsUrl && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const element = document.getElementById('projects');
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group cursor-pointer"
                                >
                                  <CodeBracketIcon className="w-4 h-4" />
                                  <span>Ver proyectos de este periodo</span>
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Formación Académica
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-2xl">🎓</span>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.position}
                  </h4>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.company}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Formación Continua
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            15+ certificaciones completadas en plataformas como DevTalles, 
            especializándome en tecnologías modernas y mejores prácticas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React: De cero a experto',
              'Next.js para producción',
              'Clean Architecture',
              'Flutter móvil avanzado'
            ].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg shadow-sm"
              >
                ⭐ {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

