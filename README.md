# Portfolio — A. Dian Mustika Anugrah

Website portfolio satu halaman (single page) bertema pink–putih minimalis.
Dibangun dengan **React 19 + Vite + Tailwind CSS v4**.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil produksi di dist/
npm run preview  # pratinjau hasil build
```

## Menambahkan foto

Simpan pas foto dengan nama **`public/dian.jpg`**.
Selama berkas itu belum ada, kartu foto di hero otomatis menampilkan inisial "DM"
sebagai cadangan (lihat `src/components/Photo.jsx`).

Ingin memakai format lain (mis. `.png`)? Ubah nilai `photo` di `src/data.js`.

## Mengubah isi

Semua teks (profil, pendidikan, pengalaman, keahlian, kontak) ada di satu berkas:
**`src/data.js`**. Komponen hanya membaca data dari sana, jadi tidak perlu
menyentuh JSX untuk memperbarui konten CV.

## Struktur

```
src/
  data.js                 # seluruh konten website
  index.css               # tema Tailwind (warna blush/ink, font, animasi)
  App.jsx                 # susunan section
  hooks/
    useReveal.js          # animasi muncul saat di-scroll
    useActiveSection.js   # highlight menu aktif
  components/
    Navbar.jsx            # nav sticky + progress bar + menu mobile
    Hero.jsx              # hero, statistik animasi, marquee keahlian
    About.jsx             # profil & bidang fokus
    Education.jsx         # riwayat pendidikan
    Experience.jsx        # tab Profesional / Organisasi
    Skills.jsx            # filter kategori keahlian
    Contact.jsx           # kontak + salin ke clipboard
    Footer.jsx  BackToTop.jsx  Photo.jsx  Icon.jsx  Reveal.jsx  Counter.jsx
```

## Fitur interaktif

- Navigasi sticky dengan indikator progres baca dan penanda section aktif
- Menu mobile (hamburger)
- Animasi reveal saat elemen masuk layar (IntersectionObserver)
- Penghitung angka statistik (IPK 3.92) yang berjalan naik
- Marquee kata kunci keahlian
- Tab pengalaman Profesional / Organisasi
- Filter kategori pada bagian Keahlian
- Tombol salin email/telepon/domisili + tombol kembali ke atas
- Responsif dan menghormati `prefers-reduced-motion`

## Deploy

Hasil `npm run build` (folder `dist/`) bisa langsung di-upload ke
Vercel, Netlify, atau GitHub Pages.
