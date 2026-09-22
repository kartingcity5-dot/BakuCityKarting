/* ============================================================
   BAKU KARTING — interactions & i18n
   ============================================================ */
(function () {
  "use strict";

  /* -------- TRANSLATIONS -------- */
  const I18N = {
    az: {
      "nav_experience": "Təcrübə",
      "nav_fleet": "Kartlar",
      "nav_pricing": "Qiymətlər",
      "nav_lounge": "Kafe",
      "nav_events": "Korporativ",
      "nav_gallery": "Qalereya",
      "nav_contact": "Əlaqə",
      "nav_book": "Yarışa yazıl",
      "hero_eyebrow": "Bakının mərkəzində · 802 m beynəlxalq trass",
      "hero_title_1": "ADRENALINI",
      "hero_title_2": "HİSS ET",
      "hero_sub": "SODI (Fransa) kartları, 802 metrlik beynəlxalq trass və trasa baxışlı kafe — Bakının mərkəzində unudulmaz komanda təcrübəsi.",
      "hero_book": "Yarışını sifariş et",
      "hero_explore": "Kartları gör",
      "stat_track": "Trass uzunluğu",
      "stat_group": "Qrup tutumu",
      "stat_age": "Minimum yaş",
      "stat_from": "İlkin qiymət",
      "exp_kicker": "Təcrübə",
      "exp_title": "Sadəcə yarış deyil — adrenalin məkanı",
      "exp_lead": "İlk dəfə gələnlərdən peşəkar sürücülərə qədər — hər ziyarət sürət, təhlükəsizlik və həyəcan üçün qurulub.",
      "feat1_t": "SODI (Fransa) kartlar",
      "feat1_d": "Fransa istehsalı peşəkar kartlar — uşaqlardan peşəkarlara qədər hər səviyyə üçün.",
      "feat2_t": "Tam təhlükəsizlik",
      "feat2_d": "Sertifikatlı təlimatçılar, rəsmi qoruyucu avadanlıq (kombinezon, şlem, balaklava, əlcək) və trass nəzarəti.",
      "feat3_t": "Uşaqlar üçün",
      "feat3_d": "5–10 yaş üçün 200CC kiçik maşınlar (maks 40 kq). Böyüklər üçün minimum yaş 10, minimum boy 110 sm.",
      "feat4_t": "Sodi RX",
      "feat4_d": "Təcrübəli sürücülər üçün yüksək performanslı SODI RX. Əvvəlcə digər kartlarda nəticə göstərin.",
      "feat5_t": "802 m beynəlxalq trass",
      "feat5_d": "Beynəlxalq standartlı 802 metrlik trass — 10 dəqiqəlik sürət dolu sessiyalar.",
      "feat6_t": "Kafe & istirahət",
      "feat6_d": "Trasa baxışlı panoramik zona, barista qəhvəsi, soyuq içkilər və təzə yeməklər.",
      "fleet_kicker": "Maşınlar",
      "fleet_title": "Maşınını seç",
      "fleet_lead": "SODI (Fransa) kartları — sürət, təhlükəsizlik və keyfiyyət balansı ilə seçilir.",
      "kart1_tag": "200CC · 5–10 yaş",
      "kart1_t": "Uşaq maşını",
      "kart1_d": "200CC · 6 at gücü. Ən kiçik sürücülər (5–10 yaş, maks 40 kq) üçün tam təhlükəsiz və nəzarətli sürüş.",
      "kart2_tag": "270CC · Ən populyar",
      "kart2_t": "Standart Kart",
      "kart2_d": "270CC · 9 at gücü, 80 km/saat. İmza tək nəfərlik kartımız — tam təchizat və təlim daxildir. Min. yaş 10, min. boy 110 sm.",
      "kart3_tag": "Peşəkar",
      "kart3_d": "Təcrübəli sürücülər üçün yüksək performanslı SODI RX. Əvvəlcə digər kartlarda nəticənizi göstərməlisiniz.",
      "kart4_tag": "390CC · 2 nəfər",
      "kart4_t": "2 nəfərlik Kart",
      "kart4_d": "390CC · 13 at gücü, 100 km/saat. İki nəfər yanaşı — ailə və dostlar üçün paylaşmalı macəra.",
      "spec_age": "Yaş",
      "spec_power": "Güc",
      "spec_speed": "Maks. sürət",
      "spec_price": "Qiymət",
      "spec_duration": "Müddət",
      "spec_level": "Səviyyə",
      "spec_seats": "Oturacaq",
      "spec_val_pro": "Təcrübəli",
      "price_kicker": "Qiymətlər",
      "price_title": "Sadə qiymətlər. Ciddi sürət.",
      "price_lead": "Bütün qiymətlərə kombinezon, şlem, balaklava, əlcək və təlim daxildir.",
      "price_choose": "Seç",
      "pr_single_badge": "Standart",
      "pr_single_t": "Tək nəfərlik",
      "pr_dur1": "10+1 dəqiqə",
      "pr_incl_short": "Bütün təchizat və təlim daxil",
      "pr_single_f": "Əcnəbilər üçün 49 AZN",
      "pr_twin_badge": "Ən populyar",
      "pr_twin_t": "2 nəfərlik kart",
      "pr_twin_f1": "2 nəfər yanaşı əyləşir",
      "pr_twin_f2": "Əcnəbilər üçün 59 AZN",
      "pr_kids_badge": "5–10 yaş",
      "pr_kids_t": "Uşaqlar üçün",
      "pr_dur2": "10 dəqiqə",
      "pr_kids_f1": "Kiçik maşınlar, maks 40 kq",
      "pr_kids_f2": "5–10 yaş üçün",
      "pr_sodi_badge": "Peşəkar",
      "pr_sodi_f1": "Yalnız təcrübəli sürücülər üçün",
      "pr_sodi_f2": "Digər kartlarda nəticə tələb olunur",
      "incl_t": "Qiymətə daxildir",
      "incl1": "Kombinezon",
      "incl2": "Balaklava",
      "incl3": "Əlcək",
      "incl4": "Şlem",
      "incl5": "Təlim",
      "req_t": "Tələblər",
      "req_age": "Minimum yaş",
      "req_h": "Minimum boy",
      "lounge_kicker": "Kafe və istirahət",
      "lounge_title": "Trasa baxışlı kafe",
      "lounge_lead": "Yarışdan sonra trasa baxışlı panoramik zonada dincəlin — barista qəhvəsi, soyuq içkilər, təzə sendviçlər, salatlar və desertlər.",
      "lounge_rating": "Hər gün",
      "lounge_reserve": "Yarışa yazıl",
      "lounge_events": "Tədbir keçir",
      "lm1": "Barista qəhvəsi",
      "lm2": "Soyuq içkilər",
      "lm3": "Sendviçlər",
      "lm4": "Salatlar",
      "lm5": "Desertlər",
      "lm6": "Panoramik zona",
      "events_kicker": "Korporativ & tədbirlər",
      "events_title": "Komanda ruhu burada yarışa çevrilir",
      "events_lead": "Banklar, şirkətlər və komandalar üçün korporativ paketlər — turnir yarışları, mükafatlandırma və 50+ nəfərədək tam mərkəz icarəsi.",
      "events_plan": "Planlaşdır →",
      "ev1_t": "Korporativ tədbirlər",
      "ev1_d": "Komanda ruhunu gücləndirən yarışlar, foto/video çəkiliş və loqolu aksesuarlar. Banklar və şirkətlər üçün ideal.",
      "ev2_t": "Turnir və mükafatlar",
      "ev2_d": "Vaxt ölçülü yarış, nəticələr və mükafatlandırma — diplomlar, medallar və xatirə fotoları.",
      "ev3_t": "Doğum günləri & qruplar",
      "ev3_d": "Dostlar, ailələr və qruplar üçün — 50+ nəfərədək tutum və tam mərkəz icarəsi imkanı.",
      "gallery_kicker": "Atmosfer",
      "gallery_title": "BCK-nin içində",
      "cta_title": "Ən sürətli dövrən səni gözləyir.",
      "cta_sub": "WhatsApp və ya telefonla bir dəqiqəyə yerini tut. Həftəsonları tez dolur.",
      "cta_book": "İndi yarışa yazıl",
      "contact_kicker": "Bizə gəl",
      "contact_title": "Bizi tap",
      "contact_addr_t": "Ünvan",
      "contact_addr": "Su İdman Sarayı ərazisi, Əhəd Yaqubov küç. 15, Bakı · Pulsuz parkinq",
      "contact_phone_t": "Telefon / WhatsApp",
      "contact_email_t": "E-poçt",
      "contact_hours_t": "İş saatları",
      "contact_hours": "Hər gün 11:00–23:00",
      "contact_form_t": "Mesaj göndər",
      "f_name": "Ad və soyad",
      "f_phone": "Telefon",
      "f_email": "E-poçt",
      "f_message": "Mesaj",
      "f_send": "Mesajı göndər",
      "f_thanks": "Təşəkkürlər! Tezliklə sizinlə əlaqə saxlayacağıq.",
      "footer_tag": "Baku City Karting — komanda ruhu burada yarışa çevrilir. Bakının mərkəzində peşəkar kartinq.",
      "footer_explore": "Kəşf et",
      "footer_visit": "Ziyarət",
      "footer_ready": "Yarışa hazırsan?",
      "footer_rules": "Təhlükəsizlik qaydaları",
      "footer_school": "Uşaqlar üçün",
      "footer_rights": "Bütün hüquqlar qorunur.",
      "book_kicker": "Rezervasiya",
      "book_title": "Yarışını sifariş et",
      "book_sub": "Məlumatları doldurun, biz telefonla təsdiqləyəcəyik.",
      "f_date": "Tarix",
      "f_time": "Uyğun vaxt",
      "f_people": "Sürücülər",
      "f_kart": "Kart növü",
      "f_notes": "Qeydlər (istəyə bağlı)",
      "opt_single": "Standart Kart (270CC)",
      "opt_twin": "2 nəfərlik Kart (390CC)",
      "opt_kids": "Uşaq maşını (200CC)",
      "opt_sodi": "Sodi RX",
      "book_confirm": "Rezervasiyanı təsdiqlə",
      "err_required": "Bu sahə tələb olunur",
      "err_phone": "Düzgün telefon nömrəsi daxil edin",
      "book_done_t": "Startdasan! 🏁",
      "book_done_d": "Sorğunuzu aldıq. Komandamız tezliklə təsdiq üçün sizə zəng edəcək.",
      "book_done_close": "Hazır",
      "fab_book": "Yazıl"
},
    ru: {
      "nav_experience": "Опыт",
      "nav_fleet": "Карты",
      "nav_pricing": "Цены",
      "nav_lounge": "Кафе",
      "nav_events": "Корпоратив",
      "nav_gallery": "Галерея",
      "nav_contact": "Контакты",
      "nav_book": "Записаться",
      "hero_eyebrow": "В центре Баку · трасса 802 м",
      "hero_title_1": "ПОЧУВСТВУЙ",
      "hero_title_2": "АДРЕНАЛИН",
      "hero_sub": "Карты SODI (Франция), международная трасса 802 м и кафе с видом на трассу — незабываемый командный опыт в центре Баку.",
      "hero_book": "Забронировать заезд",
      "hero_explore": "Смотреть карты",
      "stat_track": "Длина трассы",
      "stat_group": "Вместимость группы",
      "stat_age": "Мин. возраст",
      "stat_from": "Цена от",
      "exp_kicker": "Опыт",
      "exp_title": "Не просто гонка — адреналиновое место",
      "exp_lead": "От новичков до опытных водителей — каждый визит создан для скорости, безопасности и драйва.",
      "feat1_t": "Карты SODI (Франция)",
      "feat1_d": "Профессиональные карты французского производства — для любого уровня, от детей до профи.",
      "feat2_t": "Полная безопасность",
      "feat2_d": "Сертифицированные инструкторы, официальная защитная экипировка (комбинезон, шлем, балаклава, перчатки) и контроль трассы.",
      "feat3_t": "Для детей",
      "feat3_d": "Машины 200CC для 5–10 лет (макс 40 кг). Для взрослых: мин. возраст 10, мин. рост 110 см.",
      "feat4_t": "Sodi RX",
      "feat4_d": "Высокопроизводительный SODI RX для опытных водителей. Сначала покажите результат на других картах.",
      "feat5_t": "Трасса 802 м",
      "feat5_d": "Трасса международного стандарта 802 метра — 10-минутные сессии, полные скорости.",
      "feat6_t": "Кафе и отдых",
      "feat6_d": "Панорамная зона с видом на трассу, кофе от бариста, холодные напитки и свежая еда.",
      "fleet_kicker": "Машины",
      "fleet_title": "Выбери свою машину",
      "fleet_lead": "Карты SODI (Франция) — баланс скорости, безопасности и качества.",
      "kart1_tag": "200CC · 5–10 лет",
      "kart1_t": "Детская машина",
      "kart1_d": "200CC · 6 л.с. Полностью безопасная и контролируемая езда для самых маленьких (5–10 лет, макс 40 кг).",
      "kart2_tag": "270CC · Популярный",
      "kart2_t": "Стандартный карт",
      "kart2_d": "270CC · 9 л.с., 80 км/ч. Наш фирменный одноместный карт — экипировка и инструктаж включены. Мин. возраст 10, рост 110 см.",
      "kart3_tag": "Профи",
      "kart3_d": "Высокопроизводительный SODI RX для опытных водителей. Сначала покажите результат на других картах.",
      "kart4_tag": "390CC · 2 места",
      "kart4_t": "Двухместный карт",
      "kart4_d": "390CC · 13 л.с., 100 км/ч. Двое рядом — совместное приключение для семьи и друзей.",
      "spec_age": "Возраст",
      "spec_power": "Мощность",
      "spec_speed": "Макс. скорость",
      "spec_price": "Цена",
      "spec_duration": "Длит.",
      "spec_level": "Уровень",
      "spec_seats": "Места",
      "spec_val_pro": "Опытные",
      "price_kicker": "Цены",
      "price_title": "Простые тарифы. Серьёзная скорость.",
      "price_lead": "Во все цены входят комбинезон, шлем, балаклава, перчатки и инструктаж.",
      "price_choose": "Выбрать",
      "pr_single_badge": "Стандарт",
      "pr_single_t": "Один человек",
      "pr_dur1": "10+1 минут",
      "pr_incl_short": "Вся экипировка и инструктаж",
      "pr_single_f": "Для иностранцев 49 AZN",
      "pr_twin_badge": "Самый популярный",
      "pr_twin_t": "Двухместный карт",
      "pr_twin_f1": "Двое рядом",
      "pr_twin_f2": "Для иностранцев 59 AZN",
      "pr_kids_badge": "5–10 лет",
      "pr_kids_t": "Дети",
      "pr_dur2": "10 минут",
      "pr_kids_f1": "Маленькие машины, макс 40 кг",
      "pr_kids_f2": "Для 5–10 лет",
      "pr_sodi_badge": "Профи",
      "pr_sodi_f1": "Только для опытных водителей",
      "pr_sodi_f2": "Нужен результат на других картах",
      "incl_t": "Входит в цену",
      "incl1": "Комбинезон",
      "incl2": "Балаклава",
      "incl3": "Перчатки",
      "incl4": "Шлем",
      "incl5": "Инструктаж",
      "req_t": "Требования",
      "req_age": "Мин. возраст",
      "req_h": "Мин. рост",
      "lounge_kicker": "Кафе и отдых",
      "lounge_title": "Кафе с видом на трассу",
      "lounge_lead": "После заезда отдохните в панорамной зоне с видом на трассу — кофе от бариста, холодные напитки, свежие сэндвичи, салаты и десерты.",
      "lounge_rating": "Ежедневно",
      "lounge_reserve": "Записаться",
      "lounge_events": "Провести событие",
      "lm1": "Кофе бариста",
      "lm2": "Холодные напитки",
      "lm3": "Сэндвичи",
      "lm4": "Салаты",
      "lm5": "Десерты",
      "lm6": "Панорамная зона",
      "events_kicker": "Корпоратив и события",
      "events_title": "Командный дух превращается в гонку",
      "events_lead": "Корпоративные пакеты для банков, компаний и команд — турниры, награждения и аренда всего центра до 50+ человек.",
      "events_plan": "Спланировать →",
      "ev1_t": "Корпоративы",
      "ev1_d": "Гонки для укрепления командного духа, фото/видео и аксессуары с логотипом. Идеально для банков и компаний.",
      "ev2_t": "Турниры и награды",
      "ev2_d": "Гонка на время, результаты и награждение — дипломы, медали и памятные фото.",
      "ev3_t": "Дни рождения и группы",
      "ev3_d": "Для друзей, семей и групп — вместимость до 50+ и аренда всего центра.",
      "gallery_kicker": "Атмосфера",
      "gallery_title": "Внутри BCK",
      "cta_title": "Твой быстрый круг уже ждёт.",
      "cta_sub": "Забронируй по WhatsApp или телефону за минуту. Выходные заполняются быстро.",
      "cta_book": "Забронировать сейчас",
      "contact_kicker": "Приезжай",
      "contact_title": "Найди нас",
      "contact_addr_t": "Адрес",
      "contact_addr": "Территория Дворца водного спорта, ул. Ахада Ягубова 15, Баку · Бесплатная парковка",
      "contact_phone_t": "Телефон / WhatsApp",
      "contact_email_t": "Эл. почта",
      "contact_hours_t": "Часы работы",
      "contact_hours": "Ежедневно 11:00–23:00",
      "contact_form_t": "Отправить сообщение",
      "f_name": "Имя и фамилия",
      "f_phone": "Телефон",
      "f_email": "Эл. почта",
      "f_message": "Сообщение",
      "f_send": "Отправить",
      "f_thanks": "Спасибо! Мы скоро свяжемся с вами.",
      "footer_tag": "Baku City Karting — командный дух превращается в гонку. Профессиональный картинг в центре Баку.",
      "footer_explore": "Обзор",
      "footer_visit": "Визит",
      "footer_ready": "Готов гонять?",
      "footer_rules": "Правила безопасности",
      "footer_school": "Для детей",
      "footer_rights": "Все права защищены.",
      "book_kicker": "Бронирование",
      "book_title": "Забронируй заезд",
      "book_sub": "Заполните данные, и мы подтвердим по телефону.",
      "f_date": "Дата",
      "f_time": "Удобное время",
      "f_people": "Гонщики",
      "f_kart": "Тип карта",
      "f_notes": "Примечания (необязательно)",
      "opt_single": "Стандартный карт (270CC)",
      "opt_twin": "Двухместный карт (390CC)",
      "opt_kids": "Детская машина (200CC)",
      "opt_sodi": "Sodi RX",
      "book_confirm": "Подтвердить бронь",
      "err_required": "Обязательное поле",
      "err_phone": "Введите корректный номер",
      "book_done_t": "Ты на старте! 🏁",
      "book_done_d": "Мы получили заявку. Наша команда скоро позвонит для подтверждения.",
      "book_done_close": "Готово",
      "fab_book": "Бронь"
},
    en: {
      "nav_experience": "Experience",
      "nav_fleet": "The Karts",
      "nav_pricing": "Pricing",
      "nav_lounge": "Café",
      "nav_events": "Corporate",
      "nav_gallery": "Gallery",
      "nav_contact": "Contact",
      "nav_book": "Book a Race",
      "hero_eyebrow": "Central Baku · 802 m international track",
      "hero_title_1": "FEEL THE",
      "hero_title_2": "ADRENALINE",
      "hero_sub": "SODI (France) karts, an 802-metre international track and a track-view café — an unforgettable team experience in the heart of Baku.",
      "hero_book": "Book Your Race",
      "hero_explore": "See the Karts",
      "stat_track": "Track length",
      "stat_group": "Group capacity",
      "stat_age": "Min age",
      "stat_from": "Starting price",
      "exp_kicker": "The Experience",
      "exp_title": "More than a race — an adrenaline destination",
      "exp_lead": "From first-timers to experienced drivers, every visit is built for speed, safety and a serious rush.",
      "feat1_t": "SODI (France) Karts",
      "feat1_d": "Professional French-built karts — for every level, from kids to pros.",
      "feat2_t": "Full Safety",
      "feat2_d": "Certified instructors, official protective gear (suit, helmet, balaclava, gloves) and full track control.",
      "feat3_t": "For Kids",
      "feat3_d": "200CC small cars for ages 5–10 (max 40 kg). For adults: minimum age 10, minimum height 110 cm.",
      "feat4_t": "Sodi RX",
      "feat4_d": "High-performance SODI RX for experienced drivers. Prove your times on our other karts first.",
      "feat5_t": "802 m International Track",
      "feat5_d": "An 802-metre international-standard circuit — fast, 10-minute sessions.",
      "feat6_t": "Café & Lounge",
      "feat6_d": "A panoramic track-view zone with barista coffee, cold drinks and fresh food.",
      "fleet_kicker": "The Machines",
      "fleet_title": "Choose your machine",
      "fleet_lead": "SODI (France) karts — chosen for their balance of speed, safety and quality.",
      "kart1_tag": "200CC · Ages 5–10",
      "kart1_t": "Kids Kart",
      "kart1_d": "200CC · 6 HP. A fully safe, controlled ride for our youngest drivers (ages 5–10, max 40 kg).",
      "kart2_tag": "270CC · Most Popular",
      "kart2_t": "Standard Kart",
      "kart2_d": "270CC · 9 HP, 80 km/h. Our signature single-seater — full gear and briefing included. Min age 10, height 110 cm.",
      "kart3_tag": "Pro Only",
      "kart3_d": "High-performance SODI RX for experienced drivers. You must first prove your times on our other karts.",
      "kart4_tag": "390CC · 2 Seats",
      "kart4_t": "2-Person Kart",
      "kart4_d": "390CC · 13 HP, 100 km/h. Two side by side — a shared adventure for family and friends.",
      "spec_age": "Age",
      "spec_power": "Power",
      "spec_speed": "Top speed",
      "spec_price": "Price",
      "spec_duration": "Duration",
      "spec_level": "Level",
      "spec_seats": "Seats",
      "spec_val_pro": "Experienced",
      "price_kicker": "Pricing",
      "price_title": "Simple rates. Serious speed.",
      "price_lead": "Every price includes a racing suit, helmet, balaclava, gloves and a briefing.",
      "price_choose": "Choose",
      "pr_single_badge": "Standard",
      "pr_single_t": "Single",
      "pr_dur1": "10+1 minutes",
      "pr_incl_short": "All gear & briefing included",
      "pr_single_f": "49 AZN for foreign guests",
      "pr_twin_badge": "Most Popular",
      "pr_twin_t": "2-Person Kart",
      "pr_twin_f1": "Two people side by side",
      "pr_twin_f2": "59 AZN for foreign guests",
      "pr_kids_badge": "Ages 5–10",
      "pr_kids_t": "Kids",
      "pr_dur2": "10 minutes",
      "pr_kids_f1": "Small cars, max 40 kg",
      "pr_kids_f2": "For ages 5–10",
      "pr_sodi_badge": "Pro Only",
      "pr_sodi_f1": "Experienced drivers only",
      "pr_sodi_f2": "Requires proven lap times",
      "incl_t": "Included in the price",
      "incl1": "Racing suit",
      "incl2": "Balaclava",
      "incl3": "Gloves",
      "incl4": "Helmet",
      "incl5": "Safety briefing",
      "req_t": "Requirements",
      "req_age": "Minimum age",
      "req_h": "Minimum height",
      "lounge_kicker": "Café & Lounge",
      "lounge_title": "A café overlooking the track",
      "lounge_lead": "After your race, relax in the panoramic track-view zone — barista coffee, cold drinks, fresh sandwiches, salads and desserts.",
      "lounge_rating": "Every day",
      "lounge_reserve": "Book a Race",
      "lounge_events": "Host an Event",
      "lm1": "Barista coffee",
      "lm2": "Cold drinks",
      "lm3": "Sandwiches",
      "lm4": "Salads",
      "lm5": "Desserts",
      "lm6": "Panoramic zone",
      "events_kicker": "Corporate & Events",
      "events_title": "Where team spirit becomes a race",
      "events_lead": "Corporate packages for banks, companies and teams — tournament races, awards and full-centre rental for up to 50+ guests.",
      "events_plan": "Plan it →",
      "ev1_t": "Corporate Events",
      "ev1_d": "Team-building races, photo/video and logo accessories. Ideal for banks and companies.",
      "ev2_t": "Tournaments & Awards",
      "ev2_d": "Timed racing, results and an awards ceremony — diplomas, medals and souvenir photos.",
      "ev3_t": "Birthdays & Groups",
      "ev3_d": "For friends, families and groups — capacity up to 50+ and full-centre rental available.",
      "gallery_kicker": "The Scene",
      "gallery_title": "Inside BCK",
      "cta_title": "Your fastest lap is waiting.",
      "cta_sub": "Book by WhatsApp or phone in under a minute. Weekends fill up fast.",
      "cta_book": "Book a Race Now",
      "contact_kicker": "Visit Us",
      "contact_title": "Find us",
      "contact_addr_t": "Address",
      "contact_addr": "Water Sports Palace area, Ahad Yaqubov St 15, Baku · Free parking",
      "contact_phone_t": "Phone / WhatsApp",
      "contact_email_t": "Email",
      "contact_hours_t": "Opening hours",
      "contact_hours": "Every day 11:00–23:00",
      "contact_form_t": "Send a message",
      "f_name": "Full name",
      "f_phone": "Phone",
      "f_email": "Email",
      "f_message": "Message",
      "f_send": "Send Message",
      "f_thanks": "Thanks! We'll get back to you shortly.",
      "footer_tag": "Baku City Karting — where team spirit becomes a race. Professional karting in central Baku.",
      "footer_explore": "Explore",
      "footer_visit": "Visit",
      "footer_ready": "Ready to race?",
      "footer_rules": "Safety Rules",
      "footer_school": "For Kids",
      "footer_rights": "All rights reserved.",
      "book_kicker": "Reservation",
      "book_title": "Book your race",
      "book_sub": "Fill in the details and we'll confirm your slot by phone.",
      "f_date": "Date",
      "f_time": "Preferred time",
      "f_people": "Racers",
      "f_kart": "Kart type",
      "f_notes": "Notes (optional)",
      "opt_single": "Standard Kart (270CC)",
      "opt_twin": "2-Person Kart (390CC)",
      "opt_kids": "Kids Kart (200CC)",
      "opt_sodi": "Sodi RX",
      "book_confirm": "Confirm Booking",
      "err_required": "This field is required",
      "err_phone": "Enter a valid phone number",
      "book_done_t": "You're on the grid! 🏁",
      "book_done_d": "We've received your request. Our team will call you shortly to confirm.",
      "book_done_close": "Done",
      "fab_book": "Book"
},
  };

    const LANG_LABEL = { az: "AZ", ru: "RU", en: "EN" };
  const HTML_LANG = { az: "az", ru: "ru", en: "en" };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.az;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] == null) return;
      // Preserve child elements: only replace leading/trailing text where there are none.
      if (el.children.length === 0) {
        el.textContent = dict[key];
      } else {
        // update first text node only (used by eyebrow / stat labels via <i>)
        el.childNodes.forEach((n) => { if (n.nodeType === 3 && n.textContent.trim()) n.textContent = dict[key]; });
        if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) {
          // no direct text node — set as label span fallback
        }
      }
    });
    document.documentElement.lang = HTML_LANG[lang] || "az";
    const cur = document.getElementById("langCurrent");
    if (cur) cur.textContent = LANG_LABEL[lang];
    document.querySelectorAll("#langMenu li").forEach((li) =>
      li.classList.toggle("active", li.dataset.lang === lang)
    );
    try { localStorage.setItem("bk_lang", lang); } catch (e) {}
  }

  /* -------- INIT -------- */
  document.addEventListener("DOMContentLoaded", () => {
    // preloader
    const pre = document.getElementById("preloader");
    const hidePre = () => pre && pre.classList.add("hide");
    window.addEventListener("load", () => setTimeout(hidePre, 500));
    setTimeout(hidePre, 2200); // safety

    // year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // language
    let saved = "az";
    try { saved = localStorage.getItem("bk_lang") || "az"; } catch (e) {}
    applyLang(saved);

    const lang = document.getElementById("lang");
    const langBtn = document.getElementById("langBtn");
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = lang.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll("#langMenu li").forEach((li) => {
      li.addEventListener("click", () => {
        applyLang(li.dataset.lang);
        lang.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", () => lang.classList.remove("open"));

    // sticky nav
    const nav = document.getElementById("nav");
    const fab = document.querySelector(".fab");
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 30);
      if (fab) fab.classList.toggle("fab-show", y > 560);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // mobile menu
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
    const scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    document.body.appendChild(scrim);
    const closeMenu = () => {
      burger.classList.remove("open");
      navLinks.classList.remove("open");
      scrim.classList.remove("show");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    const toggleMenu = () => {
      const open = navLinks.classList.toggle("open");
      burger.classList.toggle("open", open);
      scrim.classList.toggle("show", open);
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", toggleMenu);
    scrim.addEventListener("click", closeMenu);
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

    // active nav link on scroll
    const sections = [...document.querySelectorAll("section[id]")];
    const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const l = linkFor(en.target.id);
          if (!l) return;
          if (en.isIntersecting) {
            navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
            l.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    // scroll reveal
    document.querySelectorAll(".section-head, .feature, .kart-card, .price-card, .event-card, .lounge-copy, .lounge-media, .g, .contact-info, .contact-form-wrap")
      .forEach((el, i) => {
        el.setAttribute("data-reveal", "");
        el.style.transitionDelay = (i % 4) * 60 + "ms";
      });
    const revObs = new IntersectionObserver(
      (entries, obs) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revObs.observe(el));

    // counters
    const counters = document.querySelectorAll("[data-count]");
    const cObs = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const dur = 1400; const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => cObs.observe(c));

    /* -------- BOOKING MODAL -------- */
    const modal = document.getElementById("bookModal");
    const bookForm = document.getElementById("bookForm");
    const bookDone = document.getElementById("bookDone");
    let lastFocus = null;
    const openModal = () => {
      lastFocus = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      bookForm.hidden = false; bookDone.hidden = true;
      const first = document.getElementById("bName");
      setTimeout(() => first && first.focus(), 60);
      // default date = today
      const d = document.getElementById("bDate");
      if (d && !d.value) d.value = new Date().toISOString().split("T")[0];
    };
    const closeModal = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    };
    document.querySelectorAll("[data-book]").forEach((b) => b.addEventListener("click", openModal));
    modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });

    // validation helpers
    const markInvalid = (input, bad) => {
      input.closest(".field").classList.toggle("invalid", bad);
    };
    const validPhone = (v) => /[0-9]{6,}/.test(v.replace(/[^0-9]/g, ""));

    // booking submit
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      const name = document.getElementById("bName");
      const phone = document.getElementById("bPhone");
      const date = document.getElementById("bDate");
      const time = document.getElementById("bTime");
      [name, date, time].forEach((f) => { const bad = !f.value.trim(); markInvalid(f, bad); if (bad) ok = false; });
      const pbad = !validPhone(phone.value); markInvalid(phone, pbad); if (pbad) ok = false;
      if (!ok) { bookForm.querySelector(".field.invalid input, .field.invalid select")?.focus(); return; }

      const btn = document.getElementById("bookSubmit");
      const orig = btn.textContent;
      btn.disabled = true; btn.textContent = "…";
      setTimeout(() => {
        btn.disabled = false; btn.textContent = orig;
        bookForm.hidden = true; bookDone.hidden = false;
        bookForm.reset();
      }, 900);
    });
    // clear invalid on input
    bookForm.querySelectorAll("input,select").forEach((f) =>
      f.addEventListener("input", () => f.closest(".field").classList.remove("invalid"))
    );

    /* -------- QUICK CONTACT FORM -------- */
    const quick = document.getElementById("quickForm");
    quick.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cName");
      const phone = document.getElementById("cPhone");
      let ok = true;
      [name, phone].forEach((f) => { const bad = !f.value.trim(); markInvalid(f, bad); if (bad) ok = false; });
      if (!ok) return;
      const success = document.getElementById("quickSuccess");
      const btn = quick.querySelector("button[type=submit]");
      btn.disabled = true;
      setTimeout(() => {
        btn.disabled = false;
        success.hidden = false;
        quick.reset();
        setTimeout(() => (success.hidden = true), 5000);
      }, 700);
    });
    quick.querySelectorAll("input").forEach((f) =>
      f.addEventListener("input", () => f.closest(".field").classList.remove("invalid"))
    );

    // subtle card tilt on pointer (desktop)
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.querySelectorAll("[data-tilt]").forEach((card) => {
        card.addEventListener("pointermove", (e) => {
          const r = card.getBoundingClientRect();
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
          card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      });
    }
  });
})();
