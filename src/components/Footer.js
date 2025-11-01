export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-10">
      <div class="container">
        <div class="row text-center py-3">
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <a href="/">Home</a>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <a href="/catalog">Catalog</a>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-3">
            <a href="/contact">Contact</a>
          </div>
          {/* <div class="footer_profile">
            <ul>
              <li>
                <a href="">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div class="footer_copyright py-3">
          <p>© 2025 Manogna Sarees. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
