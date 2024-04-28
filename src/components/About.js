function About({ image = "https://via.placeholder.com/215Links", text }) {
  return (
    <aside>
      <img src={image} alt="blogo-logo" />
      <p>{text}</p>
    </aside>
  );
}

export default About;