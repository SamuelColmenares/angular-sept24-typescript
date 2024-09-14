// func conventional
function addNumbers(a:number, b:number):number{
    return a+b;
}

const addNumberVar = function (a: number, b: number): number{
    return a+b;
};

const datos={
    valor1:789,
    valor2:'tyuio',
    func:addNumberVar
}

console.log('desde objeto:', datos.func(10,10))

const res = addNumberVar(12,5);

console.log(addNumberVar);
console.log(addNumberVar(12, 5));

// func arrow => tipo flecha

const addNumberArrow = (a:number, b:number):number => {
    return a+b;
}

console.log(addNumberArrow(12, 54));

function superior (mayor:number){
     let menor = 5;

     function addNumberInterna(a:number,b:number){
        return menor+b;
     }
    
     console.log( addNumberInterna(menor, mayor));

}
superior(5);
// optionals
function addNumberOptional(a:number, b:number=5){
 return a+b;
}


console.log(addNumberOptional(3));

function AddNumberCB(a:number,b:number,func:Function){
    const res = a+b;
    func(res);
    return res;
}

/* function imprimir(dato:number){
    console.log('hola', dato);
}*/

const cb = AddNumberCB(2,2, (dato:number)=>{
    console.log("hola", dato);
});

console.log('callback ',cb)