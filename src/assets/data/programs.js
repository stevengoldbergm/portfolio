// Import local SVGs
import insomnia from "../imgs/insomnia.svg"
import mongoDBC from "../imgs/mongoDbCompass.svg"
import msOffice from "../imgs/office-1-logo-svgrepo-com.svg"

const programs = [
    {
        reference: 'https://git-scm.com/',
        source: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
        altText: "Git",
        id: 1
    },
    {
        reference: 'https://code.visualstudio.com/',
        source: "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
        altText: "VS Code",
        id: 2
    },
    {
        reference: 'https://insomnia.rest/',
        source: insomnia,
        altText: "Insomnia",
        id: 3
    },
    {
        reference: 'https://www.mysql.com/products/workbench/',
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/512px-Antu_mysql-workbench.svg.png",
        altText: "Workbench",
        id: 4
    },
    {
        reference: 'https://www.mongodb.com/products/compass',
        source: mongoDBC,
        altText: "Compass",
        id: 5
    },
    {
        reference: 'https://www.microsoft.com/en-us/microsoft-365',
        source: msOffice,
        altText: "MS Office",
        id: 6
    },
    {
        reference: 'https://docs.google.com',
        source: "https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Docs_2020_Logo.svg",
        altText: "Docs",
        id: 7
    },
    {
        reference: 'http://sheets.google.com',
        source: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
        altText: "Sheets",
        id: 8
    },
    {
        reference: 'http://slides.google.com',
        source: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg",
        altText: "Slides",
        id: 9
    },
];
export default programs;