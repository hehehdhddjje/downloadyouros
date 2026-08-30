# Validation des sources officielles — DownloadYourOS

## Vérifications du 30 août 2026

- **Microsoft Windows 11** : la page `https://www.microsoft.com/software-download/windows11` redirige vers la page Microsoft officielle « Download Windows 11 ». Elle sert de point d’accès à l’installation et aux médias de Windows 11.
- **Ubuntu Desktop** : `https://ubuntu.com/download/desktop` est la page officielle Ubuntu Desktop. La page affichée indique Ubuntu 26.04.1 LTS, avec téléchargements séparés pour Intel/AMD 64-bit et ARM 64-bit, ainsi que des liens vers les versions alternatives et les instructions d’installation.

## Règle de contenu

Le site ne stocke pas les images disque et ne prétend pas installer un OS dans le navigateur. Les CTA renvoient vers les pages officielles des éditeurs et projets. Les métadonnées de version doivent être resynchronisées côté pipeline avant d’être affichées comme actuelles.

## Catalogue initial

Les liens utilisés dans `client/src/pages/Home.tsx` pointent vers les pages officielles connues de Microsoft, Ubuntu, Fedora, Debian, Linux Mint, Arch Linux, openSUSE, FreeBSD, Google ChromeOS Flex et ReactOS. Ils doivent rester des liens externes de référence, pas des miroirs hébergés par DownloadYourOS.
