<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?><!DOCTYPE html>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="icon" type="image/png" href="favicon.png">
<title>CK DANCEWORKS</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>" class="cssfx">
<script src="<?php bloginfo('template_directory'); ?>/js/cssfx.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/css/pink.css" class="cssfx">
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/css/sequence.css" class="cssfx">
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/css/coda-slider-2.0.css" class="cssfx">
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/css/banner.css" class="cssfx">
<!-- Phone -->
<link href="<?php bloginfo('template_directory'); ?>/css/phone.css" rel="stylesheet" type="text/css" media="only screen and (max-width:320px)" class="cssfx">
<!-- Phone Wide -->
<link href="<?php bloginfo('template_directory'); ?>/css/phone-landscape.css" rel="stylesheet" type="text/css" media="only screen and (min-width:321px) and (max-width:480px)" class="cssfx">
<!-- Tablet -->
<link href="<?php bloginfo('template_directory'); ?>/css/tablet.css" rel="stylesheet" type="text/css" media="only screen and (min-width:481px) and (max-width:768px)" class="cssfx">
<!-- Desktop -->
<link href="<?php bloginfo('template_directory'); ?>/css/desktop.css" rel="stylesheet" type="text/css" media="only screen and (min-width:769px) and (max-width:1000px)" class="cssfx">
<!--[if (lt IE 9)&(!IEMobile 7)]>
      <link rel="stylesheet" href="desktop.css">
    <![endif]-->

<!--[if IE 9]>
<link rel="stylesheet" href="css/ie.css">
<![endif]-->
<script src="<?php bloginfo('template_directory'); ?>/js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body>
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
<p id="back-top"><a href="#top"><span></span></a></p>

<!-- Begin Wrapper -->
<div class="wrapper topBorder">

<!-- Begin Header -->
  <header id="mainHeader" class="clearfix">
    <div id="logoCon">
    <!-- Logo -->
      <h1 id="logo"><a href="index.htm">CK DANCEWORKS</a></h1>
      
      <p class="des">Tagline Goes Here</p>
    </div>
    
      <!-- Begin Main Navigation -->
    <nav id="menu">
      <h2 class="visuallyhidden">Main Navigation</h2>
      <ul class="menu">
        <li  class="current">
        	<a href="index.htm">Home</a>
        	<span class="desc">welcome</span>
    	</li>
        <li>
	        <a href="about.htm">About</a>
	        <span class="desc">CKDW</span>
        </li>
        <li>
	        <a href="#" class="parent">Pages</a><span class="desc">list of Pages</span>
	          <!-- Dropdown Level 1 -->
	          <ul>
	            <li><a href="#" class="parent">Home Pages</a>
	              <!-- Dropdown Level 2 -->	
	              <ul>
	                <li><a href="index.htm"><span>Home 1</span></a></li>
	                <li><a href="index2.htm"><span>Home 2</span></a></li>
	              </ul>
	            </li>
	            <li><a href="#" class="parent">Sub Page Headers</a>
	              <!-- Dropdown Level 2 -->	
	              <ul>
	                <li><a href="style1.htm"><span>Style 1</span></a></li>
	                <li><a href="style2.htm"><span>Style 2</span></a></li>
	              </ul>
        </li>
            <li><a href="about.htm">About</a></li>
            <li><a href="services.htm" class="parent">Services</a>
              <!-- Dropdown Level 2 -->
              <ul>
                <li><a href="services.htm"><span>List of Services 1</span></a></li>
                <li><a href="services2.htm"><span>List of Services 2</span></a></li>
                <li><a href="service-single.htm"><span>Service and Packages</span></a></li>
              </ul>
            </li>
            <li><a href="products.htm" class="parent">Products</a>
              <!-- Dropdown Level 2 -->
              <ul>
                <li><a href="products.htm">All Products</a></li>
                <li><a href="product-single.htm">About a Product</a></li>
              </ul>
            </li>
            <li><a href="#" class="parent">Others</a>
              <!-- Dropdown Level 2 -->
              <ul>
                <li><a href="left-navigation.htm">Left Navigation</a></li>
                <li><a href="right-navigation.htm">Right Navigation</a></li>
                <li><a href="left-sidebar.htm">Left Sidebar</a></li>
                <li><a href="right-sidebar.htm">Right Sidebar</a></li>
                <li><a href="full-width.htm">Full Width</a></li>
              </ul>
            </li>
            <li><a href="blog.htm" class="parent">Blog</a>
              <!-- Dropdown Level 2 -->
              <ul>
                <li><a href="blog.htm">Blog</a></li>
                <li><a href="single-blog.htm">Single Blog</a></li>
              </ul>
            </li>
            <li><a href="contact-enquire.php" class="parent">Contact</a>
              <!-- Dropdown Level 2 -->
              <ul>
                <li><a href="contact-enquire.php">Enquire</a></li>
                <li><a href="contact-appointment.php">Appointment</a></li>
              </ul>
            </li>
          </ul>
          <!-- Dropdown Level 1 End -->
        </li>
        <li><a href="services.htm">Services</a><span class="desc">what we do</span></li>
        <li><a href="blog.htm">Blog</a><span class="desc">articles</span></li>
        <li class="last"><a href="contact-enquire.php">Contact</a><span class="desc">Need Help?</span></li>
      </ul>
    </nav>
    <!-- End Main Navigation -->
  </header>
  <!-- End Header -->
  