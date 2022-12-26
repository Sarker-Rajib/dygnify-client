import React, { useEffect, useState } from "react";
import ApplicationDisplayCard from "../../Components/applicationDisplayCard/ApplicationDisplayCard";

const AllApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/applications`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      });
  }, []);

  console.log(applications);

  return (
    <div className="container py-3">
      <h3 className="pb-3">All Applications</h3>
      <p>Total Applications {applications?.length}</p>

      {applications?.map((app, i) => (
        <ApplicationDisplayCard key={i} index={i + 1} application={app} />
      ))}
    </div>
  );
};

export default AllApplications;
