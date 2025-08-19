// 💒 Wedding Data - Datos centralizados de la boda
export const weddingData = {
  // 👰🤵 Información de la pareja
  couple: {
    bride: "Itzel",
    groom: "Carlos",
    initials: "I & C",
    quote: "Te elijo, hoy, mañana y siempre. En cada paso, en cada sueño, en cada latido...",
    mainImage: "/images/novios2.png",
    sunsetImage: "/images/fondoCampo1.jpg"
  },

  // 👨‍👩‍👧‍👦 Información de los padres
  parents: {
    bride: {
      mother: "Vanessa Corpus",
      father: "Carlos Aranda"
    },
    groom: {
      mother: "Karen Corpus",
      father: "Hugo Lizagarra"
    },
    message: "A nuestros queridos padres: gracias por darnos la vida, cuidarnos, guiarnos y prepararnos para este momento tan especial. Su amor y apoyo son la base sobre la que construiremos nuestro hogar."
  },

  // 📅 Información de fecha y evento
  wedding: {
    date: "2025-09-13T19:00:00",
    dayName: "DOMINGO",
    day: "13",
    month: "SEPTIEMBRE",
    year: "2025",
    title: "Nos Casamos"
  },

  // ⛪ Información de la ceremonia
  ceremony: {
    time: "7:00 p.m",
    name: "Monarcas Jardin de Eventos",
    address: "Calz de los Monarcas 140, Villas del Rey Segunda Etapa, 21354 Mexicali, B.C.",
    type: "Ceremonia",
    ubiLink: "https://maps.app.goo.gl/VuchGrZ6ySK6k25s5"
  },

  // 🎉 Información de la recepción
  reception: {
    time: "7:00 pm",
    name: "Salón el Recuerdo",
    address: "Blvd. San Felipe 2615-A, Zona Sin Asignación de Nombre de Col 15, Rancho Colorado, 72040 Heroica Puebla de Zaragoza, Pue."
  },

  // ⏰ Timeline del evento
  timeline: [
    {
      id: "vals",
      name: "Vals",
      time: "8:00",
      icon: "V",
      color: "primary"
    },
    {
      id: "brindis",
      name: "Brindis",
      time: "9:00",
      icon: "B",
      color: "secondary"
    },
    {
      id: "banquete",
      name: "Banquete",
      time: "10:00",
      icon: "B",
      color: "primary"
    }
  ],

  // 👗 Código de vestimenta
  dressCode: {
    type: "Formal",
    note: "Se reserva el color blanco para la novia",
    confirmationMessage: "¡Quiero compartir este momento tan esperado contigo! Por favor ayúdanos confirmando tu asistencia"
  },

  // 🎁 Información de regalos
  gifts: {
    type: "Lluvia de sobres",
    message: "Tu presencia es lo más importante, pero si deseas hacernos un obsequio te agradeceríamos que fuera en lluvia de sobre."
  },

  // 📸 Galería de imágenes
  gallery: {
    images: [
      "/images/gallery-1.png",
      "/images/gallery-2.png",
      "/images/couple-sunset.png"
    ]
  },

  // 🏢 Información de la agencia
  agency: {
    name: "Agencia Online",
    message: "Te esperamos"
  },

  // 💬 Mensajes y frases
  messages: {
    timelineQuote: "Un sí que cambiará nuestras vidas para siempre.",
    dateMessage: "Un amor verdadero merece ser celebrado, acompáñanos a brindar por nuestra historia.",
    countdownTitle: "TAN SÓLO FALTAN"
  },

  // 🎨 Configuraciones de estilo y fondo
  styling: {
    heroSection: {
      backgroundImage: "/images/boda3.png",
      // Opacidad del overlay (0 = transparente, 1 = opaco)
      overlayOpacity: 0.95,
      // Tipo de overlay: 'solid', 'gradient-top', 'gradient-bottom', 'gradient-radial'
      overlayType: "gradient-radial",
      // Color del overlay (usar formato CSS)
      overlayColor: "rgba(255, 255, 255, 1)", // Blanco
      // Color secundario para degradados
      overlayColorSecondary: "rgba(255, 255, 255, 0)", // Transparente
      // Configuración de degradado personalizada
      gradientDirection: "circle at center" // Para radial: 'circle at center', para lineal: 'to bottom'
    },
    dateSection: {
      backgroundImage: "/images/mesaFlores1.jpg",
      overlayOpacity: 0.95,
      overlayType: "gradient-radial",
      overlayColor: "rgba(255, 255, 255, 1)",
      overlayColorSecondary: "rgba(255, 255, 255, 0)",
      gradientDirection: "circle at center"
    },
    ceremonySection: {
      backgroundImage: "/images/boda1.png",
      overlayOpacity: 0.95,
      overlayType: "gradient-radial",
      overlayColor: "rgba(255, 255, 255, 1)",
      overlayColorSecondary: "rgba(255, 255, 255, 0)",
      gradientDirection: "circle at center"
    }
  },

  // 🎵 Configuración de audio
  audio: {
    src: "/audio/musica.mp3",
    title: "Música de Fondo de Boda",
    startTime: 13,        // 0:13 - Donde empieza la letra
    endTime: 85,          // 1:25 - Final del segmento
    volume: 0.6,          // 60% de volumen
    loop: true,           // Loop en el rango especificado
    preload: "metadata",  // Precargar solo metadatos
    enabled: true,        // Control habilitado
    position: {
      desktop: { bottom: "2rem", right: "2rem" },
      mobile: { bottom: "1rem", right: "1rem" }
    },
    styling: {
      size: {
        desktop: "60px",
        mobile: "50px"
      },
      colors: {
        primary: "var(--secondary)",  // Dorado
        hover: "var(--secondary)/90"
      }
    }
  }
}
