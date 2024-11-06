function index(req, res) {
    res.send('voila les fondues')
}

function create(req, res) {
    res.send('ici pour créer une fondue')
}


module.exports = {index, create};