import RepliesContent from "../models/RepliesContent";
import SylvesterAPI from "../pages/ApiConfig";


function RepliesSection(property: RepliesContent){
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

    return(
        <div className="bg-slate-200">
            <button className="bg-slate-800 flex items-center rounded-md text-white p-1" onClick={buttonClick}>button</button>
        </div>
    )
}


export default RepliesSection;