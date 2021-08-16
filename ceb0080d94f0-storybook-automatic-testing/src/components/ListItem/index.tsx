import * as React from "react";
import styles from "./styles.module.css";
import cx from "clsx";

interface Props {
  id: string;
  label: string;
  emoji?: string;
  done?: boolean;
  className?: string;
  onClick?: (id: string) => void;
}

function ListItem(props: Props) {
  const { id, emoji, label, done, className, onClick } = props;

  // Callbacks

  const handleClick = React.useCallback(() => {
    onClick?.(id);
  }, [id, onClick]);

  // Render

  return (
    <li className={cx(styles.container, { [styles.done]: done }, className)} onClick={handleClick} role="button">
      {Boolean(emoji) && <span className={styles.emoji}>{emoji}</span>}
      <span className={styles.label}>{label}</span>
    </li>
  );
}

export default React.memo(ListItem);
