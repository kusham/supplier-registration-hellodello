import image1 from "../../Resources/Images/6.png";
import image2 from "../../Resources/Images/7.png";
import image3 from "../../Resources/Images/8.png";
import image4 from "../../Resources/Images/9.png";

export const questions = [
  {
    id: 1,
    title: "Welcome to HELLODELLO",
    label: "Email:",
    placeholder: "Your email",
    InputName: "email",
    image: image1,
    icon: <i className="fa-solid fa-at"></i>,
    required: true,
    description:
      "You won't be able to make submission using already used email. Applications are open to all fashion students, those who make jewelry, design clothes and study millinery.",
    prevId: null,
    nextId: 2,
  },

  {
    id: 2,
    title: "Name of You",
    label: "Designer name:",
    placeholder: "Enter Your full name",
    InputName: "designerName",
    image: image2,
    icon: null,
    required: true,
    description: "Please enter your full name. Not name with initials.",
    prevId: 1,
    nextId: 3,
  },

  {
    id: 3,
    title: "Date of your birth",
    label: "DoB:",
    placeholder: "Select Date",
    InputName: "dob",
    image: image3,
    icon: <i className="fa fa-calendar-days"></i>,
    required: true,
    description: "Your actual date of birth, mention here.",
    prevId: 2,
    nextId: 4,
  },
  {
    id: 4,
    title: "Current permanent Address",
    label: "Address:",
    placeholder: "Enter Address",
    InputName: "address",
    image: image4,
    icon: null,
    required: true,
    description:
      "Please mention the address of your residence. Please add the currently located one.",
    prevId: 3,
    nextId: 5,
  },
  {
    id: 5,
    title: "Educational Qualification",
    label: "College:",
    placeholder: "College name",
    InputName: "college",
    image: image1,
    icon: null,
    required: false,
    description:
      "If you are currently a student add your college name or the college that you went to.",
    prevId: 4,
    nextId: 6,
  },
  {
    id: 6,
    title: "Educational Qualification",
    label: "Followed courses:",
    placeholder: "Enter course name",
    InputName: "course",
    image: image2,
    icon: null,
    required: false,
    description:
      "We like know about your educational qualification. So Please mention true details here with time period.",
    prevId: 5,
    nextId: 7,
  },
  {
    id: 7,
    title: "Contact Number",
    label: "phone:",
    placeholder: "Enter Contact Number",
    InputName: "contactNumber",
    image: image3,
    icon: <i className="fa fa-phone-volume"></i>,
    required: true,
    description: "Please make sure to add a working phone number.",
    prevId: 6,
    nextId: 8,
  },
  {
    id: 8,
    title: "Your Achievements",
    label: "Achievements:",
    placeholder: "Enter your Achievement",
    InputName: "achievements",
    image: image4,
    icon: null,
    required: false,
    description:
      "Please be kind enough to mention your true achievements in the industry to date.",
    prevId: 7,
    nextId: 9,
  },
  {
    id: 9,
    title: "Your Resume",
    label: "CV:",
    placeholder: "Upload the CV",
    InputName: "resume",
    image: image1,
    icon: null,
    required: true,
    description:
      "Upload your well prepared resume. We will go through that and get back to you.",
    prevId: 8,
    nextId: 10,
  },
  {
    id: 10,
    title: "Additional info",
    label: "Attachments",
    placeholder: "Upload",
    InputName: "attachments",
    image: image2,
    icon: <i className="fa fa-file-powerpoint"></i>,
    required: false,
    description:
      "please include sketches, photographs, sizes and relevant information about your designs.",
    prevId: 9,
    nextId: null,
  },
];
