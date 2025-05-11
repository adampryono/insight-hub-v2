import { Text } from "../Text";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userContent?: React.ReactNode;
}

export default function UserProfile({
  userImage = "img_intetity_color_circle.svg",
  userContent = "Content",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center w-[32%] md:w-full mt-4 md:mt-0`}>
      <Img src={userImage} width={16} height={16} alt="Content" className="h-[16px]" />
      <Text as="p" className="!font-poppins text-[12px] font-medium">
        {userContent}
      </Text>
    </div>
  );
}