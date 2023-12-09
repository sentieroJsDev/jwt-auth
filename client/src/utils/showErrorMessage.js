import { enqueueSnackbar } from "notistack";

export default (error) =>
  enqueueSnackbar(error.response.data.error, { variant: "error" });
