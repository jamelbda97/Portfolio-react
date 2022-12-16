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
        description: "Nous avons essayé de concevoir un jeu vidéo 3d intitulé « Togo » qui se base sur la" +
            "géolocalisation.\n Le joueur va, en sillonnant le territoire tunisien, collecter les monuments " +
            "historiques et les mettre dans un inventaire, il pourra ainsi les visiter virtuellement et pour " +
            "chaque monument gagné le joueur va réaliser des challenges et jouer à des jeux spécifiques. \n" +
            " C'est une sorte de collector numérique des modèles 3d des monuments historiques mais avec " +
            "un challenge important pour chaque monument ce qui va booster les joueurs à découvrir d'autres " +
            "monuments et sites.",
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
        title: "Kitebi",
        subtitle: "Application pour lecture de livres",
        description: "Cette app permet à ses utilisateurs de lire des livres " +
            " et d'écouter des livres audio publiés par le Ministère des Affaires Culturelles.\n" +
            "Dans cette application, vous pouvez lire des livres PDF, les télécharger," +
            " les ajouter à vos favoris ou les partager, c'est presque la même chose pour les livres audio mp3.\n" +
            "Vous pouvez partager des publications (texte/audio/image) et lire les publications d'autres personnes.\n" +
            "Il y a une bibliothèque qui contient tous vos livres/livres audio préférés et ceux que vous avez téléchargés.\n" +
            "Vous pouvez également rechercher du contenu, trier par catégorie ou trier par âge.\n" +
            "L'application a un mode sombre et vous pouvez changer la langue en français, anglais et arabe.",
        sourceCodeLink: "Privé",
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
        subtitle: "C'est un site web pour recrutement/recherche de travail/missions qui offre aussi des evenements",
        description: "Dans ce site web, vous pouvez vous connecter en tant que candidat/societe.\n" +
            "Les candidats peuvent consulter les offres et postuler ou ajouter une note.\n" +
            "Les societes peuvent ajouter des offres de traivail, missions, evenements etformations.",
        sourceCodeLink: "https://github.com/jamelbd97/PIDEV-Devchasers-WEB",
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
            "Source code pour iOS : https://github.com/jamelbd97/Chicky-ios.",
        sourceCodeLink: "https://github.com/jamelbd97/Chicky-android",
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
        description: "Rose est un appareil intelligent qui sert à contrôler" +
            " d’autre appareil connecté dans la maison.\n" +
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
