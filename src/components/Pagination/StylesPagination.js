import { makeStyles } from "@material-ui/core/styles";
import { themeColors } from "../../commonStyles/themeVariables";

const StylesPagination = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "center",
    "&.MuiPagination-root": {
      marginBottom: "10px",
    },
    "& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":
      {
        backgroundColor: themeColors.darkTintPrimaryLightBg,
      },
    "& .MuiPaginationItem-root": {
      color: themeColors.primaryDarkBg,
    },
    "& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":
      {
        opacity: "0.7",
      },
    "& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible":
      {
        opacity: "1",
      },
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  },
});
export default StylesPagination;
