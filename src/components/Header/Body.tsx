import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { FaReact } from 'react-icons/fa'
  import { SiTypescript } from 'react-icons/si'
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
  import { GiHook } from "react-icons/gi";
  import { SiTailwindcss  } from "react-icons/si";
  import Vite from "./img/vite.svg";
  import { IoLogoJavascript } from "react-icons/io";
  import {  FaNodeJs } from "react-icons/fa";
 
 
   
  export const Header = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-xl mb-10 ml-14">
            <div>
        <Card className="mt-6 w-96">
          <CardBody>
            <div className="flex items-center">
              <FaReact className="text-blue-500 w-12 h-12 mb-4"/>
              <SiTypescript className="text-blue-500 w-12 h-12 mb-4"/>
            </div>
          <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
             React with TypeScript.
          </Typography>
          <Typography>
           React is a library from JavaScript and allows to use many combinations with differents programming languages, for example TypeScript introduce a strict mode in JSX and that arrow a another compilation TSX.
          </Typography>
          </CardBody>
            <CardFooter className="pt-0">
              <a href="https://forfrontend.tips/como-tipar-componentes-react-con-typescript" className="inline-block">
            <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
              </a>
            </CardFooter>
        </Card>
            </div>
            <div>
                <Card className="mt-6 w-96">
                <CardBody>
            <GiHook className="text-black w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
                Hooks with React.
            </Typography>
            <Typography>
                The hooks compiles a new API library from React and makes that a state and another characteristics doing components with an function. Also add modification in our logic with renders
            </Typography>
            </CardBody>
                <CardFooter className="pt-0">
            <a href="https://www.w3schools.com/react/react_hooks.asp" className="inline-block">
                <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
                Learn More 
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
            </a>
            </CardFooter>
        </Card>
            </div>
            <div>
        <Card className="mt-6 w-96">
            <CardBody>
          <SiTailwindcss className="text-blue-500 w-12 h-12 mb-4 "/>
          <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
            Tailwind CSS.
          </Typography>
          <Typography>
          Tailwind CSS is a pure CSS layout system implementation. It is also configurable. It gives developers superpowers allows them to create web sites with a clean user interface, this language improve the design of the page
          </Typography>
            </CardBody>
            <CardFooter className="pt-0">
          <a href="https://www.material-tailwind.com/docs/react/footer" className="inline-block">
            <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
            </CardFooter>
        </Card>
            </div>
            <div>
            <Card className="mt-6 w-96">
        <CardBody>
          <img src={Vite} className="w-12 h-12 mb-4"/>
          <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
            Vite.
          </Typography>
          <Typography>
          This framework gives a better experience for developers front-end and provides a rapid development environment
          </Typography>
        </CardBody>
            <CardFooter className="pt-0">
          <a href="https://vitejs.dev/guide/" className="inline-block">
            <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
            </CardFooter>
        </Card>
            </div>
            <div>
            <Card className="mt-6 w-96">
        <CardBody>
          <IoLogoJavascript className="text-white bg-yellow-800 w-12 h-12 mb-4" />
          <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
            JavaScript.
          </Typography>
          <Typography>
            JavaScript provide us with a functions that you can do in your code for you make your page interactive.
          </Typography>
        </CardBody>
            <CardFooter className="pt-0">
          <a href="https://www.w3schools.com/js/DEFAULT.asp" className="inline-block">
            <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
            </CardFooter>
        </Card>
            </div>
            <div>
            <Card className="mt-6 w-96">
        <CardBody>
          <FaNodeJs className="text-teal-500 w-12 h-12 mb-4" />
          <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold">
            Node JS.
          </Typography>
          <Typography>
           Node.js, is a cross-platform runtime environment for the server layer (server-side) based on JavaScript..
          </Typography>
        </CardBody>
            <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="lg" variant="text" className="flex items-center gap-2 underline underline-offset-2">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
            </CardFooter>
        </Card>
            </div>
        </div>
        
    );
  }
  