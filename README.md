# ArtDao Website / Sitio Web ArtDao

**Artists helping artists** - Plataforma web para exposiciones y proyectos de arte digital.
**Artists helping artists** - Web platform for digital art exhibitions and projects.

## 🏗️ Arquitectura Técnica / Technical Architecture

### Stack Tecnológico / Tech Stack
- **Framework:** SvelteKit (Svelte 4)
- **Lenguaje / Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Gestión de paquetes / Package Manager:** Yarn
- **Linting:** ESLint + Prettier

### Estructura del Proyecto / Project Structure
```
src/
├── routes/                    # Páginas de SvelteKit (rutas) / SvelteKit pages (routes)
│   ├── +layout.svelte        # Layout principal / Main layout
│   ├── +page.svelte          # Página de inicio / Home page
│   └── [project-name]/       # Carpeta por proyecto / Project folder
│       ├── +page.svelte      # Página del proyecto / Project page
│       └── store.ts          # Store local del proyecto / Project local store
├── lib/                      # Componentes y utilidades / Components and utilities
│   ├── components/           # Componentes principales / Main components
│   ├── elements/             # Elementos reutilizables / Reusable elements
│   └── assets/               # Imágenes y recursos / Images and resources
├── data/                     # Datos de proyectos y contenido / Project data and content
│   ├── Projects/             # Datos específicos por proyecto / Project-specific data
│   └── [otros archivos]      # Datos globales / Global data
├── constants/                # Enums y constantes / Enums and constants
├── utils/                    # Utilidades y helpers / Utilities and helpers
└── style.css                 # Estilos globales / Global styles
```

## 📁 Estructura de Carpetas / Folder Structure

### `/src/routes/`
Contiene las páginas de SvelteKit. Cada proyecto tiene su propia carpeta con:
Contains SvelteKit pages. Each project has its own folder with:
- `+layout.svelte` - Layout del proyecto, incluye la barra de navegación específica del proyecto / Project layout, includes the project-specific navigation bar
- `+page.svelte` - Página principal del proyecto / Project main page
- `store.ts` - Store local para navegación del proyecto / Local store for project navigation

### `/src/lib/components/`
Componentes principales que se usan en las páginas de proyectos:
Main components used in project pages:

#### **ProjectIntro**
- **Propósito / Purpose:** Sección de introducción del proyecto / Project introduction section
- **Archivos / Files:** `ProjectIntro.svelte`, `interfaces.ts`
- **Props:**
  - `project: IProject` - Datos del proyecto / Project data
  - `textColor: 'black' | 'white'` - Color del texto / Text color
  - `bgImage: string` - Imagen de fondo desktop / Desktop background image
  - `bgImageMobile: string` - Imagen de fondo mobile / Mobile background image

#### **ProjectAbout**
- **Propósito / Purpose:** Sección de información sobre el proyecto / Project information section
- **Archivos / Files:** `ProjectAbout.svelte`
- **Props:**
  - `aboutItem: IAboutItem` - Datos de la sección / Section data
  - `aboutImages: string[]` - Array de imágenes / Image array
  - `route: string` - ID de la sección / Section ID
  - `colorVariant: EColorVariant` - Variante de color / Color variant

#### **ProjectAboutDropdown**
- **Propósito / Purpose:** Galería de elementos con información desplegable / Gallery with dropdown information
- **Archivos / Files:** `ProjectAboutDropdown.svelte`
- **Props:**
  - `images: string[]` - Array de imágenes / Image array
  - `aboutDropdownItems: IAboutDropdown[]` - Elementos de la galería / Gallery items
  - `route: string` - ID de la sección / Section ID

#### **ProjectVideo**
- **Propósito / Purpose:** Sección de videos del proyecto con navegación / Project video section with navigation
- **Archivos / Files:** `ProjectVideo.svelte`
- **Props:**
  - `videoProjects: IVideoProject[]` - Array de videos / Video array
  - `route: string` - ID de la sección / Section ID

#### **ProjectArtworkGrid**
- **Propósito / Purpose:** Galería de obras de arte con scroll horizontal / Artwork gallery with horizontal scroll
- **Archivos / Files:** `ProjectArtworkGrid.svelte`
- **Props:**
  - `galleryImages: IGalleryImage[]` - Array de imágenes de la galería / Gallery image array
  - `showDetails: boolean` - Mostrar detalles de las obras (por defecto: false) / Show artwork details (default: false)

#### **ProjectPolaroids**
- **Propósito / Purpose:** Sección de polaroids con citas / Polaroid section with quotes
- **Archivos / Files:** `ProjectPolaroids.svelte`
- **Props:**
  - `images: IPolaroidImage[]` - Array de polaroids / Polaroid array
  - `polaroidsTypes: EPolaroidType[]` - Tipos de polaroids / Polaroid types
  - `viewImageFit: 'contain' | 'cover'` - Ajuste de imagen / Image fit
  - `route: string` - ID de la sección / Section ID

#### **ProjectAudioFiles**
- **Propósito / Purpose:** Reproductor de archivos de audio / Audio file player
- **Archivos / Files:** `ProjectAudioFiles.svelte`
- **Props:**
  - `audioItems: IAudioItem[]` - Array de archivos de audio / Audio file array
  - `title: string` - Título opcional de la sección / Optional section title
  - `route: string` - ID de la sección / Section ID

#### **ProjectInterview**
- **Propósito / Purpose:** Sección de entrevistas con preguntas y respuestas / Interview section with questions and answers
- **Archivos / Files:** `ProjectInterview.svelte`
- **Props:**
  - `questions: IQuestion[]` - Preguntas y respuestas / Questions and answers
  - `filteredQuestions: IFilteredQuestions[]` - Preguntas filtradas / Filtered questions
  - `bgImage: string` - Imagen de fondo / Background image
  - `route: string` - ID de la sección / Section ID
  - `isCover: boolean` - Si es página de portada / If it's a cover page

#### **ChatInterview**
Para secciones de chat/entrevista con múltiples personajes, avatares y fondo personalizado. / For chat/interview sections with multiple characters, avatars, and custom background.

- **Propósito / Purpose:** Simula conversaciones tipo entrevista con preguntas y respuestas, mostrando los nombres de los personajes si hay más de uno.
- **Archivos / Files:** `ChatInterview.svelte`
- **Props:**
  - `data: ChatInterviewData` - Objeto con personajes, mensajes y fondo / Object with characters, messages, and background
- **Notas / Notes:**
  - Se puede usar múltiples veces en una misma página / Can be used multiple times on the same page
  - El campo `background` es obligatorio / The `background` field is required
  - El campo `images` es opcional (usar array vacío si no hay imágenes) / The `images` field is optional (use empty array if no images)
  - Cada proyecto puede tener múltiples objetos `ChatInterviewData` en el mismo archivo (ej: `chatInterviewData`, `chatInterviewData2`) / Each project can have multiple `ChatInterviewData` objects in the same file (e.g., `chatInterviewData`, `chatInterviewData2`)

---

#### **ProjectChatInterview.ts**
```typescript
export interface Character {
  id: string;
  name: string;
  avatar: string;
  type: 'question' | 'answer';
}

export interface ChatMessage {
  characterId: string;
  content: string;
}

export interface ChatInterviewData {
  characters: Character[];
  messages: ChatMessage[];
  images: string[]; // opcional, para imágenes entre mensajes
  background: string; // imagen de fondo
}

export const chatInterviewData: ChatInterviewData = {
  characters: [
    {
      id: 'tomas-jones',
      name: 'Tomas Jones',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'artist1',
      name: 'Artist Name',
      avatar: '/media/project/interview/pfp1.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'tomas-jones',
      content: 'What themes drive your creative process?'
    },
    {
      characterId: 'artist1',
      content: 'In this particular series of works everything is centered on the connection between body and technology...'
    }
    // ... more messages
  ],
  images: [], // Opcional: array vacío si no hay imágenes / Optional: empty array if no images
  background: '/media/project/interview/interview-bg.webp' // Obligatorio / Required
};

// Múltiples entrevistas en el mismo archivo / Multiple interviews in the same file
export const chatInterviewData2: ChatInterviewData = {
  // ... segunda entrevista / second interview
};
```

**Uso en +page.svelte / Usage in +page.svelte:**
```svelte
<!-- Primera entrevista / First interview -->
<div>
  <ChatInterview data={chatInterviewData} />
</div>

<!-- Segunda entrevista / Second interview -->
<div>
  <ChatInterview data={chatInterviewData2} />
</div>
```

#### **HomeThumbnails**
- **Propósito / Purpose:** Muestra las miniaturas de proyectos en la página de inicio con scroll vertical / Displays project thumbnails on the home page with vertical scroll
- **Archivos / Files:** `HomeThumbnails.svelte`
- **Props:**
  - `projects: Project[]` - Array de proyectos desde `constants/projects.ts` / Array of projects from `constants/projects.ts`
- **Notas / Notes:**
  - Usa `thumbnailPath` que es un array, pero muestra solo el primer elemento / Uses `thumbnailPath` which is an array, but displays only the first element
  - Implementa scroll con snap para navegación fluida / Implements snap scroll for smooth navigation

#### **HomeButtons**
- **Propósito / Purpose:** Botones laterales que muestran miniaturas de proyectos y permiten navegación rápida / Side buttons that display project thumbnails and allow quick navigation
- **Archivos / Files:** `HomeButtons.svelte`
- **Props:**
  - `projects: Project[]` - Array de proyectos / Array of projects
  - `selectedIndex: number` - Índice del proyecto seleccionado / Selected project index
- **Notas / Notes:**
  - Sincronizado con `HomeThumbnails` mediante `IntersectionObserver` / Synchronized with `HomeThumbnails` via `IntersectionObserver`
  - Usa `thumbnailPath[0]` para mostrar la primera imagen / Uses `thumbnailPath[0]` to display the first image

#### **Home**
- **Propósito / Purpose:** Componente principal de la página de inicio / Main home page component
- **Archivos / Files:** `Home.svelte`
- **Estructura / Structure:**
  - Integra `HomeThumbnails`, `HomeButtons`, `TopBarDesktop`, `TopBarMobile`, `Metaball`, `Info`
  - Usa `IntersectionObserver` para sincronizar scroll entre componentes / Uses `IntersectionObserver` to synchronize scroll between components

#### **Componentes de Navegación / Navigation Components**
- **TopBarDesktop** - Barra superior para desktop / Top bar for desktop
- **TopBarMobile** - Barra superior para mobile / Top bar for mobile
- **HomeMenu** - Menú principal / Main menu
- **HomeMobileMenu** - Menú principal mobile / Main mobile menu

#### **Componentes Especializados / Specialized Components**
- **Metaball** - Componente interactivo / Interactive component
- **Info** - Información de contacto / Contact information
- **Popup** - Ventanas emergentes / Popup windows

### `/src/lib/elements/`
Elementos reutilizables más pequeños:
Smaller reusable elements:

#### **About**
- **Propósito / Purpose:** Componente de texto con título y contenido / Text component with title and content
- **Props:** `aboutItem: IAboutItem`, `colorVariant: EColorVariant`

#### **ImgNavigator**
- **Propósito / Purpose:** Navegador de imágenes con opciones de dropdown / Image navigator with dropdown options
- **Props:** `images: string[]`, `variant: ESizeVariant`, `aboutDropdownItems?: IAboutDropdown[]`

#### **SectionContainer**
- **Propósito / Purpose:** Contenedor base para secciones / Base container for sections
- **Props:** `colorVariant`, `hasPadding`, `isOverflow`, `bgImage?`

#### **VideoCard**
- **Propósito / Purpose:** Tarjeta de video con controles de navegación / Video card with navigation controls
- **Props:** `videoProject: IVideoProject`, `handleNextButton`, `handlePrevButton`, `isNextButtonDisabled`, `isPrevButtonDisabled`, `videoProjects`, `showButtons`

#### **ArtworkContainer**
- **Propósito / Purpose:** Contenedor para obras de arte / Container for artworks
- **Props:** `galleryImage: IGalleryImage`, `showDetails`

#### **Polaroids**
- **Propósito / Purpose:** Componente de polaroids / Polaroid component
- **Props:** `images: IPolaroidImage[]`, `polaroidsTypes: EPolaroidType[]`, `viewImageFit`

#### **AudioFile**
- **Propósito / Purpose:** Reproductor de archivo de audio individual / Individual audio file player
- **Props:** `audioItem: IAudioItem`, `index`, `audioItems`

#### **AudioFilePreview**
- **Propósito / Purpose:** Vista previa del reproductor de audio / Audio player preview
- **Props:** `audioItems: IAudioItem[]`, `handlePreviousTrack`, `handleNextTrack`, `index`

#### **InterviewCard**
- **Propósito / Purpose:** Tarjeta de entrevista con preguntas y respuestas / Interview card with questions and answers
- **Props:** `questions: IQuestion[]`

#### **InterviewCardFilters**
- **Propósito / Purpose:** Filtros para entrevistas / Interview filters
- **Props:** `questions: IFilteredQuestions[]`

#### **NavBar**
- **Propósito / Purpose:** Barra de navegación / Navigation bar
- **Props:** `navItems: INavBarItem[]`
- **Notas / Notes:**
  - Soporta la propiedad `shortText` para títulos largos que se cortan en el navbar / Supports `shortText` property for long titles that get cut off in the navbar
  - Si `shortText` está definido, se muestra en lugar de `text` / If `shortText` is defined, it's displayed instead of `text`

#### **Footer**
- **Propósito / Purpose:** Pie de página con referencias a otros proyectos / Footer with references to other projects
- **Props:** `project: EProjects`

#### **HomeIcon**
- **Propósito / Purpose:** Icono de regreso al inicio / Home icon
- **Props:** Ninguna / None

#### **Elementos de Inicio / Home Elements**
- **HomeLogo** - Logo principal / Main logo
- **HomeButton** - Botón de inicio / Home button
- **HomeDrop** - Dropdown de inicio / Home dropdown
- **HomeDropMenu** - Menú de dropdown / Dropdown menu
- **HomeDropMenuDetails** - Detalles del menú / Menu details
- **HomeTop** - Sección superior / Top section
- **HomeSocial** - Redes sociales / Social media
- **HomeMap** - Mapa de eventos / Event map

#### **Elementos de Eventos / Event Elements**
- **EventData** - Datos de eventos / Event data
- **EventDataMobile** - Datos de eventos mobile / Mobile event data
- **City** - Ciudad / City
- **CityMobile** - Ciudad mobile / Mobile city

#### **Elementos de Imágenes / Image Elements**
- **HomeImgRectH** - Imagen rectangular horizontal / Horizontal rectangular image
- **HomeImgRectV** - Imagen rectangular vertical / Vertical rectangular image
- **HomeImgSquare** - Imagen cuadrada / Square image
- **PolaroidRectangle** - Polaroid rectangular / Rectangular polaroid
- **PolaroidSquare** - Polaroid cuadrado / Square polaroid
- **PolaroidVertical** - Polaroid vertical / Vertical polaroid

#### **Elementos de Contenido / Content Elements**
- **TextCard** - Tarjeta de texto / Text card
- **VideoPlayer** - Reproductor de video / Video player
- **AboutCard** - Tarjeta de información / Information card
- **AboutDropdown** - Dropdown de información / Information dropdown

#### **Elementos de Interacción / Interaction Elements**
- **Popups** - Ventanas emergentes / Popup windows
- **HomeNewsletter** - Newsletter / Newsletter

### `/src/data/Projects/[ProjectName]/`
Datos específicos de cada proyecto:
Project-specific data:

#### **Estructura Consolidada de Datos / Consolidated Data Structure**

**Importante:** Para mantener el código limpio y mantenible, cuando un proyecto tiene múltiples secciones del mismo tipo, estas deben consolidarse en un solo archivo por tipo de dato.

**Important:** To keep the code clean and maintainable, when a project has multiple sections of the same type, these should be consolidated into a single file per data type.

**Ejemplo / Example:**
- ✅ **Correcto / Correct:** `ProjectAbout.ts` con múltiples secciones / with multiple sections
- ❌ **Incorrecto / Incorrect:** `ProjectAbout1.ts`, `ProjectAbout2.ts`, `ProjectAbout3.ts`

**Estructura recomendada / Recommended structure:**

```typescript
// ProjectAbout.ts - Múltiples secciones en un archivo / Multiple sections in one file
import AboutComponent1 from './AboutComponent1.svelte';
import AboutComponent2 from './AboutComponent2.svelte';
import AboutComponent3 from './AboutComponent3.svelte';

// First About Section
export const projectAbout1 = {
    title: 'Section 1 Title',
    subtitle: '',
    text: AboutComponent1
};

export const projectAbout1Images = [
    '/media/project/section1/image1.webp',
    '/media/project/section1/image2.webp'
];

// Second About Section
export const projectAbout2 = {
    title: 'Section 2 Title',
    subtitle: '',
    text: AboutComponent2
};

export const projectAbout2Images = [
    '/media/project/section2/image1.webp',
    '/media/project/section2/image2.webp'
];

// Third About Section
export const projectAbout3 = {
    title: 'Section 3 Title',
    subtitle: '',
    text: AboutComponent3
};

export const projectAbout3Images = [
    '/media/project/section3/image1.webp',
    '/media/project/section3/image2.webp'
];
```

```typescript
// ProjectArtworkGrid.ts - Múltiples grillas en un archivo / Multiple grids in one file
import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';

// First Artwork Grid
export const projectArtworkGrid1: IGalleryImage[] = [
    {
        image: '/media/project/artwork-grid-1/artwork-grid-1.webp',
        name: '',
        description: ''
    },
    {
        image: '/media/project/artwork-grid-1/artwork-grid-2.webp',
        name: '',
        description: ''
    }
    // ... more images
];

// Second Artwork Grid
export const projectArtworkGrid2: IGalleryImage[] = [
    {
        image: '/media/project/artwork-grid-2/artwork-grid-1.webp',
        name: '',
        description: ''
    },
    {
        image: '/media/project/artwork-grid-2/artwork-grid-2.webp',
        name: '',
        description: ''
    }
    // ... more images
];
```

**Uso en +page.svelte / Usage in +page.svelte:**
```svelte
<!-- Primera grilla / First grid -->
<div>
    <ProjectArtworkGrid galleryImages={projectArtworkGrid1} />
</div>

<!-- Segunda grilla / Second grid -->
<div>
    <ProjectArtworkGrid galleryImages={projectArtworkGrid2} />
</div>
```

**Beneficios / Benefits:**
- ✅ **Mantenibilidad / Maintainability:** Un archivo por tipo de dato / One file per data type
- ✅ **Organización / Organization:** Fácil de encontrar y editar / Easy to find and edit
- ✅ **Consistencia / Consistency:** Estructura uniforme en todos los proyectos / Uniform structure across all projects
- ✅ **Escalabilidad / Scalability:** Fácil agregar nuevas secciones / Easy to add new sections

#### **ProjectIntro.ts**
```typescript
export const projectIntro = {
    name: 'project-name',
    description: [
        'Description paragraph 1',
        'Description paragraph 2',
        'Description paragraph 3'
    ],
    bgImage: '/media/project-name/main-cover.webp', // Ruta con /media/ / Path with /media/
    bgImageMobile: '/media/project-name/main-cover.webp' // Ruta con /media/ / Path with /media/
};
```

**Nota importante / Important note:**
- Las rutas de imágenes deben usar `/media/...` (con `/` al inicio) / Image paths must use `/media/...` (with `/` at the start)
- Las imágenes están en `static/media/[project-name]/` / Images are located in `static/media/[project-name]/`

#### **ProjectAbout.ts**
```typescript
export const aboutItem = {
    title: 'Section title',
    subtitle: 'Subtitle',
    text: AboutComponent // Svelte component with content
};

export const aboutImages = [
    'path/image1.webp',
    'path/image2.webp'
];
```

#### **ProjectAboutDropdown.ts**
```typescript
export const dropdownItems: IAboutDropdown[] = [
    {
        name: 'Element name',
        artist: 'Artist name',
        about: 'Element description',
        image: 'path/image.webp',
        link: 'https://optional-link.com'
    }
];
```

#### **ProjectVideo.ts**
```typescript
export const videoProjects: IVideoProject[] = [
    {
        name: 'Video name',
        artist: 'Artist',
        year: '2024',
        videoUrl: 'https://video-url.mp4',
        size: 'rectangle' // 'rectangle' | 'square' | 'vertical'
    }
];
```

#### **ProjectArtworkGallery.ts**
```typescript
export const artworkImages: IGalleryImage[] = [
    {
        image: 'path/image.webp',
        name: 'Artwork name',
        description: 'Artwork description'
    }
];
```

#### **ProjectPolaroids.ts**
```typescript
export const polaroidImages: IPolaroidImage[] = [
    {
        image: 'path/polaroid.webp',
        name: 'Name',
        date: '2024',
        quote: 'Artist quote',
        description: 'Description'
    }
];
```

#### **ProjectAudioFiles.ts**
```typescript
export const audioItems: IAudioItem[] = [
    {
        artist: 'Artist name',
        songName: 'Song name',
        songYear: '2024',
        songImage: 'path/song-image.webp',
        artistImage: 'path/artist-image.webp',
        songFile: 'path/audio-file.mp3'
    }
];
```

#### **ProjectInterview.ts**
```typescript
export const questions: IQuestion[] = [
    {
        question: 'Interviewer question?',
        response: [
            {
                name: 'Interviewee name',
                text: 'Interviewee response'
            }
        ],
        selected: false
    }
];
```

#### **NavItems.ts**
```typescript
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const navItems: INavBarItem[] = [
    {
        text: 'Intro',
        route: 'intro',
        selected: false
    },
    {
        text: 'Very Long Section Title That Gets Cut Off',
        route: 'section1',
        selected: false,
        shortText: 'Long Title' // Texto corto para el navbar / Short text for navbar
    },
    {
        text: 'Section 2',
        route: 'section2',
        selected: false
    }
];
```

**Nota sobre `shortText` / Note about `shortText`:**
- Usar cuando el título es muy largo y se corta en el navbar / Use when the title is too long and gets cut off in the navbar
- Si `shortText` está definido, se muestra en lugar de `text` / If `shortText` is defined, it's displayed instead of `text`
- Opcional: solo agregar cuando sea necesario / Optional: only add when necessary

## 🔧 Cómo Agregar un Nuevo Proyecto / How to Add a New Project

### Paso 1: Crear la estructura de carpetas / Step 1: Create folder structure
```bash
mkdir src/routes/[project-name]
mkdir src/data/Projects/[ProjectName]
```

### Paso 2: Agregar constantes / Step 2: Add constants
En `/src/constants/enums.ts` / In `/src/constants/enums.ts`:
```typescript
export enum EProjects {
    // ... otros proyectos / other projects
    NEW_PROJECT = 'NewProject'
}
```

En `/src/constants/routes.ts` / In `/src/constants/routes.ts`:
```typescript
export const NEW_PROJECT = '/new-project';
```

### Paso 3: Crear datos del proyecto / Step 3: Create project data
Crear archivos en `/src/data/Projects/[ProjectName]/` / Create files in `/src/data/Projects/[ProjectName]/`:

#### **ProjectIntro.ts**
```typescript
export const newProjectIntro = {
    name: 'new project',
    description: [
        'Project description paragraph 1',
        'Project description paragraph 2'
    ],
    bgImage: '/media/new-project/main-cover.webp', // Ruta con /media/ / Path with /media/
    bgImageMobile: '/media/new-project/main-cover.webp' // Ruta con /media/ / Path with /media/
};
```

**Nota importante / Important note:**
- Usar rutas con `/media/...` (con `/` al inicio) / Use paths with `/media/...` (with `/` at the start)
- Las imágenes deben estar en `static/media/[project-name]/` / Images must be in `static/media/[project-name]/`

#### **ProjectAbout.ts**
```typescript
import AboutComponent from './AboutComponent.svelte';

export const newProjectAbout = {
    title: 'Section title',
    subtitle: 'Subtitle',
    text: AboutComponent
};

export const newProjectAboutImages = [
    '/media/new-project/about-1/about-1.webp', // Ruta con /media/ / Path with /media/
    '/media/new-project/about-1/about-2.webp'
];
```

#### **ProjectAboutDropdown.ts**
```typescript
import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const newProjectDropdownItems: IAboutDropdown[] = [
    {
        name: 'Element name',
        artist: 'Artist',
        about: 'Element description',
        image: '/media/new-project/dropdown/item1.webp' // Ruta con /media/ / Path with /media/
    }
];
```

#### **NavItems.ts**
```typescript
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const newProjectNavItems: INavBarItem[] = [
    {
        text: 'About',
        route: 'intro',
        selected: false
    },
    {
        text: 'Section 1',
        route: 'section1',
        selected: false
    }
];
```

### Paso 4: Crear la página y layout del proyecto / Step 4: Create project page and layout
En `/src/routes/[project-name]/+layout.svelte` agrega el NavBar del proyecto:

```svelte
<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { [projectNavStoreItems] } from './store';

	let navItems: any;
	[projectNavStoreItems].subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />
```

En `/src/routes/[project-name]/+page.svelte` incluye las secciones del proyecto. Ver sección "Patrón Estándar de +page.svelte" más abajo para la estructura completa. / In `/src/routes/[project-name]/+page.svelte` include the project sections. See "Standard +page.svelte Pattern" section below for the complete structure.

### Paso 5: Crear el store del proyecto / Step 5: Create project store
En `/src/routes/[project-name]/store.ts` / In `/src/routes/[project-name]/store.ts`:

```typescript
import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';
import { newProjectNavItems } from '../../data/Projects/NewProject/NavItems';

// IMPORTANTE: Inicializar con los navItems del proyecto / IMPORTANT: Initialize with project navItems
export const newProjectNavStoreItems = writable<INavBarItem[]>(newProjectNavItems);
```

**⚠️ Importante / Important:**
- El store debe inicializarse con los `navItems` del proyecto, NO como array vacío / The store must be initialized with the project's `navItems`, NOT as an empty array
- Esto asegura que el navbar aparezca inmediatamente al cargar la página / This ensures the navbar appears immediately when the page loads

### Paso 6: Agregar proyecto al Home / Step 6: Add project to Home
En `/src/constants/projects.ts` / In `/src/constants/projects.ts`:

```typescript
export interface Project {
    title: string;
    subtitle: string;
    description: string;
    thumbnailPath: string[]; // Array de imágenes para el carrusel / Array of images for carousel
    thumbnailPathMobile: string;
    buttonPath: string;
    pagePath: string;
    artists: string[];
    artworks: string[];
    quote: string;
}

export const projects: Project[] = [
    // ... otros proyectos / other projects
    {
        title: "New Project",
        subtitle: "Artist 1 & Artist 2",
        description: "Project description for home page.",
        thumbnailPath: [
            "media/new-project/thumbnail-1.webp",
            "media/new-project/thumbnail-2.webp",
            "media/new-project/thumbnail-3.webp"
        ],
        thumbnailPathMobile: "media/home/thumbnails-v2-mobile/new-project.webp",
        buttonPath: "media/home/buttons/XX-button-new-project.png",
        pagePath: "/new-project",
        artists: ["Artist 1", "Artist 2"],
        artworks: ["Artwork 1", "Artwork 2"],
        quote: "Project quote for home page."
    }
];
```

**Notas / Notes:**
- `thumbnailPath` es un array de strings (rutas sin `/` al inicio) / `thumbnailPath` is an array of strings (paths without `/` at the start)
- `HomeThumbnails` y `HomeButtons` usan automáticamente el primer elemento del array / `HomeThumbnails` and `HomeButtons` automatically use the first element of the array
- Las rutas son relativas a `static/` / Paths are relative to `static/`

### Paso 7: Actualizar el proyecto principal / Step 7: Update main project
En `/src/data/Projects/projects.ts` / In `/src/data/Projects/projects.ts`:

```typescript
// Add to projects list
{
    name: EProjects.NEW_PROJECT,
    refs: [EProjects.OTHER_PROJECT, EProjects.OTHER_PROJECT2, EProjects.OTHER_PROJECT3]
}

// Add to projectsDetails
{
    name: EProjects.NEW_PROJECT,
    nameToShow: 'new project',
    image: '/media/home/thumbnails/new-project.webp', // Ruta con /media/ / Path with /media/
    hover: '/media/home/thumbnails/new-project.webp',
    url: NEW_PROJECT,
    mobileImage: '/media/home/thumbnails-v2-mobile/new-project.webp'
}
```

### Paso 8: Agregar imágenes / Step 8: Add images
Colocar las imágenes en `/static/media/[project-name]/` / Place images in `/static/media/[project-name]/`:
- Introduction images (desktop and mobile): `/static/media/[project-name]/main-cover.webp`
- Section images: `/static/media/[project-name]/about-1/`, `/static/media/[project-name]/about-2/`, etc.
- Interview images: `/static/media/[project-name]/interview/`
- Artwork grid images: `/static/media/[project-name]/artwork-grid-1/`, etc.

**Nota importante / Important note:**
- Todas las imágenes deben estar en `static/media/` / All images must be in `static/media/`
- Las rutas en el código deben usar `/media/...` (con `/` al inicio) / Paths in code must use `/media/...` (with `/` at the start)

## 🎨 Patrón Estándar de +page.svelte / Standard +page.svelte Pattern

Todas las páginas de proyecto siguen un patrón estándar para la carga de imágenes y navegación. / All project pages follow a standard pattern for image loading and navigation.

### Estructura Base / Base Structure

```svelte
<script lang="ts">
    import { onMount } from 'svelte';
    import { inview } from 'svelte-inview';
    import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
    import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
    import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
    import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
    import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
    import Footer from '$lib/elements/Footer/Footer.svelte';
    
    // Imports de datos del proyecto / Project data imports
    import { projectIntro, projectAbout1, projectAbout1Images } from '../../data/Projects/ProjectName/ProjectAbout';
    import { chatInterviewData } from '../../data/Projects/ProjectName/ProjectChatInterview';
    import { projectArtworkGrid } from '../../data/Projects/ProjectName/ProjectArtworkGrid';
    
    // Imports de navegación y utilidades / Navigation and utilities imports
    import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
    import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
    import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
    import preloadImages from '../../utils/preloadImages';
    import { projectNavStoreItems } from './store';
    import { projectNavItems } from '../../data/Projects/ProjectName/NavItems';
    import { EProjects } from '../../constants/enums';
    import { EColorVariant } from '$lib/elements/SectionContainer/interface';
    import { fly } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    
    // Variables de estado para in-view detection / State variables for in-view detection
    let introIsInView: boolean;
    let about1IsInView: boolean;
    let about2IsInView: boolean;
    
    let containerRef: any;
    
    // Función para manejar scroll y actualizar navbar / Function to handle scroll and update navbar
    const handleOnScroll = () => {
        getMetaballProgress(containerRef);
        
        if (introIsInView) {
            updateNavBar(projectNavStoreItems, projectNavItems, projectNavItems[0].route);
        }
        if (about1IsInView) {
            updateNavBar(projectNavStoreItems, projectNavItems, projectNavItems[1].route);
        }
        if (about2IsInView) {
            updateNavBar(projectNavStoreItems, projectNavItems, projectNavItems[2].route);
        }
    };
    
    // Función para cargar las imágenes cuando el Metaball esté listo / Function to load images when Metaball is ready
    const loadImages = async () => {
        const images = await preloadImages([
            [projectIntro.bgImage, projectIntro.bgImageMobile],
            projectAbout1Images,
            [chatInterviewData.background], // Si hay ChatInterview / If there's ChatInterview
            projectArtworkGrid.map((item) => item.image) // Si hay ArtworkGrid / If there's ArtworkGrid
        ]);
        preloadedImagesStore.set(images);
        imagesLoaded.set(true);
    };
    
    // Cargar imágenes cuando el Metaball esté listo / Load images when Metaball is ready
    $: if ($metaballReady) {
        loadImages();
    }
</script>

{#if $preloadedImagesStore}
    <div
        bind:this={containerRef}
        on:scroll={handleOnScroll}
        on:touchmove={handleOnScroll}
        transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
        class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
    >
        <!-- Intro Section -->
        <div
            id="intro"
            use:inview={INVIEW_OPTIONS}
            on:inview_change={(event) => {
                const { inView } = event.detail;
                introIsInView = inView;
            }}
        >
            <ProjectIntro
                project={projectIntro}
                textColor="white"
                bgImage={$preloadedImagesStore[0][0]}
                bgImageMobile={$preloadedImagesStore[0][1]}
            />
        </div>
        
        <!-- About 1 Section -->
        <div
            id="about1"
            use:inview={INVIEW_OPTIONS}
            on:inview_change={(event) => {
                const { inView } = event.detail;
                about1IsInView = inView;
            }}
        >
            <ProjectAbout
                aboutItem={projectAbout1}
                aboutImages={$preloadedImagesStore[1]}
                route=""
                colorVariant={EColorVariant.BLACK}
            />
        </div>
        
        <!-- Chat Interview Section (opcional) / Optional -->
        <div>
            <ChatInterview data={chatInterviewData} />
        </div>
        
        <!-- Artwork Grid Section (opcional) / Optional -->
        <div>
            <ProjectArtworkGrid galleryImages={projectArtworkGrid} />
        </div>
        
        <HomeIcon />
        <Footer project={EProjects.PROJECT_NAME} />
    </div>
{/if}
```

### Elementos Clave del Patrón / Key Pattern Elements

1. **Stores de carga / Loading stores:**
   - `metaballReady` - Indica cuando el Metaball está listo / Indicates when Metaball is ready
   - `preloadedImagesStore` - Almacena las imágenes precargadas / Stores preloaded images
   - `imagesLoaded` - Indica cuando todas las imágenes están cargadas / Indicates when all images are loaded

2. **Función `loadImages`:**
   - Recibe un array 2D de rutas de imágenes / Receives a 2D array of image paths
   - Usa `preloadImages()` para cargar todas las imágenes / Uses `preloadImages()` to load all images
   - Actualiza el store cuando termina / Updates the store when finished

3. **Reactivo de carga / Loading reactive:**
   - `$: if ($metaballReady) { loadImages(); }` - Carga imágenes cuando el Metaball está listo / Loads images when Metaball is ready

4. **Renderizado condicional / Conditional rendering:**
   - `{#if $preloadedImagesStore}` - Solo renderiza cuando las imágenes están cargadas / Only renders when images are loaded

5. **In-view detection:**
   - Usa `svelte-inview` para detectar cuando las secciones están visibles / Uses `svelte-inview` to detect when sections are visible
   - Actualiza el navbar automáticamente / Updates navbar automatically

6. **Índices de imágenes / Image indices:**
   - `$preloadedImagesStore[0][0]` - Primera imagen del primer grupo (bgImage desktop) / First image of first group (desktop bgImage)
   - `$preloadedImagesStore[0][1]` - Segunda imagen del primer grupo (bgImage mobile) / Second image of first group (mobile bgImage)
   - `$preloadedImagesStore[1]` - Array completo del segundo grupo (about images) / Complete array of second group (about images)

## 🎯 Componentes Disponibles / Available Components

### **ProjectIntro**
Para la sección de introducción del proyecto. / For the project introduction section.

### **ProjectAbout**
Para secciones de información con texto e imágenes. / For information sections with text and images.

### **ProjectAboutDropdown**
Para galerías de elementos con información desplegable. / For galleries with dropdown information.

### **ProjectVideo**
Para secciones de videos con navegación entre videos. / For video sections with navigation between videos.

### **ProjectArtworkGrid**
Para grillas de obras de arte con scroll horizontal. / For artwork grids with horizontal scroll.

### **ProjectPolaroids**
Para secciones de polaroids con citas de artistas. / For polaroid sections with artist quotes.

### **ProjectAudioFiles**
Para reproductores de archivos de audio. / For audio file players.

### **ProjectInterview**
Para secciones de entrevistas con preguntas y respuestas. / For interview sections with questions and answers.

## 📝 Interfaces Principales / Main Interfaces

### **IProject**
```typescript
export interface IProject {
    name: string;
    description: string[];
    image?: string;
    bgImage: string;
    bgImageMobile: string;
}
```

### **IAboutItem**
```typescript
export interface IAboutItem {
    title: string;
    subtitle: string;
    text: any; // Componente Svelte / Svelte component
}
```

### **IAboutDropdown**
```typescript
export interface IAboutDropdown {
    name: string;
    artist?: string;
    link?: string;
    date?: string;
    location?: string;
    about?: string;
    image: string;
    aboutArray?: string[];
}
```

### **IVideoProject**
```typescript
export interface IVideoProject {
    name: string;
    artist: string;
    year?: string;
    videoUrl: string;
    link?: string;
    size?: 'rectangle' | 'square' | 'vertical';
}
```

### **IGalleryImage**
```typescript
export interface IGalleryImage {
    image: string;
    name: string;
    description: string;
}
```

### **IPolaroidImage**
```typescript
export interface IPolaroidImage {
    image: string;
    name?: string;
    date?: string;
    quote?: string;
    description?: string;
}

export enum EPolaroidType {
    SQUARE = 'square',
    RECTANGLE = 'rectangle',
    VERTICAL = 'vertical'
}
```

### **IAudioItem**
```typescript
export interface IAudioItem {
    artist: string;
    songName: string;
    songYear: string;
    songImage: string;
    artistImage: string;
    songFile: string;
}
```

### **IQuestion**
```typescript
export interface IResponse {
    name?: string;
    text: string;
}

export interface IQuestion {
    question: string;
    response: IResponse[];
    selected: boolean;
}
```

### **INavBarItem**
```typescript
export interface INavBarItem {
    text: string;
    route: string;
    selected: boolean;
    shortText?: string; // Opcional: texto corto para títulos largos / Optional: short text for long titles
}
```

**Nota sobre `shortText` / Note about `shortText`:**
- Usar cuando el título es muy largo y se corta en el navbar / Use when the title is too long and gets cut off in the navbar
- Si está definido, se muestra en lugar de `text` / If defined, it's displayed instead of `text`
- Ejemplo: `text: 'Very Long Section Title'` con `shortText: 'Long Title'` / Example: `text: 'Very Long Section Title'` with `shortText: 'Long Title'`

### **Project** (para Home / for Home)
```typescript
export interface Project {
    title: string;
    subtitle: string;
    description: string;
    thumbnailPath: string[]; // Array de imágenes para el carrusel / Array of images for carousel
    thumbnailPathMobile: string;
    buttonPath: string;
    pagePath: string;
    artists: string[];
    artworks: string[];
    quote: string;
}
```

**Notas / Notes:**
- `thumbnailPath` es un array, pero `HomeThumbnails` y `HomeButtons` usan automáticamente el primer elemento / `thumbnailPath` is an array, but `HomeThumbnails` and `HomeButtons` automatically use the first element
- Las rutas son relativas a `static/` (sin `/` al inicio) / Paths are relative to `static/` (without `/` at the start)

## 📋 Checklist para Nuevo Proyecto / New Project Checklist

- [ ] Crear carpeta en `/src/routes/[project-name]/` / Create folder in `/src/routes/[project-name]/`
- [ ] Crear carpeta en `/src/data/Projects/[ProjectName]/` / Create folder in `/src/data/Projects/[ProjectName]/`
- [ ] Agregar enum en `/src/constants/enums.ts` / Add enum in `/src/constants/enums.ts`
- [ ] Agregar ruta en `/src/constants/routes.ts` / Add route in `/src/constants/routes.ts`
- [ ] Crear archivos de datos del proyecto / Create project data files
  - [ ] `ProjectIntro.ts` con rutas `/media/...` / with paths `/media/...`
  - [ ] `ProjectAbout.ts` con componentes Svelte / with Svelte components
  - [ ] `NavItems.ts` con `shortText` si es necesario / with `shortText` if needed
  - [ ] `ProjectChatInterview.ts` si hay entrevistas / if there are interviews
  - [ ] `ProjectArtworkGrid.ts` si hay grids / if there are grids
- [ ] Crear `+layout.svelte` con NavBar / Create `+layout.svelte` with NavBar
- [ ] Crear `+page.svelte` con patrón estándar / Create `+page.svelte` with standard pattern
  - [ ] Implementar patrón de carga con `metaballReady` / Implement loading pattern with `metaballReady`
  - [ ] Configurar `handleOnScroll` con `updateNavBar` / Configure `handleOnScroll` with `updateNavBar`
  - [ ] Agregar `inview` detection para todas las secciones / Add `inview` detection for all sections
- [ ] Crear `store.ts` inicializado con `navItems` / Create `store.ts` initialized with `navItems`
- [ ] Agregar proyecto a `constants/projects.ts` para el home / Add project to `constants/projects.ts` for home
- [ ] Actualizar `data/Projects/projects.ts` / Update `data/Projects/projects.ts`
- [ ] Agregar imágenes en `static/media/[project-name]/` / Add images in `static/media/[project-name]/`
- [ ] Verificar que todas las rutas usen `/media/...` / Verify all paths use `/media/...`
- [ ] Probar navegación y scroll / Test navigation and scroll
- [ ] Verificar responsive design / Verify responsive design
- [ ] Verificar que el navbar aparezca al cargar / Verify navbar appears on load

## 🌿 Flujo de Trabajo con Ramas / Branch Workflow

### Convenciones de nombres de ramas / Branch naming conventions
```bash
# Para agregar un nuevo proyecto / For adding a new project
git checkout -b feat/add-[project-name]
git checkout -b feat/add-memetic-rubble

# Para actualizar un proyecto existente / For updating an existing project
git checkout -b feat/update-[project-name]
git checkout -b feat/update-artifice

# Para nuevas funcionalidades / For new features
git checkout -b feat/[feature-name]
git checkout -b feat/new-conversation-component

# Para correcciones / For fixes
git checkout -b fix/[fix-description]
git checkout -b fix/mobile-scroll-and-images

# Para documentación / For documentation
git checkout -b docs/[description]
git checkout -b docs/add-complete-project-documentation
```

### Crear una nueva feature / Create a new feature
```bash
# Asegurarse de estar en main y actualizado / Make sure you're on main and updated
git checkout main
git pull origin main

# Crear nueva rama / Create new branch
git checkout -b feat/nombre-de-la-feature
git checkout -b feat/feature-name
```

### Trabajar en la feature / Work on the feature
```bash
# Hacer cambios y commits / Make changes and commits
git add .
git commit -m "feat: agregar nueva funcionalidad / add new functionality"

# Subir la rama / Push the branch
git push origin feature/nombre-de-la-feature
git push origin feature/feature-name
```

### Crear Pull Request / Create Pull Request
1. **Ir a GitHub** y crear PR de `feature/nombre-de-la-feature` a `main`
2. **Revisar cambios** y solicitar review si es necesario
3. **Mergear** cuando esté aprobado

### Resolver conflictos / Resolve conflicts
Si hay conflictos en el PR:
```bash
# En tu rama local / In your local branch
git fetch origin
git merge origin/main

# Resolver conflictos manualmente / Resolve conflicts manually
# Editar archivos con conflictos / Edit files with conflicts

# Commit y push / Commit and push
git add .
git commit -m "fix: resolver conflictos / resolve conflicts"
git push origin feature/nombre-de-la-feature
```

### Después del merge / After merge
```bash
# Volver a main y actualizar / Go back to main and update
git checkout main
git pull origin main

# Eliminar rama local / Delete local branch
git branch -d feature/nombre-de-la-feature
```

## 📁 Ubicación de Imágenes / Image Location

### Imágenes en `/static/media/` / Images in `/static/media/`
Todas las imágenes se almacenan en la carpeta `/static/media/` para mejor rendimiento y acceso directo.

**All images are stored in the `/static/media/` folder for better performance and direct access.**

### Estructura de imágenes / Image structure
```
static/
└── media/
    ├── [project-name]/
    │   ├── main-cover.webp
    │   ├── about-1/
    │   │   ├── about-1.webp
    │   │   └── about-2.webp
    │   ├── about-2/
    │   │   └── about-1.webp
    │   ├── interview/
    │   │   ├── interview-bg.webp
    │   │   ├── pfp1.webp
    │   │   └── pfp2.webp
    │   └── artwork-grid-1/
    │       ├── artwork-grid-1.webp
    │       └── artwork-grid-2.webp
    └── home/
        ├── thumbnails-v2/
        │   └── [project-name]/
        │       ├── 1.webp
        │       ├── 2.webp
        │       └── 3.webp
        ├── thumbnails-v2-mobile/
        │   └── [project-name].webp
        └── buttons/
            └── XX-button-[project-name].png
```

### Referenciar imágenes / Reference images
```typescript
// ✅ Correcto / Correct: Usar rutas con /media/ / Use paths with /media/
const bgImage = '/media/project-name/main-cover.webp';
const aboutImage = '/media/project-name/about-1/about-1.webp';

// ❌ Incorrecto / Incorrect: No usar imports / Don't use imports
import image from '$lib/assets/images/projects/project/image.webp';
```

**Reglas importantes / Important rules:**
- Todas las imágenes deben estar en `static/media/` / All images must be in `static/media/`
- Las rutas en el código deben usar `/media/...` (con `/` al inicio) / Paths in code must use `/media/...` (with `/` at the start)
- En `constants/projects.ts`, las rutas son relativas a `static/` (sin `/` al inicio) / In `constants/projects.ts`, paths are relative to `static/` (without `/` at the start)