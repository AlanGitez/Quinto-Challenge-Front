import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Courses(){
    const [courses, setCourses] = useState([]);
    const BASE_API_URL = "http://localhost:8081/courses"

    useEffect(() => {
      fetch(BASE_API_URL + '/all')
        .then(response => response.json())
        .then(data => !data?.error && setCourses(data?.entity));
    }, []);

    const handleDelete = (courseId) => {
      fetch(BASE_API_URL + `/${courseId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {

          // Actualizamos el estado de users para reflejar el cambio
          setCourses(courses.filter(course => course.id !== courseId));
          console.log(data);
        });
    };

    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
        <div className='container'>
          <div className="d-flex justify-content-start mb-2">
            <Link className="btn btn-primary" to={"/courses/add"}>ADD</Link>
          </div>
            <table class="table table-hover table-dark w-75">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Schedule</th>
                <th scope="col">Professor</th>
            </tr>
            </thead>
            <tbody>
            {
                courses.map((course , i) => {
                    const professor = course?.professor;
                    console.log(professor)
                    return (
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{course?.name}</td>
                            <td>{course?.schedule}</td>
                            <td>{professor?.name}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(course.id)}>
                                Delete
                              </button>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
            </table>
      </div>
    </div>
    );
}