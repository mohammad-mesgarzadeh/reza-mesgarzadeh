import { Content } from "./types";
import GoldenEiffelTower1 from "./assets/GoldenEiffelTower/IMG_20250507_145011.jpg";
import GoldenEiffelTower2 from "./assets/GoldenEiffelTower/IMG_20250507_145113.jpg";
import GoldenEiffelTower3 from "./assets/GoldenEiffelTower/IMG_20250507_145313.jpg";
import BronzeEiffelTower1 from "./assets/BronzeEiffelTower/IMG_20250508_173939.jpg";
import BronzeEiffelTower2 from "./assets/BronzeEiffelTower/IMG_20250508_174152.jpg";
import BronzeEiffelTower3 from "./assets/BronzeEiffelTower/IMG_20250508_174517.jpg";
import Triangular1 from "./assets/Triangular Self-Supporting Telecom Tower/IMG_20250507_174707.jpg";
import Triangular2 from "./assets/Triangular Self-Supporting Telecom Tower/IMG_20250507_174841.jpg";
import FourLeg1 from "./assets/Four-Leg Self-Supporting Tower Model/IMG_20250508_183911.jpg";
import FourLeg2 from "./assets/Four-Leg Self-Supporting Tower Model/IMG_20250508_184020.jpg";
import AdvancedBracedTelecomTower1 from "./assets/Advanced Braced Telecom Tower/IMG_20250508_185546.jpg";
import AdvancedBracedTelecomTower2 from "./assets/Advanced Braced Telecom Tower/IMG_20250508_185555.jpg";
import DoubleTowerPowerTransmission1 from "./assets/Double-Tower Power Transmission Line Model/IMG_20250509_130446.jpg";
import DoubleTowerPowerTransmission2 from "./assets/Double-Tower Power Transmission Line Model/IMG_20250509_130510.jpg";
import HighVoltage1 from "./assets/HighVoltageTransmissionTowerModel/IMG_20250508_181109.jpg";
import HighVoltage2 from "./assets/HighVoltageTransmissionTowerModel/IMG_20250508_181336.jpg";
export const CONTENT: Content = {
  fa: {
    dir: "rtl",
    font: "'Vazirmatn', sans-serif",
    brand: "رضا مسگرزاده",
    nav: {
      pbx: "سیستم‌های PBX",
      towers: "مدل‌های دکل",
      towerModels: "مدل‌های دکل",
      projects: "پروژه‌ها",
      contact: "تماس",
    },
    callNow: "تماس فوری",
    hero: {
      badge: "متخصص ارتباطات صنعتی",
      headline: "راه‌حل‌های کامل ارتباطی",
      subheadline: "سیستم‌های PBX و مدل‌های دکل مخابراتی",
      desc: "از طراحی و نصب سانترال‌های تلفنی تا ارائه ماکت‌های مهندسی دکل‌های مخابراتی — راه‌حل‌های یکپارچه برای زیرساخت ارتباطی شما.",
      cta1: "مشاوره رایگان",
      cta2: "تماس مستقیم",
    },
    pbxSection: {
      title: "سیستم‌های PBX",
      subtitle: "سانترال‌های تلفنی حرفه‌ای برای کسب‌وکار شما",
      services: [
        { title: "فروش سیستم‌های PBX", desc: "تأمین تجهیزات از برندهای معتبر جهانی با بهترین قیمت بازار", icon: "Radio" },
        { title: "نصب و راه‌اندازی", desc: "پیکربندی و راه‌اندازی توسط متخصصان با تجربه", icon: "Wrench" },
        { title: "پشتیبانی و نگهداری", desc: "خدمات پس از فروش ۲۴/۷ و قراردادهای نگهداری دوره‌ای", icon: "Headphones" },
        { title: "مشاوره فنی", desc: "تحلیل نیازها و طراحی بهینه‌ترین راه‌حل برای سازمان شما", icon: "Shield" },
      ],
      features: [
        { icon: "Zap", title: "نصب سریع", desc: "راه‌اندازی در کمترین زمان ممکن بدون اختلال در کسب‌وکار شما" },
        { icon: "Globe", title: "سیستم IP", desc: "پشتیبانی از VoIP و SIP برای ارتباطات اینترنتی مقرون‌به‌صرفه" },
        { icon: "BarChart2", title: "گزارش‌دهی پیشرفته", desc: "مدیریت مکالمات، آمار تماس و کنترل هزینه‌ها در لحظه" },
      ],
    },
    towerModels: {
      title: "مدل‌های دکل مخابراتی",
      subtitle: "ماکت‌های مهندسی دقیق برای نمایش، آموزش و ارائه",
      intro: "ماکت‌های مقیاس‌شده از دکل‌های مخابراتی با بالاترین دقت مهندسی ساخته شده‌اند. این محصولات برای استفاده در ارائه‌های مهندسی، نمایشگاه‌ها، مراکز آموزشی و مجموعه‌های کلکسیونی صنعتی طراحی شده‌اند. هر ماکت با جزئیات دقیق و مطابق با استانداردهای واقعی دکل‌های مخابراتی ساخته می‌شود.",
      categories: [
        { name: "ماکت‌های معماری", desc: "ماکت دکل‌های سه‌پایه و خرپایی با جزئیات کامل اتصالات", icon: "TowerControl" },
        { name: "ماکت دکل برق", desc: "ماکت دکل‌های مهاری با کابل‌ها و مهارهای دقیق", icon: "TowerControl" },
        { name: "ماکت دکل مخابراتی", desc: "ماکت دکل‌های مونوپل و خودایستا با طراحی صنعتی", icon: "TowerControl" },
        { name: "مدل‌های سفارشی", desc: "طراحی و ساخت ماکت بر اساس نقشه‌های مهندسی شما", icon: "Building2" },
      ],
      products: [
        {
          id: "97ca0282-454f-4b28-b8f7-4feb9f66289e",
          name: "ماکت برج ایفل طلایی",
          cover: GoldenEiffelTower1,
          scale: "1:390",
          material: "ورق سفید گالوانیزه",
          useCase: "پروژه‌های مهندسی، آموزشی و نمایشگاهی",
          category: "ماکت‌های معماری",
          price: "تماس برای قیمت",
          images: [
            GoldenEiffelTower1,
            GoldenEiffelTower2,
            GoldenEiffelTower3,
          ],
          description:
            "ماکت برج ایفل با دقت ساخت بالا و طراحی مهندسی دقیق بر اساس نمونه واقعی ساخته شده است. این ماکت برای استفاده در پروژه‌های دانشجویی، ارائه‌های مهندسی، نمایشگاه‌های تخصصی و کاربردهای دکوراتیو طراحی شده و تمامی جزئیات سازه اصلی برج ایفل را در مقیاس کوچک بازسازی می‌کند. کیفیت ساخت بالا، تعداد قطعات زیاد و اجرای دقیق جزئیات، این محصول را به گزینه‌ای مناسب برای کلکسیونرها، دانشجویان و شرکت‌های مهندسی تبدیل کرده است.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۸۵ سانتی‌متر" },
            { label: "ضلع قاعده پایین", value: "۳۰ سانتی‌متر" },
            { label: "ضلع قاعده بالا", value: "۳ سانتی‌متر" },
            { label: "تعداد تکه", value: "۵ تکه" },
            { label: "تعداد قطعات", value: "۱۷۳۵ قطعه" },
            { label: "جنس بدنه", value: "ورق سفید گالوانیزه" },
            { label: "رنگ", value: "طلایی مات، طوسی، مشکی" },
            { label: "وزن", value: "۱ کیلوگرم" },
            { label: "زمان آماده‌سازی", value: "۷۰ ساعت" },
          ],
        },
        {
          id: "292829cb-5e64-440b-8416-b9e593c4808a",
          name: "ماکت برج ایفل برنزی",
          cover: BronzeEiffelTower1,
          scale: "1:340",
          material: "ورق سفید گالوانیزه",
          useCase: "دکوراسیون، نمایشگاهی و هدیه",
          category: "ماکت‌های معماری",
          price: "تماس برای قیمت",
          images: [
            BronzeEiffelTower1,
            BronzeEiffelTower2,
            BronzeEiffelTower3,
          ],
          description:
            "ماکت فلزی برج ایفل با الهام از نماد جاودانه شهر پاریس و با دقت بالا در جزئیات طراحی و ساخت شده است. این اثر حاصل بیش از ۷۰ ساعت کار دقیق و هنرمندانه بوده و تمامی اجزای سازه اصلی برج ایفل را با ظرافت بازسازی می‌کند. ترکیب رنگ‌های مسی، نقره‌ای و فیروزه‌ای جلوه‌ای خاص و لوکس به این ماکت بخشیده و آن را به گزینه‌ای ایده‌آل برای دکوراسیون منزل، گالری‌ها، فروشگاه‌ها و همچنین هدیه‌ای ارزشمند و ماندگار تبدیل کرده است. این محصول تنها یک ماکت نیست، بلکه بازآفرینی بخشی از هویت و شکوه پاریس در قالب یک اثر هنری فلزی است.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۹۷ سانتی‌متر" },
            { label: "جنس بدنه", value: "ورق سفید گالوانیزه" },
            { label: "رنگ‌آمیزی", value: "مسی، نقره‌ای و فیروزه‌ای" },
            { label: "تعداد تکه", value: "۵ تکه" },
            { label: "تعداد قطعات", value: "۱۷۳۵ قطعه" },
            { label: "زمان ساخت", value: "بیش از ۷۰ ساعت" },
            { label: "کاربرد", value: "دکور منزل، گالری، فروشگاه و هدیه" },
          ],

        },
        {
          id: "82095c1d-1ba0-4f3f-8112-90f94a1ef2ff",
          name: "ماکت دکل مخابراتی خودایستا سه‌وجهی",
          cover: Triangular1,
          scale: "1:50",
          material: "فلز",
          useCase: "آموزشی، نمایشگاهی و کلکسیونی",
          category: "ماکت دکل مخابراتی",
          price: "تماس برای قیمت",
          images: [
            Triangular1,
            Triangular2,
          ],
          description:
            "ماکت دکل مخابراتی خودایستا سه‌وجهی با طراحی دقیق مهندسی و جزئیات حرفه‌ای ساخته شده است. این محصول به‌صورت کاملاً دست‌ساز تولید شده و ساخت آن بیش از ۳۰ ساعت زمان برده است. سازه خرپایی سه‌وجهی، طبقات متعدد و اجرای دقیق اتصالات، این ماکت را به گزینه‌ای مناسب برای مهندسان، دانشجویان، دفاتر فنی، نمایشگاه‌های تخصصی و کلکسیونرهای سازه‌های صنعتی تبدیل کرده است. کیفیت ساخت بالا و ظاهر چشمگیر آن، جلوه‌ای حرفه‌ای به هر محیطی می‌بخشد.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۱۰۲ سانتی‌متر" },
            { label: "تعداد طبقات", value: "۶ طبقه" },
            { label: "تعداد قطعات", value: "۵۱۰ قطعه" },
            { label: "وزن", value: "۵۰۰ گرم" },
            { label: "جنس سازه", value: "فلز" },
            { label: "زمان ساخت", value: "۳۰ ساعت" },
            { label: "نوع سازه", value: "خودایستا سه‌وجهی" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682998",
          name: "ماکت دکل خودایستا پایه چهارگوش",
          cover: FourLeg1,
          scale: "1:50",
          material: "ورق گالوانیزه ضد زنگ",
          useCase: "آموزشی، نمایشگاهی و مهندسی",
          category: "ماکت دکل مخابراتی",
          price: "تماس برای قیمت",
          images: [
            FourLeg1,
            FourLeg2,
          ],
          description:
            "ماکت دکل مخابراتی مشبک با طراحی مهندسی‌شده و ساخت دقیق، نمونه‌ای حرفه‌ای از دکل‌های واقعی مخابراتی است. این ماکت از ورق گالوانیزه ضد زنگ ساخته شده و با ۳۱۲ قطعه مجزا، تمامی جزئیات سازه‌ای یک دکل خودایستا را به‌صورت کامل شبیه‌سازی می‌کند. کیفیت ساخت بالا، استحکام مناسب و ظاهر صنعتی آن باعث شده تا گزینه‌ای ایده‌آل برای پروژه‌های دانشجویی، آموزش‌های فنی، نمایشگاه‌های تخصصی و کلکسیون سازه‌های مهندسی باشد.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۸۰ سانتی‌متر" },
            { label: "تعداد قطعات", value: "۳۱۲ قطعه" },
            { label: "جنس سازه", value: "ورق گالوانیزه ضد زنگ" },
            { label: "زمان ساخت", value: "۱۵ ساعت" },
            { label: "نوع سازه", value: "دکل مشبک خودایستا" },
            { label: "کاربرد", value: "آموزشی، نمایشگاهی و مهندسی" },
          ],

        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682992",
          name: "دکل مخابراتی مهاربندی ویژه",
          cover: AdvancedBracedTelecomTower1,
          scale: "1:50",
          material: "ورق گالوانیزه ضد زنگ",
          useCase: "آموزشی، نمایشگاهی و مهندسی",
          category: "ماکت دکل مخابراتی",
          price: "تماس برای قیمت",
          images: [
            AdvancedBracedTelecomTower1,
            AdvancedBracedTelecomTower2,
          ],
          description:
            "ماکت دکل مخابراتی مشبک با طراحی مهندسی‌شده و ساخت دقیق، نمونه‌ای حرفه‌ای از دکل‌های واقعی مخابراتی است. این ماکت از ورق گالوانیزه ضد زنگ ساخته شده و با ۳۱۲ قطعه مجزا، تمامی جزئیات سازه‌ای یک دکل خودایستا را به‌صورت کامل شبیه‌سازی می‌کند. کیفیت ساخت بالا، استحکام مناسب و ظاهر صنعتی آن باعث شده تا گزینه‌ای ایده‌آل برای پروژه‌های دانشجویی، آموزش‌های فنی، نمایشگاه‌های تخصصی و کلکسیون سازه‌های مهندسی باشد.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۸۰ سانتی‌متر" },
            { label: "تعداد قطعات", value: "۳۱۲ قطعه" },
            { label: "جنس سازه", value: "ورق گالوانیزه ضد زنگ" },
            { label: "زمان ساخت", value: "۱۵ ساعت" },
            { label: "نوع سازه", value: "دکل مشبک خودایستا" },
            { label: "کاربرد", value: "آموزشی، نمایشگاهی و مهندسی" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682991",
          name: "ماکت خط انتقال دو دکله",
          cover: DoubleTowerPowerTransmission1,
          scale: "1:330",
          material: "ورقه گالوانیزه مقاوم",
          useCase: "آموزشی، صنعتی و دکوراتیو",
          category: "ماکت دکل برق",
          price: "تماس برای قیمت",
          images: [
            DoubleTowerPowerTransmission1,
            DoubleTowerPowerTransmission2,
          ],
          description:
            "ماکت خط انتقال برق دو دکله با دقت بالا و جزئیات کامل بر اساس سازه‌های واقعی انتقال نیرو طراحی و ساخته شده است. هر دکل به صورت کاملاً دست‌ساز از ورقه گالوانیزه مقاوم تولید شده و تمامی اجزای اصلی از جمله مقره‌ها، سازه خرپایی و خطوط انتقال را شبیه‌سازی می‌کند. این محصول گزینه‌ای مناسب برای پروژه‌های آموزشی، نمایشگاه‌های صنعتی، دکوراسیون تخصصی و ماکت‌سازی مهندسی بوده و با کیفیت ساخت بالا و جزئیات دقیق، نمایی واقعی از خطوط انتقال برق فشار قوی را ارائه می‌دهد.",

          specifications: [
            { label: "تعداد دکل", value: "۲ عدد" },
            { label: "ارتفاع هر دکل", value: "۹۹ سانتی‌متر" },
            { label: "تعداد قطعات هر دکل", value: "۵۴۲ قطعه" },
            { label: "تعداد مقره", value: "۱۲ عدد" },
            { label: "جنس بدنه", value: "ورقه گالوانیزه مقاوم" },
            { label: "رنگ", value: "نقره‌ای مات" },
            { label: "زمان مونتاژ هر دکل", value: "حدود ۳۰ ساعت" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682941",
          name: "ماکت دکل انتقال برق فشار قوی",
          cover: HighVoltage1,
          scale: "1:330",
          material: "ورقه گالوانیزه",
          useCase: "دکور صنعتی، پروژه‌های آموزشی و کلکسیونی",
          category: "ماکت دکل برق",
          price: "تماس برای قیمت",
          images: [
            HighVoltage1,
            HighVoltage2,
          ],
          description:
            "ماکت دکل انتقال برق فشار قوی با دقت بالا و جزئیات مهندسی کامل طراحی و ساخته شده است. این محصول با الهام از دکل‌های واقعی انتقال نیرو ساخته شده و تمامی اجزای اصلی سازه از جمله مقره‌ها، خرپاها و اتصالات را به‌صورت دقیق شبیه‌سازی می‌کند. کیفیت ساخت بالا، ظاهر حرفه‌ای و استفاده از ورقه گالوانیزه مقاوم، این ماکت را به گزینه‌ای مناسب برای دکورهای صنعتی، پروژه‌های دانشگاهی، نمایشگاه‌های تخصصی و مجموعه‌های کلکسیونی تبدیل کرده است.",

          specifications: [
            { label: "ارتفاع ماکت", value: "۹۹ سانتی‌متر" },
            { label: "تعداد قطعات", value: "۵۴۲ قطعه" },
            { label: "تعداد مقره", value: "۱۲ عدد" },
            { label: "جنس بدنه", value: "ورقه گالوانیزه" },
            { label: "رنگ", value: "نقره‌ای مات" },
            { label: "زمان آماده‌سازی", value: "حدود ۳۰ ساعت" },
            { label: "ارسال", value: "ارسال به سراسر کشور" },
          ]
        },
      ],
      useCases: [
        { title: "ارائه‌های مهندسی", desc: "ماکت‌های دقیق برای ارائه طرح‌های دکل به کارفرمایان و سرمایه‌گذاران", icon: "Presentation" },
        { title: "دموی شرکت‌های مخابراتی", desc: "نمایش توانمندی‌های فنی در نمایشگاه‌ها و جلسات فروش", icon: "Monitor" },
        { title: "آموزش", desc: "ابزار آموزشی برای دانشجویان مهندسی عمران و مخابرات", icon: "BookOpen" },
        { title: "کلکسیون صنعتی", desc: "ماکت‌های کلکسیونی با جزئیات بالا برای علاقه‌مندان به سازه‌های مخابراتی", icon: "Award" },
      ],
    },
    advantages: {
      title: "چرا ما؟",
      subtitle: "تجربه اثبات‌شده در پروژه‌های زیرساختی",
      items: [
        { title: "تجربه واقعی", desc: "سال‌ها سابقه در پروژه‌های مخابراتی صنعتی و عمرانی" },
        { title: "اجرای استاندارد", desc: "رعایت کامل استانداردهای ایمنی و فنی ملی و بین‌المللی" },
        { title: "پشتیبانی فنی", desc: "تیم متخصص آماده پاسخ‌گویی و رفع مشکل در کمترین زمان" },
        { title: "قیمت رقابتی", desc: "بهترین کیفیت با مناسب‌ترین قیمت و شفافیت کامل در هزینه‌ها" },
        { title: "راه‌حل سفارشی", desc: "طراحی بر اساس نیازهای خاص هر پروژه و محل اجرا" },
      ],
    },
    brands: {
      title: "برندها و تجهیزات",
      subtitle: "همکاری با معتبرترین برندهای جهانی",
      list: ["Panasonic", "Yeastar", "Grandstream", "NEC", "Cisco"],
    },
    workflow: {
      title: "فرآیند پروژه",
      subtitle: "از درخواست تا تحویل، همه‌چیز در کنترل شماست",
      steps: [
        { num: "۰۱", title: "ثبت درخواست", desc: "ارسال فرم تماس یا تماس مستقیم با کارشناسان ما" },
        { num: "۰۲", title: "مشاوره اولیه", desc: "بررسی نیازها و ارائه راه‌حل اولیه توسط متخصصان" },
        { num: "۰۳", title: "بازدید و تحلیل", desc: "بازدید از محل اجرا و تحلیل دقیق الزامات فنی" },
        { num: "۰۴", title: "طراحی و اجرا", desc: "طراحی مهندسی، خرید تجهیزات و اجرای پروژه" },
        { num: "۰۵", title: "تحویل و پشتیبانی", desc: "تحویل پروژه و ارائه قرارداد پشتیبانی بلندمدت" },
      ],
    },
    testimonials: {
      title: "نظرات مشتریان",
      subtitle: "آنچه شرکای تجاری ما می‌گویند",
      items: [
        { name: "مهندس کریمی", company: "شرکت صنعتی آرا", text: "نصب سیستم PBX در شرکت ما با حرفه‌ای‌ترین روش انجام شد. پشتیبانی عالی بود.", rating: 5 },
        { name: "دکتر احمدی", company: "بیمارستان پارس", text: "ماکت دکل مخابراتی تحویلی از نظر دقت و کیفیت ساخت کاملاً مطابق استانداردهای مهندسی بود.", rating: 5 },
        { name: "مهندس رضایی", company: "شهرداری منطقه ۵", text: "تجربه همکاری با آقای مسگرزاده در زمینه سیستم PBX بسیار مثبت بود.", rating: 5 },
      ],
    },
    faq: {
      title: "سؤالات متداول",
      subtitle: "پاسخ سؤالات رایج شما",
      items: [
        { q: "هزینه نصب سیستم PBX چقدر است؟", a: "هزینه بستگی به تعداد داخلی‌ها، نوع سیستم (آنالوگ، دیجیتال یا IP) و امکانات مورد نیاز دارد. با ارسال مشخصات نیازتان، پیشنهاد دقیق و شفاف دریافت کنید." },
        { q: "ماکت‌های دکل در چه مقیاس‌هایی ساخته می‌شوند؟", a: "ماکت‌ها در مقیاس‌های 1:50 تا 1:200 بسته به ابعاد دکل و جزئیات مورد نیاز ساخته می‌شوند. مقیاس دقیق پس از توافق با شما تعیین می‌گردد." },
        { q: "آیا خدمات نگهداری دوره‌ای ارائه می‌دهید؟", a: "بله. قراردادهای نگهداری سالانه برای سیستم‌های PBX ارائه می‌شود، شامل بازرسی فنی منظم و رفع عیب اضطراری." },
        { q: "چه برندهایی پشتیبانی می‌شوند؟", a: "Panasonic، Yeastar، Grandstream، NEC و سایر برندهای معتبر. همچنین برای سیستم‌های موجود شما مشاوره و پشتیبانی ارائه می‌دهیم." },
        { q: "آیا امکان مشاوره رایگان وجود دارد؟", a: "بله. مشاوره اولیه تلفنی کاملاً رایگان است. فرم تماس را پر کنید یا مستقیماً با ما تماس بگیرید." },
      ],
    },
    contact: {
      title: "درخواست مشاوره",
      subtitle: "فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم",
      name: "نام و نام خانوادگی",
      phone: "شماره تماس",
      service: "نوع خدمت",
      serviceOptions: ["سیستم‌های PBX", "مدل‌های دکل", "مشاوره"],
      message: "پیام / نیازها",
      submit: "ارسال درخواست",
      orCall: "یا مستقیماً تماس بگیرید",
    },
    finalCta: {
      title: "آماده شروع هستید؟",
      desc: "همین حالا با ما تماس بگیرید و پروژه ارتباطی خود را آغاز کنید",
      cta: "مشاوره رایگان",
    },
    footer: {
      desc: "متخصص سیستم‌های PBX و مدل‌های دکل مخابراتی",
      links: "دسترسی سریع",
      rights: "تمامی حقوق محفوظ است",
    },
    projects: {
      title: "نمونه پروژه‌ها",
      subtitle: "برخی از پروژه‌های انجام‌شده در زمینه PBX و ماکت‌های دکل",
    },
  },
  en: {
    dir: "ltr",
    font: "'Rajdhani', sans-serif",
    brand: "Reza Mesgarzadeh",
    nav: {
      pbx: "PBX Systems",
      towers: "Tower Models",
      towerModels: "Tower Models",
      projects: "Projects",
      contact: "Contact",
    },
    callNow: "Call Now",
    hero: {
      badge: "Industrial Telecom Specialist",
      headline: "Complete Communication Solutions",
      subheadline: "PBX Systems & Tower Models",
      desc: "From telephone exchange systems design and installation to precision-engineered tower scale models — integrated solutions for your communication infrastructure needs.",
      cta1: "Free Consultation",
      cta2: "Call Directly",
    },
    pbxSection: {
      title: "PBX Systems",
      subtitle: "Professional telephone exchange systems for your business",
      services: [
        { title: "PBX System Sales", desc: "Supply of equipment from globally recognized brands at best market prices", icon: "Radio" },
        { title: "Installation & Deployment", desc: "Configuration and setup by experienced specialists", icon: "Wrench" },
        { title: "Support & Maintenance", desc: "24/7 after-sales service and periodic maintenance contracts", icon: "Headphones" },
        { title: "Technical Consulting", desc: "Needs analysis and optimal solution design for your organization", icon: "Shield" },
      ],
      features: [
        { icon: "Zap", title: "Fast Deployment", desc: "Up and running in minimal time without disruption to your business" },
        { icon: "Globe", title: "IP-Ready Systems", desc: "VoIP and SIP support for cost-effective internet-based communications" },
        { icon: "BarChart2", title: "Advanced Reporting", desc: "Call management, traffic statistics and real-time cost control" },
      ],
    },
    towerModels: {
      title: "Tower Models",
      subtitle: "Precision-engineered scale models for display, education & presentation",
      intro: "Our scaled telecommunication tower models are crafted with the highest engineering precision. Perfect for engineering presentations, exhibitions, educational institutions, and industrial collectors. Each model features detailed construction matching real telecom tower standards.",
      categories: [
        {
          name: "Architectural Models",
          desc: "Detailed scale models of architectural structures with precise engineering craftsmanship",
          icon: "TowerControl",
        },
        {
          name: "Power Tower Models",
          desc: "Transmission tower models with realistic insulators and structural details",
          icon: "TowerControl",
        },
        {
          name: "Telecom Tower Models",
          desc: "Self-supporting and guyed telecom tower models with industrial-grade design",
          icon: "TowerControl",
        },
        {
          name: "Custom Models",
          desc: "Custom-designed scale models built from your engineering drawings and specifications",
          icon: "Building2",
        },
      ],
      products: [
        {
          id: "97ca0282-454f-4b28-b8f7-4feb9f66289e",
          name: "Golden Eiffel Tower Model",
          cover: GoldenEiffelTower1,
          scale: "1:390",
          material: "White Galvanized Sheet",
          useCase: "Engineering, educational, and exhibition projects",
          category: "Architectural Models",
          price: "Call for price",
          images: [
            GoldenEiffelTower1,
            GoldenEiffelTower2,
            GoldenEiffelTower3,
          ],
          description:
            "The Eiffel Tower model is built with high manufacturing accuracy and precise engineering design based on the real monument. Designed for use in student projects, engineering presentations, specialized exhibitions, and decorative applications, this model recreates all the details of the main structure of the Eiffel Tower on a small scale. High manufacturing quality, a large number of parts, and precise execution of details make this product a great choice for collectors, students, and engineering companies.",
          specifications: [
            { label: "Model Height", value: "85 cm" },
            { label: "Bottom Base Side", value: "30 cm" },
            { label: "Top Base Side", value: "3 cm" },
            { label: "Number of Pieces", value: "5 pieces" },
            { label: "Number of Components", value: "1735 parts" },
            { label: "Body Material", value: "White galvanized sheet" },
            { label: "Color", value: "Matte gold, gray, black" },
            { label: "Weight", value: "1 kg" },
            { label: "Preparation Time", value: "70 hours" },
          ],
        },
        {
          id: "292829cb-5e64-440b-8416-b9e593c4808a",
          name: "Bronze Eiffel Tower Model",
          cover: BronzeEiffelTower1,
          scale: "1:340",
          material: "White Galvanized Sheet",
          useCase: "Decoration, exhibition, and gift",
          category: "Architectural Models",
          price: "Call for price",
          images: [
            BronzeEiffelTower1,
            BronzeEiffelTower2,
            BronzeEiffelTower3,
          ],
          description:
            "The metal model of the Eiffel Tower is designed and built with high accuracy in its details, inspired by the timeless symbol of Paris. This piece is the result of over 70 hours of precise and artistic work, delicately recreating all the components of the original Eiffel Tower structure. The combination of copper, silver, and turquoise colors gives a special and luxurious look to this model, making it an ideal choice for home decoration, galleries, shops, and also a valuable, lasting gift. This product is not just a model, but a recreation of a part of the identity and glory of Paris in the form of a metal artwork.",
          specifications: [
            { label: "Model Height", value: "97 cm" },
            { label: "Body Material", value: "White galvanized sheet" },
            { label: "Coloring", value: "Copper, silver, and turquoise" },
            { label: "Number of Pieces", value: "5 pieces" },
            { label: "Number of Components", value: "1735 parts" },
            { label: "Build Time", value: "Over 70 hours" },
            { label: "Application", value: "Home decor, gallery, shop, and gift" },
          ],
        },
        {
          id: "82095c1d-1ba0-4f3f-8112-90f94a1ef2ff",
          name: "3-Legged Self-Supporting Telecommunication Tower Model",
          cover: Triangular1,
          scale: "1:50",
          material: "Metal",
          useCase: "Educational, exhibition, and collectible",
          category: "Telecommunication Tower Models",
          price: "Call for price",
          images: [
            Triangular1,
            Triangular2,
          ],
          description:
            "The 3-legged self-supporting telecommunication tower model is built with precise engineering design and professional details. This product is completely handmade, and its construction took over 30 hours. The 3-legged truss structure, multiple levels, and precise execution of joints make this model a suitable choice for engineers, students, technical offices, specialized exhibitions, and collectors of industrial structures. Its high manufacturing quality and eye-catching appearance bring a professional look to any environment.",
          specifications: [
            { label: "Model Height", value: "102 cm" },
            { label: "Number of Levels", value: "6 levels" },
            { label: "Number of Components", value: "510 parts" },
            { label: "Weight", value: "500 grams" },
            { label: "Structure Material", value: "Metal" },
            { label: "Build Time", value: "30 hours" },
            { label: "Structure Type", value: "3-Legged Self-Supporting" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682998",
          name: "4-Legged Self-Supporting Tower Model",
          cover: FourLeg1,
          scale: "1:50",
          material: "Rust-Proof Galvanized Sheet",
          useCase: "Educational, exhibition, and engineering",
          category: "Telecommunication Tower Models",
          price: "Call for price",
          images: [
            FourLeg1,
            FourLeg2,
          ],
          description:
            "The lattice telecommunication tower model, featuring an engineered design and precise construction, is a professional replica of real telecommunication towers. Made of rust-proof galvanized sheet with 312 separate parts, it fully simulates all the structural details of a self-supporting tower. The high quality of construction, structural strength, and industrial appearance make it an ideal option for student projects, technical training, specialized exhibitions, and engineering structure collections.",
          specifications: [
            { label: "Model Height", value: "80 cm" },
            { label: "Number of Components", value: "312 parts" },
            { label: "Structure Material", value: "Rust-proof galvanized sheet" },
            { label: "Build Time", value: "15 hours" },
            { label: "Structure Type", value: "Self-supporting lattice tower" },
            { label: "Application", value: "Educational, exhibition, and engineering" },
          ],
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682992",
          name: "Special Guyed Telecommunication Tower",
          cover: AdvancedBracedTelecomTower1,
          scale: "1:50",
          material: "Rust-Proof Galvanized Sheet",
          useCase: "Educational, exhibition, and engineering",
          category: "Telecommunication Tower Models",
          price: "Call for price",
          images: [
            AdvancedBracedTelecomTower1,
            AdvancedBracedTelecomTower2,
          ],
          description:
            "The lattice telecommunication tower model, featuring an engineered design and precise construction, is a professional replica of real telecommunication towers. Made of rust-proof galvanized sheet with 312 separate parts, it fully simulates all the structural details of a self-supporting tower. The high quality of construction, structural strength, and industrial appearance make it an ideal option for student projects, technical training, specialized exhibitions, and engineering structure collections.",
          specifications: [
            { label: "Model Height", value: "80 cm" },
            { label: "Number of Components", value: "312 parts" },
            { label: "Structure Material", value: "Rust-proof galvanized sheet" },
            { label: "Build Time", value: "15 hours" },
            { label: "Structure Type", value: "Self-supporting lattice tower" },
            { label: "Application", value: "Educational, exhibition, and engineering" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682991",
          name: "Double Tower Power Transmission Line Model",
          cover: DoubleTowerPowerTransmission1,
          scale: "1:330",
          material: "Resistant Galvanized Sheet",
          useCase: "Educational, industrial, and decorative",
          category: "Power Tower Models",
          price: "Call for price",
          images: [
            DoubleTowerPowerTransmission1,
            DoubleTowerPowerTransmission2,
          ],
          description:
            "The double-tower power transmission line model is designed and built with high accuracy and complete details based on real power transmission structures. Each tower is completely handmade from resistant galvanized sheet and simulates all main components including insulators, truss structures, and transmission lines. This product is a suitable option for educational projects, industrial exhibitions, specialized decoration, and engineering modeling, offering a realistic view of high-voltage power transmission lines through its high build quality and precise details.",
          specifications: [
            { label: "Number of Towers", value: "2 units" },
            { label: "Height per Tower", value: "99 cm" },
            { label: "Components per Tower", value: "542 parts" },
            { label: "Number of Insulators", value: "12 units" },
            { label: "Body Material", value: "Resistant galvanized sheet" },
            { label: "Color", value: "Matte silver" },
            { label: "Assembly Time per Tower", value: "About 30 hours" },
          ]
        },
        {
          id: "80ee0abc-1aa6-447b-86fc-bb2847682941",
          name: "High Voltage Power Transmission Tower Model",
          cover: HighVoltage1,
          scale: "1:330",
          material: "Galvanized Sheet",
          useCase: "Industrial decor, educational projects, and collectibles",
          category: "Power Tower Models",
          price: "Call for price",
          images: [
            HighVoltage1,
            HighVoltage2,
          ],
          description:
            "The high voltage power transmission tower model is designed and built with high accuracy and complete engineering details. Inspired by real power transmission towers, this product accurately simulates all main components of the structure including insulators, trusses, and joints. High manufacturing quality, a professional appearance, and the use of resistant galvanized sheet make this model a suitable option for industrial decor, university projects, specialized exhibitions, and collectible sets.",
          specifications: [
            { label: "Model Height", value: "99 cm" },
            { label: "Number of Components", value: "542 parts" },
            { label: "Number of Insulators", value: "12 units" },
            { label: "Body Material", value: "Galvanized sheet" },
            { label: "Color", value: "Matte silver" },
            { label: "Preparation Time", value: "About 30 hours" },
            { label: "Shipping", value: "Nationwide shipping" },
          ]
        },
      ],
      useCases: [
        { title: "Engineering Presentations", desc: "Precision models for presenting tower designs to clients and investors", icon: "Presentation" },
        { title: "Telecom Demos", desc: "Showcase technical capabilities at exhibitions and sales meetings", icon: "Monitor" },
        { title: "Education", desc: "Teaching tool for civil and telecommunications engineering students", icon: "BookOpen" },
        { title: "Collector Pieces", desc: "High-detail collector models for telecom infrastructure enthusiasts", icon: "Award" },
      ],
    },
    advantages: {
      title: "Why Choose Us?",
      subtitle: "Proven experience in infrastructure projects",
      items: [
        { title: "Real Experience", desc: "Years of track record in industrial and civil telecommunications projects" },
        { title: "Standard-compliant", desc: "Full adherence to national and international safety and technical standards" },
        { title: "Real Support", desc: "Expert team ready to respond and resolve issues in the shortest time" },
        { title: "Competitive Pricing", desc: "Best quality at fair prices with complete cost transparency" },
        { title: "Custom Solutions", desc: "Designed specifically for each project's unique requirements and site conditions" },
      ],
    },
    brands: {
      title: "Equipment & Brands",
      subtitle: "Partnering with the world's most trusted brands",
      list: ["Panasonic", "Yeastar", "Grandstream", "NEC", "Cisco"],
    },
    workflow: {
      title: "Project Workflow",
      subtitle: "From request to delivery — everything under your control",
      steps: [
        { num: "01", title: "Submit Request", desc: "Fill out our contact form or call our specialists directly" },
        { num: "02", title: "Initial Consultation", desc: "Review of requirements and initial solution proposal by experts" },
        { num: "03", title: "Site Inspection", desc: "On-site visit and precise technical requirements analysis" },
        { num: "04", title: "Design & Execution", desc: "Engineering design, equipment procurement and project implementation" },
        { num: "05", title: "Delivery & Support", desc: "Project handover and long-term support contract provision" },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What our business partners say",
      items: [
        { name: "Eng. Karimi", company: "Ara Industrial Co.", text: "Our PBX system installation was handled with the utmost professionalism. Support was excellent.", rating: 5 },
        { name: "Dr. Ahmadi", company: "Pars Hospital", text: "The tower scale model delivered met all engineering precision and quality standards perfectly.", rating: 5 },
        { name: "Eng. Rezaei", company: "District 5 Municipality", text: "Collaborating with Reza Mesgarzadeh on the PBX system project was a very positive experience.", rating: 5 },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Answers to your most common questions",
      items: [
        { q: "What is the cost of PBX installation?", a: "The cost depends on the number of extensions, system type (analog, digital or IP) and required features. Send us your specifications for a precise and transparent quote." },
        { q: "What scales are tower models available in?", a: "Models are available in scales from 1:50 to 1:200 depending on tower dimensions and required detail level. The exact scale is determined based on your requirements." },
        { q: "Do you provide periodic maintenance services?", a: "Yes. Annual maintenance contracts are available for PBX systems, including regular technical inspections and emergency fault response." },
        { q: "Which brands are supported?", a: "Panasonic, Yeastar, Grandstream, NEC and other recognized brands. We also provide consulting and support for your existing systems." },
        { q: "Is free consultation available?", a: "Yes. Initial phone consultation is completely free. Fill out the contact form or call us directly." },
      ],
    },
    contact: {
      title: "Request Consultation",
      subtitle: "Fill out the form below and we will contact you as soon as possible",
      name: "Full Name",
      phone: "Phone Number",
      service: "Service Type",
      serviceOptions: ["PBX Systems", "Tower Models", "Consultation"],
      message: "Message / Requirements",
      submit: "Submit Request",
      orCall: "Or call directly",
    },
    finalCta: {
      title: "Ready to Start?",
      desc: "Contact us now and begin your communications project",
      cta: "Free Consultation",
    },
    footer: {
      desc: "PBX Systems & Tower Model Specialist",
      links: "Quick Links",
      rights: "All rights reserved",
    },
    projects: {
      title: "Project Showcase",
      subtitle: "Selected projects in PBX systems and tower models",
    },
  },
};
