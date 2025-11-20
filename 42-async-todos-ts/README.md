# Async Todos TS

## Backend installation

```bash
cd backend
npm install
npm run server
```

Access resource-view via <http://localhost:3001/>.

### Resources

#### `/todos`

Todos (who'da guessed).

## Frontend installation

Create a new Vite-app with Vanilla-TS template.

```bash
npm create vite@latest frontend -- --template vanilla-ts
cd frontend
npm install
npm run dev
```

Access via <http://localhost:5173/> (probably), but check the output to be sure.


### Clean out files 🧹

* Delete `public/vite.svg`, `src/counter.ts`, `src/typescript.svg`, `src/style.css` and `src/main.ts`
* Create empty files `public/.gitkeep` and `src/main.ts`
* Create folder `src/assets` and `src/assets/scss`
* Create empty file `src/assets/scss/app.scss`

```bash
rm public/vite.svg src/counter.ts src/typescript.svg src/style.css src/main.ts
touch public/.gitkeep src/main.ts
mkdir -p src/assets/scss
touch src/assets/scss/app.scss
```

### Install Bootstrap and SASS

```bash
npm install -D bootstrap
npm install -D -E sass@1.77.6
```

### Copy HTML and styles

Copy the `<div class="container py-2">` from `38-async-todos` and replace `<div id="app">` with this.

Copy content of `41-typescript-todos/src/style.css` to `src/assets/scss/app.scss` (and import with `@import "bootstrap/scss/bootstrap";`).
