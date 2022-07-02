export function Country({ country }) {
    console.log(country);
    return (
        <div className="country" >
            <h2>{country.name.common}</h2>
            <img height={150} width={150} src={country.flags.svg} />
        </div>
    )
}