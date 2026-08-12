import React, { useState, useEffect } from "react";
import Wald1 from "./assets/Wald1.png";
import Wald2 from "./assets/Wald2.png";
import Wald3 from "./assets/Wald3.png";
import Kiramala1 from "./assets/Kiramala1.png";
import Kiramala2 from "./assets/Kiramala2.png";
import Kiramala3 from "./assets/Kiramala3.png";

// --- TRANSLATION DICTIONARY ---
const translations = {
  ru: {
    heroTitle: "Роскошный отдых в Лагодехи",
    heroSub:
      "Откройте для себя первозданную природу, термальные источники и премиальные винные туры Кахетии.",
    essentialsTitle: "Основы Путешествия",
    hotelsTitle: "Премиальное Размещение",
    magti: "Связь и eSIM",
    magtiDesc: "Надежный 4G в горах от Magti, Silknet или Airalo.",
    gotrip: "Трансферы GoTrip",
    gotripDesc: "Частные водители для комфортных поездок по Кахетии.",
    yandex: "Такси Yandex Go",
    yandexDesc: "Быстрый заказ местных поездок через приложение.",
    insurance: "Медицинская Страховка",
    insuranceDesc: "Обязательное страхование для вашего спокойствия.",
    amenitiesTitle: "Ключевые удобства",
    waldDesc:
      "Роскошный отель у ворот национального парка с прямым выходом в девственный лес, подогреваемым открытым бассейном и расслабляющими термальными ваннами.",
    kiramalaDesc:
      "Эксклюзивная усадьба в деревне Рачисубани. Насладитесь аутентичным винным погребом Квеври, уединенными коттеджами у озера и ваннами на открытом воздухе.",
    close: "Закрыть",
    discover: "Исследовать",
  },
  he: {
    heroTitle: "חופשה יוקרתית בלגודחי",
    heroSub:
      "גלו את הטבע הפראי, המעיינות החמים וסיורי היין היוקרתיים של קאחתי.",
    essentialsTitle: "מידע חיוני לנוסע",
    hotelsTitle: "מקומות לינה יוקרתיים",
    magti: "תקשורת ו-eSIM",
    magtiDesc: "גלישה מהירה ויציבה בהרים עם Magti, Silknet או Airalo.",
    gotrip: "הסעות GoTrip",
    gotripDesc: "נהגים פרטיים לנסיעות נוחות ובטוחות ברחבי קאחתי.",
    yandex: "מוניות Yandex Go",
    yandexDesc: "הזמנת נסיעות מקומיות בקלות ובמהירות דרך האפליקציה.",
    insurance: "ביטוח רפואי",
    insuranceDesc: "ביטוח חובה לנסיעות המבטיח לכם שקט נפשי מלא.",
    amenitiesTitle: "מתקנים מרכזיים",
    waldDesc:
      "מלון יוקרה בשערי הפארק הלאומי המציע גישה ישירה ליער, בריכה חיצונית מחוממת ומרחצאות מעיינות חמים מפנקים.",
    kiramalaDesc:
      "אחוזה אקסקלוסיבית בכפר ראצ'יסובני. תיהנו ממרתף יין קווברי אותנטי, בקתות פרטיות על שפת האגם ואמבטיות תחת כיפת השמיים.",
    close: "סגור",
    discover: "גלו עוד",
  },
};

// --- COMPONENTS ---

const Header = ({ lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-900/60 backdrop-blur-xl border-b border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-serif text-white tracking-[0.2em] uppercase">
          Kavkaz{" "}
          <span className="font-light text-stone-400 italic">Travel</span>
        </h1>
        <button
          onClick={() => setLang(lang === "ru" ? "he" : "ru")}
          className="text-xs tracking-widest uppercase bg-transparent text-white border border-stone-500/50 px-6 py-2.5 rounded-none hover:bg-white hover:text-stone-900 transition-all duration-300"
        >
          {lang === "ru" ? "עברית" : "Русский"}
        </button>
      </div>
    </header>
  );
};

const Hero = ({ t }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-stone-950 overflow-hidden">
      {/* High-quality nature image with a reliable source */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop"
        alt="Lagodekhi Mountains"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
      />
      {/* Luxury gradient overlays for depth and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/20 to-stone-950" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-stone-300 mb-8" />
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight drop-shadow-2xl">
          {t.heroTitle}
        </h2>
        <p className="text-lg md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {t.heroSub}
        </p>
        <div className="mt-16 flex flex-col items-center gap-4 opacity-70">
          <span className="text-xs tracking-[0.3em] uppercase text-stone-300">
            {t.discover}
          </span>
          <div className="w-[1px] h-12 bg-stone-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

const TravelEssentials = ({ t }) => {
  const essentials = [
    { title: t.magti, desc: t.magtiDesc, icon: "📶" },
    { title: t.gotrip, desc: t.gotripDesc, icon: "🚘" },
    { title: t.yandex, desc: t.yandexDesc, icon: "📍" },
    { title: t.insurance, desc: t.insuranceDesc, icon: "🛡️" },
  ];

  return (
    <section className="py-32 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">
            {t.essentialsTitle}
          </h3>
          <div className="w-12 h-[1px] bg-stone-700 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {essentials.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 border border-stone-800 bg-stone-900/30 hover:bg-stone-800/50 transition-all duration-500 rounded-sm"
            >
              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-lg font-serif text-white mb-3">
                {item.title}
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HotelCard = ({
  name,
  description,
  amenities,
  images,
  t,
  openLightbox,
}) => {
  return (
    <div className="mb-32 last:mb-0">
      {/* STRICT RULE 1: Photo Gallery Loads FIRST */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
        <div
          className="md:col-span-8 h-96 relative overflow-hidden group cursor-pointer"
          onClick={() => openLightbox(images[0])}
        >
          <img
            src={images[0]}
            alt={`${name} Main`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
          {images.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              className="h-48 md:h-[calc(12rem-0.5rem)] relative overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img}
                alt={`${name} Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* STRICT RULE 2: Textual Info SECOND */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h4 className="text-4xl font-serif text-stone-900 mb-6">{name}</h4>
        <p className="text-lg text-stone-600 font-light mb-10 leading-relaxed">
          {description}
        </p>

        <div className="inline-block border-t border-stone-200 pt-8">
          <h5 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
            {t.amenitiesTitle}
          </h5>
          <div className="flex flex-wrap justify-center gap-4">
            {amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-stone-700 bg-stone-100 px-5 py-2.5 rounded-none tracking-wide"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageLightbox = ({ image, onClose, t }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-xs tracking-widest uppercase text-white border border-white/30 hover:bg-white hover:text-black px-6 py-3 transition-all duration-300"
      >
        {t.close}
      </button>
      <img
        src={image}
        alt="Expanded view"
        className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [lang, setLang] = useState("ru");
  const [lightboxImage, setLightboxImage] = useState(null);

  const dir = lang === "he" ? "rtl" : "ltr";
  const t = translations[lang];

  useEffect(() => {
    document.title = "Document";
  }, []);

  useEffect(() => {
    if (lightboxImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [lightboxImage]);

  const hotels = [
    {
      name: "Wald Hotel Lagodekhi",
      description: t.waldDesc,
      amenities:
        lang === "ru"
          ? [
              "Национальный парк",
              "Хвойный лес",
              "Открытый бассейн",
              "Термальные ванны",
            ]
          : ["הפארק הלאומי", "יער מחטני", "בריכה חיצונית", "מעיינות חמים"],
      images: [Wald1, Wald2, Wald3],
    },
    {
      name: "Chateau Kiramala Lagodekhi",
      description: t.kiramalaDesc,
      amenities:
        lang === "ru"
          ? [
              "Рачисубани",
              "Погреб Квеври",
              "Домики у озера",
              "Купели на природе",
            ]
          : ["ראצ'יסובני", "מרתף קווברי", "בקתות אגם", "טבילה בטבע"],
      images: [Kiramala1, Kiramala2, Kiramala3],
    },
  ];

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-stone-50 font-sans ${dir === "rtl" ? "text-right" : "text-left"}`}
    >
      <Header lang={lang} setLang={setLang} />
      <Hero t={t} />
      <TravelEssentials t={t} />

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
            {t.hotelsTitle}
          </h3>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto" />
        </div>
        {hotels.map((hotel, idx) => (
          <HotelCard
            key={idx}
            {...hotel}
            t={t}
            openLightbox={setLightboxImage}
          />
        ))}
      </section>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        t={t}
      />
    </div>
  );
}
