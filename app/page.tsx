"use client";
import * as React from "react";

import Image from "next/image";
import { Button } from "@/lib/components/Button";
import { Input } from "@/lib/components/Input";
import { Badge } from "@/lib/components/Badge";
import { Nav } from "@/lib/components/Nav";
import { Typography } from "@/lib/components/Typography";
import logo from "../public/logo2.webp";
import image from "../public/2.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "@/lib/components/Card";
import { Avatar, AvatarNoImage } from "@/lib/components/Avatar";
import { Accordion, AccordionItem } from "@/lib/components/Accordion";
import { Alert } from "@/lib/components/Alert";
import { Hero } from "@/lib/sections/Hero/Hero";
import image1 from "../public/Asset 4.png";

export default function Home() {
  // const [show, setShow] = React.useState(true);

  return (
    <>
      <Hero
        className="pt-36"
        header="Lets build something great together."
        subheader="Project Sugar Block"
        filledButtonLabel="Get Started"
        outlinedButtonLabel="Explore more"
        layout={"form"}
        image={image1}
        bgImage
      />
    </>
  );
}

// <div className="w-full h-fit flex justify-center items-center  flex-col">
//         {/* Typgraphy */}
//         <Typography variant="display" className="my-8" type="h1">
//           Display
//         </Typography>
//         <Typography variant="h1" className="my-8" type="h1">
//           Heading 1
//         </Typography>
//         <Typography variant="h2" className="my-8" type="h2">
//           Heading 2
//         </Typography>
//         <Typography variant="h3" className="my-8" type="h3">
//           Heading 3
//         </Typography>
//         <Typography variant="h4" className="my-8" type="h4">
//           Heading 4
//         </Typography>
//         <Typography variant="h5" className="my-8" type="h5">
//           Heading 5
//         </Typography>
//         <Typography variant="body-small" className="my-8" type="p">
//           Body small
//         </Typography>
//         <Typography variant="body" className="my-8" type="p">
//           Body
//         </Typography>
//         <Typography variant="body-large" className="my-8" type="p">
//           Body large
//         </Typography>
//         <Typography variant="label-small" className="my-8" type="p">
//           Label small
//         </Typography>
//         <Typography variant="label" className="my-8" type="p">
//           Label
//         </Typography>
//         <Typography variant="label-large" className="my-8" type="p">
//           Label large
//         </Typography>

//         {/* Buttons */}
//         <Button variant="filled" size="lg" className="my-8" elevation={4}>
//           button
//         </Button>
//         <Button variant="outlined" size="lg" className="my-8">
//           button
//         </Button>
//         <Button variant="text" size="lg" className="my-8">
//           button
//         </Button>
//         <Button variant="danger" size="lg" className="my-8">
//           button
//         </Button>
//         <Button
//           variant="text-accent"
//           size="lg"
//           className="my-8"
//           iconEnd={image}
//         >
//           button
//         </Button>

//         {/* Inputs */}

//         <Input variant="lg" className="my-8" placeholder="Hello" type="text" />
//         <Input variant="md" className="my-8" placeholder="Hello" type="text" />
//         <Input variant="sm" className="my-8" placeholder="Hello" type="text" />
//         <Input
//           variant="lg"
//           className="my-8"
//           placeholder="Hello"
//           type="text"
//           iconEnd={image}
//         />
//         <Input
//           variant="sm"
//           className="my-8"
//           placeholder="Hello"
//           type="text"
//           iconStart={image}
//         />
//         <Input variant="sm" className="my-8" placeholder="Hello" type="text" />

//         {/* Badges */}
//         <div className="w-full h-96 flex justify-center items-center">
//           <Badge value={"hi"} elevation={2} size={"sm"} variant={"extra"} />
//         </div>
//         {/* card */}
//         <div className="w-full py-16 flex justify-center items-center">
//           <Card elevation={4}>
//             <CardHeader>
//               <CardTitle>Hello</CardTitle>
//             </CardHeader>
//             <CardBody className="">
//               <Image src={logo} alt="" className="w-full "></Image>
//             </CardBody>
//             <CardFooter>
//               <Button variant="filled" size="lg" className="" elevation={4}>
//                 {" "}
//                 Button{" "}
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>

//         {/* Avatar */}

//         <div className="w-full h-96 flex justify-center items-center">
//           <Avatar
//             image={image}
//             name="Mikhail Loskutov"
//             className="mx-4"
//           ></Avatar>
//           <AvatarNoImage size="md"></AvatarNoImage>
//         </div>

//         {/* Accorndion */}
//         <div className="w-full h-screen flex justify-center items-center">
//           <Accordion>
//             <AccordionItem className="bg-green-400">
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//             </AccordionItem>
//             <AccordionItem className="bg-green-400">
//               {" "}
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//             </AccordionItem>
//             <AccordionItem className="bg-green-400"> </AccordionItem>
//             <AccordionItem className="bg-green-400">
//               {" "}
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//               <Typography type="h3">Hello</Typography>
//             </AccordionItem>
//           </Accordion>
//           {/* <Button
//             variant="filled"
//             size="lg"
//             className=""
//             elevation={4}
//             onClick={() => setShow((prev) => !prev)}
//           >
//             show
//           </Button> */}
//         </div>
//         {/* <div className="relative h-96 w-full">
//           <Alert isShowing={show} />
//         </div> */}
//       </div>
