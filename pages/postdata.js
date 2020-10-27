import React, { useState } from "react";
import styles from "./form.module.css";
import Link from "next/link";

class Page extends React.Component {
  state = {
    title: "",
    email: "",
    text: "",
  };

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,

    });
  };

  handleChangeArea = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.postContainer}>
        <Link href="/layout">
          <a className={styles.customLink}>List</a>
        </Link>
        <Link href="/">
          <a className={styles.customLink}>Home</a>
        </Link>
        <div className={styles.form}>
          <form
            onSubmit={(e) => {
              let d = new Date();
              e.preventDefault(), console.log(this.state, d);
            }}
          >
            <input
              className={styles.input}
              onChange={this.handleChangeTitle}
              type="text"
              placeholder="Title"
            ></input>

            <input
              className={styles.input}
              onChange={this.handleChangeEmail}
              type="email"
              placeholder="Email"
            ></input>

            <textarea
              className={styles.textarea}
              onChange={this.handleChangeArea}
              name="textarea"
              placeholder="Text"
            ></textarea>

            <button className={styles.submit}> Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Page;
