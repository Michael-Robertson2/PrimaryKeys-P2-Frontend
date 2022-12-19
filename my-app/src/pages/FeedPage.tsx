
import Post from "../components/Post";
import MakePost from "../components/MakePost";

function FeedPage() {
    return (
        <div>
            {/* Creating Post */}
            <MakePost />

            { /* Feed */ }
            <div className="flex flex-col items-center border-double border-4 border-red-500 ">
                <div className="mt-6 ml-6 mr-6 mb-6">
                    <Post id="ANYTHING GOES" 
                            name="Elias Gonzalez" 
                            icon="IGNORED" 
                            date="04 / 02 / 2022" 
                            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."/>
                </div>
            </div>
        </div>
    );
}


export default FeedPage;