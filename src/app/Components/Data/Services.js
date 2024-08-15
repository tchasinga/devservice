import { FaWebflow, FaComputer, FaDigitalOcean } from "react-icons/fa6";
import { AiFillAndroid, AiOutlineAntDesign } from "react-icons/ai";
import {
  MdDesignServices,
  MdModelTraining,
  MdOutlineAddAPhoto,
} from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { RiSeoLine } from "react-icons/ri";

const myDataobject = [
  {
    id: 1,
    myTitle: "Website Development",
    MyIcons: <FaWebflow />,
    Description:
      "We specialize in creating responsive, user-friendly, and visually appealing websites tailored to meet your business needs. Our team ensures that each site is optimized for performance and scalability.",
  },
  {
    id: 2,
    myTitle: "App Development Android & IOS",
    MyIcons: <AiFillAndroid />,
    Description:
      "Our app development services include creating both Android and iOS applications. We focus on delivering seamless user experiences with intuitive design and robust functionality",
  },
  {
    id: 3,
    myTitle: "Web applications",
    MyIcons: <FaComputer />,
    Description:
      "We specialize for building a strong web application including both backend and frontend & database",
  },
  {
    id: 4,
    myTitle: "UI design",
    MyIcons: <MdDesignServices />,
    Description:
      "Functional UI design focuses on creating user interfaces that are intuitive and efficient, ensuring that users can easily accomplish their tasks. It emphasizes usability, clarity, and responsiveness. The design aims to provide a seamless and enjoyable user experience while maintaining aesthetic appeal.",
  },
  {
    id: 5,
    myTitle: "Digital Marketing and Branding",
    MyIcons: <FaDigitalOcean />,
    Description:
      "Our digital marketing team provides comprehensive strategies to enhance your online presence. We offer services such as social media management, email marketing, content creation, and online advertising to boost your brands visibility and engagement.",
  },
  {
    id: 6,
    myTitle: " Brand Design",
    MyIcons: <AiOutlineAntDesign />,
    Description:
      "We help businesses establish a strong and recognizable brand identity. Our services include logo design, brand guidelines, and visual branding to ensure consistency across all platforms.",
  },
  {
    id: 7,
    myTitle: "Professional Training",
    MyIcons: <MdModelTraining />,
    Description:
      "We offer training programs designed to equip your team with the necessary skills and knowledge to excel in their roles. Our training covers various areas including digital marketing, web development, and software usage.",
  },
  {
    id: 8,
    myTitle: "POS System - Software and Hardware",
    MyIcons: <GrCloudSoftware />,
    Description:
      "Our Point of Sale (POS) solutions include both software and hardware components tailored to streamline your business operations. We provide installation, training, and ongoing support to ensure efficient transaction management",
  },
  {
    id: 9,
    myTitle: "SEO Services",
    MyIcons: <RiSeoLine />,
    Description:
      "Our SEO experts use the latest techniques to improve your website search engine ranking. We offer comprehensive SEO services including keyword research, on-page optimization, link building, and performance tracking to increase your online visibility",
  },
  {
    id: 10,
    myTitle: "Photo editing",
    MyIcons: <MdOutlineAddAPhoto />,
    Description:
      "We providing a professional photo for your business and marketing purposes. Our team ensures that each photo is optimized for performance and scalability.",
  },
];

export default myDataobject;
