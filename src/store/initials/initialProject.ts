import { Project, Role } from "../../types/Interface";

const initialProject: Project = {
  projectName: "",
  projectId: "",
  estimatedBy: "",
  estimationDate: "",
  verifiedBy: "",
  verificationDate: "",
  estStart: "",
  estEns: "",
  teamSize: 0,
  timeBudget: 0,
  effort: 0,
  sections: [
    {
      sectionId: Role.FD,
      name: "Frontend development",
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
      tasks: [],
    },
    {
      sectionId: Role.BD,
      name: "Backend development",
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
      tasks: [],
    },
    {
      sectionId: Role.MD,
      name: "Mobile development",
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
      tasks: [],
    },
    {
      sectionId: Role.UD,
      name: "Design / UX / UI",
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
      tasks: [],
    },
    {
      sectionId: Role.DO,
      name: "Configuration / Setup / Deployment",
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
      tasks: [],
    },
  ],
  rawDevelopmentEffortSum: {
    name: "Raw development effort sum",
    main: {
      minMd: 0,
      minMdFormula: "",
      maxMd: 0,
      maxMdFormula: "",
      predictedMd: 0,
      predictedMdFormula: "",
      risk: 0,
      riskFormula: "",
    },
    parts: [
      {
        name: "Tests and fixes overhead",
        procent: 0,
        role: "QA",
        minMd: 0,
        minMdFormula: "",
        maxMd: 0,
        maxMdFormula: "",
        predictedMd: 0,
        predictedMdFormula: "",
      },
      {
        name: "Communication and management",
        procent: 0,
        role: "PM",
        minMd: 0,
        minMdFormula: "",
        maxMd: 0,
        maxMdFormula: "",
        predictedMd: 0,
        predictedMdFormula: "",
      },
      {
        name: "Other risks (i.e. fixed price)",
        procent: 0,
        role: "",
        minMd: 0,
        minMdFormula: "",
        maxMd: 0,
        maxMdFormula: "",
        predictedMd: 0,
        predictedMdFormula: "",
      },
    ]
  },
  summary: [],
  assumptions: [],
};

export default initialProject;
