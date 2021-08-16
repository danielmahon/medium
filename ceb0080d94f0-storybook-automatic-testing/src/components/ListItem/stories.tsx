import ListItem from ".";
import * as React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ListItem",
};

interface Props {
  emoji?: string;
  done?: boolean;
}

export const Default = (props: Props): JSX.Element => {
  // Render

  return <ListItem id="id" label="Label" onClick={action("onClick")} {...props} />;
};

export const WithEmoji = (): JSX.Element => {
  // Render

  return <Default emoji="🤩" />;
};

export const Done = (): JSX.Element => {
  // Render

  return <Default emoji="🤩" done />;
};
