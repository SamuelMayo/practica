import personServices from "../services/person.services.js"

const getAll= async(req,res)=>{
    const result= await personServices.readAll();
    res.send(result)
}

const save = async (req,res)=>{
    const {name,lastName,phone,email}= req.body
    if(!name || !lastName || !phone || !email){ return res.status(400).send({ status: 'error', error: 'valores Incompletos' })}
    const user = {
        name,
        lastName,
        phone: +phone,
        email
    }
    const result = await personServices.save(user);
    res.send({ status: 'success', payload: result })
}

const getById = async(req,res)=>{
    const {id} = req.params;
    if(!id) return res.status(400).send({ status: 'Error', error: 'the Id did not arrive' })
    const result = await personServices.readOne(id);
    if(result===null) return res.status(400).send({ status: 'Error', error: 'person not found' })
    res.json(result);
}


export default {
    getAll,
    save,
    getById
}
