import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import ProfileCardMain from "../src/course-1/ProfileCardMain";
import AnimalShowMain from "../src/course-2/AnimalShowMain";
import ImageSearcherMain from "../src/course-3/ImageSearcherMain";
import BookMain from "./course-4/BookMain";
import ComponentMain from "./course-5/ComponentMain";
import AccordionMain from "./course-6/AccordionMain";
import ColorSelectorMain from "./course-7/ColorSelectorMain";
import ModalToggleMain from "./course-8/ModalToggleMain";
import TableMain from "./course-9/TableMain";
import CounterMain from "./course-10/CounterMain";
import CarMain from "./course-11/CarMain";
import AlbumsMain from "./course-12/AlbumsMain";

function App() {
  const routers = [
    { name: "project-1: Profile Card", component: ProfileCardMain },
    { name: "project-2: Animal Show", component: AnimalShowMain },
    { name: "project-3: Image Searcher", component: ImageSearcherMain },
    { name: "project-4: Books library - Context & Hooks", component: BookMain },
    { name: "project-5: Variant components", component: ComponentMain },
    { name: "project-6: Accordian", component: AccordionMain },
    { name: "project-7: Color Selector", component: ColorSelectorMain },
    { name: "project-8: Modal", component: ModalToggleMain },
    { name: "project-9: Table", component: TableMain },
    {
      name: "project-10: Counter Redux",
      component: CounterMain,
      config: { initialCount: 0 },
    },
    {
      name: "project-11: Multiple slices",
      component: CarMain,
    },
    {
      name: "project-12: Async Thunks",
      component: AlbumsMain,
    },
    
  ];
  return (
    <>
      <div className="container">
        <div className="section">
          <h1>React courses</h1>
          <Router>
            <nav className="flex">
              <div className="w-2/12 border-r ">
                {routers.map((course, index) => (
                  <li key={index}>
                    <Link to={`project-${index + 1}`}>{course.name}</Link>
                  </li>
                ))}
              </div>
              <div className="w-9/12 pl-4">
                <Switch>
                  <Route exact path="/" component={ProfileCardMain}>
                    1
                  </Route>
                  {routers.map((course, index) => (
                    <Route
                      key={index}
                      path={`/project-${index + 1}`}
                      render={(prop) => (
                        <course.component {...prop} config={course.config} />
                      )}
                    ></Route>
                  ))}
                </Switch>
              </div>
            </nav>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

