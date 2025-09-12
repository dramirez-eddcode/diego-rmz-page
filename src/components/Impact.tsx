'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  UsersIcon,
  ClockIcon,
  BuildingOfficeIcon,
  LinkIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

interface Metric {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  prefix?: string;
}

const metrics: Metric[] = [
  {
    id: 'projects',
    title: 'Proyectos',
    value: 15,
    suffix: '+',
    description: 'Completados exitosamente',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'users',
    title: 'Usuarios',
    value: 50000,
    suffix: '+',
    description: 'Impactados positivamente',
    icon: UsersIcon,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'reduction',
    title: 'Reducción',
    value: 30,
    suffix: '%',
    description: 'en tiempos de desarrollo',
    icon: ClockIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'industries',
    title: 'Industrias',
    value: 4,
    suffix: '',
    description: 'Sectores diferentes',
    icon: BuildingOfficeIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    value: 10,
    suffix: '+',
    description: 'API Enterprise',
    icon: LinkIcon,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'uptime',
    title: 'Uptime',
    value: 99.9,
    suffix: '%',
    description: 'en producción',
    icon: SignalIcon,
    color: 'from-teal-500 to-blue-500'
  }
];

const CounterAnimation = ({ 
  metric, 
  isVisible 
}: { 
  metric: Metric; 
  isVisible: boolean; 
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = metric.value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.round(increment * currentStep));
        } else {
          setCount(metric.value);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasStarted, metric.value]);

  const formatValue = (value: number) => {
    if (value >= 50000) {
      return (value / 1000).toFixed(0) + 'K';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  };

  return (
    <span className="tabular-nums">
      {metric.prefix}{formatValue(count)}{metric.suffix}
    </span>
  );
};

export default function Impact() {
  const [visibleMetrics, setVisibleMetrics] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const metricId = entry.target.getAttribute('data-metric-id');
            if (metricId) {
              setVisibleMetrics(prev => new Set(prev).add(metricId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const metricElements = sectionRef.current?.querySelectorAll('[data-metric-id]');
    metricElements?.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mi Impacto en <span className="text-blue-600">Números</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Resultados medibles que demuestran mi contribución en proyectos reales
            y el valor que aporto a cada organización.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <motion.div
                key={metric.id}
                data-metric-id={metric.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${metric.color}`} />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value */}
                <div className="mb-4">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    <CounterAnimation 
                      metric={metric} 
                      isVisible={visibleMetrics.has(metric.id)} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {metric.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Impacto Real, Resultados Medibles
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Cada número representa proyectos reales, usuarios satisfechos y mejoras 
              tangibles en procesos empresariales. Mi enfoque siempre ha sido entregar 
              soluciones que no solo funcionen, sino que generen valor real.
            </p>
            
            {/* Highlight boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Enterprise
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proyectos críticos para grandes corporaciones
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Escalabilidad
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Arquitecturas que crecen con el negocio
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Liderazgo
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Equipos motivados y proyectos exitosos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}