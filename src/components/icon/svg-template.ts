const comments = `
// Auto-generated file created by svgr-cli source custom svg-template.ts
// Run pnpm icons:generate to update
// Do not edit
//This template result imports react but it is not necessary so it gives an error devops
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
`;

const template = (variables, { tpl }) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;
