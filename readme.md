#WikiSpace
##Installation
Pour installer le projet:
```bash
npm i 
npm run dev
```
Si vous voulez faire des liens de pages en pages: ne pas utiliser la balise `<a href="lien">`, utiliser `<router-link to="lien">` 
: Vue va automatiquement traduire cette balise come une balise `<a>`.

Il faut quand même définir la route dans `main.js` et la vue (component) qui sera chargée une fois arrivé sur la page.  

_Au 13/12 : attention, les vues marchent pas de ouf il faut faire en sorte que ça s'affiche pas dans la navbar_  