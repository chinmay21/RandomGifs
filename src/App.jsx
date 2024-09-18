import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className=" w-full overflow-x-hidden h-screen flex flex-col background">
      <h1 className="bg-white rounded-2xl text-center py-4 mx-[40px] mt-[40px] text-3xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
