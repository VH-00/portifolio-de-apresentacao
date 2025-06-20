// Alternar tema claro/escuro e salvar preferência no localStorage
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Projetos para carregar dinamicamente
const projects = [
  {
    title: "Site Institucional",
    description: "Desenvolvido com intenção de ser uma página de informativa básica e de transparência.",
    image: "imgs/pagina_inicial_ong.jpeg", // coloque a imagem correta aqui
    link: "https://vh-00.github.io/site-ong/"
  },
  // Pode adicionar mais projetos aqui no mesmo formato
];

const projectsList = document.querySelector('.projects-list');

if (projectsList) {
  projects.forEach(proj => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-item'); // ou 'project-card' se preferir, só ajustar no CSS

    projectCard.innerHTML = `
      <a href="${proj.link}" target="_blank" rel="noopener noreferrer" title="${proj.title}">
        <img src="${proj.image}" alt="${proj.title}" />
      </a>
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    `;

    projectsList.appendChild(projectCard);
  });
}
