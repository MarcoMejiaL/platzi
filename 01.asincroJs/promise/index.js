const sometimesWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if (true){
            resolve (`HEY!!!`)
        }
        else{
            reject(`nel perro!!`);
        }
    })
}

sometimesWillHappen()
.then(response =>console.log(response))
.catch(err =>console.error(err));


const some=()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True')
            },3000)
        }else{
            const error = new Error('wops');
            reject (error);
        }
        
    })
}
some()
.then(response => console.log(response))
.catch (err =>console.error(err));


Promise.all([sometimesWillHappen(), some()])
.then(response => {console.log(response)})
.catch (err => {console.error(err)});