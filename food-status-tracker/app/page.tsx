export default function Home() {

  return (
    <>
      <div>
        <h1>Creating a learning environment for using next.js, typescript, and tailwind.CSS</h1>
        <h1>Time to experiment as much as possible</h1>
        <button className="animate-bounce bg-black text-white">Bouncing Button</button>
        <button className="animate-ping bg-black text-white">Pinging Button</button>
        <button className="animate-pulse bg-black text-white">Pulsing Button</button>
        <button className="transition duration-300 delay-200 hover:delay-300 bg-black text-white">Bouncing Button</button>
      </div>
      <div className="flex min-h-screen flex-col items-center p-24">
          <h1 className="font-serif text-5xl font-black text-blue-500">Albert's Food Tracker</h1>
          <div className="flex gap-12 justify-around relative bg-blue-400 w-1/2 rounded-full p-6 overflow-hidden">
            <p className="animate-spin duration-200 text-1xl font-medium text-white">PREP</p>
            <div className="absolute left-1/4 -rotate-45 transform -translate-x-1/2 w-full h-1 bg-black"></div>
            <p className="text-1xl font-medium text-white">BAKE</p>
            <div className="absolute left-1/2 -rotate-45 transform -translate-x-1/2 w-full h-1 bg-black"></div>
            <p className="text-1xl font-medium text-white">QUALITY CHECK</p>
            <div className="absolute left-3/4 -rotate-45 transform -translate-x-1/2 w-full h-1 bg-black"></div>
            <p className="text-1xl font-medium text-white">READY</p>
          </div>
      </div>
    </>
  );
}
