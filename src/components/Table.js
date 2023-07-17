import React from "react";


export default function Table({ data }) {
    
    console.log(data)
    console.log(data)

    return (
      <div className="d-flex align-items-center justify-content-center">
            <table class="table table-hover table-dark w-75 mt-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">DNI</th>
                <th scope="col">Role</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Alan</td>
                <td>Benitez</td>
                <td>12345678</td>
                <td>Professor</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Alan</td>
                <td>Benitez</td>
                <td>12345678</td>
                <td>Professor</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Pepe</td>
                <td>Peperulo</td>
                <td>12345678</td>
                <td>Student</td>
            </tr>
            </tbody>
        </table>
      </div>
    );
}