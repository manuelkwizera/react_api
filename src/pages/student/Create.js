import { useState } from "react"

function StudentCreate(){
    const[student, setStudents] =  useState({
        name: '',
        course: '',
        age: '',
        score: ''
    })

    const handleInput = (event) => {
        event.persist();
        setStudents({...student, [event.terget.name]: event.target.value});
    }

    return(
            <div className="content-wrapper mt-3">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            {/* <div className="col-sm-6">
                                <h4>Add Student</h4>
                            </div> */}
                        </div>
                    </div>
                </section>
                
                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Add Student</h3>
                                <div className="card-tools">
                                    <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        >
                                    <i className="fas fa-minus" />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="remove"
                                        >
                                    <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                    
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" name="name" className="form-control" id="" placeholder="Name" onChange={handleInput}></input>
                                    </div>
                                   
                                    <div className="col-md-6">
                                        <label for="course" className="form-label">Course</label>
                                        <input type="text" name="course" className="form-control" id="" placeholder="Course"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="age" className="form-label">Age</label>
                                        <input type="number" name="age" className="form-control" id="" placeholder="Name"></input>
                                    </div>
                                   
                                    <div className="col-md-6">
                                        <label for="score" className="form-label">Score</label>
                                        <input type="number" name="score" className="form-control" id="" placeholder="Course"></input>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <button className="btn btn-warning">Submit</button>
                                        <button className="btn btn-secondary" style={{margin: "5px"}}>Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                </section>
            </div>       
    )
}

export default StudentCreate