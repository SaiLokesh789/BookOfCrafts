import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-full w-full justify-center items-center dark:bg-medium">
      <h1 className={`${styles.title} dark:text-orange-300`}>
        Welcome to the World of Minecraft
      </h1>
      <div className="flex w-full justify-between px-24">
        <div>
          <Image src="https://static.wikia.nocookie.net/fantendo/images/3/39/Alex_SSBL.png/revision/latest?cb=20180830191433" alt="" width={180} height={180} />
        </div>
        <div>
          <Image src="https://upload.wikimedia.org/wikipedia/en/e/e7/Steve_%28Minecraft%29.png" alt="" width={250} height={200} ></Image>
        </div>
      </div>
    </div>
  );
}