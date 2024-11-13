import Navbar from "../../comps/Navbar";
import "../meet-the-team/meet-the-team.css";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Shivank Valiya",
      role: "Project Manager",
      image: "", // Replace with the team member's image URL
    },
    {
      name: "Alex Amadeo-Ranch",
      role: "Executive Assistant",
      image: "", // Replace with the team member's image URL
    },
    // Add more members as needed
  ];

  const roles = [
    "Executive",
    "Avionics",
    "Communications",
    "Power",
    "Structures",
    "Dev Ops",
    "Systems",
  ];

  return (
    <>
      <Navbar />
      <div className="our-mission-container">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            At UCI CubeSat, we are developing, testing, and launching Ant01, a
            2U CubeSat, into Low Earth Orbit (LEO) to conduct groundbreaking
            research. Our mission focuses on testing the Variable Emissivity
            Device (VED), a cutting-edge technology for cost-effective
            spacecraft thermal regulation.
          </p>
          <p>
            By evaluating Ant01’s performance in orbit, we gather critical data
            that will drive future innovations in microsatellite design and
            performance.
          </p>
        </div>
        <div className="mission-image">
          {/* Replace with an image URL or use a placeholder */}
          <img src="/placeholder.png" alt="Mission Placeholder" />
        </div>
      </div>
      <title>CubeSat - Meet the Team</title>
      <div className="meet-the-team-container">
        <div className="header">
          <h1>
            Meet <span className="highlight">Our Team.</span>
          </h1>
          <p>
            A driven set of undergraduates backed by industry leaders such as
            Northrop Grumman and General Motors.
          </p>
        </div>
        <div className="roles-navigation">
          {roles.map((role, index) => (
            <a
              key={index}
              href={`#${role.toLowerCase()}`}
              className={index === 0 ? "active" : ""}
            >
              {role}
            </a>
          ))}
        </div>
        `
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-photo">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div>Placeholder</div>
                )}
              </div>
              <div className="member-info">
                <h3>{member.role}</h3>
                <a href={`#${member.name.replace(" ", "-").toLowerCase()}`}>
                  {member.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
