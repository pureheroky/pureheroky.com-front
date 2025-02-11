import { useAppSelector } from "@/hooks/redux";
import { formatDate } from "@/lib/utils";
import { selectCommits } from "@/services/slices/dataSlice";
import { ObjectContent, ObjectWrapper, Search } from "@/styles";
import {
  GitCommitsSearchContainer,
  GitCommitsSearchFilter,
  GitCommitsSelect,
  GitCommitsTableContainer,
} from "@/styles/GitCommits";
import { Commit } from "@/types";
import {
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const GitCommits: React.FC = () => {
  const commits = useAppSelector(selectCommits);
  const [filter, setFilter] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCommits, setFilteredCommits] = useState<Commit[]>(commits);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFilter(event.target.value as string);
  };

  useEffect(() => {
    const sortedCommits = [...commits].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const filtered = sortedCommits.filter((commit) => {
      if (filter === "name") {
        return commit.project_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (filter === "date") {
        return formatDate(commit.date).includes(searchTerm);
      }
      return true;
    });
    setFilteredCommits(filtered);
  }, [searchTerm, filter, commits]);

  return (
    <ObjectWrapper>
      <GitCommitsSearchContainer>
        <Search
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginBottom: "0", flex: 1 }}
        />
        <GitCommitsSearchFilter>
          <InputLabel>search by:</InputLabel>
          <GitCommitsSelect
            label="search by"
            defaultValue={"name"}
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"date"}>Date</MenuItem>
          </GitCommitsSelect>
        </GitCommitsSearchFilter>
      </GitCommitsSearchContainer>

      <ObjectContent>
        <GitCommitsTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project name</TableCell>
                <TableCell>branch</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCommits.map((commit, ind) => (
                <TableRow key={ind}>
                  <TableCell>{commit.project_name}</TableCell>
                  <TableCell>{commit.branch}</TableCell>
                  <TableCell>{formatDate(commit.date)}</TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: 200,
                    }}
                  >
                    {commit.message}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GitCommitsTableContainer>
      </ObjectContent>
    </ObjectWrapper>
  );
};

export default GitCommits;
