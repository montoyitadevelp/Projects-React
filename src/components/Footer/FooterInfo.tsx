import { Typography } from "@material-tailwind/react";
 
export const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 text-center md:justify-between mx-auto max-w-screen-xl px-6 py-3 item">
        <Typography
          as="a"
          href="https://github.com/montoyitadevelp"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-mono text-slate-950"
        >
          MontoyitaDev - Developer Front | End
        </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About me
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            My last project
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contributions
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact me
          </Typography>
        </li>
      </ul>
    </footer>
  );
}