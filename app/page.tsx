'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Zap, Menu, X, ExternalLink, MessageCircle, Star, Cpu, Globe, Rocket, ShieldCheck, Layout } from 'lucide-react';

export default function NextGeoStudio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Efecto para el cambio de navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phone = '573154473200';
    const message = encodeURIComponent('¡Hola! Me interesa crear una página web con NextGeo Studio');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Datos conservados intactos
  const benefits = [
    { icon: Code, title: 'Diseño Profesional', desc: 'Sitios web modernos que destacan tu marca' },
    { icon: Smartphone, title: 'Responsive', desc: 'Perfectos en cualquier dispositivo' },
    { icon: Zap, title: 'Rápidos y Optimizados', desc: 'Carga veloz y SEO optimizado' }
  ];

  const faqs = [
    { q: '¿Cuánto tiempo toma crear mi sitio?', a: 'Entre 1-2 semanas dependiendo de la complejidad del proyecto.' },
    { q: '¿Incluye hosting y dominio?', a: 'Sí, todos nuestros planes incluyen hosting y dominio por el primer año.' },
    { q: '¿Puedo actualizar el contenido?', a: 'Absolutamente. Te enseñamos a gestionar tu sitio o lo hacemos por ti.' },
    { q: '¿Ofrecen soporte post-lanzamiento?', a: 'Sí, incluimos soporte técnico durante los primeros 3 meses en algunos planes.' },
    { q: '¿Qué tecnologías utilizan?', a: 'Utilizamos las últimas tecnologías web: React, Next.js, y frameworks modernos.' },
    { q: '¿El sitio será compatible con móviles?', a: 'Todos nuestros diseños son 100% responsive y se adaptan perfectamente.' }
  ];

  const plans = [
    { name: 'Emprendimiento', price: '250k', features: ['Landing page', '2 secciones', 'No incluye dominio personalizado'], popular: false, color: 'from-blue-400 to-cyan-400' },
    { name: 'Básico', price: '900k', features: ['Landing page', 'Hasta 5 secciones', 'Logo Basico', 'Mantenimiento por 1 mes', 'Dominio por 1 año', 'Hosting por 1 año', '2 videos publicitarios', 'Boton de WhatsApp'], popular: false, color: 'from-cyan-400 to-teal-400' },
    { name: 'Profesional', price: '1.2m', features: ['Landing Page','Logo Avanzado', 'Hasta 8 secciones', 'Mantenimiento por 3 meses', 'SEO avanzado', '4 videos publicitarios', 'Dominio + Hosting 1 año', 'Boton de WhatsApp y redes sociales'], popular: true, color: 'from-purple-500 to-pink-500' },
    { name: 'Premium', price: '2.8m', features: ['Landing page','Logo Profesional','Secciones ilimitadas','Chat Bot','Optimizacion RS', 'Mantenimiento 5 meses', '6 videos publicitarios', 'Diseño personalizado', 'Soporte prioritario', 'SEO avanzado', 'Botones sociales'], popular: false, color: 'from-amber-400 to-orange-500' },
    { name: 'Crecimiento', price: '850k', features: ['Logo profesional','8 videos publicitarios', 'Creacion y Optimizacion RS 1 mes', 'Actualizacion visual RS 1 mes ' ], popular: false, color: 'from-emerald-400 to-green-500' },
    { name: 'ChatBot', price: '1m', features: ['ChatBot IA', '5 videos publicitarios', 'Logo Avanzado', 'Mantenimiento por 3 meses', ], popular: false, color: 'from-indigo-400 to-blue-500' },
    {
      name: 'Sistema Avanzado',
      price: 'Desde $3.500.000 COP',
      features: [
        'Sistema web completo (NO landing page)',
        'Backend + Frontend (Full Stack)',
        'Base de datos profesional',
        'Sistema de reservas o pedidos',
        'Gestión de usuarios (login y roles)',
        'Panel administrativo',
        'Integración de pagos (Stripe / Wompi / PayPal)',
        'Estados y validaciones (reservas, pagos, usuarios)',
        'Notificaciones básicas (correo o WhatsApp)',
        'Diseño UI/UX premium y responsive',
        'Optimización de rendimiento y seguridad',
        'Deploy profesional (Vercel / servidor)',
        'Capacitación básica para el cliente',
        'Mantenimiento y soporte por 4 meses'
      ],
      color: 'from-purple-500 to-indigo-600'
    }
    
  ];

  // LINKS ACTUALIZADOS AQUÍ
  const examples = [
    { title: 'Restaurante Gourmet', category: 'Gastronomía', description: 'Sitio elegante con menú digital y reservas.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', color: 'from-orange-500 to-red-500', link: 'https://demo-restaurante-five.vercel.app' },
    { title: 'Boutique de Moda', category: 'E-commerce', description: 'Tienda online moderna con carrito.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop', color: 'from-pink-500 to-purple-500', link: 'https://demo-boutique.vercel.app' },
    { title: 'Estudio Arquitectura', category: 'Portafolio', description: 'Diseño minimalista visual.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop', color: 'from-slate-500 to-gray-500', link: 'https://demo-arquitectura.vercel.app' },
    { title: 'Gimnasio Fitness', category: 'Servicios', description: 'Horarios y sistema de inscripción.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', color: 'from-green-500 to-emerald-500', link: 'https://demo-gimnasio.vercel.app' },
    { title: 'Agencia de Viajes', category: 'Turismo', description: 'Paquetes turísticos y cotización.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop', color: 'from-blue-500 to-cyan-500', link: 'https://demo-viajes.vercel.app' },
    { title: 'Clínica Dental', category: 'Salud', description: 'Servicios médicos y agenda.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop', color: 'from-teal-500 to-blue-500', link: 'https://demo-clinica-pi.vercel.app' },
    { title: 'Tienda iPhone', category: 'E-commerce', description: 'Venta de iPhones con catálogo, carrito y diseño premium.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop', color: 'from-gray-500 to-neutral-800', link: 'https://tienda-tecnologia-eight.vercel.app' }

  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      {/* Estilos CSS Globales e Inyectados */}
      <style>{`
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes grid-move { 0% { transform: translateY(0); } 100% { transform: translateY(50px); } }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-shimmer { background-size: 200% auto; animation: shimmer 4s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        .glass-nav { background: rgba(3, 7, 18, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .glass-card:hover { background: rgba(255, 255, 255, 0.06); border-color: rgba(255, 255, 255, 0.1); transform: translateY(-5px); box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5); }
        
        .bg-grid-pattern { background-size: 50px 50px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px); }
        .text-glow { text-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
      `}</style>

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Navbar Flotante */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav h-16' : 'h-24 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <span className="font-bold text-xl">N</span>
              <div className="absolute inset-0 border border-white/20 rounded-xl" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">NextGeo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Beneficios', 'Tecnologías', 'Ejemplos', 'Planes'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </button>
            ))}
            <button onClick={openWhatsApp} className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Cotizar
            </button>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass-nav border-t border-white/10 p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            {['Inicio', 'Beneficios', 'Tecnologías', 'Ejemplos', 'Planes'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} className="text-left text-gray-300 hover:text-white py-2">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[800px] h-[800px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6 animate-in fade-in slide-in-from-bottom-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Innovación Digital 2026
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 animate-in slide-in-from-bottom-8 duration-700">
            NextGeo <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-shimmer">Studio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-1000">
            Diseñamos el futuro digital de tu marca. Webs ultrarrápidas, 
            diseños inmersivos y estrategias que convierten visitantes en clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-12 duration-1000">
            <button 
              onClick={() => scrollToSection('planes')}
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center gap-2"
            >
              Ver Planes <Rocket size={20} className="text-purple-600" />
            </button>
            <button 
              onClick={openWhatsApp}
              className="px-8 py-4 glass-card rounded-full font-semibold text-lg hover:bg-white/10 flex items-center gap-2"
            >
              Contactar Ahora <MessageCircle size={20} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown />
        </div>
      </section>

      {/* Beneficios - Grid Bentrómico */}
      <section id="beneficios" className="py-24 relative px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-4">
              Más que una página web
            </h2>
            <p className="text-gray-400">Potencia tu negocio con tecnología de punta.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <benefit.icon className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section id="tecnologias" className="py-24 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Stack Tecnológico <br/> <span className="text-purple-400">Next-Gen</span></h2>
                <p className="text-gray-400 mb-8 text-lg">
                  No usamos plantillas lentas. Construimos software a medida utilizando las herramientas que usan empresas como Uber, Facebook y Netflix.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                      <Cpu className="text-blue-400" /> <span>React & Next.js</span>
                   </div>
                   <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                      <Layout className="text-teal-400" /> <span>Tailwind CSS</span>
                   </div>
                   <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                      <Globe className="text-purple-400" /> <span>SEO Nativo</span>
                   </div>
                   <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                      <ShieldCheck className="text-green-400" /> <span>Seguridad SSL</span>
                   </div>
                </div>
             </div>
             
             {/* Visual representation code/tech */}
             <div className="md:w-1/2 w-full relative h-[400px] glass-card rounded-2xl border border-white/10 p-6 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50" />
                
                {/* Simulated Floating Code Card */}
                <div className="relative z-10 w-64 bg-[#0f172a] rounded-xl p-4 shadow-2xl border border-white/10 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 bg-gray-700 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-gray-700 rounded animate-pulse delay-75" />
                    <div className="h-2 w-3/4 bg-gray-700 rounded animate-pulse delay-150" />
                    <div className="h-2 w-full bg-blue-500/50 rounded mt-4" />
                  </div>
                </div>
                
                {/* Background Card */}
                 <div className="absolute z-0 w-64 bg-[#1e293b] rounded-xl p-4 shadow-2xl border border-white/5 transform rotate-[10deg] translate-x-12 opacity-60 scale-90">
                   <div className="h-full w-full bg-gray-800/50 rounded" />
                 </div>
             </div>
           </div>
        </div>
      </section>

      {/* Portafolio - LINKS CONECTADOS AQUÍ */}
      <section id="ejemplos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Resultados Reales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((ex, i) => (
              <a 
                key={i} 
                href={ex.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative rounded-2xl overflow-hidden cursor-pointer block"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${ex.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                <img 
                  src={ex.image} 
                  alt={ex.title} 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <span className="text-xs font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded-md border border-white/10 mb-2 inline-block">
                     {ex.category}
                   </span>
                   <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white mb-1">{ex.title}</h3>
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{ex.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Pricing */}
      <section id="planes" className="py-24 relative px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold">Inversión Transparente</h2>
             <p className="text-gray-400 mt-4">Sin costos ocultos. Elige el motor de tu crecimiento.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-3xl p-1 ${plan.popular ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500' : 'bg-white/10'} hover:scale-[1.02] transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Star size={12} fill="white" /> Más Popular
                  </div>
                )}
                
                <div className="bg-[#0b0f19] h-full rounded-[22px] p-8 flex flex-col relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${plan.color} opacity-10 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none`} />

                  <h3 className="text-xl font-bold text-gray-300 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-white">$ {plan.price}</span>
                    <span className="text-gray-500 text-sm">/único</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className={`mt-1 min-w-[16px] h-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                          <span className="text-[10px] text-white font-bold">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={openWhatsApp}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      plan.popular 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                    }`}
                  >
                    Elegir Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Compacto */}
      <section id="faq" className="py-24 px-4 bg-white/5 border-t border-white/5">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <details key={i} className="group glass-card rounded-xl">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none">
                       {faq.q}
                       <ChevronDown className="group-open:rotate-180 transition-transform text-purple-400" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                       {faq.a}
                    </div>
                 </details>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
           <h2 className="text-2xl font-bold mb-6">NextGeo Studio</h2>
           <div className="flex justify-center gap-6 mb-8">
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink /></a>
           </div>
           <p className="text-gray-600 text-sm">© 2024 NextGeo Studio. Innovación desde Colombia para el mundo.</p>
        </div>
      </footer>

      {/* Floating Action Button WhatsApp */}
      <button 
         onClick={openWhatsApp}
         className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-[#25D366]/50 transition-all hover:scale-110 animate-bounce"
         style={{ animationDuration: '3s' }}
      >
         <MessageCircle size={32} fill="white" className="text-transparent" />
      </button>

    </div>
  );
}