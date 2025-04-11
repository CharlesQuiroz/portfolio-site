import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/city-of-stars-bg.jpg')", backgroundPositionY: "bottom" }}>
        <div className="grid grid-col-2">
          <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className='text-[50px] text-white font-semibold'>
              Where Ideas Come to Life
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                {" "}
                Web Development
              </span>
            </h1>
            <p className='text-gray-200 hidden md:block'>
              Hi there! I'm excited to share my work with you. I'm a developer and graphics enthusiast, passionate about building engaging web experiences and creating visually appealing designs. I enjoy tackling both front-end and back-end challenges, and I'm always eager to learn and grow.
            </p>
            <div className='flex-col md:flex-row hidden md:flex gap-5'>
              <Link href='/my-skills' className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
                Learn More
              </Link>
              <Link href='/my-projects' className='rounded-[20px] group relative bg-transparent hover:bg-blue-400 px-5  border border-white py-3 text-lg text-white max-w-[200px]'>
                <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                My Projects
              </Link>
              <Link href='/contact-me' className='rounded-[20px] group relative bg-transparent hover:bg-blue-400 px-5  border border-white py-3 text-lg text-white max-w-[200px]'>
                <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
            <Link href='/my-skills' className='rounded-[20px] group relative bg-blue-500 px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
              Learn More
            </Link>
            <Link href='/my-projects' className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
              My Projects
            </Link>
            <Link href='/contact-me' className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      {/* 
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/Man.svg" 
        alt="#" height={300} 
        width={300} 
        unoptimized className="absolute top-[-100]" />
        <Image src="/" 
        alt="#" 
        height={480} 
        width={480} />
      </div>*/}

      <div className="absolute bottom-[-300px] z-[5] w-full h-full bg-cover bg-center">
        <Image src="/City.png"
          alt="City"
          height={3000}
          width={3000}
          className="w-full h-full" />
      </div>

      <Image src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        unoptimized className="absolute top-10 left-0 z-[10]" />
    </main >
  );
}
