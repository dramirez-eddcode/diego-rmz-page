'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  BuildingOffice2Icon,
  CreditCardIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const categories = [
  { name: 'Todos', value: 'all', icon: FunnelIcon },
  { name: 'Mobile', value: 'mobile', icon: DevicePhoneMobileIcon },
  { name: 'Web', value: 'web', icon: ComputerDesktopIcon },
  { name: 'Enterprise', value: 'enterprise', icon: BuildingOffice2Icon },
  { name: 'FinTech', value: 'fintech', icon: CreditCardIcon },
  { name: 'Government', value: 'government', icon: BuildingLibraryIcon }
];

const projects = [
  {
    id: 1,
    title: 'Mi Tiendita Juntos',
    subtitle: 'Coca-Cola FEMSA',
    description: 'App móvil empresarial con rediseño completo de arquitectura',
    category: ['mobile', 'enterprise'],
    tags: ['Flutter', 'Node.js', 'SQL Server'],
    metrics: ['10,000+ usuarios activos', 'Integración con API Citi Banamex', 'Arquitectura escalable'],
    image: '/projects/mi-tiendita.jpg',
    demoUrl: '#',
    caseStudyUrl: 'https://mitienditajuntos.com/',
    featured: true
  },
  {
    id: 2,
    title: 'Know Me App',
    subtitle: 'Plataforma NFC Profesional',
    description: 'Plataforma de networking con tecnología NFC y pagos integrados',
    category: ['web', 'fintech'],
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'NFC'],
    metrics: ['Pagos integrados con Stripe', 'Búsqueda inteligente con Algolia', 'Dashboard analytics en tiempo real'],
    image: '/projects/know-me.jpg',
    demoUrl: '#',
    liveUrl: 'https://www.knowmeapp.com/',
    featured: true
  },
  {
    id: 3,
    title: 'KONNEXXA',
    subtitle: 'Plataforma B2B',
    description: 'Sistema integral de conexiones empresariales y gestión de leads',
    category: ['web', 'enterprise'],
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    metrics: ['500+ empresas conectadas', 'Sistema de matching inteligente', 'Analytics avanzados'],
    image: '/projects/konnexxa.jpg',
    liveUrl: 'https://www.konnexxa.com/',
    featured: true
  },
  {
    id: 7,
    title: 'NOM-035 Manager',
    subtitle: 'Gestión de Norma 035',
    description: 'Gestión y aplicación de guías I, II, III y V para el cumplimiento de la norma 035',
    category: ['web', 'government', 'enterprise'],
    tags: ['Next.js 15', 'Supabase', 'Resend', 'TypeScript', 'Vercel'],
    metrics: ['Cumplimiento normativo automatizado', 'Gestión integral de guías', 'Dashboard de seguimiento'],
    image: '/projects/nom035.jpg',
    liveUrl: 'https://nom035-manager.vercel.app/',
    featured: true
  },
  {
    id: 4,
    title: 'CRM TKM',
    subtitle: 'Sistema de Gestión',
    description: 'CRM personalizado para gestión de clientes y ventas',
    category: ['web', 'enterprise'],
    tags: ['Vue.js', 'PHP', 'MySQL'],
    metrics: ['Automatización de procesos', 'Reportes personalizados', 'Integración con herramientas existentes'],
    image: '/projects/crm-tkm.jpg',
    caseStudyUrl: 'https://www.linkedin.com/company/tkm-customer-solutions',
    featured: false
  },
  {
    id: 5,
    title: 'Veolia LATAM BI',
    subtitle: 'Business Intelligence',
    description: 'Dashboard ejecutivo para análisis de datos empresariales',
    category: ['web', 'enterprise'],
    tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    metrics: ['Visualización de datos complejos', 'Reportes automatizados', 'Integración multi-región'],
    image: '/projects/veolia-bi.jpg',
    caseStudyUrl: 'https://www.latinoamerica.veolia.com/es',
    featured: false
  },
  {
    id: 6,
    title: 'Portal Gobierno GTO',
    subtitle: 'Gobierno de Guanajuato',
    description: 'Portal ciudadano para trámites y servicios gubernamentales',
    category: ['web', 'government'],
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    metrics: ['100K+ ciudadanos atendidos', 'Reducción 60% tiempos de trámite', 'Accesibilidad AAA'],
    image: '/projects/gobierno-gto.jpg',
    caseStudyUrl: 'https://guanajuato.mx/',
    featured: false
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category.includes(selectedCategory)
  );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos <span className="text-accent">Destacados</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
            arquitectura de sistemas y liderazgo técnico.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={clsx(
                  'flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer',
                  selectedCategory === category.value
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-background/50 text-foreground/70 hover:bg-accent/5 border border-foreground/10'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Proyectos Principales
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatePresence>
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group relative bg-background/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-foreground/10"
                  >
                    {/* Project Preview */}
                    <div className="aspect-video bg-accent/5 relative overflow-hidden">
                      {/* Website Preview */}
                      <iframe
                        src={project.liveUrl || project.caseStudyUrl}
                        className="w-full h-full scale-[0.3] origin-top-left transform-gpu"
                        style={{
                          width: '333.33%',
                          height: '333.33%',
                          pointerEvents: 'none'
                        }}
                        title={`${project.title} preview`}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-4"
                      >
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center space-x-2 cursor-pointer shadow-lg"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            <span>Visitar sitio</span>
                          </a>
                        )}
                        {!project.liveUrl && project.caseStudyUrl && (
                          <a 
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center space-x-2 cursor-pointer shadow-lg"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            <span>Ver proyecto</span>
                          </a>
                        )}
                      </motion.div>
                    </div>

                    <div className="p-6">
                      {/* Title and subtitle */}
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm font-medium text-accent">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/70 mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-foreground/10 text-foreground/80 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="space-y-2 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-foreground/60">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        {project.caseStudyUrl && (
                          <a 
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent hover:text-accent/80 font-medium text-sm cursor-pointer"
                          >
                            <span>Ver caso de estudio</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Más proyectos
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-background/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-foreground/10"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-2xl">
                        {project.category.includes('mobile') ? '📱' : project.category.includes('government') ? '🏛️' : '💼'}
                      </span>
                    </div>

                    {/* Title and subtitle */}
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-foreground/10 text-foreground/80 text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-foreground/10 text-foreground/80 text-xs font-medium rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    {project.caseStudyUrl && (
                      <a 
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-accent hover:text-accent/80 font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Ver más</span>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}