import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const highlights = [
  { value: "50+", label: "Specialist doctors available" },
  { value: "24/7", label: "Appointment support and guidance" },
  { value: "10k+", label: "Patients served with care" },
];

const specialties = [
  {
    title: "General Medicine",
    description:
      "Quick consultations for fever, fatigue, infections, and regular health concerns.",
  },
  {
    title: "Cardiology",
    description:
      "Heart care with experienced specialists for early diagnosis and ongoing treatment.",
  },
  {
    title: "Pediatrics",
    description:
      "Child-friendly care for routine checkups, vaccinations, and illness management.",
  },
  {
    title: "Dermatology",
    description:
      "Skin, hair, and allergy consultations with personalized treatment plans.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Register once and save your basic details for faster future bookings.",
  },
  {
    number: "02",
    title: "Choose a doctor",
    description:
      "Browse specialties and connect with the right doctor for your needs.",
  },
  {
    number: "03",
    title: "Book your slot",
    description:
      "Select a convenient time and manage appointments without waiting in queues.",
  },
];

const benefits = [
  "Simple booking experience for patients of all ages",
  "Verified doctors and trusted medical support",
  "Faster appointments with better schedule management",
  "One place for consultation planning and follow-ups",
];

const Home = () => {
  return (
    // Home Page starts here
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Smart healthcare, simpler appointments
          </span>
          <h1 className={styles.heroTitle}>
            Book trusted doctors in minutes and care for your family with
            confidence.
          </h1>
          <p className={styles.heroText}>
            Your Doctor Appointment System helps patients discover specialists,
            reserve consultation slots, and avoid long waiting lines with a
            smoother digital experience.
          </p>

          <div className={styles.heroActions}>
            <Link to="/registration" className={styles.primaryButton}>
              Book Appointment
            </Link>
            <Link to="/login" className={styles.secondaryButton}>
              Login
            </Link>
          </div>

          <div className={styles.statsGrid}>
            {highlights.map((item) => (
              <article key={item.label} className={styles.statCard}>
                <h2>{item.value}</h2>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageCard}>
            <img
              src="/Images/doctor3.jpg"
              alt="Doctor consulting with patient"
              className={styles.heroImage}
            />

            <div className={styles.floatingCardTop}>
              <span>Available today</span>
              <strong>12 consultation slots open</strong>
            </div>

            <div className={styles.floatingCardBottom}>
              <strong>Patient-first booking</strong>
              <p>
                Fast access to specialists with a calm, reliable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionTag}>Why choose us</span>
          <h2>Designed to make healthcare access easier</h2>
          <p>
            From first-time registration to confirmed appointments, every step
            is built to reduce stress and save time.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <img
              src="/Images/Online appointment booking icon.png"
              alt="Online booking"
              className={styles.featureImage}
            />
            <h3>Easy online booking</h3>
            <p>
              Schedule appointments quickly with a simple and guided booking
              process.
            </p>
          </article>

          <article className={styles.featureCard}>
            <img
              src="/Images/Confident team of medical professionals.png"
              alt="Expert doctors"
              className={styles.featureImage}
            />
            <h3>Expert medical support</h3>
            <p>
              Find qualified doctors across important specialties for better
              care decisions.
            </p>
          </article>

          <article className={styles.featureCard}>
            <img
              src="/Images/Time management essentials icon.png"
              alt="Time saving"
              className={styles.featureImage}
            />
            <h3>Save valuable time</h3>
            <p>
              Avoid crowded waiting rooms and manage consultations around your
              daily schedule.
            </p>
          </article>
        </div>
      </section>

      <section
        id="specialties"
        className={`${styles.section} ${styles.specialtySection}`}
      >
        <div className={styles.sectionHeading}>
          <span className={styles.sectionTag}>Specialties</span>
          <h2>Connect with the right doctor for every need</h2>
          <p>
            Explore a platform built to support both routine care and specialist
            consultations.
          </p>
        </div>

        <div className={styles.specialtyGrid}>
          {specialties.map((specialty) => (
            <article key={specialty.title} className={styles.specialtyCard}>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.processVisual}>
          <img
            src="/Images/doctor5.jpg"
            alt="Doctor smiling in clinic"
            className={styles.processImage}
          />
        </div>

        <div className={styles.processContent}>
          <span className={styles.sectionTag}>How it works</span>
          <h2>Get your appointment confirmed in three clear steps</h2>
          <div className={styles.stepsList}>
            {steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className={styles.trustContent}>
          <span className={styles.sectionTag}>Patient trust</span>
          <h2>Built for convenience, backed by care</h2>
          <p>
            The homepage experience is focused on clarity, trust, and action so
            patients can move from searching to booking without confusion.
          </p>

          <div className={styles.benefitList}>
            {benefits.map((benefit) => (
              <div key={benefit} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>+</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoPanel}>
          <h3>Care you can organize</h3>
          <p>
            Keep doctor discovery, patient onboarding, and appointment planning
            in one place with a more welcoming digital front door.
          </p>
          <Link to="/registration" className={styles.panelButton}>
            Create Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
