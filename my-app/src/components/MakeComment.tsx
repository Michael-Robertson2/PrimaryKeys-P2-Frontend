import { useContext, useState } from 'react';
import SylvesterAPI from '../utils/ApiConfig';
import TenorSearch from './TenorSearch';
import { PrincipalContext } from '../context/PrincipalProvider';

function MakeComment(props: any) {
    const [reply, setReply] = useState<string>("");
    const [tenorUrl, setTenorUrl] = useState<string>("");
    const principal = useContext(PrincipalContext); 

    //request comments from parent post
    async function buttonClick(){
        //send request with {property.parentId} to replies endpoint
        await SylvesterAPI.get("/replies/post?id=f6944fd0-5054-457c-8d58-1602dcadc8c0",{
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }

    async function submit() {
        console.log(reply);
        console.log(props.parentId);

        await SylvesterAPI.post("/replies", {
            reply: reply,
            postId: props.parentId
        }, {
            headers: {
                authorization: principal?.token
            }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <input className="w-full" placeholder="I tawt I taw a puddy tat!" onChange={(e) => setReply(e.target.value)}></input>
            <TenorSearch passData={setTenorUrl}/>
            <button onClick={ submit }>Submit</button>
        </div>
    )
}

export default MakeComment;