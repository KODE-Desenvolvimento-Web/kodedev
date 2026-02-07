import React from 'react';
import { Layout, Database, Globe, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão, focadas em transformar visitantes em clientes reais.",
      icon: <Layout className="w-8 h-8 text-indigo-900" />,
    },
    {
      title: "Sistemas SaaS",
      description: "Plataformas robustas e escaláveis na nuvem para gerenciar o seu negócio online.",
      icon: <Database className="w-8 h-8 text-indigo-900" />,
    },
    {
      title: "Sistemas Web",
      description: "Dashboards, CRMs e soluções administrativas personalizadas para sua empresa.",
      icon: <Globe className="w-8 h-8 text-indigo-900" />,
    },
    {
      title: "Apps Sob Medida",
      description: "Desenvolvimento full-stack utilizando as tecnologias mais modernas do mercado.",
      icon: <Rocket className="w-8 h-8 text-indigo-900" />,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Serviços Especializados</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-6">
            Soluções completas de engenharia digital.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-900/20 hover:shadow-2xl hover:shadow-indigo-900/10 transition-all group cursor-default"
            >
              <div className="bg-slate-50 p-5 rounded-2xl w-fit mb-8 group-hover:bg-indigo-900 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-indigo-950 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <div className="w-12 h-1.5 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-indigo-900 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
