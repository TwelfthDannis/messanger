"use client"

import {useForm} from "react-hook-form";
import axios from "axios";
import useConversation from "@/app/hooks/useConversation";

const downPanel = () => {
    const {conversationId}=useConversation()

    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            message: ''
        }
    });

    const onSubmit = data => {
        document.getElementById("message").value=""
        axios.post('/api/messages', {
            ...data,
            conversationId: conversationId
        })
    }

    return (
        <form className="flex items-center px-2 py-2 bottom-0 bg-zinc-900 border-t border-zinc-800 "
              onSubmit={handleSubmit(onSubmit)}>
            <button type="button"
                    className="p-2 text-gray-500 rounded-lg cursor-pointer">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                </svg>
            </button>
            <textarea id="message" {...register('message')} rows={1} maxLength={200}
                      className="resize-none block mx-2 p-2.5 w-full text-sm text-gray-300 bg-zinc-800 rounded-xl focus-within:outline-0"
                      placeholder="Your message..."></textarea>
            <button type="submit"
                    className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-violet-600 hover:bg-zinc-800">
                <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path
                        d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
            </button>
        </form>)
}
export default downPanel