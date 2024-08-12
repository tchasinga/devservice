import Image from "next/image";
import WordRotate from "./Animation/magicui/wordrotate";


const words = ["1", "2", "good", "mailing"]

export default function Home() {
  return (
    <div>
       <h1 className="text-2xl text-red-950">
        <WordRotate words={words} />
       </h1>
    </div>
  );
}
