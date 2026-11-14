import styles from "./devBadge.module.scss";

// Small corner label so it's always obvious the site runs in dev
export default function DevBadge() {
  return (
    <div className={styles.badge} role="status">
      DEV
    </div>
  );
}
