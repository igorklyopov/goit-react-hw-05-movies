import { useParams } from "react-router";
import { BASE_IMG_URL } from "../../services/moviesApiConstants";

export default function Cast({ castData }) {
  return (
    <section>
      <ul>
        {castData.map((cast) => (
          <li key={cast.id}>
            <img
              src={`${BASE_IMG_URL}${cast.profile_path}`}
              alt={cast.name}
              width="250"
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
