export function sanitizeProductName(raw: string): string {
  if (!raw) return 'Café';
  let cleaned = raw.trim();

  // Strip common voice/intent prefixes in Spanish
  cleaned = cleaned.replace(
    /^(quiero\s+registrar(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?|registrar(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?|dar\s+de\s+alta(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?|vender(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?|subir(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?|inscribir(\s+un|\s+una|\s+el|\s+la|\s+mi|\s+mis)?)\s+/i,
    ''
  );
  cleaned = cleaned.replace(/^(el|la|los|las|mi|mis|un|una|unos|unas)\s+/i, '');
  cleaned = cleaned.trim();

  const lower = cleaned.toLowerCase();

  // Check specific categories
  if (lower.includes('pulque') || lower.includes('aguamiel') || lower.includes('tinacal')) {
    return 'Pulque';
  }
  if (lower.includes('mezcal') || lower.includes('espadin') || lower.includes('tobala')) {
    return 'Mezcal';
  }
  if (lower.includes('cafe') || lower.includes('café') || lower.includes('pergamino') || lower.includes('cereza')) {
    return 'Café';
  }
  if (lower.includes('miel') || lower.includes('abeja') || lower.includes('panal')) {
    return 'Miel';
  }
  if (lower.includes('maiz') || lower.includes('maíz') || lower.includes('frijol') || lower.includes('granos') || lower.includes('milpa')) {
    return 'Maíz';
  }
  if (lower.includes('jitomate') || lower.includes('tomate') || lower.includes('saladette')) {
    return 'Jitomate';
  }
  if (lower.includes('sombrero') || lower.includes('palma') || lower.includes('tenate') || lower.includes('canasto')) {
    return 'Sombrero';
  }
  if (lower.includes('textil') || lower.includes('huipil') || lower.includes('telar') || lower.includes('rebozo') || lower.includes('artesania')) {
    return 'Textil';
  }

  // Fallback: capitalize properly
  if (cleaned.length > 0) {
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return 'Producto Comunitario';
}

export interface ProductProfile {
  key: 'pulque' | 'mezcal' | 'cafe' | 'miel' | 'maiz' | 'jitomate' | 'sombrero' | 'textil' | 'otro';
  displayName: string;
  categoryTag: string;
  defaultPhotoOne: string;
  defaultPhotoTwo: string;
  sampleChips: { emoji: string; label: string; title: string; url: string }[];
  field1Label: string;
  field1Default: string;
  field2Label: string;
  field2Default: string;
  field3Label: string;
  field3Default: string;
  unitLabel: string;
  defaultVolume: number;
  defaultPrice: number;
  assistiveGuideText: string;
  assistantPromptText: string;
  verificationBadge: string;
  verificationSubtitle: string;
  defectCheckText: string;
  aiEvaluatingText: string;
  aiEvaluatingSubtitle: string;
  defaultAiDiagnosis: {
    estado: string;
    calidadScore: number;
    humedadEstimada: string;
    defectosDetectados: string;
    recomendacion: string;
    analysis: string;
  };
  lotTags: string[];
}

export function getProductProfile(rawType?: string): ProductProfile {
  const sanitized = sanitizeProductName(rawType || '');
  const lower = (rawType || '').toLowerCase() + ' ' + sanitized.toLowerCase();

  // 1. Pulque / Aguamiel
  if (lower.includes('pulque') || lower.includes('aguamiel') || lower.includes('tinacal')) {
    return {
      key: 'pulque',
      displayName: 'Pulque Tradicional',
      categoryTag: 'Bebidas Tradicionales & Fermentos',
      defaultPhotoOne:
        'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
      defaultPhotoTwo:
        'https://images.unsplash.com/photo-1584285418504-0051b3d377d6?w=800&auto=format&fit=crop&q=80',
      sampleChips: [
        {
          emoji: '🏺',
          label: 'Tinacal',
          title: 'Pulque Blanco en Jícara',
          url: 'https://images.unsplash.com/photo-1584285418504-0051b3d377d6?w=800&auto=format&fit=crop&q=80'
        },
        {
          emoji: '🌱',
          label: 'Maguey',
          title: 'Maguey Pulquero Mixteco',
          url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80'
        }
      ],
      field1Label: 'Variedad de Maguey',
      field1Default: 'Maguey Manso / Salmiana Mixteco',
      field2Label: 'Método de Elaboración',
      field2Default: 'Raspado de Aguamiel y Tinacal Artesanal',
      field3Label: 'Presentación y Envase',
      field3Default: 'Garrafas de 5L y 20L de Grado Alimenticio',
      unitLabel: 'Litros',
      defaultVolume: 60,
      defaultPrice: 35,
      assistiveGuideText:
        'No se preocupe por datos técnicos ni por escribir. Toque los botones grandes para tomar fotos de su pulque o tinacal y la computadora del Tec de Tlaxiaco evaluará la pureza, textura y fermentación natural al momento.',
      assistantPromptText:
        'Para registrar tu pulque tradicional, toma 1 o 2 fotos claras del tinacal o de una jícara con la muestra para certificar su color blanco lechoso, consistencia natural y pureza de aguamiel sin químicos ni adulteración.',
      verificationBadge: '100% Aguamiel Puro',
      verificationSubtitle: 'Tinacal Mixteco',
      defectCheckText:
        'Verifica que el pulque mantenga su color blanco homogéneo, consistencia sedosa y aroma fresco sin notas agrias anómalas. 100% fermentación natural de maguey.',
      aiEvaluatingText: 'Evaluando muestra de pulque tradicional con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Revisando coloración blanco lechoso, consistencia, densidad y pureza de aguamiel',
      defaultAiDiagnosis: {
        estado: 'Pulque Tradicional de Primera Calidad (100% Puro)',
        calidadScore: 97,
        humedadEstimada: 'Fermentación Natural Activa',
        defectosDetectados: '0% adulterantes, libre de azúcar añadida',
        recomendacion: 'Lote de pulque aprobado. Listo para Pasaporte Digital y venta directa sin coyotes.',
        analysis:
          '🏺 Dictamen del Instituto Tecnológico de Tlaxiaco:\n\n• Muestra evaluada correspondiente a PULQUE ARTESANAL de la Mixteca.\n• Color blanco lechoso uniforme, consistencia sedosa propia del mucílago natural del maguey pulquero.\n• Libre de olores ácidos o amargos anómalos. Aguamiel cosechado con respeto y tradición comunitaria.\n• Apto para distribución directa en la comunidad y eventos regionales a precio justo.'
      },
      lotTags: ['100% Aguamiel', 'Tinacal Artesanal', 'Sin Adulterar', 'Maguey Manso', 'Mixteca Alta']
    };
  }

  // 2. Miel
  if (lower.includes('miel') || lower.includes('abeja')) {
    return {
      key: 'miel',
      displayName: 'Miel Virgen de Abeja',
      categoryTag: 'Miel Pura & Productos Apícolas',
      defaultPhotoOne:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZBROS9VsAw7NHM5L1DmOrsjS5_bgY5WUAX2CWi4t5af2aINWReGNta7MhraFl1vMglwJfhe52szbMFK3zJCSVdtzGS8Wxk4FAPcGg0ryh6r5SO--xklxpgEP7fXFnRFHhG28vL6IwUl3qW6cFysfAyubAB0o5lspYGGWJSMCYFqxBvweNm6W2qlz6HlxvvKjRiSwLsfBYXxK7Cv3WSoPy77qwwVCiEOx_s0cTXnQKPYnYNHr48piLg',
      defaultPhotoTwo:
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      sampleChips: [
        {
          emoji: '🍯',
          label: 'Frasco',
          title: 'Frasco Miel Pura de Campanilla',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZBROS9VsAw7NHM5L1DmOrsjS5_bgY5WUAX2CWi4t5af2aINWReGNta7MhraFl1vMglwJfhe52szbMFK3zJCSVdtzGS8Wxk4FAPcGg0ryh6r5SO--xklxpgEP7fXFnRFHhG28vL6IwUl3qW6cFysfAyubAB0o5lspYGGWJSMCYFqxBvweNm6W2qlz6HlxvvKjRiSwLsfBYXxK7Cv3WSoPy77qwwVCiEOx_s0cTXnQKPYnYNHr48piLg'
        },
        {
          emoji: '🐝',
          label: 'Panal',
          title: 'Panal de Colmena Silvestre',
          url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80'
        }
      ],
      field1Label: 'Tipo de Abeja / Floración',
      field1Default: 'Melipona nativa y Apis mellifera (Flor de campanilla)',
      field2Label: 'Origen del Apiario',
      field2Default: 'Bosque de encino y cafetal de sombra (1,800 msnm)',
      field3Label: 'Presentación de Cosecha',
      field3Default: 'Frascos de vidrio de 500g y 1kg sellados al vacío',
      unitLabel: 'Kilos / Frascos',
      defaultVolume: 35,
      defaultPrice: 190,
      assistiveGuideText:
        'No se preocupe por datos técnicos ni por escribir. Toque los botones grandes para tomar fotos de sus frascos o panal y la computadora del Tec de Tlaxiaco evaluará la pureza, color y densidad al momento.',
      assistantPromptText:
        'Para registrar tu miel virgen, toma fotos del envase a contraluz para evaluar pureza, coloración ámbar y densidad natural sin azúcar agregada.',
      verificationBadge: '100% Miel Virgen',
      verificationSubtitle: 'Apiario Comunitario',
      defectCheckText:
        'Verifica que la muestra sea miel virgen sin adulteración ni azúcares comerciales añadidos. 100% floración silvestre de la Mixteca.',
      aiEvaluatingText: 'Evaluando muestra de miel pura con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Revisando pureza botánica, densidad apícola y transparencia ámbar',
      defaultAiDiagnosis: {
        estado: 'Miel Virgen 100% Pura de Campanilla',
        calidadScore: 98,
        humedadEstimada: '18% (Norma Oficial Apícola)',
        defectosDetectados: 'Muestra cristalina, sin adulteración ni separación de fases',
        recomendacion: 'Muestra de miel certificada. Lista para comercialización directa con sello comunal.',
        analysis:
          '🍯 Dictamen del Instituto Tecnológico de Tlaxiaco:\n\n• Muestra identificada como MIEL VIRGEN SILVESTRE de la Mixteca Alta.\n• Densidad y transparencia óptimas correspondientes a floración de acahual y campanilla.\n• Libre de glucosa comercial o calentamiento perjudicial.'
      },
      lotTags: ['Sin adulteración', 'Floración silvestre', 'Pura de abeja', 'Mixteca Alta']
    };
  }

  // 3. Maíz y Granos
  if (lower.includes('maiz') || lower.includes('maíz') || lower.includes('frijol') || lower.includes('grano')) {
    return {
      key: 'maiz',
      displayName: 'Maíz Criollo Nativo',
      categoryTag: 'Granos y Semillas Criollas',
      defaultPhotoOne:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAx4jUpQopozBH8CYGA3m-Tfhex_UjwxY-4UKei8h4QhxSSmzObP9OdoONSXqi0XITG11whMMoDAOmA4bw0hSNWommPAh4F1D5ffA86lEaxrdfmf3kJ11rzljgIJllTeHX25OBP5QgRG79YiKsHHOLHgZPBf6D-AEEoGtbjiemIcHXuuXj7ZM1cyu0e6F19V9rkEX4nPjc7Dsc2w4tfJ_eHgPoPJzpuWKstIg6jmmd_4HM4ixO1PrSK4Q',
      defaultPhotoTwo:
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80',
      sampleChips: [
        {
          emoji: '🌽',
          label: 'Mazorca',
          title: 'Maíz Azul y Frijol Criollo',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx4jUpQopozBH8CYGA3m-Tfhex_UjwxY-4UKei8h4QhxSSmzObP9OdoONSXqi0XITG11whMMoDAOmA4bw0hSNWommPAh4F1D5ffA86lEaxrdfmf3kJ11rzljgIJllTeHX25OBP5QgRG79YiKsHHOLHgZPBf6D-AEEoGtbjiemIcHXuuXj7ZM1cyu0e6F19V9rkEX4nPjc7Dsc2w4tfJ_eHgPoPJzpuWKstIg6jmmd_4HM4ixO1PrSK4Q'
        },
        {
          emoji: '🧺',
          label: 'Costal',
          title: 'Grano Seco Desgranado',
          url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80'
        }
      ],
      field1Label: 'Variedad Criolla',
      field1Default: 'Maíz Azul Criollo y Frijol Negro Nativo',
      field2Label: 'Sistema de Cultivo',
      field2Default: 'Milpa Tradicional de Temporal (Sin Agroquímicos)',
      field3Label: 'Cosecha y Secado',
      field3Default: 'Secado solar en petates y costales de 50kg',
      unitLabel: 'Kilos',
      defaultVolume: 350,
      defaultPrice: 22,
      assistiveGuideText:
        'No se preocupe por datos técnicos ni por escribir. Toque los botones grandes para tomar fotos de sus mazorcas o granos y la computadora del Tec de Tlaxiaco evaluará la calidad al momento.',
      assistantPromptText:
        'Para registrar tu maíz criollo, toma fotos de la mazorca y grano limpio sin plagas ni gorgojo.',
      verificationBadge: 'Nativo Libre de OGM',
      verificationSubtitle: 'Milpa Tradicional',
      defectCheckText:
        'Verifica grano limpio sin gorgojo ni exceso de humedad. 100% autóctono libre de semillas transgénicas.',
      aiEvaluatingText: 'Evaluando muestra de maíz y granos con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Revisando pureza de grano nativo, sanidad y secado solar',
      defaultAiDiagnosis: {
        estado: 'Maíz Criollo Libre de Transgénicos',
        calidadScore: 95,
        humedadEstimada: '11.8% (Secado Solar Óptimo)',
        defectosDetectados: '0% gorgojo, grano entero y vigoroso',
        recomendacion: 'Lote de grano criollo validado para acopio y Pasaporte Digital.',
        analysis:
          '🌽 Dictamen del Instituto Tecnológico de Tlaxiaco:\n\n• Grano autóctono nativo libre de modificaciones genéticas.\n• Sanidad vegetal conforme, apto para consumo humano y conservación de semilla.'
      },
      lotTags: ['Libre de OGM', 'Milpa comunitaria', 'Grano nativo', 'Mixteca']
    };
  }

  // 4. Sombrero y Palma
  if (lower.includes('sombrero') || lower.includes('palma') || lower.includes('tenate')) {
    return {
      key: 'sombrero',
      displayName: 'Sombrero de Palma Fina',
      categoryTag: 'Tejido de Palma & Cestería',
      defaultPhotoOne:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDkQ_T-4HkMOGbUXCEL4WB3G-nckbk4y8MBXaW8RROxSTNJ7CpRum4bbwbnLCoYIsiGQouYyMcMM8EHk1DzR9XrOLMdVSb-RqJUa1aBk1p6JnwmWpKfFndzgY1CS6A1wg_wb_ZV0zrKj5zVgEEMN7Z3_m97Xx-9YigQ14ZAHHNVhaRXXI0nBiVqxjMXJ8MLMVi_gKnPRfs1qzravdO-6Uv0M8q2gl5pOM-K5nYvOyXYJ1GfD99czI_Ltw',
      defaultPhotoTwo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuADMzysc8buYnt4_J6N6fK3aJOpQwIXmK6rDrxaTI_kI2QHwPZaveZN-R-YpdSXJl83jv428Yd5_IFDtytjOVkkte6-yB6pXskpvxdiTLt3gQ4EoFSAS1SzELEaKKIDGkkY-oWJOM68851O2vaSsz92iubLVZ69vQp19ZYBqh38PsSqvSJ-_I0vXR4ZpTDTgoRrmCS2f5HnSOLlMZWIdp0uyeXZVn1fkdUzQelGLAyhj_tOsM-t8ikpbQ',
      sampleChips: [
        {
          emoji: '🤠',
          label: 'Sombrero',
          title: 'Sombrero Calentano Mixteco',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkQ_T-4HkMOGbUXCEL4WB3G-nckbk4y8MBXaW8RROxSTNJ7CpRum4bbwbnLCoYIsiGQouYyMcMM8EHk1DzR9XrOLMdVSb-RqJUa1aBk1p6JnwmWpKfFndzgY1CS6A1wg_wb_ZV0zrKj5zVgEEMN7Z3_m97Xx-9YigQ14ZAHHNVhaRXXI0nBiVqxjMXJ8MLMVi_gKnPRfs1qzravdO-6Uv0M8q2gl5pOM-K5nYvOyXYJ1GfD99czI_Ltw'
        },
        {
          emoji: '🧺',
          label: 'Tenate',
          title: 'Tenate de Palma Dulce',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADMzysc8buYnt4_J6N6fK3aJOpQwIXmK6rDrxaTI_kI2QHwPZaveZN-R-YpdSXJl83jv428Yd5_IFDtytjOVkkte6-yB6pXskpvxdiTLt3gQ4EoFSAS1SzELEaKKIDGkkY-oWJOM68851O2vaSsz92iubLVZ69vQp19ZYBqh38PsSqvSJ-_I0vXR4ZpTDTgoRrmCS2f5HnSOLlMZWIdp0uyeXZVn1fkdUzQelGLAyhj_tOsM-t8ikpbQ'
        }
      ],
      field1Label: 'Tipo de Palma',
      field1Default: 'Palma dulce de cueva de la Mixteca',
      field2Label: 'Calidad del Tejido',
      field2Default: 'Tejido fino de 4 hilos a mano',
      field3Label: 'Medida y Acabado',
      field3Default: 'Talla 57–59 cm con ribete cosido resistente',
      unitLabel: 'Piezas',
      defaultVolume: 6,
      defaultPrice: 450,
      assistiveGuideText:
        'No se preocupe por datos técnicos ni por escribir. Toque los botones grandes para tomar fotos de su sombrero o tenate y la computadora evaluará el tejido.',
      assistantPromptText:
        'Para registrar tu sombrero, toma 1 o 2 fotos de la copa y del ribete para mostrar la finura y uniformidad del tejido de palma mixteca.',
      verificationBadge: 'Palma Mixteca Auténtica',
      verificationSubtitle: 'Hecho a Mano',
      defectCheckText:
        'Verifica que no haya hebras quebradizas en la palma dulce. La finura del tejido define el precio justo directo.',
      aiEvaluatingText: 'Evaluando pieza de palma artesanal con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Analizando densidad de puntada, trama de palma y acabado',
      defaultAiDiagnosis: {
        estado: 'Tejido Fino Tradicional de Alta Durabilidad',
        calidadScore: 96,
        humedadEstimada: 'Fibra Flexible Hidratada',
        defectosDetectados: 'Trama simétrica, ribete firme sin cortes',
        recomendacion: 'Pieza artesanal aprobada para Vitrina con sello de trazabilidad.',
        analysis:
          '🤠 Dictamen de Artesanía Mixteca:\n\n• Pieza elaborada con técnica ancestral de tejido en cueva.\n• Excelente flexibilidad y protección UV garantizada.'
      },
      lotTags: ['Palma dulce', 'Hecho a mano', 'Artesanía Certificada', 'Mixteca']
    };
  }

  // 5. Textil / Telar
  if (lower.includes('textil') || lower.includes('huipil') || lower.includes('telar') || lower.includes('rebozo')) {
    return {
      key: 'textil',
      displayName: 'Textil en Telar de Cintura',
      categoryTag: 'Textiles Ancestrales & Bordados',
      defaultPhotoOne:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ch3EnTKfOPzLhJvKhO3lCcPIUAE3hVVkfX5Im0s-WO1vCixJXClxdVdruWiPRqr3ZuxAzdlH3yAof7r8gqeX3gu9Ib76kDaeSl6pOyNhXt8PsFUfn2Jc7_xqUysoYwZ8H3nJ1yfgy2pOSZt3H-5XCr1VJuyIa-sigPM_rzR4gUCUs1ekNF4IJND5FqstPVswevuKVBQzWO0uds-_-hVuY5mZRW5VnjA9Ovw00rmRFDxpZZ5yIbtMBA',
      defaultPhotoTwo:
        'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80',
      sampleChips: [
        {
          emoji: '🧵',
          label: 'Huipil',
          title: 'Huipil Tacuate en Telar',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ch3EnTKfOPzLhJvKhO3lCcPIUAE3hVVkfX5Im0s-WO1vCixJXClxdVdruWiPRqr3ZuxAzdlH3yAof7r8gqeX3gu9Ib76kDaeSl6pOyNhXt8PsFUfn2Jc7_xqUysoYwZ8H3nJ1yfgy2pOSZt3H-5XCr1VJuyIa-sigPM_rzR4gUCUs1ekNF4IJND5FqstPVswevuKVBQzWO0uds-_-hVuY5mZRW5VnjA9Ovw00rmRFDxpZZ5yIbtMBA'
        },
        {
          emoji: '🪡',
          label: 'Telar',
          title: 'Urdido en Telar de Cintura',
          url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=80'
        }
      ],
      field1Label: 'Técnica de Tejido',
      field1Default: 'Telar de cintura prehispánico con urdimbre fina',
      field2Label: 'Materiales e Hilado',
      field2Default: 'Algodón nativo coyuchi y tintes de grana cochinilla',
      field3Label: 'Tiempo de Elaboración',
      field3Default: '3 semanas (Pieza única ceremonial de autor)',
      unitLabel: 'Piezas',
      defaultVolume: 2,
      defaultPrice: 1850,
      assistiveGuideText:
        'No se preocupe por escribir. Toque los botones grandes para fotografiar el telar y los bordados de su pieza textil.',
      assistantPromptText:
        'Para registrar tu pieza textil, toma 1 o 2 fotos claras donde se aprecie la trama del telar, los bordados y los acabados para certificar su origen.',
      verificationBadge: 'Autenticidad Tacuate',
      verificationSubtitle: 'Telar de Cintura',
      defectCheckText:
        'Verifica que la trama esté uniforme y los bordados firmes. El sello de origen protege tus regalías contra el plagio.',
      aiEvaluatingText: 'Evaluando pieza textil artesanal con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Analizando urdimbre, tinte natural y motivos iconográficos',
      defaultAiDiagnosis: {
        estado: 'Textil Auténtico de Telar Tradicional',
        calidadScore: 99,
        humedadEstimada: 'Hilos Naturales de Algodón',
        defectosDetectados: 'Urdido perfecto, tintes vegetales firmes',
        recomendacion: 'Certificación de autor otorgada con 10% de regalías inmutables.',
        analysis:
          '🧵 Dictamen de Iconografía y Técnica Textil:\n\n• Pieza auténtica mixteca en telar de cintura con tinte de grana cochinilla.\n• Alta valoración en mercado de comercio justo internacional.'
      },
      lotTags: ['Telar de cintura', 'Grana cochinilla', 'Artesanía Certificada', 'Mixteca Alta']
    };
  }

  // 6. Jitomate / Hortalizas
  if (lower.includes('jitomate') || lower.includes('tomate')) {
    return {
      key: 'jitomate',
      displayName: 'Jitomate Agroecológico',
      categoryTag: 'Hortalizas Agroecológicas Frescas',
      defaultPhotoOne:
        'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80',
      defaultPhotoTwo:
        'https://images.unsplash.com/photo-1546470427-227c7369a9b2?w=800&auto=format&fit=crop&q=80',
      sampleChips: [
        {
          emoji: '🍅',
          label: 'Campo',
          title: 'Jitomate en Mata Agroecológico',
          url: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80'
        },
        {
          emoji: '📦',
          label: 'Caja',
          title: 'Caja de Jitomate Saladette',
          url: 'https://images.unsplash.com/photo-1546470427-227c7369a9b2?w=800&auto=format&fit=crop&q=80'
        }
      ],
      field1Label: 'Variedad de Jitomate',
      field1Default: 'Saladette Criollo de Altura',
      field2Label: 'Tipo de Cultivo',
      field2Default: 'Invernadero agroecológico con riego limpio',
      field3Label: 'Presentación',
      field3Default: 'Cajas de 20 kg seleccionadas y limpias',
      unitLabel: 'Kilos',
      defaultVolume: 180,
      defaultPrice: 32,
      assistiveGuideText:
        'No se preocupe por datos técnicos. Toque los botones grandes para tomar fotos de sus cajas o matas de jitomate.',
      assistantPromptText:
        'Para registrar tu jitomate, toma fotos de los frutos limpios y con coloración uniforme para verificar su frescura y sanidad.',
      verificationBadge: 'Libre de Pesticidas',
      verificationSubtitle: 'Agroecológico Mixteco',
      defectCheckText:
        'Verifica que los frutos estén firmes, sin picaduras ni manchas. 100% fresco de invernadero campesino.',
      aiEvaluatingText: 'Evaluando muestra hortícola con Inteligencia Artificial...',
      aiEvaluatingSubtitle: 'Revisando firmeza, maduración y sanidad vegetal',
      defaultAiDiagnosis: {
        estado: 'Hortaliza Fresca de Primera Calidad',
        calidadScore: 94,
        humedadEstimada: 'Firmeza Óptima de Cosecha',
        defectosDetectados: 'Sin presencia de plagas ni residuos químicos',
        recomendacion: 'Cosecha aprobada para comercialización en mercados locales.',
        analysis:
          '🍅 Dictamen Agrícola:\n\n• Muestra de jitomate saladette con excelente turgencia y maduración homogénea.\n• Proceso libre de pesticidas sintéticos comprobado.'
      },
      lotTags: ['Libre de pesticidas', 'Cosecha fresca', 'Riego limpio', 'Mixteca Alta']
    };
  }

  // 7. Default: Café Pergamino / Especialidad
  return {
    key: 'cafe',
    displayName: 'Café Pergamino de Altura',
    categoryTag: 'Café de Especialidad & Altura',
    defaultPhotoOne:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqal830zp_JFXZ3K1_Rr7bbte3jwc_lJwXPf-TxcAcEg2raHlxCK89btRwH4uwzhF2fLfO_VmIZsA4gTepWeTnnrV6vLEcToMhwFBkbarbh5uwCol3bpetHUY8kzwnxJxVdtmqGOZThqZnec77V9oKnLql4l29d8XAJan9Acm66pPUlaO6eAOQymtE0KneK_qV0L0sOeux4_wReZWm6lmbXiAdjKdpv5FSyJqzx_42kMz_U4T3L2q_g',
    defaultPhotoTwo:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    sampleChips: [
      {
        emoji: '☕',
        label: 'Pergamino',
        title: 'Café Pergamino Seco de Altura',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqal830zp_JFXZ3K1_Rr7bbte3jwc_lJwXPf-TxcAcEg2raHlxCK89btRwH4uwzhF2fLfO_VmIZsA4gTepWeTnnrV6vLEcToMhwFBkbarbh5uwCol3bpetHUY8kzwnxJxVdtmqGOZThqZnec77V9oKnLql4l29d8XAJan9Acm66pPUlaO6eAOQymtE0KneK_qV0L0sOeux4_wReZWm6lmbXiAdjKdpv5FSyJqzx_42kMz_U4T3L2q_g'
      },
      {
        emoji: '🌱',
        label: 'Cereza',
        title: 'Cerezas Maduras de Cafetal',
        url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
      }
    ],
    field1Label: 'Variedad de Café',
    field1Default: 'Pluma Hidalgo / Typica Arábica',
    field2Label: 'Altitud de Parcela',
    field2Default: '1,650 msnm (Estricta Altura)',
    field3Label: 'Proceso de Beneficiado',
    field3Default: 'Lavado Tradicional y Secado Solar en Zarandas',
    unitLabel: 'Kilos',
    defaultVolume: 60,
    defaultPrice: 85,
    assistiveGuideText:
      'No se preocupe por datos técnicos ni por escribir. Toque los botones grandes para tomar fotos de sus granos y la computadora del Tec de Tlaxiaco evaluará la calidad al momento.',
    assistantPromptText:
      'Para registrar tu café, sube 1 o 2 fotos claras del grano verde pergamino después del beneficio, antes de tueste, para revisar defectos (grano negro, agrio, broca).',
    verificationBadge: 'Calidad Comunitaria',
    verificationSubtitle: 'NMX-F-083 Conforme',
    defectCheckText:
      'Verifica que no haya grano agrio, negro o broca visible. Esto acelera el cálculo del precio base comunal.',
    aiEvaluatingText: 'Evaluando muestra de café con Inteligencia Artificial...',
    aiEvaluatingSubtitle: 'Revisando coloración de grano, porcentaje de humedad y presencia de broca',
    defaultAiDiagnosis: {
      estado: 'Pergamino Lavado Grado Exportación',
      calidadScore: 92,
      humedadEstimada: '11.4%',
      defectosDetectados: '0% broca aparente, color uniforme',
      recomendacion: 'Apto para recepción y emisión de Pasaporte Digital.',
      analysis:
        '• Muestra visual de grano pergamino seco con excelente sanidad vegetal.\n• Sin presencia de broca (Hypothenemus hampei) ni mancha de humedad.\n• Secado uniforme adecuado para el acopio en el Tec.'
    },
    lotTags: ['Cero broca', 'Grano parejo', 'Fermentación en frío', 'NMX-F-083']
  };
}
