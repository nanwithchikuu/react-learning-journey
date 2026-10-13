import styles from "./Containers.module.css";

const Containers = (props) => {
  return <div className={styles.container}>{props.children}</div>
}
export default Containers;
