# Clinic Landing Page Generator — Prompt for Claude Code

You have a CSV file with eye clinic prospects (columns: `name`, `website_url`). You also have a template project at:

```
/Users/timob/Documents/TrafficToTalks/Dream100/ooglaserklinieken d100 claude/v0-premium-clinic-template/
```

This is a Next.js/TypeScript project (live example: https://v0-premium-clinic-template.vercel.app/). For each clinic in the CSV, you will **clone this template** and modify only specific sections — the rest of the page stays exactly the same.

**Language rule:** The new copy you write for the 4 content sections (trust bar, why choose us, doctors, footer) must match the language of the clinic's website. If the clinic's site is in Dutch, write Dutch copy. If it's in English, write English copy. Detect the language from the website during scraping.

---

## WHAT TO SCRAPE PER CLINIC

Visit the clinic's website and extract **only** these 6 things:

### 1. Logo
- Find the clinic's logo image (usually in the header/navbar)
- Download it to `/public/images/` and name it `logo-[clinic-name].png`

### 2. Brand Colors (2 colors needed)
From the clinic's website, extract:
- **Accent color** (their primary brand color — used for buttons, highlights, links). This replaces `#60cfff` / `rgb(96, 207, 255)`
- **Dark color** (their dark brand color — used for dark backgrounds, headings). This replaces `#0d3d56` / `rgb(13, 61, 86)`

If the clinic's site is mostly white/neutral, pick their most prominent brand color as accent. For dark, derive a dark shade from the same hue family.

Also derive these from the 2 base colors:
- **brand-primary-light**: a lighter tint of accent (replaces `#8edcff`)
- **brand-primary-dark**: a darker shade of accent (replaces `#40b8eb`)
- **brand-dark**: a mid-dark shade (replaces `#18567a`)
- **brand-light**: a very light tint for section backgrounds (replaces `#f0f6f9`)
- **brand-subtle**: a subtle tint (replaces `#e8f4f8`)
- **border color**: a light border color in the same hue family (replaces `#e0ecf0`)
- **muted-foreground**: a muted text color (replaces `#6b7b84`)

### 3. Trust Bar Stats (5 items)
Scrape the clinic's distinguishing features — things like:
- Number of treatments/surgeries performed
- Years of experience
- Number of locations
- Certifications, awards, or "first to offer X"
- Number of reviews or rating

Format: array of 5 `{ icon, label, highlight }` objects. Pick appropriate Lucide icons.

### 4. Why Choose Us (6 items)
Find the clinic's unique selling points — look at their homepage, about page, and service pages for:
- Unique technology or methods they use
- Experience/track record
- Patient care approach
- Convenience factors (locations, hours, etc.)
- Specializations
- Any certifications or guarantees

Format: array of 6 `{ icon, title, description, stat }` objects.

### 5. Doctors
Find all doctors/specialists listed on the website:
- Full name with title (e.g., "Dr. Jan de Vries, M.D.")
- Specialty/role
- Photo — download to `/public/images/` named `dr-[lastname].jpg`

Format: array of `{ name, role, image }` objects.

### 6. Footer Info
- Clinic full name
- Location(s) — name + short description per location
- Any tagline or descriptive subtitle they use

---

## WHAT TO MODIFY

### File 1: `components/trust-bar.tsx`
Replace only:
- The `stats` array (lines 6-12) with the 5 scraped trust bar items
- The heading text "Advanced vision care in Northern Virginia" (line 82) with a relevant heading for this clinic

### File 2: `components/proof-section-new.tsx`
Replace only:
- The `doctors` array (lines 10-41) with the scraped doctors
- The `whyChooseFeatures` array (lines 43-80) with the scraped USPs
- Do **NOT** touch the `testimonials` array or any other content

### File 3: `components/footer.tsx`
Replace only:
- The clinic name heading (line 29): "Eye Specialists and Surgeons of Northern Virginia"
- The subtitle (line 32): "Serving Northern Virginia..."
- The location cards (lines 37-95): update with the clinic's actual locations
- Do **NOT** change the Quick Links section or the Disclaimer

### File 4: `components/header.tsx`
Replace only:
- The logo image path (line 38): update `src` to the new logo filename
- The `alt` text (line 39): update to the clinic's name

### File 5: `components/hero-section.tsx`
Replace only:
- The logo image path (line 182): update `src` to the new logo filename

### File 6: `app/globals.css`
Replace the CSS custom properties in `:root` (lines 6-16):
```css
--brand-primary: [NEW ACCENT COLOR];
--brand-primary-light: [DERIVED LIGHTER TINT];
--brand-primary-dark: [DERIVED DARKER SHADE];
--brand-deep: [NEW DARK COLOR];
--brand-dark: [DERIVED MID-DARK];
--brand-text: #424342;  /* keep as-is */
--brand-light: [DERIVED VERY LIGHT TINT];
--brand-subtle: [DERIVED SUBTLE TINT];
--brand-accent: [NEW ACCENT COLOR];
```

Also update these variables in `:root`:
- `--primary`: set to new brand-dark value
- `--secondary`: set to new brand-light value
- `--secondary-foreground`: set to new brand-dark value
- `--muted`: set to new brand-light value
- `--muted-foreground`: set to new muted-foreground value
- `--accent`: set to new accent color
- `--ring`: set to new accent color
- `--border`: set to new border color
- `--input`: set to new border color

### Global color replacement (ALL files)
After updating the CSS variables, do a **find-and-replace across all component files**:

| Find | Replace with |
|------|-------------|
| `#60cfff` | new accent color hex |
| `#0d3d56` | new dark color hex |
| `#18567a` | new brand-dark hex |
| `#40b8eb` | new brand-primary-dark hex |
| `#8edcff` | new brand-primary-light hex |
| `#f0f6f9` | new brand-light hex |
| `#e8f4f8` | new brand-subtle hex |
| `#e0ecf0` | new border color hex |
| `#6b7b84` | new muted-foreground hex |
| `rgba(96, 207, 255,` | `rgba(NEW_R, NEW_G, NEW_B,` |
| `rgba(13, 61, 86,` | `rgba(NEW_DARK_R, NEW_DARK_G, NEW_DARK_B,` |
| `rgba(24, 86, 122,` | `rgba(NEW_BRAND_DARK_R, NEW_BRAND_DARK_G, NEW_BRAND_DARK_B,` |

**Important:** Keep all opacity values exactly the same — only change the RGB values.

---

## WHAT STAYS THE SAME

Everything not listed above remains **untouched**:
- All copy in hero-section.tsx (except logo path)
- All copy in problem-section.tsx
- All copy in solution-section-new.tsx
- All copy in authority-quote-section.tsx
- All copy in faq-section.tsx
- All copy in final-cta-section.tsx
- All copy in booking-popup.tsx
- The testimonials in proof-section-new.tsx
- The layout, animations, component structure
- All images except: logo and doctor photos

---

## DEPLOYMENT

For each clinic:
1. Copy the entire template project to a new directory named `[clinic-name]-landing`
2. Make all modifications described above
3. Create a GitHub repo named `[clinic-name]-landing`
4. Push the code
5. Deploy to Vercel (or enable GitHub Pages if using static export)
6. Record the live URL back in the CSV

---

## PROCESS SUMMARY

```
For each row in CSV:
  1. Read clinic name + URL
  2. Scrape website → extract 6 data points (logo, colors, trust stats, USPs, doctors, footer info)
  3. Copy template to new folder
  4. Replace logo file in /public/images/
  5. Update globals.css color variables
  6. Find-and-replace all hardcoded color hex values across all files
  7. Update trust-bar.tsx stats array + heading
  8. Update proof-section-new.tsx doctors + whyChooseFeatures arrays
  9. Update footer.tsx name, subtitle, locations
  10. Update header.tsx + hero-section.tsx logo paths
  11. Deploy
```
