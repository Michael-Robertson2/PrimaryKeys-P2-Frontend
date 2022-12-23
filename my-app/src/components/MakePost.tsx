import { GifIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

import { useState } from "react";
// import { PrincipalContext, SetPrincipalContext } from '../context/PrincipalProvider';
import SylvesterAPI from '../utils/ApiConfig';

import TenorSearch from "./TenorSearch";

function MakePost(props: any) {
    const [post, setPost] = useState<string>("");
    const [tenorState, setTenorState] = useState<boolean>(false);
    const [tenorUrl, setTenorUrl] = useState<string>("");

    async function submit() {
        // setMyTenorUrl();
        console.log("Attempting to submit...");
        console.log(post);
        console.log(tenorUrl);
        console.log(window.sessionStorage.getItem("auth")); 
        var auth = window.sessionStorage.getItem("auth"); //TODO: Remove sessionStorage reliance and use PrincipalContext
        if (auth) {
            var json = JSON.parse(auth);
        } else {
            return;
        }

        await SylvesterAPI.post("posts", {
            content: post,
            imgUrl: tenorUrl
        }, {
            headers: {
                authorization: json["token"]
            }
        })
        .then((response) => {
            console.log(response);
            props.functionOnSubmit();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    function toggleTenor() {
        setTenorState(!tenorState);
    }

    function setMyTenorUrl() {
        var url = document.getElementById("unique_id_019876091287")?.getAttribute("value");
        console.log("Setter");
        console.log(url);
        if (url) {
            setTenorUrl(url);
        } else {
            setTenorUrl("");
        }
    }

    return (
    <div className="flex flex-col items-center border-double border-4 border-red-500">
        <div className="md:flex flex-start pt-8 w-full">
            <div className="block p-6 rounded-lg shadow-lg bg-gray-200  ml-6 mr-6 w-full">
                <input className="text-gray-700 mb-6 h-100 w-full" placeholder="Sufferin' succotash, spit it out!" onChange={(e) => setPost(e.target.value)}></input>
                
                {tenorState ? <TenorSearch passData={setTenorUrl}/> : <div></div>}
                
                <div className="border-double border-4 border-red-500 flex justify-end">
                    <GifIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={toggleTenor}/>
                    <PencilSquareIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={submit}/>
                </div>
            </div>
        </div>
    </div>)
}

export default MakePost;
