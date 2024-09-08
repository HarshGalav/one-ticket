"use client";

import MoviesContainer from "../movies-container";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface Exhibition {
  id: number;
  title: string;
  aim: string;
  description: string;
  image: string;
}

export default function Features() {
  const [open, setOpen] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);

  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "Art Through Time",
      aim: "Art Exhibition",
      description: "Take a walk through history with famous paintings from different time periods. See how art styles have changed over the years and learn about the stories behind these amazing artworks.",
      image: "/art.jpeg"
    },
    {
      id: 2,
      title: "Science Wonders",
      aim: "Hands-on Science Exhibit",
      description: "Get ready for a fun science adventure! Try cool experiments, play with interactive displays, and learn about the world around us. Perfect for curious minds of all ages.",
      image: "/science.jpeg"
    },
    {
      id: 3,
      title: "Ancient Treasures",
      aim: "History Exhibition",
      description: "Step back in time and discover amazing objects from long-ago civilizations. See real artifacts, learn how people lived in the past, and uncover the secrets of ancient cultures.",
      image: "/historical.jpeg"
    }
  ];

  const openExhibitionDialog = (exhibition: Exhibition) => {
    setSelectedExhibition(exhibition);
  };

  const closeExhibitionDialog = () => {
    setSelectedExhibition(null);
  };

  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pb-32 pt-24 lg:pt-20 lg:pb-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Museum tickets, simplified.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Chat to book. No menus. No fuss.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Try it
              </Link>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Why you'll love it</DialogTitle>
                  </DialogHeader>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Simple chat. No complex navigation.</li>
                    <li>Book in seconds.</li>
                    <li>Always ready.</li>
                    <li>Speaks your language.</li>
                    <li>Remembers what you like.</li>
                    <li>Answers questions instantly.</li>
                    <li>Sends helpful visit reminders.</li>
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-gray-900">Museums in</h2>
          <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            <MapPinIcon className="h-4 w-4 mr-1" />
            Chennai
          </span>
        </div>
      </div>
      
      <MoviesContainer />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Exciting Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibitions.map((exhibition) => (
            <div 
              key={exhibition.id} 
              className="flex flex-col"
            >
              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => openExhibitionDialog(exhibition)}
              >
                <Image 
                  src={exhibition.image} 
                  alt={exhibition.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">Click for details</p>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{exhibition.title}</h3>
              <p className="mt-2 text-md text-gray-600 text-center">{exhibition.aim}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedExhibition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full p-8 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold mb-2">{selectedExhibition.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{selectedExhibition.aim}</p>
            <Image 
              src={selectedExhibition.image} 
              alt={selectedExhibition.title} 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover object-center mb-4 rounded"
            />
            <p className="text-lg mb-4 leading-relaxed">{selectedExhibition.description}</p>
            <button 
              onClick={closeExhibitionDialog}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Minimal Diwali Event Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Diwali Night at the palace
            </h2>
            <p className="text-lg text-indigo-100 mb-6">
              Experience the festival of lights with art, culture, and family fun.
            </p>
            <Link
              href="#"
              className="inline-block bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <footer></footer>
    </>
  );
}