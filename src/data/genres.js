const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export { genres };

// const [searchQuery, setSearchQuery] = useState("");
// const [pageNumber, setPageNumber] = useState(1);
// const [images, setImages] = useState([]);
// const [moreImagesPerPage, setMoreImagesPerPage] = useState(false);
// const [status, setStatus] = useState(Status.IDLE);
// const [error, setError] = useState(null);

// useEffect(() => {
//   if (searchQuery !== "") getImages(searchQuery, pageNumber);
// }, [searchQuery, pageNumber]);

// const getImages = (searchQuery, pageNumber) => {
//   fetchMoviesByName(searchQuery, pageNumber)
//     .then((images) => {
//       setImages((prevImages) => [...prevImages, ...images.hits]);
//       setStatus(Status.RESOLVED);

//       if (images.total === 0) {
//         setStatus(Status.REJECTED);
//         setError("No images for this request!");

//         return;
//       }

//       images.total > IMAGES_PER_PAGE
//         ? setMoreImagesPerPage(true)
//         : setMoreImagesPerPage(false);
//     })
//     .catch((error) => {
//       setError(error.message);
//       setStatus(Status.REJECTED);
//     });
// };

// const onSearchFormSubmit = (searchQuery) => {
//   setSearchQuery(searchQuery);
//   setImages([]);
//   setPageNumber(1);

//   if (searchQuery === "") {
//     setStatus(Status.REJECTED);
//     setError("Please enter your request!");
//   }
// };
