import React from "react";
import SectionHeader from "../SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Key } from "lucide-react";

interface FaqOption {
  label: string;
  answer: string;
}
export const FAQ = () => {
  const faqOption: FaqOption[] = [
    {
      label: "Do you have non-profit discount?",
      answer:
        "Praesent semper, lacus sed cursus porta,feugiat primis in faucibus orci luctus tincidunt ligula ultrice sapien egestas lobortis magna",
    },
    {
      label: "What I can do with my purchase?",
      answer:
        "Feugiat eros ligula massa lipsum primis in orci luctus Sagittis congue augue egestas volutpat egestas magna ipsum primis in faucibus bibendum sit amet in odio",
    },
    {
      label: "Do you have a free trial?",
      answer:
        "Vitae auctor integer congue magna at pretium Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros dolor auctor ipsum blandit purus Sagittis congue augue egestas volutpat egestas magna",
    },
    {
      label: "I have technical problem, who do I email?",
      answer:
        "Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci ipsum porta justo integer",
    },
  ];
  return (
    <>
      <section className="relative mt-11 pt-28 pb-14" id="aboutUs">
        <div className="container">
          <SectionHeader
            label="Frequently Asked Questions"
            className="max-w-[700px] m-auto"
          />
          <div className="my-8 md:p-8">
            <Accordion type="single" collapsible>
              {faqOption.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
