import Image from "next/image";
import React from "react";

const Reklama = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://uncure-responsiv.netlify.app/images/orqa-fon.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='container   p-5  '>
        <h2 className='text-3xl mb-4 mt-5 text-center text-cyan-600 '>
          наши продукты
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='grid gap-2 '>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/miniS.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/sumkaca1.jpg'
                alt=''
              />
            </div>
            <div className=''>
              <Image
                width={400}
                height={350}
                className='h-full w-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90  '
                src='/img/ofisDua.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl  drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/duad.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/kuller.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/sumka.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/stakan2.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/moshinKatasi.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/chashka.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/soat.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/vizitka.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/labo.jpg'
                alt=''
              />
            </div>{" "}
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/stakan1.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reklama;
