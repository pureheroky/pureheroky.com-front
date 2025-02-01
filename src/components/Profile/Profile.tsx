import {
  ProfileAvatar,
  ProfileAvatarCat,
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileStatus,
  ProfileWrapper,
} from "@/styles/Profile";
import { cat } from "@/assets/images";
import { Text, TextLink } from "@/styles";
import { useAppSelector } from "@/hooks/redux";

const Profile: React.FC = () => {
  const userData = useAppSelector((state) => state.data.Data) || {
    username: "pureheroky",
    age: 18,
    status: "employed",
    avatar: "/images/avatar.jpg",
  };

  const { username, age, status, avatar } = userData;

  return (
    <ProfileWrapper>
      <ProfileAvatarWrapper>
        <ProfileAvatar
          layout="fill"
          src={`http://127.0.0.1:8080${avatar}`}
          alt="avatar"
          priority
          sizes="20em"
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
