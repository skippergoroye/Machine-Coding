import { useState } from "react";
import "./App.css";




const data = [
  {
    question: "Question 1",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
  },
  {
    question: "Question 2",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
  },
  {
    question: "Question 3",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
  }
]

function App() {
  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (index: number) => {
    if(selected === index) {  // it means the item is already open
      setSelected(null)  // so it sets selected to null to close it.
    } else {
      setSelected(index); // selected (open) .....this will open itz
    }

  }

  

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item bg-[#f0ebe1] p-2 mb-6">
            <div className="title text-[#85662b] flex items-center justify-between cursor-pointer" onClick={() => toggle(index )}>
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={`content text-[#8b7f75] transition-all duration-900 border-t border-red-500 ${selected === index ? "block" : "hidden"}`}>{item.answer}</div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
