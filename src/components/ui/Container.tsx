import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  className?: string;
  children: ReactNode;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn(" w-full max-w-[1280px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
