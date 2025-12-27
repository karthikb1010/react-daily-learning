import styles from "./Container.module.css";

const Container = ({ children }) => {
  //here we done destructuring,here in place of children first remove flower bracket and give props,and below in place of children write {props.children},, so both are same
  return <div className={styles.container}>{children}</div>;
};

export default Container;
