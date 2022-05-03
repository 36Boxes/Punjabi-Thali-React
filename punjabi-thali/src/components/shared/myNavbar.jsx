import React, { useState } from 'react';
import logo from '../../images/Punjabi-Thali-Logo.png'
export default function MyNavbar() {
    

  return (
    <header class="site-header">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a href="/"><img src={logo} style={{width : '100px'}}/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggle">
            <div class="navbar-nav mr-auto">
              <a class="nav-item nav-link" href="/">&nbsp;&nbsp;Home</a>
              <a class="nav-item nav-link" href="/menu">&nbsp;&nbsp;Menu</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}