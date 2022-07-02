import { useState, useEffect } from "react";
import { Country } from "./Country";

export function Countries() {
    const [countries, setCountries] = useState([]);
    const url = 'https://restcountries.com/v3.1/all';

    const fetchData = async () => {
        const resonse = await fetch(url);
        const data = await resonse.json();
        console.log(data);
        setCountries(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="countries">
            <br />
            {

                countries && countries.map((country, index) => (
                    <Country key={index} country={country} />
                ))
            }
        </div>
    )
}