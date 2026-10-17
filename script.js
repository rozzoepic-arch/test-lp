/**
 * PORTOFOLIO IOT & DASHBOARD MONITORING — OWEN REZA
 * Clean Vanilla JavaScript
 * Zero dependencies, structured, fully accessible.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DATA PROFILE & KONFIGURASI
  // ==========================================
  const profile = {
    name: "Owen Reza",
    campus: "Universitas Musamus Merauke",
    studyProgram: "Teknik Elektro",
    concentration: "Teknik Komputer dan Telekomunikasi",
    interests: "Internet of Things dan dashboard monitoring",
    email: "owenrezasyaputra@gmail.com",
    githubUrl: "",   // Kosong: disembunyikan sesuai PRD
    linkedinUrl: ""  // Kosong: disembunyikan sesuai PRD
  };

  // ==========================================
  // 2. DATA MONITORING SIMULASI (7 SAMPEL TETAP)
  // Sesuai spesifikasi PRD & prompt:
  // 1: 08.00 — 27,8 — 68
  // 2: 08.05 — 28,0 — 67
  // 3: 08.10 — 28,1 — 67
  // 4: 08.15 — 28,4 — 66
  // 5: 08.20 — 28,2 — 67
  // 6: 08.25 — 28,3 — 66
  // 7: 08.30 — 28,4 — 67
  // ==========================================
  const samples = [
    {
      id: 1,
      time: "08.00",
      tempC: 27.8,
      tempStr: "27,8",
      humidity: 68,
      chartX: 36.0,
      chartY: 71.4,
      trendNote: "Suhu awal pagi stabil, sirkulasi udara normal."
    },
    {
      id: 2,
      time: "08.05",
      tempC: 28.0,
      tempStr: "28,0",
      humidity: 67,
      chartX: 80.7,
      chartY: 55.0,
      trendNote: "Kenaikan termal bertahap seiring aktivitas instrumen."
    },
    {
      id: 3,
      time: "08.10",
      tempC: 28.1,
      tempStr: "28,1",
      humidity: 67,
      chartX: 125.3,
      chartY: 46.8,
      trendNote: "Kondisi kelembapan konstan pada level optimal 67%."
    },
    {
      id: 4,
      time: "08.15",
      tempC: 28.4,
      tempStr: "28,4",
      humidity: 66,
      chartX: 170.0,
      chartY: 22.2,
      trendNote: "Puncak termal siklus pertama, kelembapan sedikit turun."
    },
    {
      id: 5,
      time: "08.20",
      tempC: 28.2,
      tempStr: "28,2",
      humidity: 67,
      chartX: 214.7,
      chartY: 38.6,
      trendNote: "Normalisasi termal aktif, sirkulasi pendingin merata."
    },
    {
      id: 6,
      time: "08.25",
      tempC: 28.3,
      tempStr: "28,3",
      humidity: 66,
      chartX: 259.3,
      chartY: 30.4,
      trendNote: "Deviasi suhu minimal ±0.1°C dalam batas toleransi normal."
    },
    {
      id: 7,
      time: "08.30",
      tempC: 28.4,
      tempStr: "28,4",
      humidity: 67,
      chartX: 304.0,
      chartY: 22.2,
      trendNote: "Pembacaan stabil pada rentang nominal lingkungan laboratorium."
    }
  ];

  // Keadaan awal memilih baris 7 (indeks ke-6) sesuai spesifikasi F05
  let activeSampleIndex = 6;

  // DOM Elements - Dashboard
  const elTemp = document.getElementById('metric-temp-val');
  const elHum = document.getElementById('metric-hum-val');
  const elSampleLabel = document.getElementById('sample-active-label');
  const elChartSummary = document.getElementById('chart-textual-summary');
  const elLiveRegion = document.getElementById('sim-live-region');
  const elSvgTip = document.getElementById('chart-active-tip');
  const elSvgGlow = document.getElementById('chart-active-glow');
  const btnCycle = document.getElementById('btn-cycle-sample');

  /**
   * Render update dashboard sesuai index sampel aktif
   * @param {number} index - Indeks sampel (0 sampai 6)
   */
  function renderActiveSample(index) {
    if (!samples || samples.length === 0 || index < 0 || index >= samples.length) {
      if (elChartSummary) {
        elChartSummary.textContent = "Data simulasi belum tersedia.";
      }
      if (btnCycle) {
        btnCycle.disabled = true;
      }
      return;
    }

    const current = samples[index];

    // 1. Update metrik angka utama
    if (elTemp) elTemp.textContent = current.tempStr;
    if (elHum) elHum.textContent = current.humidity.toString();

    // 2. Update label status sampel
    const labelText = `Sampel ${current.id} dari ${samples.length} · ${current.time} (simulasi)`;
    if (elSampleLabel) elSampleLabel.textContent = labelText;

    // 3. Update posisi marker aktif pada grafik SVG
    if (elSvgTip) {
      elSvgTip.setAttribute('cx', current.chartX);
      elSvgTip.setAttribute('cy', current.chartY);
    }
    if (elSvgGlow) {
      elSvgGlow.setAttribute('cx', current.chartX);
      elSvgGlow.setAttribute('cy', current.chartY);
    }

    // 4. Update ringkasan tekstual grafik
    const summaryText = `Rentang 08.00–08.30: 27,8°C – 28,4°C. Sampel aktif pukul ${current.time}: Suhu ${current.tempStr}°C, Kelembapan ${current.humidity}%. ${current.trendNote}`;
    if (elChartSummary) elChartSummary.textContent = summaryText;

    // 5. Update pengumuman aksesibilitas untuk screen reader
    const srAnnouncement = `Data simulasi pukul ${current.time}. Suhu ${current.tempStr} derajat Celsius dan kelembapan ${current.humidity} persen.`;
    if (elLiveRegion) elLiveRegion.textContent = srAnnouncement;
  }

  // Event listener tombol Ganti sampel (7 -> 1 -> 2 ... -> 7)
  if (btnCycle) {
    btnCycle.addEventListener('click', () => {
      activeSampleIndex = (activeSampleIndex + 1) % samples.length;
      renderActiveSample(activeSampleIndex);
    });
  }

  // Initial render (Sampel 7)
  renderActiveSample(activeSampleIndex);

  // ==========================================
  // 3. RESPONSIVE MOBILE NAVIGATION MENU
  // ==========================================
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const navPanel = document.getElementById('mobile-nav-panel');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (!menuBtn || !navPanel) return;
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Tutup Menu Navigasi');
    navPanel.classList.add('is-open');
    if (menuIcon) {
      menuIcon.innerHTML = `<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
    }
  }

  function closeMenu(returnFocus = false) {
    if (!menuBtn || !navPanel) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Buka Menu Navigasi');
    navPanel.classList.remove('is-open');
    if (menuIcon) {
      menuIcon.innerHTML = `<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
    }
    if (returnFocus) {
      menuBtn.focus();
    }
  }

  if (menuBtn && navPanel) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    // Keyboard Accessibility: Escape key closes menu and returns focus
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    // Clicking a link closes the menu
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu(false);
      });
    });

    // Clicking outside closes the menu
    document.addEventListener('click', (e) => {
      if (navPanel.classList.contains('is-open')) {
        if (!navPanel.contains(e.target) && !menuBtn.contains(e.target)) {
          closeMenu(false);
        }
      }
    });
  }

  // ==========================================
  // 4. FITUR SALIN EMAIL & CLIPBOARD FEEDBACK
  // ==========================================
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const toast = document.getElementById('copy-toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2500);
  }

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(profile.email)
          .then(() => {
            showToast("Alamat email berhasil disalin!");
          })
          .catch(() => {
            showToast(`Email: ${profile.email}`);
          });
      } else {
        showToast(`Email: ${profile.email}`);
      }
    });
  }

  // ==========================================
  // 5. UPDATE TAHUN BERJALAN FOOTER
  // ==========================================
  const elYear = document.getElementById('current-year');
  if (elYear) {
    elYear.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 6. NAVBAR ACTIVE HIGHLIGHT SWITCHER (SCROLL SPY)
  // Memperbarui highlight navbar saat scrolling atau klik
  // ==========================================
  const navSectionIds = ['beranda', 'tentang', 'proyek', 'kontak'];
  const navSections = navSectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-panel .mobile-nav-link');

  let currentActiveId = null;
  let isManualScroll = false;
  let manualScrollTimeout = null;

  function setActiveNavLink(targetId) {
    if (!targetId || currentActiveId === targetId) return;
    currentActiveId = targetId;

    desktopNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  function handleScrollSpy() {
    if (isManualScroll) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. Jika pengguna telah menggulir sampai dasar halaman (mencapai bagian kontak / footer)
    if (scrollY + windowHeight >= documentHeight - 60) {
      setActiveNavLink('kontak');
      return;
    }

    // 2. Jika di posisi paling atas halaman
    if (scrollY < 120) {
      setActiveNavLink('beranda');
      return;
    }

    // 3. Deteksi bagian aktif berdasarkan posisi scroll
    // Offset 140px untuk memperhitungkan tinggi navbar sticky (72px) dan jarak pandang nyaman
    const threshold = 140;
    let activeId = 'beranda';

    for (let i = 0; i < navSections.length; i++) {
      const section = navSections[i];
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY - threshold;

      if (scrollY >= sectionTop) {
        activeId = section.getAttribute('id');
      }
    }

    setActiveNavLink(activeId);
  }

  // Gunakan requestAnimationFrame untuk performa scroll 60fps yang halus
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleScrollSpy();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    handleScrollSpy();
  }, { passive: true });

  // Event listener klik tautan agar highlight berpindah seketika tanpa delay
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach(anchor => {
    anchor.addEventListener('click', () => {
      const targetHash = anchor.getAttribute('href');
      if (targetHash && targetHash.startsWith('#')) {
        const targetId = targetHash.substring(1);
        if (navSectionIds.includes(targetId)) {
          setActiveNavLink(targetId);

          // Kunci sementara scroll spy selama animasi smooth-scroll berlangsung (~800ms)
          isManualScroll = true;
          clearTimeout(manualScrollTimeout);
          manualScrollTimeout = setTimeout(() => {
            isManualScroll = false;
            handleScrollSpy();
          }, 850);
        }
      }
    });
  });

  // Jalankan sekali saat halaman pertama kali dimuat
  handleScrollSpy();
});
