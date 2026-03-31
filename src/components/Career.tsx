import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst</h4>
                <h5>Oceanside Hotel Ventures LLC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Since Jun 2025, driving financial reporting, PO lifecycle
              management, and data-driven insights using SAP and Power BI to
              support business operations and decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst Intern</h4>
                <h5>IntelTek Inc</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              From Oct 2024 to Jun 2025, analyzed business processes, conducted
              stakeholder meetings, and supported strategic improvements through
              structured reporting and operational analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Administrator</h4>
                <h5>Radhika Shtam, Inc.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              From Sep 2024 to Dec 2024, managed databases, ensured data
              integrity, and generated cross-departmental reports to improve
              information quality and decision support across teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Computer Science</h4>
                <h5>California State University San Marcos</h5>
              </div>
              <h3>2021-24</h3>
            </div>
            <p>
              Focused on machine learning, data science, database systems,
              full-stack software engineering, and cloud-native development
              with tools including Python, React, Node.js, SQL, MongoDB, AWS,
              Docker, Git, and Jenkins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
