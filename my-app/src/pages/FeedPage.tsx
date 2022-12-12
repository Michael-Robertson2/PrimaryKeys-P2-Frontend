import Post from "../components/Post";

function FeedPage(){
    return (
        <div className="flex flex-col items-center border-double border-4 border-red-500">
        <Post/>
        </div>
    );
}


export default FeedPage;