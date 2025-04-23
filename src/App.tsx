import { useState } from "react";
import "./App.css";

import data from "./data.json";

function App() {
  console.log("data", data);

  const stockExchanges = data.map((item) => item.stockExchange);

  console.log("stockExchanges", stockExchanges);

  const initialMessages = [
    { sender: "bot", message: "Hello! Welcome to LSEG. I'm here to help you." },
    { sender: "bot", message: "Please select a stock exchange", data: "stock" },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const onSelectStock = (stock: string) => {
    console.log("code", stock);

    const newMessage = { sender: "user", message: stock };

    setMessages(() => [...messages, newMessage]);
  };

  return (
    <>
      <div className="mx-auto w-2xl overflow-hidden rounded-xl bg-white shadow-md min-h-[300px]">
        <div>
          <div className="p-3 bg-indigo-500">
            <div className="text-md font-semibold tracking-wide text-white">
              LSEG chatbot
            </div>
          </div>

          <div className="p-3 mt-1">
            <div className="text-sm font-normal text-black ">
              {messages.map((chat) =>
                chat.sender === "bot" ? (
                  <div className="mb-2 w-fit rounded-md border-2 border-blue-100">
                    <div className="px-3 py-2 rounded-md bg-blue-100">
                      {chat.message}
                    </div>

                    {chat.data ? (
                      <div className="">
                        <ul className="bg-white divide-y divide-blue-200">
                          {data.map((stock) => (
                            <li
                              className="text-center px-3 py-2 cursor-pointer"
                              onClick={() => {
                                onSelectStock(stock.stockExchange);
                              }}
                            >
                              {stock.stockExchange}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="mb-2 w-fit rounded-md border-2 border-gray-100">
                    <div className="px-3 py-2 rounded-md bg-gray-100">
                      {chat.message}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
