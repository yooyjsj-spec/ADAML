export const LAB_INFO = {
  name: "ADAM LAB",
  fullName: "AI Analysis and Defense Aerospace Materials Laboratory",
  tagline: "AI Analysis & Defense Aerospace Materials",
  about: "The ADAM Lab (AI Analysis and Defense Aerospace Materials Laboratory) is dedicated to the intersection of artificial intelligence and advanced material science. We focus on AI-driven microstructure analysis, defect detection, and the design of high-performance materials specifically for aerospace and defense applications. By integrating machine learning with traditional metallurgy, we aim to accelerate the development of next-generation alloys and structural components.",
  keywords: ["AI Analysis", "Defense Materials", "Aerospace Alloys", "Microstructure Analysis", "Defect Detection"],
  contact: {
    address: "Engineering Building Office 431, School of Advanced Materials Engineering, Kookmin University, 77, Jeongneung-ro, Seongbuk-gu, Seoul, 02707, Republic of Korea",
    email: "jb.seol@kookmin.ac.kr",
    phone: "+82-2-910-5014"
  }
};

export const RESEARCH_AREAS = [
  {
    id: 'r1',
    title: 'Microstructure Analysis',
    description: 'We investigate the relationships between processing, microstructure, and properties using advanced characterization techniques and AI-based image analysis.',
    iconName: 'Microscope',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    modalSubtitle: 'Advanced characterization and analysis of material microstructures',
    fullContent: [
      "We conduct comprehensive microstructure analysis using state-of-the-art characterization techniques to understand the fundamental relationships between material structure and properties.",
      "Our research employs scanning electron microscopy (SEM), transmission electron microscopy (TEM), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), atom probe tomography (APT), and advanced spectroscopy methods.",
      "We develop advanced image analysis algorithms and machine learning approaches for automated microstructure quantification and pattern recognition."
    ]
  },
  {
    id: 'r2',
    title: 'Aerospace & Defense Materials & HEAs',
    description: 'We design and optimize advanced alloys, including high-entropy alloys, for aerospace and defense applications under extreme conditions.',
    iconName: 'Rocket',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
    modalSubtitle: 'Advanced materials for extreme aerospace and defense environments',
    fullContent: [
      "Our research focuses on the development of advanced materials capable of operating under extreme high-temperature and harsh environmental conditions.",
      "High-entropy alloys (HEAs) represent a key materials strategy in our research due to their outstanding mechanical strength and high-temperature stability.",
      "We investigate the fundamental relationships between composition, microstructure, and properties to tailor HEAs for aerospace propulsion and thermal protection."
    ]
  },
  {
    id: 'r3',
    title: 'Additive Manufacturing',
    description: 'We develop and optimize metal additive manufacturing processes to control microstructure and enhance mechanical performance.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    modalSubtitle: '3D printing and advanced manufacturing technologies',
    fullContent: [
      "We specialize in the development and optimization of additive manufacturing (AM) processes, particularly for complex metallic components.",
      "A primary focus is 'Print-and-Analyze' workflows where we correlate process parameters directly with microscopic defect formation.",
      "By tailoring the thermal history of each layer, we aim to produce materials with optimized isotropic characteristics and enhanced fatigue life."
    ]
  },
  {
    id: 'r4',
    title: 'AI Material Analysis',
    description: 'We apply machine learning and deep learning to automate microstructure analysis, predict material properties, and accelerate data-driven materials design.',
    iconName: 'Brain',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    modalSubtitle: 'Intelligent analysis and prediction of material properties',
    fullContent: [
      "ADAM Lab pioneers the use of Artificial Intelligence to bridge the gap between Big Data in microscopy and engineering solutions.",
      "We develop custom Deep Learning architectures to automate the segmentation and classification of complex microstructural features.",
      "Our AI-driven approach significantly accelerates the pace of material characterization, identifying promising candidates for defense applications."
    ]
  }
];

export const MEMBERS = [
  {
    id: 'pi1',
    name: 'Prof. Jae Bok-Seol',
    role: 'PI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    researchFocus: 'AI-driven Material Design, Aerospace Composites',
    email: 'jb.seol@kookmin.ac.kr',
    education: [
      "2007 – 2011: Ph.D. in Materials Science and Engineering, POSTECH, Pohang",
      "2004 – 2006: M.S. in Materials Science and Engineering, POSTECH, Pohang",
      "1997 – 2004: B.S. in Materials Science and Engineering, Korea University, Seoul"
    ],
    career: [
      "2024 – Present: Associate Professor, Kookmin University (Head of ADAM Lab)",
      "2020 – 2024: Associate Professor, Gyeongsang National University (GNU)",
      "2015 – 2020: Research Professor, POSTECH",
      "2013 – 2015: Senior Engineer, Samsung R&D Center",
      "2011 – 2013: Postdoctoral Fellow, Max Planck Institute (MPIE), Germany"
    ]
  },
  { id: 'ms1', name: 'Cho-Hyun Lee', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms1', researchFocus: 'Microstructure Analysis', email: 'cho0410@kookmin.ac.kr' },
  { id: 'ms2', name: 'Won-Hee Jo', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms2', researchFocus: 'Defect Detection', email: 'jwonh0104@kookmin.ac.kr' },
  { id: 'ms3', name: 'Jeong-Ung Park', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms3', researchFocus: 'AI Analysis', email: 'wjddnd636@kookmin.ac.kr' },
  { id: 'ms4', name: 'Min-Young Lee', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms4', researchFocus: 'HEA Design', email: '5368min@kookmin.ac.kr' },
  { id: 'ms5', name: 'Min-Yu Kang', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms5', researchFocus: 'Materials Simulation', email: 'kminyu@kookmin.ac.kr' },
  { id: 'ms6', name: 'Seong-Hyun Yang', role: 'Master Student', image: 'https://i.pravatar.cc/400?u=ms6', researchFocus: 'Microstructural Evolution', email: 'sorntmf@kookmin.ac.kr' },
  { id: 'ug1', name: 'Seung-Gyu Hong', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug1', researchFocus: 'AI in Materials', email: 'hongsg4665@kookmin.ac.kr' },
  { id: 'ug2', name: 'Hyun-Young Park', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug2', researchFocus: 'Aerospace Alloys', email: 'jury1390@kookmin.ac.kr' },
  { id: 'ug3', name: 'Da-Won Kang', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug3', researchFocus: 'Microstructure Imaging', email: 'dawon1242@kookmin.ac.kr' },
  { id: 'ug4', name: 'Hyeong-Jin Park', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug4', researchFocus: 'Metallic Materials', email: 'chemilk02@kookmin.ac.kr' },
  { id: 'ug5', name: 'Young-Jae Yoo', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug5', researchFocus: 'Experimental Analysis', email: 'yooyjsj@kookmin.ac.kr' },
  { id: 'ug6', name: 'Bo-Geun Park', role: 'Undergraduate Student', image: 'https://i.pravatar.cc/400?u=ug6', researchFocus: 'Data-driven Design', email: 'qkrqhrms9@kookmin.ac.kr' }
];

export const JOURNALS = [
  { id: "j1", title: "Multi-scale design of deformation mechanisms at hetero-zone boundaries: Dual HDI strengthening driven by TRIP effect", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.jmst.2025.01.032", image: "./image/journal/journal128.png", venue: "Journal of Materials Science & Technology", year: 2025 },
  { id: "j2", title: "Simple and scalable manufacturing of metal/carbon hybrid EMI shielding fabric across a broad frequency range", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.jmrt.2025.01.094", image: "./image/journal/journal127.png", venue: "Journal of Materials Research and Technology", year: 2025 },
  { id: "j3", title: "Complex deformation behavior of a partially recrystallized metastable medium-entropy alloy: in-situ synchrotron X-ray diffraction study", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.actamat.2025.120757", image: "./image/journal/journal126.png", venue: "Acta Materialia", year: 2025 },
  { id: "j4", title: "Mechanical Properties and Microstructure of Laser Powder Bed Fusion-Processed 18Ni300 Maraging Steel According to Direct Aging Treatment Conditions", authors: "JB Seol, et al.", link: "https://doi.org/10.1002/srin.202400348", image: "./image/journal/journal125.png", venue: "Steel Research International", year: 2024 },
  { id: "j5", title: "Serration-induced plasticity in phase transformative stainless steel 316L upon ultracold deformation at 4.2 K", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.msea.2024.147591", image: "./image/journal/journal124.png", venue: "Materials Science and Engineering: A", year: 2025 },
  { id: "j6", title: "Strengthening Effect of Fe60Mn16Ni12Cr12 Medium-Entropy Alloys via Co-Doping Al/C", authors: "JB Seol, et al.", link: "https://doi.org/10.1007/s12540-024-01865-9", image: "./image/journal/journal123.png", venue: "Metals and Materials International", year: 2024 },
  { id: "j7", title: "Neural Network-Based Modeling of the Interplay between Composition, Service Temperature, and Thermal Conductivity in Steels for Engineering Applications", authors: "JB Seol, et al.", link: "https://doi.org/10.1007/s10765-024-03434-z", image: "./image/journal/journal122.png", venue: "International Journal of Thermophysics", year: 2024 },
  { id: "j8", title: "Periodic spinodal decomposition in double–strengthened medium–entropy alloy", authors: "JB Seol, et al.", link: "https://doi.org/10.1038/s41467-024-50078-6", image: "./image/journal/journal121.png", venue: "Nature Communications", year: 2024 },
  { id: "j9", title: "Enhanced high-temperature ductility without strength drop in a lean Co Ni-based superalloy", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.jallcom.2024.174407", image: "./image/journal/journal120.png", venue: "Journal of Alloys and Compounds", year: 2024 },
  { id: "j10", title: "Maraging and reversion-driven passivation engineering of Fe68Ni10Mn10Co10Ti1.5Si0.5 medium entropy alloy", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.jallcom.2024.173929", image: "./image/journal/journal119.png", venue: "Journal of Alloys and Compounds", year: 2024 },
  { id: "j11", title: "Atom probe study of atomic-scale element distribution in additive manufactured alloys", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.matchar.2023.112845", image: "./image/journal/journal118.png", venue: "Materials Characterization", year: 2023 },
  { id: "j12", title: "Deep learning based microstructure segmentation for quantitative analysis of high entropy alloys", authors: "JB Seol, et al.", link: "https://doi.org/10.1016/j.scriptamat.2023.115402", image: "./image/journal/journal117.png", venue: "Scripta Materialia", year: 2023 },
  { id: "j13", title: "Microstructural evolution of precipitation-hardened aerospace alloys under extreme environments", authors: "JB Seol, et al.", link: "#", image: "./image/journal/journal116.png", venue: "International Journal of Plasticity", year: 2023 }
];

export const CONFERENCES = [];
export const PATENTS = [];
export const NEWS = [
  { id: 'n1', date: '2024-10-18', title: '국민대학교 설재복 교수, \'2025 세계 최상위 2% 연구자\' 선정', summary: "국민대학교 신소재공학부 설재복 교수가 미국 스탠퍼드 대학교와 엘스비어(Elsevier)가 공동으로 발표한 '2025 세계 최상위 2% 연구자' 명단에 이름을 올렸다.", category: 'Award', link: 'https://www.kookmin.ac.kr' },
  { id: 'n2', date: '2024-03-01', title: 'ADAM LAB 신설 및 연구원 모집 안내', summary: "국민대학교 신소재공학부 내 AI 분석 및 국방 항공 우주 소재 연구실(ADAM LAB)이 새롭게 문을 열었습니다.", category: 'Notice' }
];
export const GALLERY = [
  { id: 'g1', title: 'ADAM LAB Opening Ceremony', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', date: '2024-03-01', description: 'Official opening ceremony of ADAM Lab at Kookmin University.' }
];