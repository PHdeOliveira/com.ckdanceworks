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
define('DB_NAME', 'ckdancew_wor1');

/** MySQL database username */
define('DB_USER', 'ckdancew_wor1');

/** MySQL database password */
define('DB_PASSWORD', 'Xm8Hv67Nz0');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         '4.`12;dmSHV5F6.Au9kN21734-+ J<_+?2xqzNf%x.dL&MwTFnM:eXX-A+e5>qA=');
define('SECURE_AUTH_KEY',  'z}lYP3+d]t5ba3i%kd7vq^5m.L3!5a*)F[d@cTuM+T_`o0$0f.|C&3GM(cy9I+Lz');
define('LOGGED_IN_KEY',    'h4InpMPi~rpSc]qtG|slT(zOiZV$8|U8s2sYSt?Y|%ao>?h!tD`[@DN:2Fz.k+%/');
define('NONCE_KEY',        'hm<U{di_(Xl]8u$7er-M!KxpLl||vVCPw|/.:ePHlMPx8?|y8|3|FK[/|;JyE){c');
define('AUTH_SALT',        'Q7e+8!9Vp,(c1|Jl-E$TFGeL=_kXGS1@/d7IB4%WFXmvH7avGA:z?&[vV.@ 94bZ');
define('SECURE_AUTH_SALT', 'aCqDqq8]Uig)K`nRqxpe<6/>+bta^#$3^8937zyRh@f$^]M9/MYoajDyp]!+7=v*');
define('LOGGED_IN_SALT',   'Xs#fl5O}f<([L{-rt+_KSoror(+?0q*4}2>*N_XnsBquw|>g7(.w,@,M^6a3Mnro');
define('NONCE_SALT',       'O;-T+QuFGrgQ>m>h$48CvRpQ/Q?U<A:d3!**p?>bsHCNA=b.@~%<&G$-I1v~UQC~');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wrd_';

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
