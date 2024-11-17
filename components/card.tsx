import { cn } from "@/lib/cn";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className
      )}
    >
      <div className="flex w-full max-w-sm flex-col gap-4 overflow-hidden rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        {children}
      </div>
    </div>
  );
};

export default Card;
