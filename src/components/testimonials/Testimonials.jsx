// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "",
          title: "",
          img:
            "assets/temp.png",
          icon: "assets/temp.png",
          desc:
            "",
        },
        {
          id: 2,
          name: "Christine Salboudis",
          title: "CEO of Philo4Thought",
          img:
            "https://www.philo4thought.org/wp-content/uploads/2020/09/Salboudis.png",
          icon: "assets/linkedin.png",
          desc:
            "\"Time and again Marinos demonstrated his ability to excel independently, as part of a team and as a project leader. His dedication to ensuring that all work was on-point, met the complex requirements of his technical project and was completed on a tight deadline impressed several of our extended network as well. All in all, Marinos is a great asset to any organization to which he belongs and has my team's strongest recommendation as a one-of-a-kind STEM professional.\"",
          featured: true,
        },
        {
            id: 3,
            name: "",
            title: "",
            img:
              "assets/temp.png",
            icon: "assets/temp.png",
            desc:
              "",
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