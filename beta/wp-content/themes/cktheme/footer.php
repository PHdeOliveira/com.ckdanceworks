<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

<!-- Begin Footer -->
  <footer id="pageFooter" class="clearfix">
    <h2 class="visuallyhidden">Footer Widgets</h2>
    <div class="one_fourth widget">
      <h3>ABOUT US</h3>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nisi. Etiam et risus. Proin auctor. Proin at pede at libero dapibus euismod. Maecenas massa erat,</p>
    </div>
    <div class="one_fourth widget">
      <h3>SERVICES</h3>
      <ul>
        <li><a href="#">Massage</a></li>
        <li><a href="#">Facial and Hair Treatments</a></li>
        <li><a href="#">Skin Care</a></li>
        <li><a href="#">Body Treatments &amp; Massage</a></li>
        <li><a href="#">Nail</a></li>
        <li><a href="#">Spa Rest</a></li>
      </ul>
    </div>
    <div class="one_fourth widget">
      <h3>CONTACT DETAILS</h3>
      <ul class="address-details">
        <li class="name">John Deo</li>
        <li class="address">Spa Care Treatment Center,<br>
          15 Mercer Street,<br>
          New York, NY</li>
        <li class="phone">(212) 564 - 5542</li>
        <li class="email"><a href="mailto:info@spacare.com" target="_blank">info@beauty-care.com</a></li>
      </ul>
    </div>
    <div class="one_fourth last widget">
      <h3>BLOG CATEGORY</h3>
      <ul>
        <li><a href="#">Massage</a></li>
        <li><a href="#">Facial and Hair Treatments</a></li>
        <li><a href="#">Skin Care</a></li>
        <li><a href="#">Body Treatments &amp; Massage</a></li>
        <li><a href="#">Nail</a></li>
        <li><a href="#">Spa Rest</a></li>
      </ul>
    </div>
  </footer>
  <!-- End Footer -->
</div>
<!-- End Wrapper -->

<!-- Begin Copyright -->
<div class="clearfix" id="copyrightText">
  <p class="floatLeft">&copy; 2012 <a href="index.htm">beauty-care.com</a>, All Rights Reserved. </p>
  <p class="floatRight socialIcons"> Follow Us: <a href="https://plus.google.com/113423345865351724434" title="" target="_blank" class="google">google plus</a><a href="#" title="" class="rss">rss</a><a href="http://www.facebook.com/falcon4web" title="" target="_blank" class="facebook">facebook</a><a href="https://twitter.com/falcon_studio" title="" target="_blank" class="twitter">twitter</a></p>
</div>
<!-- End Copyright -->

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php bloginfo('template_directory'); ?>/js/libs/jquery-1.7.2.min.js"><\/script>')</script> 
<script src="<?php bloginfo('template_directory'); ?>/js/plugins.js"></script> 
<script src="<?php bloginfo('template_directory'); ?>/js/script.js"></script> 
<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js">  
</script>  
<script type="text/javascript" src="https://api.twitter.com/1/statuses/user_timeline.json?screen_name=phdeoliveira&callback=twitterCallback2&count=2">  </script>
<script>
/*	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));*/
</script>

<script type="text/javascript">
		
			$(document).ready(function() {
			    $('.columns .one_third:last-child').addClass("last");
			});
		
</script>

<?php wp_footer(); ?>

</body>
</html>