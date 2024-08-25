import Image from "next/image";
import prop1 from '../assets/images/Property 1=Default.png'
import prop2 from '../assets/images/Property 1=Variant2.png'
import prop3 from '../assets/images/Property 1=Variant3.png'
import prop4 from '../assets/images/Property 1=Variant4.png'
import prop5 from '../assets/images/Property 1=Variant5.png'
import prop6 from '../assets/images/Property 1=Variant6.png'

// src/components/OptionChain.tsx
export default function OptionChain() {
  return (
    <section className="w-full bg-red-400 flex overflow-x-hidden">
       <Image src={prop1} height={543} width={1920} alt="prop1"/>
       <Image src={prop2} height={543} width={1920} alt="prop2"/>
       <Image src={prop3} height={543} width={1920} alt="prop3"/>
       <Image src={prop4} height={543} width={1920} alt="prop4"/>
       <Image src={prop5} height={543} width={1920} alt="prop5"/>
       <Image src={prop6} height={543} width={1920} alt="prop6"/>
    </section>
  );
}
