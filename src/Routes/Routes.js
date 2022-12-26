import { createBrowserRouter } from "react-router-dom";
import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import AllApplications from "../Pages/ApplicationsReview/AllApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationForm></ApplicationForm>,
  },
  {
    path: "/applications",
    element: <AllApplications></AllApplications>,
  },
]);
