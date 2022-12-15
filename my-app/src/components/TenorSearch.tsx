import axios from 'axios';

import { useState } from "react";

function TenorSearch () {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<[]>([]);

    async function executingSearch(term: string) {
        const apikey = "AIzaSyDWFvFcdJM08ooKmAx6d2s_Lkem53DNyJA";
        const clientkey = "Sylvester"
        const limit = 8;

        const search_url = "https://tenor.googleapis.com/v2/search?q=" + term 
                         + "&key=" + apikey + "&client_key=" + clientkey + "&limit=" + limit;

        await axios.get(search_url)
        .then((response) => console.log(response.data.results))
        .catch((error) => console.log(error));
    }

    function searchTenor(s: string) {
        setSearchTerm(s);
        executingSearch(s);
        console.log(searchResults);
    }

    return (
        <div className="flex rounded bg-gray-100 shadow-md m-4" >
            <input className="bg-gray-100 shadow-xl rounded-md px-7 py-2 border-2" 
                placeholder="Test" 
                onChange = {(e) => searchTenor(e.target.value)}/>
        </div>
    )
}

export default TenorSearch;