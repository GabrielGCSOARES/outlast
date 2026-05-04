"use client"
import CarouselComponent from "../components/CarouselComponent"
import NavBar from "../components/NavBar"

export default function Carousel() {
    return (
        <div className="w-full items-center justify-center">
            <NavBar/>
            <h2 className="m-4 text-2x1 font-bold text-center">Caroussel</h2>
            <CarouselComponent/>
        </div>
    )
}