# SportChain Builders

Plataforma Web3 para invertir y ser dueño de instalaciones deportivas en toda Latinoamérica. SportChain permite que cualquier persona participe en el desarrollo de infraestructura deportiva con inversiones accesibles y obtenga ganancias mediante la operación de complejos deportivos.

## 🎯 Descripción

SportChain es una plataforma de inversión descentralizada que tokeniza instalaciones deportivas, permitiendo a inversores de todos los tamaños participar en proyectos de infraestructura deportiva como complejos de pádel, fútbol, tenis y otros deportes. Los inversores pueden recibir ganancias mediante la operación diaria de estas instalaciones.

## 🚀 Tecnologías

Este proyecto está construido con:

- **[Next.js 16.0.8](https://nextjs.org/)** - Framework de React con App Router
- **[React 19.2.1](https://react.dev/)** - Biblioteca de UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[Font Awesome](https://fontawesome.com/)** - Iconos
- **ESLint** - Linter para código JavaScript/TypeScript

## 📁 Estructura del Proyecto

```
app/
├── components/          # Componentes reutilizables
│   ├── Footer.tsx      # Pie de página
│   ├── Navbar.tsx      # Barra de navegación
│   ├── InvestmentForm.tsx  # Formulario de inversión
│   └── home/           # Componentes de la página principal
│       ├── Hero.tsx
│       ├── MisionVision.tsx
│       ├── Roadmap.tsx
│       └── Community.tsx
├── demo/               # Dashboard de inversiones (demo)
│   └── page.tsx
├── eventos/            # Página de eventos y torneos
│   └── page.tsx
├── proyectos/          # Páginas de proyectos de inversión
│   ├── page.tsx        # Listado de proyectos
│   └── padel_buenos_aires/
│       └── page.tsx    # Detalle del proyecto de pádel
├── layout.tsx          # Layout principal
├── page.tsx            # Página de inicio
└── globals.css         # Estilos globales y variables CSS
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd sportchain_builders
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📄 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## ✨ Características Principales

### 🏠 Página de Inicio
- Hero section con información principal
- Misión y visión de SportChain
- Roadmap del proyecto
- Sección de comunidad

### 📊 Proyectos de Inversión
- Listado de proyectos disponibles
- Detalles de cada proyecto (rendimiento, ubicación, estado)
- Progreso de financiación en tiempo real
- Formulario de inversión

### 🎾 Eventos
- Historial de torneos y eventos organizados
- Información de ganadores y fechas
- Galería de eventos pasados

### 💼 Dashboard de Inversiones (Demo)
- Métricas de inversión:
  - Total invertido
  - Pagos recibidos
  - Pagos por cobrar
  - Capital recuperado
- Tabla de inversiones activas
- Historial de transacciones con enlaces a blockchain

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño consistente con:

- **Modo claro y oscuro** - Soporte automático basado en `prefers-color-scheme`
- **Variables CSS** - Colores y estilos centralizados
- **Paleta de colores**:
  - Azul marino (`--color-primary`) - Color principal de marca
  - Dorado (`--color-accent-gold`) - Acentos y CTAs
  - Superficies y fondos adaptativos

## 🌐 Páginas Disponibles

- `/` - Página de inicio
- `/proyectos` - Listado de proyectos de inversión
- `/proyectos/padel_buenos_aires` - Detalle del proyecto de pádel en Buenos Aires
- `/eventos` - Eventos y torneos organizados
- `/demo` - Dashboard de inversiones (versión demo)

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- Dispositivos móviles
- Tablets
- Escritorio

## 🔗 Integraciones

- API de SportChain (`https://sportchain.itzimi.com/api/info`) - Para datos de proyectos en tiempo real
- Enlaces a exploradores de blockchain (Etherscan) - Para verificar transacciones

## 🚧 Estado del Proyecto

Este es un proyecto en desarrollo activo. Actualmente incluye:
- ✅ Frontend completo con todas las páginas principales
- ✅ Sistema de diseño responsive
- ✅ Dashboard de inversiones (demo con datos mock)
- 🔄 Integración con blockchain (en desarrollo)
- 🔄 Sistema de autenticación (pendiente)

## 📝 Licencia

Este proyecto es privado y propiedad de SportChain.

## 🤝 Contribuciones

Este es un proyecto privado. Para más información, contacta al equipo de SportChain.

---

**SportChain** - Construyendo el futuro de la infraestructura deportiva en Latinoamérica 🏆
