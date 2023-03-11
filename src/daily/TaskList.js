import SingleTask from "./SingleTask";
import { useRouteLoaderData } from "react-router-dom";
import { useRevalidator } from "react-router-dom";
import { useEffect } from "react";
function TaskList() {
  const info = useRouteLoaderData('root');
  const tasks = info.tasks
  const revalidator = useRevalidator();


  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval is running');
      console.log(revalidator.state);
      if (revalidator.state === "idle") {
        revalidator.revalidate();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [revalidator]);




  return (<>


    <ul className="checkBoxContainer">
      <SingleTask tasks={tasks} />
    </ul>
  </>
  )
}

export default TaskList;