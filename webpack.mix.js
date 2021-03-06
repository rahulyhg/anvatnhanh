let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
// Sass compile Code
mix.sass('resources/sass/app.scss', 'public/css')
.sass('resources/sass/app.theme.1.scss', 'public/css')
.sass('resources/sass/app.theme.2.scss', 'public/css')
.sass('resources/sass/app.theme.3.scss', 'public/css')
.sass('resources/sass/app.theme.4.scss', 'public/css')
.sass('resources/sass/app.theme.5.scss', 'public/css')
.sass('resources/sass/app.theme.6.scss', 'public/css')
.sass('resources/sass/app.theme.7.scss', 'public/css')
.sass('resources/sass/app.theme.8.scss', 'public/css')
.sass('resources/sass/app.theme.9.scss', 'public/css')
.sass('resources/sass/rtl.scss', 'public/css')
.sass('resources/sass/responsive.scss', 'public/css')


// Css Compile Code
/*mix.styles('resources/css/jquery-ui.css', 'public/css/jquery-ui.css')
.styles('resources/css/bootstrap-select.css', 'public/css/bootstrap-select.css')
.styles('resources/css/bootstrap-slider.css', 'public/css/bootstrap-slider.css')
.styles('resources/css/owl.carousel.css', 'public/css/owl.carousel.css')
.styles('resources/css/font-awesome.css', 'public/css/font-awesome.css')
.styles('resources/css/base.css', 'public/css/base.css')
.styles('resources/css/stripe.css', 'public/css/stripe.css')*/

.options({
	processCssUrls: false
});

// Images Compile Code
mix.copy('resources/assets/images/website_images', 'public/images')
.copy('resources/assets/fonts', 'public/fonts');

// Js Compile Code
mix.js('resources/js/app.js', 'public/js');

/*.js('resources/js/vendor/jquery-ui.js', 'public/js')
.js('resources/js/vendor/bootstrap-select.js', 'public/js')
.js('resources/js/vendor/bootstrap-slider.js', 'public/js')
.js('resources/js/vendor/owl.carousel.js', 'public/js')
.js('resources/js/vendor/stripe.js', 'public/js')
.js('resources/js/vendor/stripe_card.js', 'public/js');*/
	
	

   
