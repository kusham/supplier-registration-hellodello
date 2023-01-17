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
      "Add your personal email. You will get a submission email to that email. You won't be able to make submission using already used email.",
    prevId: null,
    nextId: 2,
  },

  {
    id: 2,
    title: "Name of Your brand",
    label: "Brand name:",
    placeholder: "Enter Your brand name",
    InputName: "brandName",
    image: image2,
    icon: null,
    required: true,
    description:
      "Your company brand name need to be a unique one. You won't be able to make two submission for same brand name.",
    prevId: 1,
    nextId: 3,
  },

  {
    id: 3,
    title: "Company Establishment",
    label: "Date of Establishment:",
    placeholder: "Select Date",
    InputName: "establishmentYear",
    image: image3,
    icon: <i className="fa fa-calendar-days"></i>,
    required: true,
    description:"Your actual company establishment year, mention here.",
    prevId: 2,
    nextId: 4,
  },
  {
    id: 4,
    title: "What do you sell?",
    label: "Product Category:",
    placeholder: "Select Category",
    InputName: "productCategory",
    image: image4,
    icon: <i className="fa fa-check-double"></i>,
    required: true,
    description:"What type of product you are willing to sell through our website ? Select that category from bellow list.",
    prevId: 3,
    nextId: 5,
  },
  {
    id: 5,
    title: "Your Website link",
    label: "Link:",
    placeholder: "website (if Available)",
    InputName: "websiteLink",
    image: image1,
    icon: <i className="fa fa-link"></i>,
    required: false,
    description:"If there is a website for your business please add url of your website.",
    prevId: 4,
    nextId: 6,
  },
  {
    id: 6,
    title: "Your Portfolio Size",
    label: "Size:",
    placeholder: "Enter Portfolio Size",
    InputName: "portfolioSize",
    image: image2,
    icon: null,
    required: true,
    description:"We like know about your portfolio size. Please mention that bellow clearly.",    prevId: 5,
    nextId: 7,
  },
  {
    id: 7,
    title: "Approximate Revenue per Month",
    label: "Your Revenue:",
    placeholder: "Enter your revenue",
    InputName: "approximateRevenue",
    image: image3,
    icon: <i className="fa fa-sack-dollar"></i>,
    required: true,
    description:"Please mention the approximate revenue per month of your business. No need an exact value.",
    prevId: 6,
    nextId: 8,
  },
  {
    id: 8,
    title: "Top Selling Products",
    label: "Links(optional):",
    placeholder: "Enter Links",
    InputName: "linksOfTopSellingProducts",
    image: image4,
    icon: <i className="fa fa-link"></i>,
    required: false,
    description:"Add urls for your top selling products. It will be help us to get an idea about your products.",
    prevId: 7,
    nextId: 9,
  },
  {
    id: 9,
    title: "Offline Channel Location",
    label: "Address:",
    placeholder: "Enter store address (if Available)",
    InputName: "physicalLocations",
    image: image1,
    icon: <i className="fa fa-location-dot"></i>,
    required: false,
    description:"If you have physically located in somewhere, please mention the address of the store.",
    prevId: 8,
    nextId: 10,
  },
  {
    id: 10,
    title: "Brand Presentation",
    label: "Presentation (if Available):",
    placeholder: "Choose file",
    InputName: "brandPresentation",
    image: image2,
    icon: <i className="fa fa-file-powerpoint"></i>,
    required: false,
    description:"You can add a presentation if you want to introduce your brand more.",
    prevId: 9,
    nextId: 11,
  },
  {
    id: 11,
    title: "Images of Your Store",
    label: "Images (if Available):",
    placeholder: "Choose files",
    InputName: "imagesOfStore",
    image: image3,
    icon: <i className="fa fa-image"></i>,
    required: false,
    description:"Upload some recently taken images of your store.",
    prevId: 10,
    nextId: 12,
  },
  {
    id: 12,
    title: "Name of Contact Person",
    label: "Full Name:",
    placeholder: "Enter Contact person's name",
    InputName: "contactPerson",
    image: image4,
    icon: <i className="fa fa-address-book"></i>,
    required: true,
    description:"Add the person name that we need to contact.",
    prevId: 11,
    nextId: 13,
  },
  {
    id: 13,
    title: "Contact Number",
    label: "Phone:",
    placeholder: "Enter Contact Number",
    InputName: "contactNumber",
    image: image1,
    icon: <i className="fa fa-phone-volume"></i>,
    required: true,
    description:"Please make sure to add a working phone number.",
    prevId: 12,
    nextId: 14,
  },
  {
    id: 14,
    title: "Your Message for Us",
    label: "Message:",
    placeholder: "Write Your message",
    InputName: "message",
    image: image2,
    icon: <i className="fa fa-message"></i>,
    required: false,
    description:"If you want to say something to our team, you can write anything bellow.",
    prevId: 13,
    nextId: null,
  },
];
