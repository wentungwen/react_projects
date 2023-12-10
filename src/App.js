import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import "bulma/css/bulma.css";
import ProfileCardMain from "../src/course-1/ProfileCardMain";
import AnimalShowMain from "../src/course-2/AnimalShowMain";
import ImageSearcherMain from "../src/course-3/ImageSearcherMain";

function App() {
  const routers = [
    { name: "prac-1", component: ProfileCardMain },
    { name: "prac-2", component: AnimalShowMain },
    { name: "prac-3", component: ImageSearcherMain },
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
                  <Link to={`prac-${index + 1}`}>{course.name}</Link>
                </li>
              ))}
              <hr />

              <Switch>
                <Route exact path="/" component={ProfileCardMain}>1</Route>
                {routers.map((course, index) => (
                  <Route
                    key={index}
                    path={`/prac-${index + 1}`}
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
