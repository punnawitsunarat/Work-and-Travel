// Work & Travel USA (J-1) - App Logic (2026 Edition: Pro Financial Simulator & 50 States Dynamic Data)

let appState = {
  activeTab: 'explore',
  viewMode: 'grid',
  searchQuery: '',
  filterTier: 'all',
  filterRegion: 'all',
  filterSeason: 'all', // 'all' | 'spring' | 'summer'
  filterBadge: 'all',
  sortBy: 'overall_score_desc',
  selectedForCompare: ['wisconsin', 'wyoming', 'florida'],
  currentDetailStateId: null,
  quizAnswers: {},
  filterAgencyTier: 'all',
  filterAgencyEnglish: 'all',
  filterAgencyCapacity: 'all',
  agencySearchQuery: '',
  calc: {
    stateId: 'wisconsin',
    weeksCount: 12,
    hourlyWage: 15.0,
    job1Hours: 48,
    hasJob2: true,
    job2Wage: 14.5,
    job2Hours: 15,
    tipsWeekly: 0,
    exchangeRate: 32.85,
    fedTaxRate: 10.0,
    stateTaxRate: 3.54,
    localTaxRate: 0.0,
    safetyFactor: 1.15,
    taxRefundRate: 50,
    housingCost: 105,
    livingCost: 75,
    commuteCost: 10,
    miscCost: 15,
    housingDeposit: 200,
    travelBudget: 1000,
    shoppingBudget: 500,
    preProgramFee: 75000,
    preVisaSevis: 7800,
    preFlight: 48000,
    prePocketUSD: 800
  }
};

let detailChartInstance = null;
let compareChartInstance = null;
let calcChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initTabs();
  initSearchAndFilters();
  renderStatsOverview();
  renderStates();
  initCompareSelects();
  renderCompareView();
  initQuiz();
  initCalculator();
  initAgencies();
  initTimelineChecklist();
  initLucideIcons();
}

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  appState.activeTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.dataset.tab === tabId) {
      t.classList.add('active', 'bg-blue-600', 'text-white');
      t.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
    } else {
      t.classList.remove('active', 'bg-blue-600', 'text-white');
      t.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
    }
  });

  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  const activeContent = document.getElementById(`tab-content-${tabId}`);
  if (activeContent) activeContent.classList.remove('hidden');

  if (tabId === 'compare') renderCompareView();
  else if (tabId === 'calculator') updateCalculatorResults();
  else if (tabId === 'agencies') renderAgencies();

  initLucideIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderStatsOverview() {
  const total = STATES_DATA.length;
  const noIncomeTaxCount = STATES_DATA.filter(s => s.has_no_income_tax).length;
  const noSalesTaxCount = STATES_DATA.filter(s => s.has_no_sales_tax).length;
  const tierSCount = STATES_DATA.filter(s => s.tier === 'Tier S').length;

  const elTotal = document.getElementById('stat-total-states');
  const elNoInc = document.getElementById('stat-no-income-tax');
  const elNoSal = document.getElementById('stat-no-sales-tax');
  const elTierS = document.getElementById('stat-tier-s');

  if (elTotal) elTotal.textContent = total;
  if (elNoInc) elNoInc.textContent = noIncomeTaxCount;
  if (elNoSal) elNoSal.textContent = noSalesTaxCount;
  if (elTierS) elTierS.textContent = tierSCount;
}

function initSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.trim().toLowerCase();
      renderStates();
    });
  }

  const tierFilters = document.querySelectorAll('.tier-filter-btn');
  tierFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      tierFilters.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('bg-blue-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      appState.filterTier = btn.dataset.tier;
      renderStates();
    });
  });

  const seasonFilters = document.querySelectorAll('.season-filter-btn');
  seasonFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      seasonFilters.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('bg-amber-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      appState.filterSeason = btn.dataset.season;
      renderStates();
    });
  });

  const regionSelect = document.getElementById('region-filter-select');
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      appState.filterRegion = e.target.value;
      renderStates();
    });
  }

  const badgeSelect = document.getElementById('badge-filter-select');
  if (badgeSelect) {
    badgeSelect.addEventListener('change', (e) => {
      appState.filterBadge = e.target.value;
      renderStates();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      appState.sortBy = e.target.value;
      renderStates();
    });
  }

  const btnGrid = document.getElementById('btn-view-grid');
  const btnTable = document.getElementById('btn-view-table');

  if (btnGrid && btnTable) {
    btnGrid.addEventListener('click', () => {
      appState.viewMode = 'grid';
      btnGrid.classList.add('bg-blue-600', 'text-white');
      btnGrid.classList.remove('bg-slate-800', 'text-slate-400');
      btnTable.classList.remove('bg-blue-600', 'text-white');
      btnTable.classList.add('bg-slate-800', 'text-slate-400');
      document.getElementById('states-grid-view').classList.remove('hidden');
      document.getElementById('states-table-view').classList.add('hidden');
      renderStates();
    });

    btnTable.addEventListener('click', () => {
      appState.viewMode = 'table';
      btnTable.classList.add('bg-blue-600', 'text-white');
      btnTable.classList.remove('bg-slate-800', 'text-slate-400');
      btnGrid.classList.remove('bg-blue-600', 'text-white');
      btnGrid.classList.add('bg-slate-800', 'text-slate-400');
      document.getElementById('states-grid-view').classList.add('hidden');
      document.getElementById('states-table-view').classList.remove('hidden');
      renderStates();
    });
  }
}

function getFilteredAndSortedStates() {
  let list = [...STATES_DATA];

  if (appState.searchQuery) {
    const q = appState.searchQuery;
    list = list.filter(s => {
      const matchName = s.name.toLowerCase().includes(q);
      const matchCode = s.code.toLowerCase().includes(q);
      const matchHotspot = s.hotspots.some(h => h.toLowerCase().includes(q));
      const matchBestFor = s.best_for.toLowerCase().includes(q);
      const matchVibe = s.vibe.toLowerCase().includes(q);
      return matchName || matchCode || matchHotspot || matchBestFor || matchVibe;
    });
  }

  if (appState.filterTier !== 'all') {
    list = list.filter(s => s.tier === appState.filterTier);
  }

  if (appState.filterRegion !== 'all') {
    list = list.filter(s => s.region === appState.filterRegion);
  }

  if (appState.filterBadge === 'no_income_tax') {
    list = list.filter(s => s.has_no_income_tax);
  } else if (appState.filterBadge === 'no_sales_tax') {
    list = list.filter(s => s.has_no_sales_tax);
  } else if (appState.filterBadge === 'clothing_tax_free') {
    list = list.filter(s => s.has_clothing_tax_exemption);
  } else if (appState.filterBadge === 'bikeable') {
    list = list.filter(s => s.commute_type.includes('จักรยาน'));
  } else if (appState.filterBadge === 'employer_housing') {
    list = list.filter(s => s.housing_type.includes('หอพัก') || s.housing_type.includes('อุทยาน'));
  } else if (appState.filterBadge === 'high_earning') {
    list = list.filter(s => s.grades.earning_job2_tax.score >= 90);
  }

  const gradeRank = { 'A+': 8, 'A': 7, 'A-': 6, 'B+': 5, 'B': 4, 'B-': 3, 'C+': 2, 'C': 1, 'D': 0 };

  list.sort((a, b) => {
    if (appState.filterSeason === 'spring' && appState.sortBy === 'overall_score_desc') {
      const gA = gradeRank[a.season_info?.spring?.grade] || 0;
      const gB = gradeRank[b.season_info?.spring?.grade] || 0;
      if (gB !== gA) return gB - gA;
      return b.overall_score - a.overall_score;
    }

    if (appState.filterSeason === 'summer' && appState.sortBy === 'overall_score_desc') {
      const gA = gradeRank[a.season_info?.summer?.grade] || 0;
      const gB = gradeRank[b.season_info?.summer?.grade] || 0;
      if (gB !== gA) return gB - gA;
      return b.overall_score - a.overall_score;
    }

    switch (appState.sortBy) {
      case 'overall_score_desc': return b.overall_score - a.overall_score;
      case 'overall_score_asc': return a.overall_score - b.overall_score;
      case 'safety_desc': return b.grades.safety.score - a.grades.safety.score;
      case 'earning_desc': return b.grades.earning_job2_tax.score - a.grades.earning_job2_tax.score;
      case 'housing_desc': return b.grades.housing_value.score - a.grades.housing_value.score;
      case 'commute_desc': return b.grades.commute_convenience.score - a.grades.commute_convenience.score;
      case 'alumni_desc': return b.grades.alumni_rating.score - a.grades.alumni_rating.score;
      case 'name_asc': return a.name.localeCompare(b.name);
      default: return b.overall_score - a.overall_score;
    }
  });

  return list;
}

function getGradeBadgeClass(grade) {
  switch (grade) {
    case 'A+': return 'grade-Ap';
    case 'A': return 'grade-A';
    case 'A-': return 'grade-Am';
    case 'B+': return 'grade-Bp';
    case 'B': return 'grade-B';
    case 'B-': return 'grade-Bm';
    case 'C+': return 'grade-Cp';
    case 'C': return 'grade-C';
    case 'D': return 'grade-D';
    default: return 'bg-slate-600 text-white';
  }
}

function getTierBadgeClass(tier) {
  switch (tier) {
    case 'Tier S': return 'tier-S';
    case 'Tier A': return 'tier-A';
    case 'Tier B': return 'tier-B';
    case 'Tier C': return 'tier-C';
    default: return 'bg-slate-600 text-white';
  }
}

function renderStates() {
  const filtered = getFilteredAndSortedStates();
  const countSpan = document.getElementById('results-count');
  
  let statusText = `พบ ${filtered.length} รัฐ (ภาพรวมมาตรฐาน)`;
  if (appState.filterSeason === 'spring') {
    statusText = `🌱 มุมมองช่วง Spring (7 มี.ค. - 7 ก.ค.) — ครบทั้ง 50 รัฐ (เรียงตามความพร้อมช่วงสปริง)`;
  } else if (appState.filterSeason === 'summer') {
    statusText = `☀️ มุมมองช่วง Summer (7 พ.ค. - 7 ก.ย.) — ครบทั้ง 50 รัฐ (เรียงตามความพร้อมช่วงซัมเมอร์)`;
  }

  if (countSpan) countSpan.textContent = statusText;

  if (appState.viewMode === 'grid') renderGridView(filtered);
  else renderTableView(filtered);

  initLucideIcons();
}

function renderGridView(states) {
  const container = document.getElementById('states-grid-view');
  if (!container) return;

  if (states.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
        <p class="text-lg font-semibold">ไม่พบข้อมูลรัฐที่ตรงกับเงื่อนไขการค้นหา</p>
      </div>
    `;
    return;
  }

  container.innerHTML = states.map(s => {
    const isSelected = appState.selectedForCompare.includes(s.id);
    const taxBadges = [];
    if (s.has_no_income_tax) taxBadges.push(`<span class="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">💸 0% Income Tax</span>`);
    if (s.has_no_sales_tax) taxBadges.push(`<span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🛍️ 0% Sales Tax</span>`);
    if (s.has_clothing_tax_exemption && !s.has_no_sales_tax) taxBadges.push(`<span class="px-2 py-0.5 rounded text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">👗 เสื้อผ้า 0% Tax</span>`);

    const sInfo = s.season_info || { spring: { grade: 'B', note: '' }, summer: { grade: 'A+', note: '' } };

    let seasonalCardHtml = '';
    let topGradeBadge = `
      <span class="grade-badge px-3 py-1 text-sm ${getGradeBadgeClass(s.overall_grade)}">
        ${s.overall_grade}
      </span>
      <span class="block text-[10px] text-slate-400 mt-0.5">${s.overall_score}/100</span>
    `;

    if (appState.filterSeason === 'spring') {
      topGradeBadge = `
        <div class="text-right">
          <span class="grade-badge px-3 py-1 text-xs font-bold ${getGradeBadgeClass(sInfo.spring.grade)} bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
            🌱 Spring ${sInfo.spring.grade}
          </span>
          <span class="block text-[10px] text-slate-400 mt-0.5">เกรดรวม ${s.overall_grade}</span>
        </div>
      `;
      seasonalCardHtml = `
        <div class="my-2.5 p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
          <div class="flex items-center justify-between font-bold text-emerald-300 mb-1">
            <span class="flex items-center gap-1.5">🌱 ความพร้อมช่วง Spring (7 มี.ค. - 7 ก.ค.):</span>
            <span class="grade-badge px-2 py-0.5 text-[10px] ${getGradeBadgeClass(sInfo.spring.grade)}">${sInfo.spring.grade}</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">${sInfo.spring.note}</p>
        </div>
      `;
    } else if (appState.filterSeason === 'summer') {
      topGradeBadge = `
        <div class="text-right">
          <span class="grade-badge px-3 py-1 text-xs font-bold ${getGradeBadgeClass(sInfo.summer.grade)} bg-amber-950/80 border border-amber-500/40 text-amber-300">
            ☀️ Summer ${sInfo.summer.grade}
          </span>
          <span class="block text-[10px] text-slate-400 mt-0.5">เกรดรวม ${s.overall_grade}</span>
        </div>
      `;
      seasonalCardHtml = `
        <div class="my-2.5 p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs">
          <div class="flex items-center justify-between font-bold text-amber-300 mb-1">
            <span class="flex items-center gap-1.5">☀️ ความพร้อมช่วง Summer (7 พ.ค. - 7 ก.ย.):</span>
            <span class="grade-badge px-2 py-0.5 text-[10px] ${getGradeBadgeClass(sInfo.summer.grade)}">${sInfo.summer.grade}</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">${sInfo.summer.note}</p>
        </div>
      `;
    }

    return `
      <div class="glass-card rounded-2xl p-5 flex flex-col justify-between relative group overflow-hidden ${appState.filterSeason === 'spring' ? 'border-emerald-900/40' : appState.filterSeason === 'summer' ? 'border-amber-900/40' : ''}">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-xl text-blue-400 group-hover:scale-105 transition-transform">
                ${s.code}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-heading font-bold text-lg text-white group-hover:text-blue-300 transition-colors">${s.name}</h3>
                  <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${getTierBadgeClass(s.tier)}">${s.tier}</span>
                </div>
                <p class="text-xs text-slate-400 italic">${s.nickname}</p>
              </div>
            </div>
            <div class="text-right">
              ${topGradeBadge}
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-3">
            <span class="px-2 py-0.5 rounded text-xs bg-slate-800/80 text-slate-300 border border-slate-700">📍 ${s.region}</span>
            <span class="px-2 py-0.5 rounded text-xs bg-blue-950/40 text-blue-300 border border-blue-800/40">✨ ${s.vibe}</span>
            ${taxBadges.join('')}
          </div>

          ${seasonalCardHtml}

          <div class="space-y-1.5 text-xs text-slate-300 my-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
            <div class="flex justify-between">
              <span class="text-slate-400">💵 ค่าแรง (กม./ตลาด):</span>
              <span class="font-medium text-white">${s.min_wage}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">🏠 ค่าเช่าที่พักประมาณการ:</span>
              <span class="font-medium text-white">${s.avg_housing_cost}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">🚴 การเดินทางหลัก:</span>
              <span class="font-medium text-white">${s.commute_type}</span>
            </div>
          </div>

          <!-- ALL 7 DIMENSIONS -->
          <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-3 space-y-1.5 text-[11px]">
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 mb-1 flex justify-between">
              <span>ผลประเมินครบ 7 มิติ</span>
              <span class="text-amber-300 font-semibold">(มิติ 4 ถ่วงน้ำหนัก 2x)</span>
            </div>
            <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-slate-300">
              <div class="flex items-center justify-between">
                <span class="text-slate-400">1. ความปลอดภัย:</span>
                <span class="font-bold ${s.grades.safety.score >= 90 ? 'text-emerald-400' : 'text-blue-400'}">${s.grades.safety.grade}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">2. สวยงาม/คน:</span>
                <span class="font-bold">${s.grades.scenery_friendliness.grade}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">3. ท่องเที่ยว:</span>
                <span class="font-bold">${s.grades.tourism_crowds.grade}</span>
              </div>
              <div class="flex items-center justify-between bg-blue-950/40 px-1 py-0.5 rounded border border-blue-800/40">
                <span class="text-amber-300 font-bold">4. งาน/ภาษี (x2):</span>
                <span class="font-bold ${s.grades.earning_job2_tax.score >= 90 ? 'text-emerald-400' : 'text-amber-300'}">${s.grades.earning_job2_tax.grade}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">5. ที่พักคุ้มค่า:</span>
                <span class="font-bold">${s.grades.housing_value.grade}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">6. เดินทางสะดวก:</span>
                <span class="font-bold">${s.grades.commute_convenience.grade}</span>
              </div>
            </div>
            <div class="flex items-center justify-between pt-1 border-t border-slate-800/60 text-slate-300">
              <span class="text-slate-400">7. รีวิว/ความพึงพอใจรุ่นพี่:</span>
              <span class="font-bold text-amber-400">${s.grades.alumni_rating.grade} (${s.grades.alumni_rating.score}/100)</span>
            </div>
          </div>

          <div class="text-xs text-slate-400 mb-4 line-clamp-1">
            <strong class="text-slate-300">เมืองเด่น:</strong> ${s.hotspots.join(', ')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 flex items-center gap-2">
          <button 
            onclick="openStateDetailModal('${s.id}')"
            class="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/20"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            ดูรายละเอียด
          </button>
          
          <button 
            onclick="toggleCompareState('${s.id}')"
            class="p-2 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center ${isSelected ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'}"
            title="${isSelected ? 'ลบออกจากการเปรียบเทียบ' : 'เพิ่มไปเปรียบเทียบ'}"
          >
            <i data-lucide="${isSelected ? 'check-square' : 'plus-square'}" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderTableView(states) {
  const container = document.getElementById('states-table-view');
  if (!container) return;

  const showSpringCol = appState.filterSeason === 'spring';
  const showSummerCol = appState.filterSeason === 'summer';

  container.innerHTML = `
    <div class="glass-panel rounded-2xl overflow-x-auto border border-slate-800">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/90 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800">
          <tr>
            <th class="p-3">รัฐ (State)</th>
            <th class="p-3">Tier</th>
            ${showSpringCol ? '<th class="p-3 bg-emerald-950/50 text-emerald-300 whitespace-nowrap">🌱 Spring (7มี.ค.-7ก.ค.)</th>' : ''}
            ${showSummerCol ? '<th class="p-3 bg-amber-950/50 text-amber-300 whitespace-nowrap">☀️ Summer (7พ.ค.-7ก.ย.)</th>' : ''}
            <th class="p-3 whitespace-nowrap">ค่าแรง (กม. / ตลาด)</th>
            <th class="p-3 text-center whitespace-nowrap">1. ปลอดภัย</th>
            <th class="p-3 text-center whitespace-nowrap">2. สวยงาม/คน</th>
            <th class="p-3 text-center whitespace-nowrap">3. ท่องเที่ยว</th>
            <th class="p-3 text-center bg-blue-950/50 text-amber-300 whitespace-nowrap">4. งาน/ภาษี (x2)</th>
            <th class="p-3 text-center whitespace-nowrap">5. ที่พัก</th>
            <th class="p-3 text-center whitespace-nowrap">6. เดินทาง</th>
            <th class="p-3 text-center whitespace-nowrap">7. รีวิว</th>
            <th class="p-3 text-center whitespace-nowrap">เกรดรวม (2x)</th>
            <th class="p-3 whitespace-nowrap">สิทธิภาษี</th>
            <th class="p-3 text-right whitespace-nowrap">การจัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          ${states.map(s => {
            const isSelected = appState.selectedForCompare.includes(s.id);
            const sInfo = s.season_info || { spring: { grade: 'B', note: '' }, summer: { grade: 'A+', note: '' } };
            return `
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="p-3 font-semibold text-white whitespace-nowrap">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded bg-slate-800 text-[10px] flex items-center justify-center font-bold text-blue-400">${s.code}</span>
                    <span>${s.name}</span>
                  </div>
                </td>
                <td class="p-3 whitespace-nowrap">
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${getTierBadgeClass(s.tier)}">${s.tier}</span>
                </td>
                ${showSpringCol ? `
                  <td class="p-3 whitespace-nowrap bg-emerald-950/20">
                    <span class="grade-badge px-2 py-0.5 font-bold ${getGradeBadgeClass(sInfo.spring.grade)}">${sInfo.spring.grade}</span>
                    <span class="text-[11px] text-slate-400 ml-1.5 hidden xl:inline">${sInfo.spring.note.slice(0, 30)}...</span>
                  </td>
                ` : ''}
                ${showSummerCol ? `
                  <td class="p-3 whitespace-nowrap bg-amber-950/20">
                    <span class="grade-badge px-2 py-0.5 font-bold ${getGradeBadgeClass(sInfo.summer.grade)}">${sInfo.summer.grade}</span>
                    <span class="text-[11px] text-slate-400 ml-1.5 hidden xl:inline">${sInfo.summer.note.slice(0, 30)}...</span>
                  </td>
                ` : ''}
                <td class="p-3 whitespace-nowrap text-[11px] text-slate-200">
                  ${s.min_wage}
                </td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.safety.grade)}">${s.grades.safety.grade}</span></td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.scenery_friendliness.grade)}">${s.grades.scenery_friendliness.grade}</span></td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.tourism_crowds.grade)}">${s.grades.tourism_crowds.grade}</span></td>
                <td class="p-3 text-center font-bold bg-blue-950/30"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.earning_job2_tax.grade)}">${s.grades.earning_job2_tax.grade}</span></td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.housing_value.grade)}">${s.grades.housing_value.grade}</span></td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.commute_convenience.grade)}">${s.grades.commute_convenience.grade}</span></td>
                <td class="p-3 text-center font-bold"><span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(s.grades.alumni_rating.grade)}">${s.grades.alumni_rating.grade}</span></td>
                <td class="p-3 text-center font-bold">
                  <span class="grade-badge px-2.5 py-1 text-xs ${getGradeBadgeClass(s.overall_grade)}">${s.overall_grade}</span>
                </td>
                <td class="p-3 whitespace-nowrap">
                  <div class="flex gap-1">
                    ${s.has_no_income_tax ? '<span class="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-semibold">0% Income</span>' : ''}
                    ${s.has_no_sales_tax ? '<span class="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold">0% Sales</span>' : ''}
                    ${s.has_clothing_tax_exemption && !s.has_no_sales_tax ? '<span class="px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-semibold">0% Clothes</span>' : ''}
                    ${!s.has_no_income_tax && !s.has_no_sales_tax && !s.has_clothing_tax_exemption ? '<span class="text-slate-500 text-[11px]">-</span>' : ''}
                  </div>
                </td>
                <td class="p-3 text-right whitespace-nowrap">
                  <button 
                    onclick="openStateDetailModal('${s.id}')"
                    class="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs mr-1"
                  >
                    ดูข้อมูล
                  </button>
                  <button 
                    onclick="toggleCompareState('${s.id}')"
                    class="p-1 rounded-lg border text-xs font-semibold ${isSelected ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'}"
                    title="เปรียบเทียบ"
                  >
                    <i data-lucide="${isSelected ? 'check-square' : 'plus-square'}" class="w-3.5 h-3.5 inline"></i>
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openStateDetailModal(stateId) {
  const state = STATES_DATA.find(s => s.id === stateId);
  if (!state) return;

  appState.currentDetailStateId = stateId;
  const modal = document.getElementById('state-detail-modal');
  const container = document.getElementById('state-detail-content');

  const taxBadges = [];
  if (state.has_no_income_tax) taxBadges.push(`<span class="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">💸 0% State Income Tax</span>`);
  if (state.has_no_sales_tax) taxBadges.push(`<span class="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🛍️ 0% Sales Tax</span>`);
  if (state.has_clothing_tax_exemption && !state.has_no_sales_tax) taxBadges.push(`<span class="px-3 py-1 rounded-lg text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">👗 0% Sales Tax on Clothing</span>`);

  const sInfo = state.season_info || {
    spring: { period: "7 มี.ค. - 7 ก.ค.", grade: "A", note: "เปิดรับปกติ" },
    summer: { period: "7 พ.ค. - 7 ก.ย.", grade: "A+", note: "พีกซีซัน" },
    best_season: "Summer"
  };

  container.innerHTML = `
    <div class="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/80">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-blue-900/30 border border-blue-700/50 flex items-center justify-center font-black text-2xl text-blue-400">
          ${state.code}
        </div>
        <div>
          <div class="flex items-center gap-3">
            <h2 class="font-heading font-extrabold text-2xl text-white">${state.name}</h2>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${getTierBadgeClass(state.tier)}">${state.tier}</span>
          </div>
          <p class="text-sm text-slate-400 italic">${state.nickname} &bull; ภูมิภาค: ${state.region}</p>
        </div>
      </div>
      <div class="text-right">
        <span class="grade-badge px-4 py-1.5 text-lg ${getGradeBadgeClass(state.overall_grade)} shadow-xl">
          เกรดรวม ${state.overall_grade}
        </span>
        <span class="block text-xs text-slate-400 mt-1">คะแนนรวม ${state.overall_score}/100 (ถ่วงน้ำหนัก 2x มิติที่ 4)</span>
      </div>
    </div>

    <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700 font-medium">✨ บรรยากาศ: ${state.vibe}</span>
        ${taxBadges.join('')}
      </div>

      <!-- SEASONAL READINESS & TIMING CARD -->
      <div class="bg-gradient-to-r from-blue-950/50 via-slate-900 to-indigo-950/50 p-5 rounded-2xl border border-blue-500/30 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-heading font-bold text-sm text-white flex items-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4 text-amber-400"></i>
            การประเมินความเหมาะสมตามช่วงโครงการ (Spring vs Summer)
          </h4>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            🎯 แนะนำ: ${sInfo.best_season}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-xs text-emerald-400 flex items-center gap-1.5">🌱 ช่วง Spring (7 มี.ค. - 7 ก.ค.)</span>
              <span class="grade-badge px-2 py-0.5 text-xs ${getGradeBadgeClass(sInfo.spring.grade)} font-bold">${sInfo.spring.grade}</span>
            </div>
            <p class="text-[11px] text-slate-300 leading-relaxed">${sInfo.spring.note}</p>
          </div>
          <div class="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-xs text-amber-300 flex items-center gap-1.5">☀️ ช่วง Summer (7 พ.ค. - 7 ก.ย.)</span>
              <span class="grade-badge px-2 py-0.5 text-xs ${getGradeBadgeClass(sInfo.summer.grade)} font-bold">${sInfo.summer.grade}</span>
            </div>
            <p class="text-[11px] text-slate-300 leading-relaxed">${sInfo.summer.note}</p>
          </div>
        </div>
      </div>

      <!-- Verified Data Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div>
          <span class="text-xs text-slate-400 block">🏛️ ค่าแรงตามกฎหมาย (Statutory)</span>
          <span class="font-bold text-xs text-white">${state.statutory_min_wage}</span>
        </div>
        <div>
          <span class="text-xs text-slate-400 block">💵 ค่าแรงตลาด J-1 (ฐาน & รวมทิปโดยประมาณ)</span>
          <span class="font-bold text-xs text-emerald-400">${state.market_wage_estimate}</span>
        </div>
        <div>
          <span class="text-xs text-slate-400 block">🏛️ ภาษีเงินได้รัฐ (State Income Tax)</span>
          <span class="font-bold text-xs ${state.has_no_income_tax ? 'text-amber-300' : 'text-white'}">${state.state_income_tax}</span>
        </div>
        <div>
          <span class="text-xs text-slate-400 block">🏠 ค่าเช่าที่พักประมาณการ</span>
          <span class="font-bold text-xs text-white">${state.avg_housing_cost}</span>
        </div>
      </div>

      <!-- Radar and Detailed Dimensions -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
        <div class="lg:col-span-5 flex flex-col items-center justify-center">
          <h4 class="font-heading font-bold text-sm text-slate-300 mb-2">เรดาร์คะแนน 7 ด้าน</h4>
          <div class="w-full max-w-[280px] h-[260px] relative">
            <canvas id="state-detail-radar-canvas"></canvas>
          </div>
        </div>
        
        <div class="lg:col-span-7 space-y-2.5">
          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">1. ความปลอดภัย (Safety):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.safety.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.safety.grade)} font-bold">${state.grades.safety.grade} (${state.grades.safety.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">2. สวยงาม/ผู้คน (Vibe):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.scenery_friendliness.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.scenery_friendliness.grade)} font-bold">${state.grades.scenery_friendliness.grade} (${state.grades.scenery_friendliness.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">3. อุปสงค์ท่องเที่ยว (Tourism):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.tourism_crowds.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.tourism_crowds.grade)} font-bold">${state.grades.tourism_crowds.grade} (${state.grades.tourism_crowds.score})</span>
          </div>

          <div class="bg-amber-950/20 border border-amber-500/30 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-bold text-amber-300">4. งาน 2, ภาษี & ค่าครองชีพ (น้ำหนัก 2x):</span>
              <span class="text-slate-300 block text-[11px] mt-0.5">${state.grades.earning_job2_tax.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.earning_job2_tax.grade)} font-bold shrink-0">${state.grades.earning_job2_tax.grade} (${state.grades.earning_job2_tax.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">5. ที่พักคุ้มค่า (Housing Value):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.housing_value.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.housing_value.grade)} font-bold">${state.grades.housing_value.grade} (${state.grades.housing_value.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">6. การเดินทาง (Commute):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.commute_convenience.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.commute_convenience.grade)} font-bold">${state.grades.commute_convenience.grade} (${state.grades.commute_convenience.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl text-xs flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">7. รีวิว/ความพึงพอใจ (Alumni):</span>
              <span class="text-slate-400 block text-[11px]">${state.grades.alumni_rating.note}</span>
            </div>
            <span class="grade-badge px-2.5 py-0.5 ${getGradeBadgeClass(state.grades.alumni_rating.grade)} font-bold">${state.grades.alumni_rating.grade} (${state.grades.alumni_rating.score})</span>
          </div>
        </div>
      </div>

      <!-- Hotspots -->
      <div class="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <h4 class="font-heading font-bold text-sm text-slate-200 mb-2 flex items-center gap-2">
          <i data-lucide="map-pin" class="w-4 h-4 text-blue-400"></i> เมืองท่องเที่ยวและจุดทำงานยอดฮิต
        </h4>
        <div class="flex flex-wrap gap-2">
          ${state.hotspots.map(h => `<span class="px-3 py-1 rounded-xl bg-slate-800 text-blue-300 text-xs font-semibold border border-slate-700">${h}</span>`).join('')}
        </div>
      </div>

      <!-- Pros & Cons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-2xl">
          <h4 class="font-heading font-bold text-sm text-emerald-300 mb-2 flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> จุดเด่นสำคัญ</h4>
          <ul class="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
            ${state.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="bg-rose-950/20 border border-rose-800/40 p-4 rounded-2xl">
          <h4 class="font-heading font-bold text-sm text-rose-300 mb-2 flex items-center gap-1.5"><i data-lucide="alert-triangle" class="w-4 h-4 text-rose-400"></i> ข้อควรพิจารณา</h4>
          <ul class="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
            ${state.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Recommendation -->
      <div class="p-3.5 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/30 flex items-center gap-3">
        <i data-lucide="sparkles" class="w-5 h-5 text-amber-400 shrink-0"></i>
        <div>
          <span class="text-xs text-slate-400 font-semibold block">เหมาะที่สุดสำหรับ:</span>
          <span class="text-sm font-bold text-white">${state.best_for}</span>
        </div>
      </div>

    </div>

    <div class="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/80">
      <button onclick="toggleCompareState('${state.id}'); updateModalCompareButton('${state.id}');" id="modal-compare-btn" class="py-2 px-4 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2">
        <i data-lucide="${appState.selectedForCompare.includes(state.id) ? 'check-square' : 'plus-square'}" class="w-4 h-4"></i>
        <span>${appState.selectedForCompare.includes(state.id) ? 'เลือกเปรียบเทียบอยู่' : '+ เพิ่มไปเปรียบเทียบ'}</span>
      </button>
      <button onclick="closeStateDetailModal()" class="py-2 px-5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs transition-colors">
        ปิดหน้าต่าง
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
  renderStateDetailRadarChart(state);
}

function updateModalCompareButton(stateId) {
  const btn = document.getElementById('modal-compare-btn');
  if (!btn) return;
  const isSelected = appState.selectedForCompare.includes(stateId);
  btn.innerHTML = `
    <i data-lucide="${isSelected ? 'check-square' : 'plus-square'}" class="w-4 h-4"></i>
    <span>${isSelected ? 'เลือกเปรียบเทียบอยู่' : '+ เพิ่มไปเปรียบเทียบ'}</span>
  `;
  initLucideIcons();
}

function closeStateDetailModal() {
  const modal = document.getElementById('state-detail-modal');
  if (modal) modal.classList.add('hidden');
}

function renderStateDetailRadarChart(state) {
  const canvas = document.getElementById('state-detail-radar-canvas');
  if (!canvas) return;
  if (detailChartInstance) detailChartInstance.destroy();

  const dataValues = [
    state.grades.safety.score,
    state.grades.scenery_friendliness.score,
    state.grades.tourism_crowds.score,
    state.grades.earning_job2_tax.score,
    state.grades.housing_value.score,
    state.grades.commute_convenience.score,
    state.grades.alumni_rating.score
  ];

  detailChartInstance = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['ความปลอดภัย', 'สวยงาม/ผู้คน', 'อุปสงค์ท่องเที่ยว', 'งาน2/ภาษี/ครองชีพ (x2)', 'ที่พักคุ้มค่า', 'การเดินทาง', 'รีวิว/พึงพอใจ'],
      datasets: [{
        label: state.name,
        data: dataValues,
        backgroundColor: 'rgba(59, 130, 246, 0.25)',
        borderColor: '#3b82f6',
        pointBackgroundColor: '#60a5fa',
        pointBorderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 40,
          max: 100,
          ticks: { display: false, stepSize: 20 },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#94a3b8', font: { size: 10, family: 'Prompt' } }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function toggleCompareState(stateId) {
  const idx = appState.selectedForCompare.indexOf(stateId);
  if (idx >= 0) appState.selectedForCompare.splice(idx, 1);
  else {
    if (appState.selectedForCompare.length >= 3) appState.selectedForCompare.shift();
    appState.selectedForCompare.push(stateId);
  }
  updateCompareBadgeCount();
  renderStates();
  renderCompareView();
}

function updateCompareBadgeCount() {
  const countSpan = document.getElementById('compare-tab-badge');
  if (countSpan) countSpan.textContent = appState.selectedForCompare.length;
}

function initCompareSelects() {
  const selects = [
    document.getElementById('compare-select-1'),
    document.getElementById('compare-select-2'),
    document.getElementById('compare-select-3')
  ];

  selects.forEach((sel, i) => {
    if (!sel) return;
    sel.innerHTML = `<option value="">-- เลือกรัฐที่ ${i+1} --</option>` + STATES_DATA.map(s => `<option value="${s.id}">${s.name} (${s.overall_grade})</option>`).join('');
    if (appState.selectedForCompare[i]) sel.value = appState.selectedForCompare[i];

    sel.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val) appState.selectedForCompare[i] = val;
      else appState.selectedForCompare.splice(i, 1);
      renderCompareView();
      renderStates();
    });
  });
}

function renderCompareView() {
  const selectedStates = appState.selectedForCompare.map(id => STATES_DATA.find(s => s.id === id)).filter(Boolean);
  const container = document.getElementById('compare-results-container');
  if (!container) return;

  for (let i = 1; i <= 3; i++) {
    const sel = document.getElementById(`compare-select-${i}`);
    if (sel) sel.value = appState.selectedForCompare[i-1] || '';
  }

  if (selectedStates.length < 2) {
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-12 text-center text-slate-400">
        <i data-lucide="scale" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
        <h3 class="font-heading font-bold text-lg text-white">กรุณาเลือกรัฐอย่างน้อย 2 รัฐเพื่อเปรียบเทียบ</h3>
      </div>
    `;
    initLucideIcons();
    return;
  }

  const chartColors = [
    { bg: 'rgba(59, 130, 246, 0.2)', border: '#3b82f6' },
    { bg: 'rgba(16, 185, 129, 0.2)', border: '#10b981' },
    { bg: 'rgba(245, 158, 11, 0.2)', border: '#f59e0b' }
  ];

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-${selectedStates.length} gap-4 mb-6">
      ${selectedStates.map((s, idx) => `
        <div class="glass-card rounded-2xl p-5 border-t-4" style="border-top-color: ${chartColors[idx].border}">
          <div class="flex items-start justify-between mb-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">ตัวเลือกที่ ${idx+1}</span>
              <h3 class="font-heading font-extrabold text-xl text-white">${s.name}</h3>
              <p class="text-xs text-slate-400">${s.nickname}</p>
            </div>
            <span class="grade-badge px-3 py-1 text-sm font-bold ${getGradeBadgeClass(s.overall_grade)}">
              ${s.overall_grade}
            </span>
          </div>
          <div class="space-y-1.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl">
            <div class="flex justify-between">
              <span class="text-slate-400">Tier:</span>
              <span class="font-bold ${getTierBadgeClass(s.tier)} px-2 py-0.5 rounded text-[10px]">${s.tier}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Spring:</span>
              <span class="font-bold text-emerald-400">${s.season_info?.spring?.grade || '-'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Summer:</span>
              <span class="font-bold text-amber-400">${s.season_info?.summer?.grade || '-'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">คะแนนรวม (2x):</span>
              <span class="font-bold text-white">${s.overall_score}/100</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="glass-panel rounded-2xl p-6 mb-6">
      <h4 class="font-heading font-bold text-base text-white mb-4 text-center">เปรียบเทียบเรดาร์กราฟิก 7 ด้าน</h4>
      <div class="w-full h-[320px] max-w-xl mx-auto relative">
        <canvas id="compare-radar-canvas"></canvas>
      </div>
    </div>
  `;

  initLucideIcons();
  renderCompareRadarChart(selectedStates, chartColors);
}

function renderCompareRadarChart(states, colors) {
  const canvas = document.getElementById('compare-radar-canvas');
  if (!canvas) return;
  if (compareChartInstance) compareChartInstance.destroy();

  const datasets = states.map((s, idx) => ({
    label: s.name,
    data: [
      s.grades.safety.score,
      s.grades.scenery_friendliness.score,
      s.grades.tourism_crowds.score,
      s.grades.earning_job2_tax.score,
      s.grades.housing_value.score,
      s.grades.commute_convenience.score,
      s.grades.alumni_rating.score
    ],
    backgroundColor: colors[idx].bg,
    borderColor: colors[idx].border,
    pointBackgroundColor: colors[idx].border,
    pointBorderColor: '#fff',
    borderWidth: 2
  }));

  compareChartInstance = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['ความปลอดภัย', 'สวยงาม/ผู้คน', 'อุปสงค์ท่องเที่ยว', 'งาน2/ภาษี/ครองชีพ (x2)', 'ที่พักคุ้มค่า', 'การเดินทาง', 'รีวิว/พึงพอใจ'],
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 40,
          max: 100,
          ticks: { display: false, stepSize: 20 },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#cbd5e1', font: { size: 11, family: 'Prompt' } }
        }
      },
      plugins: {
        legend: { position: 'bottom', labels: { color: '#f8fafc', font: { family: 'Prompt' } } }
      }
    }
  });
}

// 10 IN-DEPTH QUIZ
const QUIZ_QUESTIONS = [
  { id: 'q_season', title: '1. 🗓️ คุณวางแผนจะไปโครงการ Work & Travel ในช่วงเวลาใด?', options: [
    { id: 'spring', label: '🌱 ช่วง Spring (เริ่ม 7 มี.ค. – สิ้นสุดไม่เกิน 7 ก.ค.) — ชอบอากาศเย็นสบาย ไม่ชอบร้อนจัด ไปไวกลับไวทันเปิดเทอม' },
    { id: 'summer', label: '☀️ ช่วง Summer (เริ่ม 7 พ.ค. – สิ้นสุดไม่เกิน 7 ก.ย.) — ซัมเมอร์พีกสุดขีด 100% สวนน้ำและอุทยานเปิดครบทุกแห่ง' },
    { id: 'any_season', label: '🌟 ไปได้ทั้งสองช่วง / ขอดูผลลัพธ์รัฐที่ดีที่สุดก่อน' }
  ]},
  { id: 'q_goal', title: '2. 🎯 เป้าหมายสูงสุดในการไป Work & Travel ครั้งนี้ของคุณคืออะไร?', options: [
    { id: 'money', label: '💰 ทำเงิน & เก็บเงินสูงสุด (พร้อมทำงานหนัก ลุย OT หรือหางานสอง คืนทุนค่าโครงการและเหลือกำไรกลับไทย)' },
    { id: 'nature', label: '🏔️ สัมผัสธรรมชาติระดับโลก (ภูเขาหิมะ ป่าสน ทะเลสาบ อากาศบริสุทธิ์ เดินป่า และความสงบ)' },
    { id: 'beach', label: '🌊 สไตล์เมืองตากอากาศชายทะเล (บอร์ดวอล์ก แสงแดด ชายหาด ปาร์ตี้ และความคึกคักริมอ่าว)' },
    { id: 'easy', label: '🎢 สบายใจ ไม่ยุ่งยาก (ทำงานสวนสนุก/รีสอร์ตใหญ่ มีหอพักพร้อมรถรับส่ง ไม่ต้องดิ้นรนเอง)' }
  ]},
  { id: 'q_income_tax', title: '3. 💸 สิทธิประโยชน์ทางภาษีและรายได้ที่คุณให้ความสำคัญที่สุด?', options: [
    { id: 'no_income', label: '💸 0% State Income Tax: ไม่ต้องการเสียภาษีเงินได้รัฐ อยากรับเช็คเงินเดือนเต็มเม็ดเต็มหน่วย (เช่น WY, TN, FL, AK, SD)' },
    { id: 'no_sales', label: '🛍️ 0% Sales Tax: ชอบช้อปปิ้ง ซื้อสินค้าไอที เสื้อผ้า ของใช้ โดยไม่มีภาษีซื้อระดับรัฐ (เช่น OR, DE, MT, NH, PA)' },
    { id: 'heavy_ot', label: '📈 ขอให้งานหลักมี Overtime (1.5x) สัปดาห์ละ 10-20 ชม. ในที่เดียว ไม่ต้องเหนื่อยเดินทางไปต่องานสอง' },
    { id: 'low_cost', label: '🏷️ ขอให้ค่าครองชีพ ค่าอาหาร และค่าที่พักถูก เพื่อให้หักลบแล้วเหลือเงินเก็บสุทธิเป็นเปอร์เซ็นต์สูงสุด' }
  ]},
  { id: 'q_housing', title: '4. 🏠 รูปแบบและงบประมาณที่พักที่คุณรับได้มากที่สุด?', options: [
    { id: 'cheap_dorm', label: '🏢 หอพักพนักงานราคาประหยัด ($50 - $90/สัปดาห์) ประหยัดสุด มีสิ่งอำนวยความสะดวกพื้นฐาน' },
    { id: 'park_edr', label: '🏕️ หอพักในอุทยานแห่งชาติพร้อมโรงอาหารพนักงาน 3 มื้อ (EDR Meal Plan) กินฟรี/ถูก คุมงบง่าย' },
    { id: 'shared_house', label: '🏡 เช่าบ้านพักตากอากาศ/โมเทลแชร์กับเพื่อน ($100 - $150/สัปดาห์) ทำอาหารกินเอง มีความเป็นส่วนตัว' },
    { id: 'city_apt', label: '🏙️ อพาร์ตเมนต์หรือโรงแรมในเมือง สะดวกสบาย แต่อาจมีค่าเช่าสูงกว่า ($150 - $220+/สัปดาห์)' }
  ]},
  { id: 'q_commute', title: '5. 🚴 รูปแบบการเดินทางไปทำงานที่คุณสะดวกใจที่สุด?', options: [
    { id: 'bike', label: '🚲 ปั่นจักรยานไปทำงาน มีเลนจักรยานแยก ปลอดภัย ได้ออกกำลังกาย (เช่น Outer Banks NC, Wildwood NJ, Mackinac MI)' },
    { id: 'bus_trolley', label: '🚌 มีระบบขนส่งสาธารณะ รถบัสเลียบหาด 24 ชม. หรือรถราง Trolley ฟรี (เช่น Ocean City MD, Pigeon Forge TN)' },
    { id: 'employer_shuttle', label: '🚐 มีรถตู้หรือชัตเติลบัสของนายจ้างรับส่งถึงที่พักฟรีทุกวัน (เช่น Cedar Point OH, Morey\'s Piers NJ)' },
    { id: 'walk', label: '🚶 เดินเท้าเพียง 2-5 นาทีจากหอพักในพื้นที่ทำงาน/อุทยาน ไม่ต้องพึ่งพาพาหนะใดๆ' }
  ]},
  { id: 'q_community', title: '6. 👥 สังคมเพื่อนร่วมงานและคอมมูนิตี้ที่คุณต้องการ?', options: [
    { id: 'thai_heavy', label: '🇹🇭 คอมมูนิตี้คนไทยเยอะ อบอุ่น มีรุ่นพี่ช่วยแนะนำ หางานสองง่าย ไม่อ้างว้าง (เช่น Wisconsin Dells, Ocean City MD, Pigeon Forge)' },
    { id: 'english_immersion', label: '🇺🇸 เน้นฝึกภาษาอังกฤษเข้มข้น คนไทยน้อย ได้เพื่อนต่างชาติยุโรป/อเมริกันเยอะ (เช่น Maine, Utah, Alaska, Montana, New Hampshire)' },
    { id: 'balanced', label: '🌐 บรรยากาศนานาชาติผสมผสาน มีทั้งเพื่อนคนไทยและเพื่อนต่างชาติกำลังพอดี' }
  ]},
  { id: 'q_job2_plan', title: '7. 💼 แผนการทำ "งานที่ 2 (Second Job)" ของคุณเป็นอย่างไร?', options: [
    { id: 'must_job2', label: '⚡ ตั้งใจหางานที่สองแน่นอน (ต้องการเมืองที่มีร้านอาหาร ร้านของฝาก คาเฟ่หนาแน่น เดินของานเสริมง่าย)' },
    { id: 'one_job_ot', label: '🔄 ขอเน้นงานหลักงานเดียวที่มี OT มั่นคง 50-60 ชม./สัปดาห์ ไม่ต้องเหนื่อยเดินทางและยื่น SEVIS หลายรอบ' },
    { id: 'work_life_balance', label: '🌴 เน้นงานหลัก 35-40 ชม. สบายๆ มีวันหยุด 2 วันไปเที่ยว ถ่ายรูป ชิลๆ ไม่เน้นเหนื่อยเกินไป' }
  ]},
  { id: 'q_climate', title: '8. 🌡️ สภาพอากาศที่คุณชอบและพร้อมรับมือมากที่สุด?', options: [
    { id: 'cool', label: '❄️ อากาศเย็นสบายตลอดซีซัน (10 - 25°C) สดชื่น ไม่เหนียวตัว เหมาะกับคนขี้ร้อน (เช่น Alaska, Rocky Mountains, Maine)' },
    { id: 'warm_sun', label: '☀️ อากาศอบอุ่น แดดสดใส ลมทะเล หน้าร้อนสไตล์ซัมเมอร์แท้ๆ (เช่น Florida, South Carolina, California, Texas)' },
    { id: 'four_seasons', label: '🍃 อากาศ 4 ฤดู ต้นซีซันเย็นสบาย กลางซีซันอบอุ่นกำลังดี (Midwest / New England / Mid-Atlantic)' }
  ]},
  { id: 'q_offday_vibe', title: '9. 🌲 กิจกรรมช่วงวันหยุดที่คุณอยากทำมากที่สุด?', options: [
    { id: 'national_park', label: '🏞️ เที่ยวอุทยานแห่งชาติ เดินป่า (Hiking), ล่องแพ, ดูสัตว์ป่า, ชมธารน้ำแข็ง' },
    { id: 'beach_waterpark', label: '🏖️ ว่ายน้ำทะเล, สวนน้ำระดับโลก, ปาร์ตี้ริมหาด, พายเรือคายัค' },
    { id: 'shopping_city', label: '🛍️ ช้อปปิ้งห้างเอาต์เล็ต, แบรนด์เนม, เที่ยวพิพิธภัณฑ์, นั่งคาเฟ่ชิคๆ' },
    { id: 'themepark_rides', label: '🎢 เล่นเครื่องเล่นรถไฟเหาะสวนสนุกระดับโลก, ดูโชว์ แสงสีเสียง' }
  ]},
  { id: 'q_safety_pace', title: '10. 🛡️ ระดับความปลอดภัยและจังหวะชีวิตของเมืองที่คุณชอบ?', options: [
    { id: 'ultra_safe_quiet', label: '🔒 เมืองเล็ก ชุมชนเงียบสงบ ปลอดภัยสูงสุด 100% ผู้คนเป็นมิตร ล็อคจักรยานทิ้งไว้สบายใจ' },
    { id: 'vibrant_busy', label: '🎆 เมืองท่องเที่ยวใหญ่ มีสีสันตลอดเวลา ไม่เงียบเหงา' },
    { id: 'medium_resort', label: '🏘️ เมืองรีสอร์ตตากอากาศขนาดกลาง ปลอดภัยสำหรับนักท่องเที่ยวและมีสิ่งอำนวยความสะดวกครบ' }
  ]}
];

function initQuiz() {
  const container = document.getElementById('quiz-questions-container');
  if (!container) return;

  container.innerHTML = QUIZ_QUESTIONS.map(q => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-colors">
      <h4 class="font-heading font-bold text-base text-white mb-3">${q.title}</h4>
      <div class="space-y-2">
        ${q.options.map(opt => `
          <label class="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 cursor-pointer transition-all">
            <input type="radio" name="${q.id}" value="${opt.id}" class="w-4 h-4 mt-0.5 text-blue-600 focus:ring-blue-500 bg-slate-800 border-slate-700 shrink-0" onchange="handleQuizSelection('${q.id}', '${opt.id}')" />
            <span class="text-xs text-slate-200 font-medium leading-relaxed">${opt.label}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function handleQuizSelection(qId, optId) {
  appState.quizAnswers[qId] = optId;
  const totalAnswered = Object.keys(appState.quizAnswers).length;
  const submitBtn = document.getElementById('btn-submit-quiz');
  const progressSpan = document.getElementById('quiz-progress-text');
  if (progressSpan) progressSpan.textContent = `ตอบแล้ว ${totalAnswered} จาก ${QUIZ_QUESTIONS.length} ข้อ`;

  if (submitBtn) {
    if (totalAnswered === QUIZ_QUESTIONS.length) {
      submitBtn.removeAttribute('disabled');
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      submitBtn.innerHTML = `<span>🔍 วิเคราะห์และแสดง 3 รัฐที่เหมาะสมที่สุด (ครบ 10 ข้อแล้ว)</span>`;
    } else {
      submitBtn.innerHTML = `<span>ตอบคำถามให้ครบ ${QUIZ_QUESTIONS.length} ข้อ (เหลืออีก ${QUIZ_QUESTIONS.length - totalAnswered} ข้อ)</span>`;
    }
  }
}

function calculateQuizResults() {
  const scores = STATES_DATA.map(state => {
    let matchScore = state.overall_score * 0.8;
    const matchReasons = [];
    const ans = appState.quizAnswers;

    if (ans.q_season === 'spring') {
      if (state.season_info?.spring?.grade === 'A+') { matchScore += 30; matchReasons.push('🌱 ความพร้อมช่วง Spring ระดับ A+'); }
      else if (state.season_info?.spring?.grade === 'A') { matchScore += 20; matchReasons.push('🌱 ช่วง Spring เปิดบริการปกติ'); }
    } else if (ans.q_season === 'summer') {
      if (state.season_info?.summer?.grade === 'A+') { matchScore += 25; matchReasons.push('☀️ ซัมเมอร์พีกสุดขีด 100%'); }
    }

    if (ans.q_goal === 'money') {
      matchScore += state.grades.earning_job2_tax.score * 0.6;
      if (['wisconsin', 'maryland', 'south_carolina', 'tennessee', 'ohio', 'wyoming', 'alaska', 'maine'].includes(state.id)) {
        matchScore += 20; matchReasons.push('💰 โอกาสทำเงินสูง งาน 2 และ OT หนาแน่น');
      }
    } else if (ans.q_goal === 'nature') {
      matchScore += state.grades.scenery_friendliness.score * 0.6;
      if (['wyoming', 'montana', 'colorado', 'utah', 'alaska', 'maine'].includes(state.id)) {
        matchScore += 25; matchReasons.push('🏔️ ธรรมชาติและอุทยานระดับโลก');
      }
    }

    if (ans.q_income_tax === 'no_income' && state.has_no_income_tax) {
      matchScore += 30; matchReasons.push('💸 0% State Income Tax ปลอดภาษีเงินได้รัฐ');
    }

    return { state, matchScore, matchReasons: matchReasons.slice(0, 4) };
  });

  scores.sort((a, b) => b.matchScore - a.matchScore);
  renderQuizResults(scores.slice(0, 3));
}

function renderQuizResults(top3) {
  const container = document.getElementById('quiz-results-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-blue-500/40 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-900 shadow-2xl">
      <div class="text-center mb-8">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-2">🎯 ผลการวิเคราะห์และจับคู่เชิงลึก 10 มิติ</span>
        <h3 class="font-heading font-black text-2xl sm:text-3xl text-white">3 รัฐที่สอดคล้องกับคุณที่สุด</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${top3.map((item, idx) => {
          const s = item.state;
          const matchPercent = Math.min(99, Math.round(92 + (3 - idx) * 2.5));
          return `
            <div class="glass-card rounded-2xl p-6 border relative flex flex-col justify-between ${idx === 0 ? 'border-amber-500/70 bg-gradient-to-b from-amber-950/20 to-slate-900' : 'border-slate-800'}">
              ${idx === 0 ? '<span class="absolute -top-3 right-4 px-3 py-1 rounded-full text-[11px] font-black bg-amber-500 text-slate-950">อันดับ 1 ตรงใจที่สุด 🏆</span>' : ''}
              <div>
                <div class="flex items-center justify-between mb-3">
                  <div class="w-14 h-14 rounded-2xl bg-slate-800 text-blue-400 font-black text-2xl flex items-center justify-center border border-slate-700">${s.code}</div>
                  <div class="text-right">
                    <span class="text-sm text-emerald-400 font-black block">${matchPercent}% Match</span>
                    <span class="grade-badge px-3 py-0.5 text-xs font-bold ${getGradeBadgeClass(s.overall_grade)}">${s.overall_grade}</span>
                  </div>
                </div>
                <h4 class="font-heading font-extrabold text-xl text-white mb-0.5">${s.name}</h4>
                <p class="text-xs text-slate-400 italic mb-3">${s.nickname}</p>
                <div class="space-y-1.5 mb-4">
                  ${item.matchReasons.map(r => `<div class="text-xs text-slate-300 flex items-start gap-1.5 bg-slate-900/50 p-2 rounded-lg"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i><span>${r}</span></div>`).join('')}
                </div>
              </div>
              <button onclick="openStateDetailModal('${s.id}')" class="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs">ดูข้อมูลเจาะลึก</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  initLucideIcons();
  container.scrollIntoView({ behavior: 'smooth' });
}

// =========================================================================
// ADVANCED FINANCIAL SIMULATOR & STATE BENCHMARKS
// =========================================================================

function initCalculator() {
  const stateSelect = document.getElementById('calc-state-select');
  if (stateSelect) {
    stateSelect.innerHTML = STATES_DATA.map(s => {
      return `<option value="${s.id}" ${s.id === appState.calc.stateId ? 'selected' : ''}>${s.name} (${s.code}) &bull; ${s.has_no_income_tax ? '0% State Tax' : s.state_income_tax}</option>`;
    }).join('');

    stateSelect.addEventListener('change', (e) => {
      const stateId = e.target.value;
      appState.calc.stateId = stateId;
      onStateChangedInCalculator(stateId);
    });
  }

  // Bind all input event listeners
  const inputBindings = [
    { id: 'calc-wage', key: 'hourlyWage', type: 'float' },
    { id: 'calc-job1-hours', key: 'job1Hours', type: 'float' },
    { id: 'calc-has-job2', key: 'hasJob2', type: 'bool' },
    { id: 'calc-job2-wage', key: 'job2Wage', type: 'float' },
    { id: 'calc-job2-hours', key: 'job2Hours', type: 'float' },
    { id: 'calc-tips-weekly', key: 'tipsWeekly', type: 'float' },
    { id: 'calc-rate', key: 'exchangeRate', type: 'float' },
    { id: 'calc-weeks', key: 'weeksCount', type: 'int' },
    { id: 'calc-fed-tax-rate', key: 'fedTaxRate', type: 'float' },
    { id: 'calc-state-tax-rate', key: 'stateTaxRate', type: 'float' },
    { id: 'calc-local-tax-rate', key: 'localTaxRate', type: 'float' },
    { id: 'calc-safety-factor', key: 'safetyFactor', type: 'float' },
    { id: 'calc-tax-refund-rate', key: 'taxRefundRate', type: 'float' },
    { id: 'calc-housing', key: 'housingCost', type: 'float' },
    { id: 'calc-living', key: 'livingCost', type: 'float' },
    { id: 'calc-commute-cost', key: 'commuteCost', type: 'float' },
    { id: 'calc-misc-weekly', key: 'miscCost', type: 'float' },
    { id: 'calc-housing-deposit', key: 'housingDeposit', type: 'float' },
    { id: 'calc-travel-budget', key: 'travelBudget', type: 'float' },
    { id: 'calc-shopping-budget', key: 'shoppingBudget', type: 'float' },
    { id: 'calc-pre-program-fee', key: 'preProgramFee', type: 'float' },
    { id: 'calc-pre-visa-sevis', key: 'preVisaSevis', type: 'float' },
    { id: 'calc-pre-flight', key: 'preFlight', type: 'float' },
    { id: 'calc-pre-pocket-usd', key: 'prePocketUSD', type: 'float' }
  ];

  inputBindings.forEach(b => {
    const el = document.getElementById(b.id);
    if (!el) return;

    if (b.type === 'bool') {
      el.addEventListener('change', (e) => {
        appState.calc[b.key] = e.target.checked;
        const wrapper = document.getElementById('job2-fields-wrapper');
        if (wrapper) wrapper.classList.toggle('hidden', !e.target.checked);
        updateCalculatorResults();
      });
    } else {
      el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        appState.calc[b.key] = val;
        updateCalculatorResults();
      });
    }
  });

  onStateChangedInCalculator(appState.calc.stateId);
}

function onStateChangedInCalculator(stateId) {
  const state = STATES_DATA.find(s => s.id === stateId) || STATES_DATA[0];
  
  // Auto-fill state defaults
  document.getElementById('calc-wage').value = state.min_wage_num;
  document.getElementById('calc-housing').value = state.housing_cost_num;

  const exactStateTaxPct = (state.exact_state_tax_pct !== undefined) ? state.exact_state_tax_pct : (state.tax_rate_num * 100);
  const exactLocalTaxPct = (state.exact_local_tax_pct !== undefined) ? state.exact_local_tax_pct : 0.0;

  document.getElementById('calc-state-tax-rate').value = exactStateTaxPct.toFixed(2);
  document.getElementById('calc-local-tax-rate').value = exactLocalTaxPct.toFixed(2);
  
  appState.calc.hourlyWage = state.min_wage_num;
  appState.calc.housingCost = state.housing_cost_num;
  appState.calc.stateTaxRate = exactStateTaxPct;
  appState.calc.localTaxRate = exactLocalTaxPct;

  const noteSpan = document.getElementById('calc-state-tax-note');
  if (noteSpan) {
    if (state.has_no_income_tax) {
      noteSpan.textContent = '🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัด 100%)';
      noteSpan.className = 'text-[10px] text-emerald-400 font-bold block leading-tight';
    } else {
      noteSpan.textContent = state.exact_tax_note || `🏛️ อัตราจริง: ${state.state_income_tax}`;
      noteSpan.className = 'text-[10px] text-amber-300 font-semibold block leading-tight';
    }
  }

  const localNoteSpan = document.getElementById('calc-local-tax-note');
  if (localNoteSpan) {
    if (exactLocalTaxPct > 0) {
      localNoteSpan.textContent = `🏛️ มีภาษีท้องถิ่นประจำรัฐ/เมือง ~${exactLocalTaxPct.toFixed(2)}%`;
      localNoteSpan.className = 'text-[10px] text-amber-300 font-semibold block leading-tight';
    } else {
      localNoteSpan.textContent = 'ไม่มีภาษีท้องถิ่นในรัฐนี้ (0%)';
      localNoteSpan.className = 'text-[10px] text-slate-500 block leading-tight';
    }
  }

  renderStateReferenceBenchmarkCard(state);
  updateCalculatorResults();
}

function renderStateReferenceBenchmarkCard(state) {
  const card = document.getElementById('calc-state-reference-card');
  if (!card) return;

  const taxBadges = [];
  if (state.has_no_income_tax) taxBadges.push(`<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">💸 0% State Income Tax</span>`);
  if (state.has_no_sales_tax) taxBadges.push(`<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🛍️ 0% Sales Tax</span>`);

  card.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-3 mb-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-slate-800 text-blue-400 font-black text-xl flex items-center justify-center border border-slate-700">
          ${state.code}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h4 class="font-heading font-extrabold text-lg text-white">${state.name}</h4>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${getTierBadgeClass(state.tier)}">${state.tier}</span>
            <span class="grade-badge px-2 py-0.5 text-xs font-bold ${getGradeBadgeClass(state.overall_grade)}">${state.overall_grade}</span>
          </div>
          <p class="text-xs text-slate-400">${state.nickname} &bull; ภูมิภาค: ${state.region}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5">
        ${taxBadges.join('')}
        <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">🗓️ แนะนำ: ${state.season_info?.best_season || 'Summer'}</span>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
        <span class="text-slate-400 text-[11px] block">🏛️ ค่าแรงตามกฎหมาย (DOL 2026):</span>
        <span class="font-bold text-white">${state.statutory_min_wage}</span>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
        <span class="text-slate-400 text-[11px] block">💵 ค่าแรงตลาด J-1 (ฐาน & รวมทิปโดยประมาณ):</span>
        <span class="font-bold text-emerald-400">${state.market_wage_estimate}</span>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
        <span class="text-slate-400 text-[11px] block">🏠 ค่าเช่าที่พักอ้างอิง:</span>
        <span class="font-bold text-white">${state.avg_housing_cost}</span>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
        <span class="text-slate-400 text-[11px] block">🚴 การเดินทางหลักในรัฐ:</span>
        <span class="font-bold text-slate-200">${state.commute_type}</span>
      </div>
    </div>
  `;
}

function applyCalcPreset(preset) {
  if (preset === 'hardcore') {
    appState.calc.job1Hours = 55;
    appState.calc.hasJob2 = true;
    appState.calc.job2Wage = 15.0;
    appState.calc.job2Hours = 15;
    appState.calc.weeksCount = 14;
    appState.calc.livingCost = 65;
    appState.calc.travelBudget = 600;
    appState.calc.shoppingBudget = 300;
  } else if (preset === 'balanced') {
    appState.calc.job1Hours = 46;
    appState.calc.hasJob2 = true;
    appState.calc.job2Wage = 14.5;
    appState.calc.job2Hours = 12;
    appState.calc.weeksCount = 12;
    appState.calc.livingCost = 75;
    appState.calc.travelBudget = 1000;
    appState.calc.shoppingBudget = 500;
  } else if (preset === 'chill') {
    appState.calc.job1Hours = 35;
    appState.calc.hasJob2 = false;
    appState.calc.weeksCount = 10;
    appState.calc.livingCost = 90;
    appState.calc.travelBudget = 1600;
    appState.calc.shoppingBudget = 800;
  }

  // Update UI values
  document.getElementById('calc-job1-hours').value = appState.calc.job1Hours;
  document.getElementById('calc-has-job2').checked = appState.calc.hasJob2;
  document.getElementById('job2-fields-wrapper').classList.toggle('hidden', !appState.calc.hasJob2);
  document.getElementById('calc-job2-wage').value = appState.calc.job2Wage;
  document.getElementById('calc-job2-hours').value = appState.calc.job2Hours;
  document.getElementById('calc-weeks').value = appState.calc.weeksCount;
  document.getElementById('calc-living').value = appState.calc.livingCost;
  document.getElementById('calc-travel-budget').value = appState.calc.travelBudget;
  document.getElementById('calc-shopping-budget').value = appState.calc.shoppingBudget;

  updateCalculatorResults();
}

function updateCalculatorResults() {
  const c = appState.calc;
  const state = STATES_DATA.find(s => s.id === c.stateId) || STATES_DATA[0];

  // 1. Weekly Earnings (Auto OT if hours > 40)
  const totalJob1Hours = c.job1Hours || 0;
  const job1RegHours = Math.min(40, totalJob1Hours);
  const job1OTHours = Math.max(0, totalJob1Hours - 40);

  const weeklyJob1Regular = job1RegHours * c.hourlyWage;
  const weeklyJob1OT = job1OTHours * (c.hourlyWage * 1.5);
  const weeklyJob2 = c.hasJob2 ? (c.job2Hours * c.job2Wage) : 0;
  const weeklyTips = c.tipsWeekly || 0;

  const weeklyGross = weeklyJob1Regular + weeklyJob1OT + weeklyJob2 + weeklyTips;
  const totalGross = weeklyGross * c.weeksCount;

  // 2. Taxes & Deductions
  const fedTax = totalGross * (c.fedTaxRate / 100);
  const stateTax = totalGross * (c.stateTaxRate / 100);
  const localTax = totalGross * (c.localTaxRate / 100);
  const totalTax = fedTax + stateTax + localTax;

  const ficaSavings = totalGross * 0.0765;
  const estTaxRefundUSD = totalTax * (c.taxRefundRate / 100);

  // 3. Living Expenses with Safety Buffer
  const baseWeeklyLiving = c.housingCost + c.livingCost + c.commuteCost + c.miscCost;
  const weeklyLivingWithBuffer = baseWeeklyLiving * c.safetyFactor;
  const totalProjectLiving = weeklyLivingWithBuffer * c.weeksCount;

  const totalPostSpend = c.travelBudget + c.shoppingBudget;

  // 4. Pre-Departure Capital
  const totalPreDepartureTHB = c.preProgramFee + c.preVisaSevis + c.preFlight + (c.prePocketUSD * c.exchangeRate);
  const totalPreDepartureUSD = totalPreDepartureTHB / c.exchangeRate;

  // 5. On-Site Net Cash Flow
  const onSiteNetUSD = Math.max(0, totalGross - totalTax - totalProjectLiving - totalPostSpend + c.housingDeposit);
  const onSiteNetTHB = onSiteNetUSD * c.exchangeRate;

  // 6. True Net Profit (including Tax Refund minus Pre-departure Investment)
  const trueProfitTHB = ((onSiteNetUSD + estTaxRefundUSD) * c.exchangeRate) - totalPreDepartureTHB;
  const roiPercentage = totalPreDepartureTHB > 0 ? (trueProfitTHB / totalPreDepartureTHB) * 100 : 0;

  // 7. Break-Even Timeline
  const weeklyNetCashFlowUSD = weeklyGross - (totalTax / c.weeksCount) - weeklyLivingWithBuffer;
  const weeklyNetCashFlowTHB = weeklyNetCashFlowUSD * c.exchangeRate;
  let breakEvenWeek = 0;
  if (weeklyNetCashFlowTHB > 0) {
    breakEvenWeek = Math.ceil(totalPreDepartureTHB / weeklyNetCashFlowTHB);
  }

  // Update DOM Outputs
  const elOnsiteUSD = document.getElementById('res-onsite-net-usd');
  const elOnsiteTHB = document.getElementById('res-onsite-net-thb');
  const elTrueROI = document.getElementById('res-true-roi-thb');
  const elRefundSum = document.getElementById('res-tax-refund-summary');
  const elRoiPct = document.getElementById('res-roi-percentage');
  const elBreakEven = document.getElementById('res-breakeven-text');
  const elWeeksBadge = document.getElementById('res-weeks-count-badge');
  const elTotalPreTHB = document.getElementById('res-total-pre-departure-thb');

  if (elOnsiteUSD) elOnsiteUSD.textContent = `$${onSiteNetUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  if (elOnsiteTHB) elOnsiteTHB.textContent = `≈ ${onSiteNetTHB.toLocaleString('th-TH', { maximumFractionDigits: 0 })} บาท`;
  
  if (elTrueROI) {
    if (trueProfitTHB >= 0) {
      elTrueROI.textContent = `+${trueProfitTHB.toLocaleString('th-TH', { maximumFractionDigits: 0 })} บาท`;
      elTrueROI.className = 'font-black text-emerald-400 text-sm';
    } else {
      elTrueROI.textContent = `-${Math.abs(trueProfitTHB).toLocaleString('th-TH', { maximumFractionDigits: 0 })} บาท`;
      elTrueROI.className = 'font-black text-rose-400 text-sm';
    }
  }

  if (elRefundSum) elRefundSum.textContent = `+$${estTaxRefundUSD.toFixed(0)}`;
  if (elRoiPct) {
    elRoiPct.textContent = `${roiPercentage >= 0 ? '+' : ''}${roiPercentage.toFixed(1)}% ROI`;
    elRoiPct.className = roiPercentage >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold';
  }

  if (elBreakEven) {
    if (breakEvenWeek > 0 && breakEvenWeek <= c.weeksCount) {
      elBreakEven.textContent = `🎉 คืนทุนค่าโครงการและตั๋วเครื่องบินในสัปดาห์ที่ ${breakEvenWeek}! (สัปดาห์ที่เหลือคือกำไรล้วนๆ)`;
      elBreakEven.className = 'text-amber-300 font-bold';
    } else if (breakEvenWeek > c.weeksCount) {
      elBreakEven.textContent = `⚠️ ต้องใช้เวลา ${breakEvenWeek} สัปดาห์ถึงจะคืนทุนเต็มจำนวน (ลองเพิ่มชั่วโมง OT/งานสอง)`;
      elBreakEven.className = 'text-rose-300 font-bold';
    } else {
      elBreakEven.textContent = `ชั่วโมงงานและรายได้ยังไม่ครอบคลุมค่าใช้จ่ายรายสัปดาห์`;
      elBreakEven.className = 'text-rose-400 font-bold';
    }
  }

  if (elWeeksBadge) elWeeksBadge.textContent = c.weeksCount;
  if (elTotalPreTHB) elTotalPreTHB.textContent = `≈ ${totalPreDepartureTHB.toLocaleString('th-TH', { maximumFractionDigits: 0 })} บาท`;

  // Tax live calculation badges
  const badgeFed = document.getElementById('calc-fed-tax-calc-badge');
  const badgeState = document.getElementById('calc-state-tax-calc-badge');
  const badgeLocal = document.getElementById('calc-local-tax-calc-badge');

  if (badgeFed) badgeFed.textContent = `คำนวณหัก: -$${fedTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  if (badgeState) {
    if (stateTax > 0) {
      badgeState.textContent = `คำนวณหัก: -$${stateTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
      badgeState.className = 'text-[11px] text-rose-400 font-bold block';
    } else {
      badgeState.textContent = `คำนวณหัก: $0.00 (ปลอดภาษี)`;
      badgeState.className = 'text-[11px] text-emerald-400 font-bold block';
    }
  }
  if (badgeLocal) {
    if (localTax > 0) {
      badgeLocal.textContent = `คำนวณหัก: -$${localTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
      badgeLocal.className = 'text-[11px] text-rose-400 font-bold block';
    } else {
      badgeLocal.textContent = `คำนวณหัก: $0.00`;
      badgeLocal.className = 'text-[11px] text-slate-400 font-bold block';
    }
  }

  // Line-items breakdown
  const elGross = document.getElementById('res-total-gross');
  const elWeeklyGross = document.getElementById('res-weekly-gross');
  const elTotalTax = document.getElementById('res-total-tax-deducted');
  const elFedTax = document.getElementById('res-fed-tax');
  const elStateTax = document.getElementById('res-state-tax');
  const elFica = document.getElementById('res-fica-savings');
  const elExp = document.getElementById('res-total-expenses');
  const elHous = document.getElementById('res-breakdown-housing');
  const elLiv = document.getElementById('res-breakdown-living');
  const elTravelShop = document.getElementById('res-breakdown-travel-shop');

  if (elGross) elGross.textContent = `$${totalGross.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  if (elWeeklyGross) elWeeklyGross.textContent = `$${weeklyGross.toFixed(0)}/wk`;
  if (elTotalTax) elTotalTax.textContent = `-$${totalTax.toFixed(0)}`;
  if (elFedTax) elFedTax.textContent = `-$${fedTax.toFixed(0)}`;
  if (elStateTax) elStateTax.textContent = (state.has_no_income_tax || c.stateTaxRate === 0) ? '$0 (0%)' : `-$${stateTax.toFixed(0)} (${c.stateTaxRate}%)`;
  if (elFica) elFica.textContent = `+$${ficaSavings.toFixed(0)} (ยกเว้น)`;
  if (elExp) elExp.textContent = `-$${totalProjectLiving.toFixed(0)}`;
  if (elHous) elHous.textContent = `-$${(c.housingCost * c.weeksCount).toFixed(0)}`;
  if (elLiv) elLiv.textContent = `-$${((c.livingCost + c.commuteCost + c.miscCost) * c.weeksCount * c.safetyFactor).toFixed(0)}`;
  if (elTravelShop) elTravelShop.textContent = `-$${totalPostSpend.toFixed(0)}`;

  renderCalculatorDonutChart(onSiteNetUSD, totalTax, c.housingCost * c.weeksCount, (c.livingCost + c.commuteCost + c.miscCost) * c.weeksCount * c.safetyFactor, totalPostSpend);
}

function renderCalculatorDonutChart(net, taxes, housing, living, travel) {
  const canvas = document.getElementById('calc-doughnut-canvas');
  if (!canvas) return;
  if (calcChartInstance) calcChartInstance.destroy();

  calcChartInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['เงินเก็บสุทธิ (Net Savings)', 'ภาษีหัก (Taxes)', 'ค่าเช่าที่พัก (Housing)', 'ค่ากินอยู่/ของใช้ (Living)', 'งบเที่ยว/ช้อปปิ้ง (Travel & Shopping)'],
      datasets: [{
        data: [net, taxes, housing, living, travel],
        backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8', font: { family: 'Prompt', size: 10 } } }
      },
      cutout: '68%'
    }
  });
}

// Knowledge Hub Filter & Real-time Search
function filterKnowledgeCategory(category) {
  const buttons = document.querySelectorAll('.kb-cat-btn');
  buttons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('bg-blue-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-blue-600', 'text-white');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });

  const cards = document.querySelectorAll('.kb-item');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.kbCat === category) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });
}

function searchKnowledgeHub(query) {
  const q = query.trim().toLowerCase();
  const cards = document.querySelectorAll('.kb-item');
  const details = document.querySelectorAll('#faq-accordion-list details');

  if (!q) {
    cards.forEach(c => c.classList.remove('hidden'));
    details.forEach(d => {
      d.classList.remove('hidden');
      d.removeAttribute('open');
    });
    return;
  }

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(q)) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });

  details.forEach(detail => {
    const text = detail.textContent.toLowerCase();
    if (text.includes(q)) {
      detail.classList.remove('hidden');
      detail.setAttribute('open', 'true');
    } else {
      detail.classList.add('hidden');
    }
  });
}

// =========================================================================
// AGENCIES MODULE (8+ THAI WORK & TRAVEL AGENCIES AUDIT)
// =========================================================================

function initAgencies() {
  renderAgencies();
}

function filterAgencyTier(tier) {
  appState.filterAgencyTier = tier;
  const buttons = document.querySelectorAll('.agency-tier-btn');
  buttons.forEach(btn => {
    if (btn.dataset.agencyTier === tier) {
      btn.classList.add('bg-purple-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-purple-600', 'text-white');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
  renderAgencies();
}

function filterAgencyEnglish(level) {
  appState.filterAgencyEnglish = level;
  const buttons = document.querySelectorAll('.agency-eng-btn');
  buttons.forEach(btn => {
    if (btn.dataset.agencyEng === level) {
      btn.classList.add('bg-purple-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-purple-600', 'text-white');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
  renderAgencies();
}

function filterAgencyCapacity(cap) {
  appState.filterAgencyCapacity = cap;
  const buttons = document.querySelectorAll('.agency-cap-btn');
  buttons.forEach(btn => {
    if (btn.dataset.agencyCap === cap) {
      btn.classList.add('bg-purple-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-purple-600', 'text-white');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
  renderAgencies();
}

function handleAgencySearch(query) {
  appState.agencySearchQuery = query.trim().toLowerCase();
  renderAgencies();
}

function getFilteredAgencies() {
  let list = (typeof AGENCIES_DATA !== 'undefined') ? [...AGENCIES_DATA] : [];

  if (appState.filterAgencyTier && appState.filterAgencyTier !== 'all') {
    list = list.filter(a => a.tier === appState.filterAgencyTier);
  }

  if (appState.filterAgencyEnglish && appState.filterAgencyEnglish !== 'all') {
    list = list.filter(a => a.english_tier === appState.filterAgencyEnglish);
  }

  if (appState.filterAgencyCapacity && appState.filterAgencyCapacity !== 'all') {
    list = list.filter(a => a.capacity_tier === appState.filterAgencyCapacity);
  }

  if (appState.agencySearchQuery) {
    const q = appState.agencySearchQuery;
    list = list.filter(a => {
      const matchName = a.name.toLowerCase().includes(q);
      const matchShort = a.short_name.toLowerCase().includes(q);
      const matchTagline = a.tagline.toLowerCase().includes(q);
      const matchSponsor = a.sponsor_tags.some(sp => sp.toLowerCase().includes(q));
      const matchJob = a.popular_jobs.some(j => j.toLowerCase().includes(q));
      const matchState = a.popular_states.some(st => st.toLowerCase().includes(q));
      const matchEng = (a.english_level && a.english_level.toLowerCase().includes(q)) || (a.english_desc && a.english_desc.toLowerCase().includes(q));
      const matchCap = (a.job_capacity && a.job_capacity.toLowerCase().includes(q)) || (a.capacity_desc && a.capacity_desc.toLowerCase().includes(q));
      return matchName || matchShort || matchTagline || matchSponsor || matchJob || matchState || matchEng || matchCap;
    });
  }

  list.sort((a, b) => b.overall_score - a.overall_score);
  return list;
}

function renderAgencies() {
  const container = document.getElementById('agencies-cards-container');
  if (!container) return;

  const agencies = getFilteredAgencies();
  if (agencies.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
        <p class="text-base font-semibold">ไม่พบข้อมูลเอเจนซี่ที่ตรงกับเงื่อนไขตัวกรอง</p>
        <p class="text-xs text-slate-500 mt-1">ลองรีเซ็ตตัวกรองระดับภาษา หรือปริมาณงานเพื่อดูผลลัพธ์เพิ่มเติม</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = agencies.map(a => {
    return `
      <div class="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-purple-500/40 transition-all group">
        <div>
          <!-- Header -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center font-heading font-black text-xl text-purple-300 group-hover:scale-105 transition-transform shadow-lg">
                ${a.short_name}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-heading font-extrabold text-lg text-white group-hover:text-purple-300 transition-colors">${a.name}</h3>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${getTierBadgeClass(a.tier)}">${a.tier}</span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5 line-clamp-1">${a.tagline}</p>
              </div>
            </div>
            <div class="text-right shrink-0">
              <span class="grade-badge px-3 py-1 text-sm font-black ${getGradeBadgeClass(a.overall_grade)} shadow-md">
                ${a.overall_grade}
              </span>
              <span class="block text-[10px] text-slate-400 mt-0.5">${a.overall_score}/100</span>
            </div>
          </div>

          <!-- Capacity & English Screening Badges -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-[11px]">
            <div class="bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800">
              <span class="text-slate-400 block text-[10px]">📊 ปริมาณงาน / โควตารับ:</span>
              <span class="font-bold text-purple-300">${a.job_capacity}</span>
            </div>
            <div class="bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800">
              <span class="text-slate-400 block text-[10px]">🗣️ เกณฑ์ภาษาอังกฤษ:</span>
              <span class="font-bold text-emerald-300">${a.english_level}</span>
            </div>
          </div>

          <!-- Fee & Sponsors Badges -->
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span class="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              💰 ค่าโครงการ: ${a.est_program_fee}
            </span>
            <div class="flex items-center gap-1">
              <span class="text-[11px] text-slate-400">Sponsors:</span>
              ${a.sponsor_tags.map(tag => `<span class="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/40">${tag}</span>`).join('')}
            </div>
          </div>

          <!-- 6 Dimensions Performance Grid -->
          <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 mb-4 space-y-1.5 text-[11px]">
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 mb-1 flex justify-between">
              <span>ผลประเมิน 6 มิติ</span>
              <span class="text-purple-300">วิเคราะห์เชิงลึก</span>
            </div>
            <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-slate-300">
              <div class="flex justify-between items-center">
                <span class="text-slate-400">1. ชื่อเสียง/มั่นคง:</span>
                <span class="font-bold text-slate-200">${a.grades.reputation.grade} (${a.grades.reputation.score})</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">2. คุณภาพงาน:</span>
                <span class="font-bold text-slate-200">${a.grades.job_quality.grade} (${a.grades.job_quality.score})</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">3. การดูแล/ตอบแชท:</span>
                <span class="font-bold text-slate-200">${a.grades.service_support.grade} (${a.grades.service_support.score})</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">4. ราคาโปร่งใส:</span>
                <span class="font-bold text-slate-200">${a.grades.fee_transparency.grade} (${a.grades.fee_transparency.score})</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">5. ติวสัมภาษณ์วีซ่า:</span>
                <span class="font-bold text-emerald-400">${a.grades.visa_coaching.grade} (${a.grades.visa_coaching.score})</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400">6. รีวิวรุ่นพี่:</span>
                <span class="font-bold text-amber-400">${a.grades.alumni_rating.grade} (${a.grades.alumni_rating.score})</span>
              </div>
            </div>
          </div>

          <!-- Recommended English Profile Box -->
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs mb-3 space-y-1">
            <span class="text-emerald-400 font-bold block flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> โปรไฟล์ภาษาที่แนะนำสำหรับเอเจนซี่นี้:
            </span>
            <p class="text-slate-300 leading-relaxed text-[11px]">${a.recommended_english_profile}</p>
          </div>

          <!-- Popular Jobs Snippet -->
          <div class="text-xs text-slate-300 mb-3">
            <span class="text-slate-400 font-semibold block mb-1">🎡 งานเด่นยอดนิยม:</span>
            <div class="flex flex-wrap gap-1">
              ${a.popular_jobs.slice(0, 3).map(j => `<span class="px-2 py-0.5 rounded text-[11px] bg-slate-900 text-slate-300 border border-slate-800">${j}</span>`).join('')}
              ${a.popular_jobs.length > 3 ? `<span class="text-[11px] text-slate-500 px-1 py-0.5">+อีก ${a.popular_jobs.length - 3} งาน</span>` : ''}
            </div>
          </div>

          <!-- Editorial Verdict Box -->
          <div class="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200 mb-4">
            <strong class="text-purple-300 block mb-0.5">💡 บทวิเคราะห์:</strong>
            ${a.editorial_verdict}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-3 border-t border-slate-800 flex items-center gap-2">
          <button 
            onclick="openAgencyDetailModal('${a.id}')"
            class="flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-purple-600/20"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            ดูรีวิวเจาะลึก 6 มิติ
          </button>
          
          <a 
            href="${a.contact.website}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            เว็บไซต์
          </a>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

let agencyChartInstance = null;

function openAgencyDetailModal(agencyId) {
  const agency = (typeof AGENCIES_DATA !== 'undefined') ? AGENCIES_DATA.find(a => a.id === agencyId) : null;
  if (!agency) return;

  const modal = document.getElementById('agency-detail-modal');
  const container = document.getElementById('agency-detail-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/80">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center font-black text-2xl text-purple-300">
          ${agency.short_name}
        </div>
        <div>
          <div class="flex items-center gap-3">
            <h2 class="font-heading font-extrabold text-2xl text-white">${agency.name}</h2>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${getTierBadgeClass(agency.tier)}">${agency.tier}</span>
          </div>
          <p class="text-sm text-slate-400 mt-0.5">${agency.tagline}</p>
        </div>
      </div>
      <div class="text-right">
        <span class="grade-badge px-4 py-1.5 text-lg ${getGradeBadgeClass(agency.overall_grade)} shadow-xl font-black">
          เกรดรวม ${agency.overall_grade}
        </span>
        <span class="block text-xs text-slate-400 mt-1">คะแนนรวม ${agency.overall_score}/100</span>
      </div>
    </div>

    <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs">
      <!-- Quick Info Strip -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div>
          <span class="text-slate-400 text-[11px] block">💰 ค่าโครงการโดยประมาณ:</span>
          <span class="font-bold text-sm text-emerald-400">${agency.est_program_fee}</span>
        </div>
        <div>
          <span class="text-slate-400 text-[11px] block">🏛️ สปอนเซอร์หลักในอเมริกา:</span>
          <span class="font-bold text-slate-200">${agency.us_sponsors.join(', ')}</span>
        </div>
        <div>
          <span class="text-slate-400 text-[11px] block">📍 ที่ตั้งสำนักงาน & ติดต่อ:</span>
          <span class="font-bold text-slate-200">${agency.contact.location} (โทร ${agency.contact.phone})</span>
        </div>
      </div>

      <!-- Capacity & English Screening Deep Dive -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-purple-950/20 border border-purple-800/40 p-4 rounded-2xl space-y-2">
          <h4 class="font-heading font-bold text-sm text-purple-300 flex items-center gap-1.5">
            <i data-lucide="users" class="w-4 h-4 text-purple-400"></i> ปริมาณงาน & โควตารับ: ${agency.job_capacity}
          </h4>
          <p class="text-slate-300 leading-relaxed text-xs">${agency.capacity_desc}</p>
        </div>

        <div class="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-2xl space-y-2">
          <h4 class="font-heading font-bold text-sm text-emerald-300 flex items-center gap-1.5">
            <i data-lucide="message-square" class="w-4 h-4 text-emerald-400"></i> เกณฑ์ภาษาอังกฤษ & การคัดกรอง: ${agency.english_level}
          </h4>
          <p class="text-slate-300 leading-relaxed text-xs">${agency.english_desc}</p>
          <div class="bg-slate-900/80 p-2.5 rounded-xl text-[11px] border border-slate-800 text-slate-300">
            <strong class="text-emerald-400">💡 โปรไฟล์ที่แนะนำ:</strong> ${agency.recommended_english_profile}
          </div>
        </div>
      </div>

      <!-- Radar and 6 Dimensions -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
        <div class="lg:col-span-5 flex flex-col items-center justify-center">
          <h4 class="font-heading font-bold text-sm text-purple-300 mb-2">เรดาร์คะแนน 6 ด้าน</h4>
          <div class="w-full max-w-[280px] h-[250px] relative">
            <canvas id="agency-radar-canvas"></canvas>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-2">
          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">1. ชื่อเสียง & ประสบการณ์ (Reputation):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.reputation.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.reputation.grade)} font-bold shrink-0">${agency.grades.reputation.grade} (${agency.grades.reputation.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">2. คุณภาพงาน & สปอนเซอร์ (Job Quality):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.job_quality.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.job_quality.grade)} font-bold shrink-0">${agency.grades.job_quality.grade} (${agency.grades.job_quality.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">3. การดูแล & ตอบแชท (Support & Responsiveness):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.service_support.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.service_support.grade)} font-bold shrink-0">${agency.grades.service_support.grade} (${agency.grades.service_support.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-white">4. ความโปร่งใส & นโยบายเงินคืน (Fee Transparency):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.fee_transparency.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.fee_transparency.grade)} font-bold shrink-0">${agency.grades.fee_transparency.grade} (${agency.grades.fee_transparency.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-emerald-300">5. ติวสัมภาษณ์วีซ่า (Visa Coaching & Pass Rate):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.visa_coaching.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.visa_coaching.grade)} font-bold shrink-0">${agency.grades.visa_coaching.grade} (${agency.grades.visa_coaching.score})</span>
          </div>

          <div class="bg-slate-800/50 p-2.5 rounded-xl flex items-center justify-between gap-3">
            <div>
              <span class="font-semibold text-amber-300">6. เสียงตอบรับ & ความพึงพอใจรุ่นพี่ (Alumni Rating):</span>
              <span class="text-slate-400 block text-[11px]">${agency.grades.alumni_rating.note}</span>
            </div>
            <span class="grade-badge px-2 py-0.5 ${getGradeBadgeClass(agency.grades.alumni_rating.grade)} font-bold shrink-0">${agency.grades.alumni_rating.grade} (${agency.grades.alumni_rating.score})</span>
          </div>
        </div>
      </div>

      <!-- Pros and Cons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-2xl">
          <h4 class="font-heading font-bold text-sm text-emerald-300 mb-2 flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> จุดเด่นสำคัญ</h4>
          <ul class="space-y-1.5 text-slate-300 list-disc list-inside">
            ${agency.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="bg-rose-950/20 border border-rose-800/40 p-4 rounded-2xl">
          <h4 class="font-heading font-bold text-sm text-rose-300 mb-2 flex items-center gap-1.5"><i data-lucide="alert-triangle" class="w-4 h-4 text-rose-400"></i> ข้อควรพิจารณา</h4>
          <ul class="space-y-1.5 text-slate-300 list-disc list-inside">
            ${agency.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Popular Jobs & States -->
      <div class="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
        <h4 class="font-heading font-bold text-sm text-white flex items-center gap-2">
          <i data-lucide="briefcase" class="w-4 h-4 text-purple-400"></i> ตำแหน่งงานและรัฐยอดนิยมของเอเจนซี่นี้
        </h4>
        <div class="flex flex-wrap gap-1.5">
          ${agency.popular_jobs.map(j => `<span class="px-2.5 py-1 rounded-xl bg-slate-800 text-purple-300 text-xs font-semibold border border-slate-700">${j}</span>`).join('')}
        </div>
      </div>

      <!-- Editorial Recommendation -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-700/30 flex items-center gap-3">
        <i data-lucide="sparkles" class="w-6 h-6 text-amber-400 shrink-0"></i>
        <div>
          <span class="text-xs text-purple-300 font-bold block mb-0.5">บทสรุปและคำแนะนำ (Editorial Verdict):</span>
          <span class="text-slate-200 leading-relaxed">${agency.editorial_verdict}</span>
        </div>
      </div>
    </div>

    <div class="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/80">
      <div class="flex items-center gap-2">
        <a href="${agency.contact.website}" target="_blank" rel="noopener noreferrer" class="py-2 px-4 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5">
          <i data-lucide="globe" class="w-3.5 h-3.5"></i> เข้าสู่เว็บไซต์หลัก
        </a>
        <span class="text-xs text-slate-400">LINE: <strong class="text-white">${agency.contact.line}</strong></span>
      </div>
      <button onclick="closeAgencyDetailModal()" class="py-2 px-5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs transition-colors">
        ปิดหน้าต่าง
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
  renderAgencyRadarChart(agency);
}

function closeAgencyDetailModal() {
  const modal = document.getElementById('agency-detail-modal');
  if (modal) modal.classList.add('hidden');
}

function openEmergencySOSModal() {
  const modal = document.getElementById('emergency-sos-modal');
  if (modal) {
    modal.classList.remove('hidden');
    initLucideIcons();
  }
}

function closeEmergencySOSModal() {
  const modal = document.getElementById('emergency-sos-modal');
  if (modal) modal.classList.add('hidden');
}

function initTimelineChecklist() {
  const checkboxes = document.querySelectorAll('.timeline-chk');
  if (!checkboxes.length) return;

  const saved = JSON.parse(localStorage.getItem('wat_timeline_checklist') || '{}');

  checkboxes.forEach((chk, index) => {
    if (saved[index]) {
      chk.checked = true;
      if (chk.nextElementSibling) {
        chk.nextElementSibling.classList.add('line-through', 'text-slate-500');
      }
    }

    chk.addEventListener('change', () => {
      const state = JSON.parse(localStorage.getItem('wat_timeline_checklist') || '{}');
      state[index] = chk.checked;
      localStorage.setItem('wat_timeline_checklist', JSON.stringify(state));

      if (chk.nextElementSibling) {
        if (chk.checked) {
          chk.nextElementSibling.classList.add('line-through', 'text-slate-500');
        } else {
          chk.nextElementSibling.classList.remove('line-through', 'text-slate-500');
        }
      }
    });
  });
}

function renderAgencyRadarChart(agency) {
  const canvas = document.getElementById('agency-radar-canvas');
  if (!canvas) return;
  if (agencyChartInstance) agencyChartInstance.destroy();

  const dataValues = [
    agency.grades.reputation.score,
    agency.grades.job_quality.score,
    agency.grades.service_support.score,
    agency.grades.fee_transparency.score,
    agency.grades.visa_coaching.score,
    agency.grades.alumni_rating.score
  ];

  agencyChartInstance = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['ชื่อเสียง/มั่นคง', 'คุณภาพงาน', 'การดูแล/ตอบแชท', 'ราคาโปร่งใส', 'ติววีซ่า', 'รีวิวรุ่นพี่'],
      datasets: [{
        label: agency.short_name,
        data: dataValues,
        backgroundColor: 'rgba(168, 85, 247, 0.25)',
        borderColor: '#a855f7',
        pointBackgroundColor: '#c084fc',
        pointBorderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 60,
          max: 100,
          ticks: { display: false, stepSize: 10 },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#cbd5e1', font: { size: 10, family: 'Prompt' } }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

