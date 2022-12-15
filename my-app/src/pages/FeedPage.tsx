import Post from "../components/Post";

function FeedPage(){
    return (
        <div className="flex flex-col items-center border-double border-4 border-red-500">
            <Post id="ANYTHING GOES"
                name="Elias Gonzalez" 
                icon="IGNORED" 
                date="04 / 02 / 2022" 
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."/>
        </div>
    );
}


export default FeedPage;