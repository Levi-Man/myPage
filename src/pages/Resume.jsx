import '../components/style/Resume.css';

export default function Resume() {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <div className="d-flex">
        {/* Adjust the width attribute to control the width of the embedded PDF */}
        <embed src="/Indra Levi Manahan.pdf" type="application/pdf" width="1024px" height="600px" />
      </div>
      <a href={'/Indra Levi Manahan.pdf'} download>
        Download Resume
      </a>
    </div>
  );
}
