const Math={};

function sumar(x1,x2){
    return x1+x2;
}

function restar(x1,x2){
    return x1-x2;
}

function mult(x1,x2){
    return x1*x2;
}

function dividir(x1,x2){
   if (x2 == 0) { 
       console.log('No se puede dividir por 0.');
    }
   else {
       return x1/x2;
    }
}

function hola(nombre){
    console.log('Hola ',nombre);
}

Math.sumar=sumar;
Math.restar=restar;
Math.mult=mult;
Math.dividir=dividir;

module.exports = Math;
