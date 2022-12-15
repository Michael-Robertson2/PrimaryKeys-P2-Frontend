import { useContext } from "react";
import Post from "../components/Post";
import PostPreview from "../components/PostPreview";
import { PrincipalContext } from "../context/PrincipalProvider";

function HomePage() {
    const principal = useContext(PrincipalContext);

    console.log(principal)
    const posts = [
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "04 / 02 / 2022",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "04 / 02 / 2022",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
        {
            id: "ANYTHING GOES",
            name: "Elias Gonzalez",
            icon: "IGNORED",
            date: "04 / 02 / 2022",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."

        },
    ]


    return (
        <div>
            <ol>
                { posts.map( (post) => ( <Post { ...post } /> ) ) }
            </ol>
        </div>
    );
}


export default HomePage;