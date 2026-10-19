# Portofolio Vue

Portofolio Azka CSS — hasil migrasi dari `portofolio-azka` (Laravel Blade) ke **Vue 3 + Tailwind CSS**.

## Tech Stack

- [Vue 3](https://vuejs.org) — Composition API + `<script setup>`
- [Vue Router 4](https://router.vuejs.org) — client-side routing (SPA)
- [Tailwind CSS 4](https://tailwindcss.com) — via plugin Vite (`@tailwindcss/vite`)
- [Vite](https://vite.dev) — dev server & build

## Menjalankan Project

```bash
npm install
npm run dev        # dev server di http://localhost:5173
npm run build      # build produksi ke folder dist/
npm run preview    # preview hasil build
```

## Struktur Project

```
src/
├── main.js                  # Entry point
├── App.vue                  # Layout utama (pengganti layouts/app.blade.php)
├── assets/
│   └── main.css             # Tailwind + dark mode + font
├── router/
│   └── index.js             # Daftar route (pengganti routes/web.php)
├── data/
│   └── portfolio.js         # DATA utama — array projects & articles
├── components/
│   ├── SiteHeader.vue       # Navbar + toggle dark mode
│   └── SiteFooter.vue       # Social icons + tombol QRIS
└── views/                   # Pengganti file blade per-halaman
    ├── HomeView.vue         # home.blade.php
    ├── AboutView.vue        # about.blade.php
    ├── WorkView.vue         # work.blade.php
    ├── BlogView.vue         # blog.blade.php
    ├── ContactView.vue      # contact.blade.php
    └── QrisView.vue         # qris.blade.php
public/
└── images/                  # hero-statue.png & qris.jpeg (disalin dari project lama)
```

## Data Array — Mudah Dimigrasikan

Semua konten project & artikel kini berada di **satu file**: `src/data/portfolio.js`.

| Sebelum (Laravel)                    | Sesudah (Vue)              |
| ------------------------------------ | -------------------------- |
| `$projects` di `routes/web.php`      | `projects`                 |
| `$articles` di `routes/web.php`      | `articles`                 |
| `request('selected', 'default-slug')`| `route.query.selected`     |
| `url()->current() ?selected=`        | `router.push({ query })`   |
| `url()->previous()`                  | `router.go(-1)`            |

### Menambah project baru (contoh)

Edit `src/data/portfolio.js`:

```js
export const projects = {
    'penjualan-laravel': {
        num: '01',
        title: 'Laravel POS & Cashier System',
        // ...
    },
    // tambahkan di sini:
    'project-baru': {
        num: '03',
        title: 'Project Baru',
        short_desc: '...',
        featured_title: '...',
        featured_desc: '...',
        preview_label: '...',
        link: 'https://...',
    },
}
```

Halaman `/work` akan otomatis merapat item baru tanpa mengubah komponen — sama seperti `@foreach` versi Laravel.

## Dark Mode

Dark mode tetap berbasis `class` di `<html>` dengan `localStorage` (sama seperti project Laravel). Script inisialisasi berada di `index.html` dan berjalan sebelum Vue mount untuk mencegah "flash" tema.
