import React from 'react';
import Project from 'components/Project';
import { projects as PROJECT_DATA } from 'projects';
function Portfolio(props) {
    return (
        <div className="portfolio-body">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {PROJECT_DATA.map((project, index) => (
                        <div key={index} className="col mb-4 card-item">
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
