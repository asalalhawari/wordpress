<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Cosmetic Ecommerce Store
 */
?>

<footer id="colophon" class="site-footer border-top">
	<?php if (get_theme_mod('fashion_estore_show_hide_footer', true)) {?>
		<div class="footer-widgets">
		    <div class="container">
		    	<div class="footer-column">
			    	<?php
				        $count = 0;
				        
				        if ( is_active_sidebar( 'fashion-estore-footer1' ) ) {
				            $count++;
				        }
				        if ( is_active_sidebar( 'fashion-estore-footer2' ) ) {
				            $count++;
				        }
				        if ( is_active_sidebar( 'fashion-estore-footer3' ) ) {
				            $count++;
				        }
				        // $count == 0 none
				        if ( $count == 1 ) {
				            $colmd = 'col-md-12 col-sm-12';
				        } elseif ( $count == 2 ) {
				            $colmd = 'col-md-6 col-sm-6';
				        } else {
				            $colmd = 'col-md-4 col-sm-4';
				        }
			      	?>
			      <div class="row">
			        <div class="<?php if ( !is_active_sidebar( 'fashion-estore-footer1' ) ){ echo "footer_hide"; }else{ echo "$colmd"; } ?> col-xs-12 footer-block">
			          <?php dynamic_sidebar('fashion-estore-footer1'); ?>
			        </div>
			        <div class="<?php if ( is_active_sidebar( 'fashion-estore-footer2' ) ){ echo "$colmd"; }else{ echo "footer_hide"; } ?> col-xs-12 footer-block">
			            <?php dynamic_sidebar('fashion-estore-footer2'); ?>
			        </div>
			        <div class="<?php if ( is_active_sidebar( 'fashion-estore-footer3' ) ){ echo "$colmd"; }else{ echo "footer_hide"; } ?> col-xs-12 col-xs-12 footer-block">
			            <?php dynamic_sidebar('fashion-estore-footer3'); ?>
			        </div>
			      </div>
		    	</div>
		    </div>
		</div>
	<?php } ?>
	<?php if (get_theme_mod('fashion_estore_show_hide_copyright', true)) {?>
		<div class="footer_info">
			<div class="container">
		    	<div class="row">
		    		<div class="col-lg-5 col-md-5 col-12">
						<?php if ( has_nav_menu( 'footer' ) ): ?>
				            <nav class="navbar footer-menu">
								<?php
									wp_nav_menu( array(
										'theme_location' => 'footer',
										'container'      => 'div',
										'container_id'   => 'main-nav',
										'menu_id'        => false,
										'depth'          => 1,
									) );
								?>
				            </nav>
						<?php endif ?>
					</div>
			        <div class="site-info col-lg-7 col-md-7 col-12">
			        	<div class="footer-menu-left">
			            	<?php if(! get_theme_mod('fashion_estore_footer_text_setting') != ''){ ?>
							    <a target="_blank" href="<?php echo esc_url( __( 'https://wordpress.org/', 'cosmetic-ecommerce-store' ) ); ?>">
									<?php
									/* translators: %s: CMS name, i.e. WordPress. */
									printf( esc_html__( 'Proudly powered by %s', 'cosmetic-ecommerce-store' ), 'WordPress' );
									?>
							    </a>
							    <span class="sep mr-1"> | </span>
							    <span>
							       <a target="_blank" href="<?php echo esc_url( 'https://www.themagnifico.net/products/free-cosmetic-wordpress-theme', 'cosmetic-ecommerce-store'); ?>">
							           	<?php
							            	/* translators: 1: Theme name,  */
							            	printf( esc_html__( ' %1$s ', 'cosmetic-ecommerce-store' ),'Cosmetic WordPress Theme' );
							            ?>
							    	</a>
							        <?php
							        	/* translators: 1: Theme author. */
							        	printf( esc_html__( 'by %1$s.', 'cosmetic-ecommerce-store' ),'TheMagnifico'  );
							        ?>
							    </span>
							<?php }?>
							<?php echo esc_html(get_theme_mod('fashion_estore_footer_text_setting','')); ?>
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	<?php } ?>
  	<?php if(get_theme_mod('fashion_estore_scroll_hide','')){ ?>
       <a id="button"><?php esc_html_e('TOP','cosmetic-ecommerce-store'); ?></a>
  	<?php } ?>
</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
