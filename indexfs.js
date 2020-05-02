const fs= require('fs');

//Invocacion asincrona 
fs.writeFile('./texto.txt','linea uno',function(err){
  if (err) {
      console.log(err);
  }
  console.log('Archivo creado');
});

//Invocacion sincrona
const result=fs.writeFile('./texto2.txt','linea dos',function(err){
    if (err) {
        console.log(err);
    }
    console.log('Archivo 2 creado');
});

fs.readFile('./texto.txt',function(err,data){
if (err){
     console.log(err);
}else{
    console.log(data.toString());
}
});

console.log('ultima linea de codigo');