import React from 'react'

const Messages = () => {
    return (
        <div class="flex h-screen bg-gray-100">
           
            <div class="w-1/4 bg-gray-800 text-white p-4">
                <h1 class="text-2xl font-semibold mb-4">Contacts</h1>
                
                <ul>
                    <li class="py-2 hover:bg-gray-700 cursor-pointer">User 1</li>
                    <li class="py-2 hover:bg-gray-700 cursor-pointer">User 2</li>
                   
                </ul>
            </div>

           
            <div class="flex-1 p-4">
                <div class="flex justify-between items-center bg-white p-4 shadow-md mb-4">
                    <h2 class="text-xl font-semibold">Chat with User</h2>
                    <button class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Send</button>
                </div>

                
                <div class="overflow-y-auto h-3/4 bg-white p-4 shadow-md">
                    <div class="flex flex-col space-y-2">
                        <div class="self-start p-2 rounded bg-gray-200 max-w-md">Hello there!</div>
                        <div class="self-end p-2 rounded bg-blue-500 text-white max-w-md">Hi! How can I help you?</div>
                        
                    </div>
                </div>

               
                <div class="mt-4 flex">
                    <input type="text" class="flex-1 p-2 border rounded-l focus:outline-none" placeholder="Type your message..."/>
                        <button class="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none">Send</button>
                </div>
            </div>
        </div>

    )
}

export default Messages