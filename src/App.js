import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "bulma/css/bulma.css";
import ProfileCardMain from "../src/course-1/ProfileCardMain";
import AnimalShowMain from "../src/course-2/AnimalShowMain";
import ImageSearcherMain from "../src/course-3/ImageSearcherMain";
import BookMain from "./course-4/BookMain";
import ComponentMain from "./course-5/ComponentMain";

function App() {
  const routers = [
    { name: "project-1: Profile Card", component: ProfileCardMain },
    { name: "project-2: Animal Show", component: AnimalShowMain },
    { name: "project-3: Image Searcher", component: ImageSearcherMain },
    { name: "project-4: Books library - Context & Hooks", component: BookMain },
    { name: "project-5: Variant components", component: ComponentMain },
  ];
  return (
    <>
      <div className="container">
        <div className="section">
          <h1>React courses</h1>
          <Router>
            <nav>
              {routers.map((course, index) => (
                <li key={index}>
                  <Link to={`project-${index + 1}`}>{course.name}</Link>
                </li>
              ))}
              <hr />

              <Switch>
                <Route exact path="/" component={ProfileCardMain}>
                  1
                </Route>
                {routers.map((course, index) => (
                  <Route
                    key={index}
                    path={`/project-${index + 1}`}
                    component={course.component}
                  ></Route>
                ))}
              </Switch>
            </nav>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
