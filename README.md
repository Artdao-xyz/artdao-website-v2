# ArtDao Website - Guide to Create Pages

**Artists helping artists** - Web platform for digital art exhibitions and projects.

## 🚀 QUICK START - Create a New Page

### Essential Steps

1. **Create folders:**
   ```bash
   mkdir src/routes/[project-name]
   mkdir src/data/Projects/[ProjectName]
   ```

2. **Add constants:**
   - `src/constants/enums.ts`: Add `NEW_PROJECT = 'NewProject'`
   - `src/constants/routes.ts`: Add `NEW_PROJECT = '/new-project'`

3. **Create data files:**
   - `ProjectIntro.ts` - Introductory text and images
   - `ProjectAbout.ts` - About sections with Svelte components
   - `NavItems.ts` - Navbar items
   - `ProjectChatInterview.ts` (optional) - Chat interviews
   - `ProjectArtworkGrid.ts` (optional) - Artwork grids

4. **Create page:**
   - `+layout.svelte` - Layout with NavBar
   - `+page.svelte` - Main page (use standard pattern)
   - `store.ts` - Store initialized with navItems

5. **Add page metadata (SEO):**
   - In `+page.svelte`, import and use `usePageMetadata`:
   ```typescript
   import { usePageMetadata } from '$lib/utils/metadata';
   import { projectIntro } from '../../data/Projects/ProjectName/ProjectIntro';
   
   usePageMetadata({
     title: 'Project Name | Artdao',
     description: projectIntro.description[0] || 'Project description',
     ogImage: `https://artdao.xyz${projectIntro.bgImage}`,
     canonical: 'https://artdao.xyz/project-name'
   });
   ```

6. **Add to Home:**
   - `src/constants/projects.ts` - Add project to array

6. **Add images:**
   - Place in `static/media/[project-name]/`
   - Use paths `/media/...` in code

---

## ⚠️ CRITICAL RULES

### 1. Image Paths
- ✅ **CORRECT:** `/media/project-name/image.webp` (with `/` at the start)
- ❌ **INCORRECT:** `media/project-name/image.webp` or imports
- **Location:** All images in `static/media/`

### 2. Project Store
- ✅ **CORRECT:** `writable<INavBarItem[]>(projectNavItems)` - Initialized with navItems
- ❌ **INCORRECT:** `writable<INavBarItem[]>([])` - Empty array
- **Reason:** Navbar must appear immediately on load

### 3. Image Loading Pattern
- **REQUIRED:** Use `metaballReady` and `preloadedImagesStore`
- **Structure:** `{#if $preloadedImagesStore}` for conditional rendering
- **Function:** `loadImages()` must receive 2D array of paths

### 4. NavBar Items
- Use `shortText` when title is too long
- The `route` must match the section `id`

### 5. Data Structure
- **CONSOLIDATE:** Multiple sections of the same type in a single file
- ✅ `ProjectAbout.ts` with `about1`, `about2`, `about3`
- ❌ `ProjectAbout1.ts`, `ProjectAbout2.ts`, `ProjectAbout3.ts`

---

## 📋 COMPLETE TEMPLATE

### File Structure
```
src/
├── routes/[project-name]/
│   ├── +layout.svelte
│   ├── +page.svelte
│   └── store.ts
└── data/Projects/[ProjectName]/
    ├── ProjectIntro.ts
    ├── ProjectAbout.ts
    ├── NavItems.ts
    ├── ProjectChatInterview.ts (optional)
    └── ProjectArtworkGrid.ts (optional)

static/media/[project-name]/
├── main-cover.webp
├── about-1/
├── about-2/
├── interview/ (optional)
└── artwork-grid-1/ (optional)
```

### 1. ProjectIntro.ts
```typescript
export const projectIntro = {
    name: 'project-name',
    description: [
        'Description paragraph 1',
        'Description paragraph 2'
    ],
    bgImage: '/media/project-name/main-cover.webp',
    bgImageMobile: '/media/project-name/main-cover.webp'
};
```

### 2. ProjectAbout.ts
```typescript
import About1 from './About1.svelte';
import About2 from './About2.svelte';

export const about1 = {
    title: 'Section 1 Title',
    subtitle: '',
    text: About1
};

export const about1Images = [
    '/media/project-name/about-1/about-1.webp',
    '/media/project-name/about-1/about-2.webp'
];

export const about2 = {
    title: 'Section 2 Title',
    subtitle: '',
    text: About2
};

export const about2Images = [
    '/media/project-name/about-2/about-1.webp'
];
```

### 3. NavItems.ts
```typescript
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const projectNavItems: INavBarItem[] = [
    {
        text: 'Intro',
        route: 'intro',
        selected: false
    },
    {
        text: 'Very Long Title That Gets Cut',
        route: 'about1',
        selected: false,
        shortText: 'Long Title' // Optional
    },
    {
        text: 'Section 2',
        route: 'about2',
        selected: false
    }
];
```

### 4. ProjectChatInterview.ts (Optional)
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
    images: string[]; // Optional, use [] if none
    background: string; // REQUIRED
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
            avatar: '/media/project-name/interview/pfp1.webp',
            type: 'answer'
        }
    ],
    messages: [
        {
            characterId: 'tomas-jones',
            content: 'Question?'
        },
        {
            characterId: 'artist1',
            content: 'Answer...'
        }
    ],
    images: [],
    background: '/media/project-name/interview/interview-bg.webp'
};
```

### 5. ProjectArtworkGrid.ts (Optional)
```typescript
import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';

export const projectArtworkGrid: IGalleryImage[] = [
    {
        image: '/media/project-name/artwork-grid-1/artwork-grid-1.webp',
        name: '',
        description: ''
    }
    // ... more images
];
```

### 6. store.ts
```typescript
import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';
import { projectNavItems } from '../../data/Projects/ProjectName/NavItems';

// ⚠️ IMPORTANT: Initialize with navItems, NOT empty array
export const projectNavStoreItems = writable<INavBarItem[]>(projectNavItems);
```

### 7. +layout.svelte
```svelte
<script lang="ts">
    import NavBar from '$lib/elements/NavBar/NavBar.svelte';
    import '../../style.css';
    import { projectNavStoreItems } from './store';

    let navItems: any;
    projectNavStoreItems.subscribe((item) => {
        navItems = item;
    });
</script>

<NavBar {navItems} />
<slot />
```

### 8. +page.svelte (STANDARD PATTERN)
```svelte
<script lang="ts">
    import { inview } from 'svelte-inview';
    import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
    import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
    import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
    import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
    import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
    import Footer from '$lib/elements/Footer/Footer.svelte';
    
    // Project data
    import { projectIntro } from '../../data/Projects/ProjectName/ProjectIntro';
    import { about1, about1Images, about2, about2Images } from '../../data/Projects/ProjectName/ProjectAbout';
    import { chatInterviewData } from '../../data/Projects/ProjectName/ProjectChatInterview';
    import { projectArtworkGrid } from '../../data/Projects/ProjectName/ProjectArtworkGrid';
    
    // Page metadata (SEO)
    import { usePageMetadata } from '$lib/utils/metadata';
    usePageMetadata({
        title: 'Project Name | Artdao',
        description: projectIntro.description[0] || 'Project description',
        ogImage: `https://artdao.xyz${projectIntro.bgImage}`,
        canonical: 'https://artdao.xyz/project-name'
    });
    
    // Navigation and utilities
    import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
    import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
    import { metaballReady, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
    import preloadImages from '../../utils/preloadImages';
    import { projectNavStoreItems } from './store';
    import { projectNavItems } from '../../data/Projects/ProjectName/NavItems';
    import { EProjects } from '../../constants/enums';
    import { EColorVariant } from '$lib/elements/SectionContainer/interface';
    import { fly } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    
    // State variables
    let introIsInView: boolean;
    let about1IsInView: boolean;
    let about2IsInView: boolean;
    let containerRef: any;
    
    // Scroll function
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
    
    // Load images
    const loadImages = async () => {
        const images = await preloadImages([
            [projectIntro.bgImage, projectIntro.bgImageMobile],
            about1Images,
            about2Images,
            [chatInterviewData.background], // If there's ChatInterview
            projectArtworkGrid.map((item) => item.image) // If there's ArtworkGrid
        ]);
        preloadedImagesStore.set(images);
    };
    
    // Loading reactive
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
        <!-- Intro -->
        <div
            id="intro"
            use:inview={INVIEW_OPTIONS}
            on:inview_change={(event) => {
                introIsInView = event.detail.inView;
            }}
        >
            <ProjectIntro
                project={projectIntro}
                textColor="white"
                bgImage={$preloadedImagesStore[0][0]}
                bgImageMobile={$preloadedImagesStore[0][1]}
            />
        </div>
        
        <!-- About 1 -->
        <div
            id="about1"
            use:inview={INVIEW_OPTIONS}
            on:inview_change={(event) => {
                about1IsInView = event.detail.inView;
            }}
        >
            <ProjectAbout
                aboutItem={about1}
                aboutImages={$preloadedImagesStore[1]}
                route=""
                colorVariant={EColorVariant.BLACK}
            />
        </div>
        
        <!-- Chat Interview (optional) -->
        <div>
            <ChatInterview data={chatInterviewData} />
        </div>
        
        <!-- About 2 -->
        <div
            id="about2"
            use:inview={INVIEW_OPTIONS}
            on:inview_change={(event) => {
                about2IsInView = event.detail.inView;
            }}
        >
            <ProjectAbout
                aboutItem={about2}
                aboutImages={$preloadedImagesStore[2]}
                route=""
                colorVariant={EColorVariant.BLACK}
            />
        </div>
        
        <!-- Artwork Grid (optional) -->
        <div>
            <ProjectArtworkGrid galleryImages={projectArtworkGrid} />
        </div>
        
        <HomeIcon />
        <Footer project={EProjects.PROJECT_NAME} />
    </div>
{/if}
```

### 9. constants/projects.ts (Add to Home)
```typescript
export interface Project {
    title: string;
    subtitle: string;
    description: string;
    thumbnailPath: string[]; // Array without / at start
    thumbnailPathMobile: string;
    buttonPath: string;
    pagePath: string;
    artists: string[];
    artworks: string[];
    quote: string;
}

export const projects: Project[] = [
    // ... other projects
    {
        title: "New Project",
        subtitle: "Artist 1 & Artist 2",
        description: "Project description.",
        thumbnailPath: [
            "media/new-project/thumbnail-1.webp", // Without / at start
            "media/new-project/thumbnail-2.webp",
            "media/new-project/thumbnail-3.webp"
        ],
        thumbnailPathMobile: "media/home/thumbnails-v2-mobile/new-project.webp",
        buttonPath: "media/home/buttons/XX-button-new-project.png",
        pagePath: "/new-project",
        artists: ["Artist 1", "Artist 2"],
        artworks: ["Artwork 1", "Artwork 2"],
        quote: "Project quote."
    }
];
```

### 10. data/Projects/projects.ts (Footer)
```typescript
// Add to projectsDetails
{
    name: EProjects.NEW_PROJECT,
    nameToShow: 'new project',
    image: '/media/home/thumbnails/new-project.webp', // With / at start
    hover: '/media/home/thumbnails/new-project.webp',
    url: NEW_PROJECT,
    mobileImage: '/media/home/thumbnails-v2-mobile/new-project.webp'
}
```

---

## 📚 COMPONENT REFERENCE

### Main Components

#### ProjectIntro
```svelte
<ProjectIntro
    project={projectIntro}
    textColor="white" | "black"
    bgImage={$preloadedImagesStore[0][0]}
    bgImageMobile={$preloadedImagesStore[0][1]}
/>
```

#### ProjectAbout
```svelte
<ProjectAbout
    aboutItem={about1}
    aboutImages={$preloadedImagesStore[1]}
    route=""
    colorVariant={EColorVariant.BLACK | EColorVariant.WHITE}
/>
```

#### ChatInterview
```svelte
<ChatInterview data={chatInterviewData} />
```

#### ProjectArtworkGrid
```svelte
<ProjectArtworkGrid galleryImages={projectArtworkGrid} />
```

### Image Indices in preloadedImagesStore
- `$preloadedImagesStore[0][0]` - First image of first group (bgImage desktop)
- `$preloadedImagesStore[0][1]` - Second image of first group (bgImage mobile)
- `$preloadedImagesStore[1]` - Complete array of second group (about1Images)
- `$preloadedImagesStore[2]` - Complete array of third group (about2Images)
- `$preloadedImagesStore[3]` - Array of fourth group (chatInterview background)
- `$preloadedImagesStore[4]` - Array of fifth group (artworkGrid images)

**Order in loadImages() = Order of indices in preloadedImagesStore**

---

## 🎯 COMPLETE CHECKLIST

- [ ] Create folders `src/routes/[project-name]` and `src/data/Projects/[ProjectName]`
- [ ] Add enum in `constants/enums.ts`
- [ ] Add route in `constants/routes.ts`
- [ ] Create `ProjectIntro.ts` with paths `/media/...`
- [ ] Create `ProjectAbout.ts` with Svelte components
- [ ] Create `NavItems.ts` with `shortText` if needed
- [ ] Create `ProjectChatInterview.ts` if there are interviews
- [ ] Create `ProjectArtworkGrid.ts` if there are grids
- [ ] Create `store.ts` initialized with navItems (NOT empty array)
- [ ] Create `+layout.svelte` with NavBar
- [ ] Create `+page.svelte` with complete standard pattern
- [ ] Add project to `constants/projects.ts` for home
- [ ] Update `data/Projects/projects.ts` for footer
- [ ] Place images in `static/media/[project-name]/`
- [ ] Verify all paths use `/media/...` (with `/`)
- [ ] Verify navbar appears on load
- [ ] Test navigation and scroll
- [ ] Verify responsive design

---

## 📖 ADDITIONAL INFORMATION

### Tech Stack
- **Framework:** SvelteKit (Svelte 4)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Package Manager:** Yarn

### Image Location
- **All images:** `static/media/[project-name]/`
- **Paths in code:** `/media/[project-name]/...` (with `/` at start)
- **Paths in constants/projects.ts:** `media/[project-name]/...` (without `/` at start)

### Folder Structure
```
src/
├── routes/[project-name]/
│   ├── +layout.svelte
│   ├── +page.svelte
│   └── store.ts
├── data/Projects/[ProjectName]/
│   ├── ProjectIntro.ts
│   ├── ProjectAbout.ts
│   ├── NavItems.ts
│   ├── ProjectChatInterview.ts
│   └── ProjectArtworkGrid.ts
└── constants/
    ├── enums.ts
    ├── routes.ts
    └── projects.ts

static/media/[project-name]/
├── main-cover.webp
├── about-1/
├── about-2/
├── interview/
└── artwork-grid-1/
```

### Available Components
- **ProjectIntro** - Introduction section
- **ProjectAbout** - Information sections
- **ProjectAboutDropdown** - Gallery with dropdown
- **ProjectVideo** - Video section
- **ProjectArtworkGrid** - Artwork grid
- **ProjectPolaroids** - Polaroids with quotes
- **ProjectAudioFiles** - Audio player
- **ProjectInterview** - Traditional interviews
- **ChatInterview** - Chat interviews
- **HomeIcon** - Home icon
- **Footer** - Footer

### Main Interfaces
See files in `src/lib/elements/*/interfaces.ts` for complete interfaces.

---

## 🌿 Branch Workflow

### ⚠️ IMPORTANT: Always Create a Branch First

**Before starting any new project, you MUST create a new branch:**

```bash
# For new projects (ALWAYS do this first)
git checkout main
git pull origin main
git checkout -b feat/add-[project-name]
```

**Workflow for new projects:**
1. User requests to add a new project
2. Get project name (if not provided)
3. **Create branch:** `git checkout -b feat/add-[project-name]`
4. Then proceed with project creation

### Naming conventions
```bash
# New project (ALWAYS create branch first)
git checkout -b feat/add-[project-name]

# Update project
git checkout -b feat/update-[project-name]

# New feature
git checkout -b feat/[feature-name]

# Fix
git checkout -b fix/[fix-description]
```

---

**Last update:** 2024
