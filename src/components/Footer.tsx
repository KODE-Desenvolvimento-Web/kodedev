import React from 'react';
import { Code2, Heart } from 'lucide-react';
import logo from '../assets/icon/66efa0a9-ddf7-4037-8c33-c8644c9daae1.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="p-1.5 rounded-lg shadow-lg">
                <img src={logo} alt="Logo" className="w-30 h-15 scale-110" />
              </div>
            </div>
            <p className="text-slate-100 max-w-sm leading-relaxed text-sm font-medium">
              Acelerando a transformação digital através de código inteligente e arquiteturas escaláveis. O futuro é construído aqui.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-indigo-100 mb-6 uppercase text-xs tracking-widest">Explorar</h5>
            <ul className="space-y-4 text-slate-100 text-sm font-medium">
              <li><a href="#sobre" className="hover:text-indigo-900 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-indigo-900 transition-colors">Nossos Serviços</a></li>
              <li><a href="#equipe" className="hover:text-indigo-900 transition-colors">Fundadores</a></li>
              <li><a href="#contato" className="hover:text-indigo-900 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-indigo-100 mb-6 uppercase text-xs tracking-widest">Social</h5>
            <ul className="space-y-4 text-slate-100 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-900 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-900 transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] font-bold text-slate-100 uppercase tracking-widest">
            © {new Date().getFullYear()} Kode Digital Solutions. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-100 uppercase tracking-widest">
            <span>Desenvolvido por</span>
            <Heart className="w-3 h-3 text-violet-500 fill-violet-500" />
            <span>João Ryan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
