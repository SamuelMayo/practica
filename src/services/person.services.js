import Person from "../database/models/person.js";

const readAll= async ()=>{
    const result =await Person.findAll();
    return result
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