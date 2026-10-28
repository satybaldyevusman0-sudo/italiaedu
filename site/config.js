// ItaliaEdu: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "italiaedu",
  "name": "ItaliaEdu",
  "nameParts": [
    "Italia",
    "Edu"
  ],
  "logo": "🇮🇹",
  "currency": "USD",
  "theme": {
    "primary": "#009246",
    "primaryDark": "#00733a",
    "accent": "#ce2b37",
    "dark": "#05261a"
  },
  "heroImage": "https://loremflickr.com/1600/900/italy,university?lock=151",
  "heroWiki": "University of Bologna",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Кыргызстан",
      "ru": "г. Бишкек, Кыргызстан",
      "en": "Bishkek, Kyrgyzstan"
    }
  },
  "text": {
    "tagline": {
      "ky": "Италиядагы университеттерге тапшыруу",
      "ru": "Поступление в университеты Италии",
      "en": "Admission to Italian universities"
    },
    "heroTitle": {
      "ky": "Италияда бекер окуңуз — DSU стипендиясы менен",
      "ru": "Учитесь в Италии бесплатно — со стипендией DSU",
      "en": "Study in Italy for free with a DSU grant"
    },
    "heroText": {
      "ky": "Болонья, Падуя, Сапиенца, Милан Политехникасы жана дагы 14 университет. Документтер, виза жана жылына €7000ге чейинки стипендия боюнча толук жардам.",
      "ru": "Болонья, Падуя, Сапиенца, Миланский политех и ещё 14 вузов. Полная помощь с документами, визой и стипендией до €7000 в год.",
      "en": "Bologna, Padua, Sapienza, Politecnico di Milano and 14 more. Full help with documents, visa and grants up to €7,000 a year."
    },
    "catalog": {
      "ky": "Университеттер",
      "ru": "Университеты",
      "en": "Universities"
    },
    "catalogText": {
      "ky": "Аймак, шаар жана багыт боюнча тандаңыз",
      "ru": "Выбирайте по региону, городу и направлению",
      "en": "Filter by region, city and field"
    },
    "search": {
      "ky": "Издөө: Болонья, медицина, Милан…",
      "ru": "Поиск: Болонья, медицина, Милан…",
      "en": "Search: Bologna, medicine, Milan…"
    },
    "plans": {
      "ky": "Пакеттер",
      "ru": "Пакеты",
      "en": "Packages"
    },
    "plansText": {
      "ky": "Тапшыруу пакеттери жана консультация",
      "ru": "Пакеты поступления и консультации",
      "en": "Admission packages and consultations"
    },
    "booking": {
      "ky": "Консультация",
      "ru": "Консультация",
      "en": "Consultation"
    },
    "bookingText": {
      "ky": "Бекер консультацияга жазылыңыз",
      "ru": "Запишитесь на бесплатную консультацию",
      "en": "Book a free consultation"
    },
    "bookBtn": {
      "ky": "Консультацияга жазылуу",
      "ru": "Записаться на консультацию",
      "en": "Book a consultation"
    },
    "buy": {
      "ky": "Себетке",
      "ru": "В корзину",
      "en": "Add to cart"
    },
    "about": {
      "ky": "ItaliaEdu — Кыргызстандан Италияга окууга жардам берген борбор: 500дөн ашык студент тапшырды.",
      "ru": "ItaliaEdu — центр поступления в Италию: более 500 студентов из Кыргызстана.",
      "en": "ItaliaEdu has helped 500+ Kyrgyz students enrol in Italy."
    }
  },
  "categories": [
    {
      "id": "north",
      "name": {
        "ky": "Түндүк Италия",
        "ru": "Северная Италия",
        "en": "Northern Italy"
      },
      "icon": "🏔️",
      "wiki": "Milan Cathedral",
      "tags": "milan,italy"
    },
    {
      "id": "center",
      "name": {
        "ky": "Борбордук Италия",
        "ru": "Центральная Италия",
        "en": "Central Italy"
      },
      "icon": "🏛️",
      "wiki": "Florence Cathedral",
      "tags": "florence,italy"
    },
    {
      "id": "south",
      "name": {
        "ky": "Түштүк Италия жана аралдар",
        "ru": "Юг Италии и острова",
        "en": "Southern Italy & islands"
      },
      "icon": "🌋",
      "wiki": "Naples",
      "tags": "naples,italy"
    },
    {
      "id": "poli",
      "name": {
        "ky": "Политехникалык",
        "ru": "Политехнические",
        "en": "Polytechnics"
      },
      "icon": "⚙️",
      "wiki": "Polytechnic University of Milan",
      "tags": "engineering,university"
    },
    {
      "id": "services",
      "name": {
        "ky": "Кызматтар жана курстар",
        "ru": "Услуги и курсы",
        "en": "Services & courses"
      },
      "icon": "📝",
      "wiki": "Italian language",
      "tags": "study,books"
    }
  ],
  "plans": [
    {
      "id": "consult",
      "icon": "💬",
      "price": 0,
      "priceLabel": {
        "ky": "Бекер",
        "ru": "Бесплатно",
        "en": "Free"
      },
      "title": {
        "ky": "Биринчи консультация",
        "ru": "Первая консультация",
        "en": "First consultation"
      },
      "desc": {
        "ky": "Университет жана багыт тандоо",
        "ru": "Выбор вуза и направления",
        "en": "Choosing a university and field"
      }
    },
    {
      "id": "standard",
      "icon": "🎓",
      "price": 900,
      "popular": true,
      "title": {
        "ky": "Стандарт пакет",
        "ru": "Стандартный пакет",
        "en": "Standard package"
      },
      "desc": {
        "ky": "3 университетке арыз + Universitaly",
        "ru": "3 заявки в вузы + Universitaly",
        "en": "3 applications + Universitaly"
      },
      "features": [
        {
          "ky": "Мотивациялык кат",
          "ru": "Мотивационное письмо",
          "en": "Motivation letter"
        },
        {
          "ky": "CV",
          "ru": "CV",
          "en": "CV"
        },
        {
          "ky": "Портал каттоо",
          "ru": "Регистрация на порталах",
          "en": "Portal registration"
        }
      ]
    },
    {
      "id": "premium",
      "icon": "👑",
      "price": 1800,
      "title": {
        "ky": "Премиум пакет",
        "ru": "Премиум-пакет",
        "en": "Premium package"
      },
      "desc": {
        "ky": "Толук коштоо + виза + DSU + жатакана",
        "ru": "Полное сопровождение + виза + DSU + жильё",
        "en": "Full support + visa + DSU + housing"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "11:30",
      "14:00",
      "15:30",
      "17:00",
      "18:30"
    ],
    "formats": [
      {
        "id": "office",
        "label": {
          "ky": "Кеңседе",
          "ru": "В офисе",
          "en": "In office"
        }
      },
      {
        "id": "online",
        "label": {
          "ky": "Онлайн (Zoom)",
          "ru": "Онлайн (Zoom)",
          "en": "Online (Zoom)"
        }
      }
    ],
    "itemLabel": {
      "ky": "Университет",
      "ru": "Университет",
      "en": "University"
    },
    "sundayOff": true
  },
  "features": [
    {
      "icon": "💶",
      "title": {
        "ky": "DSU стипендиясы",
        "ru": "Стипендия DSU",
        "en": "DSU grant"
      },
      "text": {
        "ky": "Жылына €7000ге чейин + жатакана.",
        "ru": "До €7000 в год + общежитие.",
        "en": "Up to €7,000 a year + housing."
      }
    },
    {
      "icon": "🇬🇧",
      "title": {
        "ky": "Англисче программалар",
        "ru": "Программы на английском",
        "en": "English programmes"
      },
      "text": {
        "ky": "Италия тилин билбесеңиз да болот.",
        "ru": "Можно без итальянского.",
        "en": "No Italian required."
      }
    },
    {
      "icon": "📄",
      "title": {
        "ky": "Документтер",
        "ru": "Документы",
        "en": "Documents"
      },
      "text": {
        "ky": "Котормо, апостиль, DOV/CIMEA.",
        "ru": "Перевод, апостиль, DOV/CIMEA.",
        "en": "Translation, apostille, DOV/CIMEA."
      }
    },
    {
      "icon": "🛂",
      "title": {
        "ky": "Виза",
        "ru": "Виза",
        "en": "Visa"
      },
      "text": {
        "ky": "Студенттик D виза боюнча жардам.",
        "ru": "Помощь со студенческой визой D.",
        "en": "Help with the D study visa."
      }
    }
  ],
  "stats": [
    {
      "value": "18",
      "label": {
        "ky": "университет",
        "ru": "университетов",
        "en": "universities"
      }
    },
    {
      "value": "500+",
      "label": {
        "ky": "студент тапшырды",
        "ru": "поступивших",
        "en": "students enrolled"
      }
    },
    {
      "value": "€7000",
      "label": {
        "ky": "стипендия/жыл",
        "ru": "стипендия/год",
        "en": "grant/year"
      }
    },
    {
      "value": "4.9★",
      "label": {
        "ky": "рейтинг",
        "ru": "рейтинг",
        "en": "rating"
      }
    }
  ],
  "specLabels": {
    "city": {
      "ky": "Шаар",
      "ru": "Город",
      "en": "City"
    },
    "founded": {
      "ky": "Негизделген",
      "ru": "Основан",
      "en": "Founded"
    },
    "students": {
      "ky": "Студенттер",
      "ru": "Студентов",
      "en": "Students"
    },
    "english": {
      "ky": "Англисче программалар",
      "ru": "Программы на английском",
      "en": "English programmes"
    },
    "grant": {
      "ky": "Стипендия",
      "ru": "Стипендия",
      "en": "Grant"
    },
    "duration": {
      "ky": "Мөөнөтү",
      "ru": "Срок",
      "en": "Duration"
    },
    "format": {
      "ky": "Формат",
      "ru": "Формат",
      "en": "Format"
    },
    "includes": {
      "ky": "Камтыйт",
      "ru": "Включает",
      "en": "Includes"
    }
  },
  "faq": [
    {
      "keys": [
        "бекер",
        "бесплат",
        "free",
        "dsu",
        "стипенд"
      ],
      "answer": {
        "ky": "Үй-бүлөнүн кирешеси аз болсо, DSU стипендиясы окуу акысын жаап, жылына €7000ге чейин берет.",
        "ru": "При невысоком доходе семьи DSU покрывает обучение и даёт до €7000 в год.",
        "en": "With a modest family income, DSU waives fees and pays up to €7,000 a year."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "тил",
        "язык",
        "language",
        "ielts"
      ],
      "answer": {
        "ky": "Англисче программаларга IELTS 6.0–6.5 жетиштүү, италиячага B2.",
        "ru": "Для английских программ — IELTS 6.0–6.5, для итальянских — B2.",
        "en": "IELTS 6.0–6.5 for English programmes, B2 for Italian ones."
      },
      "link": "/catalog?category=services"
    },
    {
      "keys": [
        "мөөнөт",
        "срок",
        "deadline",
        "качан"
      ],
      "answer": {
        "ky": "Арыздар көбүнчө январдан майга чейин кабыл алынат — эртерээк баштаңыз.",
        "ru": "Приём заявок обычно с января по май — начинайте заранее.",
        "en": "Applications usually run January–May — start early."
      },
      "link": "/booking"
    }
  ],
  "priceNote": {
    "ky": "Окуу акысы үй-бүлөнүн кирешесине (ISEE) жараша, DSU менен 0 болушу мүмкүн; баалар болжолдуу (USD).",
    "ru": "Плата зависит от дохода семьи (ISEE), с DSU может быть 0; цены ориентировочные (USD).",
    "en": "Fees depend on family income (ISEE) and can be zero with DSU; approximate (USD)."
  },
  "dataNote": {
    "ky": "Маалымат болжолдуу (28.10.2026), так шарттарды университеттин сайтынан текшериңиз. Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Данные ориентировочные (28.10.2026), уточняйте на сайте вуза. Фото: Wikipedia.",
    "en": "Approximate data (28.10.2026); check each university’s site. Photos: Wikipedia."
  },
  "sources": []
};
