# 🚀 Portfolio Website - Aditya Tri Prasetyo

Website portfolio modern dengan tema **Cyberpunk** yang interaktif, responsif, dan kaya animasi untuk menampilkan karya dan pencapaian profesional.

![Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk-00f3ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ready-00ff00?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-ff00ff?style=for-the-badge)

---

## 👤 Profil

**Nama**: Aditya Tri Prasetyo  
**Pendidikan**: Lulusan S1 Ekonomi Pembangunan  
**IPK**: 3.25  
**Keahlian**: Konsultan Akademik, Asisten Penelitian, Scriptwriter

---

## ✨ Fitur Website

### 🎨 Desain Modern Cyberpunk
- Warna neon cyan, magenta, dan yellow
- Background animasi grid dan particles
- Efek glitch pada judul
- Gradient text dan neon glow effects

### 🎬 Animasi Interaktif
- **Microinteractions**: Hover effects pada cards dan buttons
- **Transisi Halus**: Smooth transitions antar menu
- **Animated Background**: Grid bergerak dan floating particles
- **Cursor Trail**: Efek jejak cursor (desktop)
- **Ripple Effects**: Efek gelombang pada klik button

### 📱 Fully Responsive
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

### 📂 4 Menu Portfolio Utama

#### 1. 🎓 Konsultan Akademik (10 files)
- 4 file Word (.docx)
- 3 file Excel (.xlsx)
- 3 file PowerPoint (.pptx)

#### 2. 🔬 Asisten Penelitian (7 files)
- 7 file Word (.docx)

#### 3. ✍️ Scriptwriter (7 files)
- 7 file Word (.docx)

#### 4. 🏆 Sertifikasi (Fleksibel)
- File PDF sertifikat profesional

---

## 📁 Struktur Folder

```
MyPortfolio/
│
├── index.html              # Halaman utama website
├── styles.css              # Semua styling dan animasi
├── script.js               # JavaScript untuk interaktivitas
├── README.md               # Dokumentasi ini
│
└── assets/                 # Folder untuk semua file portfolio
    ├── README.md           # Panduan pengisian file
    ├── konsultan/          # 10 files (docx, xlsx, pptx)
    ├── penelitian/         # 7 files (docx)
    ├── scriptwriter/       # 7 files (docx)
    └── sertifikasi/        # Files PDF
```

---

## 🚀 Cara Menggunakan

### 1️⃣ Persiapan File Portfolio

Masukkan file-file portfolio Anda ke dalam folder `assets/` sesuai kategori:

**Konsultan Akademik** (`assets/konsultan/`):
- `analisis-ekonomi-makro.docx`
- `proposal-skripsi.docx`
- `metodologi-penelitian.docx`
- `bimbingan-akademik.docx`
- `data-analisis-ekonomi.xlsx`
- `model-ekonometrika.xlsx`
- `dashboard-indikator.xlsx`
- `presentasi-ekonomi.pptx`
- `seminar-proposal.pptx`
- `sidang-skripsi.pptx`

**Asisten Penelitian** (`assets/penelitian/`):
- `penelitian-kemiskinan.docx`
- `analisis-umkm.docx`
- `inflasi-pengangguran.docx`
- `investasi-asing.docx`
- `pembangunan-regional.docx`
- `ekonomi-digital.docx`
- `kebijakan-fiskal.docx`

**Scriptwriter** (`assets/scriptwriter/`):
- `script-video-edukasi.docx`
- `artikel-ekonomi.docx`
- `podcast-script.docx`
- `konten-medsos.docx`
- `webinar-script.docx`
- `press-release.docx`
- `blog-content.docx`

**Sertifikasi** (`assets/sertifikasi/`):
- `data-analysis.pdf`
- `ekonometrika.pdf`
- `financial-modeling.pdf`
- `python-economics.pdf`
- `content-writing.pdf`
- `research-methods.pdf`

### 2️⃣ Membuka Website

**Opsi 1: Langsung di Browser**
- Double-click file `index.html`
- Website akan terbuka di browser default Anda

**Opsi 2: Menggunakan Live Server (Recommended)**
- Buka folder di VS Code
- Install extension "Live Server"
- Klik kanan pada `index.html` → "Open with Live Server"
- Website akan terbuka dengan auto-reload

### 3️⃣ Kustomisasi

#### Mengubah Informasi Personal
Edit file `index.html`:
- Bagian Hero (baris 49-85): Nama, subtitle, deskripsi
- Footer (baris 343-369): Kontak dan social media

#### Menambah/Mengurangi Project Cards
Edit file `index.html`:
- Temukan section yang ingin diubah (konsultan, penelitian, dll)
- Copy/paste struktur `<div class="project-card">...</div>`
- Sesuaikan judul, deskripsi, dan link file

#### Mengubah Warna Tema
Edit file `styles.css` bagian `:root` (baris 15-28):
```css
--primary-cyan: #00f3ff;      /* Warna cyan utama */
--primary-magenta: #ff00ff;   /* Warna magenta utama */
--primary-yellow: #ffff00;    /* Warna yellow */
```

#### Menambah Animasi
File `script.js` sudah dilengkapi dengan:
- Fungsi navigasi smooth
- Animasi cards
- Particle effects
- Cursor trail
- Dan banyak lagi!

---

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur semantic dan modern
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables
  - Keyframe Animations
  - Gradients & Filters
  - Backdrop Filters
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer
  - Animation Frame API

---

## 📱 Kompatibilitas Browser

✅ Chrome (Recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Opera

---

## ⚡ Performa & Optimasi

- **Lazy Loading**: Animasi dimulai saat elemen terlihat
- **Debounce & Throttle**: Optimasi event listeners
- **CSS Hardware Acceleration**: Smooth animations
- **Responsive Images**: Optimal untuk semua device
- **Minimal Dependencies**: No framework, pure vanilla JS

---

## 🎯 Fitur Khusus

### Keyboard Navigation
- **Arrow Right/Down**: Menu berikutnya
- **Arrow Left/Up**: Menu sebelumnya

### Microinteractions
- **Hover Effects**: Pada cards, buttons, dan links
- **Click Ripples**: Efek gelombang saat klik
- **Card Tilt**: Efek 3D pada certificate cards
- **Glitch Effect**: Pada title hero section

### Animasi Background
- **Grid Lines**: Bergerak vertikal
- **Floating Particles**: Partikel yang melayang
- **Neon Glow**: Efek cahaya neon yang berdenyut

---

## 🔧 Troubleshooting

### File tidak bisa di-download?
- Pastikan nama file di `index.html` sama persis dengan nama file di folder `assets/`
- Periksa path file sudah benar
- Coba buka di browser lain

### Animasi tidak muncul?
- Buka Console (F12) dan cek error
- Pastikan file `script.js` ter-load dengan benar
- Coba refresh halaman (Ctrl + F5)

### Website tidak responsive di mobile?
- Pastikan sudah ada tag `<meta name="viewport">` di HTML
- Cek CSS media queries aktif
- Test di browser mobile atau gunakan DevTools

---

## 📝 Customization Tips

### Menambah Section Baru
1. Copy struktur `<section>` yang sudah ada
2. Beri `id` unik
3. Tambahkan link di navigation
4. Update array `sections` di `script.js`

### Mengubah Font
Edit di `index.html` bagian `<link>` Google Fonts dan di `styles.css`:
```css
--font-heading: 'Orbitron', sans-serif;
--font-body: 'Rajdhani', sans-serif;
```

### Menambah Animasi Custom
Gunakan CSS `@keyframes` di `styles.css`:
```css
@keyframes myAnimation {
    0% { /* starting state */ }
    100% { /* ending state */ }
}
```

---

## 📞 Kontak & Support

Jika ada pertanyaan atau butuh bantuan kustomisasi:

📧 Email: aditya.triprasetyo@email.com  
💼 LinkedIn: [Update di footer]  
🐙 GitHub: [Update di footer]

---

## 📄 Lisensi

© 2025 Aditya Tri Prasetyo. All Rights Reserved.

Anda bebas menggunakan template ini untuk portfolio personal. 
Dilarang menjual atau mendistribusikan template ini tanpa izin.

---

## 🎉 Terima Kasih!

Website portfolio ini dibuat dengan ❤️ dan ☕ 

**Happy Showcasing Your Work! 🚀**

---

## 📌 Checklist Setup

- [ ] Copy semua file portfolio ke folder `assets/`
- [ ] Update informasi personal di `index.html`
- [ ] Update kontak di footer
- [ ] Test semua link download
- [ ] Test responsiveness di berbagai device
- [ ] Optimize ukuran file jika perlu
- [ ] Deploy ke hosting (GitHub Pages, Netlify, Vercel, dll)

---

*Last Updated: November 2025*
