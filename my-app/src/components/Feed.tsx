import Post from "./Post";


function Feed(props: any) {

    console.log(props.posts);

    function loop() {
        const cardData = props.posts;
        const cards = [];

        for (let i = 0; i < cardData.length; ++i) {
            var unique_key = "uniqueId" + i.toString();
            cards.push(
                <div className={ "mt-6 ml-10 mr-6 mb-6 "} key={unique_key}>
                    <Post { ...cardData[i] } />
                </div>)
        }
        
        return cards;
    }

    return (
        <div>
            { loop() }
        </div>
    )
}


export default Feed;