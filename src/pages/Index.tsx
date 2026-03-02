import { useState } from "react";
import Icon from "@/components/ui/icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const profiles = [
  {
    id: "fizmat",
    icon: "Calculator",
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    title: "ФИЗМАТ",
    subjects: ["Математика (углублённо)", "Физика (углублённо)", "Химия", "Информатика"],
    desc: "Профиль для тех, кто мыслит формулами и открывает законы мира. Готовит к поступлению в технические вузы: МФТИ, МГУ, Бауманка, политехнические университеты.",
    history: [
      { year: "1998", event: "Открытие физико-математического класса — первого профильного класса в школе. Набор составил 25 учеников." },
      { year: "2005", event: "Первые победители городской олимпиады по физике среди учеников физмат-профиля. Класс получил статус углублённого." },
      { year: "2012", event: "Установлено современное оборудование: физические лаборатории, 3D-моделирование, робототехника." },
      { year: "2019", event: "100% поступление выпускников физмат-профиля в технические вузы — рекорд за всю историю профиля." },
      { year: "2023", event: "Введён курс по искусственному интеллекту и машинному обучению как дополнительный модуль профиля." },
    ],
  },
  {
    id: "infmat",
    icon: "Cpu",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-800",
    title: "ИНФМАТ",
    subjects: ["Математика (углублённо)", "Информатика (углублённо)", "Физика", "Английский язык"],
    desc: "Профиль для будущих программистов, аналитиков и IT-специалистов. Сочетание глубокой математики с практическим программированием и алгоритмикой.",
    history: [
      { year: "2003", event: "Запуск информационно-математического профиля — ответ на растущий спрос рынка труда в сфере IT." },
      { year: "2008", event: "Открытие специализированного компьютерного класса с 30 рабочими местами и выходом в интернет." },
      { year: "2014", event: "Партнёрство с IT-компаниями города: стажировки для старшеклассников и мастер-классы от практикующих разработчиков." },
      { year: "2020", event: "Переход на дистанционное обучение во время пандемии прошёл бесшовно — профиль уже имел всю цифровую инфраструктуру." },
      { year: "2024", event: "Введение курсов по Python, веб-разработке и работе с базами данных в рамках основной программы профиля." },
    ],
  },
  {
    id: "hum",
    icon: "BookOpen",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-800",
    title: "ГУМАНИТАРНЫЙ",
    subjects: ["Русский язык (углублённо)", "Литература (углублённо)", "История", "Обществознание", "Иностранный язык"],
    desc: "Профиль для тех, кто думает словами, чувствует историю и понимает людей. Подготовка к юридическим, педагогическим, журналистским и международным специальностям.",
    history: [
      { year: "2001", event: "Открытие гуманитарного профиля с акцентом на русскую словесность и историю. Первый набор — 28 человек." },
      { year: "2007", event: "Введение второго иностранного языка (французский / немецкий) как обязательного предмета профиля." },
      { year: "2011", event: "Создание школьного театра и медиаклуба — творческих площадок для учеников гуманитарного профиля." },
      { year: "2016", event: "Выпускники профиля впервые заняли призовые места на всероссийской олимпиаде по истории и праву." },
      { year: "2022", event: "Запуск курса по риторике, медиаграмотности и основам журналистики. Профиль охватывает широкий спектр гуманитарных дисциплин." },
    ],
  },
];

const admissionSteps = [
  { step: "01", title: "Заявление", desc: "Подать заявление в школу с 1 мая по 30 июня. Форма — в секретариате или онлайн на сайте школы." },
  { step: "02", title: "Документы", desc: "Аттестат об окончании 9 класса, справка об успеваемости, портфолио достижений (при наличии)." },
  { step: "03", title: "Собеседование", desc: "Беседа с классным руководителем профиля и завучем по учебной части. Занимает около 20–30 минут." },
  { step: "04", title: "Зачисление", desc: "Приказ о зачислении выходит 5–10 августа. Список зачисленных — на стенде и сайте школы." },
];

const facts = [
  { icon: "GraduationCap", num: "3", label: "профиля обучения", sub: "на выбор" },
  { icon: "Trophy", num: "87%", label: "выпускников поступают", sub: "в ВУЗы с первого раза" },
  { icon: "Star", num: "15+", label: "лет опыта", sub: "профильного образования" },
  { icon: "BookMarked", num: "200+", label: "учеников", sub: "обучается сейчас" },
];

const contacts = [
  {
    category: "Администрация школы",
    icon: "Building2",
    items: [
      { role: "Директор", name: "Иванова Мария Петровна", phone: "+7 (495) 000-00-01", email: "director@school.ru" },
      { role: "Завуч по учебной части", name: "Петров Андрей Сергеевич", phone: "+7 (495) 000-00-02", email: "zavuch@school.ru" },
      { role: "Секретарь", name: "Сидорова Елена Ивановна", phone: "+7 (495) 000-00-03", email: "secretary@school.ru" },
    ],
  },
  {
    category: "Классные руководители 10 класса",
    icon: "UserCheck",
    items: [
      { role: "10А — Технологический", name: "Козлова Ольга Дмитриевна", phone: "+7 (905) 000-10-01", email: "kozlova@school.ru" },
      { role: "10Б — Гуманитарный", name: "Морозов Виктор Александрович", phone: "+7 (905) 000-10-02", email: "morozov@school.ru" },
      { role: "10В — Естественнонаучный", name: "Новикова Татьяна Юрьевна", phone: "+7 (905) 000-10-03", email: "novikova@school.ru" },
      { role: "10Г — Социально-экономический", name: "Волков Дмитрий Николаевич", phone: "+7 (905) 000-10-04", email: "volkov@school.ru" },
    ],
  },
  {
    category: "Контакты школы",
    icon: "MapPin",
    items: [
      { role: "Адрес", name: "г. Москва, ул. Примерная, д. 1", phone: "", email: "" },
      { role: "Приёмная", name: "Пн–Пт: 8:00–17:00", phone: "+7 (495) 000-00-00", email: "info@school.ru" },
      { role: "Сайт", name: "www.school.ru", phone: "", email: "" },
    ],
  },
];

const history = [
  { year: "1978", event: "Основание школы. Первые 120 учеников начали обучение в новом здании на Примерной улице." },
  { year: "1995", event: "Введение первых профильных классов — математического и гуманитарного направлений." },
  { year: "2003", event: "Школа получила статус гимназии. Открыт естественнонаучный профиль." },
  { year: "2010", event: "Масштабная реконструкция: новые лаборатории, компьютерные классы и спортивный зал." },
  { year: "2018", event: "Введён социально-экономический профиль. Школа вошла в топ-50 школ города." },
  { year: "2024", event: "Запуск цифровой платформы для дистанционного обучения. 4 профиля для 10–11 классов." },
];

const navItems = [
  { id: "profiles", label: "Профили" },
  { id: "facts", label: "Факты" },
  { id: "admission", label: "Поступление" },
  { id: "contacts", label: "Контакты" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Index() {
  const [activeProfile, setActiveProfile] = useState("fizmat");
  const [menuOpen, setMenuOpen] = useState(false);
  const current = profiles.find((p) => p.id === activeProfile)!;

  return (
    <div className="min-h-screen bg-white font-golos">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-green-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              <Icon name="GraduationCap" size={16} className="text-white" />
            </div>
            <span className="font-bold text-green-900 text-base">Школа · 10 класс</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="nav-link pb-0.5">
                {n.label}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-green-800" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 px-4 py-3 flex flex-col gap-3 animate-fade-in">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => { scrollTo(n.id); setMenuOpen(false); }} className="text-left text-sm font-medium text-green-800 py-1.5 hover:text-green-600">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20 pb-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-40 translate-x-32 -translate-y-16 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full opacity-30 -translate-x-16 translate-y-16 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full tracking-wide animate-fade-in">
            Добро пожаловать
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-green-950 leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Профили <span className="text-green-600">10 класса</span>
          </h1>
          <p className="text-lg md:text-xl text-green-800/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Выбери направление, которое откроет путь к твоей будущей профессии. Три профиля — одна большая цель.
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button onClick={() => scrollTo("profiles")} className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-md shadow-green-200 hover:shadow-lg hover:-translate-y-0.5">
              Выбрать профиль
            </button>
            <button onClick={() => scrollTo("admission")} className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200">
              Как поступить
            </button>
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section id="profiles" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-3">Профили обучения</h2>
            <p className="text-green-700/70 text-lg">Нажми на профиль, чтобы узнать подробнее</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProfile(p.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 border-2 ${
                  activeProfile === p.id
                    ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-200"
                    : "bg-white text-green-700 border-green-200 hover:border-green-400 hover:bg-green-50"
                }`}
              >
                <Icon name={p.icon as AnyIcon} size={16} />
                {p.title}
              </button>
            ))}
          </div>

          {/* Profile Card */}
          <div className={`rounded-3xl border-2 p-8 md:p-12 transition-all duration-300 ${current.color}`} key={current.id}>
            {/* Top row */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 ${current.badge}`}>
                  Профиль
                </span>
                <h3 className="text-3xl font-black text-green-950 mb-4">{current.title}</h3>
                <p className="text-green-800/80 text-lg leading-relaxed mb-6">{current.desc}</p>
                <div>
                  <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">Основные предметы</p>
                  <div className="flex flex-wrap gap-2">
                    {current.subjects.map((s) => (
                      <span key={s} className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-green-800 border border-green-200 shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-48 flex-shrink-0">
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-green-100">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={current.icon as AnyIcon} size={32} className="text-white" />
                  </div>
                  <p className="text-green-900 font-bold text-sm">{current.title}</p>
                  <p className="text-green-600 text-xs mt-1">10–11 класс</p>
                </div>
              </div>
            </div>

            {/* History timeline inside card */}
            <div className="border-t border-green-200/60 pt-8">
              <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Icon name="Clock" size={14} />
                История профиля
              </p>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-green-200" />
                <div className="space-y-5">
                  {current.history.map((h, i) => (
                    <div key={h.year} className="flex gap-5 animate-fade-in" style={{ animationDelay: `${i * 0.07}s` }}>
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-md">
                          <span className="text-white text-[10px] font-black leading-none">{h.year}</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl border border-green-100 px-4 py-3 flex-1 shadow-sm">
                        <p className="text-green-900/85 text-sm leading-relaxed">{h.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section id="facts" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-3">Факты о школе</h2>
            <p className="text-green-700/70 text-lg">Цифры, которые говорят сами за себя</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((f, i) => (
              <div key={f.label} className="section-card text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={f.icon as AnyIcon} size={24} className="text-green-700" />
                </div>
                <div className="text-4xl font-black text-green-700 mb-1">{f.num}</div>
                <div className="text-sm font-semibold text-green-900">{f.label}</div>
                <div className="text-xs text-green-500 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          {/* Extra facts blocks */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="section-card bg-green-600 text-white border-green-600">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Проектная деятельность</h4>
                  <p className="text-white/85 text-sm leading-relaxed">Каждый профиль включает обязательный исследовательский или социальный проект. Лучшие работы участвуют в городских олимпиадах.</p>
                </div>
              </div>
            </div>
            <div className="section-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Monitor" size={20} className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-green-950 mb-2">Современная база</h4>
                  <p className="text-green-800/70 text-sm leading-relaxed">3D-принтеры, химические лаборатории, медиацентр и 5 компьютерных классов с современным ПО.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION */}
      <section id="admission" className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-3">Как поступить в 10 класс</h2>
            <p className="text-green-700/70 text-lg">Четыре простых шага — и ты уже в профиле!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {admissionSteps.map((s, i) => (
              <div key={s.step} className="section-card flex gap-5 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-green-200">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-green-950 text-lg mb-1">{s.title}</h4>
                  <p className="text-green-800/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-green-600 p-8 text-white text-center shadow-lg shadow-green-200">
            <Icon name="FileText" size={40} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-2">Приём документов открыт</h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">С 1 мая по 30 июня ежегодно. Успей подать заявление и выбрать свой профиль!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow">
                Скачать заявление
              </button>
              <button onClick={() => scrollTo("contacts")} className="px-6 py-3 bg-green-700/50 text-white font-bold rounded-xl hover:bg-green-700 transition-colors border border-white/20">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-3">Контакты</h2>
            <p className="text-green-700/70 text-lg">Мы всегда готовы ответить на твои вопросы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((block) => (
              <div key={block.category} className="section-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name={block.icon as AnyIcon} size={18} className="text-green-700" />
                  </div>
                  <h3 className="font-bold text-green-950 text-sm">{block.category}</h3>
                </div>
                <div className="space-y-4">
                  {block.items.map((item) => (
                    <div key={item.role} className="border-t border-green-50 pt-4 first:border-0 first:pt-0">
                      <p className="text-xs text-green-500 font-semibold uppercase tracking-wide mb-0.5">{item.role}</p>
                      <p className="font-semibold text-green-900 text-sm mb-1">{item.name}</p>
                      {item.phone && (
                        <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-sm text-green-600 hover:text-green-800 transition-colors mb-0.5">
                          <Icon name="Phone" size={12} />
                          {item.phone}
                        </a>
                      )}
                      {item.email && (
                        <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 text-sm text-green-600 hover:text-green-800 transition-colors">
                          <Icon name="Mail" size={12} />
                          {item.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-green-200 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              <Icon name="GraduationCap" size={16} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Школа · 10 класс</p>
              <p className="text-green-400 text-xs">Профили обучения 2024–2025</p>
            </div>
          </div>
          <div className="flex gap-6">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-green-400 text-sm hover:text-white transition-colors">
                {n.label}
              </button>
            ))}
          </div>
          <p className="text-green-600 text-xs">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}