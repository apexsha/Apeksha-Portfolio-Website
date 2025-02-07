const Resume = () => {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>My Resume</h2>
        <a href="/resume.pdf" download="Apeksha_Hiregoudar_Resume.pdf">
          <button style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
            Download Resume (PDF)
          </button>
        </a>
      </div>
    );
  };
  
  export default Resume;
  