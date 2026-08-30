# Direction artistique — DownloadYourOS

## Trois directions envisagées

### Approche 1 — **Terminal Atlas**
Une interface sombre, éditoriale et structurée qui transforme le catalogue d’OS en carte de compatibilité lisible. L’univers évoque les outils d’administration sérieux plutôt qu’un décor cyberpunk.

**Probability:** 0.07

### Approche 2 — **Signal Brutalist**
Une esthétique de documentation technique brutaliste, avec grands repères typographiques, blocs d’information très nets et une hiérarchie visuelle inspirée des manuels de maintenance.

**Probability:** 0.03

### Approche 3 — **Forge documentaire** — approche retenue
Un produit de téléchargement de confiance, sombre mais chaleureux, qui associe la précision d’un centre de sécurité à la clarté d’un guide éditorial. Le site doit aider à choisir un système d’exploitation en quelques secondes, sans faire croire qu’un navigateur peut installer directement un OS.

**Probability:** 0.08

## Direction retenue : Forge documentaire

### Design Movement
**Neo-industrial editorial design** : une rencontre entre documentation technique, interfaces de consoles et design produit contemporain. Les références sont les manuels d’ingénierie, les écrans d’inventaire et les panneaux de contrôle d’infrastructure, mais interprétés avec une composition aérée et une typographie expressive.

### Core Principles
1. **Confiance avant spectacle** : chaque version présente sa source officielle, son type d’image et ses contrôles d’intégrité.
2. **Information en couches** : un aperçu rapide pour le choix, puis des détails techniques pour les utilisateurs avancés.
3. **Rythme éditorial** : grandes accroches décalées, repères numérotés et sections qui ressemblent à des fiches d’atelier.
4. **Responsabilité technique** : expliciter la limite entre téléchargement d’image disque et installation réelle sur une machine.

### Color Philosophy
Le fond graphite presque noir réduit la fatigue visuelle et rappelle les environnements de maintenance. Un vert citron minéral, **Forge Lime #C7F36B**, devient la signature de confiance : il signale une action vérifiable, un état sain ou une version récente. Des blancs cassés et des gris bleutés servent à distinguer le contenu éditorial des métadonnées. Aucun dégradé violet ni effet de néon gratuit : la couleur doit toujours porter un état ou une action.

### Layout Paradigm
Une composition asymétrique en deux rails : un rail éditorial à gauche pour l’orientation et un rail catalogue à droite pour l’action. Les sections sont reliées par des lignes de repérage, des index et des étiquettes monospacées. Les cartes n’occupent pas tout l’écran de manière uniforme : elles alternent entre fiches compactes, panneau de mise en avant et bandeau de compatibilité.

### Signature Elements
- Un **rail de repérage vertical** avec index, date de synchronisation et marqueurs d’état.
- Des **étiquettes atelier** en capitales monospacées : `SOURCE OFFICIELLE`, `SHA-256`, `BIOS / UEFI`.
- Un **symbole de forge** formé de trois chevrons imbriqués, utilisé comme logo, favicon et marque d’état.

### Interaction Philosophy
Les interactions doivent réduire l’incertitude : filtrer un OS révèle immédiatement les architectures et formats disponibles, tandis que les boutons distinguent clairement « Télécharger l’image » et « Lire les instructions ». Les états de chargement sont courts et informatifs. Les liens externes sont signalés comme tels. Les actions non disponibles dans une version GitHub Pages restent explicites, jamais simulées.

### Animation
Les éléments de catalogue apparaissent avec un décalage de 40 ms, depuis une translation verticale de 8 px et une opacité réduite. Les survols déplacent les cartes de 2 px maximum et éclairent seulement la bordure de signature. Les boutons répondent à la pression par un léger scale à 0,98. La ligne de synchronisation peut se déplacer discrètement pendant 1,4 s lors de l’ouverture du site, mais aucune animation ne doit retarder l’accès à un lien. Toutes les animations non essentielles respectent `prefers-reduced-motion`.

### Typography System
- **Titres** : `Space Grotesk`, 600–700, avec une casse mixte et des interlettrages resserrés.
- **Corps** : `DM Sans`, 400–500, pour une lecture confortable.
- **Métadonnées** : `IBM Plex Mono`, 500, en petites capitales ou chiffres tabulaires.
- Les titres principaux sont larges et légèrement décalés à gauche ; les actions restent plus compactes et très contrastées.

### Brand Essence
**Positionnement :** le point de départ fiable pour trouver, vérifier et télécharger les images officielles des systèmes d’exploitation d’ordinateur, sans perdre du temps dans des liens douteux.

**Personnalité :** précis, responsable, ingénieux.

### Brand Voice
Les titres sont directs et calmes. Les CTA décrivent l’action réelle, sans promesse excessive. Le microcopy explique les limites techniques avec pédagogie.

- « Choisissez votre environnement. Vérifiez la source. Préparez votre machine. »
- « Cette image vient du projet officiel ; l’installation se poursuit ensuite avec votre outil de création USB. »

### Wordmark & Logo
Le logo est un symbole sans texte : trois chevrons angulaires qui convergent vers un noyau carré, comme une matrice de démarrage protégée par une enclume. Le mot-symbole **DownloadYourOS** est composé en Space Grotesk avec le segment `OS` légèrement souligné par Forge Lime. Le symbole doit rester reconnaissable en favicon et dans l’en-tête.

### Signature Brand Color
**Forge Lime — #C7F36B** : un vert jaune minéral, lumineux sans être fluorescent, réservé aux états de confiance, aux appels à l’action principaux et aux accents du logo.

## Décisions de contenu

La première version présente un catalogue de départ avec Windows, Ubuntu, Fedora, Debian, Linux Mint, Arch Linux, openSUSE, FreeBSD, ChromeOS Flex et ReactOS, en renvoyant uniquement vers leurs pages officielles ou leurs téléchargements officiels. Les versions affichées sont des exemples éditoriaux clairement datés dans l’interface et ne doivent pas être interprétées comme une synchronisation en temps réel.

Une synchronisation véritable des nouvelles versions nécessitera une source de données maintenue côté serveur ou un pipeline GitHub Actions qui vérifie les flux officiels et met à jour un fichier de catalogue. GitHub Pages seul ne peut pas surveiller de façon fiable tous les éditeurs ni installer un OS depuis le navigateur.

## Style Decisions

- Le catalogue mélange maintenant des fiches OS et un bandeau transversal de compatibilité pour éviter une grille uniforme.
- Les rails verticaux `TRUST`, `INDEX`, `FLOW` et `SYNC` deviennent un motif structurel récurrent dans les sections.
- Les couleurs secondaires restent limitées aux familles d’OS ; les signaux de confiance, d’intégrité et les actions principales utilisent uniquement Forge Lime `#C7F36B`.
- Le symbole de forge est réutilisé dans le badge de source validée et le bandeau de compatibilité, pas uniquement dans l’en-tête.
