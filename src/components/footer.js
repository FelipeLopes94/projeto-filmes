import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <p className="txt-footer">Copyright &copy; Felipe Lopes <a href="https://www.linkedin.com/in/lopes-felipe/"><img className="icon-footer" alt="linkedin felipe" src="https://img.icons8.com/doodle/64/000000/linkedin.png"></img></a>
          <a href="https://github.com/FelipeLopes94"> <img className="icon-footer" alt="github Felipe" src="https://img.icons8.com/doodle/48/000000/github--v2.png"></img></a></p>
        </div>
      </footer>
    );
  }
}
