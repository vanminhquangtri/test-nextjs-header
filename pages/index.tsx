export default function Home() {
  return (
    <div>
      <header className="fixed w-full left-0 top-0 h-[80px] z-[10] flex flex-col justify-center duration-800 bg-red-800 text-white font-bold text-[18px] header">
        meta
      </header>

      <div>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ea dolor a nam fugiat neque sunt, esse, deleniti et minima rem
            voluptas distinctio ducimus quia magnam modi reiciendis animi porro.
          </div>
        ))}
      </div>

      <div>
        <input className="bg-black w-full auto-expand-textarea resize-none chat-input flex-1 font-[400] text-[16px] p-6 outline-none text-white caret-[#FF6500] flex items-center"></input>
      </div>
    </div>
  );
}
