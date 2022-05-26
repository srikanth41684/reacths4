import React from "react";


const Student = () => {
    return(
        <div>
            <div className="student-header">
                <h1>Student Details..</h1>
                <button>Add New Student</button>
            </div>
            <table className="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th scope="col">S.No..</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Batch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>MERN</td>
                    <td>EA-10 &emsp;&emsp; <a href="#" >Link</a></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>MERN</td>
                    <td>EA-10 &emsp;&emsp; <a href="#" >Link</a></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>MERN</td>
                    <td>EA-10 &emsp;&emsp; <a href="#" >Link</a></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Larry</td>
                    <td>twitter</td>
                    <td>MERN</td>
                    <td>EA-10 &emsp;&emsp; <a href="#" >Link</a></td>
                  </tr>
                </tbody>
              </table>
        </div>
    );
}

export default Student;