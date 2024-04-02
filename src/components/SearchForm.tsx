"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";

interface Props {
    inputQuery: (data: string) => void;
    inputQuestion: (data: string) => void;
}

const SearchForm: React.FC<Props> = (({ inputQuery, inputQuestion }) => {
    const [data, setData] = useState("")
    const [input, setInput] = useState("")

    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

    async function run(inputData: string) {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = inputData;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setData(text)
        inputQuery(data)
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputQuestion(input)
        run(input)
        setInput("")
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return (
        <form 
        className="md:w-[40rem]  border w-[20rem]  border-[#424242] flex justify-between p-3 rounded-2xl text-[#7d7d7d]" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={input}
            onChange={handleChange} 
            required
            min={3}
            placeholder="Message CodeHUNTS Bot..." 
            className="w-full bg-transparent text-[#fff] focus:outline-none placeholder:text-[#7d7d7d]" />
            <button className=""><TbSquareRoundedArrowUpFilled className="text-3xl text-[#383838] hover:text-[#fff]" /></button>
        </form>
    );
})

export default SearchForm;