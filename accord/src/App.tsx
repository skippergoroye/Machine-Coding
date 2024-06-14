import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const frequentlyAskQuestions = [
  {
    title: "what is lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  },
  {
    title: "what is lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  },
  {
    title: "what is lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  },
];

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const togglerFunction = (index: number) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div className="w-full h-screen py-20 flex justify-center">
      <div className="w-[800px] h-max border rounded-lg overflow-hidden">
        {frequentlyAskQuestions.map((item, index) => (
          <div key={index} className="border-b last:border-b-0 ">
            <div
              className="px-5 py-4 flex items-center justify-between bg-gray-100"
              onClick={() => togglerFunction(index)}
            >
              <p className="flex-1">{item.title}</p>
              <span>
                {activeId ===index ? (<ChevronUp />) : (<ChevronDown />)}
              </span>
            </div>
            {activeId === index && (
              <div className="px-5 py-4 flex items-center justify-between">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
