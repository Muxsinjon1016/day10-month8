import React from "react";
import Buttons from "./(pages)/buttons";
import Accordions from "./(pages)/accordion";
import CarouselComponent from "./(pages)/carousel";
import FormComponents from "./(pages)/form";
import Charts from "./(pages)/charts";

export default function Home() {
  return (
    <>
      <div className="container my-10">
        <Buttons />
        <Accordions />
        <CarouselComponent />
        <FormComponents />
        <Charts />
      </div>
    </>
  );
}
