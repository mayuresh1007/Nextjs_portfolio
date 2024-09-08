import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <>
      <div className="h-auto md:h-[35rem]  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-1">
        <Spotlight
          className="-top-80 left-0 md:left-60 md:-top-10"
          fill="violet"
        />
        <div className="p-4 relative z-10 w-full text-center sm:mt-10">
          <h1 className="text-5xl mt-8">Master the art of coding</h1>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque
            tempore ut molestiae vitae esse enim vel tenetur voluptate ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quod soluta quos obcaecati delectus quae mollitia architecto alias
            numquam facere?
          </p>
          <div className="mt-6">
            {/* <Link href={"#"}>Explore cources</Link> */}
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                 <Link href={"/projects"}>Projects</Link>
              
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
