const express = require('express');
const router = express.Router();
const {login,peopleData,nameHandshake,addName,modifyName,deleteName} = require('../controllers/controls')


// router.post('/login', login)
// router.get('/api/people', peopleData)
// Using Javascript to handle incoming POST request on the server side ********
// router.post('/api/people', nameHandshake)


///////////////////////////////////////////////////////////////////////


// router.post('/database/add/postman', addName)
// router.put('/database/add/postman/:id', modifyName)
// router.delete('/database/add/postman/:id', deleteName)
// Another way to condense the routers...........

router.route('/login').post(login)
router.route('/api/people').get(peopleData).post(nameHandshake)
router.route('/database/add/postman').post(addName).put(modifyName).delete(deleteName)



module.exports = router