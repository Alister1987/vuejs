// let card = {
//     name: 'Ford',
//     model: 'Focus',
//     owner: 'Max',
//     year: 2017,
//     phone: '+3 809 009 98 78',
//     image: 'https://cdn3.riastatic.com/photosnewr/auto/photo/ford_fusion__308826628-620x415x70.jpg'
// };
let car = (name, model, owner, year, phone, image ) => ({name, model, owner, year, phone, image });
let log = (message, type, date = new Date()) => ({message, type, date});
const cars = [
    car(
        'Ford',
        'Focus',
        'Max',
        2017,
        '+3 809 009 98 78',
        'https://cdn3.riastatic.com/photosnewr/auto/photo/ford_fusion__308826628-620x415x70.jpg'
    ),
    car(
        'Ford',
        'Mondeo',
        'Pavel',
        2016,
        '+3 849 123 42 11',
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Ford_Puma_%282019%29_at_IAA_2019_IMG_0433.jpg'
    ),
    car(
        'Porshe',
        'Panamera',
        'Irina',
        2017,
        '+3 852 111 22 33',
        'https://mfair.ua/user/cars/52392/52392-oficial-noviy-porsche-panamera-turbo-kiev-2018-16.jpg'
    )
];
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectCarIndex: 0,
        phoneVisibility: false,
        modalVisibility: false,
        logs: [],
        search: ''
    },
    methods: {
        log(message, type) {
            this.logs.push(
                log(message, type)
            );
        },
        selectCar: function (index) {
            this.car = cars[index];
            this.selectCarIndex = index;
            this.phoneVisibility = false
        },
        buyCar() {
            this.log(`Success ${this.car.model}`, 'ok')
            this.modalVisibility = false
        },
        cancelCar() {
            this.log(`Cancel ${this.car.model}`, 'cancel');
            this.modalVisibility = false
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show Phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    },
    filters: {
        date(value){
            return value.toLocaleString();
        }
    }
});