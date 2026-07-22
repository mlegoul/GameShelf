# Design System GameShelf — Figma ↔ Storybook

Pas à pas pour relier le fichier Figma (`GameShelf`, `xBoFXhl21zM77kXiu44sOm`) au Storybook du projet.

Trois liaisons indépendantes, à faire dans cet ordre :

| #   | Liaison           | Sens                  | Coût                                |
| --- | ----------------- | --------------------- | ----------------------------------- |
| A   | `addon-designs`   | Figma → Storybook     | gratuit                             |
| B   | Dev Mode MCP      | Figma → Claude/IDE    | plan payant Figma                   |
| C   | Code Connect      | Code → Figma Dev Mode | siège Dev/Full, plan Org/Enterprise |
| D   | Storybook Connect | Storybook → Figma     | Storybook publié                    |

---

## Étape 0 — Ce qui est déjà en place (fait)

Migration des 8 composants Figma effectuée le 21/07/2026 via le Dev Mode MCP.
Voir `figma-audit.md` pour l'état des lieux qui l'a précédée.

- `src/ui/theme/tokens.ts` : tokens `gs2` relevés dans Figma — `color`, `radius`,
  `elevation`, `fontFamily`, `typography`. Source de vérité du code.
- `src/ui/theme/theme.ts` : thème MUI **en mode clair**, comme les composants Figma.
- `src/ui/theme/Foundations.stories.tsx` : planche des tokens — couleurs, rayon,
  élévations, typographie (la page « Fondations » du fichier Figma est vide,
  cette planche en tient lieu). Volontairement une story et non une page MDX :
  les pages MDX autonomes plantent au rendu (« Illegal invocation »).
- `src/ui/components/` : les 8 composants, chacun avec `X.tsx`, `X.stories.tsx`,
  `X.figma.tsx` et `index.ts` — Button, ChipStatut, ChipPlateforme, TextField,
  GameCard, AppBar, Dialog, Snackbar.
- `src/ui/utils/storybookFigma.ts` : helper `figmaDesign(nodeId)` + la table
  `FIGMA_NODES` des node-id réels.
- Fonts self-hostées : `@fontsource/inter` et `@fontsource/jetbrains-mono`,
  importées dans `.storybook/preview.tsx` et `src/main.tsx`.
- `figma.config.json`, scripts `figma:check` / `figma:publish`.

Vérifier : `npm run storybook` → la section **Design System** liste les 8 composants
plus la planche **Fondations**, sur fond blanc.

Les démos Storybook par défaut (`src/stories/`) ont été supprimées.

---

## Étape A — Afficher la maquette Figma dans Storybook

**A.1** Dans Figma desktop, sélectionner le frame ou le composant.

**A.2** Clic droit → **Copy link to selection**. L'URL contient `?node-id=43-996`.

**A.3** Dans la story, passer ce node-id au helper :

```ts
// src/ui/components/Button/Button.stories.tsx
parameters: {
  ...figmaDesign('43-996'),
}
```

**A.4** Recharger Storybook → onglet **Design** à côté de _Controls_.

> Si la frame reste grise : le fichier Figma doit être partagé en « Anyone with the link → can view », sinon l'iframe d'embed est bloquée.

Le node-id du Button dans `Button.stories.tsx` et `Button.figma.tsx` est actuellement un **placeholder** (`43-996`, celui de la page Colors). À remplacer.

---

## Étape B — Activer le serveur MCP de Figma desktop

Permet à Claude / Cursor / VS Code de lire directement tes frames.

**B.1** Ouvrir **Figma desktop** (indispensable : le serveur tourne en local, pas dans le navigateur).

**B.2** Menu **Figma → Preferences → Enable local MCP server** (aussi appelé _Dev Mode MCP server_). Le serveur écoute sur `http://127.0.0.1:3845/mcp`.

**B.3** Côté Claude : autoriser le connecteur Figma (le serveur est présent mais **non authentifié** actuellement — il faut passer par les réglages de connecteurs).

**B.4** Vérifier : sélectionner une frame dans Figma, puis me demander « génère le composant à partir de ma sélection ».

**B.5** Optionnel mais recommandé — générer les règles du design system pour que le code produit respecte tes conventions :

```
demande : "crée les design system rules pour ce repo"
```

Cela écrit un fichier de règles que Figma réutilise à chaque génération.

---

## Étape C — Code Connect (le cœur du design system)

Objectif : quand un dev ouvre le Button dans le Dev Mode de Figma, il voit `<Button variant="primary">Ajouter un jeu</Button>` et non du CSS généré.

**C.1** Créer un token Figma : avatar → **Settings → Security → Personal access tokens**. Scopes : _File content (read)_ + _Code Connect (write)_.

**C.2** Le mettre dans `.env` (déjà gitignoré) :

```bash
FIGMA_ACCESS_TOKEN=figd_xxxxxxxx
```

**C.3** Dans Figma, préparer le composant : il doit avoir des **propriétés** nommées (`Variant`, `Size`, `Label`, `Disabled`) avec des valeurs qui correspondent au mapping de `Button.figma.tsx`.

**C.4** Ajuster `src/ui/components/Button/Button.figma.tsx` : l'URL du node et les noms exacts des propriétés Figma.

**C.5** Valider le parsing puis publier :

```bash
npm run figma:check      # figma connect parse
npm run figma:publish    # figma connect publish
```

**C.6** Vérifier dans Figma : Dev Mode → sélectionner le Button → panneau **Code** → ton snippet React.

Pour les composants suivants, le générateur fait le squelette :

```bash
npx figma connect create "<url-du-composant>" --token $FIGMA_ACCESS_TOKEN
```

---

## Étape D — Voir les stories vivantes dans Figma

**D.1** Publier le Storybook. Le plus simple avec `@chromatic-com/storybook` déjà installé :

```bash
npx chromatic --project-token=<token>
```

**D.2** Dans Figma : **Resources → Plugins → Storybook Connect** (éditeur Chromatic).

**D.3** Lancer le plugin, coller l'URL du projet Chromatic, sélectionner le composant Figma, puis **Link story**.

**D.4** Un onglet « Storybook » apparaît sur le composant Figma, avec la story interactive.

---

## Boucle de travail cible

```
Figma (tokens + composants)
   │  Étape B — MCP lit la sélection
   ▼
tokens.ts → theme.ts → src/ui/components/*
   │  Étape A — la story affiche la maquette
   ▼
Storybook (doc + tests a11y + vitest)
   │  Étapes C et D — le code remonte dans Figma
   ▼
Figma Dev Mode (snippet React + story vivante)
```

Règle d'or : **les tokens vivent dans `tokens.ts`**, Figma les reflète via ses Variables. Ne jamais coder une couleur en dur dans un composant.

---

## Reste à faire

- [x] Remplacer les node-id placeholder par les vrais (table `FIGMA_NODES`).
- [x] Aligner `tokens.ts` sur les Variables Figma `gs2`.
- [x] Supprimer `src/stories/` (démos Storybook par défaut).
- [x] Coder les 8 composants publiés dans Figma.
- [ ] **Documenter la page « Fondations » dans Figma** (node `43:996`, vide) : sans
      planche, les Variables ne sont lisibles qu'à travers les composants.
- [ ] **Publier Code Connect** : `npm run figma:publish` (nécessite `FIGMA_ACCESS_TOKEN`
      et un siège Dev/Full sur plan Org/Enterprise). Le parse passe déjà pour les 8.
- [ ] **Porter le mode sombre** : maquetté dans Figma (frames `Dark / *`, node `57:161`),
      absent du thème. Les Variables `gs2` ont un mode Dark à extraire.
- [ ] Composants absents de Figma mais présents dans les maquettes : `Rating`
      (les étoiles sont du texte brut), skeletons de chargement, états vides / erreur,
      tuiles et barres du Dashboard (`63:247`).
- [ ] Brancher `figma:check` sur le hook pre-commit husky.

### Écarts assumés vis-à-vis de Figma

- `State=Hover` (Button) et `State=Focus` (TextField) ne sont pas des props :
  ce sont les états CSS `:hover` et `:focus-within`.
- Le composant Figma `Button` n'expose aucune propriété de texte — le libellé
  passe par `children`, et Code Connect affiche un libellé littéral.
- La pastille de la variante `Undo` du Snackbar réutilise le vert de `Succès`
  dans Figma. Reproduit tel quel ; à trancher si c'est involontaire.
- L'action de l'AppBar a un padding vertical de 10px là où le Button est à 12px.
  Compensé par un `sx` local plutôt qu'une variante de plus.
