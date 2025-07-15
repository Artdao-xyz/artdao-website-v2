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
        image: '/media/project/grid1/artwork1.webp',
        name: '',
        description: ''
    },
    // ... more images
];

// Second Artwork Grid
export const projectArtworkGrid2: IGalleryImage[] = [
    {
        image: '/media/project/grid2/artwork1.webp',
        name: '',
        description: ''
    },
    // ... more images
];
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
    bgImage: 'path/desktop-image.webp',
    bgImageMobile: 'path/mobile-image.webp'
};
```

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
export const navItems: INavBarItem[] = [
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
import bgImage from '$lib/assets/images/projects/[project]/intro-desktop.webp';
import bgImageMobile from '$lib/assets/images/projects/mobile-intro/[project]-mobile.webp';

export const newProjectIntro = {
    name: 'new project',
    description: [
        'Project description paragraph 1',
        'Project description paragraph 2'
    ],
    bgImage,
    bgImageMobile
};
```

#### **ProjectAbout.ts**
```typescript
import AboutComponent from './AboutComponent.svelte';
import aboutImage1 from '$lib/assets/images/projects/[project]/about1.webp';

export const newProjectAbout = {
    title: 'Section title',
    subtitle: 'Subtitle',
    text: AboutComponent
};

export const newProjectAboutImages = [
    aboutImage1,
    // more images...
];
```

#### **ProjectAboutDropdown.ts**
```typescript
import itemImage1 from '$lib/assets/images/projects/[project]/item1.webp';
import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const newProjectDropdownItems: IAboutDropdown[] = [
    {
        name: 'Element name',
        artist: 'Artist',
        about: 'Element description',
        image: itemImage1
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

En `/src/routes/[project-name]/+page.svelte` incluye las secciones del proyecto como se explicó antes.

### Paso 5: Crear el store del proyecto / Step 5: Create project store
En `/src/routes/[project-name]/store.ts` / In `/src/routes/[project-name]/store.ts`:

```typescript
import { writable } from 'svelte/store';
import type { INavBarItem } from '../../data/Projects/[ProjectName]/NavItems';

export const newProjectNavStoreItems = writable<INavBarItem[]>([]);
```

### Paso 6: Actualizar el proyecto principal / Step 6: Update main project
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
    image: newProjectImage,
    hover: newProjectHover,
    url: NEW_PROJECT,
    mobileImage: newProjectMobileImage
}
```

### Paso 7: Agregar imágenes / Step 7: Add images
Colocar las imágenes en `/src/lib/assets/images/projects/[project]/` / Place images in `/src/lib/assets/images/projects/[project]/`:
- Introduction images (desktop and mobile)
- Section images
- Dropdown element images

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
}
```

## 📋 Checklist para Nuevo Proyecto / New Project Checklist

- [ ] Crear carpeta en `/src/routes/[project-name]/` / Create folder in `/src/routes/[project-name]/`
- [ ] Crear carpeta en `/src/data/Projects/[ProjectName]/` / Create folder in `/src/data/Projects/[ProjectName]/`
- [ ] Agregar enum en `/src/constants/enums.ts` / Add enum in `/src/constants/enums.ts`
- [ ] Agregar ruta en `/src/constants/routes.ts` / Add route in `/src/constants/routes.ts`
- [ ] Crear archivos de datos del proyecto / Create project data files
- [ ] Crear página `+page.svelte` / Create `+page.svelte` page
- [ ] Crear `store.ts` / Create `store.ts`
- [ ] Actualizar `projects.ts` / Update `projects.ts`
- [ ] Agregar imágenes en assets / Add images in assets
- [ ] Probar navegación y scroll / Test navigation and scroll
- [ ] Verificar responsive design / Verify responsive design

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

### Imágenes en `/public/` / Images in `/public/`
A partir de ahora, todas las imágenes se almacenan en la carpeta `/public/` para mejor rendimiento y acceso directo.

**From now on, all images are stored in the `/public/` folder for better performance and direct access.**

### Estructura de imágenes / Image structure
```
public/
├── images/
│   ├── projects/
│   │   ├── [project-name]/
│   │   │   ├── intro-desktop.webp
│   │   │   ├── intro-mobile.webp
│   │   │   ├── about1.webp
│   │   │   └── gallery/
│   │   │       ├── item1.webp
│   │   │       └── item2.webp
│   │   └── mobile-intro/
│   │       └── [project-name]-mobile.webp
│   └── global/
│       ├── logo.webp
│       └── icons/
└── media/
    ├── videos/
    └── audio/
```

### Referenciar imágenes / Reference images
```typescript
// Instead of:
import image from '$lib/assets/images/projects/project/image.webp';

// Use:
const image = '/images/projects/project/image.webp';
```