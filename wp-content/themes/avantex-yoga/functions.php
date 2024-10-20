<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( ! function_exists( 'avantex_yoga_chld_thm_cfg_locale_css' ) ) :
	function avantex_yoga_chld_thm_cfg_locale_css( $uri ) {
		if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) ) {
			$uri = get_template_directory_uri() . '/rtl.css';
		}
		return $uri;
	}
endif;
add_filter( 'locale_stylesheet_uri', 'avantex_yoga_chld_thm_cfg_locale_css' );

if ( ! function_exists( 'avantex_yoga_chld_thm_cfg_parent_css' ) ) :
	function avantex_yoga_chld_thm_cfg_parent_css() {
		wp_enqueue_style( 'avantex_yoga_chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array( 'twentytwenty-print-style', 'bootstrap-min-css', 'animate-css', 'font-awesome-min-css', 'Swiper-min-css', 'owl-carousel-css', 'odometer-css', 'bxslider-css', 'switcher-css', 'avantex-skin-default' ) );
	}
endif;
add_action( 'wp_enqueue_scripts', 'avantex_yoga_chld_thm_cfg_parent_css', 10 );

// END ENQUEUE PARENT ACTION

// Check if plugin Active.
require_once ABSPATH . 'wp-admin/includes/plugin.php';
if ( is_plugin_active( 'avantex-companion/avantex-companion.php' ) ) {
	function avantex_yoga_set_plugins_mods() {
		set_theme_mod( 'avantex-callout-image', AVANTEX_COMPANION_PLUGIN_URL . '/inc/avantex/img/callout/yoga-callout.jpg' );
	}
	add_action( 'after_switch_theme', 'avantex_yoga_set_plugins_mods' );
}

function avantex_yoga_set_theme_mods() {
	// set_theme_mod( 'avantex_slider_overlay', 'itembf' );
	set_theme_mod( 'avantex_slider_overlay_color', 'rgba(0,0,0,0.22)' );
	set_theme_mod( 'avantex-services-title', 'WHY ITS IMPORTANT TO EXERCISE' );
	set_theme_mod( 'avantex-services-subtitle', 'The best Yoga exercise we are offering!' );
	set_theme_mod( 'avantex-portfolio-title', 'POPULAR CLASSES' );
	set_theme_mod( 'avantex-styling-primary-color', '#17543e' );
	set_theme_mod( 'avantex-styling-dark-color', '#0f0d1d' );
	// set_theme_mod( 'avantex-styling-light-color', 'rgba(109,189,255)' );
	// set_theme_mod( 'avantex-styling-links-color', '#23b2ea' );
	// set_theme_mod( 'avantex-styling-text-color', '#0dcaf0' );
	set_theme_mod( 'avantex-portfolio-size', 'container' );
	set_theme_mod( 'avantex-team-size', 'container' );
	set_theme_mod( 'avantex-team-title', 'OUR STAFF IS ALWAYS HERE TO HELP' );
	set_theme_mod( 'avantex-callout-description-color', '#ffffff' );
}
add_action( 'after_switch_theme', 'avantex_yoga_set_theme_mods' );
