import { AboutCardContent, CardHeader, InfoRow } from "@/styles/About";
import { Divider } from "@mui/material";
import { ObjectWrapper, Text } from "@/styles";
import { useAppSelector } from "@/hooks/redux";

const About: React.FC = () => {
  const userData = useAppSelector((state) => state.data.Data) || {
    age: 18,
  };
  return (
    <ObjectWrapper>
      <AboutCardContent>
        <CardHeader variant="h5">About me</CardHeader>

        <Divider />

        <InfoRow>
          <Text size="lg">Age:</Text>
          <Text weight="thin" size="lg">
            {userData.age}
          </Text>
        </InfoRow>

        <InfoRow>
          <Text size="lg">Hometown:</Text>
          <Text weight="thin" size="lg">
            Penza, Russia
          </Text>
        </InfoRow>

        <InfoRow>
          <Text size="lg">Education:</Text>
          <Text weight="thin" size="lg">
            Not finished secondary school
          </Text>
        </InfoRow>

        <InfoRow>
          <Text size="lg">Experience:</Text>
          <Text weight="thin" size="lg">
            About 4-5 years
          </Text>
        </InfoRow>

        <InfoRow>
          <Text size="lg">Languages:</Text>
          <Text weight="thin" size="lg">
            English, Russian
          </Text>
        </InfoRow>

        <Divider sx={{ marginY: 2 }} />

        <Text size="lg">About:</Text>
        <Text weight="thin" size="mb" style={{ marginTop: "1em" }}>
          I started my programming journey by mastering Python, which was one of
          the most popular languages at the time. After experimenting with
          different languages, I ultimately decided to focus on front-end
          development as my primary path, while continuing to enhance my skills
          in other areas of development. As a result, I am now an employed
          front-end developer with experience in numerous projects and a strong
          understanding of other programming languages and their mechanics
        </Text>
      </AboutCardContent>
    </ObjectWrapper>
  );
};

export default About;
