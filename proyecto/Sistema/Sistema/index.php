
<?php
  ob_start();
  require_once('includes/load.php');
  if($session->isUserLoggedIn(true)) { redirect('home.php', false);}
?>
<?php include_once('layouts/header.php'); ?>
<div class="login-page">
    <div class="text-center">
       <h1>BIENVENIDO</h1>
       <p>INICIAR SESION </p>
     </div>
     <?php echo display_msg($msg); ?>
      <form method="post" action="auth.php" class="clearfix">
        <div class="form-group">
              <label for="username" class="control-label">USUARIO</label>
              <input type="name" class="form-control" name="username" placeholder="Ingrese Su Usuario">
        </div>
        <div class="form-group">
            <label for="Password" class="control-label">CONTRASEÑA</label>
            <input type="password" name= "password" class="form-control" placeholder="Ingrese Su Contraseña">
        </div>
        <div class="form-group">
                <button type="submit" class="btn btn-info  pull-right">ENTRAR</button>
        </div>
    </form>
</div>
<?php include_once('layouts/footer.php'); ?>
