import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

type Tab = 'Home' | 'Works' | 'Blog' | 'About' | 'Contact';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  type?: string;
  date?: string;
  contribution?: string;
  description?: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs: Tab[] = ['Works', 'Blog', 'About', 'Contact'];
  const categories = ['All', 'UX/UI', 'Branding', 'Typography', 'Graphic', 'Advertising'];

  const projects: Project[] = [
    {
      id: 1,
      title: '에코(Eco;Echo)',
      category: 'UX/UI',
      image: '/projects/eco-echo.png',
      type: 'Team project - 5인',
      date: '2024. 09 - 12',
      contribution: 'UX 리서치 80% I 아이디어 제안 및 기획 I \nUX 디자인 70% I UI디자인 40% I \n사용성 테스트 진행 I 프로모션 영상 제작',
      description: '환경 문제의 심각성과 정보의 파편화, 지속적인 관심의 부족으로 환경 보호 행동을 하지 못하는 사람들의 잠재적인 니즈를 파악하여 사용자 맞춤형 정보 제공과 지속적으로 실천 가능한 환경 보호 활동을 제안하는 앱 서비스를 기획하였습니다. 에코는 개인의 환경보호 행동을 촉진하고 보다 나은 지구 환경을 만드는는 것을 목표로 합니다. AI를 적극적으로 활용하여 사용자의 부담을 줄이고, 사용자가 직접 컨텐츠 제작자가 되어 자신의 경험을 공유하며 타인과 상호작용 하도록 하였습니다.',
    },
    {
      id: 2,
      title: '텀블링(Tumbling)',
      category: 'UX/UI',
      image: 'https://picsum.photos/seed/tumbling/800/600',
    },
    {
      id: 3,
      title: '몽글(Monggle)',
      category: 'UX/UI',
      image: 'https://picsum.photos/seed/monggle/800/600',
    },
    // More projects can be added here
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-[70vh] text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display italic font-light tracking-tighter mb-6">
              Welcome to <span className="text-pink-accent">my world</span>
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('Works')}
              className="mt-12 px-8 py-3 border border-pink-accent text-pink-accent rounded-full hover:bg-pink-accent hover:text-black transition-colors flex items-center gap-2"
            >
              View Works <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        );
      case 'Works':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto py-12 px-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-2 ${
                    activeCategory === category ? 'text-pink-accent' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="categoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-pink-accent"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/5 mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{project.category}</p>
                  <h3 className="text-lg font-display font-semibold">{project.title}</h3>
                </motion.div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full py-24 text-center">
                  <p className="text-zinc-500 italic">No projects found in this category yet.</p>
                </div>
              )}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-zinc-900 border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sticky top-0 z-10 flex justify-end p-6 bg-zinc-900/50 backdrop-blur-md">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="px-8 pb-12 md:px-16 md:pb-20">
                      <div className="aspect-video w-full bg-zinc-800 rounded-2xl overflow-hidden mb-12 border border-white/5">
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1 space-y-8">
                          <div>
                            <h2 className="text-3xl font-display font-bold text-pink-accent mb-2">{selectedProject.title}</h2>
                            <p className="text-zinc-500 uppercase tracking-widest text-xs">{selectedProject.category}</p>
                          </div>

                          {selectedProject.type && (
                            <div className="space-y-1">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Type</p>
                              <p className="text-sm font-light">{selectedProject.type}</p>
                            </div>
                          )}

                          {selectedProject.date && (
                            <div className="space-y-1">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Date</p>
                              <p className="text-sm font-light">{selectedProject.date}</p>
                            </div>
                          )}

                          {selectedProject.contribution && (
                            <div className="space-y-1">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Contribution & Role</p>
                              <p className="text-sm font-light leading-relaxed whitespace-pre-wrap">{selectedProject.contribution}</p>
                            </div>
                          )}
                        </div>

                        <div className="md:col-span-2">
                          {selectedProject.description && (
                            <div className="space-y-4">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Description</p>
                              <p className="text-base font-light leading-relaxed text-zinc-300 whitespace-pre-wrap">
                                {selectedProject.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      case 'About':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-4xl mx-auto py-12 px-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-display italic font-bold text-pink-accent mb-4">About Me</h2>
                <div className="w-full aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                  <img 
                    src="https://picsum.photos/seed/profile/600/800" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-2xl font-bold">엄영선</p>
                <p className="text-zinc-500 text-sm">Um yeong seon</p>
              </div>
              
              <div className="md:col-span-2 space-y-12">
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Education</h3>
                  <p className="text-lg leading-relaxed">
                    숙명여자대학교 시각영상디자인 본전공<br />
                    홍보광고학 복수전공
                  </p>
                </section>

                <section>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">Experience</h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2026</span>
                      <div className="space-y-2">
                        <p className="font-normal"><span className="font-extralight">UXUI</span> 학회 <span className="font-extralight">luxe</span> 부학회장</p>
                        <p className="font-normal"><span className="font-extralight">PRAD Creative LAB(PCL)</span> 3기</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2025</span>
                      <div className="space-y-2">
                        <p className="font-normal"><span className="font-extralight">UXUI</span> 학회 <span className="font-extralight">luxe</span></p>
                        <p className="font-normal text-white"><span className="font-extralight">TT</span>서울 <span className="font-extralight">TT</span>멤버십</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2024</span>
                      <div className="space-y-2">
                        <p className="font-normal">대한민국대학생광고대회 코삭(<span className="font-extralight">KOSAC</span>) 공모전 챌린저상</p>
                        <p className="font-normal">대한민국디자인어워드(<span className="font-extralight">DK Award</span>) <span className="font-extralight">UX/UI</span> 부문 입선</p>
                        <p className="font-normal">한신영상광고제 장려상</p>
                        <p className="font-normal">한국디자인학회 가을학술대회</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2023</span>
                      <div className="space-y-2">
                        <p className="font-normal">아트디렉터 프로덕션 회사 '아트다락' 인턴 근무</p>
                        <p className="font-normal"><span className="font-extralight">UN</span>한국학생협회 <span className="font-extralight">UNSA</span> 연합 동아리 홍보국 국장</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2022</span>
                      <div>
                        <p className="font-normal"><span className="font-extralight">UN</span>한국학생협회 <span className="font-extralight">UNSA</span> 연합 동아리 홍보팀 팀원</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        );
      case 'Contact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto py-32 px-6 text-center"
          >
            <div className="space-y-6">
              <p className="text-zinc-500 uppercase tracking-widest text-sm">Email</p>
              <a 
                href="mailto:sunnnnyum@gmail.com" 
                className="text-2xl md:text-4xl font-light hover:text-pink-accent transition-colors"
              >
                sunnnnyum@gmail.com
              </a>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center min-h-[50vh]"
          >
            <p className="text-zinc-500 italic">Content for {activeTab} will be added soon.</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-accent selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.button 
            onClick={() => setActiveTab('Home')}
            className="text-2xl font-display italic font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            Rushellelight
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-widest transition-colors relative py-2 ${
                  activeTab === tab ? 'text-pink-accent' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-pink-accent"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-lg uppercase tracking-widest ${
                      activeTab === tab ? 'text-pink-accent' : 'text-zinc-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-medium">
            Rushellelight
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-medium">
            © {new Date().getFullYear()} Um yeong seon
          </p>
        </div>
      </footer>
    </div>
  );
}
