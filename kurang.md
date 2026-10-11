# Daftar yang masih kurang: calculadoraporcentagem.github.io

Status per 9 Oktober 2026. Prioritas: **P0** = wajib sebelum publikasi, **P1** = penting untuk SEO/iklan, **P2** = peningkatan.

## 1. Teknis: belum diverifikasi (P0)

- [ ] **Build Hugo belum pernah dijalankan.** Seluruh template ditulis tanpa Hugo terpasang. Jalankan `hugo server` dan `hugo --gc --minify`, lalu perbaiki error. Bagian berisiko: `Scratch.Add` dengan slice di `glossario/list.html`, `.Ancestors.Reverse`, `site.GetPage`, `index site.Params.adslots $` di `ad.html`, `jsonify | safeJS` di `jsonld.html`.
- [ ] **File font Inter belum ada.** Taruh `static/fonts/inter-var-latin.woff2` (Inter variabel, subset latin). Tanpa itu, preload dan `@font-face` menghasilkan 404.
- [ ] **Versi Hugo di workflow (0.147.0) dan versi action** (`checkout@v4`, `configure-pages@v5`, `upload-pages-artifact@v3`, `deploy-pages@v4`) belum dicek terhadap rilis terbaru.
- [ ] **Repo dan GitHub Pages belum disiapkan:** buat repo bernama `calculadoraporcentagem.github.io`, `git init`, push ke `main`, lalu set Settings → Pages → Source = GitHub Actions.
- [ ] **`enableGitInfo`/`lastmod`:** pastikan `lastmod` tampil benar di CI (butuh `fetch-depth: 0`, sudah ada) dan tidak error saat lokal tanpa git.
- [ ] **QA visual belum dilakukan:** tidak ada screenshot atau uji di browser/ponsel nyata. Cek tata letak navbar, chip, kartu kalkulator, kartu glosarium, dan navigasi A–Z.
- [ ] **Uji fungsional kalkulator di browser:** hanya logika rumus yang diuji lewat Node. Belum diuji: event input, chip, hash `#calc-*`, panel langkah, aksesibilitas pembaca layar.

## 2. Teknis: fitur kalkulator yang direncanakan tapi belum dibuat (P1)

- [x] Tombol **salin hasil** dan tombol **reset** (selesai; uji dengan DOM tiruan, belum di browser nyata).
- [x] **Contoh yang bisa diklik** (selesai; tombol "Usar exemplo").
- [ ] Parser input belum menangani `20%`, tanda minus dengan spasi, atau angka sangat besar. Belum ada pesan error per kolom.
- [ ] **Regra de três inversa** (grandeza inversamente proporcional) belum ada.
- [ ] **Fallback tanpa JS:** tidak ada `<noscript>` yang menjelaskan bahwa hasil butuh JavaScript.
- [ ] **Link yang bisa dibagikan** (parameter URL berisi nilai input) belum ada.
- [ ] Chip beranda belum memakai pola tab ARIA penuh (`role="tablist"`), baru `aria-pressed`.
- [ ] **Skip link** ("Pular para o conteúdo") belum ada.
- [ ] Verifikasi tinggi `.calcbox` (min-height 250px) terhadap tinggi kalkulator sebenarnya di mobile untuk menjaga **CLS = 0**.

## 3. Performa / Core Web Vitals (P0–P1)

- [ ] **Belum ada pengukuran apa pun:** jalankan Lighthouse (mobile + desktop) dan PageSpeed Insights pada beranda, 1 kalkulator, 1 glosarium, 1 panduan.
- [ ] Uji **dengan dan tanpa AdSense**. Target 100 realistis tanpa iklan, dengan iklan kemungkinan 85–98.
- [ ] Tambahkan **Lighthouse CI** ke workflow agar skor dicek tiap push.
- [ ] Verifikasi ukuran CSS inline (target < 15 KB) dan JS (< 5 KB) setelah build.
- [ ] GitHub Pages tidak mengizinkan header kustom (cache, security headers). Evaluasi pindah ke Cloudflare/Netlify bila diperlukan.
- [ ] Pertimbangkan subset font lebih kecil dan cek `size-adjust` fallback terhadap font Inter yang sebenarnya.

## 4. Iklan AdSense (P1)

- [ ] **Domain sendiri.** AdSense umumnya tidak menyetujui subdomain `*.github.io`. Beli domain, pasang CNAME, lalu ubah `baseURL` di `hugo.toml`.
- [ ] **`static/ads.txt`** belum dibuat (dibutuhkan setelah akun AdSense aktif).
- [ ] Isi `params.adsense` dan `params.adslots` setelah unit iklan dibuat.
- [ ] **Slot belum diimplementasi:** baru slot A dan B. Rencana awal punya slot C (±60% artikel), D (sebelum kalkulator terkait), E (sticky anchor mobile), F (sidebar sticky desktop).
- [ ] **Banner persetujuan cookie/CMP (LGPD)** belum ada.
- [ ] Uji **CLS dan viewability** tiap slot setelah iklan nyata tampil. Slot kosong (no-fill) harus tidak meninggalkan celah aneh.
- [ ] Siapkan **syarat persetujuan AdSense:** konten cukup banyak, halaman Kontak, Syarat Penggunaan, Privasi lengkap.

## 5. Halaman dan legal (P0 untuk AdSense)

- [ ] **Halaman Contato** belum dibuat.
- [ ] **Halaman Termos de uso** belum dibuat (disebut di rencana).
- [ ] **Privasi** (`content/privacidade.md`) baru draf singkat: tambahkan identitas pengelola, daftar cookie, hak subjek data (LGPD), cara menghubungi, dan penggunaan Google Analytics bila dipakai.
- [ ] **Sobre**: tambahkan identitas penulis/peninjau, metodologi, dan tanggal revisi (sinyal E-E-A-T).
- [ ] **Disclaimer** hasil perhitungan lebih jelas, terutama untuk margem/markup dan juros.

## 6. Konten: terlalu tipis (P1)

| Bagian | Sekarang | Target |
|---|---|---|
| Artikel beranda | ±330 kata | 1.500–2.000 kata |
| 9 halaman kalkulator | ±150 kata | 800–1.200 kata |
| 34 istilah glosarium | ±40–70 kata | 100–200 kata untuk istilah utama |
| 12 panduan | ±200 kata | 600–900 kata |

- [ ] Halaman kalkulator butuh: langkah-langkah "como calcular", tabel contoh, 4–6 FAQ, kesalahan umum, dan kasus pakai nyata (Black Friday, gaji, MEI).
- [ ] **Tautan internal dalam teks (inline) belum ada.** Panduan menyebut "use a calculadora de X" dan istilah glosarium tanpa link di badan teks. Tambahkan link kontekstual dua arah.
- [ ] **Topik panduan yang belum ada** (kandidat volume tinggi, validasi dulu dengan data): porcentagem no Excel/Planilhas, tabela de porcentagens, porcentagem de nota/média, aumento salarial, porcentagem de desconto na Black Friday, juros simples vs compostos, IMC bukan cakupan, imposto/ICMS bila relevan.
- [ ] **Istilah glosarium tambahan** yang belum ada: percentual, acréscimo, juros simples/compostos, média, proporção direta/inversa, regra de três composta, dll.
- [ ] **Tinjauan penutur asli pt-BR** untuk semua teks (saya menulis dan belum direview manusia). Cek khususnya istilah teknis (permiríade, pcm, centiturn).
- [ ] **Tinjau akurasi** isi yang bukan dari Wikipedia: contoh margem/markup, trik cálculo mental, desconto sucessivo, artikel 2, 6, 8, 9, 10.
- [ ] Tambahkan bagian **Referências/Fontes** di tiap halaman, dengan sumber pt-BR (mis. Wikipedia PT, materi pendidikan) selain Wikipedia EN, dan pernyataan atribusi CC BY-SA yang jelas.

## 7. SEO teknis dan indeksasi (P1)

- [ ] Daftarkan di **Google Search Console** dan **Bing Webmaster Tools**, verifikasi kepemilikan, lalu submit `sitemap.xml`.
- [ ] Aktifkan **IndexNow** (file kunci + ping saat deploy).
- [ ] **Validasi schema** dengan Rich Results Test dan validator.schema.org (WebApplication, FAQPage, DefinedTerm, Article, BreadcrumbList). Belum dijalankan.
- [ ] **Organization** belum punya `logo`, `sameAs`, atau kontak. Artikel memakai Organization sebagai author, pertimbangkan Person dengan halaman profil.
- [ ] **Gambar OG/Twitter** dan favicon, apple-touch-icon, `manifest` belum ada. Logo masih teks.
- [ ] Verifikasi hasil render: canonical, hreflang, panjang title (<60 karakter) dan meta description unik di semua halaman.
- [ ] Verifikasi `robots.txt`, `llms.txt`, dan `sitemap.xml` setelah build (perlu cek konfigurasi output format `llms`). Pertimbangkan `llms-full.txt`.
- [ ] Rich result FAQ di Google dibatasi untuk jenis situs tertentu, jadi dampaknya utamanya untuk pemahaman mesin/AI, bukan tampilan di SERP.
- [ ] **Pemeriksa tautan rusak dan validasi HTML** (mis. htmltest) belum ada di CI.

## 8. Riset dan strategi (P1)

- [ ] **Riset kata kunci:** 9 kalkulator dipilih dari perkiraan, belum divalidasi dengan Google Trends, Keyword Planner, atau Search Console. Urutan dan judul halaman mungkin perlu disesuaikan.
- [ ] **Analisis SERP pesaing** (calculadora de porcentagem, calcular desconto, regra de três) untuk menentukan kedalaman konten.
- [ ] **Pengukuran GEO/AI:** uji manual pertanyaan di ChatGPT, Claude, Perplexity setelah terindeks. Tidak ada jaminan situs akan dikutip.
- [ ] **Analytics** belum dipasang (pilih Plausible/GA4/Cloudflare dan selaraskan dengan persetujuan cookie LGPD).
- [ ] **Backlink dan promosi:** belum ada rencana (direktori, komunitas pendidikan/finansial Brasil, digital PR, profil sosial untuk `sameAs`).
- [ ] **Jadwal pemeliharaan:** perbarui `lastmod` hanya saat konten benar-benar berubah, tinjau konten berkala.

## 9. Urutan pengerjaan yang disarankan

1. Jalankan build, perbaiki error, tambahkan font, deploy ke GitHub Pages (bagian 1).
2. Buat halaman Contato, Termos, lengkapi Privasi dan Sobre (bagian 5).
3. Perluas konten kalkulator dan beranda, tambahkan link inline (bagian 6).
4. Ukur Lighthouse/CWV, daftarkan Search Console dan Bing, validasi schema (bagian 3 dan 7).
5. Beli domain, ajukan AdSense, implementasi slot dan CMP (bagian 4).
6. Tambah panduan baru berbasis data kata kunci (bagian 6 dan 8).
