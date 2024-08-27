import { FC } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

interface ToolBoxItemProps {
  title: string;
  iconType: React.ElementType;
}

interface ToolboxItemsProps {
  items: ToolBoxItemProps[];
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolboxItems: FC<ToolboxItemsProps> = ({
  items,
  className,
  itemsWrapperClassName,
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
