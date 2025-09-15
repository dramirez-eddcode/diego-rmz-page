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
  BriefcaseIcon,
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
  websiteUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 'inxeniux',
    period: '2022 - 2025',
    company: 'Grupo INXENIUX',
    position: 'Líder Técnico & Full-Stack Developer',
    location: 'Ciudad de México',
    type: 'work',
    description:
      'Liderando equipos de desarrollo en proyectos enterprise críticos para grandes corporaciones.',
    achievements: [
      'Lideré 5 desarrolladores en proyectos multidisciplinarios',
      'Arquitectura de 10+ aplicaciones críticas en producción',
      'Implementación de metodologías ágiles y DevOps',
      'Reducción del 40% en tiempos de desarrollo mediante automatización',
      'Mentoría técnica y crecimiento profesional del equipo',
    ],
    technologies: [
      'React',
      'Node.js',
      'Flutter',
      'PostgreSQL',
      'AWS',
      'Docker',
      'TypeScript',
    ],
    color: 'from-blue-500 to-cyan-500',
    current: true,
    projectsUrl: '#projects',
    websiteUrl: 'https://inxeniux.com/',
  },
  {
    id: 'hispanoamericano',
    period: '2019 - 2022',
    company: 'Complejo Educativo Hispanoamericano',
    position: 'Maker Xpert & Desarrollador',
    location: 'León, Guanajuato',
    type: 'work',
    description:
      'Desarrollo de sistemas IoT educativos y capacitación tecnológica a docentes.',
    achievements: [
      'Sistema IoT con NFC y control de temperatura en tiempo real',
      'Capacité a 50+ docentes en tecnologías emergentes',
      'Implementación de laboratorio de innovación tecnológica',
      'Desarrollo de plataforma educativa interactiva',
      'Integración de hardware y software para proyectos STEM',
    ],
    technologies: [
      'Arduino',
      'Raspberry Pi',
      'NFC',
      'IoT',
      'Python',
      'JavaScript',
      'MySQL',
    ],
    color: 'from-green-500 to-emerald-500',
    projectsUrl: '#projects',
    websiteUrl: 'https://www.hispanoamericano.edu.mx/',
  },
  {
    id: 'medusa',
    period: '2018 - 2019',
    company: 'Medusa-System',
    position: 'Mobile Developer',
    location: 'León, Guanajuato',
    type: 'work',
    description:
      'Desarrollo de aplicaciones móviles nativas para Android con enfoque en experiencia de usuario.',
    achievements: [
      '3 aplicaciones Android en producción exitosas',
      'Implementación de arquitectura MVVM',
      'Integración con APIs REST y bases de datos locales',
      'Optimización de rendimiento y UX/UI',
      'Publicación en Google Play Store con ratings 4.5+',
    ],
    technologies: [
      'Java',
      'Android SDK',
      'MySQL',
      'PHP',
      'REST APIs',
      'SQLite',
    ],
    color: 'from-purple-500 to-pink-500',
    projectsUrl: '#projects',
  },
  {
    id: 'utl',
    period: '2016 - 2020',
    company: 'Universidad Tecnológica de León',
    position: 'Ingeniería en Tecnologías de la Información',
    location: 'León, Guanajuato',
    type: 'education',
    description:
      'Formación integral en desarrollo de software, base de datos, redes y gestión de proyectos tecnológicos.',
    achievements: [
      'Titulado con promedio de excelencia académica',
      'Proyecto de titulación: Sistema de gestión integral',
      'Certificaciones en metodologías ágiles',
      'Participación en concursos de programación',
      'Desarrollo de proyectos reales para empresas locales',
    ],
    technologies: [
      'Java',
      'C#',
      '.NET',
      'SQL Server',
      'HTML/CSS',
      'JavaScript',
      'UML',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null,
  );
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(
    null,
  );

  const workExperiences = experiences.filter((exp) => exp.type === 'work');
  const education = experiences.filter((exp) => exp.type === 'education');

  return (
    <section id='experience' className='py-20 bg-background/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Experiencia <span className='text-accent'>Profesional</span>
          </h2>
          <p className='text-xl text-foreground/70 max-w-3xl mx-auto'>
            Mi trayectoria profesional construyendo soluciones tecnológicas que
            impactan positivamente en organizaciones y usuarios finales.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className='mb-16'>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-2xl font-bold text-foreground mb-8 flex items-center'
          >
            <BriefcaseIcon className='w-6 h-6 mr-3' />
            Experiencia Laboral
          </motion.h3>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block' />

            <div className='space-y-8'>
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onHoverStart={() => setHoveredExperience(exp.id)}
                  onHoverEnd={() => setHoveredExperience(null)}
                  className='relative'
                >
                  {/* Timeline dot */}
                  <div className='absolute left-6 w-4 h-4 bg-background border-4 border-accent rounded-full hidden md:block' />

                  <div className='md:ml-20'>
                    <div
                      className={`bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-foreground/10 cursor-pointer ${
                        selectedExperience === exp.id
                          ? 'ring-2 ring-accent'
                          : ''
                      }`}
                      onClick={() =>
                        setSelectedExperience(
                          selectedExperience === exp.id ? null : exp.id,
                        )
                      }
                    >
                      {/* Header */}
                      <div className='p-6 pb-4'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex-1'>
                            <div className='flex items-center space-x-3 mb-2'>
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}
                              >
                                <BuildingOfficeIcon className='w-6 h-6 text-white' />
                              </div>
                              <div>
                                <h4 className='text-xl font-bold text-foreground'>
                                  {exp.position}
                                </h4>
                                {exp.websiteUrl ? (
                                  <a
                                    href={exp.websiteUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-lg font-semibold text-accent hover:text-accent/80 transition-colors flex items-center space-x-1 group'
                                  >
                                    <span>{exp.company}</span>
                                    <ArrowTopRightOnSquareIcon className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                                  </a>
                                ) : (
                                  <p className='text-lg font-semibold text-accent'>
                                    {exp.company}
                                  </p>
                                )}
                              </div>
                              {exp.current && (
                                <span className='bg-accent/10 text-accent text-xs font-medium px-2.5 py-0.5 rounded-full'>
                                  Actual
                                </span>
                              )}
                            </div>

                            <div className='flex items-center space-x-6 text-sm text-foreground/60 mb-4'>
                              <div className='flex items-center space-x-2'>
                                <CalendarDaysIcon className='w-4 h-4' />
                                <span>{exp.period}</span>
                              </div>
                              <div className='flex items-center space-x-2'>
                                <MapPinIcon className='w-4 h-4' />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <ChevronRightIcon
                            className={`w-5 h-5 text-foreground/40 transition-transform duration-200 ${
                              selectedExperience === exp.id ? 'rotate-90' : ''
                            }`}
                          />
                        </div>

                        <p className='text-foreground/70 leading-relaxed'>
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
                            className='border-t border-foreground/10 bg-background/50'
                          >
                            <div className='p-6'>
                              {/* Achievements */}
                              <div className='mb-6'>
                                <h5 className='text-lg font-semibold text-foreground mb-4 flex items-center'>
                                  <UserGroupIcon className='w-5 h-5 mr-2' />
                                  Logros Principales
                                </h5>
                                <div className='space-y-3'>
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className='flex items-start space-x-3'
                                    >
                                      <CheckCircleIcon className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                                      <span className='text-foreground/70 text-sm'>
                                        {achievement}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Technologies */}
                              <div className='mb-6'>
                                <h5 className='text-lg font-semibold text-foreground mb-4 flex items-center'>
                                  <CogIcon className='w-5 h-5 mr-2' />
                                  Stack Tecnológico
                                </h5>
                                <div className='flex flex-wrap gap-2'>
                                  {exp.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className='px-3 py-1 bg-background text-foreground/80 text-sm font-medium rounded-full border border-foreground/20'
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
                                    const element =
                                      document.getElementById('projects');
                                    if (element) {
                                      element.scrollIntoView({
                                        behavior: 'smooth',
                                      });
                                    }
                                  }}
                                  className='flex items-center space-x-2 text-accent hover:text-accent/80 font-medium transition-colors group cursor-pointer'
                                >
                                  <CodeBracketIcon className='w-4 h-4' />
                                  <span>Ver proyectos de este periodo</span>
                                  <ArrowTopRightOnSquareIcon className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
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
            className='text-2xl font-bold text-foreground mb-8 flex items-center'
          >
            <svg
              className='w-6 h-6 mr-3'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
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
              className='bg-background rounded-2xl shadow-lg p-6 border border-foreground/10'
            >
              <div className='flex items-start space-x-4'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <span className='text-white text-2xl'>🎓</span>
                </div>

                <div className='flex-1'>
                  <h4 className='text-xl font-bold text-foreground mb-2'>
                    {edu.position}
                  </h4>
                  {edu.websiteUrl ? (
                    <a
                      href={edu.websiteUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lg font-semibold text-accent hover:text-accent/80 transition-colors flex items-center space-x-1 group mb-2'
                    >
                      <span>{edu.company}</span>
                      <ArrowTopRightOnSquareIcon className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </a>
                  ) : (
                    <p className='text-lg font-semibold text-accent mb-2'>
                      {edu.company}
                    </p>
                  )}

                  <div className='flex items-center space-x-6 text-sm text-foreground/60 mb-4'>
                    <div className='flex items-center space-x-2'>
                      <CalendarDaysIcon className='w-4 h-4' />
                      <span>{edu.period}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <MapPinIcon className='w-4 h-4' />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className='text-foreground/70 leading-relaxed mb-4'>
                    {edu.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-foreground/10 text-foreground/80 text-sm font-medium rounded-full'
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

        {/* Certifications section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-12 bg-accent/5 rounded-2xl p-8 border border-accent/20'
        >
          <h4 className='text-2xl font-bold text-foreground mb-6 text-center'>
            Formación Continua
          </h4>
          <p className='text-foreground/70 mb-8 text-center max-w-4xl mx-auto'>
            Más de 25 certificaciones en desarrollo full-stack, liderazgo
            técnico, DevOps y tecnologías emergentes, completadas en plataformas
            reconocidas como DevTalles, Platzi, Udemy y Domestika.
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Desarrollo Full-Stack / Mobile / Backend */}
            <div className='space-y-4'>
              <h5 className='text-lg font-semibold text-foreground flex items-center'>
                <CodeBracketIcon className='w-5 h-5 mr-2 text-accent' />
                Desarrollo Full‑Stack / Mobile / Backend
              </h5>
              <div className='space-y-2'>
                {[
                  {
                    name: 'React: De cero a experto (Hooks & MERN)',
                    platform: 'DevTalles',
                  },
                  {
                    name: 'Next.js: El framework de React para producción',
                    platform: 'DevTalles',
                  },
                  {
                    name: 'Node – Autenticación REST con Clean Architecture',
                    platform: 'DevTalles',
                  },
                  {
                    name: 'Dart: De cero hasta los detalles',
                    platform: 'DevTalles',
                  },
                  {
                    name: 'Flutter móvil: Recursos nativos',
                    platform: 'DevTalles',
                  },
                  { name: 'Curso de Flutter', platform: 'Platzi' },
                  { name: 'Jetpack Compose', platform: 'Platzi' },
                  { name: 'Curso Básico de JavaScript', platform: 'Platzi' },
                  { name: 'Curso de ECMAScript 6+', platform: 'Platzi' },
                  {
                    name: 'Curso de Closures y Scope en JavaScript 2020',
                    platform: 'Platzi',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-background rounded-lg border border-foreground/10'
                  >
                    <span className='text-sm text-foreground/80 font-medium'>
                      ⭐ {cert.name}
                    </span>
                    <span className='text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded'>
                      {cert.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gestión, Liderazgo y Metodologías Ágiles */}
            <div className='space-y-4'>
              <h5 className='text-lg font-semibold text-foreground flex items-center'>
                <UserGroupIcon className='w-5 h-5 mr-2 text-accent' />
                Gestión, Liderazgo y Metodologías Ágiles
              </h5>
              <div className='space-y-2'>
                {[
                  { name: 'Gestión de Proyectos con Jira', platform: 'Platzi' },
                  {
                    name: 'Gestiona tu Proyecto Scrum con Jira Software',
                    platform: 'Udemy',
                  },
                  {
                    name: 'Product Management para Developers',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Seguimiento y Cierre de Proyectos',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Estrategias para la Productividad y la Organización',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Gestión Efectiva del Tiempo',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Desarrollo del potencial humano XI: Líderes dejando huella',
                    platform: 'CEH',
                  },
                  { name: 'Cómo tratar con clientes', platform: 'CDIN' },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-background rounded-lg border border-foreground/10'
                  >
                    <span className='text-sm text-foreground/80 font-medium'>
                      ⭐ {cert.name}
                    </span>
                    <span className='text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded'>
                      {cert.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps, Automatización y Business Intelligence */}
            <div className='space-y-4'>
              <h5 className='text-lg font-semibold text-foreground flex items-center'>
                <CogIcon className='w-5 h-5 mr-2 text-accent' />
                DevOps, Automatización y Business Intelligence
              </h5>
              <div className='space-y-2'>
                {[
                  {
                    name: 'Automatización de procesos con Power Apps / Power BI',
                    platform: 'Microsoft',
                  },
                  {
                    name: 'Curso de Automatización de Procesos RPA con UiPath',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Google BigQuery, Looker Studio, AppScript',
                    platform: 'Google',
                  },
                  { name: 'Fundamentos de AWS Cloud', platform: 'Platzi' },
                  {
                    name: 'Curso de Fundamentos de AWS Cloud 2018',
                    platform: 'Platzi',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-background rounded-lg border border-foreground/10'
                  >
                    <span className='text-sm text-foreground/80 font-medium'>
                      ⭐ {cert.name}
                    </span>
                    <span className='text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded'>
                      {cert.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diseño, Marca y Tecnología Aplicada */}
            <div className='space-y-4'>
              <h5 className='text-lg font-semibold text-foreground flex items-center'>
                <svg
                  className='w-5 h-5 mr-2 text-accent'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                  />
                </svg>
                Diseño, Marca y Tecnología Aplicada
              </h5>
              <div className='space-y-2'>
                {[
                  {
                    name: 'Curso de Diseño para Developers',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Construcción de Marca',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Diseño y Modelado para Impresión 3D',
                    platform: 'Domestika',
                  },
                  {
                    name: 'Curso de Fundamentos de Electricidad y Electrónica',
                    platform: 'Platzi',
                  },
                  {
                    name: 'Curso de Análisis de Negocios para Ciencia de Datos',
                    platform: 'Platzi',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-background rounded-lg border border-foreground/10'
                  >
                    <span className='text-sm text-foreground/80 font-medium'>
                      ⭐ {cert.name}
                    </span>
                    <span className='text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded'>
                      {cert.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
