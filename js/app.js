/**
 * Bank Mandiri Merchant Monitoring & Early Warning System (EWS)
 * Area: Area Gading Serpong (KC Gading Serpong, KCP Springs Summarecon, KCP Borobudur, KCP Curug)
 * Branch Manager: Ratna Primasari
 */

// Sample Merchant Dataset for Table 1 (Merchant Overview & EWS)
const merchantsData = [
  {
    id: "MID-8829101",
    name: "Restoran Padang Pagi Sore Gading Serpong",
    owner: "H. Syukri Mansur",
    category: "Restoran & F&B",
    icon: "fa-utensils",
    avatarClass: "avatar-resto",
    service: "EDC & Livin'",
    serviceBadge: "service-edc",
    branch: "KC Gading Serpong",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 0,
    txnCount: "2,480",
    volume: "Rp 348.500.000",
    rawVolume: 348500000,
    trend: "+18.4%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-8840212",
    name: "Toko Elektronik Berkah SMS (Summarecon)",
    owner: "Budi Gunawan",
    category: "Grosir & Ritel",
    icon: "fa-tv",
    avatarClass: "avatar-retail",
    service: "EDC Mandiri",
    serviceBadge: "service-edc",
    branch: "KC Gading Serpong",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 0,
    txnCount: "1,120",
    volume: "Rp 512.400.000",
    rawVolume: 512400000,
    trend: "+14.2%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-7731994",
    name: "Minimarket Ruko Springs Boulevard",
    owner: "Siti Rahmawati",
    category: "Grosir & Ritel",
    icon: "fa-basket-shopping",
    avatarClass: "avatar-retail",
    service: "EDC Mandiri",
    serviceBadge: "service-edc",
    branch: "KCP Springs Summarecon",
    status: "Dormant >30 Hari",
    statusClass: "status-dormant-badge",
    dormantDays: 38,
    txnCount: "0",
    volume: "Rp 0",
    rawVolume: 0,
    trend: "-100%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  },
  {
    id: "MID-9920145",
    name: "Kafe Kopi Kenangan The Springs",
    owner: "PT Kenangan Abadi",
    category: "Restoran & F&B",
    icon: "fa-mug-hot",
    avatarClass: "avatar-resto",
    service: "Livin' Merchant",
    serviceBadge: "service-livin",
    branch: "KCP Springs Summarecon",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 0,
    txnCount: "4,650",
    volume: "Rp 215.800.000",
    rawVolume: 215800000,
    trend: "+22.5%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-6638102",
    name: "Butik Hijab Cantik Paramount Serpong",
    owner: "Dewi Lestari",
    category: "Fashion & Lifestyle",
    icon: "fa-shirt",
    avatarClass: "avatar-fashion",
    service: "Livin' Merchant",
    serviceBadge: "service-livin",
    branch: "KC Gading Serpong",
    status: "At-Risk",
    statusClass: "status-warning-badge",
    dormantDays: 14,
    txnCount: "38",
    volume: "Rp 12.450.000",
    rawVolume: 124500000,
    trend: "-42.8%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  },
  {
    id: "MID-5541908",
    name: "Bengkel Motor Sentosa Borobudur",
    owner: "Agus Pratama",
    category: "Jasa & Otomotif",
    icon: "fa-wrench",
    avatarClass: "avatar-service",
    service: "EDC Mandiri",
    serviceBadge: "service-edc",
    branch: "KCP Borobudur",
    status: "At-Risk",
    statusClass: "status-warning-badge",
    dormantDays: 18,
    txnCount: "24",
    volume: "Rp 8.900.000",
    rawVolume: 8900000,
    trend: "-51.4%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  },
  {
    id: "MID-4410982",
    name: "Warung Sembako Barokah Bu Siti - Pasar Curug",
    owner: "Siti Aminah (Debitur KUR)",
    category: "Debitur KUM/KUR",
    icon: "fa-wheat-awn",
    avatarClass: "avatar-kur",
    service: "Debitur KUR-KUM",
    serviceBadge: "service-kur",
    branch: "KCP Curug",
    status: "Dormant >30 Hari",
    statusClass: "status-dormant-badge",
    dormantDays: 45,
    txnCount: "0",
    volume: "Rp 0",
    rawVolume: 0,
    trend: "-100%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  },
  {
    id: "MID-3329188",
    name: "Toko Sepatu & Olahraga Mandiri Sport Borobudur",
    owner: "Denny Setiawan",
    category: "Fashion & Lifestyle",
    icon: "fa-shoe-prints",
    avatarClass: "avatar-fashion",
    service: "EDC Mandiri",
    serviceBadge: "service-edc",
    branch: "KCP Borobudur",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 1,
    txnCount: "890",
    volume: "Rp 164.200.000",
    rawVolume: 164200000,
    trend: "+7.8%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-2210874",
    name: "Klinik Medika Pratama Curug Sehat",
    owner: "dr. Hendra Wijaya",
    category: "Kesehatan & Farmasi",
    icon: "fa-hospital",
    avatarClass: "avatar-service",
    service: "EDC & Livin'",
    serviceBadge: "service-edc",
    branch: "KCP Curug",
    status: "Dormant >30 Hari",
    statusClass: "status-dormant-badge",
    dormantDays: 34,
    txnCount: "0",
    volume: "Rp 0",
    rawVolume: 0,
    trend: "-100%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  },
  {
    id: "MID-1109823",
    name: "Restoran Bebek Goreng Kaleyo Gading Serpong",
    owner: "Paulus Hendri",
    category: "Restoran & F&B",
    icon: "fa-bowl-food",
    avatarClass: "avatar-resto",
    service: "EDC & Livin'",
    serviceBadge: "service-edc",
    branch: "KC Gading Serpong",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 0,
    txnCount: "3,820",
    volume: "Rp 465.000.000",
    rawVolume: 465000000,
    trend: "+28.1%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-9988771",
    name: "Toko Kue & Roti Harum Manis Springs",
    owner: "Ratna Sari",
    category: "Restoran & F&B",
    icon: "fa-cake-candles",
    avatarClass: "avatar-resto",
    service: "Livin' Merchant",
    serviceBadge: "service-livin",
    branch: "KCP Springs Summarecon",
    status: "Aktif",
    statusClass: "status-active-badge",
    dormantDays: 1,
    txnCount: "1,450",
    volume: "Rp 98.700.000",
    rawVolume: 98700000,
    trend: "+11.3%",
    isPositiveTrend: true,
    actionType: "cashback",
    actionLabel: "Rekomendasi Cashback"
  },
  {
    id: "MID-4455667",
    name: "Fotokopi & Percetakan Graha Ilmu Curug",
    owner: "Bambang Soediro (Debitur KUM)",
    category: "Debitur KUM/KUR",
    icon: "fa-wheat-awn",
    avatarClass: "avatar-kur",
    service: "Debitur KUR-KUM",
    serviceBadge: "service-kur",
    branch: "KCP Curug",
    status: "At-Risk",
    statusClass: "status-warning-badge",
    dormantDays: 19,
    txnCount: "45",
    volume: "Rp 4.200.000",
    rawVolume: 4200000,
    trend: "-62.0%",
    isPositiveTrend: false,
    actionType: "visit",
    actionLabel: "Jadwalkan Visit"
  }
];

// Sample Dataset for Debitur Mikro KUM & KUR Watchlist (Area Gading Serpong)
const debiturKurData = [
  {
    id: "DEB-KUM-10492",
    name: "Warung Makan Bu Aminah - Curug",
    owner: "Siti Aminah",
    product: "KUR Mikro Mandiri",
    branch: "KCP Curug",
    plafon: "Rp 50.000.000",
    bakiDebet: "Rp 31.400.000",
    monthlyInstallment: "Rp 1.580.000",
    installmentNum: 1580000,
    qrisOmzet: "Rp 19.450.000",
    qrisOmzetNum: 19450000,
    coverageRatio: "12.3x",
    coverageStatus: "safe",
    coverageBadge: "coverage-safe",
    kolektibilitas: "Kol 1 - Lancar",
    kolektibilitasClass: "status-active-badge",
    lastTxn: "Hari ini (10:14)",
    recommendation: "Top-Up Plafon / Reward"
  },
  {
    id: "DEB-KUM-20984",
    name: "Toko Kelontong Berkah H. Slamet - Borobudur",
    owner: "H. Slamet Riyadi",
    product: "KUM Mandiri Ritel",
    branch: "KCP Borobudur",
    plafon: "Rp 150.000.000",
    bakiDebet: "Rp 94.200.000",
    monthlyInstallment: "Rp 4.650.000",
    installmentNum: 4650000,
    qrisOmzet: "Rp 34.200.000",
    qrisOmzetNum: 34200000,
    coverageRatio: "7.3x",
    coverageStatus: "safe",
    coverageBadge: "coverage-safe",
    kolektibilitas: "Kol 1 - Lancar",
    kolektibilitasClass: "status-active-badge",
    lastTxn: "Kemarin",
    recommendation: "Apresiasi Transaksi"
  },
  {
    id: "DEB-KUR-38102",
    name: "Konveksi Kaos Sablon Anugerah - Gading Serpong",
    owner: "Joko Susilo",
    product: "KUR Kecil Mandiri",
    branch: "KC Gading Serpong",
    plafon: "Rp 300.000.000",
    bakiDebet: "Rp 235.000.000",
    monthlyInstallment: "Rp 9.150.000",
    installmentNum: 9150000,
    qrisOmzet: "Rp 26.800.000",
    qrisOmzetNum: 26800000,
    coverageRatio: "2.9x",
    coverageStatus: "safe",
    coverageBadge: "coverage-safe",
    kolektibilitas: "Kol 1 - Lancar",
    kolektibilitasClass: "status-active-badge",
    lastTxn: "2 hari lalu",
    recommendation: "Stabil / On-Track"
  },
  {
    id: "DEB-KUM-44910",
    name: "Percetakan Cepat Express Jaya - Curug",
    owner: "Rian Hidayat",
    product: "KUM Mandiri Mikro",
    branch: "KCP Curug",
    plafon: "Rp 100.000.000",
    bakiDebet: "Rp 76.800.000",
    monthlyInstallment: "Rp 3.250.000",
    installmentNum: 3250000,
    qrisOmzet: "Rp 3.900.000",
    qrisOmzetNum: 3900000,
    coverageRatio: "1.2x",
    coverageStatus: "warning",
    coverageBadge: "coverage-warning",
    kolektibilitas: "Kol 1 - Watchlist",
    kolektibilitasClass: "status-warning-badge",
    lastTxn: "7 hari lalu",
    recommendation: "Kunjungan Monitoring Cashflow"
  },
  {
    id: "DEB-KUR-55198",
    name: "Bengkel Las & Bubut Maju Jaya - Borobudur",
    owner: "Suparno",
    product: "KUR Mikro Mandiri",
    branch: "KCP Borobudur",
    plafon: "Rp 75.000.000",
    bakiDebet: "Rp 63.400.000",
    monthlyInstallment: "Rp 2.450.000",
    installmentNum: 2450000,
    qrisOmzet: "Rp 1.450.000",
    qrisOmzetNum: 1450000,
    coverageRatio: "0.59x",
    coverageStatus: "critical",
    coverageBadge: "coverage-critical",
    kolektibilitas: "Kol 2 - DPK (Potensi NPL)",
    kolektibilitasClass: "status-dormant-badge",
    lastTxn: "19 hari lalu",
    recommendation: "Jadwalkan Kunjungan Restrukturisasi"
  },
  {
    id: "DEB-KUR-66723",
    name: "Toko Sembako Barokah Bu Siti - Curug",
    owner: "Siti Aminah",
    product: "KUR Mikro Mandiri",
    branch: "KCP Curug",
    plafon: "Rp 50.000.000",
    bakiDebet: "Rp 42.100.000",
    monthlyInstallment: "Rp 1.620.000",
    installmentNum: 1620000,
    qrisOmzet: "Rp 0 (Macet)",
    qrisOmzetNum: 0,
    coverageRatio: "0.0x",
    coverageStatus: "critical",
    coverageBadge: "coverage-critical",
    kolektibilitas: "Kol 2 - DPK (Dormant 45d)",
    kolektibilitasClass: "status-dormant-badge",
    lastTxn: "45 hari lalu",
    recommendation: "Edukasi & Cek Fisik EDC/QRIS"
  },
  {
    id: "DEB-KUR-77810",
    name: "Ternak Unggas Sumber Berkah - Springs Summarecon",
    owner: "Drs. Mulyono",
    product: "KUR Kecil Mandiri",
    branch: "KCP Springs Summarecon",
    plafon: "Rp 200.000.000",
    bakiDebet: "Rp 118.000.000",
    monthlyInstallment: "Rp 6.400.000",
    installmentNum: 6400000,
    qrisOmzet: "Rp 28.500.000",
    qrisOmzetNum: 28500000,
    coverageRatio: "4.45x",
    coverageStatus: "safe",
    coverageBadge: "coverage-safe",
    kolektibilitas: "Kol 1 - Lancar",
    kolektibilitasClass: "status-active-badge",
    lastTxn: "Kemarin",
    recommendation: "Tawarkan Tambahan EDC"
  }
];

// Activity Action Log (Tab 3: Riwayat Aksi Cabang Area Gading Serpong)
const actionLogs = [
  {
    date: "14 Okt 2026, 14:30",
    merchant: "Restoran Padang Pagi Sore Gading Serpong",
    action: "Program Cashback & Loyalty Disetujui",
    pic: "Ratna Primasari (Branch Manager)",
    notes: "Pemberian insentif MDR 50% dan display spanduk promo Livin' Mandiri karena volume tembus >Rp 340 Jt. Disetujui langsung oleh Branch Manager.",
    status: "Selesai"
  },
  {
    date: "14 Okt 2026, 11:15",
    merchant: "Minimarket Ruko Springs Boulevard",
    action: "Jadwal Visit & Service EDC",
    pic: "Fajar Nugraha (Branch Ops KC Gading Serpong)",
    notes: "Kunjungan fisik untuk investigasi EDC offline 38 hari. Roll kertas dan adapter mesin bermasalah di ruko Springs.",
    status: "Terjadwal (16 Okt 2026)"
  },
  {
    date: "13 Okt 2026, 16:45",
    merchant: "Bengkel Las & Bubut Maju Jaya Borobudur",
    action: "Pendampingan Cashflow Debitur KUR",
    pic: "Dian Permata (Mikro Specialist KCP Curug)",
    notes: "Cashflow QRIS di bawah angsuran bulanan. Jadwal kunjungan bersama tim mikro cabang untuk re-edukasi & evaluasi kredit.",
    status: "Dalam Proses"
  }
];

// DOM references
let currentStatusFilter = "all";
let currentServiceFilter = "all";
let currentSearchTerm = "";
let currentArea = "Semua Cabang";

let trendChartInstance = null;
let categoryChartInstance = null;

// Initialize on Load
document.addEventListener("DOMContentLoaded", function () {
  initCharts();
  renderMerchantTable();
  renderDebiturTable();
  renderActionLogs();
  setupEventListeners();
  updateClock();
  setInterval(updateClock, 1000);
});

// Real-time Clock
function updateClock() {
  const clockEl = document.getElementById("liveClock");
  if (!clockEl) return;
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  clockEl.textContent = now.toLocaleDateString("id-ID", options);
}

// Chart Initializations
function initCharts() {
  // Chart 1: Tren Transaksi EDC vs Livin' Merchant
  const ctxTrend = document.getElementById("transactionTrendChart");
  if (ctxTrend) {
    const labelsHarian = ["01 Okt", "03 Okt", "05 Okt", "07 Okt", "09 Okt", "11 Okt", "13 Okt", "14 Okt"];
    trendChartInstance = new Chart(ctxTrend, {
      type: "line",
      data: {
        labels: labelsHarian,
        datasets: [
          {
            label: "Volume EDC Mandiri (Miliar Rp)",
            data: [38.2, 42.5, 39.8, 45.1, 48.6, 52.3, 50.4, 56.2],
            borderColor: "#003876",
            backgroundColor: "rgba(0, 56, 118, 0.12)",
            borderWidth: 2.5,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: "#003876",
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: "Volume Livin' Merchant QRIS (Miliar Rp)",
            data: [19.5, 21.8, 22.1, 26.4, 28.0, 31.5, 30.2, 34.8],
            borderColor: "#ffb703",
            backgroundColor: "rgba(255, 183, 3, 0.16)",
            borderWidth: 2.5,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: "#ffb703",
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              font: {
                family: "'Plus Jakarta Sans', sans-serif",
                weight: "600",
                size: 11
              }
            }
          },
          tooltip: {
            backgroundColor: "#001a35",
            titleFont: { family: "'Plus Jakarta Sans'", size: 12 },
            bodyFont: { family: "'Plus Jakarta Sans'", size: 12 },
            callbacks: {
              label: function (context) {
                return ` ${context.dataset.label}: Rp ${context.raw} Miliar`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: { family: "'Plus Jakarta Sans'", size: 11 },
              color: "#64748b"
            }
          },
          y: {
            grid: { color: "#f1f5f9" },
            ticks: {
              font: { family: "'Plus Jakarta Sans'", size: 11 },
              color: "#64748b",
              callback: function (val) {
                return "Rp " + val + "M";
              }
            }
          }
        }
      }
    });
  }

  // Chart 2: Komposisi Tipe Merchant
  const ctxCategory = document.getElementById("merchantCategoryChart");
  if (ctxCategory) {
    categoryChartInstance = new Chart(ctxCategory, {
      type: "doughnut",
      data: {
        labels: [
          "Restoran & F&B",
          "Grosir & Ritel",
          "Fashion & Lifestyle",
          "Debitur KUM/KUR",
          "Jasa & Otomotif"
        ],
        datasets: [
          {
            data: [34, 28, 16, 14, 8],
            backgroundColor: [
              "#ea580c", // resto orange
              "#0284c7", // retail blue
              "#db2777", // fashion pink
              "#7c3aed", // kur purple
              "#4f46e5"  // service indigo
            ],
            borderWidth: 2,
            borderColor: "#ffffff"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: "#001a35",
            callbacks: {
              label: function (ctx) {
                return ` ${ctx.label}: ${ctx.raw}% dari Total Merchant`;
              }
            }
          }
        }
      }
    });
  }
}

// Switch Chart Granularity (Harian / Mingguan / Bulanan)
window.switchTrendGranularity = function (granularity, btnEl) {
  const buttons = document.querySelectorAll(".pill-toggle-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  if (!trendChartInstance) return;

  if (granularity === "daily") {
    trendChartInstance.data.labels = ["01 Okt", "03 Okt", "05 Okt", "07 Okt", "09 Okt", "11 Okt", "13 Okt", "14 Okt"];
    trendChartInstance.data.datasets[0].data = [38.2, 42.5, 39.8, 45.1, 48.6, 52.3, 50.4, 56.2];
    trendChartInstance.data.datasets[1].data = [19.5, 21.8, 22.1, 26.4, 28.0, 31.5, 30.2, 34.8];
  } else if (granularity === "weekly") {
    trendChartInstance.data.labels = ["Minggu 1 (Sep)", "Minggu 2 (Sep)", "Minggu 3 (Sep)", "Minggu 4 (Sep)", "Minggu 1 (Okt)", "Minggu 2 (Okt)"];
    trendChartInstance.data.datasets[0].data = [185.0, 192.4, 188.7, 204.1, 218.6, 234.5];
    trendChartInstance.data.datasets[1].data = [94.5, 102.0, 108.4, 115.2, 128.4, 138.9];
  } else if (granularity === "monthly") {
    trendChartInstance.data.labels = ["Mei 2026", "Jun 2026", "Jul 2026", "Agu 2026", "Sep 2026", "Okt (Est)"];
    trendChartInstance.data.datasets[0].data = [260.4, 275.1, 288.9, 295.4, 305.8, 318.5];
    trendChartInstance.data.datasets[1].data = [118.2, 126.7, 135.0, 142.8, 154.2, 167.7];
  }
  trendChartInstance.update();
};

// Render Main Merchant Table with Filter & Search
function renderMerchantTable() {
  const tbody = document.getElementById("merchantTableBody");
  if (!tbody) return;

  // Filter based on active controls
  const filtered = merchantsData.filter(item => {
    // Status filter
    if (currentStatusFilter === "active" && item.status !== "Aktif") return false;
    if (currentStatusFilter === "warning" && item.status !== "At-Risk") return false;
    if (currentStatusFilter === "dormant" && !item.status.includes("Dormant")) return false;
    if (currentStatusFilter === "kur" && item.category !== "Debitur KUM/KUR") return false;

    // Service dropdown filter
    if (currentServiceFilter !== "all") {
      if (currentServiceFilter === "edc" && !item.service.includes("EDC")) return false;
      if (currentServiceFilter === "livin" && !item.service.includes("Livin'")) return false;
      if (currentServiceFilter === "kur" && !item.service.includes("KUR")) return false;
    }

    // Branch filter (Area Gading Serpong)
    if (currentArea !== "Semua Cabang" && currentArea !== "Semua Area" && item.branch !== currentArea) {
      return false;
    }

    // Search query
    if (currentSearchTerm.trim() !== "") {
      const term = currentSearchTerm.toLowerCase();
      const matchName = item.name.toLowerCase().includes(term);
      const matchOwner = item.owner.toLowerCase().includes(term);
      const matchMid = item.id.toLowerCase().includes(term);
      const matchCategory = item.category.toLowerCase().includes(term);
      return matchName || matchOwner || matchMid || matchCategory;
    }

    return true;
  });

  const totalCountEl = document.getElementById("tableFilteredCount");
  if (totalCountEl) {
    totalCountEl.textContent = `${filtered.length} Merchant Ditampilkan`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: #64748b;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.75rem; color: #cbd5e1; display: block;"></i>
          <strong>Tidak ditemukan merchant yang cocok</strong>
          <p style="font-size: 0.8rem; margin-top: 0.25rem;">Coba sesuaikan kata kunci pencarian atau filter status yang dipilih.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(m => {
    // Status badge HTML
    let statusBadgeHtml = "";
    if (m.status === "Aktif") {
      statusBadgeHtml = `<span class="status-badge status-active-badge"><i class="fa-solid fa-circle-check"></i> Aktif Transaksi</span>`;
    } else if (m.status === "At-Risk") {
      statusBadgeHtml = `<span class="status-badge status-warning-badge"><i class="fa-solid fa-triangle-exclamation"></i> At-Risk (${m.dormantDays} Hari Pasif)</span>`;
    } else {
      statusBadgeHtml = `<span class="status-badge status-dormant-badge"><span class="dormant-pulse"></span> Dormant (>30 Hari)</span>`;
    }

    // Proactive Action Button
    let actionBtnHtml = "";
    if (m.actionType === "cashback") {
      actionBtnHtml = `
        <button class="btn-action-cashback" onclick="openCashbackModal('${m.id}')" title="Berikan reward / diskon MDR untuk top merchant">
          <i class="fa-solid fa-gift"></i> Rekomendasi Cashback
        </button>
      `;
    } else {
      actionBtnHtml = `
        <button class="btn-action-visit" onclick="openVisitModal('${m.id}')" title="Jadwalkan kunjungan investigasi & edukasi">
          <i class="fa-solid fa-calendar-check"></i> Jadwalkan Visit
        </button>
      `;
    }

    const trendClass = m.isPositiveTrend ? "trend-up" : "trend-down";
    const trendIcon = m.isPositiveTrend ? "fa-arrow-trend-up" : "fa-arrow-trend-down";

    return `
      <tr>
        <td>
          <div class="merchant-identity-cell">
            <div class="merchant-avatar ${m.avatarClass}">
              <i class="fa-solid ${m.icon}"></i>
            </div>
            <div class="merchant-text-block">
              <span class="merchant-name-title">${m.name}</span>
              <span class="merchant-subinfo">
                <span>${m.owner}</span> • <span class="badge-mid">${m.id}</span>
              </span>
            </div>
          </div>
        </td>
        <td>
          <span class="service-badge ${m.serviceBadge}">
            <i class="fa-solid ${m.service.includes('EDC') ? 'fa-calculator' : 'fa-qrcode'}"></i>
            ${m.service}
          </span>
          <div style="font-size: 0.7rem; color: #64748b; margin-top: 3px;">${m.category}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #1e293b;">${m.branch}</div>
        </td>
        <td>${statusBadgeHtml}</td>
        <td>
          <div style="font-weight: 700; color: #002d62;">${m.volume}</div>
          <div style="font-size: 0.72rem; color: #64748b;">${m.txnCount} transaksi bulan ini</div>
        </td>
        <td>
          <span class="kpi-trend ${trendClass}">
            <i class="fa-solid ${trendIcon}"></i> ${m.trend}
          </span>
        </td>
        <td>
          <div class="action-buttons-wrap">
            ${actionBtnHtml}
            <button class="btn-action-detail" onclick="openDetailModal('${m.id}')" title="Lihat Profil Lengkap">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Render Debitur Mikro KUR & KUM Watchlist Table (Modul Khusus)
function renderDebiturTable() {
  const tbody = document.getElementById("debiturTableBody");
  if (!tbody) return;

  tbody.innerHTML = debiturKurData.map(d => {
    let coverageBadgeHtml = "";
    if (d.coverageStatus === "safe") {
      coverageBadgeHtml = `<span class="coverage-pill coverage-safe"><i class="fa-solid fa-shield-check"></i> ${d.coverageRatio} (Sehat)</span>`;
    } else if (d.coverageStatus === "warning") {
      coverageBadgeHtml = `<span class="coverage-pill coverage-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${d.coverageRatio} (Waspada)</span>`;
    } else {
      coverageBadgeHtml = `<span class="coverage-pill coverage-critical"><i class="fa-solid fa-skull-crossbones"></i> ${d.coverageRatio} (Risiko NPL)</span>`;
    }

    return `
      <tr>
        <td>
          <div class="merchant-identity-cell">
            <div class="merchant-avatar avatar-kur">
              <i class="fa-solid fa-wheat-awn"></i>
            </div>
            <div class="merchant-text-block">
              <span class="merchant-name-title">${d.name}</span>
              <span class="merchant-subinfo">
                <span>Owner: ${d.owner}</span> • <span class="badge-mid">${d.id}</span>
              </span>
            </div>
          </div>
        </td>
        <td>
          <span class="service-badge service-kur">
            <i class="fa-solid fa-file-invoice-dollar"></i> ${d.product}
          </span>
          <div style="font-size: 0.72rem; color: #64748b; margin-top: 3px;">
            Plafon: <strong>${d.plafon}</strong>
          </div>
        </td>
        <td>
          <div style="font-weight: 700; color: #0f172a;">${d.bakiDebet}</div>
          <div style="font-size: 0.7rem; color: #dc2626;">Angsuran: ${d.monthlyInstallment}/bln</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #0b5cab;">${d.qrisOmzet}</div>
          <div style="font-size: 0.7rem; color: #64748b;">Txn terakhir: ${d.lastTxn}</div>
        </td>
        <td>
          ${coverageBadgeHtml}
          <div style="font-size: 0.68rem; color: #64748b; margin-top: 2px;">
            Omzet vs Angsuran
          </div>
        </td>
        <td>
          <span class="status-badge ${d.kolektibilitasClass}">
            ${d.kolektibilitas}
          </span>
        </td>
        <td>
          <button class="btn-action-cashback" style="background: linear-gradient(135deg, #7c3aed, #6d28d9); font-size: 0.72rem;" onclick="openDebiturActionModal('${d.id}')">
            <i class="fa-solid fa-hand-holding-dollar"></i> Aksi Cabang
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// Render Action Logs (Tab 3)
function renderActionLogs() {
  const tbody = document.getElementById("actionLogsTableBody");
  if (!tbody) return;

  tbody.innerHTML = actionLogs.map(log => {
    return `
      <tr>
        <td style="color: #64748b; font-size: 0.75rem;">${log.date}</td>
        <td><strong>${log.merchant}</strong></td>
        <td><span class="service-badge service-livin">${log.action}</span></td>
        <td><i class="fa-solid fa-user-tie" style="color: #0b5cab; margin-right: 4px;"></i> ${log.pic}</td>
        <td style="max-width: 320px; font-size: 0.78rem;">${log.notes}</td>
        <td><span class="status-badge status-active-badge">${log.status}</span></td>
      </tr>
    `;
  }).join("");
}

// Event Listeners for Filters & Interactions
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("merchantSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearchTerm = e.target.value;
      renderMerchantTable();
    });
  }

  // Filter Pills (Semua, Aktif, At-Risk, Dormant, Debitur)
  const pills = document.querySelectorAll(".status-filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", function () {
      pills.forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      currentStatusFilter = this.getAttribute("data-status");
      renderMerchantTable();
    });
  });

  // Service Select Filter
  const serviceSelect = document.getElementById("serviceFilterSelect");
  if (serviceSelect) {
    serviceSelect.addEventListener("change", function (e) {
      currentServiceFilter = e.target.value;
      renderMerchantTable();
    });
  }

  // Header Branch Area Select
  const branchSelect = document.getElementById("branchAreaSelect");
  if (branchSelect) {
    branchSelect.addEventListener("change", function (e) {
      currentArea = e.target.value;
      renderMerchantTable();
      showToast(
        "Filter Cabang Diperbarui",
        `Menampilkan data merchant untuk ${currentArea} (Supervisi: Ratna Primasari - Branch Manager)`,
        "info"
      );
    });
  }
}

// Dashboard Tab Switching Logic (Sidebar Driven)
window.switchMainTab = function (tabName, btnEl) {
  // Update active state on sidebar items
  const sidebarButtons = document.querySelectorAll(".sidebar-nav-item[data-tab]");
  sidebarButtons.forEach(b => b.classList.remove("active"));
  
  const targetSidebarBtn = document.querySelector(`.sidebar-nav-item[data-tab="${tabName}"]`);
  if (targetSidebarBtn) {
    targetSidebarBtn.classList.add("active");
  } else if (btnEl && btnEl.classList.contains("sidebar-nav-item")) {
    btnEl.classList.add("active");
  }

  // Also update horizontal tab buttons if present
  const horizontalTabs = document.querySelectorAll(".tab-btn");
  horizontalTabs.forEach(t => t.classList.remove("active"));
  if (btnEl && btnEl.classList.contains("tab-btn")) btnEl.classList.add("active");

  const tabOverview = document.getElementById("tabContentOverview");
  const tabKur = document.getElementById("tabContentKur");
  const tabLogs = document.getElementById("tabContentLogs");

  if (tabOverview) tabOverview.style.display = tabName === "overview" ? "block" : "none";
  if (tabKur) tabKur.style.display = tabName === "kur" ? "block" : "none";
  if (tabLogs) tabLogs.style.display = tabName === "logs" ? "block" : "none";

  // Trigger chart resize if returning to overview
  if (tabName === "overview" && trendChartInstance) {
    setTimeout(() => {
      trendChartInstance.resize();
      if (categoryChartInstance) categoryChartInstance.resize();
    }, 50);
  }

  // Close mobile sidebar if open
  if (window.innerWidth <= 1024) {
    const sidebar = document.getElementById("appSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Quick Filter Triggered from Sidebar
window.quickFilterFromSidebar = function (status) {
  window.switchMainTab('overview');
  
  const pills = document.querySelectorAll(".status-filter-pill");
  pills.forEach(p => p.classList.remove("active"));
  
  const targetPill = document.querySelector(`.status-filter-pill[data-status="${status}"]`);
  if (targetPill) targetPill.classList.add("active");
  
  currentStatusFilter = status;
  renderMerchantTable();

  // Scroll to table smoothly
  const tableEl = document.getElementById("merchantTablePanel");
  if (tableEl) {
    tableEl.scrollIntoView({ behavior: "smooth" });
  }

  const labelMap = {
    active: "Merchant Aktif",
    warning: "Merchant At-Risk",
    dormant: "Merchant Dormant (>30 Hari)"
  };

  showToast(
    "Filter EWS Cepat",
    `Menampilkan kategori ${labelMap[status] || status}`,
    status === "dormant" ? "warning" : "info"
  );
};

// toggleSidebar → defined below in MOBILE SIDEBAR TOGGLE section

// Filter quick button from EWS alert strip
window.filterDormantOnly = function () {
  quickFilterFromSidebar("dormant");
};

// =========================================================
// MODALS LOGIC
// =========================================================

// Modal 1: Rekomendasi Cashback & Loyalty
window.openCashbackModal = function (mid) {
  const merchant = merchantsData.find(m => m.id === mid);
  if (!merchant) return;

  document.getElementById("cashbackMid").textContent = merchant.id;
  document.getElementById("cashbackName").textContent = merchant.name;
  document.getElementById("cashbackVolume").textContent = merchant.volume + " (" + merchant.txnCount + " txn)";
  document.getElementById("cashbackBranch").textContent = merchant.branch;

  document.getElementById("modalCashback").classList.add("open");
};

window.closeCashbackModal = function () {
  document.getElementById("modalCashback").classList.remove("open");
};

window.submitCashbackProgram = function (e) {
  e.preventDefault();
  const mName = document.getElementById("cashbackName").textContent;
  const program = document.getElementById("selectProgramType").value;

  closeCashbackModal();

  // Add to log
  actionLogs.unshift({
    date: "Baru saja",
    merchant: mName,
    action: `Program: ${program}`,
    pic: "Ratna Primasari (Branch Manager)",
    notes: `Persetujuan insentif loyalty program disahkan oleh Branch Manager Ratna Primasari untuk retensi merchant unggulan Area Gading Serpong.`,
    status: "Disetujui BM"
  });
  renderActionLogs();

  showToast(
    "Rekomendasi Cashback Disetujui!",
    `Program loyalty untuk ${mName} telah disetujui Branch Manager Ratna Primasari & notifikasi WhatsApp dikirim ke owner.`,
    "success"
  );
};

// Modal 2: Jadwalkan Visit / Edukasi Merchant Pasif
window.openVisitModal = function (mid) {
  const merchant = merchantsData.find(m => m.id === mid);
  if (!merchant) return;

  document.getElementById("visitMid").textContent = merchant.id;
  document.getElementById("visitName").textContent = merchant.name;
  document.getElementById("visitStatus").textContent = merchant.status + ` (${merchant.dormantDays} Hari Tanpa Transaksi)`;
  document.getElementById("visitBranch").textContent = merchant.branch;

  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("visitDateInput");
  if (dateInput) {
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }

  document.getElementById("modalVisit").classList.add("open");
};

window.closeVisitModal = function () {
  document.getElementById("modalVisit").classList.remove("open");
};

window.submitVisitSchedule = function (e) {
  e.preventDefault();
  const mName = document.getElementById("visitName").textContent;
  const date = document.getElementById("visitDateInput").value;
  const pic = document.getElementById("selectPic").value;
  const issue = document.getElementById("selectIssue").value;

  closeVisitModal();

  // Add to log
  actionLogs.unshift({
    date: "Baru saja",
    merchant: mName,
    action: `Visit Edukasi (${issue})`,
    pic: pic,
    notes: `Jadwal kunjungan pada ${date}. Fokus investigasi: ${issue}. Surat tugas diterbitkan atas persetujuan Branch Manager Ratna Primasari.`,
    status: "Terjadwal"
  });
  renderActionLogs();

  showToast(
    "Kunjungan Berhasil Dijadwalkan!",
    `Surat tugas diterbitkan untuk ${pic} pada tanggal ${date} ke ${mName} (Disetujui BM Ratna Primasari).`,
    "warning"
  );
};

// Modal 3: Detail Profil & Cashflow Merchant
window.openDetailModal = function (mid) {
  const merchant = merchantsData.find(m => m.id === mid);
  if (!merchant) return;

  document.getElementById("detailModalMid").textContent = merchant.id;
  document.getElementById("detailModalName").textContent = merchant.name;
  document.getElementById("detailModalCategory").textContent = merchant.category;
  document.getElementById("detailModalBranch").textContent = merchant.branch;
  document.getElementById("detailModalVolume").textContent = merchant.volume;
  document.getElementById("detailModalStatus").textContent = merchant.status;
  document.getElementById("detailModalOwner").textContent = merchant.owner;

  document.getElementById("modalDetail").classList.add("open");
};

window.closeDetailModal = function () {
  document.getElementById("modalDetail").classList.remove("open");
};

// Modal 4: Aksi Cabang Debitur KUR/KUM
window.openDebiturActionModal = function (debId) {
  const deb = debiturKurData.find(d => d.id === debId);
  if (!deb) return;

  document.getElementById("debModalId").textContent = deb.id;
  document.getElementById("debModalName").textContent = deb.name;
  document.getElementById("debModalProduct").textContent = `${deb.product} (Baki Debet: ${deb.bakiDebet})`;
  document.getElementById("debModalAngsuran").textContent = deb.monthlyInstallment;
  document.getElementById("debModalOmzet").textContent = deb.qrisOmzet;
  document.getElementById("debModalCoverage").textContent = `${deb.coverageRatio} (${deb.coverageStatus.toUpperCase()})`;

  document.getElementById("modalDebiturAction").classList.add("open");
};

window.closeDebiturActionModal = function () {
  document.getElementById("modalDebiturAction").classList.remove("open");
};

window.submitDebiturAction = function (e) {
  e.preventDefault();
  const name = document.getElementById("debModalName").textContent;
  const actionType = document.getElementById("selectDebAction").value;

  closeDebiturActionModal();

  actionLogs.unshift({
    date: "Baru saja",
    merchant: name,
    action: `Aksi Kredit: ${actionType}`,
    pic: "Mikro Specialist Cabang",
    notes: `Tindakan proaktif pengelolaan risiko kredit untuk mengamankan cashflow debitur dan mencegah NPL.`,
    status: "Diproses"
  });
  renderActionLogs();

  showToast(
    "Aksi Debitur Berhasil Didaftarkan",
    `Tindakan "${actionType}" untuk ${name} telah masuk antrian tindak lanjut tim Mikro Cabang.`,
    "success"
  );
};

// Export to CSV simulation
window.exportDataToCsv = function () {
  showToast(
    "Ekspor Data Dimulai",
    "File laporan 'EWS_Merchant_Mandiri_Oktober_2026.xlsx' sedang diunduh...",
    "info"
  );
  setTimeout(() => {
    showToast(
      "Ekspor Berhasil!",
      "Laporan berhasil di-generate dengan format Excel terenkripsi perbankan.",
      "success"
    );
  }, 1000);
};

// Refresh Data simulation
window.refreshDashboardData = function () {
  showToast(
    "Menyinkronkan Data...",
    "Mengambil transaksi terkini dari EDC Host & Livin' Merchant Gateway.",
    "info"
  );
  setTimeout(() => {
    showToast(
      "Data Terkini!",
      "Sinkronisasi berhasil. 4 transaksi baru tercatat dalam 5 menit terakhir.",
      "success"
    );
  }, 800);
};

// =========================================================
// TOAST NOTIFICATION UTILITY
// =========================================================
function showToast(title, desc, type = "success") {
  const stack = document.getElementById("toastStack");
  if (!stack) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;

  let icon = "fa-circle-check";
  if (type === "warning") icon = "fa-triangle-exclamation";
  if (type === "info") icon = "fa-circle-info";

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fa-solid ${icon}"></i>
    </div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${desc}</div>
    </div>
  `;

  stack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

// =========================================================
// MOBILE SIDEBAR TOGGLE & RESPONSIVE UTILITIES
// =========================================================

/**
 * Toggle the mobile sidebar open/closed.
 * Called by the hamburger button in the header and by the overlay backdrop.
 */
function toggleSidebar() {
  const sidebar = document.getElementById("appSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (!sidebar || !overlay) return;

  const isOpen = sidebar.classList.contains("open");

  if (isOpen) {
    // Close
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    // Open
    sidebar.classList.add("open");
    overlay.classList.add("active");
    // Prevent body scroll when sidebar is open on mobile
    document.body.style.overflow = "hidden";
  }
}

/**
 * Close sidebar when window is resized back to desktop width.
 */
function closeSidebarOnResize() {
  const sidebar = document.getElementById("appSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (!sidebar || !overlay) return;

  if (window.innerWidth > 1024) {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Auto-close sidebar when resizing to desktop
window.addEventListener("resize", closeSidebarOnResize);

// Close sidebar when pressing Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const sidebar = document.getElementById("appSidebar");
    if (sidebar && sidebar.classList.contains("open")) {
      toggleSidebar();
    }
  }
});

