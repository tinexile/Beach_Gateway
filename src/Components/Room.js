import React from "react";

const Room = () => {
  return (
    <>
      <div className="max-w-[1440px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-4 gap-4 ">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2 ">
          <h3 className="text-2xl font-bold " >Fine Interior Rooms</h3>
          <p className="pt-4" >
            Thank you RBI and GoI for not including Bapu’s image on the newly
            introduce Digital
          </p>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-2 " >
          <img
          className="object-cover w-full h-full "
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8VHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
           className="object-cover w-full h-full row-span-2 "
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
           className="object-cover w-full h-full "
            src="https://media.istockphoto.com/id/1369144640/photo/woman-tourist-in-zakynthos-greece-admiring-the-navagio-beach.jpg?b=1&s=170667a&w=0&k=20&c=8Y1u2ileCQjUgyY1puWQPtgWDdJifOS6L0ZJNUhedgM="
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Room;
