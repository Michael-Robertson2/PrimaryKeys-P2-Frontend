import React from "react";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

import PostContent from "../models/PostContent";

function Post(post: PostContent) {
    return (
            <div className="md:flex flex-start pt-8">
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100  ml-6 mr-6 mb-10">
                    <div className="flex justify-between mb-4">
                        <div>
                            <UserIcon className="inline-block h-5 pr-2"/>
                            <a href="#!" className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { post.name } </a>    
                        </div>

                        <a href="#!" className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { post.date } </a>
                    </div>
                    <p className="text-gray-700 mb-6"> {post.message} </p>
                    <PencilSquareIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                    <HandThumbUpIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" />
                </div>
            </div>
    )
}


export default Post;