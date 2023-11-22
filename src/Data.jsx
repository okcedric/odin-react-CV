import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const defaultGeneralInfos = {
  name: "Alex Johnson",
  email: "alexjohnson@email.com",
  tel: "+123 456 7890",
};

const defaultEdXP = [
  {
    id: uuid(),
    school: "Springfield University",
    study: "Bachelor of Science in Computer Science",
    dateFrom: dayjs("09-01-2015"),
    dateTo: dayjs("06-01-2019"),
  },
  {
    id: uuid(),
    school: "Riverside Community College",
    study: "Associate Degree in Web Development",
    dateFrom: dayjs("09-01-2013"),
    dateTo: dayjs("06-01-2015"),
  },
];

const defaultProXP = [
  {
    id: uuid(),
    company: "TechSolutions Inc.",
    position: "Software Developer",
    responsabilities: [
      {id : uuid(), value : "Designing and implementing new software features"},
      {id : uuid(), value : "Collaborating with the product team to refine project scopes."},
      {id : uuid(), value : "Debugging and maintaining existing software applications."},
    ],
    dateFrom: dayjs("07-01-2019"),
    dateTo: dayjs(),
  },
  {
    id: uuid(),
    company: "CreativeWeb Agency",
    position: "Junior Web Developer",
    responsabilities: [
      {id : uuid(), value : "Developing and maintaining client websites."},
      {id : uuid(), value : "Assisting in the creation of user-friendly web interfaces."},
      {id : uuid(), value : "Testing websites across various browsers and devices."},
    ],
    date: ["July 2017", "June 2019"],
    dateFrom: dayjs("07-01-2017"),
    dateTo: dayjs("06-01-2019"),
  },
];

export  {defaultGeneralInfos, defaultEdXP ,defaultProXP };