let numeroEdad = 25;
let uno = 1;
let dos = 2;
const nombrePropio = 'brian';
let number = 4;
number--;
numeroEdad += 1;
uno *= number;
dos /= 2;
/* console.log("hola mi nombre es "+nombrePropio+" y tengo: "+numeroEdad + " y tuve: "+number+uno+dos); */

/* console.log("I am a \"double quoted\" string inside \"double quotes\"");
console.log("\'brian\'\\ safas \n sfsa\bdd"); */

let nombre = "Brian";
const apellido =" Ancco";
nombre += apellido;
/* console.log("Mi nombre es "+nombre); */

const texto1 = "hijo de la gran puta xdddd";
let num = 0;
num= texto1.length;

let primeraletra="";
let ultimaletra="";
primeraletra= texto1[0]; /* los brakets en este caso para ubicar el orden de un caracter espcifico */
ultimaletra=texto1[texto1.length-1];
const antePenultimaLetra = texto1[texto1.length - 3]
/* console.log(num+" "+primeraletra+ultimaletra+ antePenultimaLetra); */

/* arrays */

const arrayDeNumeros = ["xd",1,2,3,4,5,6,7,8,9];
const arrayMultiD = [["brian",25],["nayeon",26]];
arrayMultiD.push(["mina",24]);
arrayDeNumeros.push(10);

let cuatro = arrayDeNumeros[3];
const nayeon = arrayMultiD[1][0];
const diez = arrayDeNumeros.pop(); //pop elimina y almacena el ultimo elemento  de un array
const xd = arrayDeNumeros.shift() // same, but this one delete the first
arrayDeNumeros.unshift(0); // adds a element to the first spot from a array
/* console.log(cuatro);
console.log(nayeon);
console.log(arrayDeNumeros);
console.log(diez);

 */

function holaMundo() {
    console.log("Hola Mundo");
}
/* holaMundo(); */

function suma(a,b) {
    let sum=a+b;
    return sum;
}
const s =suma(1,2);
/* console.log(s); */

const array = [1,2,3,4,5];

function nextLine(arr,item) {
    arr.push(item);
    item = arr.shift();
    return item;
}

/* console.log(nextLine(array,6));
console.log(JSON.stringify(array)); */

/* booleans */

function bool(it){
    if(it) {
        return "true";
    }
    return "false";    
}

function equal(a,b){
    return a===b; //esto de por si, devuelve booleano, si se cumple a no la funcion
}
function diff(a,b){
    if(a!==b){
        return "not equals, ok";
    }
    return "false";
}
function gt(a,b){
    if(a > 100 || b > 100) {
        return "INCORRECT PARAMETERS AWAY FROM THE LIMITS";
    }
    else {        
        if(a <= b){
            return "a is less or iqual to b";
        } else if (a > b){
            return "a is over than b";
        }
    }
}

/* const a = bool(true);
console.log(a);
console.log(equal(2,'2'));
console.log(diff(2,'2'))
console.log(gt(7,6)); */


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {    
  if(strokes==1){
        return names[0];
    } 
    else if(strokes <= par - 2){
        return names[1];        
    } 
    else if(strokes == par - 1){ 
        return names[2];
    } 
    else if(strokes == par) {
        return names[3];
    }
    else if(strokes == par + 1){ 
        return names[4];
    }  
    else if(strokes == par + 2){
        return names[5];
    }  
    else if(strokes >= par + 3) {
        return names[6];
    }  

//nunca te olvides de la asignacion mbecil de mierda

    
}
console.log(golfScore(5, 9));


/* SWITCH */

function swicthCase(valor){
    let answer = '';
    switch(valor){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break; 
        default:
            answer="another";
            break;   
    }
    return answer;
}

console.log(swicthCase(12));

