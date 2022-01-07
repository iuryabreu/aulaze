import axios from "axios";
import { useEffect, useState } from "react";
import DataGrid from "../../components/DataGrid/DataGrid";
import { Movie } from "../../Models/Common";

export function Home() {
  const tableHead = ["Title", "ReleaseDate", "Genre", "Price", "Rating"];

  const [movies, setMovies] = useState<Movie[]>([]);

  async function fetchMoviesList() {
    const response = await axios.get<Movie[]>(
      "https://1d556aee-6993-4bd5-9489-7b1ebc92f7e6.mock.pstmn.io"
    );
    setMovies(response.data);
  }

  useEffect(() => {
    fetchMoviesList();
  }, []);

  return (
      <DataGrid header={tableHead} data={movies} />
  );
}
