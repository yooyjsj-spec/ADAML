import { Member, NewsItem, Publication, Patent, ResearchArea, GalleryItem } from './types';
import { Brain, Rocket, Shield, Microscope, Cpu, Layers } from 'lucide-react';

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

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'r1',
    title: 'Microstructure Analysis',
    description: 'We investigate the relationships between processing, microstructure, and properties using advanced characterization techniques and AI-based image analysis.',
    iconName: 'Microscope',
    image: 'https://picsum.photos/800/600?random=1',
    modalSubtitle: 'Advanced characterization and analysis of material microstructures',
    fullContent: [
      "We conduct comprehensive microstructure analysis using state-of-the-art characterization techniques to understand the fundamental relationships between material structure and properties. Our research employs scanning electron microscopy (SEM), transmission electron microscopy (TEM), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), atom probe tomography (APT), and advanced spectroscopy methods to investigate phase distributions, grain structures, crystallographic orientations, precipitation behavior, and defect characteristics.",
      "Through detailed quantitative analysis of microstructural features including grain size distribution, texture evolution, phase fractions, and interface characteristics, we establish correlations between processing conditions, microstructural evolution, and resulting material properties. Our work encompasses in-situ and ex-situ characterization under various thermal and mechanical loading conditions to understand dynamic microstructural changes.",
      "We develop advanced image analysis algorithms and machine learning approaches for automated microstructure quantification and pattern recognition. Our research provides critical insights for optimizing material processing routes, heat treatment schedules, and alloy compositions to achieve desired microstructural features that enhance mechanical properties, corrosion resistance, and high-temperature performance."
    ]
  },
  {
    id: 'r2',
    title: 'Aerospace and Defense Materials & HEAs',
    description: 'We design and optimize advanced alloys, including high-entropy alloys, for aerospace and defense applications under extreme conditions.',
    iconName: 'Rocket',
    image: 'https://picsum.photos/800/600?random=2',
    modalSubtitle: 'Advanced materials for extreme aerospace and defense environments',
    fullContent: [
      "Our research focuses on the development of advanced materials capable of operating under extreme high-temperature and harsh environmental conditions for next-generation aircraft, spacecraft, and defense systems. We specialize in the design and development of high-performance alloy systems, including superalloys and high-entropy alloys (HEAs), as well as high-temperature composite materials and advanced armor systems that maintain exceptional mechanical properties and structural integrity under severe operating conditions.",
      "High-entropy alloys, composed of multiple principal elements in near-equimolar ratios, represent a key materials strategy in our research due to their outstanding mechanical strength, high-temperature stability, and superior corrosion and oxidation resistance. We investigate the fundamental relationships between composition, microstructure, and properties to tailor HEAs and conventional alloys for aerospace and defense applications requiring high reliability and durability.",
      "Through comprehensive microstructure analysis using advanced characterization techniques such as scanning electron microscopy (SEM), transmission electron microscopy (TEM), electron backscatter diffraction (EBSD), and X-ray diffraction (XRD), we examine the effects of processing parameters on microstructural evolution and material performance. Our research encompasses detailed analyses of phase transformations, grain boundary characteristics, precipitation behavior, and defect structures that govern creep resistance, fatigue life, fracture toughness, and oxidation resistance under extreme conditions.",
      "By integrating microstructure-driven insights with predictive modeling, we establish clear links between alloy design, heat treatment processes, and resulting mechanical properties. This approach enables the optimization of alloy compositions, thermal processing routes, and manufacturing strategies to develop materials suitable for aerospace propulsion systems, thermal protection systems, and defense applications exposed to extreme thermal, mechanical, and environmental loading."
    ]
  },
  {
    id: 'r3',
    title: 'Additive Manufacturing',
    description: 'We develop and optimize metal additive manufacturing processes to control microstructure and enhance mechanical performance.',
    iconName: 'Layers',
    image: 'https://picsum.photos/800/600?random=3',
    modalSubtitle: '3D printing and advanced manufacturing technologies',
    fullContent: [
      "Development of additive manufacturing processes for complex metallic components, including selective laser melting (SLM), electron beam melting (EBM), and directed energy deposition (DED). We optimize process parameters, investigate microstructure evolution, and enhance mechanical properties of additively manufactured materials for aerospace and defense applications."
    ]
  },
  {
    id: 'r4',
    title: 'AI Material Analysis',
    description: 'We apply machine learning and deep learning to automate microstructure analysis, predict material properties, and accelerate data-driven materials design.',
    iconName: 'Brain',
    image: 'https://picsum.photos/800/600?random=4',
    modalSubtitle: 'Intelligent analysis and prediction of material properties',
    fullContent: [
      "We utilize artificial intelligence and machine learning to analyze complex microstructures, predict material properties, and optimize material design. By integrating deep learning with advanced microscopy data, computational modeling, and experimental results, we achieve rapid and accurate material characterization that accelerates the development of new materials."
    ]
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'pi1',
    name: 'Prof. Jae Bok-Seol',
    role: 'PI',
    image: 'https://picsum.photos/800/800?random=10',
    researchFocus: 'AI-driven Material Design, Aerospace Composites',
    email: 'jb.seol@kookmin.ac.kr',
    link: '#',
    bio: "", 
    education: [
      "2007 – 2011: Ph.D. in Materials Science and Engineering, POSTECH, Pohang",
      "2004 – 2006: M.S. in Materials Science and Engineering, POSTECH, Pohang",
      "1997 – 2004: B.S. in Materials Science and Engineering, Korea University, Seoul"
    ],
    career: [
      "2024 – Present: Associate Professor, School of Materials Science & Engineering, Kookmin University (Head of ADAM Lab)",
      "2020 – 2024: Associate Professor, Dept. of Materials Engineering and Convergence Technology, Gyeongsang National University (GNU), Jinju, Korea",
      "2015 – 2020: Research Professor, National Institute for Nanomaterials Technology, POSTECH",
      "2013 – 2015: Senior Engineer, Samsung R&D Center (Microstructure and Defect Analysis Group)",
      "2011 – 2013: Postdoctoral Fellow, Max Planck Institute for Iron Research (MPIE), Düsseldorf, Germany"
    ]
  },
  // 6 Master Students
  {
    id: 'ms1',
    name: 'Cho-Hyun Lee',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=20',
    researchFocus: 'Research Topic 1',
    email: 'cho0410@kookmin.ac.kr'
  },
  {
    id: 'ms2',
    name: 'Won-Hee Jo',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=21',
    researchFocus: 'Research Topic 2',
    email: 'jwonh0104@kookmin.ac.kr'
  },
  {
    id: 'ms3',
    name: 'Jeong-Ung Park',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=22',
    researchFocus: 'Research Topic 3',
    email: 'wjddnd636@kookmin.ac.kr'
  },
  {
    id: 'ms4',
    name: 'Min-Young Lee',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=23',
    researchFocus: 'Research Topic 4',
    email: '5368min@kookmin.ac.kr'
  },
  {
    id: 'ms5',
    name: 'Min-Yu Kang',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=24',
    researchFocus: 'Research Topic 5',
    email: 'kminyu@kookmin.ac.kr'
  },
  {
    id: 'ms6',
    name: 'Seong-Hyun Yang',
    role: 'Master Student',
    image: 'https://picsum.photos/400/400?random=25',
    researchFocus: 'Research Topic 6',
    email: 'sorntmf@kookmin.ac.kr'
  },
  
  // 6 Undergraduate Students
  {
    id: 'ug1',
    name: 'Seung-Gyu Hong',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=30',
    researchFocus: 'Research Topic 7',
    email: 'hongsg4665@kookmin.ac.kr'
  },
  {
    id: 'ug2',
    name: 'Hyun-Young Park',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=31',
    researchFocus: 'Research Topic 8',
    email: 'jury1390@kookmin.ac.kr'
  },
  {
    id: 'ug3',
    name: 'Da-Won Kang',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=32',
    researchFocus: 'Research Topic 9',
    email: 'dawon1242@kookmin.ac.kr'
  },
  {
    id: 'ug4',
    name: 'Hyeong-Jin Park',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=33',
    researchFocus: 'Research Topic 10',
    email: 'chemilk02@kookmin.ac.kr'
  },
  {
    id: 'ug5',
    name: 'Young-Jae Yoo',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=34',
    researchFocus: 'Undergraduate Researcher',
    email: 'yooyjsj@kookmin.ac.kr'
  },
  {
    id: 'ug6',
    name: 'Bo-Geun Park',
    role: 'Undergraduate Student',
    image: 'https://picsum.photos/400/400?random=35',
    researchFocus: 'Undergraduate Researcher',
    email: 'qkrqhrms9@kookmin.ac.kr'
  }
];

export const JOURNALS: Publication[] = [
  {
    id: "j1",
    title: "Multi-scale design of deformation mechanisms at hetero-zone boundaries: Dual HDI strengthening driven by TRIP effect",
    link: "https://doi.org/10.1016/j.jmst.2025.01.032",
    image: "/image/journal/journal128.png",
    venue: "Journal of Materials Science & Technology",
    year: 2025
  },
  {
    id: "j2",
    title: "Simple and scalable manufacturing of metal/carbon hybrid EMI shielding fabric across a broad frequency range",
    link: "https://doi.org/10.1016/j.jmrt.2025.01.094",
    image: "/image/journal/journal127.png",
    venue: "Journal of Materials Research and Technology",
    year: 2025
  },
  {
    id: "j3",
    title: "Complex deformation behavior of a partially recrystallized metastable medium-entropy alloy: in-situ synchrotron X-ray diffraction study",
    link: "https://doi.org/10.1016/j.actamat.2025.120757",
    image: "/image/journal/journal126.png",
    venue: "Acta Materialia",
    year: 2025
  },
  {
    id: "j4",
    title: "Mechanical Properties and Microstructure of Laser Powder Bed Fusion-Processed 18Ni300 Maraging Steel According to Direct Aging Treatment Conditions",
    link: "https://doi.org/10.1002/srin.202400348",
    image: "/image/journal/journal125.png",
    venue: "Steel Research International",
    year: 2024
  },
  {
    id: "j5",
    title: "Serration-induced plasticity in phase transformative stainless steel 316L upon ultracold deformation at 4.2 K",
    link: "https://doi.org/10.1016/j.msea.2024.147591",
    image: "/image/journal/journal124.png",
    venue: "Materials Science and Engineering: A",
    year: 2025
  },
  {
    id: "j6",
    title: "Strengthening Effect of Fe60Mn16Ni12Cr12 Medium-Entropy Alloys via Co-Doping Al/C",
    link: "https://doi.org/10.1007/s12540-024-01865-9",
    image: "/image/journal/journal123.png",
    venue: "Metals and Materials International",
    year: 2024
  },
  {
    id: "j7",
    title: "Neural Network-Based Modeling of the Interplay between Composition, Service Temperature, and Thermal Conductivity in Steels for Engineering Applications",
    link: "https://doi.org/10.1007/s10765-024-03434-z",
    image: "/image/journal/journal122.png",
    venue: "International Journal of Thermophysics",
    year: 2024
  },
  {
    id: "j8",
    title: "Periodic spinodal decomposition in double–strengthened medium–entropy alloy",
    link: "https://doi.org/10.1038/s41467-024-50078-6",
    image: "/image/journal/journal121.png",
    venue: "Nature Communications",
    year: 2024
  },
  {
    id: "j9",
    title: "Enhanced high-temperature ductility without strength drop in a lean Co Ni-based superalloy",
    link: "https://doi.org/10.1016/j.jallcom.2024.174407",
    image: "/image/journal/journal120.png",
    venue: "Journal of Alloys and Compounds",
    year: 2024
  },
  {
    id: "j10",
    title: "Maraging and reversion-driven passivation engineering of Fe68Ni10Mn10Co10Ti1.5Si0.5 medium entropy alloy",
    link: "https://doi.org/10.1016/j.jallcom.2024.173929",
    image: "/image/journal/journal119.png",
    venue: "Journal of Alloys and Compounds",
    year: 2024
  },
  {
    id: "j11",
    title: "Microscopic-plastic deformation behavior of grain boundary precipitates in an Al–Zn–Mg alloy",
    link: "https://doi.org/10.1016/j.jmrt.2024.04.044",
    image: "/image/journal/journal118.png",
    venue: "Journal of Materials Research and Technology",
    year: 2024
  },
  {
    id: "j12",
    title: "Mechanical properties of lamellar-structured 18Ni300 maraging steel manufactured via directed energy deposition",
    link: "https://doi.org/10.1016/j.msea.2023.146031",
    image: "/image/journal/journal117.png",
    venue: "Materials Science and Engineering A",
    year: 2024
  },
  {
    id: "j13",
    title: "The influence of chemical short-range order on the nanoindentation properties of high-entropy alloys prepared via laser powder bed fusion",
    link: "https://doi.org/10.1016/j.matchar.2023.113560",
    image: "/image/journal/journal116.png",
    venue: "Materials Characterization",
    year: 2024
  },
  {
    id: "j14",
    title: "Effect of Heat Treatment Temperature on Microstructure, Tensile Properties and δ-Precipitate Phase in Ni-based Superalloy",
    link: "http://dx.doi.org/10.3365/KJMM.2024.62.1.32",
    image: "/image/journal/journal115.png",
    venue: "Korean Journal of Metals and Materials",
    year: 2023
  },
  {
    id: "j15",
    title: "Hetero-deformation induced strengthening, precipitation hardening, and metastability engineering in a novel maraging Fe68Ni10Mn10Co10Ti1.5Si0.5 medium entropy alloy",
    link: "https://doi.org/10.1016/j.jallcom.2023.171870",
    image: "/image/journal/journal114.png",
    venue: "Journal of Alloys and Compounds",
    year: 2023
  },
  {
    id: "j16",
    title: "Cellular structure engineering of additive manufactured CoCrFeMnNi high-entropy composite The role of hard ceramic reinforcements in elemental segregation of constitutive elements",
    link: "https://doi.org/10.1016/j.addlet.2023.100172",
    image: "/image/journal/journal113.png",
    venue: "Additive Manufacturing Letters",
    year: 2023
  },
  {
    id: "j17",
    title: "Microstructural evolution and tensile property enhancement of low-cost Fe-24Mn-22Ni-12Cr medium-entropy alloy by cryogenic caliber rolling",
    link: "https://doi.org/10.1016/j.jallcom.2023.170709",
    image: "/image/journal/journal112.png",
    venue: "Journal of Alloys and Compounds",
    year: 2023
  },
  {
    id: "j18",
    title: "A new transformation-induced plasticity-assisted dual-phase medium-entropy alloy with ultra-high cryogenic mechanical properties",
    link: "https://doi.org/10.1016/j.scriptamat.2023.115617",
    image: "/image/journal/journal111.png",
    venue: "Scripta Materialia",
    year: 2023
  },
  {
    id: "j19",
    title: "Chemical core-shell metastability-induced large ductility in medium-entropy maraging and reversion alloys",
    link: "https://doi.org/10.1016/j.actamat.2023.119115",
    image: "/image/journal/journal110.png",
    venue: "Acta Materialia",
    year: 2023
  },
  {
    id: "j20",
    title: "Genetic design of new aluminum alloys to overcome strength-ductility trade-off dilemma",
    link: "https://doi.org/10.1016/j.jallcom.2023.169546",
    image: "/image/journal/journal109.png",
    venue: "Journal of Alloys and Compounds",
    year: 2023
  },
  {
    id: "j21",
    title: "Optimization of laser-powder bed fusion processed Fe-4.5Si alloy via response surface methodology",
    link: "https://doi.org/10.1002/srin.202200155",
    image: "/image/journal/journal108.png",
    venue: "Steel Research International",
    year: 2022
  },
  {
    id: "j22",
    title: "Experimental and Crystal Plasticity Finite Element Study of the Deformation Behavior of HighMn Steel Micropillars",
    link: "https://doi.org/10.1002/srin.202200254",
    image: "/image/journal/journal107.png",
    venue: "Steel Research International",
    year: 2022
  },
  {
    id: "j23",
    title: "Microstructural Effects on J-Integral Fracture Toughness of Welded High-Mn Steels at 298 and 77 K",
    link: "https://doi.org/10.1002/srin.202200259",
    image: "/image/journal/journal106.png",
    venue: "Steel Research International",
    year: 2022
  },
  {
    id: "j24",
    title: "Microstructural evolution and mechanical properties of laser-powder bed fusion processed 316L stainless steel with an ultrasonic-nanocrystalline surface modification",
    link: "https://doi.org/10.1016/j.msea.2022.144436",
    image: "/image/journal/journal105.png",
    venue: "Materials Science and Engineering A",
    year: 2023
  },
  {
    id: "j25",
    title: "Dynamics Equations of Power and Force on Wind Speed and Mass Parameters of Wind Turbine Blades I",
    link: "",
    image: "/image/journal/journal104.png",
    venue: "TESS Res Res Rev",
    year: 2022
  },
  {
    id: "j26",
    title: "Fe55Co17.5Ni10Cr12.5Mo5 High-Entropy Alloy with outstanding cryogenic mechanical properties driven by deformation-induced phase transformation behavior",
    link: "https://doi.org/10.1007/s12540-022-01215-7",
    image: "/image/journal/journal103.png",
    venue: "Metals and Materials International",
    year: 2022
  },
  {
    id: "j27",
    title: "Mechanical Properties and Microstructural Evolutions of High-Pressure Torsion-Processed Al7068 Alloy",
    link: "http://dx.doi.org/10.3365/KJMM.2023.61.1.1",
    image: "/image/journal/journal102.png",
    venue: "Korean Journal of Metals and Materials",
    year: 2022
  },
  {
    id: "j28",
    title: "Mechanically derived short-range order and its impact on the multi-principal-element alloys",
    link: "https://doi.org/10.1038/s41467-022-34470-8",
    image: "/image/journal/journal101.png",
    venue: "Nature Communications",
    year: 2022
  },
  {
    id: "j29",
    title: "Effect of heat treatment conditions on the plastic deformation behavior of the Inconel 706 alloy",
    link: "https://doi.org/10.1016/j.jmrt.2022.10.058",
    image: "/image/journal/journal100.png",
    venue: "Journal of Materials Research and Technology",
    year: 2022
  },
  {
    id: "j30",
    title: "Strengthening of cost-effective Co-free medium entropy alloys by Al/C alloying",
    link: "https://doi.org/10.1016/j.msea.2022.144080",
    image: "/image/journal/journal099.png",
    venue: "Materials Science and Engineering A",
    year: 2022
  },
  {
    id: "j31",
    title: "Microstructural, mechanical, and electrochemical analysis of carbon doped AISI carbon steels",
    link: "https://doi.org/10.1186/s42649-022-00079-w",
    image: "/image/journal/journal098.png",
    venue: "Applied Microscopy",
    year: 2022
  },
  {
    id: "j32",
    title: "Ultrastrong and stress corrosion cracking-resistant martensitic steels",
    link: "https://doi.org/10.1016/j.actamat.2022.118291",
    image: "/image/journal/journal097.png",
    venue: "Acta Materialia",
    year: 2022
  },
  {
    id: "j33",
    title: "Transformation-induced plasticity in the heterogeneous microstructured Ti-Zr-Nb-Sn alloy via in-situ alloying with directed energy deposition",
    link: "https://doi.org/10.1016/j.addma.2022.102990",
    image: "/image/journal/journal096.png",
    venue: "Additive Manufacturing",
    year: 2022
  },
  {
    id: "j34",
    title: "Dislocation-aided electrochemical behavior of precipitates in stress corrosion cracking of Al‒Zn‒Mg‒Cu alloys",
    link: "https://doi.org/10.1016/j.matchar.2022.112019",
    image: "/image/journal/journal095.png",
    venue: "Materials Characterization",
    year: 2022
  },
  {
    id: "j35",
    title: "Manufacturing of Fe-Mn-Al-C Based Low Mn Lightweight Steel Via Direct Energy Deposition",
    link: "https://doi.org/10.4150/KPMI.2022.29.4.320",
    image: "/image/journal/journal094.png",
    venue: "Journal of Powder Materials",
    year: 2022
  },
  {
    id: "j36",
    title: "A feasible route to produce 1.1 GPa ferritic-based low-Mn lightweight steels with ductility of 47%",
    link: "https://doi.org/10.1016/j.jmst.2021.11.052",
    image: "/image/journal/journal093.png",
    venue: "Journal of Materials Science & Technology",
    year: 2022
  },
  {
    id: "j37",
    title: "On the stacking fault forming probability and stacking fault energy in carbon-doped 17 at% Mn steels via transmission electron microscopy and atom probe tomography",
    link: "https://doi.org/10.1016/j.jmst.2021.11.027",
    image: "/image/journal/journal092.png",
    venue: "Journal of Materials Science & Technology",
    year: 2022
  },
  {
    id: "j38",
    title: "Quantitative analysis of retained austenite in Nb added Fe-based alloy",
    link: "https://doi.org/10.1186/s42649-022-00074-1",
    image: "/image/journal/journal091.png",
    venue: "Applied Microscopy",
    year: 2022
  },
  {
    id: "j39",
    title: "Direct observation of chemical short-range order in 25 wt% Mn steel by transmission electron microscopy",
    link: "https://doi.org/10.1016/j.scriptamat.2022.114642",
    image: "/image/journal/journal090.png",
    venue: "Scripta Materialia",
    year: 2022
  },
  {
    id: "j40",
    title: "Post-annealing effect on the tensile deformation mechanism of a Ti–6Al–4V alloy manufactured via directed energy deposition",
    link: "https://doi.org/10.1016/j.msea.2022.142729",
    image: "/image/journal/journal089.png",
    venue: "Materials Science and Engineering A",
    year: 2022
  },
  {
    id: "j41",
    title: "Mechanical properties and microstructural evolution of high-pressure torsion-processed Al7075 alloy at elevated temperatures",
    link: "https://doi.org/10.1016/j.msea.2022.142692",
    image: "/image/journal/journal088.png",
    venue: "Materials Science and Engineering A",
    year: 2022
  },
  {
    id: "j42",
    title: "Evolution of nanosized Cu-rich clusters in a Fe–15Cu–15Ni alloy produced by laser powder bed fusion",
    link: "https://doi.org/10.1016/j.msea.2021.142462",
    image: "/image/journal/journal087.png",
    venue: "Materials Science and Engineering A",
    year: 2022
  },
  {
    id: "j43",
    title: "Effects of laser power on the microstructure evolution and mechanical properties of Ti-6Al-4V alloy manufactured by direct energy deposition",
    link: "https://doi.org/10.1007/s12540-021-01081-9",
    image: "/image/journal/journal086.png",
    venue: "Metals and Materials International",
    year: 2021
  },
  {
    id: "j44",
    title: "Annealing Effect on the Mechanical Properties of Hot-Rolled Fe55Co17.5Ni10Cr12.5Mo5 High-Entropy Alloy",
    link: "http://doi.org/10.5228/KSTP.2022.31.5.273",
    image: "/image/journal/journal085.png",
    venue: "Transactions of Materials Processing",
    year: 2022
  },
  {
    id: "j45",
    title: "Metastable δ-ferrite and twinning-induced plasticity on the strain hardening behavior of directed energy deposition-processed 304 L austenitic stainless steel",
    link: "https://doi.org/10.1016/j.addma.2021.102363",
    image: "/image/journal/journal084.png",
    venue: "Additive Manufacturing",
    year: 2021
  },
  {
    id: "j46",
    title: "Effect of Sn content on microstructure, texture evolution, transformation behavior and superelastic properties of Ti–20Zr–9Nb‒(2–5) Sn (at.%) shape memory alloys",
    link: "https://doi.org/10.1016/j.msea.2021.141994",
    image: "/image/journal/journal083.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j47",
    title: "Near atomic-scale comparison of passive film on a 17 wt% Cr-added 18 wt% Mn steel with those on typical austenitic stainless steels.",
    link: "https://doi.org/10.1016/j.scriptamat.2021.114112",
    image: "/image/journal/journal082.png",
    venue: "Scripta Materialia",
    year: 2021
  },
  {
    id: "j48",
    title: "Effect of interdendritic precipitations on the mechanical properties of GBF or EMS processed Al-Zn-Mg-Cu alloys",
    link: "https://doi.org/10.3390/cryst11101162",
    image: "/image/journal/journal081.png",
    venue: "Crystals",
    year: 2021
  },
  {
    id: "j49",
    title: "Hydrogen-induced ordering on the deformation mechanism of the as-cast high-Mn steel",
    link: "https://doi.org/10.1016/j.msea.2021.141923",
    image: "/image/journal/journal080.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j50",
    title: "Development of 1.2 GPa Ferrite-based Lightweight Steels via Low-temperature Tempering",
    link: "http://dx.doi.org/10.3365/KJMM.2021.59.10.695",
    image: "/image/journal/journal079.png",
    venue: "Korean Journal of Metals and Materials",
    year: 2021
  },
  {
    id: "j51",
    title: "Enhanced microstructural stability of γ /γ' -strengthened Co-Ti-Mo-based alloys through Al additions",
    link: "https://doi.org/10.1016/j.actamat.2021.117011",
    image: "/image/journal/journal078.png",
    venue: "Acta Materialia",
    year: 2021
  },
  {
    id: "j52",
    title: "Effects of cell network structure on the strength of additively manufactured stainless steels",
    link: "https://doi.org/10.1007/s12540-021-00991-y",
    image: "/image/journal/journal077.png",
    venue: "Metals and Materials International",
    year: 2021
  },
  {
    id: "j53",
    title: "Mechanical property enhancement in gradient structured aluminum alloy by ultrasonic nanocrystalline surface modification",
    link: "https://doi.org/10.1016/j.msea.2021.141101",
    image: "/image/journal/journal076.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j54",
    title: "Outstanding mechanical properties of ultrafine-grained Al7075 alloys by high-pressure torsion",
    link: "https://doi.org/10.1016/j.msea.2021.141020",
    image: "/image/journal/journal075.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j55",
    title: "Hydrogen-doped viscoplastic liquid metal microparticles for stretchable printed metal lines",
    link: "https://doi.org/10.1038/s41563-020-00863-7",
    image: "/image/journal/journal074.png",
    venue: "Nature Materials",
    year: 2021
  },
  {
    id: "j56",
    title: "Reverse effect of hot isostatic pressing on high-speed selective laser melted Ti–6Al–4V alloy",
    link: "https://doi.org/10.1016/j.msea.2021.140880",
    image: "/image/journal/journal073.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j57",
    title: "Three-dimensional imaging of carbon clusters in thermally stable nickel silicides by carbon pre-implantation",
    link: "https://doi.org/10.1016/j.apsusc.2020.148152",
    image: "/image/journal/journal072.png",
    venue: "Applied Surface Science",
    year: 2021
  },
  {
    id: "j58",
    title: "Uncommon Cr-rich γ′ precipitation during creep at 950 ˚C in Inconel 617 superalloy with serrated grain boundaries through pre-straining",
    link: "https://doi.org/10.1016/j.msea.2020.140715",
    image: "/image/journal/journal071.png",
    venue: "Materials Science and Engineering A",
    year: 2021
  },
  {
    id: "j59",
    title: "Measurement Method of Prior Austenite Grain Size of Nb-added Fe-based Alloys",
    link: "https://doi.org/10.4150/KPMI.2021.28.4.317",
    image: "/image/journal/journal070.png",
    venue: "Journal of Powder Materials",
    year: 2021
  },
  {
    id: "j60",
    title: "Additive Manufacturing Optimization of Directed Energy Deposition-Processed Ti-6Al-4V Alloy using Energy Density and Powder Deposition Density",
    link: "http://dx.doi.org/10.4150/KPMI.2021.28.6.491",
    image: "/image/journal/journal069.png",
    venue: "Journal of Powder Materials",
    year: 2021
  },
  {
    id: "j61",
    title: "On the mechanistic understanding of annealing-induced strength enhancement of ultrafine-grained high-Mn steel",
    link: "https://doi.org/10.1016/j.mtla.2020.100837",
    image: "/image/journal/journal068.png",
    venue: "Materialia",
    year: 2020
  },
  {
    id: "j62",
    title: "Characterization of Pd and Pd@ Au core-shell nanoparticles using atom probe tomography and field evaporation simulation",
    link: "https://doi.org/10.1016/j.jallcom.2020.154721",
    image: "/image/journal/journal067.png",
    venue: "Journal of Alloys and Compounds",
    year: 2020
  },
  {
    id: "j63",
    title: "Short-range order strengthening in boron-doped high-entropy alloys",
    link: "https://doi.org/10.1016/j.actamat.2020.04.052",
    image: "/image/journal/journal066.png",
    venue: "Acta Materialia",
    year: 2020
  },
  {
    id: "j64",
    title: "The mechanism of dynamic strain aging for type A serrations in tensile flow curves of Fe-18Mn-0.55C (wt.%) twinning-induced plasticity steel",
    link: "https://doi.org/10.1016/j.actamat.2020.02.020",
    image: "/image/journal/journal065.png",
    venue: "Acta Materialia",
    year: 2020
  },
  {
    id: "j65",
    title: "Nano-scale solute heterogeneities in the ultrastrong selectively laser melted carbon-doped CoCrFeMnNi alloy",
    link: "https://doi.org/10.1016/j.msea.2019.138726",
    image: "/image/journal/journal064.png",
    venue: "Materials Science and Engineering A",
    year: 2020
  },
  {
    id: "j66",
    title: "Strain-rate sensitivity of high-entropy alloys and its significance in deformation",
    link: "https://doi.org/10.1080/21663831.2019.1668489",
    image: "/image/journal/journal063.png",
    venue: "Materials Research Letters",
    year: 2019
  },
  {
    id: "j67",
    title: "p-Type Conductivity of Hydrated Amorphous V2O5 and Its Enhanced Photocatalytic Performance in ZnO/V2O5/rGO",
    link: "https://doi.org/10.1021/acsaelm.9b00397",
    image: "/image/journal/journal062.png",
    venue: "ACS Applied Electronic Materials",
    year: 2019
  },
  {
    id: "j68",
    title: "First principles determination of formation of a Cr shell on the interface between Y–Ti–O nanoparticles and a ferritic steel matrix",
    link: "https://doi.org/10.1016/j.apsusc.2019.03.081",
    image: "/image/journal/journal061.png",
    venue: "Applied Surface Science",
    year: 2019
  },
  {
    id: "j69",
    title: "Interfacial structure and bonding mechanism of AZ31/carbon-fiber-reinforced plastic composites fabricated by thermal laser",
    link: "https://doi.org/10.1016/j.compositesb.2018.12.002",
    image: "/image/journal/journal060.png",
    venue: "Composites Part B - Engineering",
    year: 2019
  },
  {
    id: "j70",
    title: "Effect of Tempering on the Microstructure and Tensile Properties of a Martensitic Medium-Mn Lightweight Steel",
    link: "https://doi.org/10.1007/s11661-019-05190-4",
    image: "/image/journal/journal059.png",
    venue: "Metallurgical and Materials Transactions A",
    year: 2019
  },
  {
    id: "j71",
    title: "Correlative transmission electron microscopy and atom probe tomography on field evaporation mechanism of a bulk LaAlO3 oxide",
    link: "https://doi.org/10.1016/j.apsusc.2019.02.058",
    image: "/image/journal/journal058.png",
    venue: "Applied Surface Science",
    year: 2019
  },
  {
    id: "j72",
    title: "Effects of phase composition and elemental partitioning on soft magnetic properties of AlFeCoCrMn high entropy alloys",
    link: "https://doi.org/10.1016/j.actamat.2019.04.007",
    image: "/image/journal/journal057.png",
    venue: "Acta Materialia",
    year: 2019
  },
  {
    id: "j73",
    title: "On the microstructural evolution and partitioning behavior of L12-structured γ′-based Co-Ti-W alloys upon Cr and Al alloying",
    link: "https://doi.org/10.1016/j.intermet.2018.10.027",
    image: "/image/journal/journal056.png",
    venue: "Intermetallics",
    year: 2019
  },
  {
    id: "j74",
    title: "Exceptional phase-transformation strengthening of ferrous medium-entropy alloys at cryogenic temperatures",
    link: "https://doi.org/10.1016/j.actamat.2018.09.057",
    image: "/image/journal/journal055.png",
    venue: "Acta Materialia",
    year: 2018
  },
  {
    id: "j75",
    title: "Direct Three-Dimensional Observation of Core/Shell Structured Quantum Dots with a Composition Competitive Gradient",
    link: "https://doi.org/10.1021/acsnano.8b05379",
    image: "/image/journal/journal054.png",
    venue: "ACS Nano",
    year: 2018
  },
  {
    id: "j76",
    title: "Competitive grain boundary segregation of phosphorus and carbon governs delamination crack in a ferritic steel",
    link: "https://doi.org/10.1016/j.matchar.2018.08.060",
    image: "/image/journal/journal053.png",
    venue: "Materials Characterization",
    year: 2018
  },
  {
    id: "j77",
    title: "Superior strength and multiple strengthening mechanisms in nanocrystalline TWIP steel",
    link: "https://doi.org/10.1038/s41598-018-29632-y",
    image: "/image/journal/journal052.png",
    venue: "Scientific Reports",
    year: 2018
  },
  {
    id: "j78",
    title: "Enhanced chemical stability of Ag nanowires by slight surface modification with Pd",
    link: "https://doi.org/10.1002/admi.201800250",
    image: "/image/journal/journal051.png",
    venue: "Advanced Materials Interfaces",
    year: 2018
  },
  {
    id: "j79",
    title: "A new method for mapping the three-dimensional atomic distribution within nanoparticles by atom probe tomography (APT)",
    link: "https://doi.org/10.1016/j.ultramic.2018.04.005",
    image: "/image/journal/journal050.png",
    venue: "Ultramicroscopy",
    year: 2018
  },
  {
    id: "j80",
    title: "Influences of interstitial and extrusion temperature on grain boundary segregation, Y-Ti-O nanofeatures, and mechanical properties of ferritic steels",
    link: "https://doi.org/10.1016/j.actamat.2018.04.046",
    image: "/image/journal/journal049.png",
    venue: "Acta Materialia",
    year: 2018
  },
  {
    id: "j81",
    title: "Boron doped ultrastrong and ductile high-entropy alloys.",
    link: "https://doi.org/10.1016/j.actamat.2018.04.004",
    image: "/image/journal/journal048.png",
    venue: "Acta Materialia",
    year: 2018
  },
  {
    id: "j82",
    title: "Isothermal Treatment Effects on Precipitates and Tensile Properties of an HSLA Steel",
    link: "https://doi.org/10.1007/s12540-018-0041-7",
    image: "/image/journal/journal047.png",
    venue: "Metals and Materials International",
    year: 2018
  },
  {
    id: "j83",
    title: "Observation of anisotropic growth and compositional discontinuity in AlGaN electron-blocking layers on GaN microrods",
    link: "https://doi.org/10.1021/acs.cgd.7b01554",
    image: "/image/journal/journal046.png",
    venue: "Crystal Growth & Design",
    year: 2018
  },
  {
    id: "j84",
    title: "A new observation of strain-induced grain boundary serration and its underlying mechanism in a Ni-20Cr binary model alloy",
    link: "https://doi.org/10.1016/j.matchar.2017.11.047",
    image: "/image/journal/journal045.png",
    venue: "Materials Characterization",
    year: 2018
  },
  {
    id: "j85",
    title: "A brief review of κ-carbide in Fe-Mn-Al-C model alloys",
    link: "http://doi.org/10.9729/AM.2018.48.4.117",
    image: "/image/journal/journal044.png",
    venue: "Applied Microscopy",
    year: 2018
  },
  {
    id: "j86",
    title: "Tribological properties of HVOF-spayed WC-Co coatings deposited from Ni-plated powders at elevated temperatures",
    link: "https://doi.org/10.1016/j.surfcoat.2017.08.026",
    image: "/image/journal/journal043.png",
    venue: "Surface and Coatings Technology",
    year: 2017
  },
  {
    id: "j87",
    title: "Nanometer-scale phase transformation determines threshold and memory switching mechanism",
    link: "https://doi.org/10.1002/adma.201701752",
    image: "/image/journal/journal042.png",
    venue: "Advanced Materials",
    year: 2017
  },
  {
    id: "j88",
    title: "Microstructure-property relations in WC-Co coatings sprayed from combinatorial Ni-plated and nanostructured powders",
    link: "https://doi.org/10.1016/j.matchar.2017.05.005",
    image: "/image/journal/journal041.png",
    venue: "Materials Characterization",
    year: 2017
  },
  {
    id: "j89",
    title: "Deformation rate controls atomic-scale dynamic strain aging and phase transformation in high Mn TRIP steels",
    link: "https://doi.org/10.1016/j.actamat.2017.03.076",
    image: "/image/journal/journal040.png",
    venue: "Acta Materialia",
    year: 2017
  },
  {
    id: "j90",
    title: "Correlation of Controllable Aggregation with Light-Emitting Property in Polymer Blend Optoelectronic Devices",
    link: "https://doi.org/10.1002/smll.201602874",
    image: "/image/journal/journal039.png",
    venue: "Small",
    year: 2017
  },
  {
    id: "j91",
    title: "Understanding of Capping Effects on the Tip Shape Evolution and on the Atom Probe Data of Bulk LaAlO3 Using Transmission Electron Microscopy",
    link: "https://doi.org/10.1017/S1431927617000149",
    image: "/image/journal/journal038.png",
    venue: "Microscopy and Microanalysis",
    year: 2017
  },
  {
    id: "j92",
    title: "Amorphous Phase Separation in an Fe-based Bulk Metallic Glass",
    link: "https://doi.org/10.1016/j.matlet.2017.01.012",
    image: "/image/journal/journal037.png",
    venue: "Materials Letters",
    year: 2017
  },
  {
    id: "j93",
    title: "Laser-assisted atom probe tomography of four paired poly-Si/SiO2 multiple-stacks with each thickness of 10 nm",
    link: "https://doi.org/10.1016/j.apsusc.2016.10.182",
    image: "/image/journal/journal036.png",
    venue: "Applied Surface Science",
    year: 2017
  },
  {
    id: "j94",
    title: "Core-shell nanoparticle arrays double the strength of steel",
    link: "https://doi.org/10.1038/srep42547",
    image: "/image/journal/journal035.png",
    venue: "Scientific Reports",
    year: 2017
  },
  {
    id: "j95",
    title: "A Correlative Approach for Identifying Complex Phases by Electron Backscatter Diffraction and Transmission Electron Microscopy",
    link: "https://doi.org/10.9729/AM.2017.47.1.43",
    image: "/image/journal/journal034.png",
    venue: "Applied Microscopy",
    year: 2017
  },
  {
    id: "j96",
    title: "Influence of Solid Solution Treatment on the Mechanical Properties of A286 Stainless Steels",
    link: "https://doi.org/10.1166/sam.2016.2849",
    image: "/image/journal/journal033.png",
    venue: "Science of Advanced Materials",
    year: 2016
  },
  {
    id: "j97",
    title: "Atomic-scale quantification of interdiffusion and dopant localization in GeSbTe-based memory devices",
    link: "https://doi.org/10.1063/1.4962807",
    image: "/image/journal/journal032.png",
    venue: "Applied Physics Letters",
    year: 2016
  },
  {
    id: "j98",
    title: "DirectIn situObservation of Tempering-induced Austenite Decomposition and Atom Probe Analyses ofk-Carbide Precipitates in Lightweight Fe-Mn-Al-C Steels",
    link: "https://doi.org/10.1017/S1431927616004372",
    image: "/image/journal/journal031.png",
    venue: "Microscopy and Microanalysis",
    year: 2016
  },
  {
    id: "j99",
    title: "Influence of Laser-Pulse Energy on Field Evaporation of LaAlO3in Atom Probe Tomography Analysis",
    link: "https://doi.org/10.1017/S1431927616008862",
    image: "/image/journal/journal030.png",
    venue: "Microscopy and Microanalysis",
    year: 2016
  },
  {
    id: "j100",
    title: "Grain Boundary Segregation and Core/Shell Structured Nanofeatures in Oxide-Dispersion Strengthened Fe-Cr Alloys",
    link: "https://doi.org/10.1017/S1431927616004220",
    image: "/image/journal/journal029.png",
    venue: "Microscopy and Microanalysis",
    year: 2016
  },
  {
    id: "j101",
    title: "Understanding of the field evaporation of surface modified oxide materials through transmission electron microscopy and atom probe tomography",
    link: "https://doi.org/10.1016/j.apsusc.2016.01.196",
    image: "/image/journal/journal028.png",
    venue: "Applied Surface Science",
    year: 2016
  },
  {
    id: "j102",
    title: "Three-Dimensional Indium Distribution in Electron-Beam Irradiated Multiple Quantum Wells of Blue-Emitting InGaN/GaN Devices",
    link: "https://doi.org/10.1063/1.4943656",
    image: "/image/journal/journal027.png",
    venue: "Applied Physics Letters",
    year: 2016
  },
  {
    id: "j103",
    title: "Effect of Combination Milling on the Microstructure and Mechanical Properties of Ferritic Oxide Dispersion-Strengthened Steels",
    link: "http://dx.doi.org/10.3365/KJMM.2016.54.3.171",
    image: "/image/journal/journal026.png",
    venue: "Korean Journal of Metals and Materials",
    year: 2016
  },
  {
    id: "j104",
    title: "Combined atom probe tomography and density functional theory investigation of the Al offstoichiometry of k-carbides in an austenitic Fe-Mn-Al-C low density steel",
    link: "https://doi.org/10.1016/j.actamat.2016.01.007",
    image: "/image/journal/journal025.png",
    venue: "Acta Materialia",
    year: 2016
  },
  {
    id: "j105",
    title: "A Brief Comment on Atom Probe Tomography Applications",
    link: "http://dx.doi.org/10.9729/AM.2016.46.3.127",
    image: "/image/journal/journal024.png",
    venue: "Applied Microscopy",
    year: 2016
  },
  {
    id: "j106",
    title: "Novel approach for observing the asymmetrical evolution and the compositional nonuniformity of laser pulsed atom probe tomography of a single ZnO nanowire",
    link: "https://doi.org/10.1007/s12540-015-5360-3",
    image: "/image/journal/journal023.png",
    venue: "Metals and Materials International",
    year: 2016
  },
  {
    id: "j107",
    title: "Small angle neutron scattering analyses and high temperature mechanical properties of nano-structured oxide dispersion strengthened steels produced via cryomilling",
    link: "https://doi.org/10.1016/j.jallcom.2015.08.100",
    image: "/image/journal/journal022.png",
    venue: "Journal of Alloys and Compounds",
    year: 2015
  },
  {
    id: "j108",
    title: "Atomically resolved cementite dissolution governed by the strain state in pearlite steel wires",
    link: "https://doi.org/10.1016/j.scriptamat.2015.07.004",
    image: "/image/journal/journal021.png",
    venue: "Scripta Materialia",
    year: 2015
  },
  {
    id: "j109",
    title: "Self-relaxed conductive filament in ReRAM analyzed by in-situ TEM and Atom Probe Tomography",
    link: "https://doi.org/10.1093/jmicro/dfv094",
    image: "/image/journal/journal020.png",
    venue: "Microscopy",
    year: 2015
  },
  {
    id: "j110",
    title: "In-situ observation of temperature dependent nanomorphology-performance relations in emitting layer of OLEDs by TEM",
    link: "https://doi.org/10.1093/jmicro/dfv111",
    image: "/image/journal/journal019.png",
    venue: "Microscopy",
    year: 2015
  },
  {
    id: "j111",
    title: "Understanding of off-stoichiometry of Nano-sized Carbides in Fe-Mn-Al-C Low-Density Steels using Transmission Electron Microscopy, Atom Probe Tomography, and Density Functional Theory",
    link: "https://doi.org/10.1093/jmicro/dfv257",
    image: "/image/journal/journal018.png",
    venue: "Microscopy",
    year: 2015
  },
  {
    id: "j112",
    title: "Study of the decomposition behavior of retained austenite and the partitioning of alloying elements during tempering in CMnSiAl TRIP steels",
    link: "https://doi.org/10.1016/j.matdes.2015.05.059",
    image: "/image/journal/journal017.png",
    venue: "Materials & Design",
    year: 2015
  },
  {
    id: "j113",
    title: "Nano-scale observation on the transformation behavior and mechanical stability of individual retained austenite in CMnSiAl TRIP Steels",
    link: "https://doi.org/10.1016/j.msea.2015.01.005",
    image: "/image/journal/journal016.png",
    venue: "Materials Science and Engineering A",
    year: 2015
  },
  {
    id: "j114",
    title: "Temperature-dependent nanomorphology-performance relations in binary iridium complex blend films for OLED",
    link: "https://doi.org/10.1039/C5CP03436A",
    image: "/image/journal/journal015.png",
    venue: "Physical Chemistry Chemical Physics",
    year: 2015
  },
  {
    id: "j115",
    title: "Alloy Design, Combinatorial Synthesis, and Microstructure–Property Relations for Low-Density Fe-Mn-Al-C Austenitic Steels",
    link: "https://doi.org/10.1007/s11837-014-1032-x",
    image: "/image/journal/journal014.png",
    venue: "JOM",
    year: 2014
  },
  {
    id: "j116",
    title: "Application of NiMoNb adhesion layer on plasma-treated polyimide substrate for flexible electronic devices",
    link: "https://doi.org/10.1016/j.tsf.2014.02.085",
    image: "/image/journal/journal013.png",
    venue: "Thin Solid Films",
    year: 2014
  },
  {
    id: "j117",
    title: "Combined nano-SIMS/AFM/EBSD analysis and atom probe tomography, of carbon distribution in austenite/ε-martensite high-Mn steels",
    link: "https://doi.org/10.1016/j.ultramic.2013.01.009",
    image: "/image/journal/journal012.png",
    venue: "Ultramicroscopy",
    year: 2013
  },
  {
    id: "j118",
    title: "Three-dimensional characterization of bainitic microstructures in low-carbon high-strength low-alloy steel studied by electron backscatter diffraction",
    link: "https://doi.org/10.1016/j.matchar.2013.02.009",
    image: "/image/journal/journal011.png",
    venue: "Materials Characterization",
    year: 2013
  },
  {
    id: "j119",
    title: "Direct evidence for the formation of ordered carbides in a ferrite-based low-density Fe–Mn–Al–C alloy studied by transmission electron microscopy and atom probe tomography",
    link: "https://doi.org/10.1016/j.scriptamat.2012.08.013",
    image: "/image/journal/journal010.png",
    venue: "Scripta Materialia",
    year: 2013
  },
  {
    id: "j120",
    title: "Influence of carbon content on the microstructure, martensitic transformation and mechanical properties in austenite/ε-martensite dual-phase Fe–Mn–C steels",
    link: "https://doi.org/10.1016/j.actamat.2012.09.078",
    image: "/image/journal/journal009.png",
    venue: "Acta Materialia",
    year: 2013
  },
  {
    id: "j121",
    title: "Atomic scale effects of alloying, partitioning, solute drag and austempering on the mechanical properties of high-carbon bainitic– austenitic TRIP steels",
    link: "https://doi.org/10.1016/j.actamat.2012.07.064",
    image: "/image/journal/journal008.png",
    venue: "Acta Materialia",
    year: 2012
  },
  {
    id: "j122",
    title: "Microscopic analysis of Fe–Cr alloy produced by single roll strip casting",
    link: "https://doi.org/10.1179/026708310X12738371693058",
    image: "/image/journal/journal007.png",
    venue: "Materials Science and Technology",
    year: 2013
  },
  {
    id: "j123",
    title: "Atom probe tomography and nano secondary ion mass spectroscopy investigation of the segregation of boron at austenite grain boundaries in 0.5 wt.% carbon steels",
    link: "https://doi.org/10.1007/s12540-011-0617-y",
    image: "/image/journal/journal006.png",
    venue: "Metals and Materials International",
    year: 2011
  },
  {
    id: "j124",
    title: "Formation of NiO nanowires on the surface of nickel strips",
    link: "https://doi.org/10.1016/j.jallcom.2010.05.180",
    image: "/image/journal/journal005.png",
    venue: "Journal of Alloys and Compounds",
    year: 2010
  },
  {
    id: "j125",
    title: "Atomic scale investigation on the distribution of boron in medium carbon steels by atom probe tomography and EELS",
    link: "https://doi.org/10.1016/j.ultramic.2009.12.006",
    image: "/image/journal/journal004.png",
    venue: "Ultramicroscopy",
    year: 2010
  },
  {
    id: "j126",
    title: "Effect of the rolling speed on microstructural and mechanical properties of aluminum–magnesium alloys prepared by twin roll casting",
    link: "https://doi.org/10.1016/j.matdes.2009.08.032",
    image: "/image/journal/journal003.png",
    venue: "Materials & Design",
    year: 2010
  },
  {
    id: "j127",
    title: "Structure and mechanical properties of Ni–Cr alloy produced by single roll strip casting",
    link: "https://doi.org/10.1016/j.matdes.2009.07.006",
    image: "/image/journal/journal002.png",
    venue: "Materials & Design",
    year: 2010
  },
  {
    id: "j128",
    title: "2-D & 3-D Observations on the Microstructure of Super Bainite TRIP Steels using Total Analysis System",
    link: "http://dx.doi.org/10.5228/KSPP.2010.19.1.044",
    image: "/image/journal/journal001.png",
    venue: "Transactions of Materials Processing",
    year: 2010
  }
];

export const CONFERENCES: Publication[] = [
  // Placeholder for future data
];

export const PATENTS: Patent[] = [
  // Placeholder for future data
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-10-18',
    title: '국민대학교 설재복 교수, \'2025 세계 최상위 2% 연구자\' 선정',
    summary: `국민대학교(총장 정승렬) 신소재공학부 설재복 교수가 미국 스탠퍼드 대학교와 엘스비어(Elsevier)가 공동으로 발표한 '2025 세계 최상위 2% 연구자(World's Top 2% Scientists)' 명단에 이름을 올렸다.

'세계 최상위 2% 연구자'는 스탠퍼드 대학의 존 이오아니디스(John P.A. Ioannidis) 교수 연구팀이 색인/인용 데이터베이스인 스코퍼스(Scopus) 기반 데이터를 활용해 선정하는 것으로, 연구자의 학문적 영향력을 객관적으로 평가하는 주요 지표로 꼽힌다. 이번 평가는 1960년부터 2024년까지의 논문 인용도, h-인덱스, 저자 역할에 따른 인용 횟수 등 6가지 복합 지표를 종합적으로 분석해 전 세계 총 660만 명의 연구자 중 상위 2%인 약 23만 명을 추려냈다.

설재복 교수는 재료공학 분야, 특히 항공우주 및 방위산업 소재와 첨단 분석 기술 분야에서의 탁월한 연구 성과를 인정받았다. 설 교수가 이끄는 ADAML(AI analysis and Defense/Aerospace Materials Lab.) 연구실은 인공지능(AI)을 활용한 금속 소재 분석 및 신소재 개발 연구를 선도하고 있다.

올해 한국에서는 설 교수를 포함해 총 2,633명의 연구자가 선정되었으며, 이는 전년 대비 11.4% 증가한 수치다. 국민대학교에서는 총 197명의 연구자가 포함되어 국내 주요 연구 거점으로서의 위상을 다시 한번 입증했다.

설재복 교수는 "이번 선정은 개인의 영광일 뿐만 아니라 우리 연구실 학생들과 함께 땀 흘려 이뤄낸 결실"이라며, "앞으로도 차세대 소재 기술 개발을 통해 국가 산업 발전에 기여하겠다"고 소감을 밝혔다.

출처: 국민대학교 공지사항`,
    category: 'Award',
    link: 'https://www.kookmin.ac.kr/comm/board/user/be8e117863cfd580d7ed5931a799207c/view.do?currentPageNo=1&searchTy=0000&searchValue=&dataSeq=1076476&parentSeq=1076476'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'ADAM LAB Opening Ceremony',
    image: 'https://picsum.photos/800/600?random=50',
    date: '2024-03-01',
    description: 'Celebrating the official opening of the new ADAM Lab facilities.'
  },
  {
    id: 'g2',
    title: 'MRS Spring 2024 Conference',
    image: 'https://picsum.photos/800/600?random=51',
    date: '2024-04-02',
    description: 'Our team presenting latest research findings at MRS Spring Meeting.'
  },
  {
    id: 'g3',
    title: 'Annual Research Workshop',
    image: 'https://picsum.photos/800/600?random=52',
    date: '2024-05-20',
    description: 'Collaborative workshop with industry partners and academic collaborators.'
  }
];
