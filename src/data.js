let technologies = [
    {id: 0, name: "Swift", imageUrl: "./programs/swift.png", link: "https://developer.apple.com/swift"},
    {id: 1, name: "Kotlin", imageUrl: "./programs/kotlin.png", link: "https://developer.android.com/kotlin"},
    {id: 2, name: "Flutter", imageUrl: "./programs/flutter.png", link: "https://flutter.dev"},
    {id: 3, name: "NodeJS", imageUrl: "./programs/nodejs.png", link: "https://nodejs.org/en/about"},
    {id: 4, name: "Mongo", imageUrl: "./programs/mongodb.png", link: "https://www.mongodb.com"},
    {id: 5, name: "Symfony4", imageUrl: "./programs/symfony.png", link: "https://symfony.com/4"},
    {id: 6, name: "MySQL", imageUrl: "./programs/mysql.png", link: "https://www.mysql.com"},
    {id: 7, name: "Unity", imageUrl: "./programs/unity.png", link: "https://unity.com"},
    {
        id: 8,
        name: "Maya",
        imageUrl: "./programs/autodesk-maya.png",
        link: "https://www.autodesk.com/products/maya/overview"
    },
    {id: 9, name: "Blender", imageUrl: "./programs/blender.png", link: "https://www.blender.org"},
    {id: 10, name: "React JS", imageUrl: "./programs/react-js.png", link: "https://reactjs.org"},
]

const projectsNormalArray = [
    {
        id: 1,
        key: 0,
        title: "Togo",
        subtitle: "Jeu mobile culturel avec géolocalisation",
        description:
            "Il s'agit d'un réseau social basé sur la localisation qui permet de " +
            "trouver des personnes se trouvant dans un même endroit." +
            " Les utilisateurs peuvent créer un profil personnel et publier " +
            "des vidéos pour partager leur contenu avec la communauté. " +
            "L'application facilite également les interactions entre les " +
            "utilisateurs en leur permettant de se contacter les uns les autres." +
            "\n" +
            "\n" +
            "Cette application offre un espace où les utilisateurs peuvent partager" +
            " leurs vidéos et interagir avec d'autres membres de la communauté. " +
            "L'accent est mis sur la connectivité entre les personnes se trouvant" +
            " au même endroit géographique." +
            "\n" +
            "\n" +
            "En résumé, cette application est un réseau social géolocalisé où " +
            "les utilisateurs peuvent publier des vidéos, interagir avec d'autres " +
            "utilisateurs et créer des connexions avec des personnes présentes " +
            "dans leur localité.",
        sourceCodeLink: "Privé",
        platforms: "Mobile",
        type: 2,
        logoUrl: "./my-projects/logo/logo5.png",
        videoUrl: "./my-projects/videos/mobile/none.mp4",
        otherUrl: "./my-projects/videos/web/tugo.mp4",
        technologies: [
            technologies[7],
            technologies[8],
            technologies[9],
        ],
    },
    {
        id: 2,
        key: 1,
        title: "CIPA",
        subtitle: "Application pour lecture de livres PDF et livres audio",
        description: "",
        sourceCodeLink: "Le code source de cette application est privé",
        platforms: "Mobile / Desktop",
        type: 3,
        logoUrl: "./my-projects/logo/logo6.png",
        videoUrl: "./my-projects/videos/mobile/kitebi.mp4",
        otherUrl: "./my-projects/videos/web/kitebi.mp4",
        technologies: [
            technologies[2],
            technologies[3],
            technologies[4],
            technologies[10],
        ],
    },
    {
        id: 2,
        key: 1,
        title: "Kitebi",
        subtitle: "Application pour lecture de livres PDF et livres audio",
        description:
            "Cette application permet aux utilisateurs de lire et d'écouter des" +
            " livres publiés par le Ministère des Affaires Culturelles." +
            " Vous pouvez accéder à des livres au format PDF, les télécharger," +
            " les ajouter à vos favoris et les partager. De même, les livres audio" +
            " au format MP3 peuvent être écoutés, téléchargés, ajoutés aux favoris" +
            " et partagés." +
            "\n\n" +
            "Vous avez l'acces a une bibliothèque regroupe tous vos livres et " +
            "livres audio préférés, ainsi que ceux que vous avez téléchargés." +
            "\n\n" +
            "Vous avez la possibilité de partager des publications comprenant du texte," +
            " des fichiers audio et des images, tout en ayant accès aux publications" +
            " d'autres utilisateurs. " +
            "\n\n" +
            "L'application propose également une fonctionnalité de recherche de" +
            " contenu, permettant de trier les résultats par catégorie ou par âge." +
            " Vous pouvez profiter d'un mode sombre pour une meilleure expérience " +
            "visuelle, et choisir entre les langues français, anglais et arabe pour " +
            "l'interface de l'application.",
        sourceCodeLink: "Le code source de cette application est privé",
        platforms: "Mobile / Web",
        type: 3,
        logoUrl: "./my-projects/logo/logo1.png",
        videoUrl: "./my-projects/videos/mobile/kitebi.mp4",
        otherUrl: "./my-projects/videos/web/kitebi.mp4",
        technologies: [
            technologies[2],
            technologies[3],
            technologies[4],
            technologies[10],
        ],
    },
    {
        id: 3,
        key: 2,
        title: "Khedemti",
        subtitle: "Site web pour recrutement/recherche de travail/missions/evenements",
        description:
            "Sur ce site web, les utilisateurs ont la possibilité de se connecter" +
            " en tant que candidat ou en tant que société." +
            "\n\n" +
            "Les candidats peuvent parcourir les offres d'emploi disponibles," +
            " consulter les détails de chaque offre et postuler directement en ligne." +
            " De plus, ils ont la possibilité d'ajouter des notes personnelles" +
            " aux offres qu'ils ont consultées, ce qui peut leur servir " +
            "de rappel ou de moyen de suivi." +
            "\n\n" +
            "Les sociétés, quant à elles, peuvent ajouter des offres d'emploi, " +
            "des missions, des événements et des formations sur le site. " +
            "Elles peuvent fournir tous les détails pertinents concernant ces" +
            " opportunités, tels que la description du poste, les qualifications" +
            " requises, la localisation, la rémunération, etc. Les sociétés ont " +
            "ainsi la possibilité de promouvoir leurs opportunités et d'attirer " +
            "des candidats qualifiés." +
            "\n\n" +
            "En résumé, ce site web offre aux candidats la possibilité de" +
            " consulter et de postuler à des offres d'emploi, ainsi que" +
            " d'ajouter des notes personnelles. Les sociétés, de leur côté," +
            " peuvent publier des offres d'emploi, des missions, des événements " +
            "et des formations pour attirer des candidats potentiels.",
        sourceCodeLink: "https://github.com/jamelbda97/PIDEV-Devchasers-WEB",
        platforms: "Web",
        type: 2,
        logoUrl: "./my-projects/logo/logo4.png",
        videoUrl: "./my-projects/videos/mobile/none.mp4",
        otherUrl: "./my-projects/videos/web/khedemti.mp4",
        technologies: [
            technologies[5],
            technologies[6],
        ],
    },
    {
        id: 4,
        key: 3,
        title: "Chicky",
        subtitle: "Application réseau social avec géolocalisation.",
        description: "Réseau social qui trouve les personnes qui sont dans un même endroit ainsi de créer un" +
            " profil ou les utilisateurs peuvent publier des des vidéos" +
            " et se contacter." +
            " ou l’application les aides par un ensemble des vues très élevées. \n" +
            "Source code pour iOS : https://github.com/jamelbda97/Chicky-ios.",
        sourceCodeLink: "https://github.com/jamelbda97/Chicky-android",
        platforms: "iOS (Swift) / Android (Kotlin)",
        type: 1,
        logoUrl: "./my-projects/logo/logo2.png",
        videoUrl: "./my-projects/videos/mobile/chicky.mp4",
        technologies: [
            technologies[0],
            technologies[1],
            technologies[3],
            technologies[4],
        ],
    },
    {
        id: 5,
        key: 4,
        title: "Rose",
        subtitle: "Application smart home.",
        description: "Rose est une application qui controle les appareils intelligents" +
            " connecté dans la maison.\n" +
            "Rose facilite la vie dans la maison, elle permet d’économiser" +
            " de l’Energie, contrôler des appareils simultanément. ",
        sourceCodeLink: "https://github.com/talbi21/rose",
        platforms: "Mobile",
        type: 0,
        logoUrl: "./my-projects/logo/logo3.png",
        videoUrl: "./my-projects/videos/mobile/none.mp4",
        technologies: [
            technologies[2],
            technologies[3],
            technologies[4],
        ],
    },
];

let projects = Array.from(projectsNormalArray);
let p0 = Object.assign({}, projectsNormalArray[0]);
let p1 = Object.assign({}, projectsNormalArray[1]);
let p2 = Object.assign({}, projectsNormalArray[2]);
p0.key = projectsNormalArray.length
p1.key = projectsNormalArray.length + 1
p2.key = projectsNormalArray.length + 2
projects.push(p0)
projects.push(p1)
projects.push(p2)

export {projects};

export const skills = [
    "Swift",
    "Kotlin",
    "Flutter",
    "Java",
    "JS",
    "C#",
    "ReactJS",
    "NodeJS",
    "Angular",
    "HTML",
    "PHP",
    "CSS",
];
