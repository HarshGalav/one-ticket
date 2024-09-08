"use client";

import { useState, useEffect } from "react";
import React from "react";

interface Museum {
  id: number;
  title: string;
  description: string;
  history: string;
  poster: string;
  age_rate: number;
  ticket_price: number;
}

const MoviesContainer = () => {
  const [museums, setMuseums] = useState<Museum[]>([]);
  const [selectedMuseum, setSelectedMuseum] = useState<Museum | null>(null);

  useEffect(() => {
    const fetchMuseums = async () => {
      const response = await fetch('/api/museums');
      const data = await response.json();
      setMuseums(data);
    };

    fetchMuseums();
  }, []);

  const openDialog = (museum: Museum) => {
    setSelectedMuseum(museum);
  };

  const closeDialog = () => {
    setSelectedMuseum(null);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 mt-4 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {museums.map((museum) => (
          <div key={museum.id} className="group">
            <div 
              onClick={() => openDialog(museum)}
              className="cursor-pointer aspect-h-5 aspect-w-3 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-10 xl:aspect-w-7"
            >
              <img
                src={museum.poster}
                alt={museum.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="relative w-full">
              <div className="w-10/12">
                <h3 className="mt-4 text-sm text-gray-700">{museum.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  INR {museum.ticket_price}
                </p>
              </div>
              <div className="absolute right-0 top-1.5">
                <div className="flex justify-center items-center w-6 h-6 bg-indigo-500 text-white rounded-xl p-4">
                  <span className="text-xs">{museum.age_rate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMuseum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-parchment text-sepia max-w-2xl w-full p-8 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold mb-4 font-serif">{selectedMuseum.title}</h2>
            <img 
              src={selectedMuseum.poster} 
              alt={selectedMuseum.title} 
              className="w-full h-64 object-cover object-center mb-4 rounded"
            />
            <p className="text-lg mb-4 font-serif leading-relaxed">{selectedMuseum.history}</p>
            <button 
              onClick={closeDialog}
              className="mt-4 bg-brown-500 text-parchment py-2 px-4 rounded hover:bg-brown-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesContainer;