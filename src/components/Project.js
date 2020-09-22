// React
import React from 'react';

const Project = ({ project, ...props }) => {
    return (
        <div className="card ">
            <img
                src={project.gif === '' ? project.img : project.gif}
                className="card-img-top project-image h-100 "
                alt="..."
            />
            <div className="card-body ">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="row justify-content-around">
                    <a href={project.demo} target="_blank" className=" col-12  btn btn-primary mb-1 ">
                        Live Preview
                    </a>
                    <a href={project.github} target="_blank" className="col-12 btn btn-primary btn-dark">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
