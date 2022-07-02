export function SearchResults({ searchResults }) {
    console.log(searchResults);

    return (
        <div className="SearchResults">
            <h2>SearchResults:</h2>
            <div className="result">
                {searchResults && (searchResults.map((element, index) => (
                    <div key={index} className='result--info'>
                        {/* <h4>{element.title}</h4> */}
                        <a href={`https://en.wikipedia.org/wiki/${element.title}`} target='_blank' rel="noopener noreferrer" key={index}>{element.title} </a>
                        {" ... "}
                        <div style={{ fontStyle: 'italic' }}
                            dangerouslySetInnerHTML={{ __html: element.snippet }}
                        />
                        {" ... "}
                    </div>
                )))
                }
            </div>

        </div>
    )
}