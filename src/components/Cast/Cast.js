import { BASE_IMG_URL } from "../../services/moviesApiConstants";

export default function Cast({ cast }) {
  return (
    <section>
      <ul>
        {cast &&
          cast.map((item) => (
            <li key={item.id}>
              <img
                src={`${BASE_IMG_URL}${item.profile_path}`}
                alt={item.name}
                width="250"
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
