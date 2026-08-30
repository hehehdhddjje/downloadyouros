# DownloadYourOS

DownloadYourOS est un catalogue statique en français qui aide à trouver les pages officielles de téléchargement des systèmes d’exploitation pour ordinateur. Le site ne stocke pas d’images disque et ne remplace pas l’outil d’installation de chaque éditeur : il réduit le risque de cliquer sur un miroir douteux et explique les étapes de vérification.

## Ce que contient la première version

La page présente un catalogue filtrable de Windows, Ubuntu, Fedora, Debian, Linux Mint, Arch Linux, openSUSE, FreeBSD, ChromeOS Flex et ReactOS. Chaque fiche indique la famille, le canal, les architectures, le type de média et un lien externe vers la source officielle. La page comporte également une méthode de vérification, un guide en trois étapes et une section expliquant la future synchronisation.

## Développement local

```bash
pnpm install
pnpm dev
```

Pour vérifier le projet :

```bash
pnpm check
pnpm build
```

## GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` construit le site à chaque publication sur `main` et le déploie avec GitHub Pages. Le build définit automatiquement la base `/downloadyouros/` grâce à `GITHUB_PAGES=true`, ce qui correspond au dépôt demandé.

Après le premier push, ouvrir **Settings → Pages** dans GitHub et choisir **GitHub Actions** comme source si GitHub ne l’a pas sélectionnée automatiquement. Le site sera ensuite accessible à l’adresse `https://<ton-compte>.github.io/downloadyouros/`.

## Mise à jour automatique du catalogue

GitHub Pages héberge le frontend mais ne peut pas, à lui seul, surveiller tous les éditeurs et publier des métadonnées fiables en temps réel. La prochaine étape recommandée est un pipeline GitHub Actions planifié qui vérifie les flux officiels autorisés, compare les versions et ouvre une pull request de mise à jour. Une validation humaine doit rester possible avant l’affichage d’une nouvelle version.

Cette séparation est volontaire : l’installation d’un système d’exploitation ne peut pas être exécutée directement par une page web de manière sûre et universelle. DownloadYourOS peut guider vers une image officielle, une somme SHA-256 ou une signature, puis vers l’outil de création de support recommandé par le projet.

## Identité

La direction visuelle **Forge documentaire** associe un fond graphite, le vert de confiance **Forge Lime `#C7F36B`**, des repères verticaux et une typographie éditoriale `Space Grotesk` / `DM Sans` / `IBM Plex Mono`.
