//Для роботи з сервером
export default class BookstoreService {
    data =  [
        {
            id: 1, 
            title: 'ВОНО',
            author: 'Стівен Кінг',
            price: 350,
            coverImage: 'https://m.media-amazon.com/images/I/71vmsuIwMYL._AC_UY218_.jpg',
            count:0

        },
        {
            id: 2, 
            title: 'Сяйво',
            author: 'Стівен Кінг',
            price: 300,
            coverImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiga-UT1y02nD7G-Qy7XWJxZXmH3_SZm9RTK6PClaBaKjeR9oSAYtIBZ-GklabI4GKIIjlGrwDoxLGsqjb8U3Ids6bTwxL5_zUOgH3De7DvdBpH_ZDLeZJ0k99fEhZ&usqp=CAc',
            count:0

        }
    ]
    getBooks () {
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(this.data)
            }, 700)
        });
    };
}