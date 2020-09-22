import React from 'react';

function HomePage(props) {
    return (
        <div className="app-body">
            <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>About Me</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <img src="/profile-pic.jpg" className="img-thumbnail img-responsive" alt="Bio Pic" />
                            </div>
                            <div className="col-md-8">
                                <p>
                                    UX/UI Designer with Optum. Lives in Colchester, CT. Singer/Rhthym gutiarist in
                                    Junro. Runs a recording studio called EOD Studios.
                                </p>

                                <ul className="list-group list-group-flush">
                                    <li>
                                        <strong>Email:</strong>
                                        <a href="mailto:gptdavenelson@gmail.com">gptdavenelson@gmail.com</a>
                                    </li>
                                    <li>
                                        <strong>Github:</strong>
                                        <a href="https://github.com/GPTdavenelson">Uconn Repo</a>
                                    </li>
                                    <li>
                                        <strong>Portfolio:</strong>
                                        <a href="www.behance.com/gptdavenelson">Behance</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/resume.pdf">
                                            My Resume
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{' '}
        </div>
    );
}
export default HomePage;
