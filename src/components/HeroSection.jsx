import React from 'react';
import { ChevronDown } from 'lucide-react';
import iconLogo from '../assets/icone.svg';
import NoiseOverlay from './ui/NoiseOverlay';
import Button from './ui/Button';

export default function HeroSection({ wrapperRef, bgRef, contentRef }) {
  const scrollToExplore = () => window.scrollTo({top: 800, behavior: 'smooth'});

  return (
    <div className="relative z-20 gpu-layer" ref={wrapperRef}> 
        <div className="absolute bottom-0 left-0 right-0 h-[200px] -z-20 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_#fba819_0%,_#d98e0a_100%)]"></div>
            {/* O NoiseOverlay deve ser leve, se possível usar a mesma técnica de imagem */}
            <NoiseOverlay opacity={0.4} />
        </div>

        <div ref={bgRef} className="absolute top-16 left-0 right-0 h-full bg-transparent rounded-bl-[40px] md:rounded-bl-[80px] z-0 will-change-transform"></div>

        <section className="relative z-10 min-h-[95vh] flex items-center bg-fixed bg-cover bg-center bg-no-repeat rounded-bl-[40px] md:rounded-bl-[80px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] gpu-layer"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')" }}>
            
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] via-40% to-transparent opacity-95"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

            {/* Adicionado 'will-change-transform' para suavizar a entrada do texto se houver animação */}
            <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-12 items-center gap-12 pt-0 will-change-transform">
                <div className="md:col-span-7 flex flex-col items-start space-y-7 py-12">
                    <div className="inline-flex items-center px-3 py-1 border border-[#FFC107]/40 rounded-full">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#FFC107]">grupo astoria</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[1.1] tracking-tight text-white">
                        chocosul distribuidora
                    </h1>
                    
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg leading-relaxed font-medium">
                        Estrutura robusta, frota própria e tecnologia de ponta para conectar as maiores marcas do mundo ao seu ponto de venda.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                        <Button href="/contato" variant="primary" className="w-full sm:w-auto">Entre em Contato</Button>
                        <Button href="/historia" variant="glass" className="w-full sm:w-auto">Nossa História</Button>
                    </div>
                </div>

                <div className="hidden md:flex md:col-span-5 relative items-center justify-center h-[500px]">
                   <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform" style={{ animation: 'subtle-pulse 8s ease-in-out infinite' }}></div>
                   <div className="relative z-10 w-64 h-64 flex items-center justify-center will-change-transform">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 bg-[#0a0a0a]/30 backdrop-blur-sm"></div>
                        <img src={iconLogo} alt="Ícone Chocosul" className="relative z-20 w-[130%] h-[130%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]" />
                   </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-100 animate-bounce cursor-pointer z-20" onClick={scrollToExplore}>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-600">Explore</span>
                <ChevronDown className="text-gray-600 w-6 h-6" />
            </div>
        </section>
    </div>
  );
}