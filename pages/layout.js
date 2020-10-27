import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://localhost:4000/posts");
    const json = await res.json();

    return {
      post: json,
    };
  }
  render() {
    return (
      <>
        <Link href="/postdata">
          <a className={styles.customLink}>Posts</a>
        </Link>
        <Link href="/">
          <a className={styles.customLink}>Home</a>
        </Link>
        <div>
          {this.props.post.map((item, index) => (
            <div className={styles.container} key={index}>
              <h3>{item.id}</h3>
              <h2>{item.title}</h2>
              <h1>{item.text}</h1>
              <h1>{item.date}</h1>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Page;
