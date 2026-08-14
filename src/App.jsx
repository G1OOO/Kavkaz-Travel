import Wald1 from "./assets/Wald1.png";
import Wald2 from "./assets/Wald2.png";
import Wald3 from "./assets/Wald3.png";
import Kiramala1 from "./assets/Kiramala1.png";
import Kiramala2 from "./assets/Kiramala2.png";
import Kiramala3 from "./assets/Kiramala3.png";
import Aleichem1 from "./assets/Aleichem1.png";
import Aleichem2 from "./assets/Aleichem2.png";
import Aleichem3 from "./assets/Aleichem3.png";
import placeholder from "./assets/placeholder.png";

import React, { useState, useEffect, useRef } from "react";

// --- TRANSLATION DICTIONARY ---
const translations = {
  ka: {
    heroTitle: "ფუფუნების დასვენება ლაგოდეხში",
    heroSub:
      "აღმოაჩინეთ კახეთის ხელუხლებელი ბუნება, თერმული წყლები, კოშერული კულინარია და პრემიუმ ღვინის ტურები.",
    essentialsTitle: "მოგზაურობის საფუძვლები",
    hotelsTitle: "პრემიუმ განთავსება",
    restaurantsTitle: "კოშერული რესტორნები თბილისში",
    magti: "კავშირი და eSIM",
    magtiDesc: "საიმედო 4G მთებში Magti, Silknet ან Airalo-სგან.",
    gotrip: "ტრანსფერები GoTrip",
    gotripDesc: "პირადი მძღოლები კომფორტული მგზავრობისთვის კახეთში.",
    yandex: "ტაქსი Yandex Go",
    yandexDesc: "ადგილობრივი მგზავრობის სწრაფი შეკვეთა აპლიკაციით.",
    insurance: "სამედიცინო დაზღვევა",
    insuranceDesc: "სავალდებულო დაზღვევა თქვენი მშვიდი დასვენებისთვის.",
    amenitiesTitle: "ძირითადი კომფორტი",
    waldDesc:
      "ფუფუნების სასტუმრო ეროვნული პარკის კარიბჭესთან ხელუხლებელ ტყეში პირდაპირი გასასვლელით, გათბობით ღია აუზითა და დასასვენებელი თერმული აბანოებით.",
    kiramalaDesc:
      "ექსკლუზიური კარ-მიდამო სოფელ რაჭისუბანში. ისიამოვნეთ ავთენტური ქვევრის მარნით, ტბის პირას მდებარე კოტეჯებითა და ღია ცის ქვეშ აბანოებით.",
    shalomDesc:
      "ტრადიციული კოშერული რესტორანი თბილისის ცენტრში. გთავაზობთ უგემრიელეს ქართულ და ებრაულ კერძებს სრული კოშერულობისა და კაშრუტის წესების დაცვით.",
    jerusalemDesc:
      "პრემიუმ კოშერული რესტორანი თბილისში. მდიდარი მენიუ, ავთენტური ატმოსფერო და საუკეთესო კოშერული ქართული კერძები და ღვინო.",
    close: "დახურვა",
    wineBadge: "ვაზის მემკვიდრეობა • ვაზი",
    wineTitle: "კახეთის მეღვინეობის ტრადიციები",
    wineDesc:
      "ქართული მეღვინეობის გული, სადაც ქვევრის ტრადიციები 8000 წელზე მეტს ითვლის.",
  },
  ru: {
    heroTitle: "Роскошный отдых в Лагодехи",
    heroSub:
      "Откройте для себя первозданную природу, термальные источники, кошерную кухню и премиальные винные туры Кахетии.",
    essentialsTitle: "Основы Путешествия",
    hotelsTitle: "Премиальное Размещение",
    restaurantsTitle: "Кошерные Рестораны в Тбилиси",
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
    shalomDesc:
      "Традиционный кошерный ресторан в центре Тбилиси. Предлагает изысканные блюда грузинской и еврейской кухни под строгим кошерным наблюдением.",
    jerusalemDesc:
      "Премиальный кошерный ресторан в Тбилиси. Богатый выбор аутентичных грузинских блюд, приготовленных в строгом соответствии с кашрутом.",
    close: "Закрыть",
    wineBadge: "Наследие Лозы • ვაზი",
    wineTitle: "Традиции Виноделия Кахетии",
    wineDesc:
      "Сердце грузинского виноделия, где традиции Квеври насчитывают более 8000 лет.",
  },
  he: {
    heroTitle: "חופשה יוקרתית בלגודחי",
    heroSub:
      "גלו את הטבע הפראי, המעיינות החמים, קולינריה כשרה וסיורי היין היוקרתיים של קאחתי.",
    essentialsTitle: "מידע חיוני לנוסע",
    hotelsTitle: "מקומות לינה יוקרתיים",
    restaurantsTitle: "מסעדות כשרות בטביליסי",
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
    shalomDesc:
      "מסעדה כשרה ומסורתית בלבו של טביליסי. מציעה מגוון מאכלים מהמטבח הגיאורגי והיהודי בהשגחה כשרה וקפדנית.",
    jerusalemDesc:
      "מסעדה כשרה יוקרתית בטביליסי. תפריט עשיר של מאכלים גיאורגיים אותנטיים ויינות כשרים המוכנים בהקפדה מלאה על כללי הכשרות.",
    close: "סגור",
    wineBadge: "מורשת הגפן • ვაზი",
    wineTitle: "מסורת היין של קאחתי",
    wineDesc:
      "לב עולם היין הגיאורგი, שבו מסורות הייצור בקווברי נמשכות מעל 8,000 שנה.",
  },
};

// --- ELEGANT SVG VINE DIVIDER ---
const VineDivider = () => (
  <div className="flex items-center justify-center my-8 text-amber-800/40">
    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-amber-900/30" />
    <svg className="w-8 h-8 mx-3 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C10.5 4 8 6 8 8.5c0 2.5 1.8 4.2 4 4.5v3c-2-.3-3.8-2-3.8-4.5 0-.8.2-1.5.6-2.2L7.3 8C6.5 9 6 10.2 6 11.5 6 14.5 8.2 17 11 17.5V21h2v-3.5c2.8-.5 5-3 5-6 0-1.3-.5-2.5-1.3-3.5l-1.5 1.3c.4.7.6 1.4.6 2.2 0 2.5-1.8 4.2-4 4.5v-3c2.2-.3 4-2 4-4.5C16 6 13.5 4 12 2z" />
    </svg>
    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-amber-900/30" />
  </div>
);

// --- REFINED MONOCHROME LANGUAGE SWITCHER ---
const LanguageSwitcher = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: "ka",
      label: "ქართული",
      short: "GE",
      flag: "https://flagcdn.com/w40/ge.png",
    },
    {
      code: "ru",
      label: "Русский",
      short: "RU",
      flag: "https://flagcdn.com/w40/ru.png",
    },
    {
      code: "he",
      label: "עברית",
      short: "HE",
      flag: "https://flagcdn.com/w40/il.png",
    },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3.5 py-1.5 bg-stone-900/90 border border-stone-700/60 hover:border-stone-400 rounded-full text-xs text-stone-200 transition-all duration-300 shadow-md backdrop-blur-md"
        aria-label="Select Language"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="w-4 h-3 rounded-[2px] object-cover opacity-90"
        />
        <span className="font-semibold text-[11px] tracking-wider uppercase text-stone-200">
          {currentLang.short}
        </span>
        <svg
          className={`w-3 h-3 text-stone-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-stone-900/95 border border-stone-700/60 rounded-xl shadow-2xl backdrop-blur-md py-2 z-50 overflow-hidden">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLang(item.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between transition-colors duration-200 ${
                lang === item.code
                  ? "bg-stone-800 text-white font-medium"
                  : "text-stone-300 hover:bg-stone-800/50 hover:text-stone-100"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.flag}
                  alt={item.label}
                  className="w-4 h-3 rounded-[2px] object-cover opacity-85"
                />
                <span>{item.label}</span>
              </div>
              {lang === item.code && (
                <span className="text-stone-400 text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- HEADER COMPONENT ---
const Header = ({ lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-serif text-stone-100 tracking-[0.2em] uppercase flex items-center gap-2">
          Kavkaz{" "}
          <span className="font-light text-amber-200/60 italic">Travel</span>
        </h1>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2.5 border-r border-stone-800/80 pr-5">
            <img
              src="https://flagcdn.com/w40/il.png"
              alt="Israel"
              className="w-5 h-auto rounded-[2px] opacity-90 shadow-sm"
            />
            <span className="text-stone-600 font-light text-xs">&times;</span>
            <img
              src="https://flagcdn.com/w40/ge.png"
              alt="Georgia"
              className="w-5 h-auto rounded-[2px] opacity-90 shadow-sm"
            />
          </div>

          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
};

const Hero = ({ t }) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-stone-950 overflow-hidden pt-16">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
        alt="Lagodekhi Nature"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="text-amber-200/70 tracking-[0.35em] uppercase text-xs mb-4 block font-serif">
          {t.wineBadge}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight leading-tight">
          {t.heroTitle}
        </h2>
        <p className="text-base md:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t.heroSub}
        </p>
      </div>
    </section>
  );
};

const WineFeature = ({ t, openLightbox }) => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
      title: "კახეთის ვენახები",
    },
    {
      url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
      title: "ვაზი",
    },
    {
      url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop",
      title: "რთველი",
    },
  ];

  return (
    <section className="py-20 bg-stone-900 border-y border-stone-800 text-stone-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-amber-300/80 text-xs tracking-[0.3em] uppercase block mb-2 font-serif">
          {t.wineBadge}
        </span>
        <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
          {t.wineTitle}
        </h3>
        <p className="text-stone-400 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12">
          {t.wineDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 overflow-hidden rounded-sm cursor-pointer border border-amber-900/20"
              onClick={() => openLightbox(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs tracking-wider text-amber-200 font-serif">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Generic Listing Card (PERFECTLY ALIGNED GRID FIX)
const ListingCard = ({
  name,
  description,
  amenities,
  images,
  t,
  openLightbox,
}) => {
  return (
    <div className="mb-24 last:mb-0 bg-stone-900/60 border border-stone-800 p-6 md:p-10 rounded-sm shadow-xl backdrop-blur-sm">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        {/* Main Image */}
        <div
          className="md:col-span-8 h-64 md:h-80 relative overflow-hidden group cursor-pointer border border-stone-800 rounded-sm"
          onClick={() => openLightbox(images[0])}
        >
          <img
            src={images[0]}
            alt={`${name} Main`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Stacked Small Images (Perfect Height Alignment) */}
        <div className="md:col-span-4 grid grid-cols-2 md:flex md:flex-col gap-4 h-32 md:h-80">
          {images.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full md:flex-1 relative overflow-hidden group cursor-pointer border border-stone-800 rounded-sm"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img}
                alt={`${name} Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-2xl md:text-3xl font-serif text-stone-100 mb-3">
          {name}
        </h4>

        <VineDivider />

        <p className="text-stone-300 font-light mb-8 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        <div className="pt-2">
          <h5 className="text-[10px] tracking-[0.25em] uppercase text-amber-200/60 mb-4">
            {t.amenitiesTitle}
          </h5>
          <div className="flex flex-wrap justify-center gap-2">
            {amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="text-xs font-light text-stone-300 bg-stone-800/80 border border-stone-700/50 px-3.5 py-1.5 rounded-none"
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-xs tracking-widest uppercase text-white border border-stone-700 hover:bg-stone-100 hover:text-stone-900 px-5 py-2.5 transition-all"
      >
        {t.close}
      </button>
      <img
        src={image}
        alt="Expanded view"
        className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl border border-stone-800"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [lang, setLang] = useState("ka");
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
        lang === "ka"
          ? ["ეროვნული პარკი", "წიწვოვანი ტყე", "ღია აუზი", "თერმული აბანოები"]
          : lang === "ru"
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
        lang === "ka"
          ? ["რაჭისუბანი", "ქვევრის მარანი", "კოტეჯები ტბასთან", "ღია აბანოები"]
          : lang === "ru"
            ? [
                "Рачисубани",
                "Погреб Квеври",
                "Домики у озера",
                "Купели на природе",
              ]
            : ["ראצ'იסובני", "מרתף קוובრი", "בקתות אגם", "טבילה בטבע"],
      images: [Kiramala1, Kiramala2, Kiramala3],
    },
  ];

  const restaurants = [
    {
      name: "Shalom Aleichem Kosher Restaurant",
      description: t.shalomDesc,
      amenities:
        lang === "ka"
          ? [
              "თბილისი",
              "გლატ კოშერი",
              "ქართულ-ებრაული სამზარეულო",
              "შაბათის კერძები",
            ]
          : lang === "ru"
            ? [
                "Тбилиси",
                "Глат Кошер",
                "Грузинско-Еврейская кухня",
                "Шаббатние обеды",
              ]
            : ["טביליסי", "גלאט כשר", "מטבח גיאורגי-יהודי", "ארוחות שבת"],
      images: [Aleichem1, Aleichem2, Aleichem3
      ],
    },
    {
      name: "Jerusalem Kosher Restaurant",
      description: t.jerusalemDesc,
      amenities:
        lang === "ka"
          ? [
              "თბილისი",
              "კოშერული სერტიფიკატი",
              "ცენტრალური ლოკაცია",
              "ღვინის ბარი",
            ]
          : lang === "ru"
            ? ["Тбилиси", "Кошерный сертификат", "Центр города", "Винный бар"]
            : ["טביליסי", "תעოדת כשרות", "במרכז העיר", "בר יין כשר"],
      images: [placeholder, placeholder, placeholder
      ],
    },
  ];

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-stone-950 text-stone-100 font-sans relative ${dir === "rtl" ? "text-right" : "text-left"}`}
    >
      <Header lang={lang} setLang={setLang} />
      <Hero t={t} />

      <WineFeature t={t} openLightbox={setLightboxImage} />

      {/* Resorts Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-amber-200/70 text-xs tracking-[0.3em] uppercase block mb-2 font-serif">
            Kakheti Resorts
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-white">
            {t.hotelsTitle}
          </h3>
        </div>

        {hotels.map((hotel, idx) => (
          <ListingCard
            key={idx}
            {...hotel}
            t={t}
            openLightbox={setLightboxImage}
          />
        ))}

        {/* Kosher Dining Section */}
        <div className="text-center mt-32 mb-16">
          <span className="text-amber-200/70 text-xs tracking-[0.3em] uppercase block mb-2 font-serif">
            Tbilisi Kosher Culinary
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-white">
            {t.restaurantsTitle}
          </h3>
        </div>

        {restaurants.map((restaurant, idx) => (
          <ListingCard
            key={idx}
            {...restaurant}
            t={t}
            openLightbox={setLightboxImage}
          />
        ))}
      </main>

      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        t={t}
      />
    </div>
  );
}
