// skills.js

const skills = [
    { name: "Excel", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "SQL", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Python", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "R", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Tableau", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Power BI", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Machine Learning", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Data Visualization", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Big Data", link: "https://github.com/emmanuelebube13/My-projects" },
    { name: "Data Warehousing", link: "https://github.com/emmanuelebube13/My-projects" },
];

const skillsGrid = document.getElementById("skills-grid");

skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.innerHTML = `<a href="${skill.link}" target="_blank">${skill.name}</a>`;
    skillsGrid.appendChild(skillCard);
});