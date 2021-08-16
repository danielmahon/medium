import List from ".";
import * as React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/List",
};

export const Default = (): JSX.Element => {
  // Memos

  const items = React.useMemo(() => {
    return [
      { id: "apple", label: "Apple", emoji: "🍏" },
      { id: "banana", label: "Banana", emoji: "🍌" },
      { id: "orange", label: "Orange", emoji: "🍊", done: true },
      { id: "cherry", label: "Cherry", emoji: "🍒", done: true },
    ];
  }, []);

  // Render

  return <List items={items} onClick={action("onClick")} />;
};
