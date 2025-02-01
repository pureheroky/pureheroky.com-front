import {
  ProfileAvatar,
  ProfileAvatarCat,
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileStatus,
  ProfileWrapper,
} from "@/styles/Profile";
import { cat } from "@/assets/images";
import { Spinner, Text, TextLink } from "@/styles";
import { useAppSelector } from "@/hooks/redux";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Profile: React.FC = () => {
  const userData = useAppSelector((state) => state.data.Data) || {
    username: "pureheroky",
    age: 18,
    status: "employed",
    avatar: "/images/avatar.jpg",
  };

  const { username, age, status, avatar } = userData;
  const [isAvatarLoading, setIsAvatarLoading] = useState(true);

  return (
    <ProfileWrapper>
      <ProfileAvatarWrapper>
        {isAvatarLoading && (
          <Spinner>
            <CircularProgress />
          </Spinner>
        )}
        <ProfileAvatar
          layout="fill"
          src={`https://akirakayoo.store${avatar}`}
          alt="avatar"
          priority
          sizes="20em"
          onLoadingComplete={() => setIsAvatarLoading(false)}
        />
        <ProfileAvatarCat src={cat} alt="me" unoptimized />
      </ProfileAvatarWrapper>

      <Text weight="thick">{username}</Text>
      <Text weight="thin" size="1.1em">
        {age} y/o frontend dev
      </Text>

      <ProfileStatus>
        <Text weight="thin" size="1.1em">
          current status:{" "}
        </Text>
        <Text
          weight="thin"
          size="1.1em"
          color={status === "employed" ? "green" : "red"}
        >
          {status}
        </Text>
      </ProfileStatus>

      <ProfileInfo>
        <TextLink href="https://github.com/pureheroky" size="1.4em">
          github
        </TextLink>
        <TextLink href="https://t.me/psychopure" size="1.4em">
          telegram
        </TextLink>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
