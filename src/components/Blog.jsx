
import React from 'react';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export default function Blog() {
    const blogdata = [
        {
            heading: 'The Rise of AI: How Artificial Intelligence is Transforming',
            paragraph: 'Explore how AI is revolutionizing various sectors, from healthcare and finance to manufacturing and retail. Learn about real-world applications, such as predictive analytics, automation, and smart',
            stars: [<RiStarSFill key={1} />, <RiStarSFill key={2} />, <RiStarSFill key={3} />, <RiStarSFill key={4} />, <RiStarSLine key={5} />]

        },
        {
            heading: "Predictive Analytics with IoT: Harnessing the Power of Data",
            paragraph: "IoT devices are not just for collecting data—they are transforming it into powerful predictive insights. This blog will explore how businesses are using predictive analytics on IoT data",
            stars: [<RiStarSFill key={1} />, <RiStarSFill key={2} />, <RiStarSFill key={3} />, <RiStarSFill key={4} />, <RiStarSLine key={5} />]
        },
        {
            heading: "Machine Learning: The Future of Data-Driven Decision Making",
            paragraph: "Dive into the world of machine learning and discover how organizations are using it to make data-driven decisions. This blog will cover supervised, unsupervised, and reinforcement",
             stars: [<RiStarSFill key={1} />, <RiStarSFill key={2} />, <RiStarSFill key={3} />, <RiStarSFill key={4} />, <RiStarSLine key={5} />]
        },
        {
            heading: "Data Science in Action: Unlocking Insights from Big Data",
            paragraph: "Description: Data science has become the backbone of modern analytics, enabling businesses to extract valuable insights from vast datasets. This blog explores the key methodologies,",
             stars: [<RiStarSFill key={1} />, <RiStarSFill key={2} />, <RiStarSFill key={3} />, <RiStarSFill key={4} />, <RiStarSLine key={5} />]
        }
    ];

    return (
        <div className="bg-[#010314] text-[#fff]">
            <div className='max-w-[1200px] m-auto w-6/6  px-16 py-10'>
                <h1 className='text-2xl mb-7 font-semibold'>Our Latest Blogs</h1>
                <div className='grid sm:grid-cols-2 gap-4'>
                    {blogdata.map((v, i) => (
                        <div className='border rounded-lg border-[#181A2B] text-white text-xs p-3' key={i}>
                            <div className='flex justify-between gap-10 w-full'>
                                <div className='w-5/6'>
                                    <img
                                        src='/images/a.jpeg'
                                        alt="Blog Thumbnail"
                                        className='h-20 w-auto rounded-lg'
                                    />
                                </div>
                                <div>
                                    <h3 className='text-base w-full font-semibold'>{v.heading}</h3>
                                    <div className='flex flex-row space-x-2  text-[#181A2B] pt-1'>
                                    {v.stars.map((star, starIndex) => (
                                            React.cloneElement(star, { key: `${i}-${starIndex}` })
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 text-[#181A2B]'>{v.paragraph}</div>
                            <div className='flex flex-row justify-between gap-10 w-full mt-3  text-[#181A2B] '>
                                <div className='cursor-pointer hover:text-white'>read more</div>
                                <div>by amara</div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
