<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ckdancew_newsite');

/** MySQL database username */
define('DB_USER', 'ckroot');

/** MySQL database password */
define('DB_PASSWORD', 'ckroot');

/** MySQL hostname */
define('DB_HOST', '173.254.28.139');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's(j]5R->K(kuxjO|nlI;$R[A1Dz<a8Ku!=/kF#z.]Z^fAq,gvx>3Nsy+2zrmC+vQ');
define('SECURE_AUTH_KEY',  'j+dSn>&P!Ns,bN<LI^aO_|p.=MrFn~YZqRxOytYhW--g.EYu]4h)TXTrq^LM(@//');
define('LOGGED_IN_KEY',    'SHz4C85I~P$;f1kG Id%YzVs0@(C|!.5HJ h6%|[a+@BaS%F{s#iz=f$7|j0=BX<');
define('NONCE_KEY',        '.3gmQeW7>]CpLC#;5H^1>NjV~5zWAz}9&$ich4jA#}YK<^&pbE-G8+_ =];J!@Hc');
define('AUTH_SALT',        '23Rmd2k`~N5c3]xft+#/WN(At|V4w-4w<-K`8GW+5zv6f-7@`ylG0+o%HEro#*U;');
define('SECURE_AUTH_SALT', 'C@oQfhn+B5G~9px,mJ|^PY|3 1HMB:!dK(+0e~.O bL)+<]W+.L9|O|F>GFLVB+X');
define('LOGGED_IN_SALT',   'xRd+-tfhbS*eWE!N;Es1].,CA/eIsMqil89)>*!^Ni50VYThWyBP}rx@{+-p&IrZ');
define('NONCE_SALT',       'R|9 YmP/++CV-Imyc4FMlap2ZQG]$k4Fov xXBn8N|0P%[.j+~$:g sMG1>,05X&');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
