import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Catalog() {
  return (
    <main className="p-10">
        <div className="flex justify-between" >
          <h1>Catalog</h1>
          <p>Sort By</p>
        </div>
        <div className="flex ">
          <div className="w-1/6">
            sort here
          </div>
          <div className=" w-full">
            anime here

          </div>

        </div>

    </main>
  )
  
}