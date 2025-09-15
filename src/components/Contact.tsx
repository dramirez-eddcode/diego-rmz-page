'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

interface ContactMethod {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }> | string;
  action: string;
  href?: string;
  color: string;
  available: boolean;
}

// Custom icon component for SVG files
const CustomIcon = ({ src, className }: { src: string; className?: string }) => (
  <div className={className}>
    <Image
      src={src}
      alt=""
      width={24}
      height={24}
      className="w-full h-full"
    />
  </div>
);

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    name: 'Email Directo',
    description: 'Respuesta en menos de 24 horas',
    icon: '/icons/gmail-icon.svg',
    action: 'dramirez@eddcode.com',
    href: 'mailto:dramirez@eddcode.com',
    color: 'bg-white',
    available: true
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Chat directo para proyectos urgentes',
    icon: '/icons/whatsapp-icon.svg',
    action: '+52 477 581 3450',
    href: 'https://wa.me/5214775813450?text=Hola%20Diego%2C%20me%20interesa%20contactarte%20para%20un%20proyecto.%20%C2%BFPodr%C3%ADamos%20conversar%3F',
    color: 'bg-green-500',
    available: true
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Conexión profesional y networking',
    icon: '/icons/linkedin-icon.svg',
    action: '/in/diego-eduardo-ramírez-martínez',
    href: 'https://www.linkedin.com/in/diego-eduardo-ram%C3%ADrez-mart%C3%ADnez-0855a5194/',
    color: 'bg-blue-600',
    available: true
  },
  {
    id: 'calendar',
    name: 'Agendar Llamada',
    description: 'Videollamada de 30 min para discutir tu proyecto',
    icon: '/icons/meet-icon.svg',
    action: 'Calendly - Sesión gratuita',
    href: 'https://calendly.com/dramirez-eddcode/30min',
    color: 'bg-white',
    available: true
  }
];

const availabilityOptions = [
  'Posiciones Full-Stack Senior',
  'Liderazgo Técnico',
  'Consultoría en arquitectura',
  'Desarrollo de MVP',
  'Auditoría técnica de proyectos'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: ''
        });
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Listo para construir algo{' '}
            <span className="text-accent">increíble</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Estoy disponible para nuevos desafíos. Conversemos sobre cómo puedo 
            ayudarte a llevar tu proyecto al siguiente nivel.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-foreground/60">
            <MapPinIcon className="w-5 h-5" />
            <span>León, Guanajuato, México</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-accent font-medium">Disponible</span>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Múltiples formas de contactar
                </h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    return (
                      <motion.a
                        key={method.id}
                        href={method.href}
                        target={method.href?.startsWith('http') ? '_blank' : undefined}
                        rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setHoveredMethod(method.id)}
                        onHoverEnd={() => setHoveredMethod(null)}
                        className="group block bg-background/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-foreground/10"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            {typeof method.icon === 'string' ? (
                              <CustomIcon src={method.icon} className="w-6 h-6" />
                            ) : (
                              <method.icon className="w-6 h-6 text-white" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-lg font-bold text-foreground">
                                {method.name}
                              </h4>
                              {method.available && (
                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                              )}
                            </div>
                            
                            <p className="text-sm text-foreground/60 mb-2">
                              {method.description}
                            </p>
                            
                            <div className="font-medium text-accent group-hover:underline">
                              {method.action}
                            </div>
                          </div>
                          
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-5 h-5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 rounded-2xl p-6 border border-accent/20"
              >
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Estoy disponible para:
                </h4>
                <div className="space-y-3">
                  {availabilityOptions.map((option, index) => (
                    <motion.div
                      key={option}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80">{option}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-xl p-8 border border-foreground/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground/80 mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="fullstack">Desarrollo Full-Stack</option>
                    <option value="mobile">Aplicación Móvil</option>
                    <option value="consulting">Consultoría Técnica</option>
                    <option value="leadership">Liderazgo Técnico</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntame más sobre tu proyecto..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-accent bg-accent/10 p-3 rounded-lg"
                  >
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-accent bg-accent/10 p-3 rounded-lg"
                  >
                    <ExclamationTriangleIcon className="w-5 h-5" />
                    <span>Error al enviar el mensaje. Intenta contactarme directamente.</span>
                  </motion.div>
                )}
              </form>

              {/* Response time notice */}
              <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-accent text-center">
                  ⚡ <strong>Respuesta garantizada en menos de 24 horas</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}