// projects.js

const projects = [
    { 
        name: "EV Project by NSCC Makerspace", 
        description: "Built a ship model that runs on an EV system.", 
        image: "projectev-480.jpg", 
        link: "https://github.com/emmanuelebube13/My-projects" 
    },
    { 
        name: "Medium Blog", 
        description: "Weekly posts on topics ranging from politics to technology.", 
        image: "blog-480.jpg", 
        link: "https://medium.com/@emmanuelebubembachu" 
    },
    { 
        name: "Bet Prediction Model", 
        description: "A model for predicting soccer game outcomes.", 
        image: "betmodel-480.png", 
        link: "https://github.com/emmanuelebube13/My-projects" 
    },
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn">View Project</a>
    `;
    projectsGrid.appendChild(projectCard);
});