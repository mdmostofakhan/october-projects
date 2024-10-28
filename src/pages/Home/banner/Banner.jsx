import img from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from '../../../assets/images/banner/5.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative  w-full">
        <img className="w-full rounded-xl" src={img} alt="" />

        <div className="absolute  rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] h-full top-o left-0 flex items-center ">
          <div className="text-white space-y-7 pl-14 w-1/2 ">
            <h1 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-outline mr-5 btn-secondary w-32">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary w-32">
                Primary
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 gap-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle  btn-outline  btn-warning  text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-outline bg-yellow-500"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2  rounded-xl" className="carousel-item relative w-full">
        <img className="w-full  rounded-xl" src={img2} alt="" />

        <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] h-full top-o left-0 flex items-center ">
          <div className="text-white space-y-7 pl-14 w-1/2 ">
            <h1 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-outline mr-5 btn-secondary w-32">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary w-32">
                Primary
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img className="w-full  rounded-xl" src={img3} alt="" />

        <div className="absolute  rounded-xl  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] h-full top-o left-0 flex items-center ">
          <div className="text-white space-y-7 pl-14 w-1/2 ">
            <h1 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-outline mr-5 btn-secondary w-32">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary w-32">
                Primary
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img className="w-full  rounded-xl" src={img4} alt="" />

        <div className="absolute  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] h-full top-o left-0 flex items-center ">
          <div className="text-white space-y-7 pl-14 w-1/2 ">
            <h1 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-outline mr-5 btn-secondary w-32">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary w-32">
                Primary
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
