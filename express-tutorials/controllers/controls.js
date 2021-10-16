let {people} = require('../data');

const login = (req, res) => {  
    const {name} = req.body;
    if(name) {
     return res.send(`Welcome ${name}!`)
    }else {
        res.status(401).send(`Please Provide Credentials`)
    }
    
}

const peopleData = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const nameHandshake =  (req, res) => {
    const {name} = req.body;
    console.log(name)
    if(!name) {
       return res.status(400).json({Success: false, msg: "Please Enter Your Name"})
    }

    res.status(201).json({Success: true, person: name})
}

const addName = (req, res) => {
    const {name} = req.body;
    console.log(name)
    const newId = people.length + 1
    if(!name) {
     return   res.status(400).json({Success: false, msg: 'Please provide your name'})
    }
    res.status(200).send({Success: true, data: [...people, {"Id" : newId, "name": name}]})
}

const modifyName =  (req, res) => {
    const {id} = req.params
    const {name} = req.body
    console.log(Number(id), name)

    const person =  people.find((person) => person.id === Number(id))

    if(!person) {
       return  res.status(404).json({Success: false, msg: `No person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
        return res.status(200).json({Success: true, data: newPeople})
}

const deleteName = (req, res) => {
    const {id} = req.params;
    const deletePerson = people.find((item) => item.id === Number(id))

    if(!deletePerson){
        return res.status(404).json({Success: false, msg: `User with id ${id} does not exist!`})
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
        return res.status(200).json({Success: true, data: newPeople})

}

module.exports = {login,peopleData,nameHandshake,addName,modifyName,deleteName}