module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        db.createProduct(req.body)
        .then(response => {res.send(response)})
        .catch(err => console.log(err))
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.readProduct(id)
        .then(response => res.send(response))
        .catch(err => console.log(err))
    },
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.readProducts()
        .then(response => res.send(response))
        .catch(err => console.log(err))
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const pro = req.body
        pro.id = id
        db.updateProduct(pro)
        .then(response => res.send(response))
        .catch(err => console.log(err))
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.deleteProduct(id)
        .then(response => res.send(response))
        .catch(err => console.log(err))
    }
}