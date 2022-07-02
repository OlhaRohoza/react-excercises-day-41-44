import { Product } from './Product';
export function ProductList() {
    const products = [
        {
            "id": 1,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
            "name": "Propulsion gel"
        },
        {
            "id": 2,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
            "name": "Weight cube"
        },
        {
            "id": 3,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg",
            "name": "A friend"
        },
        {
            "id": 4,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
            "name": "Portal gun"
        },
        {
            "id": 5,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
            "name": "Home-defense robot"
        },
        {
            "id": 6,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
            "name": "Cake (not a lie)"
        }
    ];

    const names = []

    products.forEach((element) => {
        names.push(<Product src={element["img_url"]} name={element["name"]} />)
    })

    return (
        <div className="product-list">

            {names}

            {/* <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg" alt="" />
                <div className="name">Propulsion gel</div>
            </div>

            <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg" alt="" />
                <div className="name">Weight cube</div>
            </div>

            <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg" alt="" />
                <div className="name">A friend</div>
            </div>

            <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg" alt="" />
                <div className="name">Portal gun</div>
            </div>

            <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg" alt="" />
                <div className="name">Home-defense robot</div>
            </div>

            <div className="product">
                <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg" alt="" />
                <div className="name">Cake (not a lie)</div>
            </div> */}

        </div>
    );

};