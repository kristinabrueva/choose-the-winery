import { ReactNode } from "react";

const ChartWrapper: React.FunctionComponent<{
  caption: string;
  children: ReactNode;
}> = ({ caption, children }) => (
  <figure className=" lg:border-gray-500 lg:border lg:p-10 p-5">
    <figcaption className="text-gray-700 px-10 text-center lg:font-bold lg:text-lg lg:pb-5 sm:font-bold sm:text-medium  sm:pb-5">
      {caption}
    </figcaption>
    {children}
  </figure>
);

export default ChartWrapper;
