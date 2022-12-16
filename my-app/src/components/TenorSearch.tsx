import axios from 'axios';

import { useState, useEffect } from "react";

function TenorSearch () {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<[]>([]);

    useEffect(() => {
        console.log(searchResults.length);
    }, [searchResults]);

    async function executingSearch(term: string) {
        const apikey = "AIzaSyDWFvFcdJM08ooKmAx6d2s_Lkem53DNyJA";
        const clientkey = "Sylvester"
        const limit = 8;

        const search_url = "https://tenor.googleapis.com/v2/search?q=" + term 
                         + "&key=" + apikey + "&client_key=" + clientkey + "&limit=" + limit;

        await axios.get(search_url)
        .then((response) => setSearchResults(response.data.results))
        .catch((error) => console.log(error));
    }

    function searchTenor(s: string) {
        if (s.length == 0) {
            setSearchResults([]);
        } else {
            setSearchTerm(s);
            executingSearch(s);
            console.log(searchResults);    
        }
    }

    function displayResults(results : []) {
        if (results.length > 0) {
            for (var result of results) {
                var url = result["media_formats"]["gifpreview"]["url"];
                console.log(url);
                return <div><img src={ url } /></div>
            }

            const processed_result = <div>hasResult</div>;
            return processed_result;
        }

        return <div> Have no results</div>
    }

    return (
        <div>
            <div className="flex rounded bg-gray-100 shadow-md m-4" >
                <input className="bg-gray-100 shadow-xl rounded-md px-7 py-2 border-2" 
                    placeholder="Test" 
                    onChange = {(e) => searchTenor(e.target.value)}/>
            </div>
            { displayResults(searchResults) }
        </div>
    )
}

export default TenorSearch;