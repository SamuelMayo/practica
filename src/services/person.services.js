import Person from "../database/models/person.js";

const readAll= async ()=>{
    return ("hello in the services")
}

const save = async (user)=>{
    Person.create(user).then(user=>{
        console.log("Guardado");
    }).catch(err=>{
        console.log({estatus:"error", error:err})
    })
}

export default{
    readAll,
    save
}