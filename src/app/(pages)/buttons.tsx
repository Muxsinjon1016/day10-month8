import { Button } from "@/components/ui/button";
import React from "react";

export const Buttons = () => {
  return (
    <>
      <h2 className="font-secondFamily font-bold text-7xl my-5">Buttons</h2>
      <div className="flex justify-evenly items-center gap-5 flex-wrap">
        <Button variant="default">default button</Button>
        <Button variant="destructive">destructive button</Button>
        <Button variant="ghost">ghost button</Button>
        <Button variant="link">link button</Button>
        <Button variant="outline">outline button</Button>
        <Button variant="secondary">secondary button</Button>
      </div>
    </>
  );
};

export default Buttons;
