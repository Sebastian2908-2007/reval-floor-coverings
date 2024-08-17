'use client'

import { 
     DropdownMenu,
     DropdownMenuTrigger,
     DropdownMenuContent,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuCheckboxItem 
    } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";    
import { Button } from "@/components/ui/button";
import GalleryImg from "../components/GalleryImg";
import { photos, beforeAfterPhotos } from "@/utils/photos";
import BeforeAfterImg from "../components/BeforeAfterImg";


export default function Gallery() {
  const [category,setCategory] = useState('All');  
    function sortPhotos (photo) {
      return category === photo.description;
    }; 
    const sortedPhotos = photos.filter(sortPhotos);
 
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-6 md:gap-8">
        <div className="text-center">
          <h1 className="text-3xl p-4 md:text-4xl font-bold rounded-sm tracking-tight bg-[#2f4b65]  text-white">Jakeo Tile Projects</h1>
          <p className="mt-2 text-white bg-[#000000] p-2 rounded-md">
            Discover some of our favorite projects.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="h-4 w-4" />
                <span>Filter by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={category === 'All'} onClick={() => setCategory('All')}>All</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={category === 'Tiled Showers'} onClick={() => setCategory('Tiled Showers')}>Tiled Showers</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={category === 'Backsplashes'} onClick={() => setCategory('Backsplashes')}>Backsplashes</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={category === 'Tile Floors'} onClick={() => setCategory('Tile Floors')}>Tile Floors</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={category === 'Fireplace Surrounds'} onClick={() => setCategory('Fireplace Surrounds')}>Fireplace Surrounds</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={category === 'Remodels'} onClick={() => setCategory('Remodels')}>Remodels</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {category === 'All' ? photos.map((photo) => (
      <GalleryImg key={photo.key} photo={photo}/>
    ))
    :
    sortedPhotos.map((photo) => (
      <GalleryImg key={photo.key} photo={photo}/>
    ))}
        </div>
      </div>
    <div className="mt-6">
      <div className="lg:flex lg:justify-center">
      <h2 className="text-right mb-2 text-3xl p-4 md:text-4xl font-bold rounded-sm tracking-tight bg-[#2f4b65] text-white min-[768px]:text-center lg:w-[90%] xl:w-[70%] lg:mb-6">Before Jakeo Tile and After Jakeo Tile</h2>
      </div>
      {
      beforeAfterPhotos.map(imgs => ( 
      <BeforeAfterImg key={imgs.key} imgPaths={imgs}/>
    ))
       }
       </div>
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


