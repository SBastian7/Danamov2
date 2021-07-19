import bcrypt from 'bcryptjs'

const data = {
    products:[
        {
            
            name:'Ultra23 Highness',
            category:'Camisetas',
            image:'item.jpg',
            price:143900,
            brand:'Jordan',
            rating:4.5,
            stock:0,
            numReviews:10,
            description:'Ultra ligera camisetas sisaso nonas dm ioasjpo wskjs wqop',
            colores:[
                'red',
                'green',
                'blue'
            ],
            size:[
                15,
                16,
                17
            ]
        },
        {
            
            name:'Camiseta12 Hoiwjd',
            category:'Camisetas',
            image:'p0.jpg',
            price:185000,
            brand:'Nike',
            rating:2.8,
            stock:15,
            numReviews:10,
            description:'Ultra ligera camisetas sisaso nonas dm ioasjpo wskjs wqop',
            colores:[
                'red',
                'green',
                'yellow'
            ],
            size:[
                15,
                17
            ]
        },
        {
            
            name:'Caremañola MFXd',
            category:'Camisetas',
            image:'item.jpg',
            price:185000,
            brand:'Nike',
            rating:2.,
            stock:18,
            numReviews:10,
            description:'Ultra ligera camisetas sisaso nonas dm ioasjpo wskjs wqop',
            colores:[
                'red'
            ],
            size:[
                15
            ]
        },
        {
            
            name:'Buso Housel Hans',
            category:'Zapatos',
            image:'item.jpg',
            price:125000,
            brand:'Puma',
            rating:4.8,
            stock:18,
            numReviews:3,
            description:'Ultimos nuevos y mazimos dm ioasjpo wskjs wqop',
            colores:['black'],
            size:[0]
        },
        {
            
            name:'Camiseta Hoiwjd',
            category:'Camisetas',
            image:'item.jpg',
            price:85000,
            brand:'Adidas',
            rating:3.5,
            stock:18,
            numReviews:10,
            description:'una mas por qwuyhqwuier asopkdm ioasjpo wskjs wqop',
            colores:[
                'red'
            ],
            size:[
                15
            ]
        }
    ],
    users:[
        {
            name:'sebastian',
            email:'mail@mail',
            password: bcrypt.hashSync('admin',8),
            isAdmin: true,
        },{
            name:'Jaime',
            email:'user@user',
            password: bcrypt.hashSync('user',8),
            isAdmin: false,
        }
    ]
}

export default data;