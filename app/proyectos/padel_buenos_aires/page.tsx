'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import InvestmentForm from '../../components/InvestmentForm';

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function PadelBuenosAires() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [project, setProject] = useState({
    title: 'Complejo de Padel',
    location: 'Buenos Aires, Argentina',
    expectedYieldPercent: 20,
    image: '/proyectos/mvp_padel_court.png',
    status: 'abierto',
    targetGoalUsd: 200000,
    committedUsd: 0,
    progressPercent: 0,
    description: 'Complejo de pádel con 3 canchas profesionales, ubicado en zona estratégica de Buenos Aires.',
    sportType: 'Pádel',
    roiYears: 3,
    revenuePercentPerYear: 20,
    revenuePeriodYears: 3,
    features: [
      '3 canchas profesionales de pádel',
      'Ubicación estratégica en Buenos Aires',
      'Instalaciones de primera calidad',
      'Gestión profesional y operación continua',
      'Acceso a eventos y torneos exclusivos',
    ],
    investmentDetails: {
      minimumInvestment: 100,      
      investmentUnit: 100,
    },
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch('https://sportchain.itzimi.com/api/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            const { capital, percentage } = result.data;
            
            setProject(prevProject => ({
              ...prevProject,
              committedUsd: capital || prevProject.committedUsd,
              progressPercent: percentage || prevProject.progressPercent
            }));
          }
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
        // Keep default values if API fails
      }
    };

    fetchProjectData();
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/proyectos" 
            className="inline-flex items-center mb-6 text-sm"
            style={{ color: 'var(--color-primary)' }}
          >
            ← Volver a Proyectos
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute top-4 left-4">
                <span 
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--color-accent-gold)',
                    color: 'var(--color-primary)'
                  }}
                >
                  {project.status.toUpperCase()}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span 
                  className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {project.sportType.toUpperCase()}

                           
                </span>

                
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                {project.title}
              </h1>
              <p className="text-lg mb-6" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>
                {project.location}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--foreground)' }}>
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-muted)', border: '1px solid rgba(220, 196, 142, 0.3)' }}>
                  <p className="text-sm mb-1" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Rendimiento esperado</p>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-accent-gold)' }}>
                    {project.expectedYieldPercent}%
                  </p>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-muted)', border: '1px solid rgba(220, 196, 142, 0.3)' }}>
                  <p className="text-sm mb-1" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Período de retorno</p>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-accent-gold)' }}>
                    {project.roiYears} años
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>
                  <span>
                    $ {Number(project.committedUsd).toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })} comprometido
                  </span>
                  <span>Meta {formatCurrency(project.targetGoalUsd)}</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(220, 196, 142, 0.2)' }}>
                  <div
                    className="h-full transition-all duration-300"
                    style={{ 
                      width: `${Math.min(Math.max(project.progressPercent, 0), 100)}%`,
                      backgroundColor: 'var(--color-accent-gold)'
                    }}
                  />
                </div>
                <div className="text-right text-sm mt-2" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>
                  {project.progressPercent}% completado
                </div>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-gold inline-block px-8 py-4 rounded-lg text-lg font-bold cursor-pointer"
                style={{ color: 'var(--color-primary)' }}
              >
                Invertir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-muted)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Características del Proyecto
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: 'var(--color-accent-gold)' }}>✓</span>
                    <span style={{ color: 'var(--foreground)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investment Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Detalles de Inversión
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'white', border: '1px solid rgba(220, 196, 142, 0.3)' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Información Financiera
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Meta de inversión:</span>
                      <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                        {formatCurrency(project.targetGoalUsd)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Inversión mínima:</span>
                      <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                        {formatCurrency(project.investmentDetails.minimumInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Unidad de inversión:</span>
                      <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                        {formatCurrency(project.investmentDetails.investmentUnit)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: 'white', border: '1px solid rgba(220, 196, 142, 0.3)' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    Proyección de Retornos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Rendimiento anual:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-accent-gold)' }}>
                        {project.revenuePercentPerYear}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>Período de ingresos:</span>
                      <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                        {project.revenuePeriodYears} años
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'rgba(11, 31, 59, 0.7)' }}>ROI estimado:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-accent-gold)' }}>
                        {project.roiYears} años
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            ¿Listo para invertir?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(11, 31, 59, 0.7)' }}>
            Únete a otros inversores y forma parte del futuro del deporte en Latinoamérica.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-gold inline-block px-8 py-4 rounded-lg text-lg font-bold cursor-pointer"
            style={{ color: 'var(--color-primary)' }}
          >
            Invertir Ahora
          </button>
        </div>
      </section>

      {/* Investment Form Modal */}
      <InvestmentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        projectTitle={project.title}
      />
    </main>
  );
}

