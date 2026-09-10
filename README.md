# Portail Tataki

Une seule page, un seul lien à partager : la porte d'entrée vers tous les outils
web de l'équipe. Chaque bouton ouvre l'outil dans un nouvel onglet, à son adresse
existante — le portail ne fait qu'aiguiller, il n'héberge aucun des outils.

## Ajouter un outil

Tout se passe dans le tableau `TOOLS` en haut de `app.js`. Copie un bloc,
remplis-le, enregistre : la carte, son numéro et son animation sont générés
automatiquement. Rien à toucher dans `index.html` ni dans `style.css`.

```js
{
  title: "Nom de l'outil",
  description: "Une phrase : à quoi il sert.",
  url: "https://…",      // ou null si l'outil n'est pas encore en ligne
  tag: "externe",        // optionnel, petit badge sur la carte
},
```

- `url: null` → la carte s'affiche grisée, en pointillés, marquée « bientôt » et
  non cliquable. Pratique pour annoncer un outil en cours de dev.
- La grille s'adapte au nombre de cartes (4, 6, 9…) sans retouche du CSS.

## Voir le site en local

```bash
npm run dev
```

Puis ouvre l'adresse affichée dans le terminal. Aucune dépendance à installer,
aucun build : c'est du HTML/CSS/JS statique.

## Mise en ligne

GitHub Pages, servi depuis la branche `main` à la racine du repo.
Un `git push` suffit à publier.

URL : https://rouxkool.github.io/tataki-portail/

## Outils référencés

| Bouton | Repo / auteur | URL |
|---|---|---|
| Dashboard Instagram | `RouxKool/tataki-dashboard` | https://rouxkool.github.io/tataki-dashboard/ |
| Est-ce qu'on l'a déjà fait ? | `RouxKool/insta-recherche` | https://rouxkool.github.io/insta-recherche/ |
| Panel | Cezanne Trummer | https://cezannetrummer.github.io/tataki-panel/ |
| Commentaires | `RouxKool/tataki-commentaires` | https://tataki-commentaires.alessandro-mauro24.workers.dev/ |

Le lien Commentaires est protégé par Cloudflare Zero Trust Access : un écran
d'authentification à l'ouverture est normal.

## Design

Charte tataki.ch inversée — fond noir, accent jaune. Les variables CSS reprennent
exactement celles de `tataki-dashboard` et `tataki-commentaires`
(`--bg: #0f0f10`, `--accent: #feeb00`), pour que le passage du portail à un outil
ne crée aucune rupture visuelle. La texture de grain du fond est le même
`assets/bg-texture.png` que le dashboard. Titres en Archivo (Google Fonts), avec
repli sur la pile système.

Le logo est le PNG fourni par l'équipe (`assets/logo-tataki.png`), passé en
négatif pour le fond noir : tel quel, ses blocs noirs disparaissaient et il ne
restait que les lettres blanches en suspension. Deux variantes générées à
partir de l'original sont dans `assets/` — `logo-tataki-jaune.png` (utilisée)
et `logo-tataki-blanc.png`. Pour basculer sur la blanche, changer le `src` de
l'`<img class="logo">` dans `index.html`.
