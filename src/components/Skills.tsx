'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillCategories = [
  {
    name: 'Frontend',
    icon: ComputerDesktopIcon,
    color: 'bg-accent',
    skills: [
      { name: 'React', level: 95, category: 'frontend' },
      { name: 'Next.js', level: 95, category: 'frontend' },
      { name: 'Vue', level: 70, category: 'frontend' },
      { name: 'TypeScript', level: 90, category: 'frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'frontend' }
    ]
  },
  {
    name: 'Backend',
    icon: ServerIcon,
    color: 'bg-accent/90',
    skills: [
      { name: 'Node.js', level: 95, category: 'backend' },
      { name: 'TypeScript', level: 95, category: 'backend' },
      { name: 'PHP', level: 75, category: 'backend' },
      { name: 'Python', level: 80, category: 'backend' },
      { name: 'Express', level: 90, category: 'backend' }
    ]
  },
  {
    name: 'Mobile',
    icon: DevicePhoneMobileIcon,
    color: 'bg-accent/80',
    skills: [
      { name: 'Flutter', level: 85, category: 'mobile' },
      { name: 'Kotlin', level: 70, category: 'mobile' },
      { name: 'Swift', level: 60, category: 'mobile' },
      { name: 'React Native', level: 75, category: 'mobile' }
    ]
  },
  {
    name: 'Datos',
    icon: CircleStackIcon,
    color: 'bg-accent/70',
    skills: [
      { name: 'PostgreSQL', level: 90, category: 'datos' },
      { name: 'MongoDB', level: 75, category: 'datos' },
      { name: 'MySQL', level: 85, category: 'datos' },
      { name: 'Redis', level: 80, category: 'datos' }
    ]
  },
  {
    name: 'DevOps',
    icon: WrenchScrewdriverIcon,
    color: 'bg-accent/60',
    skills: [
      { name: 'Docker', level: 80, category: 'devops' },
      { name: 'CI/CD', level: 80, category: 'devops' },
      { name: 'Git', level: 95, category: 'devops' },
      { name: 'Linux', level: 85, category: 'devops' }
    ]
  },
  {
    name: 'Cloud',
    icon: CloudIcon,
    color: 'bg-accent/50',
    skills: [
      { name: 'AWS', level: 70, category: 'cloud' },
      { name: 'Vercel', level: 90, category: 'cloud' },
      { name: 'Azure', level: 60, category: 'cloud' },
      { name: 'Firebase', level: 85, category: 'cloud' }
    ]
  }
];

const learningSkills = [
  { name: 'Java: Spring Boot', progress: 10 },
  { name: 'Swift', progress: 60 },
  { name: 'Inglés B2', progress: 30 }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const radarData = skillCategories.map(category => {
    const avgLevel = category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length;
    return {
      category: category.name,
      level: avgLevel,
      color: category.color
    };
  });

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 75) return 'from-blue-500 to-cyan-500';
    if (level >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mi Arsenal <span className="text-accent">Tecnológico</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones escalables y robustas
          </p>
        </motion.div>

        {/* Radar Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Radar background circles */}
            {[1, 2, 3, 4, 5].map((circle) => (
              <div
                key={circle}
                className="absolute border-2 border-foreground/60 rounded-full"
                style={{
                  width: `${circle * 20}%`,
                  height: `${circle * 20}%`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}

            {/* Skill categories as hexagon points */}
            {radarData.map((item, index) => {
              const angle = (index / radarData.length) * 2 * Math.PI - Math.PI / 2;
              const radius = (item.level / 100) * 40; // Max 40% of container
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => setSelectedCategory(
                    selectedCategory === item.category.toLowerCase() 
                      ? null 
                      : item.category.toLowerCase()
                  )}
                >
                  <div className={`w-4 h-4 ${item.color} rounded-full shadow-lg hover:scale-125 transition-transform border-2 border-foreground/80`} />
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium text-foreground/70">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name.toLowerCase();
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className={clsx(
                  'bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-foreground/10',
                  isSelected && 'ring-2 ring-accent scale-105'
                )}
              >
                {/* Category header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {category.skills.length} tecnologías
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        <span className="text-xs text-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={clsx(
                            'h-full bg-gradient-to-r rounded-full transition-all duration-300',
                            getSkillColor(skill.level),
                            hoveredSkill === skill.name && 'shadow-lg'
                          )}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Actualmente Aprendiendo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-foreground/10"
              >
                <div className="text-2xl mb-3">
                  {skill.name === 'Java: Spring Boot' && '☕'}
                  {skill.name === 'Swift' && '🍎'}
                  {skill.name === 'Inglés B2' && '🇺🇸'}
                </div>
                
                <h4 className="font-bold text-foreground mb-3">
                  {skill.name}
                </h4>
                
                <div className="w-full bg-foreground/10 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
                
                <span className="text-xs text-foreground/60">
                  {skill.progress}% progreso
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}