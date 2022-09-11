
import './assets/css/style.css';

function App() {
  return (
    <body>

  {/* <!-- Navbar --> */}
  <nav class="navbar navbar_di-buffala">
    <div class="container-fluid">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <p>VEXTA</p>
          {/* <!-- <img src="assets/img/logo.png" alt="Logo Di Buffala"> --> */}
        </a>
      </div>

      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right navbar__navigation">
          <li><a href="https://login-vexta.herokuapp.com/">Iniciar sesión</a></li>
          <li><a href="#">Características</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>{/* <!-- /.navbar-collapse --> */}

    </div>{/* <!-- /.container-fluid --> */}
  </nav>

  {/* <!-- Header --> */}
  <header class="container-fluid header_di-buffala">
    <h1>VEXTA</h1>
    <p>El futuro esta en tus manos. Usa biciletas y mantenlas seguras con nosotros</p>
    <a class="btn button_di-buffala" href="https://login-vexta.herokuapp.com/">Ingresar</a>
  </header>

  {/* <!-- Blog --> */}
  <section class="container-fluid blog">
    <div class="row">
      <div class="blog__inner col-md-6">
        <h3>Conecta con millones de personas para guardar tu bicicleta </h3>
        <p>No importa donde estes siempre podras encontrar alguien dispuesto a ayudarte</p>
        <a class="btn button_di-buffala" href="#">Ver más</a>
      </div>
      <div class="blog__inner blog__inner_background col-md-6"></div>
    </div>
  </section>

  {/* <!-- Features --> */}
  <section class="container-fluid features">
    <h1>Se parte de nuestra comunidad</h1>
    <h2>Encuentra  el mejor lugar al mejor precio</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.</p>
  </section>

  {/* <!-- Portfolio section --> */}
  <section class="container-fluid portfolio">
    <div class="row">
      <div class="portfolio__inner col-md-6">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.</p>
        <a class="btn button_di-buffala" href="#">Ver trabajo</a>
      </div>
      <div class="portfolio__inner portfolio__inner__image-top col-md-6"></div>

      <div class="portfolio__inner portfolio__inner__image-middle col-md-6"></div>
      <div class="portfolio__inner col-md-6">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.</p>
        <a class="btn button_di-buffala" href="#">Ver trabajo</a>
      </div>

      <div class="portfolio__inner col-md-6">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.</p>
        <a class="btn button_di-buffala" href="#">Ver trabajo</a>
      </div>
      <div class="portfolio__inner portfolio__inner__image-bottom col-md-6"></div>
      </div>
  </section>
{/* <!-- hola --> */}
{/*   <!-- Footer --> */}
  <footer class="footer_di-buffala">
    <small>VEXTA 2022. Todos los derechos reservados.</small>
  </footer>


{/*   <!-- jquery --> */}
  <script src="https://code.jquery.com/jquery-3.3.1.slim.js" integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA=" crossorigin="anonymous"></script>
  {/* <!-- Latest compiled and minified JavaScript --> */}
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  {/* <!-- Font Awesome 5 --> */}
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
{/*   <!>-- Main scripts -- */}
  <script src="assets/js/script.js"></script>
</body>

  );
}

export default App;
