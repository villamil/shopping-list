export const getCartItems = () => Promise.resolve({
        "data": {
            "items": [
                {
                    "id": "1",
                    "name": "Apple Pen",
                    "price": 2.999,
                    "quantity": 2,
                    "availability": 5,
                    "img": "https://metrouk2.files.wordpress.com/2016/09/capture91.png?w=748&h=419&crop=1"
                },
                {
                    "id": "2",
                    "name": "Pineapple Pen",
                    "price": 5.02,
                    "quantity": 3,
                    "availability": 3,
                    "img": "http://as01.epimg.net/epik/imagenes/2016/09/27/portada/1474966761_962486_1474966872_noticia_normal.jpg"
                },
                {
                    "id": "3",
                    "name": "Pen Pineaple Apple Pen",
                    "price": 6.78,
                    "quantity": 1,
                    "availability": 4,
                    "img": "https://static.vix.com/es/sites/default/files/styles/large/public/r/ryuk-death-note.png?itok=1MS4ekSf"
                }
            ]
        }
})