<?php

/**
 * The template for displaying all single Insight posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Investax
 */

get_header(); ?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<?php while (have_posts()) : the_post(); ?>

    <main class="profile-page">

        <section class="profile-banner-section">
            <div id="profile-parallax-banner" class="profile-banner">
                <div class="banner-text">
                    <div class="container">
                        <h1><?php the_title() ?></h1>
                        <h3><?php the_field('member_designation'); ?></h3>
                    </div>

                </div>
                <div id="scroll-down-holder">

                    <a class="scroll-down" href="#scroll-target">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/angles-down-solid.svg" alt="">
                    </a>

                </div>
            </div>
        </section>

        <section class="about-profile" id="scroll-target">
            <div class="container">


                <div class="row">
                    <div class="col-md-6">
                        <h2>About <span class="profile-name"><?php the_title() ?></span></h2>
                        <a class="phone" href="tel:<?php the_field('mobile'); ?>"> <img src="<?php echo (get_template_directory_uri()) ?>/images/image002.png" alt=""><?php the_field('mobile'); ?></a>
                        <a class="email" href="mailto:<?php the_field('email'); ?>"> <img src="<?php echo (get_template_directory_uri()) ?>/images/image003.png" alt=""><?php the_field('email'); ?></a>

                        <span class="socials">
                            <a class="single-social" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a class="single-social" href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a class="single-social" href="#"><i class="fa-brands fa-twitter"></i></i></a>
                            <a class="single-social" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </span>
                    </div>

                    <div class="col-md-6">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </section>

    </main>




    <style>
        main {
            padding: 0px !important;
            margin-top: -170px;
        }

        @media screen and (orientation: portrait) {
            main {
                margin-top: 0px !important;
            }
        }

        .profile-page .profile-section {
            padding: 0px !important;
        }

        .profile-page .profile-section img {
            width: 100%;
            border-radius: 4px;
            margin: 30px auto !important;
            margin-bottom: 0px !important;
        }

        .profile-page .profile-section .caption {
            margin-top: 20px !important;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .profile-page .profile-section span.caption-text {
            font-size: 14px;
            margin: 0px auto !important;
            margin-bottom: 30px !important;
            text-align: center;
        }

        .profile-page .profile-section h1 {
            font-family: "Montserrat", sans-serif;
            color: #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: 100;
            text-transform: uppercase;
            text-align: left;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1960784314);
        }

        @media screen and (max-width: 900px) {
            .profile-page .profile-section h1 {
                font-size: 20px !important;
            }
        }

        @media screen and (orientation: portrait) {
            .profile-page .profile-section h1 {
                font-size: 20px !important;
                font-weight: 800 !important;
            }
        }

        .profile-page .profile-section h3 {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 24px;
            color: #fff;
        }

        @media screen and (orientation: portrait) {
            .profile-page .profile-section h3 {
                font-weight: 800 !important;
                font-size: 24px;
            }
        }

        .profile-page .empty-divider {
            height: 200px !important;
            width: 100%;
        }

        @media screen and (max-width: 900px) {
            .profile-page .empty-divider {
                height: 0px !important;
            }
        }

        .profile-page .profile-banner {
            margin: 0px !important;
            margin-bottom: 0px !important;
        }

        .profile-page .profile-banner .banner-text {
            margin: 0px !important;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            background-image: rgba(0, 0, 0, 0.2);
        }

        .profile-page .profile-banner .banner-text h1 {
            color: #fff;
            text-shadow: 3px 3px 6px #333;
            font-family: "Montserrat", sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: left;
            margin-bottom: 10px;
        }

        .profile-page .profile-banner .banner-text h3 {
            color: #fff;
            text-shadow: 3px 3px 6px #333;
            font-family: "Montserrat", sans-serif;
            text-transform: capitalize !important;
            letter-spacing: 3px;
            font-size: 20px !important;
            text-align: left;
        }

        .profile-page #profile-parallax-banner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("<?php the_field('profile_banner'); ?>");
            height: 100%;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        @media screen and (max-width: 900px) {
            .profile-page #profile-parallax-banner {
                background-image: url("<?php the_field('profile_banner'); ?>");
                background-position: center;
                background-size: cover;
            }
        }

        @media screen and (max-width: 768px) {
            .profile-page #profile-parallax-banner {
                background-size: contain;
            }
        }

        .profile-page .profile-name {
            color: #333;
            margin-left: 30px;
        }

        .profile-page .phone,
        .profile-page .email {
            display: block;
            margin-bottom: 20px;
            color: rgba(7, 0, 18, 0.9607843137);
            text-decoration: none;
        }

        .profile-page .phone img,
        .profile-page .email img {
            height: 30px;
            margin-right: 20px;
        }

        .profile-page .socials {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .profile-page .socials .single-social {
            padding: 0.15rem;
        }

        .profile-page .socials .single-social:hover {
            transform: scale(1.1);
        }

        .profile-page .socials .single-social i {
            font-size: 1.5rem;
            color: #9e6d2d;
        }

        .profile-page p {
            font-family: "Montserrat", sans-serif;
            font-size: 16px;
        }

        .profile-page h2 {
            text-align: left;
            font-size: 2.5rem !important;
        }

        .profile-page #scroll-down-holder {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            z-index: 100;
        }

        .profile-page .scroll-down {
            display: block;
            height: 2rem;
            width: 2rem;
            z-index: 1000 !important;
            margin-bottom: 3rem;
            background: #9e6d2d;
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            animation: transformEffect 1.5s linear infinite;
        }

        @keyframes transformEffect {
            0% {
                transform: translateY(-0.5rem);
            }

            100% {
                transform: translateY(0.5rem);
            }
        }

        .profile-page .scroll-down img {
            height: 100%;
            width: 100%;
        }

        .profile-page .profile-banner-section {
            height: 100vh;
            position: relative;
        }

        @media screen and (max-width: 767px) {
            .profile-page .profile-banner-section {
                height: 700px;
            }

            .profile-page #profile-parallax-banner {
                background-size: auto;
                background-position-x: 60% !important;
                background-position-y: 0px !important;
            }

            .profile-page .profile-banner .banner-text {
                justify-content: flex-end !important;
                margin-bottom: 1rem !important;
            }
        }

        /*# sourceMappingURL=profile.css.map */
    </style>

<?php endwhile; ?>
<?php get_footer(); ?>