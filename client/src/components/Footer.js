import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
const FooterComponent = () => {
  return (
    <div className="mainFooterDiv">
      <p className="glitch">
        <span aria-hidden="true">CROWDLAB</span>
        CROWDLAB
        <span aria-hidden="true">CROWDLAB</span>
      </p>
      <h1 style={{ marginTop: "-0.7%", fontSize: "2.5rem" }}>Made By</h1>

      <p style={{ fontSize: "2rem" }}>
        <a style={{ textDecoration: "none" }} href="https://github.com/JymxB28">
          <span
            style={{ color: "black", background: "#B2F9FC", cursor: "pointer" }}
          >
            @Mrunal{" "}
          </span>
        </a>
        ,
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/aakumar2208"
        >
          <span
            style={{ color: "black", background: "#B2F9FC", cursor: "pointer" }}
          >
            @Ashna{" "}
          </span>
        </a>{" "}
        &
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/sohan2410"
        >
          {" "}
          <span
            style={{ color: "black", background: "#B2F9FC", cursor: "pointer" }}
          >
            @Sohan{" "}
          </span>
        </a>
      </p>
      <a
        href="https://github.com/sohan2410/quadratic-crowd-funding"
        style={{ textDecoration: "none", color: "black", marginTop: "2%" }}
      >
        <GitHubIcon style={{ fontSize: "3rem" }} />
      </a>
    </div>
  );
};

export default FooterComponent;
