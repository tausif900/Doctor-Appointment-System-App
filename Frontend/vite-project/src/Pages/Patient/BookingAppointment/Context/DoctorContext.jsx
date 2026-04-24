import React, { useState } from "react";
import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctors = [
    {
      id: 1,
      name: "Dr. Raj Mehta",
      specialization: "Psychologist",
      experience: 12,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.6,
      totalReviews: 120,

      education: "PhD in Clinical Psychology, AIIMS Delhi",
      certificate: "Certified CBT Therapist, APA",

      availability: {
        days: "Monday - Saturday",
        slots: ["10:00 - 12:00", "14:00 - 20:00"],
        modes: ["Online Consultation", "Offline at Apollo Hospital, Delhi"],
      },

      symptoms: [
        "Anxiety",
        "Panic Attacks",
        "Stress",
        "Depression",
        "Sleep Disorders",
      ],

      procedures: [
        "Cognitive Behavioral Therapy (CBT)",
        "Family & Couples Therapy",
        "Supportive Psychotherapy",
        "Mindfulness-Based Stress Reduction (MBSR)",
      ],

      reviews: [
        {
          id: 1,
          name: "Amit Sharma",
          rating: 5,
          time: "2 days ago",
          comment:
            "Very calm and understanding doctor. Helped me a lot with anxiety.",
        },
        {
          id: 2,
          name: "Riya Verma",
          rating: 4,
          time: "1 week ago",
          comment: "Good sessions, felt improvement in stress management.",
        },
      ],
    },

    {
      id: 2,
      name: "Dr. Neha Sharma",
      specialization: "Dermatologist",
      experience: 8,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4.3,
      totalReviews: 90,

      education: "MBBS, MD - Dermatology",
      certificate: "Certified Skin Specialist",

      availability: {
        days: "Monday - Friday",
        slots: ["11:00 - 13:00", "16:00 - 19:00"],
        modes: ["Online Consultation", "Clinic Visit - Delhi"],
      },

      symptoms: ["Acne", "Skin Allergy", "Hair Fall"],

      procedures: ["Laser Treatment", "Skin Therapy"],

      reviews: [
        {
          id: 1,
          name: "Pooja Singh",
          rating: 5,
          time: "3 days ago",
          comment: "Best dermatologist I have visited.",
        },
      ],
    },

    {
      id: 3,
      name: "Dr. Arjun Patel",
      specialization: "Orthopedic",
      experience: 14,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4.5,
      totalReviews: 110,

      education: "MBBS, MS - Orthopedics",
      certificate: "Joint Replacement Specialist",

      availability: {
        days: "Monday - Saturday",
        slots: ["09:00 - 12:00", "17:00 - 20:00"],
        modes: ["Offline - Ahmedabad"],
      },

      symptoms: ["Joint Pain", "Fractures"],
      procedures: ["Knee Replacement", "Physiotherapy"],

      reviews: [
        {
          id: 1,
          name: "Rahul Shah",
          rating: 5,
          time: "5 days ago",
          comment: "Very experienced and helpful.",
        },
      ],
    },

    {
      id: 4,
      name: "Dr. Priya Nair",
      specialization: "Gynecologist",
      experience: 11,
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 4.7,
      totalReviews: 140,

      education: "MBBS, MD - Gynecology",
      certificate: "Women's Health Specialist",

      availability: {
        days: "Monday - Saturday",
        slots: ["10:00 - 14:00"],
        modes: ["Online + Clinic - Kochi"],
      },

      symptoms: ["Pregnancy Care", "PCOS"],
      procedures: ["Ultrasound", "Fertility Treatment"],

      reviews: [
        {
          id: 1,
          name: "Sneha Menon",
          rating: 5,
          time: "1 day ago",
          comment: "Very supportive doctor.",
        },
      ],
    },

    {
      id: 5,
      name: "Dr. Rohit Verma",
      specialization: "Neurologist",
      experience: 15,
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      rating: 4.4,
      totalReviews: 100,

      education: "MBBS, DM - Neurology",
      certificate: "Brain Specialist",

      availability: {
        days: "Tuesday - Sunday",
        slots: ["12:00 - 16:00"],
        modes: ["Lucknow Clinic"],
      },

      symptoms: ["Headache", "Migraine"],
      procedures: ["Brain Scan", "Therapy"],

      reviews: [
        {
          id: 1,
          name: "Vikas Singh",
          rating: 4,
          time: "2 days ago",
          comment: "Good diagnosis.",
        },
      ],
    },

    {
      id: 6,
      name: "Dr. Sneha Kapoor",
      specialization: "Dentist",
      experience: 7,
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      rating: 4.2,
      totalReviews: 80,

      education: "BDS, MDS",
      certificate: "Cosmetic Dentist",

      availability: {
        days: "Monday - Saturday",
        slots: ["10:00 - 18:00"],
        modes: ["Chandigarh Clinic"],
      },

      symptoms: ["Tooth Pain", "Cavity"],
      procedures: ["Root Canal", "Teeth Whitening"],

      reviews: [
        {
          id: 1,
          name: "Rohit Kumar",
          rating: 5,
          time: "3 days ago",
          comment: "Pain-free treatment!",
        },
      ],
    },

    {
      id: 7,
      name: "Dr. Vikram Singh",
      specialization: "General Physician",
      experience: 10,
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      rating: 4.3,
      totalReviews: 95,

      education: "MBBS, MD - Medicine",
      certificate: "General Health Specialist",

      availability: {
        days: "Monday - Friday",
        slots: ["09:00 - 13:00"],
        modes: ["Jaipur Clinic"],
      },

      symptoms: ["Fever", "Cold"],
      procedures: ["General Checkup"],

      reviews: [
        {
          id: 1,
          name: "Ankit Jain",
          rating: 4,
          time: "4 days ago",
          comment: "Good consultation.",
        },
      ],
    },

    {
      id: 8,
      name: "Dr. Anjali Gupta",
      specialization: "Pediatrician",
      experience: 12,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.6,
      totalReviews: 130,

      education: "MBBS, MD - Pediatrics",
      certificate: "Child Specialist",

      availability: {
        days: "Monday - Saturday",
        slots: ["10:00 - 15:00"],
        modes: ["Delhi Clinic"],
      },

      symptoms: ["Child Fever", "Growth Issues"],
      procedures: ["Vaccination"],

      reviews: [
        {
          id: 1,
          name: "Ritu Sharma",
          rating: 5,
          time: "2 days ago",
          comment: "Best for kids.",
        },
      ],
    },

    {
      id: 9,
      name: "Dr. Karan Malhotra",
      specialization: "Psychiatrist",
      experience: 13,
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4.5,
      totalReviews: 115,

      education: "MBBS, MD - Psychiatry",
      certificate: "Mental Health Expert",

      availability: {
        days: "Monday - Saturday",
        slots: ["11:00 - 17:00"],
        modes: ["Pune Clinic"],
      },

      symptoms: ["Depression", "Anxiety"],
      procedures: ["Therapy"],

      reviews: [
        {
          id: 1,
          name: "Sahil Khan",
          rating: 5,
          time: "1 day ago",
          comment: "Very helpful doctor.",
        },
      ],
    },

    {
      id: 10,
      name: "Dr. Pooja Reddy",
      specialization: "ENT Specialist",
      experience: 9,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4.4,
      totalReviews: 85,

      education: "MBBS, MS - ENT",
      certificate: "ENT Specialist",

      availability: {
        days: "Monday - Friday",
        slots: ["10:00 - 14:00"],
        modes: ["Hyderabad Clinic"],
      },

      symptoms: ["Ear Pain", "Throat Infection"],
      procedures: ["ENT Surgery"],

      reviews: [
        {
          id: 1,
          name: "Lakshmi Rao",
          rating: 4,
          time: "3 days ago",
          comment: "Good treatment.",
        },
      ],
    },
  ];
  return (
    <DoctorContext.Provider
      value={{ doctors, selectedDoctor, setSelectedDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
