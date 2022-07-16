import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TableComponent from "./index";

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "username",
  },
  {
    Header: "Role",
    accessor: "roleName",
  },
];

const data = [
  {
    name: "Niklaus Mikaelson",
    username: "originalHybrid",
    roleName: "Admin",
  },
  {
    name: "Elijah Mikaelson",
    username: "theNobleOne",
    roleName: "Developer",
  },
  {
    name: "Rebekah Mikaelson",
    username: "theOriginalSister",
    roleName: "Designer",
  },
];

export default {
  title: "Design System/Switch",
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args} />
);

export const Switch = Template.bind({});

Switch.args = {
  columns: columns,
  large: true,
};
