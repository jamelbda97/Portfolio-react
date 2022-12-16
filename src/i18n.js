import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    Welcome: "Hi, I'm",
                    Headline: "I am an engineering student specialised in mobile development," +
                        " I am currently looking for and end of study internship " +
                        "with a duration of 6 to 7 months starting from january 2023.",
                    HireMe: "Hire me",
                    SeeMyPastWork: "See my past work"
                },
            },
            fr: {
                translation: {
                    Welcome: "Bonjour, je suis",
                    Headline: "Je suis un étudiant ingénieur spécialisé dans le développement mobile," +
                        " je suis actuellement à la recherche d'un stage de fin d'étude " +
                        "d'une durée de 6 à 7 mois à partir de janvier 2023.",
                    HireMe: "Contactez-moi",
                    SeeMyPastWork: "See my past work"
                },
            },
        },
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {escapeValue: false},
    });