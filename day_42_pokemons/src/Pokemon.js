import { useState, useEffect } from 'react';

export function Pokemon({ pokemon }) {

    const [one, setOne] = useState(null);
    const url = pokemon.url;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setOne(data);
    }

    useEffect(() => {
        fetchData();
    }, [url])


    return (
        <div className="pokemon">

            {one && (
                <>
                    <h2>{one.name.toUpperCase()}</h2>

                    <p>heigth: {one.height}</p>
                    <p>weight: {one.weight}</p>
                    <p>base experience: {one.base_experience}</p>
                    <div><img src={one.sprites.front_default} />
                        <img src={one.sprites.back_default} /></div>
                    <p style={{ fontWeight: 'bold' }}> types: </p> <p>
                        {one.types.map(type =>
                            <i style={{ color: 'blue' }}> {type.type.name} <br /></i>
                        )}
                    </p>
                    <p style={{ fontWeight: 'bold' }}> abilities: </p> <p>
                        {one.abilities.map(ability =>
                            <i style={{ color: 'purple' }}> {ability.ability.name} <br /></i>
                        )}
                    </p>


                </>)

            }



            {/* <img src={one['sprities']['front_default']} /> */}

        </div>
    )

}