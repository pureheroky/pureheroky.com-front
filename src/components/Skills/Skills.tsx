import { useAppSelector } from "@/hooks/redux";
import { ObjectContent, ObjectWrapper, Search } from "@/styles";
import { SkillsGrid, SkillsItem } from "@/styles/Skills";
import { Grid2 } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Skills: React.FC = () => {
  const skillList = useAppSelector((state) => state.data.Skills) || {
    skills: [""],
  };
  const [filteredItems, setFilteredItems] = useState<string[]>(
    skillList.skills
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    setFilteredItems(
      skillList.skills.filter((skill: string) =>
        skill.toLowerCase().includes(value)
      )
    );
  };

  return (
    <ObjectWrapper>
      <Search
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
      />
      <ObjectContent>
        <SkillsGrid>
          {filteredItems.map((skill, ind) => (
            <Grid2 size={6} key={ind}>
              <SkillsItem elevation={3}>{skill}</SkillsItem>
            </Grid2>
          ))}
        </SkillsGrid>
      </ObjectContent>
    </ObjectWrapper>
  );
};

export default Skills;
