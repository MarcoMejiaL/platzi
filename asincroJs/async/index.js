const algo = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('algo'),3000)
        : reject(new Error('error'))
    });
}

const algos= async() =>{
    const something = await algo();
    console.log(something);
}

console.log('Before');
algos();
console.log('After');


const otrafuncion= async() =>{
    try{
        const algos = await algo();
        console.log(algos);
    }catch(error){
        console.error(error)
    }
}
console.log('Before');
algos();
console.log('After');