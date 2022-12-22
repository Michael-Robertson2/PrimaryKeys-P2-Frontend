
import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import MakePost from "../components/MakePost";
import SylvesterAPI from "../utils/ApiConfig";
import { PrincipalContext, SetPrincipalContext } from "../context/PrincipalProvider";
import PostResponse from "../models/PostResponse";
import Feed from "../components/Feed";

function FeedPage() {
    const [posts, setPosts] = useState<PostResponse[] | null>([]);
    const [error, setError] = useState<string>("");
    const principal = useContext(PrincipalContext);

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        let intervalId = setInterval(getPosts , 5000);
        return () => { clearInterval(intervalId) }
    }, []);


    async function getPosts() {
        await SylvesterAPI.get(`/posts/user?id=${principal?.id}`)
        .then((response) => {
            setError("");
            let resdata = response.data;
            let newPosts: PostResponse[] = new Array();
            for (let i = 0; i < resdata.length; i++) {
                let post = resdata[i];
                let newPost: PostResponse = new PostResponse(post.content, post.imgUrl, post.postId, post.posted);
                newPosts.push(newPost);
            }
            setPosts(newPosts);
            console.log(posts);
        }).catch( (error) => {
            setError(error.response.data.message);
        }) 
    }

    return (
        <div>
            {/* Creating Post */}
            <MakePost functionOnSubmit={getPosts}/>

            { /* Feed */ }
            <Feed posts={posts} />
        </div>
    );
}


export default FeedPage;