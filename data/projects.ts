import type { Project } from '@/lib/types'

export const projects: Project[] = [
  // ── PROJECTOS RECENTES ──────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'moradia-belmonte',
    namePt: 'Moradia Belmonte',
    nameEn: 'Belmonte House',
    typePt: 'Moradia Unifamiliar',
    typeEn: 'Single-Family Home',
    descriptionPt:
      'O desafio foi criar um projeto que proporcionasse à moradia tirar o máximo partido da vista desafogada e fosse criada uma área de lazer ao ar livre protegida do vento. A solução desenvolvida passou por se criar 2 volumes principais: piso térreo com orientação sul / poente, delimitado no lado norte por um muro de pedra que separa a área de entrada de toda a área restante. Outro volume no andar superior foram os quartos, com orientação perpendicular. No térreo, fica um corpo de vidro inteiro, cuja transparência permite a visualização dos arredores, e para quem estiver de frente para a piscina será protegido do vento norte predominante.',
    descriptionEn:
      'The challenge was to design a home that would make the most of its open views while creating an outdoor leisure area sheltered from the wind. The solution involved two main volumes: the ground floor with a south/west orientation, bounded on the north side by a stone wall separating the entrance area from the rest. The upper floor houses the bedrooms, oriented perpendicularly. On the ground floor, a full glass volume allows visual connection with the surroundings, while shielding occupants from the prevailing north wind when facing the pool.',
    areas: [
      { labelPt: 'Área de terreno', labelEn: 'Plot area', value: '1 798 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '346 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Moradia+Belmonte+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Moradia+Belmonte+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Moradia+Belmonte+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Moradia+Belmonte+04',
      'https://placehold.co/900x600/DDD9D4/5A5652?text=Moradia+Belmonte+05',
    ],
    category: 'recentes',
  },
  {
    id: '2',
    slug: 'moradia-na-areia',
    namePt: 'Moradia na Areia',
    nameEn: 'Seaside House',
    typePt: 'Projeto de Alterações e Recuperação de Habitação',
    typeEn: 'Renovation & Restoration Project',
    descriptionPt:
      'Partindo de uma casa existente o projeto procura o diálogo entre a linguagem contemporânea da nova intervenção e a da pré-existência. Betão, viroc, aço e vidro contribuem para a fusão pretendida reforçando a relação com a envolvente existente. É uma moradia térrea que foi ampliada à medida das necessidades de uma família.',
    descriptionEn:
      'Starting from an existing house, the project seeks a dialogue between the contemporary language of the new intervention and the pre-existing structure. Concrete, viroc, steel and glass contribute to the intended fusion, reinforcing the relationship with the existing surroundings. It is a single-storey dwelling that was extended to meet the needs of a family.',
    areas: [
      { labelPt: 'Área de terreno', labelEn: 'Plot area', value: '690 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '158 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Moradia+na+Areia+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Moradia+na+Areia+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Moradia+na+Areia+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Moradia+na+Areia+04',
    ],
    category: 'recentes',
  },
  {
    id: '3',
    slug: 'villa-julia',
    namePt: 'Villa Julia',
    nameEn: 'Villa Julia',
    typePt: 'Remodelação de Chalet — Estoril',
    typeEn: 'Chalet Renovation — Estoril',
    descriptionPt:
      'A Vila Julia é uma remodelação (ainda em execução) de um Chalet localizado no Estoril, mantendo-se toda a traça original da construção existente e modernizando-se todo o interior.',
    descriptionEn:
      'Villa Julia is the renovation (currently under construction) of a Chalet located in Estoril. The entire original character of the existing building is preserved while the interior is fully modernised.',
    areas: [
      { labelPt: 'Área de terreno', labelEn: 'Plot area', value: '667 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '269 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Villa+Julia+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Villa+Julia+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Villa+Julia+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Villa+Julia+04',
    ],
    category: 'recentes',
  },

  // ── AREACOR COLLABORATION ────────────────────────────────────────────────────
  {
    id: '4',
    slug: 'moradia-quinta-marinha',
    namePt: 'Moradia Quinta da Marinha',
    nameEn: 'Quinta da Marinha Residence',
    typePt: 'Moradia — Cascais',
    typeEn: 'Residence — Cascais',
    descriptionPt:
      'A casa está situada numa zona residencial de luxo com vista para o campo de golfe da Quinta da Marinha, Cascais, Portugal, sujeita às restrições impostas pelas regras locais, pela orientação do lote e pelo programa da casa. O desafio foi criar uma solução que permitisse à casa tirar o máximo partido da vista para o campo de golfe e posicionar-se de forma a criar uma zona exterior de lazer protegida do vento. A solução foi o desenvolvimento da casa em dois volumes principais. Todas as coberturas planas foram feitas com uma solução que cria uma "caixa d\'água" estanque, onde se acumula uma lâmina contínua de água que garante a harmonização da variação de temperatura entre dia e noite e verão e inverno. Este sistema também permite o aproveitamento da água da chuva, formando uma reserva natural de água para irrigação. Todo o acesso à porta de entrada principal da casa é feito com lajes de betão colocadas sobre a água. Holofotes submersos colocados sob essas lajes dão um efeito muito interessante à noite.',
    descriptionEn:
      'The house is located in a luxury residential area overlooking the Quinta da Marinha golf course in Cascais, Portugal, subject to restrictions imposed by local regulations, plot orientation, and the building programme. The challenge was to maximise golf course views while creating a wind-sheltered outdoor leisure area. The solution developed the house across two main volumes. All flat roofs feature a watertight "water box" solution where a continuous sheet of water accumulates, harmonising temperature variations between day and night and between summer and winter. This system also captures rainwater, creating a natural reservoir for irrigation. The main entrance is accessed via concrete slabs placed over the water, and submerged floodlights beneath the slabs create a striking effect at night.',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '2 279 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '456 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Quinta+da+Marinha+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Quinta+da+Marinha+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Quinta+da+Marinha+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Quinta+da+Marinha+04',
      'https://placehold.co/900x600/DDD9D4/5A5652?text=Quinta+da+Marinha+05',
    ],
    category: 'areacor',
  },
  {
    id: '5',
    slug: 'condominio-sao-joao-estoril',
    namePt: 'Condomínio S. João do Estoril',
    nameEn: 'S. João do Estoril Condominium',
    typePt: 'Condomínio Residencial',
    typeEn: 'Residential Condominium',
    descriptionPt:
      'São dois fogos com 3 quartos de configuração idêntica e simétrica. Os vãos envidraçados de cor escura estão envolvidos por caixilharia de alumínio lacado na cor chumbo. As coberturas em chapa de zinco de cor escura. As paredes brancas e pedra regional contrastam com as paredes em betão.',
    descriptionEn:
      'Two apartments with 3 bedrooms in identical and symmetrical configuration. The dark-toned glazed openings are framed by lead-coloured lacquered aluminium joinery. Dark zinc sheet roofing. White walls and local stone contrast with exposed concrete walls.',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '785 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '560 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Sao+Joao+Estoril+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Sao+Joao+Estoril+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Sao+Joao+Estoril+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Sao+Joao+Estoril+04',
    ],
    category: 'areacor',
  },
  {
    id: '6',
    slug: 'casa-birre',
    namePt: 'Casa Birre',
    nameEn: 'Casa Birre',
    typePt: 'Moradia Unifamiliar',
    typeEn: 'Single-Family Home',
    descriptionPt:
      'Uma moradia unifamiliar com 5 quartos. A moradia chama a atenção pelo volume "torcido" da sala de estar com pé direito duplo e grandes envidraçados onde intercepta perpendicularmente o volume dos restantes espaços. A luminosidade abundante e a intercepção dos volumes/espaços é notória.',
    descriptionEn:
      'A single-family home with 5 bedrooms. The house is defined by a "twisted" living room volume with double-height ceilings and large glazed openings that intersect perpendicularly with the remaining volumes. The abundant natural light and the interplay between volumes and spaces is remarkable.',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '1 756 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '405 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Casa+Birre+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Casa+Birre+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Casa+Birre+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Casa+Birre+04',
      'https://placehold.co/900x600/DDD9D4/5A5652?text=Casa+Birre+05',
    ],
    category: 'areacor',
  },
  {
    id: '7',
    slug: 'moradia-em-birre',
    namePt: 'Moradia em Birre',
    nameEn: 'Birre House',
    typePt: 'Moradia Unifamiliar de Dois Pisos',
    typeEn: 'Two-Storey Single-Family Home',
    descriptionPt:
      'Moradia unifamiliar de dois pisos acima da cota de soleira e um piso em cave para uma parcela do terreno, sito no loteamento da Qta. da Bela Vista na Alapraia. É uma moradia com 3 quartos no piso superior, cozinha e uma sala no piso térreo que vive para o exterior e para a relação com a piscina.',
    descriptionEn:
      'A two-storey single-family home above ground level with a basement on part of the plot, located in the Quinta da Bela Vista development in Alapraia. The house has 3 bedrooms on the upper floor, with a kitchen and living room on the ground floor that opens outward and connects to the pool.',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '347 m²' },
      { labelPt: 'Área de Construção', labelEn: 'Built area', value: '180 m²' },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Moradia+Birre+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Moradia+Birre+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Moradia+Birre+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Moradia+Birre+04',
    ],
    category: 'areacor',
  },
  {
    id: '8',
    slug: 'belmar-spa-resort',
    namePt: 'Belmar — Spa Resort',
    nameEn: 'Belmar — Spa Resort',
    typePt: 'Empreendimento Hoteleiro 5 Estrelas',
    typeEn: '5-Star Hotel Development',
    descriptionPt:
      'Empreendimento implantado ao longo de um vale orientado para disfrutar ao máximo da vista para a Praia de Porto de Mós. É um estabelecimento hoteleiro que foi concebido para obter uma classificação de 5 estrelas e é composto por 189 unidades de alojamento com tipologias desde o T0 ao T3, tem ainda 2 restaurantes, 2 bares, 1 loja, 8 piscinas e um SPA.',
    descriptionEn:
      'A development laid out along a valley oriented to make the most of the views over Praia de Porto de Mós. This hotel establishment was designed to achieve a 5-star rating and comprises 189 accommodation units ranging from studios to 3-bedroom apartments, as well as 2 restaurants, 2 bars, 1 shop, 8 pools and a SPA.',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '42 000 m²' },
      {
        labelPt: 'Área de Construção',
        labelEn: 'Built area',
        value: '20 200 m²',
      },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Belmar+Resort+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Belmar+Resort+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Belmar+Resort+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Belmar+Resort+04',
      'https://placehold.co/900x600/DDD9D4/5A5652?text=Belmar+Resort+05',
    ],
    category: 'areacor',
  },
  {
    id: '9',
    slug: 'amendoeira-golf-resort',
    namePt: 'Amendoeira Golf Resort',
    nameEn: 'Amendoeira Golf Resort',
    typePt: 'Resort Turístico — Aldeamento e Hotel',
    typeEn: 'Tourist Resort — Village & Hotel',
    descriptionPt:
      'Inspirada na arquitetura mourisca combinada com um toque moderno, este resort é composto por dois empreendimentos turísticos, um Aldeamento Turístico e um Hotel, originando um total de 287 Unidades de Alojamento. Varia desde edifícios de 3 pisos com tipologias T2 a moradias de 165 m² (T3) e moradias (T3+1) com áreas entre os 300 e os 390 m².',
    descriptionEn:
      'Inspired by Moorish architecture combined with a modern touch, this resort comprises two tourist developments — a Tourist Village and a Hotel — totalling 287 accommodation units. It ranges from 3-storey buildings with 2-bedroom apartments to 165 m² (3-bedroom) houses and (3+1 bedroom) villas with areas between 300 and 390 m².',
    areas: [
      { labelPt: 'Área do Lote', labelEn: 'Plot area', value: '355 402 m²' },
      {
        labelPt: 'Área de Construção',
        labelEn: 'Built area',
        value: '64 631 m²',
      },
    ],
    images: [
      'https://placehold.co/900x600/EDEBE6/7A7672?text=Amendoeira+Golf+01',
      'https://placehold.co/900x600/D8D4CC/5A5652?text=Amendoeira+Golf+02',
      'https://placehold.co/900x600/E8E4DF/6A6662?text=Amendoeira+Golf+03',
      'https://placehold.co/900x600/F0EDE8/7A7672?text=Amendoeira+Golf+04',
      'https://placehold.co/900x600/DDD9D4/5A5652?text=Amendoeira+Golf+05',
    ],
    category: 'areacor',
  },
]

export const projectsRecentes = projects.filter((p) => p.category === 'recentes')
export const projectsAreacor = projects.filter((p) => p.category === 'areacor')
