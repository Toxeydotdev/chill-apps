import React from "react";
import { FaYelp } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { SiDoordash } from "react-icons/si";

export type IconName = "yelp" | "doordash" | "delivery" | "menu";

type Props = {
  name: IconName;
  size?: number;
  title?: string;
  className?: string;
};

export const Icon: React.FC<Props> = ({
  name,
  size = 18,
  title,
  className,
}) => {
  switch (name) {
    case "yelp":
      return (
        <FaYelp
          size={size}
          title={title ?? "Yelp"}
          className={className}
          aria-label={title ?? "Yelp"}
        />
      );
    case "doordash":
      return (
        <SiDoordash
          size={size}
          title={title ?? "DoorDash"}
          className={className}
          aria-label={title ?? "DoorDash"}
        />
      );
    case "delivery":
      return (
        <MdDeliveryDining
          size={size}
          title={title ?? "Delivery"}
          className={className}
          aria-label={title ?? "Delivery"}
        />
      );
    // Extend with more mappings as needed
    default:
      return null;
  }
};
