import { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    document.body.classList.add("overflow-hidden");
  };
  const handleBlur = () => {
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <div className="h-screen overflow-auto">
      <header className="fixed w-full left-0 top-0 h-[80px] z-[10] flex flex-col justify-center duration-800 bg-red-800 text-white font-bold text-[18px] header">
        handleFocus
      </header>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
        mollitia iusto neque similique hic magnam? Vitae nobis magnam
        consequuntur, ratione tempora enim quo minus distinctio, nostrum minima,
        aut perspiciatis.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est ab
        suscipit. Et, dignissimos. Eos tenetur magnam vel quos minima tempore
        asperiores dolorum possimus ratione fuga! Et in earum illo?
      </div>

      <div>
        <input className="bg-black w-full auto-expand-textarea resize-none chat-input flex-1 font-[400] text-[16px] p-6 outline-none text-white caret-[#FF6500] flex items-center"></input>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
        mollitia iusto neque similique hic magnam? Vitae nobis magnam
        consequuntur, ratione tempora enim quo minus distinctio, nostrum minima,
        aut perspiciatis.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est ab
        suscipit. Et, dignissimos. Eos tenetur magnam vel quos minima tempore
        asperiores dolorum possimus ratione fuga! Et in earum illo?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
        mollitia iusto neque similique hic magnam? Vitae nobis magnam
        consequuntur, ratione tempora enim quo minus distinctio, nostrum minima,
        aut perspiciatis.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est ab
        suscipit. Et, dignissimos. Eos tenetur magnam vel quos minima tempore
        asperiores dolorum possimus ratione fuga! Et in earum illo?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
        mollitia iusto neque similique hic magnam? Vitae nobis magnam
        consequuntur, ratione tempora enim quo minus distinctio, nostrum minima,
        aut perspiciatis.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est ab
        suscipit. Et, dignissimos. Eos tenetur magnam vel quos minima tempore
        asperiores dolorum possimus ratione fuga! Et in earum illo?
      </div>
      <div>
        <input
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={inputRef}
          className="bg-black w-full auto-expand-textarea resize-none chat-input flex-1 font-[400] text-[16px] p-6 outline-none text-white caret-[#FF6500] flex items-center"
        ></input>
      </div>
      <div>
        {Array.from({ length: 40 }, (_, i) => (
          <div key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ea dolor a nam fugiat neque sunt, esse, deleniti et minima rem
            voluptas distinctio ducimus quia magnam modi reiciendis animi porro.
          </div>
        ))}
      </div>
    </div>
  );
}
