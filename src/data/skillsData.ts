export interface SkillType {
  key: string;
  displayName: string;
  imgPublicUrl?: string;
}

type SkillKeys =
  | "JavaScript"
  | "TypeScript"
  | "HTMLCSS"
  | "React"
  | "ReactNative"
  | "Redux"
  | "ReduxToolkit"
  | "ReduxToolKitQuery"
  | "Angular"
  | "NextJS"
  | "NodeJS"
  | "ExpressJS"
  | "NestJS"
  | "Rust"
  | "Kotlin"
  | "Java"
  | "Python"
  | "Linux"
  | "UnixScripting"
  | "MongoDB"
  | "PostgreSQL"
  | "MySQL"
  | "OOP"
  | "FunctionalProgramming"
  | "RestAPI"
  | "GraphQL"
  | "Grpc"
  | "Docker"
  | "DockerCompose"
  | "AWS";

export const Skills: { [K in SkillKeys]: SkillType } = {
  JavaScript: {
    key: "JavaScript",
    displayName: "JavaScript",
    imgPublicUrl: "/img/js.png",
  },
  TypeScript: {
    key: "TypeScript",
    displayName: "TypeScript",
    imgPublicUrl: "/img/ts.png",
  },
  HTMLCSS: {
    key: "HTML/CSS",
    displayName: "HTML/CSS",
    imgPublicUrl: "/img/html.png",
  },
  React: {
    key: "React",
    displayName: "React",
    imgPublicUrl: "/img/react.png",
  },
  ReactNative: {
    key: "ReactNative",
    displayName: "React Native",
    imgPublicUrl: "/img/react-native.png",
  },
  Redux: {
    key: "Redux",
    displayName: "Redux",
    imgPublicUrl: "/img/redux.png",
  },
  ReduxToolkit: {
    key: "ReduxToolkit",
    displayName: "Redux Toolkit ",
    imgPublicUrl: "/img/redux.png",
  },
  ReduxToolKitQuery: {
    key: "ReduxToolkitQuery",
    displayName: "Redux Toolkit Query",
    imgPublicUrl: "/img/redux-toolkit-query.png",
  },
  Angular: {
    key: "Angular",
    displayName: "Angular",
    imgPublicUrl: "/img/angular.png",
  },
  NextJS: {
    key: "NextJS",
    displayName: "Next.js",
    imgPublicUrl: "/img/next.png",
  },
  NodeJS: {
    key: "NodeJS",
    displayName: "Node.js",
    imgPublicUrl: "/img/node.png",
  },
  ExpressJS: {
    key: "ExpressJS",
    displayName: "Express.js",
    imgPublicUrl: "/img/express.png",
  },
  NestJS: {
    key: "NestJS",
    displayName: "NestJS",
    imgPublicUrl: "/img/nestjs.png",
  },
  Rust: {
    key: "Rust",
    displayName: "Rust",
    imgPublicUrl: "/img/rust.png",
  },
  Kotlin: {
    key: "Kotlin",
    displayName: "Kotlin",
    imgPublicUrl: "/img/kotlin.png",
  },
  Java: {
    key: "Java",
    displayName: "Java",
    imgPublicUrl: "/img/java.png",
  },
  Python: {
    key: "Python",
    displayName: "Python",
    imgPublicUrl: "/img/python.png",
  },
  MongoDB: {
    key: "MongoDB",
    displayName: "MongoDB",
    imgPublicUrl: "/img/mongodb.png",
  },
  PostgreSQL: {
    key: "PostgreSQL",
    displayName: "PostgreSQL",
    imgPublicUrl: "/img/postgresql.png",
  },
  MySQL: {
    key: "MySQL",
    displayName: "MySQL",
    imgPublicUrl: "/img/mysql.png",
  },
  OOP: {
    key: "OOP",
    displayName: "OOP",
    imgPublicUrl: "/img/oop.png",
  },
  FunctionalProgramming: {
    key: "FunctionalProgramming",
    displayName: "Functional Programming",
    imgPublicUrl: "/img/functional-programming.png",
  },
  RestAPI: {
    key: "RestAPI",
    displayName: "REST API",
    imgPublicUrl: "/img/rest-api.png",
  },
  GraphQL: {
    key: "GraphQL",
    displayName: "GraphQL",
    imgPublicUrl: "/img/graphql.png",
  },
  Grpc: {
    key: "Grpc",
    displayName: "gRPC",
    imgPublicUrl: "/img/grpc.png",
  },
  Docker: {
    key: "Docker",
    displayName: "Docker",
    imgPublicUrl: "/img/docker.png",
  },
  DockerCompose: {
    key: "DockerCompose",
    displayName: "Docker Compose",
    imgPublicUrl: "/img/docker-compose.png",
  },
  AWS: {
    key: "AWS",
    displayName: "AWS",
    imgPublicUrl: "/img/aws.png",
  },
  Linux: {
    key: "Linux",
    displayName: "Linux",
    imgPublicUrl: "/img/linux.png",
  },
  UnixScripting: {
    key: "UnixScripting",
    displayName: "Unix Scripting",
    imgPublicUrl: "/img/unix.png",
  },
};

const primarySkills = [
  Skills.JavaScript,
  Skills.TypeScript,
  Skills.HTMLCSS,
  Skills.React,
  Skills.ReactNative,
  Skills.Redux,
  Skills.ReduxToolkit,
  Skills.ReduxToolKitQuery,
  Skills.NextJS,
  Skills.NodeJS,
  Skills.ExpressJS,
  Skills.NestJS,
  Skills.Rust,
  Skills.Kotlin,
  Skills.Java,
  Skills.Python,
];

export const displaySkillsList: {
  primary: SkillType[];
  secondary: SkillType[];
} = {
  primary: primarySkills,
  secondary: Object.values(Skills).filter(
    (skill) => !primarySkills.includes(skill)
  ),
};
