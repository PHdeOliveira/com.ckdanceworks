<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 */

get_header(); ?>

 <div class="circleSep">
    <div class="circleLeft"></div>
    <div class="circleRight"></div>
    <div class="sep"></div>
  </div>
  
  <!-- Begin Banner -->
  <div id="bannerWide">
    <div>
      <div id="sequence">
        <ul>
          <li>
            <h2 class="title animate-in"><span class="blue">Responsive</span> Layout</h2>
            <p class="subtitle animate-in">Template Supports for Multiple Screen Devices such iPhone, Tablet etc...</p>
            <img class="model animate-in" src="<?php bloginfo('template_directory'); ?>/images/temp/ban.png" alt="Responsive Layout" > </li>
          <li>
            <h2 class="title"><span class="blue">Easily</span> Customizable </h2>
            <p class="subtitle">Template consists of 15+ Pages and well documented. Also all PSD files included. You can customize it very easily...</p>
            <img class="model" src="<?php bloginfo('template_directory'); ?>/images/temp/ban.png" alt="Easily Customizable"> </li>
          <li>
            <h2 class="title"><span class="blue">Clean</span> &amp; Unique Design</h2>
            <p class="subtitle">Clean and Unique Design with Two Amazing Sliders...</p>
            <img class="model" src="<?php bloginfo('template_directory'); ?>/images/temp/ban.png" alt="Model 3"> </li>
          <li>
            <h2 class="title"><span class="blue">Cutting</span> Edge</h2>
            <p class="subtitle">Supports modern browsers, old browsers (IE8+), touch devices and responsive designs...</p>
            <img class="model" src="<?php bloginfo('template_directory'); ?>/images/temp/ban.png" alt="Model 3"> </li>
        </ul>
      </div>
      <ul id="nav">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </div>
  </div>
  <!-- End Banner -->
  
  <!-- Begin MainContainer -->
  <div id="mainContainer">
    <div id="mainContent">
    
    <!-- Promobox -->
      <section class="promo_box clearfix border_bottom">
        <h2 class="visuallyhidden">Intro</h2>
        <p>Nam at metus. <a href="#">Vestibulum libero massa</a>, consequat id, tristique sed, pellentesque et, nisi. Vivamus ipsum. Fusce lacus metus, <a href="#">semper nec.</a></p>
        <a href="about.htm" class="button_round">Learn More</a> </section>
      
      <!-- Services -->
      <section class="columns clearfix" id="services">
        <h2>Services</h2>
        <article class="one_third">
          <div class="small_product_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""></div>
          <div class="content">
            <header>
              <h3>Facial Treatment</h3>
              <p class="desc">Info About Facial Treatments</p>
            </header>
            <p class="shortDesc">Aenean euismod. Pellentesque et metus non magna viverra fermentum. Sed tincidunt. Morbi condimentum tincidunt massa. Phasellus pellentesque, elit vel ultricies congue.</p>
            <a href="service-single.htm" class="button">READ MORE  &raquo;</a> </div>
        </article>
        <article class="one_third">
          <div class="small_product_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""></div>
          <div class="content">
            <header>
              <h3>Massage</h3>
              <p class="desc">About Spa Massages</p>
            </header>
            <p class="shortDesc">Phasellus consectetuer nulla id metus. Nam magna odio, venenatis non, venenatis quis, iaculis eget, mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
            <a href="service-single.htm" class="button">READ MORE  &raquo;</a> </div>
        </article>
        <article class="one_third last">
          <div class="small_product_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""></div>
          <div class="content">
            <header>
              <h3>Hair Treatment</h3>
              <p class="desc">Info About Hair Tratements</p>
            </header>
            <p class="shortDesc">Nunc vel odio. Pellentesque nec arcu vel velit laoreet rhoncus. Aenean fermentum pellentesque magna. Donec pellentesque, neque non faucibus suscipit, massa est faucibus sapien.</p>
            <a href="service-single.htm" class="button">READ MORE  &raquo;</a> </div>
        </article>
      </section>
      
      <!-- From The Blog -->
      <section class="columns clearfix fromTheBlog">
        <h2>From <span class="blue">The Blog</span></h2>
        <article class="one_third">
          <div class="blog_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""> </div>
          <p class="date"><span>11</span> JUN</p>
          <div class="content">
            <header>
              <h3>VERY SHORT POST TITLE</h3>
              <p class="author_name">by <a href="#">Jhone Deo</a></p>
            </header>
            <p class="shortDesc">Donec tristique tortor nec metus. Quisque lacus risus, commodo eu, tristique quis, sagittis sit amet, eros. Praesent id felis a tellus mollis luctus. Cras nisi sapien, ultricies nec, dapibus.</p>
            <a href="#" class="button">READ MORE <span>&raquo;</span></a> </div>
        </article>
        <article class="one_third">
          <div class="blog_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""> </div>
          <p class="date"><span>05</span> May</p>
          <div class="content">
            <header>
              <h3>THIS VERY VERY LARGE POST TITLE</h3>
              <p class="author_name">by <a href="#">Jhone Deo</a></p>
            </header>
            <p class="shortDesc">Vestibulum dictum. Quisque at nunc venenatis ligula sagittis nonummy. Nullam euismod, diam ut ultricies ullamcorper, arcu massa elementum odio, ut feugiat nibh nunc et erat.</p>
            <a href="#" class="button">READ MORE <span>&raquo;</span></a></div>
        </article>
        <article class="one_third last clearfix">
          <div class="blog_image"><img src="<?php bloginfo('template_directory'); ?>/images/temp/placeholder.png" alt=""></div>
          <p class="date"><span>24</span> JUN</p>
          <div class="content">
            <header>
              <h3>VERY SHORT POST TITLE</h3>
              <p class="author_name">by <a href="#">Jhone Deo</a></p>
            </header>
            <p class="shortDesc">Donec tristique tortor nec metus. Quisque lacus risus, commodo eu, tristique quis, sagittis sit amet, eros. Praesent id felis a tellus mollis luctus. Cras nisi sapien, ultricies nec, dapibus.</p>
            <a href="#" class="button">READ MORE <span>&raquo;</span></a></div>
        </article>
      </section>
      
      <!-- CallOut Box -->
      <article class="call_out blue clearfix">
        <div class="content">
          <h2>NEED <span class="blue">HELP ?</span> NEED TO MAKE AN <span class="blue">APPOINTMENT ?</span></h2>
          <p>Fusce sed velit. Morbi iaculis, turpis at porta blandit, dolor quam pulvinar arcu, non interdum lectus metus sagittis nisi.</p>
        </div>
        <a href="contact-appointment.php" class="button_round">Contact Us</a> </article>
        
      <div class="sep"></div>
      
      
      <article class="clearfix columns noBorder beInTouch">
        <h2>BE IN <span class="blue">TOUCH</span></h2>
        <article class="two_third">
          <h3>What Our <span class="blueBlod">Customer Says</span></h3>
          
          <!-- Testimonials -->
          <div id="testimonial">
            <div class="coda-slider" id="slider-id">
        <div>
          <h2 class="title">Panel 1</h2>
          <blockquote>
                    <p>Nullam eu ante. Sed tempor dolor. Duis ut neque eu nulla consequat semper. Donec malesuada. Pellentesque cursus mauris sit amet nisl. Nullam aliquet tellus ac ipsum. Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Praesent mauris massa, imperdiet ornare, venenatis eget, fringilla ut, tellus.</p>
                    <p class="author">- JHON DEO</p>
                  </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 2</h2>
          <blockquote>
                    <p>Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Nullam eu ante. Sed tempor dolor. Duis ut neque eu nulla consequat semper. Donec malesuada. Pellentesque cursus mauris sit amet nisl. Nullam aliquet tellus ac ipsum. Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Praesent mauris massa, imperdiet ornare, venenatis eget, fringilla ut, tellus.</p>
                    <p class="author">- JHON DEO</p>
                  </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 3</h2>
          <blockquote>
                    <p>Donec malesuada. Pellentesque cursus mauris sit amet nisl. Nullam aliquet tellus ac ipsum. Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Praesent mauris massa, imperdiet ornare, venenatis eget, fringilla ut, tellus.</p>
                    <p class="author">- JHON DEO</p>
                  </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 4</h2>
          <blockquote>
                    <p>Pellentesque cursus mauris sit amet nisl. Nullam aliquet tellus ac ipsum. Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Praesent mauris massa, imperdiet ornare, venenatis eget, fringilla ut, tellus. Nullam eu ante. Sed tempor dolor. Duis ut neque eu nulla consequat semper. Donec malesuada. Pellentesque cursus mauris sit amet nisl. Nullam aliquet tellus ac ipsum. Maecenas suscipit commodo diam. Curabitur imperdiet. Fusce porta. Aliquam a risus. Praesent mauris massa, imperdiet ornare, venenatis eget, fringilla ut, tellus.</p>
                    <p class="author">- JHON DEO</p>
                  </blockquote>
        </div>
      </div>
            <div class="arrow"></div>
          </div>
        </article>
        
        <!-- Recent Tweets -->
        <article class="one_third last recentTweet">
          <h3>Recent <span class="blueBlod">Tweets</span></h3>
          <div id="twitter_update_list"></div>  
        </article>
        
      </article>
    </div>
  </div>
  <!-- End Main Container -->
  
  <div class="circleSep">
    <div class="circleLeft"></div>
    <div class="circleRight"></div>
    <div class="sep"></div>
  </div>	
		
		
		
<!-- <?php get_sidebar(); ?> -->
<?php get_footer(); ?>