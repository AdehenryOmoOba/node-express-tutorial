const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'henry'){
        req.user = {name: 'Ade', id: 777}
        console.log('Authorized')
        next()
    } else {
        res.status(401).send('Unauthorized')
        console.log('Unauthorized')
    }
}

module.exports = authorize;