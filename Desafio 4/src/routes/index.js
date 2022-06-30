const {
    Router
} = require('express');
const router = Router();
let productos = [{
        id: 1,
        title: 'Laptop',
        price: '1000',
        thumbnail: 'https://picsum.photos/200/300'
    },
    {
        id: 2,
        title: 'Celular',
        price: '500',
        thumbnail: 'https://picsum.photos/200/300'
    },
    {
        id: 3,
        title: 'Audifonos',
        price: '50',
        thumbnail: 'https://picsum.photos/200/300'
    }
];


router.get('/', (req, res) => {
    res.send(productos);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const producto = productos.find(producto => producto.id == id);

    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({
            error: 'no se encontro el producto'
        });
    }
})

router.post('/', (req, res) => {
    const {title, price, thumbnail} = req.body;
    const id = productos[productos.length - 1].id + 1;
    productos.push({id, title, price, thumbnail});
    res.sendStatus(201);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {title, price, thumbnail} = req.body;
    const producto = productos.find(producto => producto.id == id);
        if (producto) {
            producto.title = title;
            producto.price = price;
            producto.thumbnail = thumbnail;
            res.sendStatus(200);
        } else {
            res.status(404).send({
                error: 'no se encontro el producto'
            })
        }
    }
    );


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const producto = productos.find(producto => producto.id === Number(id));
    if (producto){
        productos = productos.filter(producto => producto.id !== Number(id));
        res.sendStatus(200);
    }else{
        res.status(404).send({
            error: 'no se encontro el producto'
        })
    }
})

module.exports = router;