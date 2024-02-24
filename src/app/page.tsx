import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      HomePage
      <div className="absolute inset-0 z-[-1]">
        <Image src="/home.jpg" alt="car factory" fill={true} />
      </div>
    </main>
  )
}
