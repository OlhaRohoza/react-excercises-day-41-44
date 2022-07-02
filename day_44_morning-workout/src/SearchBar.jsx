import { useState } from "react";

export function SearchBar({ setSearchQuery }) {
    const [searchWord, setSearchWord] = useState('');

    return (
        <div className="SearchBar">
            <h2>SearchBar:</h2>
            <>
                <input type='text' onChange={(e) => setSearchWord(e.target.value)} />
                <button onClick={() => setSearchQuery(searchWord)} >Search</button>
            </>

        </div>
    )
}