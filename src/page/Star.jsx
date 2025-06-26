import React from 'react';

export default function Giveaway() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
      <div className="mb-4 flex flex-col items-center justify-center">
        <img
          src="star.png"
          alt="Giveaway"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover animate-sway"
        />

        <div className='flex items-center justify-center gap-2 bg-[#dbdbdb5a] px-3 py-[2px] rounded-md '>
            <i
          data-visualcompletion="css-img"
          className="x15mokao x1ga7v0g x16uus16 xbiv7yw mt-2"
          style={{
            backgroundImage:
              "url('https://static.xx.fbcdn.net/rsrc.php/v4/yV/r/KJgM5Qe03_I.png?_nc_eui2=AeEVwRTpwZ0HVvOYbwh7Ga7PRiJQQX88ET9GIlBBfzwRP7R4lhQehv-pFgEJlfxhoW1YROFyYPcB8qJo1CxjlZie')",
            backgroundPosition: "0px -42px",
            backgroundSize: "auto",
            width: "16px",
            height: "16px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            marginTop: "1px",
          }}
        />
        <span className="text-sm font-bold text-gray-600">100 sent</span>
        </div>

        
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-[#1877f2] pb-5">100 Stars Giveaway</h1>
      <p className="text-base sm:text-lg text-gray-600 mt-2">🎁 Win 100 Facebook Stars! join now. 🎁</p>
      <a
        href="/login"
        className="mt-5 px-8 py-3 rounded-lg text-base sm:text-lg font-bold text-white bg-[#1877f2] hover:bg-[#166fe5] transition"
      >
        Join Now
      </a>
      <div className="text-gray-500 text-xs sm:text-sm mt-10">Facebook © 2025</div>
    </div>
  );
}
