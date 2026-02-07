import React from 'react';
import { Target, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-indigo-900" />,
      title: "Agilidade",
      description: "Desenvolvimento rápido focado no que realmente importa: seu tempo."
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-900" />,
      title: "Precisão",
      description: "Código limpo, escalável e soluções que resolvem problemas reais."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-900" />,
      title: "Confiança",
      description: "Suporte contínuo e transparência total em todas as etapas."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-6 leading-tight">
              Criada por quem respira tecnologia e inovação.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A <span className="font-bold text-indigo-900">Kode</span> nasceu da união de três jovens desenvolvedores apaixonados por criar impacto através do software. Nossa missão é elevar o nível digital de empresas, entregando tecnologia de ponta.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Combinamos design centrado no usuário com engenharia de software robusta para garantir que cada produto seja funcional, seguro e preparado para escala.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
               {values.map((v, i) => (
                 <div key={i} className="flex flex-col space-y-3 group">
                    <div className="bg-white p-3 rounded-xl shadow-sm w-fit group-hover:bg-indigo-900 group-hover:text-white transition-all">
                      {v.icon}
                    </div>
                    <h4 className="font-bold text-indigo-950">{v.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{v.description}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-indigo-900/5 rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Equipe trabalhando"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/60 to-transparent"></div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[1.5rem] shadow-2xl border border-slate-100 max-w-[220px] animate-bounce-slow">
              <span className="text-5xl font-black text-indigo-900 block mb-1">3+</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Especialistas prontos para o seu próximo desafio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
