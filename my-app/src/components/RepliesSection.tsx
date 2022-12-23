// import { useState } from "react";
import RepliesContent from "../models/RepliesContent";
import MakeComment from "./MakeComment";

function RepliesSection(props: any){
    // const [replies, setReplies] = useState<[]>([]);

    return(
        <div className="bg-slate-200">
            <div> 
                { /* Previous Comments */ } 
            </div>

            
            <div>
                { /* Make New Comment */ } 
                < MakeComment parentId={props.parentId} />
            </div>        
        </div>
    )
}


export default RepliesSection;