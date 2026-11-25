(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var P = D.profile;

  /* ---------- UI mətnləri ---------- */
  var UI = {
    az: {
      skip: "Məzmuna keç",
      "nav.about": "Haqqımda", "nav.experience": "Təcrübə", "nav.projects": "Layihələr",
      "nav.skills": "Bacarıqlar", "nav.education": "Təhsil", "nav.contact": "Əlaqə",
      "cta.cv": "CV yüklə",
      "projects.lead": "Rəhbərlik etdiyim və iştirak etdiyim seçilmiş layihələr.",
      "certs.title": "Sertifikatlar",
      "contact.title": "Gəlin birlikdə işləyək",
      "contact.lead": "Layihə, əməkdaşlıq və ya iş təklifi üçün mənimlə istənilən kanal vasitəsilə əlaqə saxlaya bilərsiniz.",
      backTop: "Yuxarı qayıt ↑",
      "dock.call": "Zəng", "dock.mail": "E-poçt",
      present: "İndi", all: "Hamısı", visit: "Sayta bax", featured: "Layihələr",
      facts: { now: "Hazırda", edu: "Təhsil", langs: "Dillər", loc: "Məkan" },
      certsMore: "Hamısını göstər", certsLess: "Daha az göstər",
      copy: "Kopyala", copied: "Kopyalandı", shared: "Link kopyalandı",
      share: "Paylaş", call: "Zəng et", write: "Yaz",
      labels: { email: "E-poçt", phone: "Telefon", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub" },
      months: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen", "Okt", "Noy", "Dek"]
    },
    en: {
      skip: "Skip to content",
      "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects",
      "nav.skills": "Skills", "nav.education": "Education", "nav.contact": "Contact",
      "cta.cv": "Download CV",
      "projects.lead": "Selected projects I have led and contributed to.",
      "certs.title": "Certifications",
      "contact.title": "Let’s work together",
      "contact.lead": "For projects, collaboration or job opportunities, reach me through any channel below.",
      backTop: "Back to top ↑",
      "dock.call": "Call", "dock.mail": "Email",
      present: "Present", all: "All", visit: "Visit site", featured: "Projects",
      facts: { now: "Currently", edu: "Education", langs: "Languages", loc: "Location" },
      certsMore: "Show all", certsLess: "Show less",
      copy: "Copy", copied: "Copied", shared: "Link copied",
      share: "Share", call: "Call", write: "Write",
      labels: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub" },
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  };

  /* ---------- İkonlar ---------- */
  var ICON = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg>'
  };

  /* ---------- Köməkçilər ---------- */
  var lang = "az";
  var $ = function (s) { return document.querySelector(s); };
  var t = function (v) { return v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.en || v.az) : v; };
  var u = function (k) { return UI[lang][k]; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var tel = "tel:" + P.phone.replace(/\s+/g, "");
  var mail = "mailto:" + P.email;
  var wa = "https://wa.me/" + P.whatsapp;

  function fmtDate(s) {
    if (s === "present") return u("present");
    var p = s.split("-");
    return p.length === 2 ? u("months")[+p[1] - 1] + " " + p[0] : p[0];
  }
  function range(a, b) { return a === b ? fmtDate(a) : fmtDate(a) + " – " + fmtDate(b); }
  function domain(url) { return url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]; }
  function initials(name) {
    var w = name.replace(/[^A-Za-zƏəİıÖöÜüŞşÇçĞğ\s-]/g, "").split(/[\s-]+/).filter(Boolean);
    return (w[0][0] + (w[1] ? w[1][0] : w[0][1] || "")).toUpperCase();
  }
  function findProject(name) { return D.projects.filter(function (p) { return p.name === name; })[0]; }

  var toastTimer;
  function toast(msg) {
    var el = $("#toast"); el.textContent = msg; el.classList.add("is-on");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove("is-on"); }, 1800);
  }
  function copy(text, msg) {
    var done = function () { toast(msg || u("copied")); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {} document.body.removeChild(ta);
    }
  }
  function share() {
    var data = { title: P.name, text: P.name + " — " + t(P.role), url: location.href.split("#")[0] };
    if (navigator.share) navigator.share(data).catch(function () {});
    else copy(data.url, u("shared"));
  }

  /* ---------- Render ---------- */
  function renderStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = u(el.getAttribute("data-i18n")); if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang);
    });

    $("#location").textContent = t(P.location);
    $("#role").textContent = t(P.role);
    $("#intro").textContent = t(P.intro);
    $("#summary").textContent = t(P.summary);
    $("#cvLink").href = $("#dockCv").href = P.cv;
    $("#dockCall").href = tel;
    $("#dockMail").href = mail;
    $("#year").textContent = new Date().getFullYear();
  }

  function renderSocials() {
    var items = [
      { k: "phone", href: tel, label: u("labels").phone },
      { k: "mail", href: mail, label: u("labels").email },
      { k: "whatsapp", href: wa, label: "WhatsApp", ext: true },
      { k: "linkedin", href: P.linkedin, label: "LinkedIn", ext: true },
      { k: "github", href: P.github, label: "GitHub", ext: true }
    ];
    $("#socials").innerHTML = items.map(function (i) {
      return '<li><a class="icon-btn icon-btn--lg" href="' + i.href + '" aria-label="' + i.label + '" title="' + i.label + '"' +
        (i.ext ? ' target="_blank" rel="noopener"' : "") + ">" + ICON[i.k] + "</a></li>";
    }).join("") +
      '<li><button type="button" class="icon-btn icon-btn--lg" id="shareBtn" aria-label="' + u("share") + '" title="' + u("share") + '">' + ICON.share + "</button></li>";
    $("#shareBtn").addEventListener("click", share);
  }

  function renderStats() {
    $("#stats").innerHTML = P.stats.map(function (s) {
      return '<div class="stat"><dt>' + esc(t(s.label)) + "</dt><dd>" + esc(s.value) + "</dd></div>";
    }).join("");
  }

  function renderFacts() {
    var f = u("facts"), cur = D.experience[0], edu = D.education[0];
    var langs = P.languages.map(function (l) {
      return '<li><span>' + esc(t(l.name)) + '</span><span class="muted">' + esc(t(l.level)) +
        '</span><span class="bar"><span style="width:' + l.pct + '%"></span></span></li>';
    }).join("");
    $("#facts").innerHTML =
      '<div class="fact">' + ICON.briefcase + '<div><span class="fact__k">' + f.now + '</span><span class="fact__v">' +
        esc(t(cur.role)) + " · " + esc(cur.company) + "</span></div></div>" +
      '<div class="fact">' + ICON.cap + '<div><span class="fact__k">' + f.edu + '</span><span class="fact__v">' +
        esc(t(edu.degree)) + '</span><span class="fact__s">' + esc(t(edu.school)) + "</span></div></div>" +
      '<div class="fact">' + ICON.globe + '<div class="grow"><span class="fact__k">' + f.langs + '</span><ul class="langs">' + langs + "</ul></div></div>";
  }

  function renderTimeline() {
    $("#timeline").innerHTML = D.experience.map(function (e) {
      var pts = (t(e.points) || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      var proj = (e.projects || []).map(function (n) {
        var p = findProject(n);
        return p ? '<a class="chip chip--link" href="' + p.url + '" target="_blank" rel="noopener">' + esc(n) + ICON.arrow + "</a>"
                 : '<span class="chip">' + esc(n) + "</span>";
      }).join("");
      var current = e.end === "present";
      return '<li class="tl reveal">' +
        '<div class="tl__date">' + (current ? '<span class="live" aria-hidden="true"></span>' : "") + range(e.start, e.end) + "</div>" +
        '<div class="tl__card">' +
          "<h3>" + esc(t(e.role)) + "</h3>" +
          '<p class="tl__co">' + esc(e.company) + "</p>" +
          '<ul class="tl__pts">' + pts + "</ul>" +
          (proj ? '<div class="tl__proj"><span class="tl__label">' + u("featured") + ":</span>" + proj + "</div>" : "") +
        "</div></li>";
    }).join("");
  }

  var activeFilter = "all";
  function renderFilters() {
    var cats = Object.keys(D.projectCategories).filter(function (k) {
      return D.projects.some(function (p) { return p.category === k; });
    });
    var btn = function (k, label, n) {
      return '<button type="button" role="tab" data-filter="' + k + '" aria-selected="' + (activeFilter === k) + '">' +
        esc(label) + ' <span class="count">' + n + "</span></button>";
    };
    $("#filters").innerHTML = btn("all", u("all"), D.projects.length) + cats.map(function (k) {
      return btn(k, t(D.projectCategories[k].label), D.projects.filter(function (p) { return p.category === k; }).length);
    }).join("");
    $("#filters").querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { activeFilter = b.getAttribute("data-filter"); renderFilters(); renderProjects(); });
    });
  }

  function renderProjects() {
    var list = D.projects.filter(function (p) { return activeFilter === "all" || p.category === activeFilter; });
    $("#projectGrid").innerHTML = list.map(function (p) {
      var c = D.projectCategories[p.category];
      return '<a class="proj" href="' + p.url + '" target="_blank" rel="noopener">' +
        '<div class="proj__top"><span class="proj__mono" data-cat="' + p.category + '">' + initials(p.name) + "</span>" +
          '<span class="proj__go" aria-hidden="true">' + ICON.arrow + "</span></div>" +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="proj__domain">' + esc(domain(p.url)) + "</p>" +
        '<p class="proj__desc">' + esc(t(p.desc) || t(c.desc)) + "</p>" +
        '<div class="proj__meta"><span class="tag" data-cat="' + p.category + '">' + esc(t(c.label)) + "</span>" +
          '<span class="muted">' + esc(p.company) + "</span></div>" +
        '<span class="sr-only">' + u("visit") + "</span></a>";
    }).join("");
  }

  function renderSkills() {
    $("#skillGrid").innerHTML = D.skills.map(function (g) {
      var items = Array.isArray(g.items) ? g.items : t(g.items);
      return '<div class="skill reveal"><h3>' + esc(t(g.title)) + '</h3><ul class="chips">' +
        items.map(function (s) { return '<li class="chip">' + esc(s) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  function renderEducation() {
    $("#eduList").innerHTML = D.education.map(function (e) {
      if (e.featured) {
        var live = e.end === "present";
        return '<li class="edu__item edu__item--featured reveal">' +
          '<div class="edu__top"><span class="edu__icon">' + ICON.cap + "</span>" +
            '<span class="edu__level">' + esc(t(e.level)) + "</span></div>" +
          '<div class="edu__body"><h3>' + esc(t(e.degree)) + "</h3><p>" + esc(t(e.school)) + "</p></div>" +
          '<span class="edu__date">' + (live ? '<span class="live" aria-hidden="true"></span>' : "") +
            range(e.start, e.end) + "</span></li>";
      }
      return '<li class="edu__item reveal"><span class="edu__icon">' + ICON.cap + "</span>" +
        '<div class="edu__body"><h3>' + esc(t(e.degree)) + "</h3><p>" + esc(t(e.school)) + "</p></div>" +
        '<span class="edu__date">' + range(e.start, e.end) + "</span></li>";
    }).join("");
  }

  var certsOpen = false;
  function renderCerts() {
    $("#certs").innerHTML = D.certifications.map(function (g, i) {
      return '<div class="cert' + (i > 1 ? " cert--extra" : "") + '"><div class="cert__head">' + ICON.award +
        "<h4>" + esc(t(g.issuer)) + '</h4><span class="count">' + g.items.length + "</span></div><ul>" +
        g.items.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    $("#certs").classList.toggle("is-open", certsOpen);
    $("#certsMore").textContent = certsOpen ? u("certsLess") : u("certsMore");
    $("#certsMore").setAttribute("aria-expanded", certsOpen);
  }

  function renderContact() {
    var L = u("labels");
    var rows = [
      { k: "mail", label: L.email, value: P.email, href: mail, copy: P.email },
      { k: "phone", label: L.phone, value: P.phone, href: tel, copy: P.phone },
      { k: "whatsapp", label: L.whatsapp, value: P.phone, href: wa, ext: true },
      { k: "linkedin", label: L.linkedin, value: "in/allahverdi-ibrahimov042", href: P.linkedin, ext: true },
      { k: "github", label: L.github, value: "github.com/brhmv", href: P.github, ext: true }
    ];
    $("#contactList").innerHTML = rows.map(function (r) {
      return '<li class="crow"><a class="crow__main" href="' + r.href + '"' + (r.ext ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<span class="crow__icon">' + ICON[r.k] + '</span><span class="crow__text"><span class="crow__k">' + r.label +
        '</span><span class="crow__v">' + esc(r.value).replace("@", "@<wbr>") + "</span></span></a>" +
        (r.copy ? '<button type="button" class="icon-btn crow__copy" data-copy="' + esc(r.copy) + '" aria-label="' + u("copy") + " " + r.label + '" title="' + u("copy") + '">' + ICON.copy + "</button>"
                : '<span class="crow__arrow" aria-hidden="true">' + ICON.arrow + "</span>") +
        "</li>";
    }).join("");
    $("#contactList").querySelectorAll("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () { copy(b.getAttribute("data-copy")); });
    });
  }

  function renderAll() {
    renderStatic(); renderSocials(); renderStats(); renderFacts(); renderTimeline();
    renderFilters(); renderProjects(); renderSkills(); renderEducation(); renderCerts(); renderContact();
    observeReveal();
  }

  /* ---------- Dil ---------- */
  function setLang(l) {
    lang = UI[l] ? l : "az";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  }
  (function initLang() {
    var q = new URLSearchParams(location.search).get("lang"), saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    lang = UI[q] ? q : UI[saved] ? saved : "az";
  })();
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- Tema ---------- */
  $("#themeToggle").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Sertifikatlar ---------- */
  $("#certsMore").addEventListener("click", function () {
    certsOpen = !certsOpen; renderCerts();
    if (!certsOpen) document.getElementById("certs").scrollIntoView({ block: "nearest" });
  });

  /* ---------- Animasiya və naviqasiya ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = !reduce && "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function observeReveal() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    });
  }
  if (io) document.documentElement.classList.add("anim");

  var links = document.querySelectorAll(".nav a");
  if ("IntersectionObserver" in window) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { navIO.observe(s); });
  }

  var topbar = $("#topbar"), dock = $("#dock");
  function onScroll() {
    var y = window.scrollY;
    topbar.classList.toggle("is-scrolled", y > 8);
    dock.classList.toggle("is-on", y > 320);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  renderAll();
  onScroll();
})();
