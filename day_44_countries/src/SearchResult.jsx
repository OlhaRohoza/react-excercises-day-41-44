import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Country } from "./Country";

export function SearchResult() {
    const [countries, setCountries] = useState([]);
    const params = useParams();
    const url = `https://restcountries.com/v3.1/name/${params.name}`;

    const fetchData = async () => {
        const resonse = await fetch(url);
        const data = await resonse.json();
        console.log(data);

        if (data && data.message) {
            alert(data.message);
        } else {
            setCountries(data);
        }

    }

    useEffect(() => {
        fetchData();
    }, [params.name]);

    return (
        <div className="country--search">
            {countries.map((country, i) => (
                <Country key={i} country={country} />
            ))}
        </div>
    )
}
