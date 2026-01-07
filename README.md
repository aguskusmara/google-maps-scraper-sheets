# 🛰️ Google Maps Scraper (Google Sheets Edition)

[**Bahasa Indonesia**](#bahasa-indonesia) | [**English**](#english)

---

## Bahasa Indonesia

Alat otomatisasi berbasis **Google Apps Script** untuk mengekstraksi data bisnis dari Google Maps secara massal langsung ke Google Sheets. Solusi ideal untuk *lead generation*, riset pasar, dan pengumpulan data tanpa perlu coding.

<img width="1914" alt="Dashboard Scraper" src="https://github.com/user-attachments/assets/e5744287-4303-4612-abdc-9dd3cd938870" />

| Fitur | Versi FREE | Versi PRO 🚀 |
| :--- | :--- | :--- |
| **Batas Data** | Maks 50 Baris / Scrape | **Tanpa Batas (Unlimited)** |
| **Data Kontak** | 🔒 Terkunci (Setelah 50 Data) (PRO Only) | ✅ Terbuka (Telepon & Web) |
| **Detail Lokasi** | ✅ Provinsi - Kelurahan | ✅ Provinsi - Kelurahan |
| **Link Maps & Status** | 🔒 Terkunci (PRO Only) | ✅ Terbuka Langsung |
| **Jeda Waktu** | **Tanpa Jeda (Instan)** | **Tanpa Jeda (Instan)** |
| **Dukungan** | Komunitas | **Prioritas 1-on-1** |

> **Tertarik dengan Versi PRO?** [Hubungi Saya di WhatsApp](https://wa.me/6282111200672) untuk akses penuh tanpa jeda!

### ✨ Fitur Utama
* **No-Code:** Berjalan sepenuhnya di Google Sheets tanpa instalasi software tambahan.
* **Antarmuka Sidebar:** Menu pencarian yang intuitif langsung di dalam spreadsheet.
* **Data Lengkap:** Mengambil Nama Bisnis, Telepon, Alamat, Website, hingga Status Buka.
* **Geo-Targeting:** Mendukung pemilihan Negara dan Bahasa untuk hasil yang akurat.

### 🚀 Cara Menggunakan
1. **Salin Template:** [Klik di sini untuk menyalin template](https://docs.google.com/spreadsheets/d/13xsE_51TdR3IhmXl5LOyEOLpT9mZiknCDPQIegb_SFk/copy).
2. **Buka Menu Scraper:** Klik menu **"Scraper"** di toolbar atas, lalu pilih **"Buka Sidebar"**.
3. **Konfigurasi:** Pilih Negara, Bahasa, dan masukkan kata kunci pencarian (contoh: "Coffee Shop Jakarta").
4. **Jalankan:** Klik tombol **"Jalankan Scraper"** dan data akan muncul otomatis.


---

## 🛠️ Technical Implementation (Code.gs)

Project ini menggunakan arsitektur **Library** untuk memastikan skrip tetap ringan dan mudah diperbarui. Berikut adalah potongan kode utama yang digunakan:

```javascript
("use strict");

const Client = {
  prop: PropertiesService.getScriptProperties(),
  cache: CacheService.getScriptCache(),
  globalThis: globalThis,
};

// Initialize GOOGLEMAPS Library
GOOGLEMAPS.init({ client: Client });

const onInstall = (e) => onOpen(e);
const onOpen = (e) => GOOGLEMAPS.onOpen(e);
function callGsServer() { }
```

[⬆ Kembali ke Atas](#🛰️-google-maps-scraper-google-sheets-edition)

---

## English

An automation tool powered by **Google Apps Script** to extract business data from Google Maps directly into Google Sheets. Perfect for lead generation, market research, and data collection with zero coding required.

<img width="1914" alt="Scraper Preview" src="https://github.com/user-attachments/assets/4721ce3f-e8a7-462a-b08d-57e53b5f8c6c" />

## 💎 Choose Your Version

| Feature | FREE Edition | PRO Edition 🚀 |
| :--- | :--- | :--- |
| **Data Limit** | Max 50 Rows / Scrape | **Unlimited** |
| **Contact Data** | 🔒 Locked After 50 (PRO Only) | ✅ Unlocked (Phone & Web) |
| **Location Details** | ✅ State to Village level | ✅ State to Village level |
| **Maps Link & Status** | 🔒 Locked (PRO Only) | ✅ Instant Access |
| **Cooldown** | **No Delay (Instant)** | **No Delay (Instant)** |
| **Support** | Community-based | **Priority 1-on-1** |

> **Interested in the PRO Version?** > [Contact me on WhatsApp](https://wa.me/6282111200672) or [Buy me a coffee](https://www.paypal.com/paypalme/aguskusmara) to get full access!

### ✨ Key Features
* **No-Code:** Runs entirely on Google Sheets without any software installation.
* **Sidebar Interface:** Intuitive search menu directly within your spreadsheet.
* **Comprehensive Data:** Extracts Business Name, Phone, Address, Website, and Opening Status.
* **Geo-Targeting:** Supports Country and Language selection for accurate results.

### 🚀 How to Use
1. **Copy Template:** [Click here to copy the template](https://docs.google.com/spreadsheets/d/13xsE_51TdR3IhmXl5LOyEOLpT9mZiknCDPQIegb_SFk/copy).
2. **Open Scraper Menu:** Click the **"Scraper"** menu in the top toolbar, then select **"Open Sidebar"**.
3. **Configure:** Select Country, Language, and enter your search keyword (e.g., "Gym in Singapore").
4. **Run:** Click the **"Run Scraper"** button and watch the data populate automatically.

---

## 🛠️ Technical Implementation (Code.gs)

This project utilizes a **Library** architecture to ensure the script remains lightweight, organized, and easy to update centrally.

```javascript
("use strict");

const Client = {
  prop: PropertiesService.getScriptProperties(),
  cache: CacheService.getScriptCache(),
  globalThis: globalThis,
};

// Initialize GOOGLEMAPS Library
GOOGLEMAPS.init({ client: Client });

const onInstall = (e) => onOpen(e);
const onOpen = (e) => GOOGLEMAPS.onOpen(e);
function callGsServer() { }
```
[⬆ Back to Top](#🛰️-google-maps-scraper-google-sheets-edition)

---

### 📊 Data Output Details

| No | Column Name | FREE Edition | PRO Edition |
| :--- | :--- | :---: | :---: |
| 1-3 | ID, Business Name, Category | ✅ | ✅ |
| 4-5 | **Phone, Website** | 🔒 Locked | ✅ Unlocked |
| 6-9 | State, City, District, Village | ✅ | ✅ |
| 10 | Full Address | ✅ | ✅ |
| 11 | Opening Status | 🔒 Locked | ✅ Unlocked |
| 12-13| Type, Facilities | 🔒 Locked | ✅ Unlocked |
| 14 | **Google Maps Link** | 🔒 Locked | ✅ Unlocked |

---

## ⚠️ Disclaimer
Project ini dibuat untuk tujuan edukasi. Harap gunakan secara bijak sesuai dengan ketentuan layanan Google.
This project is for educational purposes. Please use it responsibly and in accordance with Google's Terms of Service.
