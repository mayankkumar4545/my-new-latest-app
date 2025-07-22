import Courses from "../courses/COurses";
import InformationCourses from "./InformationCourses";
import IntroPage from "./IntroPage";
import Upgraded from "./Upgraded";

const HomePage = () => {
  return (
    <>
      <IntroPage />
      <Courses />
      <Upgraded />
      <InformationCourses />
    </>
  );
};
export default HomePage;
