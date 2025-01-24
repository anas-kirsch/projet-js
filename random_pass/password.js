

const nombre = [1,2,3,4,5,6,7,8,9,0];

const lettre_min = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const lettre_maj = lettre_min.map(lettre => lettre.toUpperCase());

// console.log(nombre);
// console.log(lettre_min);
// console.log(lettre_maj);

function generate_password(){

    let finale_password = '';
    for (let index = 0; index < 4; index++) {

    const rand = Math.floor(Math.random()*26);
    const random_letter = lettre_min[rand];
    // console.log(random_letter);
    
    const rand1 = Math.floor(Math.random()*26);
    const random_maj_letter = lettre_maj[rand1];
    // console.log(random_maj_letter);
    
    const rand2 = Math.floor(Math.random()*10);
    const random_number = nombre[rand2];
    // console.log(random_number);
    
    
    const password = random_letter +random_maj_letter + random_number;
    finale_password+=password;
    
    
}
    console.log("Voici votre mot de passe généré :",finale_password);
}


    generate_password();

    




