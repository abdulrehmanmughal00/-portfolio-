"use client";
import Account from "./components/Account";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Styles from "./page.module.css";
//! animation background
const particles = [
  { left: "8%", top: "12%", delay: "0s", duration: "5s", scale: 1 },
  { left: "18%", top: "35%", delay: "1s", duration: "7s", scale: 0.6 },
  { left: "28%", top: "18%", delay: "2s", duration: "6s", scale: 1.2 },
  { left: "38%", top: "70%", delay: "0.5s", duration: "8s", scale: 0.8 },
  { left: "48%", top: "25%", delay: "1.5s", duration: "5s", scale: 1 },
  { left: "58%", top: "60%", delay: "3s", duration: "7s", scale: 0.7 },
  { left: "68%", top: "15%", delay: "2.5s", duration: "6s", scale: 1.3 },
  { left: "78%", top: "40%", delay: "1s", duration: "8s", scale: 0.5 },
  { left: "88%", top: "75%", delay: "0s", duration: "6s", scale: 1 },
  { left: "95%", top: "20%", delay: "2s", duration: "7s", scale: 0.8 },
];
const page = () => {
  return (
    <>
      <section className={Styles.particleSection}>
        {/* background animation */}
        <div className={Styles.particles}>
          {particles.map((p, i) => (
            <span
              key={i}
              className={Styles.particle}
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
                transform: `scale(${p.scale})`,
              }}
            />
          ))}
        </div>
        {/* add anything you want  */}

        <Navbar />
        <Menu />
        <Home />
        <Account />
      </section>
    </>
  );
};

export default page;
