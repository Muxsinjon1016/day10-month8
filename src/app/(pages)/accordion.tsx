import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  return (
    <>
      <h2 className="font-secondFamily font-bold text-7xl my-5">Accordions</h2>
      <div className="flex justify-evenly items-center gap-5 flex-wrap">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>First accordion title</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime sint, repellat mollitia corrupti minima quisquam possimus?
              Similique, quae rerum?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>First accordion title</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime sint, repellat mollitia corrupti minima quisquam possimus?
              Similique, quae rerum?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>First accordion title</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime sint, repellat mollitia corrupti minima quisquam possimus?
              Similique, quae rerum?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Accordions;
