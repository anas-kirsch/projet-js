// let age = 25;
// const prenom = "massinissa";
// let somme = 5+0+6;
// console.log("salut !");
// console.log("je m'appelle "+prenom+" j'ai "+age+" ans , la somme est "+somme+" !");




// let age=1;
// if(age > 5){
//     console.log("age est plus grand que 5");
// }
// else{
//     console.log("le nombre est egal ou inferieur a 5");
//     age =age+1;
//     console.log(age);

//}


// let age = 0;

// for(let i = 0; i<10; i++){
//     age++;
//     console.log(age);
// }




/////////////////////////////////////

// async function texte(){

//     console.log("hello world !");
// }

// function texte2(){

//     console.log("comment ca va ? ");

// }

// async function executedellay() {

//     await texte();
//     setTimeout(() =>{
//         texte2();
//     },2000);

// }

// executedellay();


// setTimeout(texte,2000);
// texte2();  



////////////////////////////////////


// let a = 0;
// let i = 0;
// for(i; i<100000; i++){
//     a++;
//     console.log(a);    
// }

////////////////////////////////////

// console.log(global);
// console.log(typeof(age));
// age = 3;




/////////////

// async function executedellay() {

//     await texte();
//     const mafonction = function(){
//         texte2();
//     };
//     setTimeout(mafonction,2000);
// }



// const mafonction = () =>{
//     texte2();
// };




async function test1(){

    console.log("hello world");

}


function test2(){

    console.log("good bye !");


}

test1().then();
test2();
Promise(test1);


// instentiation d'un objet : new object()

//////////////////////////////////////////

    // si let age de ligne 3 est ici il est global donc utilisable dans la fonction div
    function somme(){
        let age = 9; //si cette ligne reste ici, age est local a cette fonction donc inutilisable dans la fonction div; et le code de marche pas    
        age = age + 7;
        console.log(age); 
    }
    
    somme();
    
    
    function div(){
    
        age=age /2;
    
        console.log(age);
    }
    
    div();

/////////////////////////////////////////////

// same exemple
let maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;



//same exemple
let maVoiture = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };



    console.log(maVoiture); 
/////////////////////////////////////////////////