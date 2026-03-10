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
  award?: string;
  description?: string;
  subImages?: string[];
  videoUrl?: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBlogCategory, setActiveBlogCategory] = useState('디자인 블로그(Design Blog)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<Project | null>(null);

  const tabs: Tab[] = ['Works', 'Blog', 'About', 'Contact'];
  const categories = ['All', 'UX/UI', 'Branding', 'Graphic', 'Advertising', '졸업프로젝트'];
  const blogCategories = ['디자인 블로그(Design Blog)'];

  const projects: Project[] = [
    {
      id: 1,
      title: '에코(Eco;Echo)',
      category: 'UX/UI',
      image: '/projects/eco-main.png',
      type: 'Team project - 5인',
      date: '2024. 09 - 12',
      contribution: 'UX 리서치 80% I 아이디어 제안 및 기획 I \nUX 디자인 70% I UI디자인 40% I \n사용성 테스트 진행 I 프로모션 영상 제작',
      description: '환경 문제의 심각성과 정보의 파편화, 지속적인 관심의 부족으로 환경 보호 행동을 하지 못하는 사람들의 잠재적인 니즈를 파악하여 사용자 맞춤형 정보 제공과 지속적으로 실천 가능한 환경 보호 활동을 제안하는 앱 서비스를 기획하였습니다. 에코는 개인의 환경보호 행동을 촉진하고 보다 나은 지구 환경을 만드는는 것을 목표로 합니다. AI를 적극적으로 활용하여 사용자의 부담을 줄이고, 사용자가 직접 컨텐츠 제작자가 되어 자신의 경험을 공유하며 타인과 상호작용 하도록 하였습니다.',
      subImages: ['/projects/eco-sub.png'],
    },
    {
      id: 2,
      title: '텀블링(Tumbling)',
      category: 'UX/UI',
      image: '/projects/tumbling-main.png',
      type: 'Team project - 5인',
      date: '2024.03 - 06',
      contribution: 'UX 리서치 80% I 아이디어 제안 및 기획 I UX 디자인 60% I UI디자인 60% I 사용성 테스트 진행 I 한국디자인학회 논문 투고 및 전시(2인)',
      award: '대한민국 디자인 전람회(DK Award) 인터랙션 디자인 부문 입선',
      description: '텀블링은 한국환경공단에서 실시하는 ‘탄소중립포인트 녹색생활실천 제도’와 연계해 텀블러 사용이 습관으로 자리 잡을 수 있도록 돕는 앱입니다. 위 제도는 텀블러를 사용할 때마다 포인트를 지급받을 수 있는 혜택을 제공하지만, 혜택을 받기 위해서는 제휴를 맺은 카페 브랜드의 앱을 각각 다운로드하고 사용해야 하는 번거로움이 있습니다. 텀블링에서는 한 번의 로그인으로 제휴된 모든 카페의 정보를 확인하고, NFC스티커를 배송받아 텀블러에 부착, 매장 내 에서 주문 시 NFC단말기에 스티커를 태그 하면 포인트 적립이 완료됩니다.',
      subImages: ['/projects/tumbling-sub.png'],
    },
    {
      id: 3,
      title: '몽글(Monggle)',
      category: 'UX/UI',
      image: '/projects/monggle-main.png',
      type: 'Team project - 4인',
      date: '2025. 07 - 10',
      contribution: '서비스 기획 100% I UX 리서치 90% I \n아이디어 제안 및 기획 I UX 디자인 90% I \nUI디자인 60% I 사용성 테스트 진행',
      description: '몽글은 사용자의 수면의 질을 향상시키고, 반복적인 악몽으로 인한 불안과 피로를 완화하고자 설계되었습니다. 수면 패턴과 감정 상태를 기반으로 한 맞춤형 수면 관리 루틴을 제안해 사용자가 보다 편안한 수면 환경을 만들 수 있도록 돕습니다. 또한, 악몽 발생 시 기록과 분석 기능을 통해 개인의 수면 트리거를 파악하고 점진적으로 개선하며 단순한 수면 추적을 넘어, 감정 케어와 심리적 회복을 결합한 ‘감정 기반 수면 솔루션’을 목표로 합니다.',
      subImages: ['/projects/monggle-sub.png'],
    },
    {
      id: 4,
      title: '신지도(Sinji-do)',
      category: 'Branding',
      image: '/projects/sinjido-main.png',
      type: 'Team project - 3인',
      date: '2023. 09 - 12',
      contribution: '로고 디자인 80% I 아이콘 디자인 40% I \n앰블럼 디자인 30% I 패턴 디자인 100% I \n모션 디자인 100%',
      description: '전라남도 완도 신지면에 있는 섬인 신지도를 리브랜딩 하였습니다. 우리나라에는 유인도 464개를 포함한 총 3천 3백여개의 섬이 존재합니다. 다만, 울릉도 등과 같이 널리 알려져 있는 섬은 그 수가 적습니다. 이에 존재하는 섬 중 완도에 가까이 있어 성장 가능성이 있는 섬인 신지도를 선정하여 리브랜딩을 진행하였습니다. 팀원 3명이 함께 로고 및 기본 앰블럼과 아이콘 디자인을 진행하였고, 이후 패턴 디자인과 시그니처 조합 및 목업, 영상 제작의 경우에는 개인 작업으로 진행하였습니다. 신지도의 로고에서 포인트를 주기 위해 ‘ㅈ’을 리본으로 표현하였으며, 이는 곧 신지도가 ‘자연과 사람을 잇는 섬’이라는 슬로건을 나타냅니다.',
      subImages: ['/projects/sinjido-sub.png'],
    },
    {
      id: 5,
      title: '잠식(Sinking)',
      category: 'Advertising',
      image: '/projects/sinking-main.png',
      type: 'Team project - 4인',
      date: '2023. 11 - 12',
      contribution: '아이디어 기힉 40% I 촬영 전 준비 I \n현장 아트 디렉팅 80% I 편집 및 후보정 20%',
      description: '잠식(Sinking)은 청소년 마약 근절 공익광고입니다. 우리나라 청소년들의 마약 중독 문제가 날로 심각해짐에 따라 경각심을 주기 위한 공익광고로 연출 3명, 촬영 1명으로 진행했으며 저는 연출을 맡아 촬영 소품 준비와 현장 아트 디렉팅을 맡았습니다. “마약, 당신의 청춘이 가라앉고 있습니다.”라는 메세지를 전달하기 위해 욕조가 있는 스튜디오를 대여해 촬영했으며, 욕조와 물을 이용해 마약에 잠식당하는 것을 직관적으로 표현하고자 하였습니다.',
      subImages: ['/projects/sinking-sub.png'],
      videoUrl: 'https://www.youtube.com/embed/H_YXRzqUzbY?si=UdcRrPslOOPIgSNw',
    },
    {
      id: 6,
      title: '고백? Go Back!',
      category: 'Advertising',
      image: '/projects/goback-main.png',
      type: 'Team project - 4인',
      date: '2024. 05. 22',
      contribution: '아이디어 기획 80% I IMC전략 수립 90% I \n기획서 PPT 디자인 80% I 발표 100%',
      award: '대한민국 대학생 광고대회 코삭(KOSAK) 챌린저상 수상',
      description: '도박 근절 공익 캠페인을 제안하였습니다. 해당 캠페인의 컨셉 메세지는 언어유희를 사용하여 `고백?, Go Back!`으로 선정하였고, 이는 도박 중독을 ‘고백’하고 평범한 일상으로 ‘Go Back’하자는 의미를 담고 있습니다. 주된 아이디어로 SNS 숏폼 챌린지를 제안하면서 이를 위한 챌린지송 제작과 캐릭터 디자인을 진행하였습니다. 또한, 인지-경험-확산의 단계별로 총 9개의 IMC 전략을 수립하고, 실행 계획 타임라인까지 구체적으로 작성하였습니다.',
      subImages: ['/projects/goback-sub.png'],
    },
    {
      id: 7,
      title: '여행수다, 트립소다',
      category: 'Advertising',
      image: '/projects/soda-main.png',
      type: 'Team project - 4인',
      date: '2024. 11. 14',
      contribution: '아이디어 기획 80% I IMC전략 수립 80% I \n기획서 PPT 디자인 100% I',
      award: 'HIF 한신영상광고제 대학생 기획서 부문 장려상 수상',
      description: '여행 플랫폼 ‘트립소다’의 브랜드 인지도를 높이고 신규 유저를 유입하는 방안을 제시하였습니다. 먼저, 시장 분석을 통해 SNS의 발달로 커뮤니티 서비스의 중요성이 커졌지만 차별화된 전략이 부족하다는 점을 발견했고, 경쟁사인 ‘마이리얼트립’과 비교 분석하여 트립소다만의 강점을 도출했습니다. 이후 여행을 좋아하는 MZ세대를 메인 타겟으로, 여행을 떠나지 않아도 관련 정보를 얻고자 하는 소비자를 서브 타겟으로 설정한 뒤, 컨셉 메시지로 ‘여행 수다, 트립 소다’를 제안하였습니다. 3개의 마케팅 전략과 3개의 컨설팅 전략을 포함한 6개의 IMC 전략을 수립하면서 브랜드의 이미지에 장기적으로 도움을 주고, 신규 유저 뿐만 아니라 기존 유저들도 만족시킬 수 있는 전략을 제안하였습니다.',
      subImages: ['/projects/soda-sub.png'],
    },
    {
      id: 8,
      title: 'Leaflet',
      category: 'Graphic',
      image: '/projects/cebu.png',
      type: 'Personal Work',
      date: '2026. 01. 30',
      description: '여행의 설렘을 담은 휴대용 리플렛 디자인입니다. 더운 나라의 열기를 표현하기 위해 블루 계열 대신 핑크와 블랙을 메인 컬러로 선정했습니다. 야자수, 바다, 일몰 등 상징적인 요소를 대표 일러스트로 지정해 제작하였으며, 픽셀 아트를 이용해 시각적 포인트를 주었습니다. 또한, 섬의 지도를 제작하여 주요 방문지를 한눈에 확인할 수 있도록 실용성을 더했습니다.',
      subImages: ['/projects/cebu-main.png', '/projects/cebu-sub.png'],
    },
    {
      id: 9,
      title: '1주차(Week01)',
      category: '졸업프로젝트',
      image: '/projects/Week1-main.png',
      type: 'Graduation Project - 3인',
      date: '2026. 03 - 06',
      description: '졸업 프로젝트 주제 선정을 위한 리서치',
      subImages: [
        '/projects/Week1-1.png',
        '/projects/Week1-2.png',
        '/projects/Week1-3.png',
        '/projects/Week1-4.png',
        '/projects/Week1-5.png',
        '/projects/Week1-6.png',
        '/projects/Week1-7.png',
        '/projects/Week1-8.png',
        '/projects/Week1-9.png',
        '/projects/Week1-10.png',
        '/projects/Week1-11.png',
        '/projects/Week1-12.png',
        '/projects/Week1-13.png'
      ],
    },
    // More projects can be added here
  ];

  const blogPosts: Project[] = [
    {
      id: 1,
      title: '디자인 철학(Design Philosophy)',
      category: '디자인 블로그(Design Blog)',
      image: 'https://picsum.photos/seed/philosophy/800/600',
      description: "저는 모든 창작물의 본질은 결국 사용자(소비자)의 경험을 완성하는 데 있다고 생각합니다. 단순히 시각적인 화려함을 구현하는 것에 그치지 않고, 사용자의 맥락을 깊이 파고들어 그들이 누리는 경험적 가치를 극대화하는 것을 최우선으로 하는 것이 목표이며, 모든 접점에서 사용자와의 긍정적인 상호작용을 이끌어내 그들의 일상에 자연스럽고 의미 있게 스며드는 '경험 중심의 디자인'을 제공하는 것이 저의 디자인 철학입니다.\n\nI believe the essence of creative work lies in completing the user experience. My goal is to go beyond visual aesthetics by understanding users’ contexts and creating experience-centered designs that naturally integrate into their daily lives."
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects.filter(p => p.category !== '졸업프로젝트') 
    : projects.filter(p => p.category === activeCategory);

  const filteredBlogPosts = blogPosts.filter(p => p.category === activeBlogCategory);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden"
          >
            {/* Main Title */}
            <div className="max-w-7xl w-full px-6">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-8xl md:text-[16rem] font-display italic text-white tracking-tight mb-12 select-none text-left"
              >
                Portfolio
              </motion.h1>
            </div>

            {/* Floating Info Boxes */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-[60%] left-[15%] md:left-[25%] pointer-events-auto"
              >
                <button 
                  onClick={() => setActiveTab('About')}
                  className="bg-white border-2 border-pink-accent px-6 py-4 shadow-[8px_8px_0px_0px_rgba(255,95,215,0.3)] group transition-colors"
                >
                  <p className="text-black group-hover:text-pink-accent font-bold text-lg md:text-xl leading-tight transition-colors">
                    Welcome to<br />my world
                  </p>
                </button>
              </motion.div>

              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-[24%] left-[58%] md:left-[62%] pointer-events-auto"
              >
                <button 
                  onClick={() => setActiveTab('Works')}
                  className="bg-white border-2 border-pink-accent px-8 py-4 transition-colors group shadow-[8px_8px_0px_0px_rgba(255,95,215,0.3)]"
                >
                  <span className="text-black group-hover:text-pink-accent font-bold text-lg md:text-xl flex items-center gap-2 transition-colors">
                    View works <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Bottom Year */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <p className="font-pixel text-2xl text-white/80">2002</p>
              <p className="font-pixel text-sm text-white/40 mt-1 uppercase tracking-widest">um yeong seon</p>
            </motion.div>
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

                          {selectedProject.award && (
                            <div className="space-y-1">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Award</p>
                              <p className="text-sm font-light text-white">{selectedProject.award}</p>
                            </div>
                          )}
                        </div>

                        <div className="md:col-span-2 space-y-12">
                          {selectedProject.description && (
                            <div className="space-y-4">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Description</p>
                              <p className="text-base font-light leading-relaxed text-zinc-300 whitespace-pre-wrap">
                                {selectedProject.description}
                              </p>
                            </div>
                          )}

                          {selectedProject.videoUrl && (
                            <div className="space-y-4">
                              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Video</p>
                              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/5">
                                <iframe 
                                  src={selectedProject.videoUrl} 
                                  title={`${selectedProject.title} video`}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                          )}

                          {selectedProject.subImages && selectedProject.subImages.length > 0 && (
                            <div className="space-y-8">
                              {selectedProject.subImages.map((img, idx) => (
                                <div key={idx} className="w-full rounded-2xl overflow-hidden border border-white/5">
                                  <img 
                                    src={img} 
                                    alt={`${selectedProject.title} detail ${idx + 1}`}
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              ))}
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
      case 'Blog':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto py-12 px-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-16">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveBlogCategory(category)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-2 ${
                    activeBlogCategory === category ? 'text-pink-accent' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {category}
                  {activeBlogCategory === category && (
                    <motion.div
                      layoutId="blogCategoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-pink-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogPosts.map((post) => (
                <motion.div 
                  layout
                  key={post.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedBlogPost(post)}
                >
                  <div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/5 mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{post.category}</p>
                  <h3 className="text-lg font-display font-semibold text-white">{post.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Blog Detail Modal */}
            <AnimatePresence>
              {selectedBlogPost && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                  onClick={() => setSelectedBlogPost(null)}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-zinc-900 border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sticky top-0 z-10 flex justify-end p-6 bg-zinc-900/50 backdrop-blur-md">
                      <button 
                        onClick={() => setSelectedBlogPost(null)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="px-8 pb-12 md:px-16 md:pb-20">
                      <div className="aspect-video w-full bg-zinc-800 rounded-2xl overflow-hidden mb-12 border border-white/5">
                        <img 
                          src={selectedBlogPost.image} 
                          alt={selectedBlogPost.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h2 className="text-3xl font-display font-bold text-pink-accent mb-2">{selectedBlogPost.title}</h2>
                          <p className="text-zinc-500 uppercase tracking-widest text-xs">{selectedBlogPost.category}</p>
                        </div>

                        <div className="space-y-6">
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Content</p>
                          <div className="space-y-8">
                            {selectedBlogPost.description.split('\n\n').map((paragraph, index) => (
                              <p 
                                key={index}
                                className={`leading-relaxed break-keep ${
                                  index === 0 
                                    ? 'text-base font-light text-white' 
                                    : 'text-sm font-extralight text-zinc-400 italic'
                                }`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
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
                <h2 className="text-4xl font-display font-bold text-white mb-4">About Me</h2>
                <div className="w-full aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                  <img 
                    src="/projects/uys.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 mb-8">
                  <p className="text-2xl font-bold">엄영선</p>
                  <p className="text-zinc-500 text-sm">Um yeong seon</p>
                </div>

                <section className="pt-8 border-t border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-semibold">Education</h3>
                  <div className="space-y-1 text-sm leading-relaxed text-zinc-300">
                    <p>숙명여자대학교</p>
                    <p>시각영상디자인학과 본전공</p>
                    <p>홍보광고학과 복수전공</p>
                  </div>
                </section>
              </div>
              
              <div className="md:col-span-2 space-y-12">
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
                        <p className="font-normal">대한민국디자인전람회(<span className="font-extralight">DK Award</span>) <span className="font-extralight">UX/UI</span> 부문 입선</p>
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

                <section>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">Certificate</h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <span className="text-pink-accent font-light text-sm shrink-0 w-16">2025</span>
                      <div>
                        <p className="font-normal">컴퓨터활용능력 2급</p>
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
            <div className="space-y-16">
              <div className="space-y-6">
                <p className="text-zinc-500 uppercase tracking-widest text-sm font-semibold">Email</p>
                <a 
                  href="mailto:sunnnnyum@gmail.com" 
                  className="text-2xl md:text-4xl font-light hover:text-pink-accent transition-colors block"
                >
                  sunnnnyum@gmail.com
                </a>
              </div>
              <div className="space-y-6">
                <p className="text-zinc-500 uppercase tracking-widest text-sm font-semibold">Instagram</p>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-light">@0_sunnnny</p>
                  <p className="text-xl md:text-2xl font-light">@rushellelight</p>
                </div>
              </div>
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
    <div className="min-h-screen flex flex-col selection:bg-pink-accent selection:text-black relative">
      <div className="grain" />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.button 
            onClick={() => setActiveTab('Home')}
            className="text-2xl font-display italic font-bold tracking-tighter text-pink-accent"
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
