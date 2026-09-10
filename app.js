/* ---------------------------------------------------------------------------
   AJOUTER UN OUTIL : copie un bloc ci-dessous et remplis-le. Rien d'autre à
   toucher (ni index.html, ni style.css) — la carte, son numéro et son
   animation sont générés automatiquement.

     title       obligatoire — le nom affiché sur le bouton
     description obligatoire — une phrase, à quoi sert l'outil
     url         l'adresse en ligne, ou null si l'outil n'est pas encore prêt
                 (la carte s'affiche alors grisée, en « bientôt »)
     tag         optionnel — petit badge en haut de carte
--------------------------------------------------------------------------- */

const TOOLS = [
  {
    title: "Dashboard Instagram",
    description:
      "Taux de réponse aux commentaires, engagement, reach et abonnés semaine par semaine.",
    url: "https://rouxkool.github.io/tataki-dashboard/",
  },
  {
    title: "Est-ce qu'on l'a déjà fait ?",
    description:
      "Cherche dans tous les posts publiés pour savoir si un sujet a déjà été couvert.",
    url: "https://rouxkool.github.io/insta-recherche/",
  },
  {
    title: "Panel",
    description:
      "Sept états motivationnels de l'audience romande des moins de 26 ans. Soumets un concept, un angle, un post ou une question.",
    url: "https://cezannetrummer.github.io/tataki-panel/",
  },
  {
    title: "Commentaires",
    description:
      "Exporte en CSV tous les commentaires et réponses des posts d'une période donnée.",
    url: "https://tataki-commentaires.alessandro-mauro24.workers.dev/",
    tag: "accès restreint",
  },
];

/* --- Rendu (pas besoin d'y toucher pour ajouter un outil) --- */

function buildCard(tool, index) {
  const item = document.createElement("li");
  item.className = "card-wrap";
  item.style.setProperty("--i", String(index));

  const available = Boolean(tool.url);
  const card = document.createElement(available ? "a" : "div");
  card.className = available ? "card" : "card card-soon";

  if (available) {
    card.href = tool.url;
    card.target = "_blank";
    card.rel = "noopener";
  } else {
    card.setAttribute("aria-disabled", "true");
  }

  const number = document.createElement("span");
  number.className = "card-number";
  number.setAttribute("aria-hidden", "true");
  number.textContent = String(index + 1).padStart(2, "0");
  card.append(number);

  // Le badge occupe toujours sa place, même vide : les titres restent alignés
  // d'une carte à l'autre.
  const tagText = available ? tool.tag : tool.tag || "bientôt";
  const tag = document.createElement("span");
  tag.className = tagText ? "card-tag" : "card-tag card-tag-empty";
  tag.textContent = tagText || "\u00a0";
  if (!tagText) tag.setAttribute("aria-hidden", "true");
  card.append(tag);

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = tool.title;
  card.append(title);

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = tool.description;
  card.append(description);

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = available ? "→" : "—";
  card.append(arrow);

  item.append(card);
  return item;
}

const grid = document.getElementById("tools");
grid.append(...TOOLS.map(buildCard));
