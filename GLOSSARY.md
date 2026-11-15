# Portfolio

Personal portfolio site for Fullchee Zhang.

## Glossary

- **Project** — one case study, either a side project or a past employer. A Project has a stable `slug`, card copy, images, optional links and skills. Records live in `lib/projects.ts`.
- **Case study** — the page at `/project/<slug>` that presents a Project. `ProjectPage` renders the heading, overview, hero and the list of other Projects.
- **Skill** — a technology label and icon shown on the home page and on case studies. The `Skill` type lives in `lib/skills.ts`.
