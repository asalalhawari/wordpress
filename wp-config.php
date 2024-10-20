<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projectpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zFb3;*L{oEqA%+r@`/8aqc_7jIz+uh^$sAMLb3;7%,U,)oGlm!(yg#x-r^cB{tjQ' );
define( 'SECURE_AUTH_KEY',  'q6,MGy;P)yr&?;#SH0GU+Fkuu7<1aC7A9/$=(;V,wU;q_Xx/QX[9Ns%^C;]d0&Gr' );
define( 'LOGGED_IN_KEY',    'sztybTGkR#ik+Q*|)J/-`FOy?Y=Qx]*q4NFaSy5p)}mBPw,jCh~64]}PQK#=_3oF' );
define( 'NONCE_KEY',        'bP0-EXWAf+8_.~i+d=Kvi%9h=qV>bK>iJ/@1iqhJUO8r,iui7![x-,m%&v&V Fo~' );
define( 'AUTH_SALT',        '%`:+w}?+IA`#Ag:gfi8?oZ8`Hd:+GWMDsC{<&kn>,heVpD*R`LNp+^YA>1}0>>qP' );
define( 'SECURE_AUTH_SALT', 'F*t[a!ouwMs:AJdJL$Z0ncl1-j8=kpDf-*sD4RPi<03<D5E-H4.Hal [F`4m.)_a' );
define( 'LOGGED_IN_SALT',   '6WIfF<I@2q+w]`<2c=iQx/z5q%aFr/lJ069=Mw~:oxm2GLv~q7w|4C&hb9l2w`&F' );
define( 'NONCE_SALT',       '@BIMoly%9=^YXNsrt]Bg=CsvCYiKb#|0n~/}=a9X*gj/$K0MiSa(c8zPtcFlUry2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
