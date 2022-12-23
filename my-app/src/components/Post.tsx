import { useContext, useState } from "react";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

import PostContent from "../models/PostContent";
import RepliesSection from "./RepliesSection";
import { PrincipalContext } from "../context/PrincipalProvider";
import SylvesterAPI from "../utils/ApiConfig";

function Post(post: PostContent) {
    const [liked, setLiked] = useState<boolean>(false);
    const [showReplies, setShowReplies] = useState<boolean>(false);

    const principal = useContext(PrincipalContext);

    function handleShowReplyToggle(){
        setShowReplies(!showReplies);
    }

    for (var like of post.likes) {
        console.log(like);
    }

    async function toggleLike() {
        console.log(principal?.token);
        console.log(post.postId);
        console.log(principal?.id);
        if (liked) {
            await SylvesterAPI.delete("/likes?id=" + post.postId, {
                headers: {
                    authorization: principal?.token
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            setLiked(false);
            console.log("I unlike");
        } else {
            await SylvesterAPI.post("/likes?id=" + post.postId, {}, {
                headers: {
                    authorization: principal?.token
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            setLiked(true);
            console.log("I like");
        }
    }

    return (

        <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
            {/* Content */}
            <div className="flex justify-between mb-4">

                {/* heading */}
                <div>
                    <UserIcon className="inline-block h-5 pr-2"/>
                    <a href="#!" className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { post.displayName + " @" + post.username } </a>
                </div>

                <a href="#!" className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { post.posted } </a>
            </div>

            {/* body */}
            <div>
                <p className="text-gray-700 mb-6 break-all"> {post.content} </p>
                    <img src = { post.imgUrl } alt = ""/>
            </div>

            <div>
                {/* Interaction */}
                <PencilSquareIcon onClick={handleShowReplyToggle} className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out"/>
                <HandThumbUpIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick = {(e) => (toggleLike())}/>            
            </div>

            {/* Parent ID in RepliesSection below requires the postID from current post. */}
            {showReplies ? <RepliesSection parentId= { post.postId } /> : <></> }
        </div>

    )
}


export default Post;