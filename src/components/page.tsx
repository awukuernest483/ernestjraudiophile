import Header from "./header";

export default function Home() {
  return (
    <main className="">
      <section className="bg-almostblack px-28 bg-[url('/images/home/mobile/image-header.jpg')] md:bg-[url('/images/home/tablet/image-header.jpg')] lg:bg-[url('/images/image-hero.jpg')] bg-cover h-screen">
        <Header />
        <div className="flex flex-1 flex-col text-white justify-center h-[85%]">
          <div className="">
            <h1 className="tracking-[10px] text-white/50">NEW PRODUCT</h1>
            <p className="text-[56pt] font-bold">XX99 MARK II</p>
            <p className="text-[56pt] font-bold">HEADPHONES</p>
            <p className="w-[349px] text-white/50">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-14 bg-orange hover:bg-lightorange py-4 px-6">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
      <section className="mt-72 flex flex-auto justify-between gap-6 px-28">
        <button className="flex items-end justify-center relative w-1/3 group bg-gray-100 rounded-lg pb-4 mx-auto">
          <img
            src="/images/shared/desktop/image-category-thumbnail-headphones.png"
            alt="head phone"
            className="absolute w-80 -top-24"
          />
          <div className="w-full flex flex-col gap-8 pt-12 justify-end items-center bg-gray-100 rounded h-[320px]">
            <p className="tracking-[1.29px] text-[18pt] font-bold">
              HEADPHONES
            </p>
            <p className="w-fit flex gap-2 items-center group-hover:text-orange text-gray-950/50 font-bold text-2xl mb-8">
              SHOP{" "}
              <span className="text-2xl text-orange">
                <img
                  src="/images/shared/desktop/icon-arrow-right.svg"
                  alt="arrow right"
                />
              </span>
            </p>
          </div>
        </button>
        <button className="flex items-end justify-center relative w-1/3 group bg-gray-100 rounded-lg pb-4 mx-auto">
          <img
            src="/images/shared/desktop/image-category-thumbnail-speakers.png"
            alt="head phone"
            className="absolute w-80 -top-24"
          />
          <div className="w-full flex flex-col gap-8 pt-12 justify-end items-center rounded h-[320px]">
            <p className="tracking-[1.29px] text-[18pt] font-bold">SPEAKERS</p>
            <p className="w-fit flex gap-2 items-center group-hover:text-orange text-gray-950/50 font-bold text-2xl mb-8">
              SHOP{" "}
              <span className="text-2xl text-orange">
                <img
                  src="/images/shared/desktop/icon-arrow-right.svg"
                  alt="arrow right"
                />
              </span>
            </p>
          </div>
        </button>
        <button className="flex items-end justify-center relative w-1/3 group bg-gray-100 rounded-lg pb-4 mx-auto">
          <img
            src="/images/shared/desktop/image-category-thumbnail-earphones.png"
            alt="head phone"
            className="absolute w-80 -top-24"
          />
          <div className="w-full flex flex-col gap-8 pt-12 justify-end items-center rounded h-[320px]">
            <p className="tracking-[1.29px] text-[18pt] font-bold">EARPHONES</p>
            <p className="w-fit flex gap-2 items-center group-hover:text-orange text-gray-950/50 font-bold text-2xl mb-8">
              SHOP{" "}
              <span className="text-2xl text-orange">
                <img
                  src="/images/shared/desktop/icon-arrow-right.svg"
                  alt="arrow right"
                />
              </span>
            </p>
          </div>
        </button>
      </section>
      
      <section className="flex items-center justify-between mx-28 text-white bg-orange-400 mt-40 rounded-lg h-[560px] bg-[url('/images/pattern-circles.svg')] bg-[left_10%] bg-no-repeat">
        <div className="self-end ml-32 overflow-hidden -mt-16">
          <img
            src="/images/home/desktop/image-speaker-zx9.png"
            alt="zx9 speaker"
            className="w-1/2"
          />
        </div>
        <div className="mr-32">
          <p className="text-[56pt] font-bold">zx9</p>
          <p className="text-[56pt] font-bold">SPEAKER</p>
          <p className="w-[349px] text-almostwhite">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-14 bg-fullblack py-4 px-6 text-white hover:bg-[#4C4C4C]">
            SEE PRODUCT
          </button>
        </div>
      </section>
      <section className="mt-24 rounded-lg px-28">
        <div className="bg-[url('/images/image-speaker-zx7.jpg')] bg-cover bg-no-repeat w-full min-h-[320px] rounded-lg pl-32 flex flex-col justify-center">
          <p className="text-[28pt] font-bold">zx7 SPEAKER</p>
          <button className="mt-14 border-2 border-almostblack text-black py-4 px-6 hover:bg-almostblack hover:text-white w-fit">
            SEE PRODUCT
          </button>
        </div>
        <div className="flex flex-auto justify-between mt-24 gap-12">
          <div className="w-1/2">
            <img
              src="/images/home/desktop/image-earphones-yx1.jpg"
              alt="earphone"
              className="rounded-lg w-full"
            />
          </div>
          <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center w-1/2">
            <p className="text-[28pt] font-bold">YX1 EARPHONES</p>
            <button className="mt-14 border-2 border-almostblack text-black py-4 px-6 hover:bg-almostblack hover:text-white w-fit">
              SEE PRODUCT
            </button>
          </div>
        </div>
        <div className="flex flex-auto justify-between mt-24 gap-12">
          <div className="flex flex-col justify-center w-1/2 gap-8">
            <h2 className="text-[40pt] font-bold">
              BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO
              GEAR
            </h2>
            <p className="w-[445px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="rounded-lg flex flex-col items-center justify-center w-1/2">
            <img
              src="/images/shared/desktop/image-best-gear.jpg"
              alt="image gear"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>
      <section className="mt-40 bg-gray-950 text-white px-28">
        <div className="flex justify-between pb-8 w-full">
          <a className="font-bold text-xl">
            <img
              src="/images/shared/desktop/logo.svg"
              alt="logo"
              className="border-t-4 border-orange pt-12"
            />
          </a>
          <div className="flex gap-6 pt-12 font-semibold">
            <a className="hover:text-orange">HOME</a>
            <a className="hover:text-orange">HEADPHONES</a>
            <a className="hover:text-orange">SPEAKERS</a>
            <a className="hover:text-orange">EARPHONES</a>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <p className="w-[540px] text-white/50 font-semibold">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&lsquo;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&lsquo;re open 7 days a week.
          </p>
          <div className="flex self-end gap-4">
            <img
              src="/images/shared/desktop/icon-facebook.svg"
              alt="facebook"
              className=""
            />
            <img src="/images/shared/desktop/icon-twitter.svg" alt="twitter" />
            <img
              src="/images/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
        <p className="mt-8 pb-8 text-white/50 font-semibold">
          Copyright 2021. All Rights Reserved
        </p>
      </section>
    </main>
  );
}
