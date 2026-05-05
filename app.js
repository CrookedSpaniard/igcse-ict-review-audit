const STORAGE_KEY = "igcse-ict-review-v1";

const questions = [
  {
    id: "u01-digital-device",
    unit: "Unit 01",
    category: "Digital Devices",
    title: "Digital Device",
    text: "A digital device processes, stores or transmits data using digital form.",
    isMistake: false,
    explanation: "Digital devices handle data in digital form, usually represented using binary values."
  },
  {
    id: "u01-input-scanner",
    unit: "Unit 01",
    category: "Input and Output",
    title: "Scanner",
    text: "A scanner is an input device because it captures documents or images and sends them to a computer.",
    isMistake: false,
    explanation: "A scanner inputs image data into a computer system."
  },
  {
    id: "u01-output-monitor",
    unit: "Unit 01",
    category: "Input and Output",
    title: "Output Devices",
    text: "A monitor and a printer are both output devices.",
    isMistake: false,
    explanation: "Monitors display output on screen, and printers produce physical output on paper."
  },
  {
    id: "u01-bytes-bits",
    unit: "Unit 01",
    category: "Storage",
    title: "Bytes and Bits",
    text: "5 bytes is equal to 5 bits.",
    isMistake: true,
    options: [
      "5 bytes is 40 bits because 1 byte equals 8 bits.",
      "5 bytes is 500 bits because 1 byte equals 100 bits.",
      "5 bytes is 4 bits because bytes are smaller than bits."
    ],
    correctOption: 0,
    explanation: "One byte contains 8 bits, so 5 bytes equals 5 x 8 = 40 bits."
  },
  {
    id: "u01-gb-mb",
    unit: "Unit 01",
    category: "Storage",
    title: "GB to MB",
    text: "Using 1 GB = 1024 MB, 4 GB is equal to 4096 MB.",
    isMistake: false,
    explanation: "4 x 1024 MB = 4096 MB."
  },
  {
    id: "u01-file-size",
    unit: "Unit 01",
    category: "Storage",
    title: "Video File Size",
    text: "A video file usually needs less storage space than a plain text file because it contains fewer types of data.",
    isMistake: true,
    options: [
      "A video usually needs more storage because it contains many frames and may include audio.",
      "A video file always has no images, only plain text.",
      "A plain text file must store every letter as a high-resolution image."
    ],
    correctOption: 0,
    explanation: "Video usually stores many images per second and may also store sound, so it normally needs more space than plain text."
  },
  {
    id: "u01-ram-rom",
    unit: "Unit 01",
    category: "Memory",
    title: "RAM and ROM",
    text: "RAM is non-volatile memory that permanently stores start-up instructions.",
    isMistake: true,
    options: [
      "RAM is volatile; ROM is non-volatile and stores start-up instructions.",
      "RAM and ROM are both secondary storage devices.",
      "ROM loses its contents when power is switched off."
    ],
    correctOption: 0,
    explanation: "RAM is volatile and stores currently used data or programs. ROM is non-volatile and stores permanent start-up instructions."
  },
  {
    id: "u01-ssd-characteristics",
    unit: "Unit 01",
    category: "Storage",
    title: "SSD Characteristics",
    text: "An SSD has no moving parts and uses flash memory.",
    isMistake: false,
    explanation: "SSDs use flash memory, are silent, and are more resistant to movement than HDDs."
  },
  {
    id: "u01-hdd-ssd-portable",
    unit: "Unit 01",
    category: "Storage",
    title: "Portable Computer Storage",
    text: "An HDD is usually more resistant to shock than an SSD because it has moving parts.",
    isMistake: true,
    options: [
      "An SSD is usually more shock resistant because it has no moving parts.",
      "An HDD is always faster because moving parts increase speed.",
      "An SSD cannot be used in a portable computer."
    ],
    correctOption: 0,
    explanation: "An SSD has no moving parts, so it is less likely to be damaged by movement or drops."
  },
  {
    id: "u01-camera-monitor",
    unit: "Unit 01",
    category: "Choosing Devices",
    title: "Choosing Devices",
    text: "Resolution, storage capacity, battery life, zoom and cost can be relevant when choosing a digital camera.",
    isMistake: false,
    explanation: "Device choice depends on the task, so camera resolution, storage, power, zoom, connectivity and cost can all matter."
  },
  {
    id: "u02-ethernet-speed",
    unit: "Unit 02",
    category: "Connectivity",
    title: "Ethernet Speed",
    text: "Ethernet cables can provide faster and more stable connections than most Wi-Fi networks.",
    isMistake: false,
    explanation: "A wired Ethernet connection is often more stable, less affected by interference, and can provide high speeds."
  },
  {
    id: "u02-fibre-optics",
    unit: "Unit 02",
    category: "Media",
    title: "Fibre Optics",
    text: "Fibre optic cables use electrical pulses to send data through metal wires.",
    isMistake: true,
    options: [
      "They use light pulses through glass or plastic fibres.",
      "They use radio frequencies through the air.",
      "They only work for short distances under 2 metres."
    ],
    correctOption: 0,
    explanation: "Fibre optic cables transmit data as light pulses through glass or plastic fibres."
  },
  {
    id: "u02-router-role",
    unit: "Unit 02",
    category: "Hardware",
    title: "Router Role",
    text: "A router is responsible for directing data packets between different networks.",
    isMistake: false,
    explanation: "Routers forward packets between networks, for example between a LAN and the internet."
  },
  {
    id: "u02-lan-scope",
    unit: "Unit 02",
    category: "Networks",
    title: "LAN Scope",
    text: "A LAN is usually confined to a single building or site.",
    isMistake: false,
    explanation: "A Local Area Network covers a small geographical area such as one room, building or school site."
  },
  {
    id: "u02-wifi-signals",
    unit: "Unit 02",
    category: "Wireless",
    title: "Wi-Fi Signals",
    text: "Wi-Fi signals can be blocked or weakened by thick walls and metal objects.",
    isMistake: false,
    explanation: "Wireless signals can suffer from interference and can be weakened by obstacles."
  },
  {
    id: "u02-usb-distances",
    unit: "Unit 02",
    category: "Hardware",
    title: "USB Distances",
    text: "Standard USB cables are designed to connect devices over distances up to 100 metres.",
    isMistake: true,
    options: [
      "Standard USB is for short-range connections, typically under 5 metres.",
      "USB cables only work if they are gold-plated.",
      "USB cables are wireless devices."
    ],
    correctOption: 0,
    explanation: "Standard USB is intended for short-range device connections, not long-distance networking."
  },
  {
    id: "u02-ip-addresses",
    unit: "Unit 02",
    category: "Protocols",
    title: "IP Addresses",
    text: "Every device on a network needs a unique IP address to be identified.",
    isMistake: false,
    explanation: "IP addresses identify devices on an IP network so data can be routed to the correct destination."
  },
  {
    id: "u02-switching",
    unit: "Unit 02",
    category: "Hardware",
    title: "Switching",
    text: "A switch sends data to every single device on the network simultaneously to ensure it arrives.",
    isMistake: true,
    options: [
      "A switch sends data only to the specific device it was intended for.",
      "A switch is only used to connect to the internet.",
      "A switch is another name for a wall socket."
    ],
    correctOption: 0,
    explanation: "A switch uses addresses to forward data to the intended device rather than broadcasting everything to all ports."
  },
  {
    id: "u02-bandwidth",
    unit: "Unit 02",
    category: "Performance",
    title: "Bandwidth",
    text: "Bandwidth refers to the maximum rate of data transfer across a network path.",
    isMistake: false,
    explanation: "Higher bandwidth means more data can be transmitted per second."
  },
  {
    id: "u02-internet-type",
    unit: "Unit 02",
    category: "Networks",
    title: "Internet Type",
    text: "The Internet is the best example of a PAN.",
    isMistake: true,
    options: [
      "It is a WAN because it covers a very large geographical area.",
      "It is a LAN because it is only inside one building.",
      "It is a hardware device, not a network."
    ],
    correctOption: 0,
    explanation: "The internet is a Wide Area Network because it connects networks across the world."
  },
  {
    id: "u02-bluetooth",
    unit: "Unit 02",
    category: "Wireless",
    title: "Bluetooth",
    text: "Bluetooth is a high-speed connection used to link cities together.",
    isMistake: true,
    options: [
      "It is a low-power, short-range connection for personal devices.",
      "It is a wired connection used for servers.",
      "It only works through satellite links."
    ],
    correctOption: 0,
    explanation: "Bluetooth is designed for short-range personal connections such as headphones, phones and keyboards."
  },
  {
    id: "u02-network-security",
    unit: "Unit 02",
    category: "Security",
    title: "Network Security",
    text: "Using a strong password on a Wi-Fi network helps prevent unauthorised access.",
    isMistake: false,
    explanation: "Strong Wi-Fi passwords make it harder for unauthorised users to join the network."
  },
  {
    id: "u02-latency",
    unit: "Unit 02",
    category: "Performance",
    title: "Latency",
    text: "Latency is the delay before a transfer of data begins following an instruction.",
    isMistake: false,
    explanation: "Latency describes delay. Lower latency is useful for real-time activities such as video calls or online games."
  },
  {
    id: "u02-hdmi",
    unit: "Unit 02",
    category: "Hardware",
    title: "HDMI Usage",
    text: "HDMI cables are used to transmit high-definition video and audio signals between devices.",
    isMistake: false,
    explanation: "HDMI can carry digital video and audio between devices such as computers, monitors and projectors."
  },
  {
    id: "u02-wired-security",
    unit: "Unit 02",
    category: "Security",
    title: "Wired Security",
    text: "Wired networks are generally considered more secure than wireless networks because they require physical access.",
    isMistake: false,
    explanation: "A wired network usually requires a physical connection, while wireless signals may be reachable nearby."
  },
  {
    id: "u02-data-packets",
    unit: "Unit 02",
    category: "Protocols",
    title: "Data Packets",
    text: "Data sent over the internet is broken down into smaller pieces called packets.",
    isMistake: false,
    explanation: "Packets are smaller chunks of data that can be routed across networks and reassembled at the destination."
  },
  {
    id: "u02-hub-vs-switch",
    unit: "Unit 02",
    category: "Hardware",
    title: "Hub vs Switch",
    text: "A hub is more efficient than a switch because it manages data traffic intelligently.",
    isMistake: true,
    options: [
      "A hub is less efficient as it broadcasts data to all ports; a switch is smarter.",
      "Hubs are faster because they do not look at the data.",
      "Hubs are only used for wireless connections."
    ],
    correctOption: 0,
    explanation: "A hub broadcasts traffic to all connected devices, while a switch forwards data more intelligently."
  },
  {
    id: "u02-network-traffic",
    unit: "Unit 02",
    category: "Performance",
    title: "Network Traffic",
    text: "The more devices that use a network at once, the more bandwidth is available for each one.",
    isMistake: true,
    options: [
      "Bandwidth is shared, so more users usually mean slower speeds for each.",
      "Devices generate their own bandwidth as they connect.",
      "Network traffic does not affect speed at all."
    ],
    correctOption: 0,
    explanation: "Bandwidth is shared between active users and devices, so heavy traffic can reduce performance."
  },
  {
    id: "u02-cloud-storage",
    unit: "Unit 02",
    category: "Services",
    title: "Cloud Storage",
    text: "Cloud storage allows you to save files on remote servers accessible via the internet.",
    isMistake: false,
    explanation: "Cloud storage keeps files on remote servers and lets users access them through an internet connection."
  },
  {
    id: "u02-nic",
    unit: "Unit 02",
    category: "Hardware",
    title: "NIC",
    text: "A Network Interface Card allows a computer to connect to a network.",
    isMistake: false,
    explanation: "A NIC provides the hardware interface needed for wired or wireless network communication."
  }
];

const state = {
  filter: "all",
  activeId: null,
  step: "identification",
  feedback: null,
  showSummary: false,
  toast: null,
  data: loadState()
};

function loadState() {
  const defaults = {
    studentName: "",
    progress: {},
    order: shuffle(questions.map((question) => question.id))
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return defaults;
    const knownIds = new Set(questions.map((question) => question.id));
    const order = Array.isArray(saved.order)
      ? saved.order.filter((id) => knownIds.has(id))
      : [];
    const missing = questions.map((question) => question.id).filter((id) => !order.includes(id));
    return {
      studentName: typeof saved.studentName === "string" ? saved.studentName : "",
      progress: saved.progress && typeof saved.progress === "object" ? saved.progress : {},
      order: [...order, ...shuffle(missing)]
    };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function maxScore(question) {
  return question.isMistake ? 2 : 1;
}

function totalMaxScore(items = questions) {
  return items.reduce((sum, question) => sum + maxScore(question), 0);
}

function totalScore(items = questions) {
  return items.reduce((sum, question) => sum + (state.data.progress[question.id]?.score || 0), 0);
}

function byId(id) {
  return questions.find((question) => question.id === id);
}

function orderedQuestions() {
  return state.data.order.map(byId).filter(Boolean);
}

function completedQuestions(items = questions) {
  return items.filter((question) => state.data.progress[question.id]);
}

function filteredQuestions() {
  const ordered = orderedQuestions();
  if (state.filter === "unit01") return ordered.filter((question) => question.unit === "Unit 01");
  if (state.filter === "unit02") return ordered.filter((question) => question.unit === "Unit 02");
  if (state.filter === "mistakes") return ordered.filter((question) => question.isMistake);
  if (state.filter === "failed") {
    return ordered.filter((question) => {
      const progress = state.data.progress[question.id];
      return progress && progress.status !== "success";
    });
  }
  return ordered;
}

function statsFor(items = questions) {
  const completed = completedQuestions(items);
  const score = totalScore(items);
  const max = totalMaxScore(items);
  return {
    score,
    max,
    completed: completed.length,
    total: items.length,
    percentage: max === 0 ? 0 : Math.round((score / max) * 100)
  };
}

function statusCounts() {
  return Object.values(state.data.progress).reduce(
    (counts, item) => {
      counts[item.status] = (counts[item.status] || 0) + 1;
      return counts;
    },
    { success: 0, partial: 0, fail: 0 }
  );
}

function categoryWeaknesses() {
  const rows = new Map();
  questions.forEach((question) => {
    const progress = state.data.progress[question.id];
    if (!progress || progress.status === "success") return;
    const current = rows.get(question.category) || { category: question.category, count: 0, titles: [] };
    current.count += 1;
    current.titles.push(question.title);
    rows.set(question.category, current);
  });
  return [...rows.values()].sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

function needsReview() {
  return questions.filter((question) => {
    const progress = state.data.progress[question.id];
    return progress && progress.status !== "success";
  });
}

function icon(name) {
  const icons = {
    shield: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    check: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
    alert: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16h.01"/></svg>',
    x: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    copy: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    reset: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v6h6"/></svg>'
  };
  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const app = document.querySelector("#app");
  const allStats = statsFor();
  const unit01 = questions.filter((question) => question.unit === "Unit 01");
  const unit02 = questions.filter((question) => question.unit === "Unit 02");
  const unit01Stats = statsFor(unit01);
  const unit02Stats = statsFor(unit02);
  const visible = filteredQuestions();

  app.innerHTML = `
    <main class="app">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">${icon("shield")}</div>
          <div>
            <h1>IGCSE ICT Review Audit</h1>
            <p class="subtitle">Units 01 and 02. Identify truths, find errors, justify corrections.</p>
          </div>
        </div>
        <div class="actions">
          <div class="score-box">
            <span class="score-label">Global Score</span>
            <span class="score-value">${allStats.score}/${allStats.max}</span>
          </div>
          <button class="btn success" data-action="review-mistakes">${icon("alert")} Review mistakes</button>
          <button class="btn primary" data-action="show-summary">Finish audit</button>
          <button class="btn danger" data-action="reset">${icon("reset")} Reset</button>
        </div>
      </header>

      <section class="student-panel" aria-label="Student and progress">
        <div class="field">
          <label for="student-name">Student name</label>
          <input id="student-name" type="text" value="${escapeHtml(state.data.studentName)}" placeholder="Type your name">
        </div>
        <div class="unit-bars">
          ${renderUnitBar("Unit 01", unit01Stats)}
          ${renderUnitBar("Unit 02", unit02Stats)}
        </div>
      </section>

      <nav class="filters" aria-label="Filters">
        ${renderFilter("all", "All", questions.length)}
        ${renderFilter("unit01", "Unit 01", unit01.length)}
        ${renderFilter("unit02", "Unit 02", unit02.length)}
        ${renderFilter("mistakes", "Mistakes only", questions.filter((question) => question.isMistake).length)}
        ${renderFilter("failed", "Failed review", needsReview().length)}
      </nav>

      <section class="grid" aria-label="Question cards">
        ${visible.length ? visible.map(renderQuestionCard).join("") : '<div class="empty">No questions match this filter yet.</div>'}
      </section>
    </main>
    ${state.activeId ? renderQuestionModal(byId(state.activeId)) : ""}
    ${state.showSummary ? renderSummaryModal() : ""}
    ${renderToast()}
  `;

  bindEvents();
}

function renderUnitBar(label, stats) {
  return `
    <div class="bar-card">
      <div class="bar-head">
        <span>${label}</span>
        <span>${stats.score}/${stats.max} - ${stats.completed}/${stats.total}</span>
      </div>
      <div class="bar" aria-hidden="true"><div class="bar-fill" style="width: ${stats.percentage}%"></div></div>
    </div>
  `;
}

function renderFilter(id, label, count) {
  return `<button class="filter ${state.filter === id ? "active" : ""}" data-filter="${id}">${label} (${count})</button>`;
}

function renderQuestionCard(question) {
  const progress = state.data.progress[question.id];
  const statusClass = progress ? progress.status : "";
  const statusIcon = progress?.status === "success" ? "check" : progress?.status === "partial" ? "alert" : "x";
  const canRetry = state.filter === "failed" && progress && progress.status !== "success";
  const disabled = progress && !canRetry ? "disabled" : "";
  const scoreLabel = progress ? `${progress.score}/${maxScore(question)} pts` : `${maxScore(question)} pts`;

  return `
    <button class="card ${statusClass}" data-question-id="${question.id}" ${disabled}>
      <div class="card-top">
        <div class="tags">
          <span class="tag unit">${question.unit}</span>
          <span class="tag">${question.category}</span>
        </div>
        ${progress ? `<span class="status ${progress.status}">${icon(statusIcon)}</span>` : ""}
      </div>
      <h3>${escapeHtml(question.title)}</h3>
      <p class="card-text">${escapeHtml(question.text)}</p>
      <div class="card-foot">
        <span>${canRetry ? "Retry this item" : question.isMistake ? "Mistake check + justification" : "Truth check"}</span>
        <span>${scoreLabel}</span>
      </div>
    </button>
  `;
}

function renderQuestionModal(question) {
  const feedback = state.feedback;
  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal">
        <div class="modal-body">
          <div class="modal-title">
            <div class="brand-mark">${icon("shield")}</div>
            <div>
              <p class="score-label">${question.unit} - ${question.category}</p>
              <h2>${escapeHtml(question.title)}</h2>
            </div>
          </div>
          <div class="statement">${escapeHtml(question.text)}</div>
          ${state.step === "identification" ? renderIdentificationStep() : renderJustificationStep(question)}
          ${feedback ? renderFeedback(feedback) : ""}
        </div>
        <div class="modal-actions">
          ${feedback ? '<button class="btn primary" data-action="close-question">Continue</button>' : ""}
          <button class="btn ghost" data-action="abort-question">Close</button>
        </div>
      </div>
    </div>
  `;
}

function renderIdentificationStep() {
  return `
    <p class="subtitle">Does this statement contain a technical mistake?</p>
    <div class="choice-grid" style="margin-top: 14px">
      <button class="btn success" data-choice="correct">Factually correct</button>
      <button class="btn danger" data-choice="mistake">Technical mistake</button>
    </div>
  `;
}

function renderJustificationStep(question) {
  return `
    <p class="subtitle">Choose the best correction.</p>
    <div class="option-list" style="margin-top: 14px">
      ${question.options.map((option, index) => `
        <button class="option" data-option="${index}">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderFeedback(feedback) {
  return `
    <div class="feedback">
      <strong>${escapeHtml(feedback.title)}</strong><br>
      ${escapeHtml(feedback.message)}<br><br>
      <strong>Explanation:</strong> ${escapeHtml(feedback.explanation)}
    </div>
  `;
}

function renderSummaryModal() {
  const all = statsFor();
  const unit01Stats = statsFor(questions.filter((question) => question.unit === "Unit 01"));
  const unit02Stats = statsFor(questions.filter((question) => question.unit === "Unit 02"));
  const counts = statusCounts();
  const weak = categoryWeaknesses();
  const review = needsReview();

  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal wide">
        <div class="modal-body">
          <div class="modal-title">
            <div class="brand-mark">${icon("check")}</div>
            <div>
              <p class="score-label">Mastery report</p>
              <h2>Audit complete</h2>
            </div>
          </div>
          <div class="summary-grid">
            ${renderMetric(all.score + "/" + all.max, "Score")}
            ${renderMetric(all.percentage + "%", "Accuracy")}
            ${renderMetric(all.completed + "/" + all.total, "Completed")}
            ${renderMetric(counts.success + "/" + counts.partial + "/" + counts.fail, "Full/Partial/Fail")}
          </div>
          <div class="summary-sections">
            <section class="summary-card">
              <h3>Unit scores</h3>
              <ul class="plain-list">
                <li>Unit 01: ${unit01Stats.score}/${unit01Stats.max} (${unit01Stats.completed}/${unit01Stats.total})</li>
                <li>Unit 02: ${unit02Stats.score}/${unit02Stats.max} (${unit02Stats.completed}/${unit02Stats.total})</li>
              </ul>
            </section>
            <section class="summary-card">
              <h3>Categories to review</h3>
              ${weak.length ? `<ul class="plain-list">${weak.slice(0, 6).map((item) => `<li>${escapeHtml(item.category)}: ${item.count}</li>`).join("")}</ul>` : '<p class="subtitle">No weak categories yet.</p>'}
            </section>
            <section class="summary-card">
              <h3>Needs review</h3>
              ${review.length ? `<ul class="plain-list">${review.slice(0, 8).map((question) => `<li>${escapeHtml(question.title)}</li>`).join("")}</ul>` : '<p class="subtitle">No failed or partial items.</p>'}
            </section>
            <section class="summary-card">
              <h3>Share</h3>
              <p class="subtitle">Copy the report and paste it into Classroom, Moodle, email or a shared document.</p>
            </section>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn success" data-action="copy-report">${icon("copy")} Copy report</button>
          <button class="btn" data-action="review-mistakes">${icon("alert")} Review mistakes</button>
          <button class="btn primary" data-action="hide-summary">Return to grid</button>
        </div>
      </div>
    </div>
  `;
}

function renderMetric(value, label) {
  return `<div class="metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`;
}

function renderToast() {
  if (!state.toast) return '<div class="toast" aria-live="polite"></div>';
  return `<div class="toast visible ${state.toast.type}" aria-live="polite">${escapeHtml(state.toast.message)}</div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      render();
    });
  });

  document.querySelectorAll("[data-question-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const progress = state.data.progress[button.dataset.questionId];
      const canRetry = state.filter === "failed" && progress && progress.status !== "success";
      if (progress && !canRetry) return;
      state.activeId = button.dataset.questionId;
      state.step = "identification";
      state.feedback = null;
      render();
    });
  });

  const studentInput = document.querySelector("#student-name");
  if (studentInput) {
    studentInput.addEventListener("input", (event) => {
      state.data.studentName = event.target.value;
      saveState();
    });
  }

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => handleInitialChoice(button.dataset.choice));
  });

  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => handleJustification(Number(button.dataset.option)));
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });
}

function handleInitialChoice(choice) {
  const question = byId(state.activeId);
  const userSaysCorrect = choice === "correct";
  const userIsRight = (userSaysCorrect && !question.isMistake) || (!userSaysCorrect && question.isMistake);

  if (userIsRight && !question.isMistake) {
    completeQuestion(question, {
      status: "success",
      score: 1,
      initialCorrect: true,
      justificationCorrect: true
    });
    state.feedback = {
      title: "Correct. +1 point",
      message: "This statement is factually correct.",
      explanation: question.explanation
    };
    showToast("Correct answer recorded.", "success");
    render();
    return;
  }

  if (userIsRight && question.isMistake) {
    state.step = "justification";
    state.data.progress[question.id] = {
      status: "partial",
      score: 1,
      initialCorrect: true,
      justificationCorrect: false,
      completedAt: new Date().toISOString()
    };
    saveState();
    showToast("Correct. Now justify the mistake for the second point.", "success");
    render();
    return;
  }

  if (question.isMistake) {
    state.step = "justification";
    state.data.progress[question.id] = {
      status: "fail",
      score: 0,
      initialCorrect: false,
      justificationCorrect: false,
      completedAt: new Date().toISOString()
    };
    saveState();
    showToast("This statement contains a mistake. You can still earn the justification point.", "error");
    render();
    return;
  }

  completeQuestion(question, {
    status: "fail",
    score: 0,
    initialCorrect: false,
    justificationCorrect: true
  });
  state.feedback = {
    title: "Incorrect. 0 points",
    message: "This statement was factually correct.",
    explanation: question.explanation
  };
  showToast("Incorrect answer recorded.", "error");
  render();
}

function handleJustification(optionIndex) {
  const question = byId(state.activeId);
  const previous = state.data.progress[question.id] || { score: 0, initialCorrect: false };
  const correct = optionIndex === question.correctOption;
  const score = (previous.initialCorrect ? 1 : 0) + (correct ? 1 : 0);
  const status = score === 2 ? "success" : score === 1 ? "partial" : "fail";

  completeQuestion(question, {
    status,
    score,
    initialCorrect: Boolean(previous.initialCorrect),
    justificationCorrect: correct
  });

  state.feedback = {
    title: correct ? `Correct justification. ${score}/${maxScore(question)} points` : `Incorrect justification. ${score}/${maxScore(question)} points`,
    message: correct ? "You selected the correct correction." : "The selected correction was not the best answer.",
    explanation: question.explanation
  };
  showToast(correct ? "Justification recorded." : "Justification needs review.", correct ? "success" : "error");
  render();
}

function completeQuestion(question, result) {
  state.data.progress[question.id] = {
    ...result,
    completedAt: new Date().toISOString()
  };
  saveState();
}

function handleAction(action) {
  if (action === "show-summary") {
    state.showSummary = true;
    render();
  }

  if (action === "hide-summary") {
    state.showSummary = false;
    render();
  }

  if (action === "abort-question") {
    state.activeId = null;
    state.step = "identification";
    state.feedback = null;
    render();
  }

  if (action === "close-question") {
    state.activeId = null;
    state.step = "identification";
    state.feedback = null;
    render();
  }

  if (action === "review-mistakes") {
    state.showSummary = false;
    state.activeId = null;
    state.filter = "failed";
    render();
  }

  if (action === "copy-report") {
    copyReport();
  }

  if (action === "reset") {
    const confirmed = window.confirm("Reset this attempt and clear saved progress?");
    if (!confirmed) return;
    state.data.progress = {};
    state.data.order = shuffle(questions.map((question) => question.id));
    state.filter = "all";
    state.activeId = null;
    state.showSummary = false;
    saveState();
    showToast("Attempt reset.", "info");
    render();
  }
}

function reportText() {
  const all = statsFor();
  const unit01Stats = statsFor(questions.filter((question) => question.unit === "Unit 01"));
  const unit02Stats = statsFor(questions.filter((question) => question.unit === "Unit 02"));
  const counts = statusCounts();
  const weak = categoryWeaknesses();
  const review = needsReview();
  const date = new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });

  const lines = [
    "IGCSE ICT Review Results",
    `Student: ${state.data.studentName.trim() || "__________"}`,
    `Date: ${date}`,
    `Score: ${all.score}/${all.max}`,
    `Accuracy: ${all.percentage}%`,
    `Completed: ${all.completed}/${all.total}`,
    `Full correct: ${counts.success}`,
    `Partial: ${counts.partial}`,
    `Failed: ${counts.fail}`,
    "",
    `Unit 01: ${unit01Stats.score}/${unit01Stats.max} (${unit01Stats.completed}/${unit01Stats.total} completed)`,
    `Unit 02: ${unit02Stats.score}/${unit02Stats.max} (${unit02Stats.completed}/${unit02Stats.total} completed)`,
    "",
    "Categories with errors:",
    ...(weak.length ? weak.map((item) => `- ${item.category}: ${item.count}`) : ["- None"]),
    "",
    "Needs review:",
    ...(review.length ? review.map((question) => `- ${question.title} (${question.unit}, ${question.category})`) : ["- None"])
  ];

  return lines.join("\n");
}

async function copyReport() {
  const text = reportText();
  try {
    await navigator.clipboard.writeText(text);
    showToast("Report copied to clipboard.", "success");
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast("Report copied to clipboard.", "success");
  }
  render();
}

function showToast(message, type = "info") {
  state.toast = { message, type };
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2400);
}

render();
