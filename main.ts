// The World in One Day - a news-image entry for make.fun (Node 22, standard library only).
// The image beside this file (entry.png) sums up the world news of Sunday 22 November 2026;
// the program copies it to /output/entry.png, byte for byte, on every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
