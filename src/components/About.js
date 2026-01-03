import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center">
              <img
                src="/images/hemant.jpg"  // 🖼️ image should be in public/images/
                alt="Hemant Tarde"
                className="rounded-circle mb-3"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  border: "4px solid #0d6efd"
                }}
              />
              <h3 className="card-title">Hemant Tarde</h3>
              <h5 className="text-secondary mb-3">Full Stack Developer</h5>
              <p className="mb-2">
                <strong>From:</strong> Dondaicha, Maharashtra
              </p>
              <p>
                I'm a dedicated developer passionate about building full stack web applications.
                Skilled in <strong>React, Node.js, MongoDB, HTML, CSS, JavaScript</strong>, I enjoy solving real-world problems
                through clean and efficient code. Always ready to learn and take on new challenges.
              </p>
              <hr />
              <h6 className="text-primary">Skills & Technologies</h6>
              <div className="d-flex justify-content-center flex-wrap gap-2 mt-2">
                <span className="badge bg-primary">React</span>
                <span className="badge bg-success">Node.js</span>
                <span className="badge bg-info text-dark">MongoDB</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-warning text-dark">HTML</span>
                <span className="badge bg-danger">CSS</span>
              </div>
              <hr />
              <p className="text-muted mt-3">“Code is like humor. When you have to explain it, it’s bad.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
