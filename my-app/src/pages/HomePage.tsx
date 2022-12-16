import { useContext } from "react";
import Post from "../components/Post";
import PostPreview from "../components/PostPreview";
import PostContent from "../models/PostContent";

function HomePage() {

    const posts = [
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "03/01/22",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "02/02/22",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "01/03/22",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
    ]

    var i = 0;


    function loopTest() {
        const cards = []
        for (let i = 0; i < posts.length; ++i) {
            var unique_key = "uniqueId" + i.toString();
            cards.push(
                <div className={ "mt-6 ml-10 mr-6 mb-6 "} key={unique_key}>
                    <Post { ...posts[i] } />
                </div>)
        }
        
        return cards;
    }

    return (
        <div className="h-100 w-1100">
            <ol>
                {/* { posts.map( (post) => ( <div className="mt-6 ml-6 mr-6 mb-6"><Post { ...post } /></div> ) ) } */}

                { loopTest() }
            </ol>
        </div>
    )
}


export default HomePage;