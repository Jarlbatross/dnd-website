# Gjøkeredets DND-kampanje

A DnD-webpage for player and DM use.

A webpage where you can add your campaign, and details such as player characters, NPCs, spells, map of the world, session summaries and so on. Designed to be tool that helps DMs and players organize and access notes and information about their DnD-campaign.

## Tech Stack

**Client:** Vue

**Server:** TBD

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [The easiest way to create a README](https://readme.so/)

## Roadmap

WIP:
tabs til: - Steder - PCer (background/charactersheets) - NPCer

    - Items
    - Mulighet å legge inn notater/session-oppsummering
    - Kalender
    - Pantheon
    - Grupperinger (adelshus, laug, foreninger...)
    - Historie før i settingen (tidslinje)
    - lenke til spells

Tilbakemelding stian - fremdriftsplan

Så en nettside laget med Vue, hvor vi henter info fra dette APIet:
https://5e-bits.github.io/docs/api (tips: bruk Axios)
Lagre info om spillet og spillerne i en SQL DB med SSMS

Lag en basic nettside med riktig layout, med tabs/faner w/e
Knytte til APIet via Axios, for å lage en fane med Glossary og Bestiary
Lag en side for regler, hvor du slår sammen APIet med 5e reglene + houserules.
Karakterene til spillerne, lagres i databasen
NPC's lagres i databasen
Session log
Tidslinje
Map

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
