'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [message, setMessage] = useState(' Full-Stack');
    const arr = [' Cross-Platform', 'n Android'];

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setMessage(arr[index]);
            index = (index + 1) % arr.length;
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
            <div>
            <div className='flex-col flex md:flex-row m-8 mt-20  justify-around '>
                <div className='flex-col space-y-4'>
                    <h1 className='text-4xl font-bold'>Hello Mate 👋, Kshitiz Here!</h1>
                    <h1 b className='text-3xl rounded-r-xl p-2 font-semibold bg-slate-400'>A{message} Developer!</h1>
                    <p className='font-sans space-y-2 text-xl'>
                        Hi again, I am Kshitiz <br />
                        A software developer firmly believing in 'Stoicism'.<br />
                        I am really passionate when it comes to building stuff.
                        <br />
                        Over the years, I have worked on various tech stacks<br />
                        Wanna know more about me?<br />
                        Keep Scrolling!
                    </p>
                </div>
                <div >
                    <img 
                        src='https://k-blogs.vercel.app/static/media/Hero.04760aa8361fcc99faf5.png'
                        width={400}
                        height={350} 
                        className='rounded-3xl mt-5 md:mt-0'
                    />
                </div>
            </div>
            </div>
    
    );
};

export default Hero;
