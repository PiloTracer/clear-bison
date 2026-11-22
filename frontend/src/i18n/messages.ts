export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];

export const LOCALE_STORAGE_KEY = "clearbison.lang";

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    product: string;
    difference: string;
    options: string;
    trust: string;
    talk: string;
    langAria: string;
  };
  hero: {
    reliance: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    lead: string;
    ctaOptions: string;
    ctaTalk: string;
    assurances: { label: string; href: string }[];
  };
  proof: { label: string; body: string }[];
  steps: {
    kicker: string;
    title: string;
    items: { title: string; body: string }[];
  };
  product: {
    kicker: string;
    title: string;
    lead: string;
    visualAlt: string;
    visualCaption: string;
    f1Title: string;
    f1Body: string;
    f2Title: string;
    f2Body: string;
    f3Title: string;
    f3Body: string;
  };
  difference: {
    kicker: string;
    title: string;
    lead: string;
    themTitle: string;
    them: string[];
    usTitle: string;
    us: string[];
  };
  options: {
    kicker: string;
    title: string;
    lead: string;
    requestQuote: string;
    startHere: string;
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
    panelCta: string;
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
      difference: "Difference",
      options: "Options",
      trust: "Trust",
      talk: "Talk to me",
      langAria: "Language",
    },
    hero: {
      reliance: "Authorized scans. Clear reports. A person who stays with the work.",
      titleBefore: "Security risks found so you can ",
      titleEm: "patch them",
      titleAfter: ".",
      lead: "I built ClearBison for code and sites you already control. It runs where you authorize it, writes a report you can work from, and never pretends a clean pass means the system is safe forever. When you want a person on the delivery, that person is me.",
      ctaOptions: "See the options",
      ctaTalk: "Start a founding engagement",
      assurances: [
        { label: "Authorized targets only", href: "#trust" },
        { label: "Confidential by default", href: "#trust" },
        { label: "A person on the delivery", href: "#trust" },
      ],
    },
    proof: [
      { label: "Scoped", body: "One repository or one hostname. Not a credit pack." },
      { label: "Quoted", body: "The number arrives in writing after a short call." },
      { label: "Patchable", body: "File, line, and a next step — not a severity dump." },
      { label: "Private", body: "Your code and findings stay inside the job." },
    ],
    steps: {
      kicker: "Path",
      title: "Three moves. Then a report you can use.",
      items: [
        {
          title: "Name the target",
          body: "A repository or a hostname you control. I confirm the boundary before anything runs.",
        },
        {
          title: "I run the option",
          body: "Local passes, or a non-destructive model pass when that is what you bought.",
        },
        {
          title: "You get the work",
          body: "A report you can patch from. A fix branch only when that option includes it.",
        },
      ],
    },
    product: {
      kicker: "Product",
      title: "Find the risk, then improve the system.",
      lead: "ClearBison is the scanner I ship for repositories and authorized hostnames. It writes reports you can act on, and it stops short of calling anything certified safe. The goal is a real step forward: risks found, then risks patched.",
      visualAlt: "ClearBison findings report preview on dark metal panel",
      visualCaption: "A report you can patch from. File, line, and a clear next step.",
      f1Title: "Local code without calling a model",
      f1Body:
        "The safe, code-rule, and misconfiguration passes read a directory you own. They do not call a model and they do not change your files.",
      f2Title: "Only targets you prove you own",
      f2Body:
        "A non-local URL is not tested until you prove you control that name. The ownership gate lives in the tool, not only on this page.",
      f3Title: "Deeper runs when pattern matching is not enough",
      f3Body:
        "Optional model-directed runs stay non-destructive. Use them when you want reasoning on top of the local passes, not another pile of pattern hits.",
    },
    difference: {
      kicker: "Difference",
      title: "A scoped job with a person behind it.",
      lead: "Most scanners sell seats and credit packs. ClearBison sells a bounded job: one repository or one hostname, a report you can patch against, and a founder who will get on the call.",
      themTitle: "Typical SaaS scanners",
      them: [
        "You log in yourself, burn credits, and sort generic severity noise alone.",
        "Thousands of findings land with nobody to help you read them.",
        "A support queue opens when the report does not match what you see in the code.",
        "A published rate card becomes the ceiling before the conversation starts.",
      ],
      usTitle: "ClearBison",
      us: [
        "I size the work to one repository or one hostname.",
        "You get reports you can patch against, and a fix branch when that is the option you bought.",
        "Scoping and trust questions come to me, not a ticket queue.",
        "The number arrives in writing after a short call, never as a cold price list on this site.",
      ],
    },
    options: {
      kicker: "Options",
      title: "Four options. One written quote.",
      lead: "There are no dollar amounts on this site. I quote after I understand the scope, then confirm it in writing. Here is what each option covers.",
      requestQuote: "Request a scoped quote",
      startHere: "Most teams start here",
      generalCta: "Something else? Write me generally",
      generalHint:
        "If you are not sure which option fits, describe the system and I will size it with you.",
      note: "Mac and Windows packages exist, but they stay outside Option A until a scan has been proven on those machines. There is no monitoring SLA and no 24/7 coverage. A clean report does not mean the system cannot be breached.",
      items: {
        package: {
          tag: "Option A · Self-run",
          title: "Package and session",
          blurb:
            "You keep the scanner. In one working session I get the three local passes running on your Linux machine.",
          points: [
            "Includes the Linux package, the setup session, and the safe, code, and misconfig passes.",
            "You run later scans yourself and you read the reports.",
            "Outside this option: Mac, Windows, website targets, and me interpreting the report after the session.",
          ],
        },
        "repo-scan": {
          tag: "Option B · Repo scan",
          title: "I scan one repository",
          blurb:
            "You send one repository. I run the scans, including one non-destructive model-directed pass, and I hand you the reports.",
          points: [
            "Includes the operated scans, report delivery, and deletion of your copy with confirmation.",
            "You fix the code. I do not change it in this option.",
            "Outside this option: a second repository, a live website, and proof that every line is exploitable.",
          ],
        },
        "domain-scan": {
          tag: "Option D · Domain scan",
          title: "I scan one hostname",
          blurb:
            "You prove you own the domain. I run the URL programs and deliver every report those runs write. The work stays non-destructive.",
          points: [
            "Includes ownership-gated URL scans and the full report set for that hostname.",
            "You supply the ownership proof. You do not send your source tree.",
            "Outside this option: source changes, a second hostname, and a certificate of safety.",
          ],
        },
        "scan-fix": {
          tag: "Option C · Scan and fix",
          title: "Scan, fix what fits, verify",
          blurb:
            "Same scans as Option B, then up to two days of local changes taken from that report, largest first, with verification re-runs.",
          points: [
            "Includes the scans, a focused remediation branch, and a list of what I did not touch.",
            "Verification re-runs the same three local passes.",
            "Outside this option: redesigns, new auth systems, dependency migrations, and a second repository.",
          ],
        },
      },
    },
    trust: {
      kicker: "Reliance",
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
          body: "I treat your code, access, and findings as confidential for the engagement — as if we had already signed an NDA. I will sign yours when you need that on paper.",
        },
        {
          title: "Integrity and privacy",
          body: "Your materials stay inside the scoped job. I do not sell them, reuse them for other clients, or keep a copy past delivery when the option says they are deleted.",
        },
        {
          title: "LLMs, on your terms",
          body: "ClearBison can use LLMs for optional model-directed passes. Local rule passes do not call a model. When you require a specific provider, we use yours.",
        },
        {
          title: "Honest limits",
          body: "Findings help you improve the system. They are not a certificate of safety, and they do not prove a breach did or did not already happen.",
        },
        {
          title: "Written scope before work starts",
          body: "You get the option, the access rules, and the deliverable in writing. If the work grows past that boundary, we quote again before it continues.",
        },
      ],
      panelTitle: "How a quote is made",
      panelBody:
        "A short call comes first. I size the option (A, B, C, or D), confirm access, and send a written proposal. Diagnostics stay paid. Builds and fixes are quoted separately when they leave the option boundary.",
      panelCta: "Book the scoping call",
    },
    founding: {
      kicker: "Founding engagements",
      title: "Open with someone who will still be here after the report.",
      lead: "ClearBison is opening with a short founding window. No public price list and no coupon theater. You get a scoped engagement, a written proposal the same week as the call, and direct access to the founder who runs the scan.",
      points: [
        "Limited founding slots while the product is opening.",
        "Same-week written proposal after a short scoping call.",
        "Clear boundaries in writing before any scan starts.",
      ],
      cta: "Request a founding scoping call",
    },
    contact: {
      title: "When you are ready, start here.",
      lead: "Tell me which option fits, or describe the system. I reply with a time for a short scoping call.",
      name: "Name",
      email: "Work email",
      option: "Option",
      optionBlank: "General inquiry. I am not sure yet",
      optionLabels: {
        package: "A. Package and session",
        "repo-scan": "B. Repo scan",
        "domain-scan": "D. Domain scan",
        "scan-fix": "C. Scan and fix",
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
      difference: "Diferencia",
      options: "Opciones",
      trust: "Confianza",
      talk: "Háblame",
      langAria: "Idioma",
    },
    hero: {
      reliance: "Escaneos autorizados. Reportes claros. Una persona que se queda con el trabajo.",
      titleBefore: "Riesgos de seguridad encontrados para que puedas ",
      titleEm: "parchearlos",
      titleAfter: ".",
      lead: "Construí ClearBison para código y sitios que ya controlas. Corre donde tú lo autorizas, escribe un reporte del que puedes trabajar, y nunca pretende que un pase limpio signifique que el sistema es seguro para siempre. Cuando quieres a una persona en la entrega, esa persona soy yo.",
      ctaOptions: "Ver las opciones",
      ctaTalk: "Abrir una plaza fundacional",
      assurances: [
        { label: "Solo objetivos autorizados", href: "#trust" },
        { label: "Confidencial por defecto", href: "#trust" },
        { label: "Una persona en la entrega", href: "#trust" },
      ],
    },
    proof: [
      { label: "Acotado", body: "Un repositorio o un hostname. No un paquete de créditos." },
      { label: "Cotizado", body: "El número llega por escrito después de una llamada corta." },
      { label: "Parcheable", body: "Archivo, línea y un siguiente paso — no un volcado de severidad." },
      { label: "Privado", body: "Tu código y tus hallazgos se quedan dentro del trabajo." },
    ],
    steps: {
      kicker: "Camino",
      title: "Tres movimientos. Luego un reporte que puedes usar.",
      items: [
        {
          title: "Nombra el objetivo",
          body: "Un repositorio o un hostname que controlas. Confirmo el límite antes de que corra nada.",
        },
        {
          title: "Ejecuto la opción",
          body: "Pases locales, o un pase no destructivo con modelo cuando eso es lo que compraste.",
        },
        {
          title: "Recibes el trabajo",
          body: "Un reporte del que puedes parchear. Una rama de corrección solo si la opción la incluye.",
        },
      ],
    },
    product: {
      kicker: "Producto",
      title: "Encontrar el riesgo y luego mejorar el sistema.",
      lead: "ClearBison es el escáner que entrego para repositorios y hostnames autorizados. Escribe reportes de los que puedes actuar, y se detiene antes de llamar a algo certificado como seguro. El objetivo es un avance real: riesgos encontrados y luego riesgos parcheados.",
      visualAlt: "Vista previa de un reporte de hallazgos ClearBison sobre panel metálico oscuro",
      visualCaption: "Un reporte del que puedes parchear. Archivo, línea y un siguiente paso claro.",
      f1Title: "Código local sin llamar a un modelo",
      f1Body:
        "Los pases de secretos, reglas de código y misconfiguración leen un directorio tuyo. No llaman a un modelo y no cambian tus archivos.",
      f2Title: "Solo objetivos que demuestras controlar",
      f2Body:
        "Una URL no local no se prueba hasta que demuestras que controlas ese nombre. La prueba de propiedad vive en la herramienta, no solo en esta página.",
      f3Title: "Corridas más profundas cuando el patrón no alcanza",
      f3Body:
        "Las corridas opcionales dirigidas por modelo se quedan no destructivas. Úsalas cuando quieres razonamiento encima de los pases locales, no otro montón de coincidencias de patrón.",
    },
    difference: {
      kicker: "Diferencia",
      title: "Un trabajo acotado con una persona detrás.",
      lead: "La mayoría de escáneres venden asientos y paquetes de créditos. ClearBison vende un trabajo acotado: un repositorio o un hostname, un reporte contra el que puedes parchear, y un fundador que se sube a la llamada.",
      themTitle: "Escáneres SaaS típicos",
      them: [
        "Entras tú solo, gastas créditos y ordenas ruido genérico de severidad.",
        "Llegan miles de hallazgos sin nadie que te ayude a leerlos.",
        "Se abre una cola de soporte cuando el reporte no coincide con lo que ves en el código.",
        "Una lista de precios publicada se vuelve el techo antes de que empiece la conversación.",
      ],
      usTitle: "ClearBison",
      us: [
        "Dimensiono el trabajo a un repositorio o a un hostname.",
        "Recibes reportes contra los que puedes parchear, y una rama de corrección cuando esa es la opción que compraste.",
        "Las preguntas de alcance y de confianza llegan a mí, no a una cola de tickets.",
        "El número llega por escrito después de una llamada corta, nunca como una lista fría de precios en este sitio.",
      ],
    },
    options: {
      kicker: "Opciones",
      title: "Cuatro opciones. Una cotización por escrito.",
      lead: "En este sitio no hay montos en dólares. Cotizo cuando entiendo el alcance y lo confirmo por escrito. Esto es lo que cubre cada opción.",
      requestQuote: "Pedir una cotización acotada",
      startHere: "La mayoría empieza aquí",
      generalCta: "¿Otra cosa? Escríbeme en general",
      generalHint:
        "Si no sabes qué opción encaja, describe el sistema y lo dimensionamos juntos.",
      note: "Existen paquetes para Mac y Windows, pero quedan fuera de la Opción A hasta que un escaneo se haya demostrado en esas máquinas. No hay SLA de monitoreo ni cobertura 24/7. Un reporte limpio no significa que el sistema no pueda ser vulnerado.",
      items: {
        package: {
          tag: "Opción A · Autoejecución",
          title: "Paquete y sesión",
          blurb:
            "Tú te quedas con el escáner. En una sesión de trabajo dejo corriendo los tres pases locales en tu máquina Linux.",
          points: [
            "Incluye el paquete Linux, la sesión de setup y los pases safe, code y misconfig.",
            "Tú ejecutas escaneos posteriores y lees los reportes.",
            "Fuera de esta opción: Mac, Windows, sitios web y que yo interprete el reporte después de la sesión.",
          ],
        },
        "repo-scan": {
          tag: "Opción B · Escaneo de repo",
          title: "Escaneo un repositorio",
          blurb:
            "Envías un repositorio. Yo ejecuto los escaneos, incluido un pase no destructivo dirigido por modelo, y te entrego los reportes.",
          points: [
            "Incluye los escaneos operados, la entrega de reportes y el borrado de tu copia con confirmación.",
            "Tú corriges el código. En esta opción yo no lo cambio.",
            "Fuera de esta opción: un segundo repositorio, un sitio en vivo y la prueba de que cada línea es explotable.",
          ],
        },
        "domain-scan": {
          tag: "Opción D · Escaneo de dominio",
          title: "Escaneo un hostname",
          blurb:
            "Demuestras que eres dueño del dominio. Yo ejecuto los programas de URL y entrego cada reporte que generen. El trabajo se queda no destructivo.",
          points: [
            "Incluye escaneos de URL con prueba de propiedad y el set completo de reportes para ese hostname.",
            "Tú aportas la prueba de propiedad. No envías tu árbol de código.",
            "Fuera de esta opción: cambios de código, un segundo hostname y un certificado de seguridad.",
          ],
        },
        "scan-fix": {
          tag: "Opción C · Escanear y corregir",
          title: "Escanear, corregir lo que cabe, verificar",
          blurb:
            "Los mismos escaneos que la Opción B, luego hasta dos días de cambios locales tomados de ese reporte, lo más grande primero, con re-ejecuciones de verificación.",
          points: [
            "Incluye los escaneos, una rama de remediación enfocada y una lista de lo que no toqué.",
            "La verificación vuelve a ejecutar los mismos tres pases locales.",
            "Fuera de esta opción: rediseños, nuevos sistemas de auth, migraciones de dependencias y un segundo repositorio.",
          ],
        },
      },
    },
    trust: {
      kicker: "Respaldo",
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
          body: "Trato tu código, accesos y hallazgos como confidenciales durante el trabajo — como si ya hubiéramos firmado un NDA. Firmo el tuyo cuando lo necesites por escrito.",
        },
        {
          title: "Integridad y privacidad",
          body: "Tu material se queda dentro del trabajo acotado. No lo vendo, no lo reutilizo con otros clientes ni guardo una copia después de la entrega cuando la opción indica borrado.",
        },
        {
          title: "LLMs, en tus términos",
          body: "ClearBison puede usar LLMs en pases opcionales dirigidos por modelo. Los pases locales de reglas no llaman a un modelo. Si exiges un proveedor concreto, usamos el tuyo.",
        },
        {
          title: "Límites honestos",
          body: "Los hallazgos ayudan a mejorar el sistema. No son un certificado de seguridad y no prueban que hubo o no hubo un compromiso previo.",
        },
        {
          title: "Alcance por escrito antes de empezar",
          body: "Recibes la opción, las reglas de acceso y el entregable por escrito. Si el trabajo crece más allá de ese límite, cotizamos de nuevo antes de continuar.",
        },
      ],
      panelTitle: "Cómo se arma una cotización",
      panelBody:
        "Primero hay una llamada corta. Dimensiono la opción (A, B, C o D), confirmo el acceso y envío una propuesta escrita. Los diagnósticos se pagan. Builds y correcciones se cotizan aparte cuando salen del límite de la opción.",
      panelCta: "Agendar la llamada de alcance",
    },
    founding: {
      kicker: "Plazas fundacionales",
      title: "Abre con alguien que seguirá aquí después del reporte.",
      lead: "ClearBison abre con una ventana fundacional corta. Sin lista pública de precios y sin teatro de cupones. Recibes un trabajo acotado, una propuesta escrita la misma semana de la llamada, y acceso directo al fundador que ejecuta el escaneo.",
      points: [
        "Cupos fundacionales limitados mientras el producto abre.",
        "Propuesta escrita la misma semana después de una llamada corta de alcance.",
        "Límites claros por escrito antes de que arranque cualquier escaneo.",
      ],
      cta: "Pedir llamada fundacional de alcance",
    },
    contact: {
      title: "Cuando estés listo, empieza aquí.",
      lead: "Dime qué opción encaja, o describe el sistema. Respondo con un horario para una llamada corta de alcance.",
      name: "Nombre",
      email: "Email de trabajo",
      option: "Opción",
      optionBlank: "Consulta general. Todavía no lo sé",
      optionLabels: {
        package: "A. Paquete y sesión",
        "repo-scan": "B. Escaneo de repo",
        "domain-scan": "D. Escaneo de dominio",
        "scan-fix": "C. Escanear y corregir",
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
