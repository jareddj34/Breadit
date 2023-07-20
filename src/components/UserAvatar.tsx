import { User } from "next-auth";
import { AvatarProps } from "@radix-ui/react-avatar";
import { FC } from "react";
import Image from "next/image";
import { Icons } from "./ui/icons";
import { Avatar, AvatarFallback } from "./ui/Avatar";

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
    return (
        <Avatar>
            {user.image ? (
                <div className="relative aspect-square h-full w-full">
                    <Image
                        fill
                        src={user.image}
                        alt="profilepicture"
                        referrerPolicy="no-referrer"
                    />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user?.name}</span>
                    <Icons.user className="h-4 w-4" />
                </AvatarFallback>
            )}
        </Avatar>
    );
};

export default UserAvatar;
