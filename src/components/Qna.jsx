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
              How can I make money writing on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
              By joining Medium Partner Program and earning based on engagement stories.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-3">
            <AccordionTrigger className="px-20">
              Who writes on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
            Anyone can write on Medium. Whether you&apos;ve never written before or are ready to create a full publication, it&apos;s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-4">
            <AccordionTrigger className="px-20">
              Do I need to be in Partner Program to write on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
            No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-5">
            <AccordionTrigger className="px-20">
            What can I write about on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
            You can write about virtually any topic on Medium, ranging from personal experiences and reflections to professional insights and expertise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-6">
            <AccordionTrigger className="px-20">
            Who can read the work I publish on Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
            Anyone with access to Medium, including both members and non-members, can read the work you publish on the platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-5" value="item-7">
            <AccordionTrigger className="px-20">
            How can I grow my audience with Medium?
            </AccordionTrigger>
            <AccordionContent className="px-20 text-xl">
            You can grow your audience on Medium by consistently publishing high-quality content, engaging with readers, and leveraging social media and Medium&apos;s built-in distribution channels.
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
