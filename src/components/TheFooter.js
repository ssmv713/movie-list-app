import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    this.el.innerHTML = `
    <div>
     <a href="https://github.com/ssmv713/movie-list-app.git">
      GitHub Respository
     </a>
    </div>
    <div>
     <a href="https://github.com/ssmv713/">
      ${new Date().getFullYear()}
      SIMMY
     </a>
    </div>
    `;
  }
}
