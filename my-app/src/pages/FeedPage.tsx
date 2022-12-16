import { GifIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

import Post from "../components/Post";

function FeedPage() {
    return (
        <div>
            {/* Creating Post */}
            <div className="flex flex-col items-center border-double border-4 border-red-500">
                <div className="md:flex flex-start pt-8 w-full">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-200  ml-6 mr-6 w-full">
                        <input className="text-gray-700 mb-6 h-100 w-full" placeholder="Sufferin' succotash, spit it out!"></input>
                        <div className="border-double border-4 border-red-500 flex justify-end">
                            <GifIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                            <PencilSquareIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                        </div>
                    </div>
                </div>
            </div>

            { /* Feed */ }
            <div className="flex flex-col items-center border-double border-4 border-red-500">
                <Post id="ANYTHING GOES" 
                        name="Elias Gonzalez" 
                        icon="IGNORED" 
                        date="04 / 02 / 2022" 
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula."/>
            </div>
        </div>
    );
}


export default FeedPage;