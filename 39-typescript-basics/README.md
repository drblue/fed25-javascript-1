# TypeScript Basics

## Setup from scratch

`cd` into your copy of this folder (if it doesn't contain a `package.json`) and run the following commands:

```bash
npm init -y
npm install -D typescript
```

Make sure you get a version number when running:

```bash
npx tsc -v
```

Should output something like `Version 5.9.3`.

Create a `tsconfig.json` (TypeScript config file):

```bash
npx tsc --init
```

Rename `script.js` to `script.ts`, add some code and transpile it to JavaScript by running

```bash
npx tsc script.ts
```

This will create `script.js` which is a JavaScript-version of `script.ts`.

We can also watch for changes to `script.ts` and automatically transpile it to JavaScript by running

```bash
npx tsc script.ts --watch
```
