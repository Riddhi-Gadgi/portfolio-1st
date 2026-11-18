# Assets

Copy your existing images into this folder. They are picked up automatically by
name (see `src/lib/assets.js`), and anything missing falls back to a clean
placeholder instead of breaking the build.

Expected names:

| File                          | Used for                                  |
| ----------------------------- | ----------------------------------------- |
| `riddhi.png`                  | Portrait in Hero, About and Contact       |
| `bhumi-1.jpg` … `bhumi-3.jpg` | Bhumi Gold screenshots (jpg/png/webp ok)  |
| `fin-1.jfif` … `fin-3.jfif`   | Finexa screenshots                        |
| `hive-1.jfif` … `hive-3.jfif` | GitHive screenshots                       |
| `nd-1.jfif` … `nd-3.jfif`     | Note Down screenshots                     |

If you rename files or switch to `.webp`, update the names in `src/data/projects.js`.
