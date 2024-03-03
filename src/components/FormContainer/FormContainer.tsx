import axios from "axios";
import { useState } from "react";
import { serverUrl } from "../../helpers/constants";

interface IFormContainerProps{
  updateReloadState:()=>void
}

export default function FormContainer({updateReloadState}:IFormContainerProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(serverUrl, { url });
      setUrl("");
      updateReloadState();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl py-20 px-5 lg:px-20 md:px-10 sm:px-5 backdrop-brightness-75">
          <h2 className="text-white text-4xl text-center pb-4">EASY URLS</h2>
          <p className="text-white text-center text-xl pb-2 font-extralight">
            Paste your link to shorten it
          </p>
          <p className="text-white text-center text-small pb-5 font-thin">
            Simplify your links with our easy-to-use URL shortener.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  easyurls/
                </div>
                <input
                  className="block w-full p-4 ps-32 sm:ps-24 text-sm text-gray-900 border border-gray-600 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-00"
                  type="text"
                  placeholder="Add your link here"
                  required
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-slate-900 rounded-lg border border-white focus:ring-4 focus:outline-none focus:ring-red-500"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
