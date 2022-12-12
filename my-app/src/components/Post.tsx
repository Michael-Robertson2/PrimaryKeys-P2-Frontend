import React from "react";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

function Post() {
    return (
        <ol className="pt-8">
            {/* if u need to make a list of posts, create inside OL (ordered list), each post is an INDIVIDUAL li (list item) */}
            <li>
                <div className="md:flex flex-start">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100  ml-6 mr-6 mb-10">
                        <div className="flex justify-between mb-4">
                            <div>
                                <UserIcon className="inline-block h-5 pr-2"/>
                                <a href="#!" className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm">Elias Gonzalez</a>    
                            </div>

                            <a href="#!" className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm">04 / 02 / 2022</a>
                        </div>
                        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                        <PencilSquareIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                        <HandThumbUpIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                    </div>
                </div>
            </li>
        </ol>
    )
}


export default Post;