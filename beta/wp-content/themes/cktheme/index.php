<?php /* Template Name: Index
*/ ?>


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
  			<?php if( get_field('hero_slider') ): ?>
 
			    <?php while( has_sub_field('hero_slider') ): ?>
			    
	
		        <ul>
		          <li>
			          	
				            <h2 class="title animate-in"><span class="blue"><?php the_sub_field('slider_title_1'); ?></h2>
				            <p class="subtitle animate-in"><?php the_sub_field('slider_description_1'); ?></p>
				            
				            <img class="model animate-in" src="<?php the_sub_field('slider_image_1'); ?>" alt="<?php the_sub_field('slider_image'); ?>" > 
			            
		            </li>
		            
		          <li>
			          
				            <h2 class="title"><span class="blue"><?php the_sub_field('slider_title_2'); ?></h2>
				            <p class="subtitle"><?php the_sub_field('slider_description_2'); ?></p>
				            <img class="model" src="<?php the_sub_field('slider_image_2'); ?>" alt="<?php the_sub_field('slider_image_1'); ?>"> 
			            
		          </li>
	            <li>
			          
				            <h2 class="title"><span class="blue"><?php the_sub_field('slider_title_3'); ?></h2>
				            <p class="subtitle"><?php the_sub_field('slider_description_3'); ?></p>
				            
				            <img class="model" src="<?php the_sub_field('slider_image_3'); ?>" alt="<?php the_sub_field('slider_image_2'); ?>"> 
			          
	            </li>
		          <li>
			          
				            <h2 class="title"><span class="blue"><?php the_sub_field('slider_title_4'); ?></h2>
				            <p class="subtitle"><?php the_sub_field('slider_description_4'); ?></p>
				            <img class="model" src="<?php the_sub_field('slider_image_4'); ?>" alt="<?php the_sub_field('slider_image_4'); ?>"> 
			          
	            </li>
		        </ul>
		        <?php endwhile; // end of the loop. ?>
		        
			<?php endif; ?>
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
  
  
  <div class="sep clear"></div>
  
  <!-- Begin MainContainer -->
  <div id="mainContainer">
    <div id="mainContent">
      
      <!-- Services -->
      <section class="columns clearfix mainServices" id="services">
        <h2 class="visuallyhidden">New Services</h2>
        

         <?php if( get_field('columns_repeater') ): ?>
	       
	        <?php while( has_sub_field('columns_repeater') ): ?>

	        <article class="one_third">

		       	
	          <h2><span class="blue"><?php the_sub_field('column_title'); ?></h2>
	          <div class="frame_round"><img src="<?php the_sub_field('column_image'); ?>" alt="<?php the_sub_field('column_image'); ?>"></div>
	          <div class="content">
	            <p class="shortDesc"><?php the_sub_field('column_description'); ?></p>
	            <a href="<?php the_sub_field('column_link'); ?>" class="emboss_button">Learn More </a> </div>

	        
	        </article>
	         <?php endwhile; // end of the loop. ?>
	        
       <?php endif; ?>

		
      </section>      
           
      <!-- CallOut Box -->
      <article class="call_out blue clearfix">
        <div class="content">
          <h2>HAVE <span class="blue">QUESTIONS? ?</span> NEED TO MAKE AN <span class="blue">APPOINTMENT ?</span></h2>
          <p>Fusce sed velit. Morbi iaculis, turpis at porta blandit, dolor quam pulvinar arcu, non interdum lectus metus sagittis nisi.</p>
        </div>
        <a href="mailto:ckdanceworks@hotmail.com?subject=Hello!" class="button_round">Contact Us</a> </article>
        
      <div class="sep"></div>
      
      
      <article class="clearfix columns noBorder beInTouch">
      
        <h2>BE IN <span class="blue">TOUCH</span></h2>
        <article class="two_third">
          <h3>What Our <span class="blueBlod">Customer Says</span></h3>
          
          <!-- Testimonials -->
        <div id="testimonial">
        	<?php if( get_field('quotes') ): ?>
 
			    <?php while( has_sub_field('quotes') ): ?>
            <div class="coda-slider" id="slider-id"><div>
            
          <h2 class="title">Panel 1</h2>
          <blockquote>
                    <p><?php the_sub_field('quote_1'); ?></p>
                    <p class="author">- <?php the_sub_field('quote_1_author'); ?></p>
                  </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 2</h2>
          <blockquote>
                    <p><?php the_sub_field('quote_2'); ?></p>
                    <p class="author">- <?php the_sub_field('quote_2_author'); ?></p>
                  </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 3</h2>
          <blockquote>
                    <p><?php the_sub_field('quote_3'); ?></p>
                    <p class="author">- <?php the_sub_field('quote_3_author'); ?></p>                 
          </blockquote>
        </div>
        <div>
          <h2 class="title">Panel 4</h2>
          <blockquote>
                    <p><?php the_sub_field('quote_4'); ?></p>
                    <p class="author">- <?php the_sub_field('quote_4_author'); ?></p>
                  </blockquote>
        </div>
		         <?php endwhile; // end of the loop. ?>
		<?php endif; ?>

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
		
		
		

<?php get_footer(); ?>