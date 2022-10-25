import React from "react";

const Contact = () => {
  return (
    <section
      className="contact"
      style={{
        height: "50vh",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
      }}
    >
      <div
        className="contact__title"
        style={{
          //  the width will be at least 300px, but will be wider if the viewport is more than 100 * 10px = 1000px wide
          flex: "max(30vw, 300px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          paddingInline: "3rem",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", fontWeight: "normal" }} lang="fr">
          Ce&shy;paragraphe est&shy;défini en&shy;français
        </h2>
        <p style={{ fontSize: "1rem", color: "gray" }} contenteditable="true">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          tempore unde reiciendis doloribus ipsum magni eius eos placeat
          eveniet, alias quisquam exercitationem fugit, inventore provident
          similique repellendus odit debitis.
        </p>
      </div>
      <div
        className="contact__forum"
        style={{
          //  the width will be at least 300px, but will be wider if the viewport is more than 100 * 10px = 1000px wide
          flex: "max(30vw, 300px)",
          height: "80%",
          paddingInline: "3rem",
        }}
      >
        <form
          action=""
          method="post"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexFlow: "row wrap",
            gap: "0.5rem",
          }}
        >
          <input
            className="ali"
            style={{
              flex: "clamp(150px, 20vw, 300px)",
              height: "2.5rem",
              paddingInlineStart: "1rem",
              borderRadius: "10px",
              border: "unset",
              backgroundColor: "lightgray",
            }}
            type="text"
            placeholder="First Name"
          />
          <input
            className="ali"
            style={{
              flex: "clamp(150px, 20vw, 300px)",
              height: "2.5rem",
              paddingInlineStart: "1rem",
              borderRadius: "10px",
              border: "unset",
              backgroundColor: "lightgray",
            }}
            type="text"
            placeholder="Last Name"
          />
          <button
            className="ali"
            style={{
              flex: "clamp(150px, 20vw, 300px)",
              height: "2.5rem",
              paddingInlineStart: "1rem",
              borderRadius: "10px",
              border: "unset",
              backgroundColor: "lightgray",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
