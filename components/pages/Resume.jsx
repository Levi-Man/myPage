export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className="d-flex justify-content-center">
        {/* Adjust the width attribute to control the width of the embedded PDF */}
        <embed src="../assets/Indra Levi Manahan.pdf" type="application/pdf" width="1024px" height="600px" />
      </div>
      <a href={'../assets/Indra Levi Manahan.pdf'} download='../assets/Indra Levi Manahan.pdf'>
        Download Resume
      </a>
    </div>
  );
}
