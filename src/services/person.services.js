import Person from "../database/models/person.js";

const readAll = async () => {
    const result = await Person.findAll();
    return result
}

const save = async (user) => {
    Person.create(user).then(user => {
        console.log("saved");
    }).catch(err => {
        console.log({ estatus: "error", error: err })
    })
}

const readOne = async (id) => {
    const result = await Person.findByPk(id)
    return result
}

const deleteOne = async (id) => {
    Person.destroy({
        where: {
            id
        }
    }).then(result => console.log(result)).catch(err => console.log(err))
}

const update = async (id, user) => {
    const {name, lastName,phone,email}= user
    Person.update({
        name,
        lastName,
        phone,
        email
    },{
        where:{
            id
        }
    }).then(result=>console.log(result)).catch(err=>console.log(err))
}

export default {
    readAll,
    save,
    readOne,
    deleteOne,
    update
}
