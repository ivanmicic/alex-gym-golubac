/* ALEX GYM — podaci teretane. Dani: 0 = nedelja … 6 = subota. */
const GYM = {
  phoneDisplay: "062 474998",
  phoneE164: "+38162474998",
  whatsapp: "38162474998",
  days: [0, 1, 2, 3, 4, 5, 6],
  open: "13:00",
  close: "21:00",
  rating: 4.9,
  reviews: 10,
};

const EN = {
  skip: "Skip to content",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.book": "Book a session",
  "hero.kicker": "Gym · Golubac",
  "hero.l1": "I'll help you",
  "hero.l2": "get fit and stay fit",
  "hero.lead": "Group sessions, one-to-one coaching, and solo training. Rudnička 9, Golubac.",
  "hero.book": "Book a session",
  "hero.call": "Call",
  "ribbon.hours": "Hours",
  "ribbon.where": "Address",
  "ribbon.rating": "Google rating",
  "ribbon.offer": "Services",
  "ribbon.offerV": "Group · 1-to-1 · Solo",
  "about.kicker": "About",
  "about.title": "A gym and fitness center in Golubac",
  "about.p1": "ALEX GYM is at Rudnička 9. I'll help you get fit and stay fit — in a group, one-to-one, or on your own, from 13:00 to 21:00.",
  "about.p2": "If this is your first time in a gym, you don't need a finished plan. Message us before you come and we'll set a time and a goal. People rate us 4.9 on Google.",
  "about.addr": "Address",
  "about.time": "Hours",
  "about.google": "Google",
  "about.ig": "Instagram",
  "about.steps": "First visit",
  "about.s1": "Get in touch — message, Viber, or a call",
  "about.s2": "Pick a service and a time",
  "about.s3": "Come to Rudnička 9",
  "services.kicker": "Services",
  "services.title": "Three ways to train",
  "services.lead": "You get the price and an open slot directly. The booking form sends a WhatsApp message to the gym.",
  "services.book": "Book this",
  "s1.t": "Group sessions",
  "s1.d": "A group workout with structure and a pace that carries you through. Book a spot in advance.",
  "s2.t": "1-to-1",
  "s2.d": "Individual coaching. We set the exercises, the pace, and the goal around you — whether you're starting out or you already train.",
  "s3.t": "Solo",
  "s3.d": "The gym is open for your own plan during working hours. A heads-up is welcome if you want us to expect you.",
  "faq.kicker": "FAQ",
  "faq.title": "Frequently asked questions",
  "faq.lead": "Short answers before you come. If it's not here, message us.",
  q1: "When are you open?",
  a1: "Every day from 13:00 to 21:00.",
  q2: "Where are you?",
  a2: "Rudnička 9, Golubac. The contact section has a map and directions.",
  q3: "How do I book?",
  a3: "Use the form, or message us on WhatsApp, Viber, Instagram, or Facebook. You can also call 062 474998. A booking stands once we confirm it.",
  q4: "Do I need experience?",
  a4: "No. Beginners are welcome, and so is anyone coming back after a break.",
  q5: "What should I bring?",
  a5: "Training shoes, comfortable workout clothes, and water.",
  q6: "How much does it cost?",
  a6: "It depends on the service. Message or call and you'll get the exact price.",
  q7: "Do I need a booking for solo training?",
  a7: "A heads-up is welcome. Group sessions and 1-to-1 coaching are booked in advance.",
  q8: "Where can I follow you?",
  a8: "Instagram is @_alexgym__ and the Facebook page is ALEX GYM. For a quick answer, WhatsApp, Viber, and the phone are fastest.",
  "gal.kicker": "Gallery",
  "gal.title": "From the gym",
  "gal.lead": "Training, the gym floor, and the pace at ALEX GYM.",
  g1: "The gym",
  g2: "Group",
  g3: "1-to-1",
  g4: "Solo",
  g5: "Golubac",
  g6: "13:00–21:00",
  "book.kicker": "Booking",
  "book.title": "Book a session",
  "book.lead": "Pick a service, a day, and a time. The message goes to the gym's WhatsApp. The booking is confirmed when we reply.",
  "book.service": "Service",
  "book.day": "Day",
  "book.time": "Time",
  "book.name": "Full name",
  "book.phone": "Phone",
  "book.note": "Message",
  "book.ph": "A goal, your experience, or a question",
  "book.submit": "Send request",
  "book.hint": "Nothing is stored on the site. WhatsApp opens with the message ready.",
  "book.okTitle": "Your request is ready",
  "book.okText": "Open WhatsApp and send the message so we can confirm the time.",
  "book.wa": "Open WhatsApp",
  "book.copy": "Copy message",
  "book.again": "New request",
  "book.preview": "Message text",
  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.route": "Directions",
  "footer.tag": "Gym and fitness center · Golubac",
  "footer.rights": "All rights reserved.",
  "map.title": "ALEX GYM on the map",
  "lang.label": "Language",
};

const STR = {
  sr: {
    openMenu: "Meni",
    closeMenu: "Zatvori",
    today: "Danas",
    pickDay: "Prvo izaberi dan.",
    noSlots: "Nema slobodnih termina ovog dana.",
    copied: "Kopirano",
    errService: "Izaberi uslugu.",
    errDate: "Izaberi dan.",
    errTime: "Izaberi vreme.",
    errName: "Upiši ime i prezime.",
    errPhone: "Upiši ispravan telefon.",
    waHello: "Zdravo, ALEX GYM! Želim informaciju o treningu.",
    statusOpen: (h) => `Otvoreno · zatvara se u ${h}`,
    statusClosed: (h) => `Zatvoreno · otvara se u ${h}`,
    statusOff: "Danas ne radimo",
    metaTitle: "ALEX GYM Golubac | Teretana i fitnes centar",
    metaDesc: "Teretana ALEX GYM u Golupcu, Rudnička 9. Grupni treninzi, rad 1 na 1 i samostalni trening. Radno vreme 13:00–21:00. Zakaži termin.",
  },
  en: {
    openMenu: "Menu",
    closeMenu: "Close",
    today: "Today",
    pickDay: "Pick a day first.",
    noSlots: "No open slots on this day.",
    copied: "Copied",
    errService: "Choose a service.",
    errDate: "Choose a day.",
    errTime: "Choose a time.",
    errName: "Enter your name.",
    errPhone: "Enter a valid phone number.",
    waHello: "Hello, ALEX GYM! I'd like to know more about training.",
    statusOpen: (h) => `Open · closes at ${h}`,
    statusClosed: (h) => `Closed · opens at ${h}`,
    statusOff: "Closed today",
    metaTitle: "ALEX GYM Golubac | Gym and fitness center",
    metaDesc: "ALEX GYM in Golubac, Rudnička 9. Group sessions, 1-to-1 coaching, and solo training. Open 13:00–21:00. Book a session.",
  },
};

const DAY_NAME = {
  sr: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

const SR = { text: new Map(), placeholder: new Map(), aria: new Map(), title: new Map() };
const state = { lang: "sr", service: "", date: "", time: "" };
let lastMessage = "";

function t(key, ...args) {
  const pack = STR[state.lang] || STR.sr;
  const value = pack[key] ?? STR.sr[key];
  return typeof value === "function" ? value(...args) : value;
}

function belgradeNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((part) => part.type === type).value;
  let hour = get("hour");
  if (hour === "24") hour = "00";
  return {
    iso: `${get("year")}-${get("month")}-${get("day")}`,
    hour,
    minute: get("minute"),
  };
}

function weekdayIndex(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay();
}

function addDays(iso, amount) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d, 12));
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function toMin(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function fromMin(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatLong(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "sr" ? "sr-Latn-RS" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d, 12)));
}

function hoursSummary(lang) {
  const span = `${GYM.open}–${GYM.close}`;
  const days = [...GYM.days].sort((a, b) => a - b);
  if (days.length === 7) return lang === "sr" ? `Svaki dan · ${span}` : `Every day · ${span}`;
  const names = days.map((day) => DAY_NAME[lang][day]);
  return `${names.join(", ")} · ${span}`;
}

function ratingSummary(lang) {
  const n = lang === "sr" ? String(GYM.rating).replace(".", ",") : String(GYM.rating);
  return lang === "sr" ? `${n} · ${GYM.reviews} recenzija` : `${n} · ${GYM.reviews} reviews`;
}

function snapshotSr() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!SR.text.has(el.dataset.i18n)) SR.text.set(el.dataset.i18n, el.textContent);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    SR.placeholder.set(el.dataset.i18nPlaceholder, el.getAttribute("placeholder") || "");
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    SR.aria.set(el.dataset.i18nAria, el.getAttribute("aria-label") || "");
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    SR.title.set(el.dataset.i18nTitle, el.getAttribute("title") || "");
  });
}

function textFor(key) {
  if (state.lang === "en") return EN[key] ?? SR.text.get(key);
  return SR.text.get(key);
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "sr" ? "sr" : "en";
  try { localStorage.setItem("alexgym-lang", lang); } catch (err) { /* private mode */ }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = textFor(el.dataset.i18n);
    if (value != null) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = state.lang === "en" ? EN[key] : SR.placeholder.get(key);
    if (value != null) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    const value = state.lang === "en" ? EN[key] : SR.aria.get(key);
    if (value != null) el.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    const value = state.lang === "en" ? EN[key] : SR.title.get(key);
    if (value != null) el.setAttribute("title", value);
  });

  document.title = t("metaTitle");
  document.getElementById("meta-desc").setAttribute("content", t("metaDesc"));
  document.getElementById("og-title").setAttribute("content", t("metaTitle"));
  document.getElementById("og-desc").setAttribute("content", t("metaDesc"));
  document.getElementById("lang-sr").setAttribute("aria-pressed", lang === "sr" ? "true" : "false");
  document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");

  document.querySelectorAll("[data-hours]").forEach((el) => { el.textContent = hoursSummary(lang); });
  document.querySelectorAll("[data-rating]").forEach((el) => { el.textContent = ratingSummary(lang); });
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = `https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(t("waHello"))}`;
  });
  document.querySelectorAll(".tile.has-photo").forEach((tile) => {
    const img = tile.querySelector("img");
    const cap = tile.querySelector("figcaption");
    if (img && cap) img.alt = cap.textContent.trim();
  });

  labelToggle();
  renderStatus();
  renderDates();
  renderTimes();

  const success = document.getElementById("book-success");
  if (success && !success.hidden && state.service && state.date && state.time) {
    lastMessage = buildMessage();
    document.getElementById("book-preview").value = lastMessage;
    document.getElementById("wa-go").href = `https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(lastMessage)}`;
  }
}

function labelToggle() {
  const toggle = document.getElementById("nav-toggle");
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-label", open ? t("closeMenu") : t("openMenu"));
}

function renderStatus() {
  const now = belgradeNow();
  const mins = Number(now.hour) * 60 + Number(now.minute);
  const openToday = GYM.days.includes(weekdayIndex(now.iso));
  const el = document.getElementById("status");
  let open = false;
  let text;
  if (!openToday) text = t("statusOff");
  else if (mins >= toMin(GYM.open) && mins < toMin(GYM.close)) {
    open = true;
    text = t("statusOpen", GYM.close);
  } else text = t("statusClosed", GYM.open);
  el.textContent = text;
  el.classList.toggle("is-open", open);
  el.classList.toggle("is-closed", !open);
}

function renderDates() {
  const box = document.getElementById("dates");
  const today = belgradeNow().iso;
  box.replaceChildren();
  let iso = today;
  let count = 0;
  let guard = 0;
  while (count < 14 && guard < 40) {
    guard += 1;
    if (GYM.days.includes(weekdayIndex(iso))) {
      box.append(makeDay(iso, today));
      count += 1;
    }
    iso = addDays(iso, 1);
  }
  if (state.date && !box.querySelector(`[data-date="${state.date}"]`)) state.date = "";
}

function makeDay(iso, today) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d, 12));
  const locale = state.lang === "sr" ? "sr-Latn-RS" : "en-GB";
  const dow = iso === today
    ? t("today")
    : new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" }).format(date);
  const mon = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" }).format(date);
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "day";
  btn.dataset.date = iso;
  btn.setAttribute("role", "radio");
  const picked = state.date === iso;
  btn.setAttribute("aria-checked", picked ? "true" : "false");
  btn.classList.toggle("is-picked", picked);
  btn.setAttribute("aria-label", formatLong(iso, state.lang));
  const small1 = document.createElement("small");
  small1.textContent = dow.replace(".", "");
  const strong = document.createElement("b");
  strong.textContent = String(d);
  const small2 = document.createElement("small");
  small2.textContent = mon.replace(".", "");
  btn.append(small1, strong, small2);
  return btn;
}

function renderTimes() {
  const box = document.getElementById("times");
  const hint = document.getElementById("time-hint");
  box.replaceChildren();
  if (!state.date) {
    hint.hidden = false;
    hint.textContent = t("pickDay");
    return;
  }
  const now = belgradeNow();
  const nowMin = Number(now.hour) * 60 + Number(now.minute);
  let any = false;
  for (let mins = toMin(GYM.open); mins < toMin(GYM.close); mins += 30) {
    const label = fromMin(mins);
    const past = state.date === now.iso && mins <= nowMin;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot";
    btn.dataset.time = label;
    btn.textContent = label;
    btn.setAttribute("role", "radio");
    btn.disabled = past;
    const picked = !past && state.time === label;
    btn.setAttribute("aria-checked", picked ? "true" : "false");
    btn.classList.toggle("is-picked", picked);
    if (!past) any = true;
    box.append(btn);
  }
  if (state.time && !box.querySelector(".slot.is-picked")) state.time = "";
  hint.hidden = any;
  hint.textContent = any ? "" : t("noSlots");
}

function syncService() {
  document.querySelectorAll("#choices [data-service]").forEach((btn) => {
    const on = btn.dataset.service === state.service;
    btn.setAttribute("aria-checked", on ? "true" : "false");
    btn.classList.toggle("is-picked", on);
  });
}

function clearErr(name) {
  const el = document.getElementById(`err-${name}`);
  if (el) el.textContent = "";
}

function showForm() {
  document.getElementById("book-form").hidden = false;
  document.getElementById("book-success").hidden = true;
}

function buildMessage() {
  const serviceName = document.querySelector(`#choices [data-service="${state.service}"] span`).textContent.trim();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const note = document.getElementById("note").value.trim();
  const when = formatLong(state.date, state.lang);
  if (state.lang === "sr") {
    const lines = [
      "Zdravo, ALEX GYM!",
      "",
      "Želim da zakažem termin.",
      `Ime: ${name}`,
      `Telefon: ${phone}`,
      `Usluga: ${serviceName}`,
      `Datum: ${when}`,
      `Vreme: ${state.time}`,
    ];
    if (note) lines.push(`Poruka: ${note}`);
    return lines.join("\n");
  }
  const lines = [
    "Hello, ALEX GYM!",
    "",
    "I would like to book a session.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${serviceName}`,
    `Date: ${when}`,
    `Time: ${state.time}`,
  ];
  if (note) lines.push(`Note: ${note}`);
  return lines.join("\n");
}

function validate() {
  const errors = [];
  clearErr("service");
  clearErr("date");
  clearErr("time");
  clearErr("name");
  clearErr("phone");
  if (!state.service) {
    document.getElementById("err-service").textContent = t("errService");
    errors.push(t("errService"));
  }
  if (!state.date) {
    document.getElementById("err-date").textContent = t("errDate");
    errors.push(t("errDate"));
  }
  if (!state.time) {
    document.getElementById("err-time").textContent = t("errTime");
    errors.push(t("errTime"));
  }
  const name = document.getElementById("name").value.trim();
  if (name.length < 2 || !/\p{L}/u.test(name)) {
    document.getElementById("err-name").textContent = t("errName");
    errors.push(t("errName"));
  }
  const digits = document.getElementById("phone").value.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    document.getElementById("err-phone").textContent = t("errPhone");
    errors.push(t("errPhone"));
  }
  document.getElementById("form-live").textContent = errors.join(" ");
  return errors.length === 0;
}

function probe(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function loadPhotos() {
  const exts = ["jpg", "jpeg", "png", "webp"];
  const tiles = [...document.querySelectorAll("[data-photo]")];
  await Promise.all(tiles.map(async (tile) => {
    for (const ext of exts) {
      const url = `${tile.dataset.photo}.${ext}`;
      if (!(await probe(url))) continue;
      const img = tile.querySelector("img");
      const cap = tile.querySelector("figcaption");
      img.src = url;
      img.alt = cap ? cap.textContent.trim() : "ALEX GYM";
      img.hidden = false;
      tile.classList.add("has-photo");
      break;
    }
  }));
}

function bind() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");

  function setNav(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    labelToggle();
  }

  toggle.addEventListener("click", () => setNav(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNav(false);
  });

  document.getElementById("lang-sr").addEventListener("click", () => applyLanguage("sr"));
  document.getElementById("lang-en").addEventListener("click", () => applyLanguage("en"));

  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.getElementById("choices").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-service]");
    if (!btn) return;
    state.service = btn.dataset.service;
    syncService();
    clearErr("service");
  });

  document.querySelectorAll("[data-service-jump]").forEach((link) => {
    link.addEventListener("click", () => {
      state.service = link.dataset.serviceJump;
      syncService();
      showForm();
      clearErr("service");
    });
  });

  document.getElementById("dates").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-date]");
    if (!btn) return;
    state.date = btn.dataset.date;
    state.time = "";
    document.querySelectorAll("#dates [data-date]").forEach((day) => {
      const on = day.dataset.date === state.date;
      day.setAttribute("aria-checked", on ? "true" : "false");
      day.classList.toggle("is-picked", on);
    });
    renderTimes();
    clearErr("date");
    clearErr("time");
  });

  document.getElementById("times").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-time]");
    if (!btn || btn.disabled) return;
    state.time = btn.dataset.time;
    document.querySelectorAll("#times [data-time]").forEach((slot) => {
      const on = slot.dataset.time === state.time;
      slot.setAttribute("aria-checked", on ? "true" : "false");
      slot.classList.toggle("is-picked", on);
    });
    clearErr("time");
  });

  document.getElementById("book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validate()) return;
    lastMessage = buildMessage();
    const url = `https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(lastMessage)}`;
    const preview = document.getElementById("book-preview");
    preview.value = lastMessage;
    document.getElementById("wa-go").href = url;
    document.getElementById("book-form").hidden = true;
    document.getElementById("book-success").hidden = false;
    document.getElementById("book-success").scrollIntoView({ block: "center" });
    window.open(url, "_blank", "noopener");
  });

  document.getElementById("copy-msg").addEventListener("click", async () => {
    const btn = document.getElementById("copy-msg");
    try {
      await navigator.clipboard.writeText(lastMessage);
    } catch (err) {
      const preview = document.getElementById("book-preview");
      preview.focus();
      preview.select();
      document.execCommand("copy");
    }
    btn.textContent = t("copied");
    setTimeout(() => { btn.textContent = textFor("book.copy"); }, 1800);
  });

  document.getElementById("reset-book").addEventListener("click", () => {
    state.service = "";
    state.date = "";
    state.time = "";
    document.getElementById("book-form").reset();
    syncService();
    renderDates();
    renderTimes();
    showForm();
  });

  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const on = link.getAttribute("href") === `#${entry.target.id}`;
        if (on) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach((section) => observer.observe(section));

  setInterval(renderStatus, 60000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") renderStatus();
  });
}

snapshotSr();
let saved = "sr";
try { saved = localStorage.getItem("alexgym-lang") || "sr"; } catch (err) { saved = "sr"; }
applyLanguage(saved === "en" ? "en" : "sr");
document.getElementById("year").textContent = String(new Date().getFullYear());
bind();
loadPhotos();
