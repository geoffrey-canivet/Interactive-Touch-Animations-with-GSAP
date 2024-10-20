# Description du projet

Ce projet est une application interactive qui utilise jQuery et GSAP pour animer divers éléments graphiques. L'application comporte plusieurs fonctions qui représentent des actions liées à la production de bière, chacune étant déclenchée par un clic sur des éléments de l'interface utilisateur. Le score augmente chaque fois qu'une action est effectuée, et une vérification est effectuée pour voir si le score atteint un seuil particulier.

## Fonctionnalités

1. **Gestion du Score**: 
   - La variable `score` suit le nombre d'actions effectuées.
   - La fonction `verif()` vérifie si le score a atteint 9, ce qui active le bouton "Tapis".

2. **Affichage des Indices**: 
   - La fonction `indice()` permet d'afficher ou de masquer les indices selon leur état actuel.

3. **Actions Animées**:
   - Chaque fonction d'action (comme `btnHoublon()`, `btnMixeur()`, etc.) déclenche des animations spécifiques via GSAP et modifie l'état visuel des éléments de l'interface.
   - Chaque bouton, une fois cliqué, désactive son événement de clic et met à jour le score.

## Exemple de Code

Voici un exemple de la fonction pour l'action "Houblon" :

```javascript
const btnHoublon = () => {
    let gousses = document.getElementsByClassName("gousses")[0];
    gousses.style.display = "block";
    const ho1 = gsap.timeline({repeat: -1});
    ho1.fromTo('.ho1',{y:-10},{y:20,duration:1,repeat:-1, ease:Linear.easeNone});
    // Autres animations...
    score++;
    verif();
}
