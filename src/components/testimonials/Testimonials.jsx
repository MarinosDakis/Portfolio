// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Christine Salboudis",
      title: "CEO of Philo4Thought",
      img: "chris_salboudis_headshot.png",
      icon: "assets/temp.png",
      desc: "\"Time and again Marinos demonstrated his ability to excel independently, as part of a team and as a project leader. His dedication to ensuring that all work was on-point, met the complex requirements of his technical project and was completed on a tight deadline impressed several of our extended network as well. All in all, Marinos is a great asset to any organization to which he belongs and has my team's strongest recommendation as a one-of-a-kind STEM professional.\"",
      featured: true,
    },
    {
      id: 2,
      name: "Charbel Rizk",
      title: "Product Owner Capgemini",
      img: "charbel_rizk_headshot.jpg",
      icon: "assets/temp.png",
      desc: "\"I had the pleasure of working with Marinos over the past year at Capgemini. Marinos is a great asset within our team, as well as the other teams we closely work with. His dedication for completing tasks efficiently and effectively has ensured that projects for our client have been delivered successfully, and prior to deadlines. During the year, I've not only seen him excel as a full-stack developer, but also as a team member others like to work with.\"",
    },
    {
      id: 3,
      name: "Loucia Nearchou",
      title: "CEO of L.Nearchou & Associates Ltd.",
      img: "loucia_nearchou_headshot.jpg",
      icon: "assets/temp.png",
      desc: "\"I highly recommend Marinos for a position in the IT field. During their internship with our company, Marinos consistently demonstrated their strong technical skills and ability to learn quickly. They were able to handle tasks independently and also worked well in a team environment.\"",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}