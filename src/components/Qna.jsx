import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Qna = () => {
  return (
    <div className="pb-10 pt-8 bg-black text-white">
      <p className="text-4xl px-20  pb-10" style={{ fontFamily: "charter" }}>
        More about writing on Medium:
      </p>

      <div>
        <Accordion className="text-2xl" type="multiple" collapsible>
          <AccordionItem className="py-5" value="item-1">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-2">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-3">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-4">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-5">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-6">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-7">
            <AccordionTrigger className="px-20">
              How do I start writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              First, make a free account. Then, to create a story, click on your
              profile picture in the top-right corner of the page, then
              &quot;Write a Story&quot;.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className="text-2xl text-center pt-2" >
         
         Looking for help getting started? 

             <button className="px-5 py-1 mt-8 ml-5 rounded-full
        bg-white text-black" >
            Check out our guide
        </button>

      </p>
    </div>
  );
};

export default Qna;
