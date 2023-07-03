import Person from "../database/models/person.js";

const readAll= async ()=>{
    const result =await Person.findAll();
    return result
}

const save = async (user)=>{
    Person.create(user).then(user=>{
        console.log("saved");
    }).catch(err=>{
        console.log({estatus:"error", error:err})
    })
}

const readOne=async (id)=>{
    const result = await Person.findByPk(id)
    return result
}

export default{
    readAll,
    save,
    readOne
}