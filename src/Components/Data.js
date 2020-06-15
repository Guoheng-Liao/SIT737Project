import product1 from '../images/p1.jpg';
import product2 from '../images/p2.jpg';
import product3 from '../images/p3.jpg';
import product4 from '../images/p4.jpg';
import product5 from '../images/p5.jpg';
import product6 from '../images/p6.jpg';

export default {
    products: [
        {
            _id: '001',
            name: "Assassin's creed odyssey",
            category: 'XBOX',
            image: product1,
            price: 29.00,
            brand: "UBSOFT"
        },
        {
            _id: '002',
            name: "Cyberpunk",
            category: 'PC',
            image: product2,
            price: 99.95,
            brand: "CD PROJEKT RED"
        },        
        {
            _id: '003',
            name: "Tom Clancy's The Division 2",
            category: 'PC',
            image: product3,
            price: 19.98,
            brand: "UBSOFT"
        },        
        {
            _id: '004',
            name: "World of Warcraft: Battle for Azeroth",
            category: 'PC',
            image: product4,
            price: 39.00,
            brand: "BLIZZARD"
        },        
        {
            _id: '005',
            name: "Sekiro: Shadows Die Twice",
            category: 'PC',
            image: product5,
            price: 49.00,
            brand: "FROMSOFTWARE"
        },
        {
            _id: '006',
            name: "Metro Exodus",
            category: 'PC',
            image: product6,
            price: 29.00,
            brand: "DEEP SILVER"
        },
]
}