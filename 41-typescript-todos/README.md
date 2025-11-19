# TypeScript Todos

A Vite-app using the Vanilla TypeScript template.

## Reproduce

### Step 1

Create a new Vite-app using the `vanilla-ts` template with the following command:

```bash
npm create vite@latest . -- --template vanilla-ts
```

When asked for "Use rolldown-vite (Experimental)", choose "No". Same for "Install with npm and start now", choose "No".

This creates a new app **in the current folder**.

### Step 2

Run `npm install`.

### Step 3

* Delete `public/vite.svg`.
* Delete `src/counter.ts`.
* Empty `src/main.ts`.
* Empty `src/style.css`.
* Delete `src/typescript.svg`.

### Step 4

Create empty file `public/.gitkeep`, either in VS Code or using the command `touch public/.gitkeep`.

### Step 5

Fix `index.html` so it uses tabs instead of spaces 🤩. Also change the favicon as we deleted the previous one.

### Step 6

Start the dev-server by running `npm run dev` (preferably from the integrated terminal in VS Code).

### Step 7

Import `style.css` in `main.ts`:

```ts
import "./style.css";
```
