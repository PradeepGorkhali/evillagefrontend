"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';


const RightSideBar = () => {
    const [showAllSponsers,setShowAllSponsers]= useState(false)

    const sponsors = [
        {
          name: "गाई",
          description: "रााम्रो जातको गाईहरु किन्न हामीलाई सम्पर्क गर्नुहोस (+977-9841234567)",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTRLSq9SL7C7y9P1SU5nNaDOxdJW7F6S49w&s",
          website: "https://www.netflix.com",
        },
        {
          name: "किवि",
          description: "किवि फल खरिदका लागि हामीलाई सम्पर्क गर्नुहोस (+977-9841234567)",
          image: "https://jankarikendra.com/wp-content/uploads/2020/08/kiwi-photo-2.jpg.webp",
          website: "https://www.instagram.com",
        },
        {
          name: "रुद्राक्ष",
          description: "रुद्राक्षको लाागी हामीलाई सम्पर्क गर्नुहोस (+977-9841234567)",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFHr27N-4mVS5WY5IwsQjGcMw22nciM3KeQ&s",
          website: "https://www.spotify.com",
        },
        {
          name: "छुर्पी",
          description: "शुद्ध छुर्पी खरिदका लागि हामीलाई सम्पर्क गर्नुहोस (+977-9841234567)",
          image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Churpi_20230827092416.JPG",
          website: "https://www.amazon.com",
        },
        {
          name: "सुन्तला",
          description: "सुन्तला फल खरिदका लागि हामीलाई सम्पर्क गर्नुहोस (+977-9841234567)",
          image: "https://forward-facing.com/wp-content/uploads/2021/07/Orange-Trees-in-the-Desert.jpg",
          website: "https://www.apple.com",
        },
      ];

      const displaySponsers = showAllSponsers ? sponsors : sponsors.slice(0,3)
  return (
    <motion.aside 
      initial={{opacity: 0, x:50}}
      animate={{opacity: 1,x:0}}
      transition={{duration:0.5}}
      className='space-y-4'
    >

        <Card>
            <CardHeader>
                <CardTitle className="flex text-lg font-semibold items-center">
                    <TrendingUp className='mr-2 h-5 w-5 text-primary'/>
                    गाऊँघरका सामानहरु
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='space-y-4'>
                    {displaySponsers.map((sponser,index)=>(
                         <motion.li
                          key={sponser.name}
                          initial={{opacity: 0, y:20}}
                          animate={{opacity: 1,y:0}}
                          transition={{ delay: index * 0.1}}
                          className='flex flex-col items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                         >
                            <img
                             src={sponser.image}
                             alt={sponser.name}
                             className='w-50 h-40 object-contain rounded-md'
                            />
                             <div className='flex-1 '>
                                <h3 className='text-md font-semibold '>{sponser.name}</h3>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>{sponser.description}</p>
                                {/* <a
                                  href={sponser.website}
                                  target="_blank"
                                  className='text-primary text-sm flex items-center mt-1 hover:underline'
                                >
                                 Visit Website <ExternalLink className='ml-1 h-4 w-4'/>
                                </a> */}
                             </div>

                         </motion.li>
                    ))}
                </ul>
                {sponsors.length>3 && (
                    <Button
                     variant='outline'
                     className="w-full mt-4 dark:text-white"
                     onClick={() => setShowAllSponsers(!showAllSponsers)}
                    > 
                    {showAllSponsers ? "Show Less" : "Show More"}

                    </Button>
                )}
            </CardContent>
        </Card>

    </motion.aside>
  )
}

export default RightSideBar