import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
      <span><a href="http://coreui.io">Contact us</a> &copy; Terms and conditions </span>
        <span className="ml-auto">Terms and conditions <a href="http://coreui.io">Careers</a></span>
        <span className="ml-auto">Privacy Policy <a href="http://coreui.io">Our Blogs</a></span>
        <span><a href="http://coreui.io"><i className="fa fa-twitter"></i>Twitter</a></span>
        <span><a href="http://coreui.io"><i className="fa fa-instagram"></i>Instagram</a></span>
        <span><a href="http://coreui.io"><i className="fa fa-facebook"></i>Facebook</a></span>
        </footer>
    )
  }
}

export default Footer;
