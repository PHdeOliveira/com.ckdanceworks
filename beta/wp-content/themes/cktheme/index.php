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
  <div id="bannerNormal">
    <div id="ei-slider" class="ei-slider">    
		    	
		    	
		    	
		    	<?php 
		    	
			    	$rows = get_field('hero_slider');

						if($rows)
						
						{
							$content = '<ul class="ei-slider-large">';
							
							$slider = ' <!-- ei-slider-large -->
									      <ul class="ei-slider-thumbs">
									        <li class="ei-slider-element">Current</li>';
							
							
							$count = 0;
							foreach($rows as $row)
							

							{
														
								$content .= '<li> 
												<img src="' . the_sub_field('slider_image') . '" alt="' . the_sub_field('slider_image') . '">
										          <div class="ei-title">
										            <h2><span class="blue">' . the_sub_field('slider_title') . '</h2>
										            <p>' . the_sub_field('slider_description') . '</p>
										            <a href="' . the_sub_field('slider_link') . '" class="emboss_button">Learn More</a> 
										          </div>
									         </li>';
							
								$slider .= '<li>
												<a href="#">Slide ' . ++$count . '</a>
											</li>';
							
							}
						 
								$content .= '</ul>';
								echo $content;
								
								$slider .= '</ul>';
								echo $slider;
						}
                  ?>
		      
		      

		 
		
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