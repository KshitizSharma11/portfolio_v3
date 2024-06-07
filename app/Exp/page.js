import React from 'react';

const Page = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-4xl'>Experience</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 justify-around'>
        <div className="flex flex-col items-center m-2 p-1 border-slate-400 border-2">
          <div className="h-64 w-64 relative">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzecABkjxE6EqQnm-UfbM-ZFUBasYekWa55A&s'
              className='absolute m-2 inset-0 w-full h-full object-cover rounded-3xl'
              alt="Experience Image"
            />
          </div>
          <h1 className='text-2xl mt-4'><strong>SDE</strong> at plaxonic </h1>
          <span className='flex text-lg font-serif space-x-8'>
            <p>Duration: 5 Months</p>
            <p>Location: Gurugram, India</p>
          </span>
          <p className='whitespace-pre-line break-all max-w-25'>
            Lorem ipsum dollar is a textasddkjwrekgkherw h wghtjghkth kjw hgthghtwhg  wthwrhghrgh hhr h grhg t h hsdadsahd hasasdhaskhd hasdhasdhaskd asdjsadhasdas dasdjsakhdaskdhas d
          </p>
        </div>

        <div className="flex flex-col items-center m-2 p-1 border-slate-400 border-2">
          <div className="h-64 w-64 relative">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq_IKYD5DlyuCpsc1GbVB6EiRSxlMGsSubg&s'
              className='absolute inset-0 w-full h-full object-cover rounded-3xl'
              alt="Experience Image"
            />
          </div>
          <h1 className='text-2xl'><strong>SDET</strong> at Greyorange Robotics </h1>
          <span className='flex text-lg font-serif space-x-8'>
            <p>Duration: 5 Months</p>
            <p>Location: Gurugram, India</p>
          </span>
          <p>Developed customer friendly solutions</p>
        </div>

        <div className="flex flex-col items-center m-2 p-1 border-slate-400 border-2">
          <div className="h-64 w-64 relative">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUOulMB2psRLzyqXH2_C7BpuqYSKHUNhJ6w&s'
              className='absolute inset-0 w-full h-full object-cover rounded-3xl'
              alt="Experience Image"
            />
          </div>
          <h1 className='text-2xl'><strong>SDE</strong> at plaxonic </h1>
          <p>Developed customer friendly solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
