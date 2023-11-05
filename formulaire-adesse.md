# Formulaire d'adesse

## Objectif

Créer un formulaire d'adresse qui permette d'améliorer la saisie d'une adresse en France.
Le formulaire permettrait d'afficher de l'auto-complétion en allant chercher les données sur l'API d'adresses du gouvernement.

## Installation

Créer une nouvelle application vite et appellez-la `formulaire-adresse`:

```bash
npm init vite@latest
cd formulaire-adresse
npm install
npm run dev
```

## Créez un composant `AdresseForm`

- Créer un champ de saisie pour l'adresse
- Stocker la saisie dans un état local
- Afficher la saisie dans la console à chaque changement
- A chaque changement, lancer une requête sur l'API d'adresse du gouvernement
- Gérer le cas d'une saisie de moins de 3 caractères
- Afficher les résultats dans la console
- Afficher les résultats dans une liste
- Cacher la liste de résultats quand il n'y a pas de possibilités
- lorsque l'on clique sur un résultat, la saisie devient le résultat sélectionné

## Utiliser le composant dans `App`

- Importer le composant `AdresseForm` dans `App`
- Afficher le composant `AdresseForm` dans `App`
- Ajouter un bouton `Envoyer`
- Au click, afficher dans la console, l'adresse saisie

## Ressources

- [API d'adresses du gouvernement](https://geo.api.gouv.fr/adresse)
- [Image Throttle vs Debounce](https://i.imgur.com/ynlwKtm.png)
- [useDebounce](https://usehooks-ts.com/react-hook/use-debounce)
- [useThrottle](https://usehooks-ts.com/react-hook/use-throttle)
- [Throttle vs Debounce](https://css-tricks.com/debouncing-throttling-explained-examples/)