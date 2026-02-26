const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const formatNumber = (value) => value.toLocaleString("ko-KR");
const daysBetween = (date) => {
  if (!date) return Infinity;
  const diff = Date.now() - new Date(date).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const overviewSnapshots = {
  "7d": { total: 20120, remaining: 84200, overage: 0, seat: { used: 196, total: 250 }, burnout: "3월 25일 예상", billing: 3200000 },
  "30d": { total: 94500, remaining: 70500, overage: 12000, seat: { used: 200, total: 250 }, burnout: "4월 8일 예상", billing: 6500000 },
  "90d": { total: 278300, remaining: 51200, overage: 36500, seat: { used: 210, total: 260 }, burnout: "6월 2일 예상", billing: 17800000 },
};

const featureMix = [
  { name: "회의록 작성", value: 0.32 },
  { name: "문서 요약", value: 0.27 },
  { name: "멀티모델 채팅", value: 0.24 },
  { name: "AI 슬라이드 제작", value: 0.17 },
];

const userRows = [
  {
    id: "ys-1",
    name: "윤하린",
    email: "harin@yunsungfnc.com",
    role: "Owner",
    teams: ["PM1팀"],
    seat: "활성",
    lastActive: "2025-02-10T07:45:00Z",
    recent: "전사 회의록 계정 검토 완료 (5분 전)",
    usage7: 3600,
    usage30: 10100,
    status: "Active",
  },
  {
    id: "ys-2",
    name: "조이현",
    email: "yhcho@yunsungfnc.com",
    role: "Admin",
    teams: ["회계팀"],
    seat: "활성",
    lastActive: "2025-02-09T11:10:00Z",
    recent: "라인별 사용량 보고서 내보내기",
    usage7: 2400,
    usage30: 6800,
    status: "Active",
  },
  {
    id: "ys-3",
    name: "장태경",
    email: "tkjang@yunsungfnc.com",
    role: "Manager",
    teams: ["인사팀"],
    seat: "활성",
    lastActive: "2025-02-07T06:05:00Z",
    recent: "합성수지 데이터룸 계정 정책 수정",
    usage7: 1850,
    usage30: 5900,
    status: "Active",
  },
  {
    id: "ys-4",
    name: "문지은",
    email: "jieun@yunsungfnc.com",
    role: "Member",
    teams: ["영업팀"],
    seat: "미사용",
    lastActive: null,
    recent: "초대 대기 · 계정 승인 필요",
    usage7: 0,
    usage30: 0,
    status: "Invited",
  },
  {
    id: "ys-5",
    name: "서우성",
    email: "woosung@yunsungfnc.com",
    role: "Member",
    teams: ["영업팀"],
    seat: "일시중지",
    lastActive: "2024-12-20T08:00:00Z",
    recent: "보안 점검으로 계정 일시중지",
    usage7: 0,
    usage30: 0,
    status: "Suspended",
  },
];

const teamSummaries = [
  { id: "PM1팀", manager: "윤하린", seats: 65, seatLimit: 80, usage: 22400, delta: "+9%" },
  { id: "회계팀", manager: "조이현", seats: 48, seatLimit: 55, usage: 18200, delta: "+6%" },
  { id: "인사팀", manager: "장태경", seats: 42, seatLimit: 60, usage: 12600, delta: "+4%" },
  { id: "영업팀", manager: "문지은", seats: 45, seatLimit: 55, usage: 15300, delta: "+7%" },
];

const projects = [
  { id: "PM1 분기 리뷰", team: "PM1팀", usage: 12800, status: "운영 중" },
  { id: "재무 결산 자동화", team: "회계팀", usage: 9600, status: "운영 중" },
  { id: "인재 온보딩 패키지", team: "인사팀", usage: 7400, status: "보호 모드" },
  { id: "B2B 세일즈 플레이북", team: "영업팀", usage: 5900, status: "파일럿" },
];

const usageTrend = [
  { date: '01-27', total: 5100, stt: 2500, summary: 1700, chat: 900 },
  { date: '01-28', total: 5220, stt: 2480, summary: 1750, chat: 920 },
  { date: '01-29', total: 5480, stt: 2630, summary: 1820, chat: 940 },
  { date: '01-30', total: 5600, stt: 2700, summary: 1870, chat: 930 },
  { date: '01-31', total: 5790, stt: 2810, summary: 1890, chat: 960 },
  { date: '02-01', total: 6020, stt: 2950, summary: 2010, chat: 980 },
  { date: '02-02', total: 6180, stt: 3020, summary: 2090, chat: 1010 },
  { date: '02-03', total: 6400, stt: 3150, summary: 2170, chat: 1040 },
  { date: '02-04', total: 6650, stt: 3290, summary: 2260, chat: 1080 },
  { date: '02-05', total: 6820, stt: 3380, summary: 2340, chat: 1100 },
  { date: '02-06', total: 7010, stt: 3470, summary: 2410, chat: 1130 },
  { date: '02-07', total: 7240, stt: 3590, summary: 2500, chat: 1170 },
  { date: '02-08', total: 7390, stt: 3660, summary: 2570, chat: 1180 },
  { date: '02-09', total: 7580, stt: 3740, summary: 2650, chat: 1210 },
];

const topUsage = {
  users: [
    { label: "윤하린", value: 10100 },
    { label: "조이현", value: 6800 },
    { label: "장태경", value: 5900 },
  ],
  teams: [
    { label: "PM1팀", value: 22400 },
    { label: "회계팀", value: 18200 },
    { label: "영업팀", value: 15300 },
  ],
  projects: [
    { label: "PM1 분기 리뷰", value: 12800 },
    { label: "재무 결산 자동화", value: 9600 },
    { label: "인재 온보딩 패키지", value: 7400 },
  ],
};

const auditLogs = [
  { id: "a1", actor: "윤하린", action: "계정 배정", code: "seat.allocate", target: "조이현", time: "2025-02-09 09:15", detail: "회계팀 계정 1개 배정" },
  { id: "a2", actor: "조이현", action: "정책 수정", code: "policy.update", target: "모델 제한", time: "2025-02-08 18:40", detail: "Gemini 2 Pro 허용" },
  { id: "a3", actor: "장태경", action: "사용자 중지", code: "user.suspend", target: "서우성", time: "2025-02-07 11:05", detail: "보안 점검" },
  { id: "a4", actor: "윤하린", action: "계정 회수", code: "seat.reclaim", target: "문지은", time: "2025-02-05 15:02", detail: "45일 미사용" },
];

const state = {
  filters: { search: "", role: "", seat: "", activity: "", team: "" },
  sort: { key: "name", dir: "asc" },
  selected: new Set(),
  period: "30d",
};

const isStaticElement = (element) => !element || element.dataset.static === 'true';

const actionLabelMap = {
  role: "역할 변경",
  team: "팀 이동",
  seat: "계정 조정",
  suspend: "일시중지",
};

const policyLabelMap = {
  models: "모델 제한",
  sharing: "외부 공유",
  retention: "데이터 보관",
  quota: "한도 정책",
};

const roleLabelMap = {
  Owner: "소유자",
  Admin: "관리자",
  BillingAdmin: "결제 담당",
  Manager: "팀 관리자",
  Member: "구성원",
};

const tAction = (key) => actionLabelMap[key] ?? "작업";
const tPolicy = (key) => policyLabelMap[key] ?? "정책";
const tRole = (role) => roleLabelMap[role] ?? role;

const renderOverview = () => {
  const snapshot = overviewSnapshots[state.period];
  if (!snapshot) return;
  const monthlyEl = $('[data-id="metric-monthly-units"]');
  if (monthlyEl) monthlyEl.textContent = formatNumber(snapshot.total);
  const diffEl = $('[data-id="metric-monthly-diff"]');
  if (diffEl) diffEl.textContent = snapshot.overage ? `+${(snapshot.overage / snapshot.total * 100).toFixed(1)}%` : '+0%';
  const remainingEl = $('[data-id="metric-remaining"]');
  if (remainingEl) remainingEl.textContent = formatNumber(snapshot.remaining);
  const billingEl = $('[data-id="metric-billing"]');
  if (billingEl && snapshot.billing) billingEl.textContent = formatNumber(snapshot.billing);
  $('[data-id="metric-seat"]').textContent = `${Math.round((snapshot.seat.used / snapshot.seat.total) * 100)}%`;
  $('[data-id="seat-used"]').textContent = snapshot.seat.used;
  $('[data-id="seat-total"]').textContent = snapshot.seat.total;
  const seatBar = $('[data-id="metric-seat-bar"]');
  seatBar.style.width = `${(snapshot.seat.used / snapshot.seat.total) * 100}%`;
  seatBar.parentElement.setAttribute('aria-valuenow', Math.round((snapshot.seat.used / snapshot.seat.total) * 100));
  const burnoutEl = $('[data-id="metric-burnout"]');
  if (burnoutEl) burnoutEl.textContent = snapshot.remaining > 0 ? (snapshot.burnout ?? '예상 중') : '즉시';
  const list = $('[data-id="metric-top-features"]');
  list.innerHTML = '';
  featureMix.forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = `${feature.name} · ${(feature.value * 100).toFixed(0)}%`;
    list.appendChild(li);
  });
};

const renderUsers = () => {
  const tbody = $('[data-users-body]');
  if (isStaticElement(tbody)) return;
  const wrapper = $('[data-users-table]');
  const masterCheckbox = $('[data-master-checkbox]');
  const rows = userRows.filter((row) => {
    const search = state.filters.search || '';
    const matchesSearch = !search ||
      row.name.toLowerCase().includes(search) ||
      row.email.toLowerCase().includes(search);
    const matchesRole = !state.filters.role || row.role === state.filters.role;
    const matchesSeat = !state.filters.seat || row.seat === state.filters.seat;
    const matchesTeam = !state.filters.team || row.teams.includes(state.filters.team);
    let matchesActivity = true;
    if (state.filters.activity === '7') {
      matchesActivity = daysBetween(row.lastActive) <= 7;
    } else if (state.filters.activity === '30') {
      matchesActivity = daysBetween(row.lastActive) <= 30;
    } else if (state.filters.activity === '60') {
      matchesActivity = daysBetween(row.lastActive) >= 60;
    }
    return matchesSearch && matchesRole && matchesSeat && matchesTeam && matchesActivity;
  });

  const sorted = rows.sort((a, b) => {
    const dir = state.sort.dir === 'desc' ? -1 : 1;
    if (state.sort.key === 'usage7') {
      return (a.usage7 - b.usage7) * dir;
    }
    if (state.sort.key === 'activity') {
      return (new Date(a.lastActive || 0) - new Date(b.lastActive || 0)) * dir;
    }
    if (state.sort.key === 'role') {
      return a.role.localeCompare(b.role) * dir;
    }
    return a.name.localeCompare(b.name) * dir;
  });

  tbody.innerHTML = '';
  if (!sorted.length) {
    $('[data-empty-state]').hidden = false;
  } else {
    $('[data-empty-state]').hidden = true;
  }
  sorted.forEach((row) => {
    const tr = document.createElement('tr');
    const checked = state.selected.has(row.id);
    tr.innerHTML = `
      <td><input type="checkbox" data-row-checkbox value="${row.id}" ${checked ? 'checked' : ''}></td>
      <td>
        <div class="user-cell">
          <strong>${row.name}</strong>
          <p>${row.email}</p>
        </div>
      </td>
      <td><span class="role-pill">${tRole(row.role)}</span></td>
      <td>${row.teams.join(', ')}</td>
      <td>${row.seat}</td>
      <td>${row.recent}</td>
      <td><strong>${formatNumber(row.usage7)}</strong> / ${formatNumber(row.usage30)}</td>
      <td>
        <button class="btn small ghost" data-row-action="seat" data-user="${row.id}">계정 조정</button>
        <button class="btn small ghost" data-row-action="suspend" data-user="${row.id}">일시중지</button>
      </td>`;
    tbody.appendChild(tr);
  });
  masterCheckbox.checked = sorted.length > 0 && sorted.every((row) => state.selected.has(row.id));
  $('[data-selected-count]').textContent = `${state.selected.size}명`;
};

const renderTeamSelect = () => {
  const select = $('[data-filter="team"]');
  if (isStaticElement(select)) return;
  if (!select) return;
  select.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '전체';
  select.appendChild(placeholder);
  teamSummaries.forEach((team) => {
    const option = document.createElement('option');
    option.value = team.id;
    option.textContent = team.id;
    select.appendChild(option);
  });
};

const renderTeams = () => {
  const grid = $('[data-team-grid]');
  if (isStaticElement(grid)) return;
  grid.innerHTML = '';
  teamSummaries.forEach((team) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    const percent = Math.round((team.seats / team.seatLimit) * 100);
    card.innerHTML = `
      <div>
        <h4>${team.id}</h4>
        <p class="muted">담당자 · ${team.manager}</p>
      </div>
      <p><strong>${team.seats}/${team.seatLimit}</strong> 계정 · ${percent}%</p>
      <div class="sparkline"><span style="width:${percent}%"></span></div>
      <p>이번달 사용량 <strong>${formatNumber(team.usage)}</strong> 크레딧 (${team.delta})</p>`;
    grid.appendChild(card);
  });
};

const renderProjects = () => {
  const tbody = $('[data-projects-body]');
  if (isStaticElement(tbody)) return;
  tbody.innerHTML = '';
  projects.forEach((project) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${project.id}</td>
      <td>${project.team}</td>
      <td>${formatNumber(project.usage)} 크레딧</td>
      <td>${project.status}</td>`;
    tbody.appendChild(row);
  });
};

const renderUsageCards = (filter = {}) => {
  const cards = document.querySelector('[data-usage-cards]');
  if (isStaticElement(cards)) return;
  const snapshot = overviewSnapshots[state.period];
  $('[data-id="usage-total"]').textContent = `${formatNumber(snapshot.total)} 크레딧`;
  $('[data-id="usage-remaining"]').textContent = `${formatNumber(snapshot.remaining)} 크레딧`;
  $('[data-id="usage-warning"]').textContent = `${formatNumber(snapshot.overage)} 크레딧`;
  $('[data-id="usage-overage"]').textContent = `${Math.round((snapshot.overage / snapshot.total) * 100) || 0}%`;
  $('[data-id="usage-estimate"]').textContent = snapshot.remaining > 0 ? (snapshot.burnout ?? '예상 중') : '즉시';
  $$('[data-card]').forEach((card) => card.classList.remove('is-loading'));
};

const renderTrend = (filter = {}) => {
  const feature = filter.feature;
  const chart = $('[data-trend-chart]');
  if (isStaticElement(chart)) return;
  chart.innerHTML = '';
  const dataset = usageTrend.map((point) => ({
    label: point.date,
    value: feature ? point[feature] ?? 0 : point.total,
  })).filter((point) => point.value > 0);
  if (!dataset.length) {
    $('[data-trend-empty]').hidden = false;
    return;
  }
  $('[data-trend-empty]').hidden = true;
  const max = Math.max(...dataset.map((d) => d.value));
  dataset.forEach((point) => {
    const bar = document.createElement('div');
    bar.className = 'trend-bar';
    bar.style.height = `${(point.value / max) * 100}%`;
    bar.innerHTML = `<span>${point.label}</span>`;
    chart.appendChild(bar);
  });
};

const renderDistribution = () => {
  const list = $('[data-distribution]');
  if (isStaticElement(list)) return;
  list.innerHTML = '';
  featureMix.forEach((feature) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span>${feature.name}</span>
      <div class="bar"><span style="width:${feature.value * 100}%"></span></div>
      <strong>${(feature.value * 100).toFixed(0)}%</strong>`;
    list.appendChild(item);
  });
};

const renderTopLists = () => {
  Object.entries(topUsage).forEach(([key, entries]) => {
    const list = $(`[data-top="${key}"]`);
    if (isStaticElement(list)) return;
    list.innerHTML = '';
    entries.forEach((entry, index) => {
      const item = document.createElement('li');
      item.innerHTML = `<span>${index + 1}. ${entry.label}</span><strong>${formatNumber(entry.value)}</strong>`;
      list.appendChild(item);
    });
  });
};

const renderAudit = (filter = {}) => {
  const list = $('[data-audit-list]');
  if (isStaticElement(list)) return;
  list.innerHTML = '';
  const actor = filter.actor;
  const action = filter.action;
  let rows = [...auditLogs];
  if (actor) rows = rows.filter((log) => log.actor === actor);
  if (action) rows = rows.filter((log) => log.code === action);
  rows.forEach((log) => {
    const card = document.createElement('div');
    card.className = 'audit-item';
    card.innerHTML = `
      <div>
        <strong>${log.action}</strong>
        <p class="muted">${log.detail}</p>
      </div>
      <div class="audit-meta">
        <p>${log.actor} → ${log.target}</p>
        <p>${log.time}</p>
      </div>`;
    list.appendChild(card);
  });
  const actorSelect = $('[data-audit-filter] select[name="actor"]');
  if (actorSelect && actorSelect.options.length === 1) {
    [...new Set(auditLogs.map((log) => log.actor))].forEach((name) => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      actorSelect.appendChild(option);
    });
  }
};

const attachFilters = () => {
  $$('[data-filter]').forEach((input) => {
    const handler = () => {
      const key = input.getAttribute('data-filter');
      const value = input.tagName === 'SELECT' ? input.value : input.value.trim();
      state.filters[key] = key === 'search' ? value.toLowerCase() : value;
      renderUsers();
    };
    input.addEventListener('input', handler);
    input.addEventListener('change', handler);
  });

  $$('[data-sort]').forEach((header) => {
    header.addEventListener('click', () => {
      const key = header.getAttribute('data-sort');
      if (state.sort.key === key) {
        state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sort.key = key;
        state.sort.dir = 'asc';
      }
      renderUsers();
    });
  });
};

const attachSelectionHandlers = () => {
  document.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('[data-row-checkbox]')) {
      if (target.checked) {
        state.selected.add(target.value);
      } else {
        state.selected.delete(target.value);
      }
      $('[data-selected-count]').textContent = `${state.selected.size}명`;
    }
    if (target.matches('[data-master-checkbox]')) {
      const rows = $$('[data-row-checkbox]');
      rows.forEach((checkbox) => {
        checkbox.checked = target.checked;
        if (target.checked) {
          state.selected.add(checkbox.value);
        } else {
          state.selected.delete(checkbox.value);
        }
      });
      $('[data-selected-count]').textContent = `${state.selected.size}명`;
    }
  });
};

const modal = $('[data-modal]');
const modalTitle = $('[data-modal-title]');
const modalBody = $('[data-modal-body]');
let modalResolver = null;

const openModal = ({ title, body }) => new Promise((resolve) => {
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  modalResolver = resolve;
});

const closeModal = () => {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  if (modalResolver) {
    modalResolver(false);
    modalResolver = null;
  }
};

$('[data-modal-cancel]').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

$('[data-modal-confirm]').addEventListener('click', () => {
  if (modalResolver) {
    modalResolver(true);
    modalResolver = null;
  }
  closeModal();
});

const toastStack = $('.toast-stack');
const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span><button type="button">되돌리기</button>`;
  toastStack.appendChild(toast);
  const timeout = setTimeout(() => toast.remove(), 5000);
  toast.querySelector('button').addEventListener('click', () => {
    clearTimeout(timeout);
    toast.innerHTML = `<span>되돌리기를 완료했습니다.</span>`;
    setTimeout(() => toast.remove(), 2000);
  });
};

const attachBulkActions = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const bulkTrigger = target.closest('[data-bulk-action]');
    const actionName = bulkTrigger?.getAttribute('data-bulk-action');
    if (actionName) {
      if (!state.selected.size) {
        showToast('먼저 사용자를 선택하세요.');
        return;
      }
      const actionLabel = tAction(actionName);
      const confirmed = await openModal({
        title: `${actionLabel} 실행`,
        body: `선택한 ${state.selected.size}명에게 ${actionLabel}을 적용할까요?`
      });
      if (confirmed) {
        showToast(`${actionLabel} 완료 · ${state.selected.size}명 처리됨`);
      }
    }
    const rowTrigger = target.closest('[data-row-action]');
    const rowAction = rowTrigger?.getAttribute('data-row-action');
    if (rowAction) {
      const userId = rowTrigger.getAttribute('data-user');
      const user = userRows.find((row) => row.id === userId);
      const actionLabel = tAction(rowAction);
      const confirmed = await openModal({ title: `${user?.name} ${actionLabel}`, body: `${actionLabel} 작업을 진행할까요?` });
      if (confirmed) showToast(`${user?.name} ${actionLabel} 완료`);
    }
    const policyTrigger = target.closest('[data-policy-action]');
    if (policyTrigger) {
      const policyKey = policyTrigger.getAttribute('data-policy-action');
      const policyLabel = tPolicy(policyKey);
      const confirmed = await openModal({ title: `${policyLabel} 저장`, body: `${policyLabel} 정책을 저장합니다.` });
      if (confirmed) showToast(`${policyLabel} 정책이 저장되었습니다.`);
    }
  });
};

const attachUsageFilter = () => {
  $('[data-usage-filter]').addEventListener('change', (event) => {
    if (event.target.name === 'feature') {
      const value = event.target.value || null;
      renderTrend({ feature: value });
    }
    renderUsageCards();
  });
};

const attachAuditFilter = () => {
  $('[data-audit-filter]').addEventListener('change', (event) => {
    const form = event.currentTarget;
    const actor = form.actor.value;
    const action = form.action.value;
    renderAudit({ actor, action });
  });
};

const attachPeriodToggle = () => {
  $$('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      $$('.chip').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      state.period = chip.dataset.range;
      renderOverview();
      renderUsageCards();
    });
  });
};

const simulateLoading = () => {
  const wrapper = $('[data-users-table]');
  if (isStaticElement(wrapper)) return;
  $('[data-error-state]').hidden = true;
  wrapper.classList.add('is-loading');
  setTimeout(() => {
    wrapper.classList.remove('is-loading');
  }, 800);

  const refreshBtn = $('[data-action="refresh"]');
  refreshBtn.addEventListener('click', () => {
    wrapper.classList.add('is-loading');
    $('[data-error-state]').hidden = true;
    setTimeout(() => {
      if (Math.random() > 0.75) {
        $('[data-error-state]').hidden = false;
      } else {
        $('[data-error-state]').hidden = true;
      }
      wrapper.classList.remove('is-loading');
    }, 900);
  });
};

const init = () => {
  renderOverview();
  renderUsers();
  renderTeams();
  renderProjects();
  renderUsageCards();
  renderTrend();
  renderDistribution();
  renderTopLists();
  renderAudit();
  renderTeamSelect();
  attachFilters();
  attachSelectionHandlers();
  attachBulkActions();
  attachUsageFilter();
  attachAuditFilter();
  attachPeriodToggle();
  simulateLoading();
};

init();
