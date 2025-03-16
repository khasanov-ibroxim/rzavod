import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


const resources = {
    ru: {
        translation:{
            contact:"Контакты",
            add_to_cart:"Добавить в корзину",
            deliver_title:"Бесплатная доставка по городу Ташкенту.",
            main:{
                one:{
                    title:"Доставка <br/> в течение  1 дня",
                    title_content:"Производство в городе Ташкент",
                    content:"Бесплатная доставка по городу Ташкенту."
                },
                two:{
                    title:"Гарантия",
                    title_content:"гарантия 1 год",
                    content:"На каждое наше изделие предоставляется гарантия 1 год."
                },
                three:{
                    title:"Коммуникация",
                    title_content:"Мы на связи 24/7",
                    content:"Даём советы во всех сложных ситуациях"
                },
                four:{
                    title:"Даставка",
                    title_content:"Узбекистан",
                    content:"Доставляем во все регионы Узбекистана."
                },
            },
            pack:"Наши продукты",
            access:{
                item_1: {
                    title: "Светодиодное освещение",
                    content: "Светодиодные лампы, обеспечивающие хорошую видимость ночью.",
                    price: "120$"
                },
                item_2: {
                    title: "Акриловая поверхность",
                    content: "Акриловый материал для яркого и красивого вида.",
                    price: "90$"
                },
                item_3: {
                    title: "Металлический каркас",
                    content: "Прочный и долговечный каркас.",
                    price: "150$"
                },
                item_4: {
                    title: "Виниловое покрытие",
                    content: "Погодостойкое и цветное покрытие.",
                    price: "70$"
                },
                item_5: {
                    title: "RGB освещение",
                    content: "Лампы с возможностью смены цветов.",
                    price: "200$"
                },
                item_6: {
                    title: "Автоматическое включение/выключение",
                    content: "Автоматическая система для экономии электроэнергии.",
                    price: "50$"
                }
            }


        }
    },
    uz: {
        translation:{
            contact:"Kontaktlar",
            add_to_cart:"Savatga qo'shish",
            deliver_title:"Toshkent shaxri bo'ylab bepul yetqazib berish",
            main:{
                one:{
                    title:"Bir kun ichida <br/> yetqazib berish",
                    title_content:"Toshkentda ishlab chiqarish",
                    content:"Toshkent shaxri bo'ylab bepul yetqazib berish"
                },
                two:{
                    title:"Kafolat",
                    title_content:"1 yilga kafolat",
                    content:"Har bir maxsulotimiz uchun 1 yillik kafolat beriladi"
                },
                three:{
                    title:"A'loqa",
                    title_content:"24/7 a'loqadmiz",
                    content:"Barcha qiyin vaziyatda maslaxat beramiz"
                },
                four:{
                    title:"Yetqazib berish",
                    title_content:"O'zbekiston",
                    content:"O'zbekistoning barcha xududlariga yetqazib beramiz"
                },
            },
            pack:"Bizning maxsulotlar",
            access:{
                item_1: {
                    title: "LED Yoritish",
                    content: "Tunda ham yaxshi ko‘rinish beruvchi LED chiroqlar.",
                    price: "120$"
                },
                item_2: {
                    title: "Akril Yuzasi",
                    content: "Yorqin va chiroyli ko‘rinish uchun akril material.",
                    price: "90$"
                },
                item_3: {
                    title: "Metall Ramka",
                    content: "Mustahkam va uzoq muddat xizmat qiladigan karkas.",
                    price: "150$"
                },
                item_4: {
                    title: "Vinil Qoplama",
                    content: "Ob-havoga chidamli va rangli qoplama.",
                    price: "70$"
                },
                item_5: {
                    title: "RGB Chiroqlar",
                    content: "Ranglarni o‘zgartirish imkoniyati bilan jihozlangan chiroqlar.",
                    price: "200$"
                },
                item_6: {
                    title: "Avtomatik Yoqish-O‘chirish",
                    content: "Elektr energiyasini tejash uchun avtomatik tizim.",
                    price: "50$"
                }
            }
        }
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;
