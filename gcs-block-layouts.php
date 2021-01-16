<?php
/*
Plugin Name: GCS Block Layouts
Plugin URI: http://www.gcsdesign.com
Description: Collection of page layouts for the WordPress Gutenberg editor
Version: 1.0
Author: Chandrika Sista
Author URI: https://www.gcsdesign.com/
Text Domain: gcs-bl
*/

//Enqueue required block scripts
function gcs_block_layouts_scripts() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');	
	wp_register_script(
		'gcs-bl-scripts',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_enqueue_script('gcs-bl-scripts');
	wp_localize_script( 'gcs-bl-scripts', 'wpAjax', array( 'wpurl' => get_bloginfo('wpurl') ) );
}
add_action( 'enqueue_block_editor_assets', 'gcs_block_layouts_scripts', 30 );
//add_action( 'init', 'cdash_bus_directory_block_scripts' );

function gcs_block_layouts_category( $categories, $post ) {
    return array_merge(
      $categories,
      array(
        array(
          'slug' => 'gcs-block-layouts',
          'title' => __( 'GCS Block Layouts', 'gcs-bl' ),
        ),
      )
    );
  }
  add_filter( 'block_categories', 'gcs_block_layouts_category', 10, 2);
?>