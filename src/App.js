import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import "bulma/css/bulma.css";
import ProfileCardMain from "../src/course-1/ProfileCardMain";
import AnimalShowMain from "../src/course-2/AnimalShowMain";

function App() {
  const courses = [
    { name: "prac-1", component: ProfileCardMain },
    { name: "prac-2", component: AnimalShowMain },
  ];
  return (
    <>
      <div className="container">
        <div className="section">
          <h1>React courses</h1>
          <Router>
            <nav>
              {courses.map((course, index) => (
                <li key={index}>
                  <Link to={`prac-${index + 1}`} activeClassName="active">
                    {course.name}
                  </Link>
                </li>
              ))}

              <Switch>
                <Route exact path="/" component={ProfileCardMain}></Route>
                {courses.map((course, index) => (
                  <Route
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
