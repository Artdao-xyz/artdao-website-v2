# Prompt: Create a New Project Page

## Your Task

Create a new project page for the ArtDao website using an **iterative, conversational approach**. Work section by section, always waiting for user confirmation before moving forward.

## Step 1: Read the Documentation

Read the `README.md` file completely to understand the patterns and structure. Pay special attention to:
- Image paths (`/media/...` with `/` at start)
- Store initialization (must use navItems, not empty array)
- Image loading pattern with `metaballReady` and `preloadedImagesStore`
- NavBar structure and `shortText` property

## Step 2: Start the Conversation

### 2.1: Get Project Name and Create Branch
**When user says they want to add a new project:**

- **If user mentions project name:** "Great! I'll create a new branch for [project-name]."
- **If user doesn't mention name:** "What is the project name? (This will be used for folder names, routes, and branch name)"

**Then create the branch:**
- Check current branch: `git branch --show-current`
- If not on `main`, ask: "You're currently on [branch-name]. Should I switch to main first, or create the branch from here?"
- Create branch: `git checkout -b feat/add-[project-name]`
- Confirm: "Branch `feat/add-[project-name]` created. Ready to start!"

### 2.2: Verify Images Are Ready
Ask: **"Have you downloaded all images and organized them in `static/media/[project-name]/`?"**

- **If NO:** Stop and instruct:
  - "Please download all images and organize them first. The folder structure should be:
    ```
    static/media/[project-name]/
    ├── main-cover.webp
    ├── about-1/
    ├── about-2/ (if applicable)
    ├── interview/ (if chat interview)
    └── artwork-grid-1/ (if artwork grid)
    ```
    Once done, let me know."

- **If YES:** Continue to discovery

### 2.3: Discover Sections from Images
Scan the `static/media/[project-name]/` folder and identify:
- `main-cover.webp` → Intro section
- `about-1/`, `about-2/`, etc. → About sections
- `interview/` → Chat Interview
- `artwork-grid-1/`, `artwork-grid-2/`, etc. → Artwork Grids

**Present to user:**
"I found the following sections based on your image folders:
1. Intro (main-cover.webp)
2. About Section 1 (about-1/)
3. About Section 2 (about-2/)
4. Chat Interview (interview/)
5. Artwork Grid 1 (artwork-grid-1/)
[etc...]

**Is this the correct order? Should any sections be reordered, added, or removed?**"

### 2.4: Confirm Section Order
- **If user makes changes:** Update the list and ask: "Updated order: [list]. Is this correct?"
- **Only proceed when user confirms:** "Perfect! Let's proceed with this order."

## Step 3: Gather Basic Project Information

Ask for these one by one, verifying each:

1. **"What is the project title? (For display on home page)"**
   - Verify: "Just to confirm, the title is '[title]'. Is this correct?"

2. **"What is the subtitle? (Artist names or project description)"**
   - Verify: "The subtitle is '[subtitle]'. Correct?"

3. **"What is the description for the home page?"**
   - Verify: "The description is '[description]'. Is this complete?"

4. **"What is the quote for the home page?"**
   - Verify: "The quote is '[quote]'. Is this the exact quote?"

5. **"Who are the artists? (List all names)"**
   - Verify: "Artists: [list]. Format: ['Artist 1', 'Artist 2']. Is this complete?"

6. **"What are the artwork names? (List all)"**
   - Verify: "Artworks: [list]. Format: ['Artwork 1', 'Artwork 2']. Is this complete?"

**Only proceed when all basic info is confirmed.**

## Step 4: Create Basic Structure

Tell the user: **"Now I'll create the basic structure (folders, constants, store, layout). This is the foundation before we add sections."**

Create:
1. Folders: `src/routes/[project-name]/` and `src/data/Projects/[ProjectName]/`
2. Constants: Add enum and route
3. Basic files: `store.ts`, `+layout.svelte`, `NavItems.ts` (with just Intro), skeleton `+page.svelte`

**Confirm:** "Basic structure created. Ready to implement sections one by one?"

## Step 5: Implement Sections Iteratively

**Work on ONE section at a time. Complete it fully before moving to the next.**

### For EACH section in the confirmed order:

#### 5.1: Ask for Section Content
**Start the conversation for this section:**

- **For Intro:** "Let's start with the Intro section. Please provide the intro text. How many paragraphs?"
- **For About:** "Now let's work on About Section [X]. What is the title for this section? And what is the content/text?"
- **For Chat Interview:** "Now let's work on the Chat Interview. Who is the interviewer? Who are the respondents? Please provide the complete conversation."
- **For Artwork Grid:** "Now let's work on Artwork Grid [X]. How many images are in this grid? Do you want to add names or descriptions?"

#### 5.2: Verify Information
**Always verify before implementing:**
"Just to confirm for [Section Name]: [repeat back all information received]. Is this correct?"

- **If user says NO or makes changes:** Ask again and verify until confirmed
- **Only proceed when user confirms:** "Perfect! I'll implement this section now."

#### 5.3: Implement the Section
Create/update the necessary files following the README template exactly. Reference `inherent-instability` or `pet` projects if uncertain.

#### 5.4: Show What Was Created
**Present to user:**
"I've implemented [Section Name]. Here's what I created/updated:
- [List files created/updated]
- [Show key content/configuration]

**Please verify this is correct. Should I make any changes?**"

#### 5.5: Wait for Confirmation
- **If user says it's correct:** "Great! Moving to the next section."
- **If user requests changes:** Make changes, then ask: "Updated. Is this correct now?"
- **Only proceed to next section when current section is confirmed correct**

#### 5.6: Move to Next Section
"Now let's work on [Next Section Name]..."
Repeat steps 5.1-5.5 for the next section.

## Step 6: Final Steps (After All Sections)

Once all sections are implemented and confirmed:

1. **"Let me update the NavBar to ensure all sections are included correctly."**
   - Verify routes match section IDs
   - Check for `shortText` on long titles

2. **"Now I'll add this project to the home page."**
   - Add to `src/constants/projects.ts`
   - Update `src/data/Projects/projects.ts` for footer

3. **"Final verification complete. The project page is ready!"**

## Critical Rules (Verify After Each Section)

- ✅ Image paths use `/media/...` (with `/` at start)
- ✅ Store is initialized with navItems (not empty array)
- ✅ `loadImages()` array order matches section order
- ✅ Image indices in template match `loadImages()` order
- ✅ Routes in NavItems match section `id` values
- ✅ `shortText` used for long NavBar titles

## When Uncertain

**Always reference existing projects:**
- `src/routes/inherent-instability/` - Standard structure reference
- `src/routes/pet/` - ChatInterview and complex components reference

Read the actual files and match the patterns exactly.

## Key Principles

1. **Conversational:** Talk to the user naturally, ask questions, verify understanding
2. **Iterative:** One section at a time, complete it before moving on
3. **Confirm everything:** Never assume, always verify
4. **Show your work:** Tell the user what you're creating and why
5. **Wait for approval:** Don't proceed until user confirms each step

---

## Ready to Start?

**When user wants to add a new project, follow this flow:**

1. **Get project name:**
   - If mentioned: "Great! I'll create a new branch for [project-name]."
   - If not mentioned: "What is the project name?"

2. **Create branch:**
   - `git checkout -b feat/add-[project-name]`
   - Confirm: "Branch created. Ready to start!"

3. **Verify images:**
   - "Have you downloaded all images and organized them in `static/media/[project-name]/`?"
   - If not, wait for user to organize them

4. **Discover sections from folder structure**

5. **Confirm section order with user**

6. **Gather basic project information**

7. **Create basic structure**

8. **Implement sections one by one**, waiting for confirmation after each

**Remember:** This is a conversation. Ask, verify, implement, show, confirm, repeat.
