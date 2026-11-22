export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];

export const LOCALE_STORAGE_KEY = "clearbison.lang";

type Severity = "critical" | "high" | "medium";

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    product: string;
    difference: string;
    options: string;
    trust: string;
    faq: string;
    talk: string;
    langAria: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    lead: string;
    ctaOptions: string;
    ctaTalk: string;
    assurances: { label: string; href: string }[];
  };
  console: {
    title: string;
    command: string;
    passes: { name: string; note: string; hits: string }[];
    findingsLabel: string;
    summary: string;
    written: string;
    cta: string;
  };
  facts: { value: string; label: string }[];
  coverage: {
    label: string;
    items: string[];
  };
  board: {
    rows: { level: Severity; label: string; where: string; fix: string }[];
  };
  difference: {
    kicker: string;
    title: string;
    lead: string;
    themTitle: string;
    themCount: string;
    them: string[];
    usTitle: string;
    usCount: string;
    us: string[];
  };
  product: {
    kicker: string;
    title: string;
    lead: string;
    reportTitle: string;
    reportBody: string;
    reportFinding: string;
    reportFixLabel: string;
    f1Title: string;
    f1Body: string;
    f1Meta: string;
    f2Title: string;
    f2Body: string;
    f2Status: string;
    f3Title: string;
    f3Body: string;
    f3Badge: string;
  };
  steps: {
    kicker: string;
    title: string;
    items: { title: string; body: string }[];
  };
  options: {
    kicker: string;
    title: string;
    lead: string;
    requestQuote: string;
    startHere: string;
    includedLabel: string;
    youLabel: string;
    outsideLabel: string;
    generalCta: string;
    generalHint: string;
    note: string;
    items: Record<
      string,
      { tag: string; title: string; blurb: string; points: [string, string, string] }
    >;
  };
  trust: {
    kicker: string;
    title: string;
    points: { title: string; body: string }[];
    panelTitle: string;
    panelBody: string;
    panelSign: string;
    panelCta: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
  founding: {
    kicker: string;
    title: string;
    lead: string;
    points: string[];
    cta: string;
  };
  contact: {
    title: string;
    lead: string;
    name: string;
    email: string;
    option: string;
    optionBlank: string;
    optionLabels: Record<string, string>;
    message: string;
    submit: string;
    submitting: string;
    fail: string;
    network: string;
    okFallback: string;
  };
  footer: {
    productOf: string;
    brand: string;
    backTop: string;
    legal: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    metaTitle: "ClearBison: security scans you can patch from",
    metaDescription:
      "ClearBison runs authorized security scans on code you own or systems you control, then hands you findings you can fix. I quote after a short call. No public price list.",
    nav: {
      product: "Product",
      difference: "Why us",
      options: "Options",
      trust: "Trust",
      faq: "FAQ",
      talk: "Book a call",
      langAria: "Language",
    },
    hero: {
      eyebrow: "Founding engagements open · limited slots",
      titleBefore: "Find the risks in your code. ",
      titleEm: "Patch them",
      titleAfter: " before anyone else does.",
      lead: "Authorized scans on the repositories and hostnames you control. Every finding comes with the file, the line, and a next step. The person who ran the scan joins the call.",
      ctaOptions: "See the four options",
      ctaTalk: "Book a scoping call",
      assurances: [
        { label: "Authorized targets only", href: "#trust" },
        { label: "Confidential by default", href: "#trust" },
        { label: "A person on the delivery", href: "#trust" },
      ],
    },
    console: {
      title: "clearbison: scan",
      command: "clearbison scan ./acme-api --passes safe,code,misconfig",
      passes: [
        { name: "safe", note: "secrets & keys", hits: "1 hit" },
        { name: "code", note: "code rules", hits: "1 hit" },
        { name: "misconfig", note: "config & routes", hits: "1 hit" },
      ],
      findingsLabel: "Findings",
      summary: "3 findings · 0 model calls",
      written: "report written → report/acme-api.md",
      cta: "Run this on my code",
    },
    facts: [
      { value: "1", label: "repository or hostname per job. Never a credit pack." },
      { value: "0", label: "model calls in the local passes." },
      { value: "file:line", label: "on every finding, with a next step." },
      { value: "1:1", label: "with the founder, not a ticket queue." },
    ],
    coverage: {
      label: "What a scan looks for",
      items: [
        "Hard-coded secrets",
        "Skippable auth checks",
        "Open admin routes",
        "Injection sinks",
        "Committed .env files",
        "Weak session handling",
        "Permissive CORS",
        "Missing security headers",
        "Debug endpoints left on",
        "Insecure defaults",
        "Exposed config files",
        "Unsafe file handling",
      ],
    },
    board: {
      rows: [
        { level: "critical", label: "Critical", where: "src/api/session.ts:88", fix: "Session check can be skipped" },
        { level: "high", label: "High", where: "deploy/.env.example:4", fix: "Secret committed next to the app" },
        { level: "medium", label: "Medium", where: "app/admin/page.tsx:19", fix: "Admin route left open" },
      ],
    },
    difference: {
      kicker: "Why ClearBison",
      title: "Less noise. More patches.",
      lead: "Most scanners sell seats and credit packs, then leave you alone with the output. ClearBison sells a bounded job: one repository or one hostname, a report you can patch against, and a founder who gets on the call.",
      themTitle: "Typical SaaS scanner",
      themCount: "Thousands of rows. Nobody to read them with.",
      them: [
        "You log in yourself, burn credits, and sort generic severity noise alone.",
        "Thousands of findings land with nobody to help you read them.",
        "A support queue opens when the report does not match the code.",
        "A published rate card caps the conversation before it starts.",
      ],
      usTitle: "ClearBison",
      usCount: "The findings that matter, each pinned to a line.",
      us: [
        "I size the work to one repository or one hostname.",
        "Reports you can patch against, plus a fix branch when you buy that option.",
        "Scoping and trust questions come to me, not a ticket queue.",
        "The number arrives in writing after a short call.",
      ],
    },
    product: {
      kicker: "Product",
      title: "Find the risk. Then actually fix it.",
      lead: "ClearBison is the scanner I ship for repositories and authorized hostnames. It writes reports you can act on, and it never calls anything certified safe.",
      reportTitle: "A report you can patch from",
      reportBody: "Every finding names the file and line, explains why it matters, and suggests the next step. You won't get a severity dump.",
      reportFinding: "Session check can be skipped when the header is missing",
      reportFixLabel: "Suggested next step",
      f1Title: "Local passes, no model",
      f1Body: "The safe, code-rule, and misconfiguration passes read a directory you own. They do not call a model and do not change your files.",
      f1Meta: "model calls",
      f2Title: "Only targets you prove you own",
      f2Body: "A non-local URL is not tested until you prove you control that name. The gate lives in the tool, not just on this page.",
      f2Status: "ownership verified",
      f3Title: "Deeper runs when patterns aren't enough",
      f3Body: "Optional model-directed runs add reasoning on top of the local passes, and they stay non-destructive.",
      f3Badge: "non-destructive",
    },
    steps: {
      kicker: "How it works",
      title: "Three moves. Then a report you can use.",
      items: [
        {
          title: "Name the target",
          body: "A repository or a hostname you control. I confirm the boundary before anything runs.",
        },
        {
          title: "I run the option",
          body: "Local passes, plus a non-destructive model pass when your option includes one.",
        },
        {
          title: "You get the work",
          body: "A report you can patch from. A fix branch only when that option includes it.",
        },
      ],
    },
    options: {
      kicker: "Options",
      title: "Four options. One written quote.",
      lead: "There are no dollar amounts on this site. I quote once I understand the scope, then confirm it in writing.",
      requestQuote: "Request a scoped quote",
      startHere: "Most teams start here",
      includedLabel: "Included",
      youLabel: "Your part",
      outsideLabel: "Not included",
      generalCta: "Something else? Write me generally",
      generalHint:
        "If you are not sure which option fits, describe the system and I will size it with you.",
      note: "Mac and Windows packages exist, but they are not part of Self-run until a scan has been proven on those machines. There is no monitoring SLA and no 24/7 coverage. A clean report does not mean the system cannot be breached.",
      items: {
        package: {
          tag: "Self-run",
          title: "Package and session",
          blurb:
            "You keep the scanner. In one working session I get the three local passes running on your Linux machine.",
          points: [
            "The Linux package, the setup session, and the safe, code, and misconfig passes.",
            "You run later scans yourself and read the reports.",
            "Mac, Windows, website targets, and me reading the report after the session.",
          ],
        },
        "repo-scan": {
          tag: "Repo scan",
          title: "I scan one repository",
          blurb:
            "You send one repository. I run the scans, including one non-destructive model-directed pass, and hand you the reports.",
          points: [
            "The operated scans, report delivery, and confirmed deletion of your copy.",
            "You fix the code. I do not change it in this option.",
            "A second repository, a live website, and proof that every line is exploitable.",
          ],
        },
        "domain-scan": {
          tag: "Url scan",
          title: "I scan one hostname",
          blurb:
            "You prove you own the domain. I run the URL programs and deliver every report they write, without destructive testing.",
          points: [
            "Ownership-gated URL scans and the full report set for that hostname.",
            "You supply the ownership proof. Your source tree stays with you.",
            "Source changes, a second hostname, and a certificate of safety.",
          ],
        },
        "scan-fix": {
          tag: "Scan+Fix",
          title: "Scan, fix what fits, verify",
          blurb:
            "The Repo scan, then up to two days of local fixes from that report, largest first, with verification re-runs.",
          points: [
            "The scans, a focused remediation branch, and a list of what I did not touch.",
            "Verification re-runs the same three local passes.",
            "Redesigns, new auth systems, dependency migrations, and a second repository.",
          ],
        },
      },
    },
    trust: {
      kicker: "Trust",
      title: "You talk to the person who ships the work.",
      points: [
        {
          title: "One accountable seat",
          body: "Scoping calls, quote walkthroughs, and delivery questions come to me. You are not handed to a rotating queue.",
        },
        {
          title: "Authorized use only",
          body: "I only scan systems you own or are explicitly allowed to test. Ownership proof gates anything that is not local.",
        },
        {
          title: "Confidential by default",
          body: "Your code, access, and findings are confidential for the engagement, as if an NDA were already signed. I will sign yours when you need it on paper.",
        },
        {
          title: "Integrity and privacy",
          body: "Your materials stay inside the scoped job. I don't sell them, reuse them for other clients, or keep a copy past delivery when the option says they are deleted.",
        },
        {
          title: "LLMs, on your terms",
          body: "Optional model-directed passes can use LLMs. Local rule passes do not. When you require a specific provider, we use yours.",
        },
        {
          title: "Honest limits",
          body: "Findings help you improve the system. They are not a certificate of safety, and they do not prove whether a breach already happened.",
        },
      ],
      panelTitle: "How a quote is made",
      panelBody:
        "A short call comes first. I size the package (Self-run, Repo scan, Url scan, or Scan+Fix), confirm access, and send a written proposal. Diagnostics are paid. Fixes beyond the package are quoted separately before they start.",
      panelSign: "The founder, ClearBison",
      panelCta: "Book the scoping call",
    },
    faq: {
      kicker: "FAQ",
      title: "Questions before you book.",
      items: [
        {
          q: "Why no public prices?",
          a: "Every job is scoped to one repository or one hostname, so a rate card would be wrong for most people. You get the number in writing after a short call. Diagnostics are paid.",
        },
        {
          q: "Does my code leave my control?",
          a: "Only in the options where you send it. For Repo scan and Scan+Fix, your copy is deleted after delivery and I confirm it. With Self-run, everything stays on your machine.",
        },
        {
          q: "Do you send my code to an AI model?",
          a: "The local passes never call a model. Optional model-directed passes are non-destructive, and if you require a specific provider, we use yours.",
        },
        {
          q: "Can you scan a site I don't own?",
          a: "No. A non-local URL is not tested until you prove you control that name. The ownership gate is enforced by the tool.",
        },
        {
          q: "Does a clean report mean we're safe?",
          a: "No. A report helps you find and patch risk. It is not a certificate of safety, and it does not prove whether a breach already happened.",
        },
        {
          q: "What happens after I send the form?",
          a: "I reply with a time for a short scoping call, then send a written proposal the same week.",
        },
      ],
    },
    founding: {
      kicker: "Founding engagements",
      title: "Open with someone who will still be here after the report.",
      lead: "ClearBison is opening with a short founding window, with no public price list and no coupon gimmicks. You get a scoped engagement, a written proposal the same week as the call, and direct access to the founder who runs the scan.",
      points: [
        "Limited founding slots while the product opens.",
        "Same-week written proposal after a short scoping call.",
        "Clear boundaries in writing before any scan starts.",
      ],
      cta: "Request a founding scoping call",
    },
    contact: {
      title: "Tell me what to look at.",
      lead: "Pick an option or describe the system. I reply with a time for a short scoping call.",
      name: "Name",
      email: "Work email",
      option: "Option",
      optionBlank: "General inquiry. I am not sure yet",
      optionLabels: {
        package: "Self-run",
        "repo-scan": "Repo scan",
        "domain-scan": "Url scan",
        "scan-fix": "Scan+Fix",
      },
      message: "What should I look at?",
      submit: "Request a scoping call",
      submitting: "Sending…",
      fail: "The request failed. Try again in a moment.",
      network: "Network error. Try again in a moment.",
      okFallback: "Received. I will reply shortly.",
    },
    footer: {
      productOf: "A product of",
      brand: "LogicBison.com",
      backTop: "Back to top",
      legal:
        "ClearBison tools are for legal and ethical use only, on your own applications or on systems you are explicitly authorized to test. Reports detect and describe risk so it can be patched. They do not certify that a system is safe.",
    },
  },
  es: {
    metaTitle: "ClearBison: escaneos de seguridad que puedes corregir",
    metaDescription:
      "ClearBison ejecuta escaneos de seguridad autorizados sobre código o sistemas que controlas, y te entrega hallazgos que puedes corregir. Cotizo después de una llamada corta. Sin lista de precios pública.",
    nav: {
      product: "Producto",
      difference: "Por qué",
      options: "Opciones",
      trust: "Confianza",
      faq: "FAQ",
      talk: "Agendar llamada",
      langAria: "Idioma",
    },
    hero: {
      eyebrow: "Plazas fundacionales abiertas · cupos limitados",
      titleBefore: "Encuentra los riesgos en tu código. ",
      titleEm: "Parchéalos",
      titleAfter: " antes de que otro los encuentre.",
      lead: "Escaneos autorizados sobre los repositorios y hostnames que controlas. Cada hallazgo trae archivo, línea y un siguiente paso. La persona que ejecutó el escaneo se sube a la llamada.",
      ctaOptions: "Ver las cuatro opciones",
      ctaTalk: "Agendar llamada de alcance",
      assurances: [
        { label: "Solo objetivos autorizados", href: "#trust" },
        { label: "Confidencial por defecto", href: "#trust" },
        { label: "Una persona en la entrega", href: "#trust" },
      ],
    },
    console: {
      title: "clearbison: escaneo",
      command: "clearbison scan ./acme-api --passes safe,code,misconfig",
      passes: [
        { name: "safe", note: "secretos y llaves", hits: "1 hallazgo" },
        { name: "code", note: "reglas de código", hits: "1 hallazgo" },
        { name: "misconfig", note: "config y rutas", hits: "1 hallazgo" },
      ],
      findingsLabel: "Hallazgos",
      summary: "3 hallazgos · 0 llamadas a modelo",
      written: "reporte escrito → report/acme-api.md",
      cta: "Correr esto en mi código",
    },
    facts: [
      { value: "1", label: "repositorio o hostname por trabajo. Nunca un paquete de créditos." },
      { value: "0", label: "llamadas a modelo en los pases locales." },
      { value: "archivo:línea", label: "en cada hallazgo, con un siguiente paso." },
      { value: "1:1", label: "con el fundador, no con una cola de tickets." },
    ],
    coverage: {
      label: "Qué busca un escaneo",
      items: [
        "Secretos en el código",
        "Chequeos de auth saltables",
        "Rutas de admin abiertas",
        "Puntos de inyección",
        "Archivos .env commiteados",
        "Manejo débil de sesión",
        "CORS permisivo",
        "Headers de seguridad faltantes",
        "Endpoints de debug activos",
        "Valores inseguros por defecto",
        "Archivos de config expuestos",
        "Manejo inseguro de archivos",
      ],
    },
    board: {
      rows: [
        { level: "critical", label: "Crítico", where: "src/api/session.ts:88", fix: "La sesión se puede saltar" },
        { level: "high", label: "Alto", where: "deploy/.env.example:4", fix: "Secreto junto a la app" },
        { level: "medium", label: "Medio", where: "app/admin/page.tsx:19", fix: "Ruta de admin abierta" },
      ],
    },
    difference: {
      kicker: "Por qué ClearBison",
      title: "Menos ruido. Más parches.",
      lead: "La mayoría de escáneres venden asientos y paquetes de créditos, y te dejan solo con el resultado. ClearBison vende un trabajo acotado: un repositorio o un hostname, un reporte contra el que puedes parchear y un fundador que se sube a la llamada.",
      themTitle: "Escáner SaaS típico",
      themCount: "Miles de filas. Nadie con quien leerlas.",
      them: [
        "Entras tú solo, gastas créditos y ordenas ruido genérico de severidad.",
        "Llegan miles de hallazgos sin nadie que te ayude a leerlos.",
        "Se abre una cola de soporte cuando el reporte no coincide con el código.",
        "Una lista de precios publicada limita la conversación antes de empezar.",
      ],
      usTitle: "ClearBison",
      usCount: "Los hallazgos que importan, cada uno anclado a una línea.",
      us: [
        "Dimensiono el trabajo a un repositorio o a un hostname.",
        "Reportes contra los que puedes parchear, más una rama de corrección si compras esa opción.",
        "Las preguntas de alcance y confianza llegan a mí, no a una cola de tickets.",
        "El número llega por escrito después de una llamada corta.",
      ],
    },
    product: {
      kicker: "Producto",
      title: "Encuentra el riesgo. Luego corrígelo de verdad.",
      lead: "ClearBison es el escáner que entrego para repositorios y hostnames autorizados. Escribe reportes de los que puedes actuar, y nunca llama a nada certificado como seguro.",
      reportTitle: "Un reporte del que puedes parchear",
      reportBody: "Cada hallazgo nombra el archivo y la línea, explica por qué importa y sugiere el siguiente paso. No recibes un volcado de severidades.",
      reportFinding: "La sesión se puede saltar cuando falta el header",
      reportFixLabel: "Siguiente paso sugerido",
      f1Title: "Pases locales, sin modelo",
      f1Body: "Los pases de secretos, reglas de código y misconfiguración leen un directorio tuyo. No llaman a un modelo ni cambian tus archivos.",
      f1Meta: "llamadas a modelo",
      f2Title: "Solo objetivos que demuestras controlar",
      f2Body: "Una URL no local no se prueba hasta que demuestras que controlas ese nombre. La compuerta vive en la herramienta, no solo en esta página.",
      f2Status: "propiedad verificada",
      f3Title: "Corridas más profundas cuando el patrón no alcanza",
      f3Body: "Las corridas opcionales dirigidas por modelo suman razonamiento encima de los pases locales, y se mantienen no destructivas.",
      f3Badge: "no destructivo",
    },
    steps: {
      kicker: "Cómo funciona",
      title: "Tres movimientos. Luego un reporte que puedes usar.",
      items: [
        {
          title: "Nombra el objetivo",
          body: "Un repositorio o un hostname que controlas. Confirmo el límite antes de que corra nada.",
        },
        {
          title: "Ejecuto la opción",
          body: "Pases locales, más un pase no destructivo con modelo cuando tu opción lo incluye.",
        },
        {
          title: "Recibes el trabajo",
          body: "Un reporte del que puedes parchear. Una rama de corrección solo si la opción la incluye.",
        },
      ],
    },
    options: {
      kicker: "Opciones",
      title: "Cuatro opciones. Una cotización por escrito.",
      lead: "En este sitio no hay montos en dólares. Cotizo cuando entiendo el alcance y lo confirmo por escrito.",
      requestQuote: "Pedir una cotización acotada",
      startHere: "La mayoría empieza aquí",
      includedLabel: "Incluye",
      youLabel: "Tu parte",
      outsideLabel: "No incluye",
      generalCta: "¿Otra cosa? Escríbeme en general",
      generalHint:
        "Si no sabes qué opción encaja, describe el sistema y lo dimensionamos juntos.",
      note: "Existen paquetes para Mac y Windows, pero no forman parte de Autoejecución hasta que un escaneo se haya demostrado en esas máquinas. No hay SLA de monitoreo ni cobertura 24/7. Un reporte limpio no significa que el sistema no pueda ser vulnerado.",
      items: {
        package: {
          tag: "Autoejecución",
          title: "Paquete y sesión",
          blurb:
            "Tú te quedas con el escáner. En una sesión de trabajo dejo corriendo los tres pases locales en tu máquina Linux.",
          points: [
            "El paquete Linux, la sesión de setup y los pases safe, code y misconfig.",
            "Tú ejecutas escaneos posteriores y lees los reportes.",
            "Mac, Windows, sitios web y que yo lea el reporte después de la sesión.",
          ],
        },
        "repo-scan": {
          tag: "Escaneo de repo",
          title: "Escaneo un repositorio",
          blurb:
            "Envías un repositorio. Yo ejecuto los escaneos, incluido un pase no destructivo dirigido por modelo, y te entrego los reportes.",
          points: [
            "Los escaneos operados, la entrega de reportes y el borrado confirmado de tu copia.",
            "Tú corriges el código. En esta opción yo no lo cambio.",
            "Un segundo repositorio, un sitio en vivo y la prueba de que cada línea es explotable.",
          ],
        },
        "domain-scan": {
          tag: "Escaneo URL",
          title: "Escaneo un hostname",
          blurb:
            "Demuestras que eres dueño del dominio. Yo ejecuto los programas de URL y entrego cada reporte que generen, sin pruebas destructivas.",
          points: [
            "Escaneos de URL con prueba de propiedad y el set completo de reportes para ese hostname.",
            "Tú aportas la prueba de propiedad. Tu código se queda contigo.",
            "Cambios de código, un segundo hostname y un certificado de seguridad.",
          ],
        },
        "scan-fix": {
          tag: "Escanear+Corregir",
          title: "Escanear, corregir lo que cabe, verificar",
          blurb:
            "El Escaneo de repo, luego hasta dos días de correcciones locales tomadas de ese reporte, lo más grande primero, con re-ejecuciones de verificación.",
          points: [
            "Los escaneos, una rama de remediación enfocada y una lista de lo que no toqué.",
            "La verificación vuelve a ejecutar los mismos tres pases locales.",
            "Rediseños, nuevos sistemas de auth, migraciones de dependencias y un segundo repositorio.",
          ],
        },
      },
    },
    trust: {
      kicker: "Confianza",
      title: "Hablas con quien entrega el trabajo.",
      points: [
        {
          title: "Un asiento responsable",
          body: "Las llamadas de alcance, la revisión de la cotización y las preguntas de entrega llegan a mí. No te pasan a una cola rotativa.",
        },
        {
          title: "Solo uso autorizado",
          body: "Solo escaneo sistemas que te pertenecen o que estás explícitamente autorizado a probar. La prueba de propiedad bloquea todo lo que no es local.",
        },
        {
          title: "Confidencial por defecto",
          body: "Tu código, accesos y hallazgos son confidenciales durante el trabajo, como si ya hubiéramos firmado un NDA. Firmo el tuyo cuando lo necesites por escrito.",
        },
        {
          title: "Integridad y privacidad",
          body: "Tu material se queda dentro del trabajo acotado. No lo vendo, no lo reutilizo con otros clientes ni guardo una copia después de la entrega cuando la opción indica borrado.",
        },
        {
          title: "LLMs, en tus términos",
          body: "Los pases opcionales dirigidos por modelo pueden usar LLMs. Los pases locales de reglas no. Si exiges un proveedor concreto, usamos el tuyo.",
        },
        {
          title: "Límites honestos",
          body: "Los hallazgos ayudan a mejorar el sistema. No son un certificado de seguridad y no prueban si hubo un compromiso previo.",
        },
      ],
      panelTitle: "Cómo se arma una cotización",
      panelBody:
        "Primero hay una llamada corta. Dimensiono el paquete (Autoejecución, Escaneo de repo, Escaneo URL o Escanear+Corregir), confirmo el acceso y envío una propuesta escrita. Los diagnósticos se pagan. Las correcciones fuera del paquete se cotizan aparte antes de empezar.",
      panelSign: "El fundador, ClearBison",
      panelCta: "Agendar la llamada de alcance",
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas antes de agendar.",
      items: [
        {
          q: "¿Por qué no hay precios públicos?",
          a: "Cada trabajo se acota a un repositorio o un hostname, así que una lista de precios estaría mal para la mayoría. Recibes el número por escrito después de una llamada corta. Los diagnósticos se pagan.",
        },
        {
          q: "¿Mi código sale de mi control?",
          a: "Solo en las opciones donde lo envías. En Escaneo de repo y Escanear+Corregir, tu copia se borra después de la entrega y lo confirmo. Con Autoejecución, todo se queda en tu máquina.",
        },
        {
          q: "¿Envías mi código a un modelo de IA?",
          a: "Los pases locales nunca llaman a un modelo. Los pases opcionales dirigidos por modelo son no destructivos, y si exiges un proveedor concreto, usamos el tuyo.",
        },
        {
          q: "¿Puedes escanear un sitio que no es mío?",
          a: "No. Una URL no local no se prueba hasta que demuestras que controlas ese nombre. La herramienta impone la prueba de propiedad.",
        },
        {
          q: "¿Un reporte limpio significa que estamos seguros?",
          a: "No. Un reporte te ayuda a encontrar y parchear riesgo. No es un certificado de seguridad y no prueba si hubo un compromiso previo.",
        },
        {
          q: "¿Qué pasa después de enviar el formulario?",
          a: "Respondo con un horario para una llamada corta de alcance y envío una propuesta escrita esa misma semana.",
        },
      ],
    },
    founding: {
      kicker: "Plazas fundacionales",
      title: "Abre con alguien que seguirá aquí después del reporte.",
      lead: "ClearBison abre con una ventana fundacional corta, sin lista pública de precios y sin trucos de cupones. Recibes un trabajo acotado, una propuesta escrita la misma semana de la llamada y acceso directo al fundador que ejecuta el escaneo.",
      points: [
        "Cupos fundacionales limitados mientras el producto abre.",
        "Propuesta escrita la misma semana después de una llamada corta de alcance.",
        "Límites claros por escrito antes de que arranque cualquier escaneo.",
      ],
      cta: "Pedir llamada fundacional de alcance",
    },
    contact: {
      title: "Dime qué revisar.",
      lead: "Elige una opción o describe el sistema. Respondo con un horario para una llamada corta de alcance.",
      name: "Nombre",
      email: "Email de trabajo",
      option: "Opción",
      optionBlank: "Consulta general. Todavía no lo sé",
      optionLabels: {
        package: "Autoejecución",
        "repo-scan": "Escaneo de repo",
        "domain-scan": "Escaneo URL",
        "scan-fix": "Escanear+Corregir",
      },
      message: "¿Qué debo revisar?",
      submit: "Pedir llamada de alcance",
      submitting: "Enviando…",
      fail: "Falló la solicitud. Intenta de nuevo en un momento.",
      network: "Error de red. Intenta de nuevo en un momento.",
      okFallback: "Recibido. Responderé pronto.",
    },
    footer: {
      productOf: "Un producto de",
      brand: "LogicBison.com",
      backTop: "Volver arriba",
      legal:
        "Las herramientas ClearBison son solo para uso legal y ético, en tus propias aplicaciones o en sistemas que estás explícitamente autorizado a probar. Los reportes detectan y describen riesgo para que pueda parchearse. No certifican que un sistema sea seguro.",
    },
  },
};

export const OPTION_IDS = [
  "package",
  "repo-scan",
  "domain-scan",
  "scan-fix",
] as const;

export type OptionId = (typeof OPTION_IDS)[number];

export function isOptionId(value: string): value is OptionId {
  return (OPTION_IDS as readonly string[]).includes(value);
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const raw = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
  return raw.startsWith("es") ? "es" : "en";
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (v === "en" || v === "es") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale();
}
