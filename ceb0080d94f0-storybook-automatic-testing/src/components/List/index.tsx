import * as React from "react";
import styles from "./styles.module.css";
import cx from "clsx";
import ListItem from "../ListItem";

interface ItemProps {
  id: string;
  label: string;
  emoji?: string;
  done?: boolean;
}

interface Props {
  items: ItemProps[];
  className?: string;
  onClick?: (id: string) => void;
}

function List(props: Props) {
  const { items, className, onClick } = props;

  // Render

  return (
    <ul className={cx(styles.container, className)}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          className={styles.item}
          id={item.id}
          emoji={item.emoji}
          label={item.label}
          done={item.done}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default React.memo(List);
