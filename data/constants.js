// 📞 Constants - Configuraciones y constantes del proyecto

// 📱 Números de teléfono
export const PHONE_NUMBERS = {
  rsvp: "1234567890" // Reemplazar con el número real de WhatsApp
}

// 📍 Ubicaciones para Google Maps
export const LOCATIONS = {
  ceremony: "Catedral de Puebla, C. 16 de Septiembre s/n, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Pue.",
  reception: "Salón el Recuerdo, Blvd. San Felipe 2615-A, Zona Sin Asignación de Nombre de Col 15, Rancho Colorado, 72040 Heroica Puebla de Zaragoza, Pue."
}

// 💬 Templates de mensajes para WhatsApp
export const WHATSAPP_MESSAGES = {
  rsvp: "¡Hola! Confirmo mi asistencia a la boda de Alejandra y Gerardo el 28 de diciembre de 2025."
}

// 🎨 Configuraciones de tema
export const THEME_CONFIG = {
  colors: {
    primary: "sage-green", // Verde salvia
    secondary: "gold", // Dorado
    background: "white"
  },
  fonts: {
    script: "Playfair Display",
    body: "Open Sans"
  }
}

// 📱 Configuraciones de navegación
export const NAVIGATION_SECTIONS = [
  { id: "home", label: "Inicio" },
  { id: "parents", label: "Padres" },
  { id: "date", label: "Fecha" },
  { id: "ceremony", label: "Ceremonia" },
  { id: "reception", label: "Recepción" },
  { id: "timeline", label: "Cronograma" },
  { id: "dresscode", label: "Vestimenta" },
  { id: "gifts", label: "Regalos" },
  { id: "gallery", label: "Galería" }
]

// 🖼️ Rutas de imágenes
export const IMAGE_PATHS = {
  couple: {
    main: "/images/couple-main.png",
    sunset: "/images/couple-sunset.png"
  },
  decorative: {
    floralBorder: "/images/floral-border.png",
    celebration: "/images/celebration.png"
  },
  gallery: [
    "/images/gallery-1.png",
    "/images/gallery-2.png"
  ]
}

// ⚙️ Configuraciones de la aplicación
export const APP_CONFIG = {
  title: "Alejandra & Gerardo - Invitación de Boda",
  description: "Te invitamos a celebrar nuestro amor - 28 de Diciembre 2025",
  language: "es"
}
