import React from "react";

const About = () => {
  return (
    <div className="container py-14 mx-auto">
      <h1 className="text-red-700 text-xl font-bold hover:text-yellow-800">
        VỀ CHÚNG TÔI
      </h1>
      <div className="px-30 py-10">
        <p>
          Ra mắt năm 2015, nền tảng thương mại được xây dựng nhằm cung cấp cho
          người sử dùng những trải nghiệm dễ dàng, an toàn và nhanh chóng khi
          mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh toán và vận hành
          vững mạnh.
        </p>
      </div>
      <h1 className="text-center text-red-600 py-8 text-xl font-bold hover:text-yellow-800">
        TÍNH CÁCH CỦA CHÚNG TÔI
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="p-4 cursor-pointer">
          <div className="overflow-hidden">
            <img
              src="images/129603451_3708182482536972_4348386550992760021_n.jpg"
              alt=""
              className="transition duration-500 ease-in-out hover:bg-white transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <h1 className="text-center text-red-600 py-3 text-sm font-bold hover:text-yellow-800">
            GẦN GŨI
          </h1>
          <p className="text-center">
            Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền tảng vững
            chắc cho một cuộc sống trung thực, bình dân và thành thật với bản
            thân.
          </p>
        </div>
        <div className="p-4 cursor-pointer">
          <div className="overflow-hidden">
            <img
              src="images/129603451_3708182482536972_4348386550992760021_n.jpg"
              alt=""
              className="transition duration-500 ease-in-out hover:bg-white transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <h1 className="text-center text-red-600 py-3 text-sm font-bold hover:text-yellow-800">
            THÂN THIÊN
          </h1>
          <p className="text-center">
            Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền tảng vững
            chắc cho một cuộc sống trung thực, bình dân và thành thật với bản
            thân.
          </p>
        </div>
        <div className="p-4 cursor-pointer">
          <div className="overflow-hidden">
            <img
              src="images/129603451_3708182482536972_4348386550992760021_n.jpg"
              alt=""
              className="transition duration-500 ease-in-out hover:bg-white transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <h1 className="text-center text-red-600 py-3 text-sm font-bold hover:text-yellow-800">
            NHIỆT HUYẾT
          </h1>
          <p className="text-center">
            Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền tảng vững
            chắc cho một cuộc sống trung thực, bình dân và thành thật với bản
            thân.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
