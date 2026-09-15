import { DigitalPassportLot, PaymentRecord, ProductItem } from '../types';

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Tenate ceremonial policromado',
    category: 'Tejido de Palma',
    badge: 'Destacado de la semana',
    craftType: 'Palma tejida a mano',
    description: 'Tejido de doble nudo con pigmentos vegetales de grana cochinilla y flor de cempasúchil.',
    price: 380,
    artisanName: 'María Guzmán',
    artisanInitials: 'MG',
    location: 'Tlaxiaco, Oax.',
    stock: '3 piezas disp.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADMzysc8buYnt4_J6N6fK3aJOpQwIXmK6rDrxaTI_kI2QHwPZaveZN-R-YpdSXJl83jv428Yd5_IFDtytjOVkkte6-yB6pXskpvxdiTLt3gQ4EoFSAS1SzELEaKKIDGkkY-oWJOM68851O2vaSsz92iubLVZ69vQp19ZYBqh38PsSqvSJ-_I0vXR4ZpTDTgoRrmCS2f5HnSOLlMZWIdp0uyeXZVn1fkdUzQelGLAyhj_tOsM-t8ikpbQ',
    imageAlt: 'Tenate tradicional mixteco tejido con palma'
  },
  {
    id: 'prod-2',
    title: 'Huipil Tacuate tradicional',
    category: 'Textiles & Telar',
    badge: 'Telar de Cintura',
    craftType: 'Algodón nativo coyuchi',
    description: 'Elaborado durante 4 semanas en telar de cintura con hilos teñidos con corteza de roble.',
    price: 1850,
    artisanName: 'Celia Ramírez',
    artisanInitials: 'CR',
    location: 'Juxtlahuaca, Oax.',
    stock: 'Bajo encargo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ch3EnTKfOPzLhJvKhO3lCcPIUAE3hVVkfX5Im0s-WO1vCixJXClxdVdruWiPRqr3ZuxAzdlH3yAof7r8gqeX3gu9Ib76kDaeSl6pOyNhXt8PsFUfn2Jc7_xqUysoYwZ8H3nJ1yfgy2pOSZt3H-5XCr1VJuyIa-sigPM_rzR4gUCUs1ekNF4IJND5FqstPVswevuKVBQzWO0uds-_-hVuY5mZRW5VnjA9Ovw00rmRFDxpZZ5yIbtMBA',
    imageAlt: 'Huipil tacuate elaborado en telar de cintura'
  },
  {
    id: 'prod-3',
    title: 'Juego Mezcalero de Barro Rojo',
    category: 'Barro Rojo y Bruñido',
    badge: 'Sin Plomo',
    craftType: 'Barro bruñido con cuarzo',
    description: 'Incluye 4 jícaras mezcaleras y botella de 750ml bruñida a piedra de río sin esmaltes tóxicos.',
    price: 420,
    artisanName: 'Faustino López',
    artisanInitials: 'FL',
    location: 'Huajuapan, Oax.',
    stock: '8 sets en stock',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc_N5Gd6_M6-7lQHNQn3u3CXOjDBgtsRYAkGv11YJL-psCvs1aTaRhU5f87szXd3mIEG0cKutzbMwwdbRrF_2uVkNRE51yH_5m7V97JQlVfin1PVYlfKXAD8xqCNnOtz9-53IwaTy4vm7Rhw-VC1ubJBS9tPv3w35YBbxOOVS4PMaLZd-D6s8ADZvyM4HnAKAiFGs76_3veillGYNT7ewqhgIa9lTXbg2p96qV9xt4PwYJJTrJab2oBw',
    imageAlt: 'Juego mezcalero de barro rojo artesanal sin plomo'
  },
  {
    id: 'prod-4',
    title: 'Café Arábica Pluma Típica (1kg)',
    category: 'Café de Altura',
    badge: '1,850 msnm',
    craftType: 'Cosecha de Sombra',
    description: 'Notas aromáticas a chocolate amargo, piloncillo y naranja confitada. Tueste medio artesanal.',
    price: 240,
    artisanName: 'Coop. Yuu Savi',
    artisanInitials: 'CM',
    location: 'Atatlahuca, Oax.',
    stock: 'Grano o Molido',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAez4dT_xpU9xXpVPvsV67TnOrYHSaM7HjA21L2G0Z2aFZRjG2HnyaCs8shRrzIUQdA3oshrXyVtBHyxj_wIlrm_2xzglvFQW-Y-OHMO32xkhdJRSp9h1umZ11Or2uit6NN7dgGmV8iT6A7EAM109C708nmiwlPAh7cEUyEr_t69TZn-afFUGeKsv0Q0L7tsN5A2T1VoGBOVo4v3aWNBTwZyoNrQR1Ah04bpGsSsCJHlRTiP9RHnJpmTw',
    imageAlt: 'Granos de café tostado arábica de altura'
  },
  {
    id: 'prod-5',
    title: 'Sombrero Calentano Mixteco',
    category: 'Tejido de Palma',
    badge: 'Talla 57–60',
    craftType: 'Palma real de barranca',
    description: 'Tejido en cueva para conservar la humedad de la fibra. Flexible, resistente al agua y sol intenso.',
    price: 550,
    artisanName: 'Don Margarito',
    artisanInitials: 'DM',
    location: 'Nochixtlán, Oax.',
    stock: 'Talla 57–60',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkQ_T-4HkMOGbUXCEL4WB3G-nckbk4y8MBXaW8RROxSTNJ7CpRum4bbwbnLCoYIsiGQouYyMcMM8EHk1DzR9XrOLMdVSb-RqJUa1aBk1p6JnwmWpKfFndzgY1CS6A1wg_wb_ZV0zrKj5zVgEEMN7Z3_m97Xx-9YigQ14ZAHHNVhaRXXI0nBiVqxjMXJ8MLMVi_gKnPRfs1qzravdO-6Uv0M8q2gl5pOM-K5nYvOyXYJ1GfD99czI_Ltw',
    imageAlt: 'Sombrero tradicional calentano de palma fina'
  },
  {
    id: 'prod-6',
    title: 'Miel Virgen de Campanilla (1kg)',
    category: 'Miel y Derivados',
    badge: '100% Pura',
    craftType: 'Apis mellifera y Scaptotrigona',
    description: 'Cosechada en colmenas ubicadas entre encinos y flores medicinales de la montaña alta.',
    price: 190,
    artisanName: 'Taller Comunitario',
    artisanInitials: 'TC',
    location: 'Chalcatongo, Oax.',
    stock: '100% Pura',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZBROS9VsAw7NHM5L1DmOrsjS5_bgY5WUAX2CWi4t5af2aINWReGNta7MhraFl1vMglwJfhe52szbMFK3zJCSVdtzGS8Wxk4FAPcGg0ryh6r5SO--xklxpgEP7fXFnRFHhG28vL6IwUl3qW6cFysfAyubAB0o5lspYGGWJSMCYFqxBvweNm6W2qlz6HlxvvKjRiSwLsfBYXxK7Cv3WSoPy77qwwVCiEOx_s0cTXnQKPYnYNHr48piLg',
    imageAlt: 'Frasco de miel pura silvestre de campanilla'
  }
];

export const INITIAL_VERIFIED_LOTS: DigitalPassportLot[] = [
  {
    id: 'lot-884',
    code: 'MX-2024-884',
    title: 'Frijol Negro Criollo & Maíz Azul',
    productType: 'Granos y Semillas',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx4jUpQopozBH8CYGA3m-Tfhex_UjwxY-4UKei8h4QhxSSmzObP9OdoONSXqi0XITG11whMMoDAOmA4bw0hSNWommPAh4F1D5ffA86lEaxrdfmf3kJ11rzljgIJllTeHX25OBP5QgRG79YiKsHHOLHgZPBf6D-AEEoGtbjiemIcHXuuXj7ZM1cyu0e6F19V9rkEX4nPjc7Dsc2w4tfJ_eHgPoPJzpuWKstIg6jmmd_4HM4ixO1PrSK4Q',
    imageAlt: 'Granos seleccionados de frijol negro y maíz criollo en canasto artesanal',
    producerName: 'Don Mateo Cruz Sánchez',
    producerInitials: 'DM',
    location: 'San Mateo Peñasco, Tlaxiaco, Oax.',
    volumeKg: 450,
    verifiedStatus: 'Verificado (Con Evidencia)',
    evaluatorOrg: 'Comité Certificador Mixteca Agroecológica AC',
    tags: ['Sin agroquímicos sintéticos', 'Variedad autóctona libre OGM', 'Cosecha de Temporal'],
    timeline: [
      {
        title: 'Cosecha Tradicional a Mano',
        dateAndLocation: '12 Oct 2024 · Parcela La Ciénega (1,980 msnm)',
        color: '#032517'
      },
      {
        title: 'Secado Solar en Petates de Palma',
        dateAndLocation: '18 Oct 2024 · Humedad óptima del 11.2%',
        color: '#032517'
      },
      {
        title: 'Validación Raíz & Dictamen',
        dateAndLocation: '26 Oct 2024 · Dictamen digital firmado sin observaciones',
        color: '#a73918'
      }
    ],
    pricePerKg: 42.0,
    hash: '0x8f3c...b791e204a9e52'
  },
  {
    id: 'lot-912',
    code: 'MX-2024-912',
    title: 'Café Arábica Pluma Hidalgo Lavado',
    productType: 'Café de Especialidad',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqal830zp_JFXZ3K1_Rr7bbte3jwc_lJwXPf-TxcAcEg2raHlxCK89btRwH4uwzhF2fLfO_VmIZsA4gTepWeTnnrV6vLEcToMhwFBkbarbh5uwCol3bpetHUY8kzwnxJxVdtmqGOZThqZnec77V9oKnLql4l29d8XAJan9Acm66pPUlaO6eAOQymtE0KneK_qV0L0sOeux4_wReZWm6lmbXiAdjKdpv5FSyJqzx_42kMz_U4T3L2q_g',
    imageAlt: 'Muestras de café en grano verde pergamino de la Mixteca',
    producerName: 'Don Efraín Bautista Santiago',
    producerInitials: 'EB',
    location: 'Magdalena Peñasco, Tlaxiaco, Oax.',
    volumeKg: 680,
    verifiedStatus: 'Calidad Exportación Aprobada',
    evaluatorOrg: 'Laboratorio de Calidad Café Mixteco & Tec Hub',
    tags: ['Cero broca', 'Grano parejo', 'Fermentación 18 hrs en batea'],
    timeline: [
      {
        title: 'Corte Selectivo de Cereza Madura',
        dateAndLocation: '22 Oct 2024 · Parcela Ladera Sur (1,650 msnm)',
        color: '#032517'
      },
      {
        title: 'Despulpado y Fermentación en Frío',
        dateAndLocation: '23 Oct 2024 · 18 horas en batea de madera',
        color: '#032517'
      },
      {
        title: 'Secado en Petates bajo Sombra Controlada',
        dateAndLocation: '28 Oct 2024 · Humedad al 11.4% (Conforme NMX-F-083)',
        color: '#a73918'
      }
    ],
    pricePerKg: 110.0,
    hash: '0x3a7e...681bf9902ac21',
    variety: 'Pluma Hidalgo / Arabica',
    altitude: '1,650 msnm',
    process: 'Lavado Tradicional',
    notes: 'Lote cosechado en ladera de alta montaña. Certificado bajo Norma NMX-F-083 y NOM-255-SCFI con sellado criptográfico inmutable en Stellar Horizon.',
    nomCompliance: {
      standard: 'NMX-F-083-COFOCAFE / NOM-255-SCFI-2018',
      humidity: '11.4%',
      humidityCompliant: true,
      defectPercentage: 1.1,
      defectClassification: 'Grado Especialidad / Exportación (Menor a 2% defectos)',
      altitudeMeters: 1650,
      strictAltitude: true,
      botanicalPurity: '100% Typica Pluma Nativo libre de OGM',
      agroecologicalFreePesticides: true,
      evidencePhotos: {
        grainGridSampleUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqal830zp_JFXZ3K1_Rr7bbte3jwc_lJwXPf-TxcAcEg2raHlxCK89btRwH4uwzhF2fLfO_VmIZsA4gTepWeTnnrV6vLEcToMhwFBkbarbh5uwCol3bpetHUY8kzwnxJxVdtmqGOZThqZnec77V9oKnLql4l29d8XAJan9Acm66pPUlaO6eAOQymtE0KneK_qV0L0sOeux4_wReZWm6lmbXiAdjKdpv5FSyJqzx_42kMz_U4T3L2q_g',
        humidityGaugeUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
        foliarHealthUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'
      },
      stellarTxLedger: 52491802,
      stellarTxHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      stellarTimestamp: '2024-10-28T16:42:19Z',
      immutableSealStatus: 'Sellado Inmutable'
    },
    royaltyClause: {
      percentage: 8,
      beneficiary: 'Don Efraín Bautista Santiago',
      smartContractPolicy: 'Soroban Perpetual Royalty Standard (8% reventas secundarias / 2% fondo comunal)',
      accumulatedRoyaltiesMxn: 3420.0,
      secondarySalesCount: 3
    }
  },
  {
    id: 'lot-765',
    code: 'MX-2024-765',
    title: 'Miel Virgen de Campanilla de Montaña',
    productType: 'Apicultura Silvestre',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZBROS9VsAw7NHM5L1DmOrsjS5_bgY5WUAX2CWi4t5af2aINWReGNta7MhraFl1vMglwJfhe52szbMFK3zJCSVdtzGS8Wxk4FAPcGg0ryh6r5SO--xklxpgEP7fXFnRFHhG28vL6IwUl3qW6cFysfAyubAB0o5lspYGGWJSMCYFqxBvweNm6W2qlz6HlxvvKjRiSwLsfBYXxK7Cv3WSoPy77qwwVCiEOx_s0cTXnQKPYnYNHr48piLg',
    imageAlt: 'Miel pura de campanilla en frasco de vidrio',
    producerName: 'Fausto Robles Guzmán',
    producerInitials: 'FR',
    location: 'Chalcatongo de Hidalgo, Oax.',
    volumeKg: 280,
    verifiedStatus: '100% Pura Silvestre',
    evaluatorOrg: 'Red de Apicultores Agroecológicos Mixtecos',
    tags: ['Sin adulterantes', 'Cosecha de otoño', 'Flora medicinal nativa'],
    timeline: [
      {
        title: 'Castra en Apiario La Cumbre',
        dateAndLocation: '15 Sep 2024 · Monte Florido (2,200 msnm)',
        color: '#032517'
      },
      {
        title: 'Filtrado en Lienzo y Decantación',
        dateAndLocation: '18 Sep 2024 · Filtrado por gravedad en frío',
        color: '#032517'
      },
      {
        title: 'Sello de Pureza y Análisis Polínico',
        dateAndLocation: '25 Sep 2024 · Conforme a Norma Orgánica Nacional',
        color: '#a73918'
      }
    ],
    pricePerKg: 190.0,
    hash: '0x992b...d1e4438fa7211'
  }
];

export const MOCK_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-1',
    date: '28 Oct 2024',
    concept: 'Liquidación Lote #MX-2024-884 (450 kg Frijol)',
    lotCode: 'MX-2024-884',
    amount: 18900.0,
    status: 'Disponible',
    buyer: 'Comercializadora Comunitaria Oaxaca Justo',
    paymentType: 'Venta Directa'
  },
  {
    id: 'pay-royalty-1',
    date: '05 Nov 2024',
    concept: 'Regalía Perpetua (8%) · Reventa Café Tostado de Especialidad en CDMX',
    lotCode: 'MX-2024-740',
    amount: 1840.0,
    status: 'Disponible',
    buyer: 'Café de Origen Roma Norte (Reventa Lote Fraccionado)',
    paymentType: 'Regalía Perpetua',
    royaltyRate: '8% s/ $23,000 MXN',
    resaleOrigin: 'Boutique Tostadora Roma Norte, CDMX'
  },
  {
    id: 'pay-royalty-2',
    date: '18 Nov 2024',
    concept: 'Regalía Perpetua (8%) · Reventa Lote Café Tostado en Monterrey',
    lotCode: 'MX-2024-740',
    amount: 1580.0,
    status: 'Disponible',
    buyer: 'Barra de Especialidad Sierra Madre',
    paymentType: 'Regalía Perpetua',
    royaltyRate: '8% s/ $19,750 MXN',
    resaleOrigin: 'Barra Sierra Madre, San Pedro Garza García'
  },
  {
    id: 'pay-2',
    date: '14 Oct 2024',
    concept: 'Anticipo Lote Café Pergamino #MX-2024-740',
    lotCode: 'MX-2024-740',
    amount: 8500.0,
    status: 'Completado',
    buyer: 'Tostaduría de Especialidad Raíz Mixteca',
    paymentType: 'Anticipo'
  },
  {
    id: 'pay-3',
    date: '02 Sep 2024',
    concept: 'Venta Directa Maíz Criollo (300 kg)',
    lotCode: 'MX-2024-601',
    amount: 5400.0,
    status: 'Completado',
    buyer: 'Molino Tradicional San Pedro',
    paymentType: 'Venta Directa'
  }
];
