const ListOfHobbies = [   
  {id: 1, text: "Web Development: My current interest in programming, specifically in web development. I am currently learning frameworks/libraries like ReactJS."},  
  {id: 2, text: "Visual Design: I am also currently interested in video editing and other visual design like Canva, creating visual presentations for Amazing Hope—Tala Campus."},
  {id: 3, text: "Music: I also actively serve as a percussionist (drummer) for worship services, collaborating with the music team to support structured and timely musical execution. Additionally, I am also trying to learn how to play the guitar."},
  {id: 4, text: "Board Games: I am also an avid chess player that likes to learn how to effectively win with known strategies by studying games."}
];

const Hobbies = (props) => {
  return (
    <section id="hobbies" className="section hobbies">
      <h2 className="sectionHeader">Hobbies</h2>
      <div className="content-wrapper">
        <ul>
          {ListOfHobbies.map((hobby) => (
            <li key={hobby.id}>{hobby.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hobbies;