import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Users(){
    const [users, setUsers] = useState([]);
    const BASE_API_URL = "http://localhost:8081/users"

    useEffect(() => {
      fetch(BASE_API_URL + '/all')
        .then(response => response.json())
        .then(data => !data?.error && setUsers(data?.entity));

    }, []);

    const handleDelete = (userId) => {
      fetch(BASE_API_URL + `/${userId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {

          // Actualizamos el estado de users para reflejar el cambio
          setUsers(users.filter(user => user.id !== userId));
          console.log(data);
        });
    };


    return (

    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className='container'>
        <div className="d-flex justify-content-start mb-2">
          <Link className="btn btn-primary" to={"/users/add"}>ADD</Link>
        </div>
        <table className="table table-hover table-dark w-75">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">DNI</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{user?.name}</td>
                  <td>{user?.lastname}</td>
                  <td>{user?.email}</td>
                  <td>{user?.dni}</td>
                  <td>{user?.role}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}