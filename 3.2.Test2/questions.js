let CreationTableauLangages =  () => {
    var langages = ['Html', 'CSS', 'Java', 'PHP']
    return langages;
}

let CreationTableauNombres =  () => {
    var nombres = [ 0, 1, 2, 3, 4, 5 ]
    return nombres;
}

let RemplacementElement =  (langages) => {
    langages.splice(2, 1, "Javascript");
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    var reseaux_sociaux = reseaux_sociaux_chaine.split(',')
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    var langages_chaine = langages.join(',');
    return langages_chaine;
}

let TriTableau =  (reseaux_sociaux) => {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

let InversionTableau =  (langages) =>{
    langages.reverse();
    return langages;
}
