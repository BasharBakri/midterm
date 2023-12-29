import { json } from "react-router-dom";

export const resetCurrentDay = async ({ request, params }) => {
  const newDayData = {
    day: "Monday",
    isOpen: false,
    tasks: [],
    dayFeedBack: [],
    taskFeedBack: [],
    employees: [
      {
        name: "Blake",
        checkedIn: false,
        employeeId: "1",
        time: "",
        image:
          "https://cdn.arstechnica.net/wp-content/uploads/2015/02/sr-avatar-friendlychemist.png",
      },
      {
        name: "Lucy",
        checkedIn: false,
        employeeId: "2",
        time: "",
        image:
          "https://cdn.arstechnica.net/wp-content/uploads/2015/02/sr-avatar-reallucydrop.png",
      },
      {
        name: "Red",
        checkedIn: false,
        employeeId: "3",
        time: "",
        image:
          "https://cdn.arstechnica.net/wp-content/uploads/2015/02/sr-avatar-redandwhite.png",
      },
      {
        name: "Robert",
        checkedIn: false,
        employeeId: "4",
        time: "",
        image:
          "https://cdn.arstechnica.net/wp-content/uploads/2015/02/sr-avatar-dreadpirate.png",
      },
    ],
    id: "7",
  };

  const response = await fetch(
    `https://658dac0d7c48dce947399400.mockapi.io/days/4`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newDayData),
    }
  );
  console.log(response);
  if (!response.ok) {
    throw json({ message: "Could not reset the day" }, { status: 400 });
  }
};
