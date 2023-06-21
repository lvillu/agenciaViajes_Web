<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link :to="{ name: 'home'}" class="navbar-brand" >Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#appNavbar"
        aria-controls="appNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="appNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home'}" class="nav-link active" aria-current="page" >Home</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Login'}" class="nav-link active" aria-current="page" >Login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Registro'}" class="nav-link active" aria-current="page" >Register</router-link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link :to="{ name: 'Usuario'}" class="dropdown-item">Username</router-link ></li>
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item btn btn-danger">Logout</button></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
