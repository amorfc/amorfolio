export interface SkillType {
  key: string;
  displayName: string;
  imgPublicUrl?: string;
}

export const Skills: { [x: string]: SkillType } = {
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
  ReduxToolKitQuery: {
    key: "ReduxToolKitQuery",
    displayName: "Redux Toolkit Query",
    imgPublicUrl: "/img/redux-toolkit-query.png",
  },
  Next: {
    key: "Next",
    displayName: "Next.js",
    imgPublicUrl: "/img/next.png",
  },
  Node: {
    key: "Node",
    displayName: "Node.js",
    imgPublicUrl: "/img/node.png",
  },
};
