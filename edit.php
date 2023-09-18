<?php

/**
 * Template Name: Our Clients
 *
 * @package Investax
 */
get_header();

$current_page_url =  (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']
    === 'on' ? "https" : "http") .
    "://" . $_SERVER['HTTP_HOST'] .
    $_SERVER['REQUEST_URI'];
?>

<main>
    <div class="banner" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);" id="acc-parallax-banner">

        <div class="container-fluid">

            <div class="banner-text">

                <?php
                $sentence = get_the_title();

                // Split the sentence into an array of words
                $words = explode(" ", $sentence);

                // Get the first half of the array
                $firstHalf = array_slice($words, 0, ceil(count($words) / 2));

                // Join the words back into a sentence
                $firstHalfSentence = implode(" ", $firstHalf);

                // Get the second half of the array
                $secondHalf = array_slice($words, ceil(count($words) / 2));

                // Join the words back into a sentence
                $secondHalfSentence = implode(" ", $secondHalf); ?>

                <span class="strong"><?php echo $firstHalfSentence; ?></span>
                <span><?php echo $secondHalfSentence; ?></span>
            </div>

            <div class="scroll-down-holder">
                <a class="scroll-down" href="#scroll-target">
                    <img src="<?php echo (get_template_directory_uri()) ?>/images/angles-down-solid.svg" alt="">
                </a>
            </div>

            <div class="banner-cta">

                <div>
                    <h3>Save Tax</h3>
                </div>

                <div>
                    <h3>
                        Protect Your Assets
                    </h3>
                </div>

                <div>
                    <h3>
                        Retire Wealthy
                    </h3>
                </div>
            </div>
        </div>
    </div>


    <div id="scroll-target" class="essential-links">

        <div class="container links-container-full">

            <nav aria-label="breadcrumb" class="breadcrumb">
                <ul>
                    <li><a href="<?php echo get_site_url(); ?>">Home</a></li>
                    <li>About</li>
                </ul>
            </nav>

            <div class="link">

                <div class="icon">
                    <a href="https://www.facebook.com/share.php?u=<?php echo $current_page_url ?>" target="_blank">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/facebook-black.svg" alt="facebook">
                    </a>
                </div>

                <div class="icon">
                    <a href="https://twitter.com/home/?status=<?php echo $current_page_url ?>" target="_blank">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/twitter-black.svg" alt="twitter">
                    </a>
                </div>

                <div class="icon">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo $current_page_url ?>" target="_blank">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/linkedin-black.svg" alt="linkedin">
                    </a>
                </div>

            </div>

        </div>
    </div>

    <section class="our-clients">

        <div class="container">

            <div class="section-hero">

                <p>
                    At our legal service firm, nothing brings us greater joy than witnessing the happiness and satisfaction of our clients. With a dedicated team of experienced professionals, we take pride in delivering exceptional legal solutions tailored to their unique needs. Knowing that our efforts have positively impacted their lives and brought them peace of mind fills us with immeasurable happiness and reinforces our commitment to providing top-notch service every step of the way. Our clients' happiness is our ultimate motivation and the driving force behind our passion for legal excellence.
                </p>

            </div>

            <div class="comp-title">
                Our Clients
            </div>

            <hr>

            <div class="all-clients">


                <!-- single clients -->
                <div class="row align-items-center single-client">

                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Sharlee and Tony
                        </div>

                        <div class="short-desc">
                            <p>
                                We are delighted to share the remarkable journey of Sharlee and Tony, an exceptional couple who have achieved success in their endeavours through property investments. Sharlee's amazing abilities and a keen eye for excellent properties have established her as an exemplary investor in the real estate market. She effortlessly balances her roles as a devoted mother alongside her dedication to their son and daughter.
                            </p>
                            <p>
                                Tony, known for his down-to-earth nature, brings joy to those around him through his incredible musical talent. Sharlee and Tony form an inspiring team united by their shared values and aspirations. Their trust in Investax Group is a testament to the strong bond they have built over the years.
                            </p>
                            <p>
                                As valued clients of Investax Group for over a decade, Sharlee and Tony have established various trust structures, including a self-managed superannuation fund (SMSF), to manage their multiple investment properties. Their enduring partnership with Ershad and Defy has solidified into a trusted connection, relying on their exceptional guidance and expertise. Sharlee expresses her gratitude, stating, "We’re so grateful that you and your team have been supporting us throughout this journey. I always feel at ease about discussing my wealth creation plans with you and Defy. I have learned a lot along the way! "
                            </p>
                        </div>

                    </div>

                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/meet-our-client-1.jpg" alt="">
                    </div>
                </div>

                <!-- single clients -->
                <div class="row align-items-center single-client">


                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/OFL-Sheree-Candid-2.jpg" alt="">

                        <figcaption style="margin-top: .5rem; font-size: .75rem">
                            <span>
                                If you seek legal expertise in family law matters, we encourage you to reach out to Sheree and her dedicated team at Orbell Family Lawyers. For more information, visit their website at
                            </span>

                            <span>
                                <a href="https://orbellfamilylawyers.com.au/">
                                    Orbell Family Lawyers.
                                </a>
                            </span>

                            <span>
                                and discover how they can assist you in achieving your legal goals.
                            </span>
                        </figcaption>
                    </div>

                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Sheree Orbell: Empowering Families through Orbell Family Lawyers
                        </div>

                        <div class="short-desc">
                            <p>
                                Meet Sheree Orbell, the driving force behind Orbell Family Lawyers, a distinguished legal practice specialising in family law. With her expertise and unwavering dedication, Sheree established this thriving legal venture, which operates from the picturesque Central Coast, catering to clients all across Australia. But Sheree's story is not just about her professional achievements; it is a testament to the pursuit of a fulfilling life that balances work and family.
                            </p>

                            <p>
                                Previously holding a high-flying partnership role in one of Sydney's lucrative legal practices, Sheree made a bold decision to prioritize a balanced life. By establishing her own legal practice, she found the ideal way to excel in her career while also spending quality time with her beautiful children and supportive husband.
                            </p>

                            <p>


                            <p>
                                Sheree's dedication to both her profession and her family has been an inspiration to many. She not only empowers families through her legal expertise but also sets an example of how a harmonious work-life balance can be achieved with careful planning and support.
                            </p>

                            <p>
                                Investax played a vital role in supporting Sheree's journey, helping her establish the legal practice and advising on various ownership structures. This strategic guidance allowed Sheree to own a diverse portfolio of residential and commercial properties, carefully structured to ensure seamless business operations without compromising on asset protection.
                            </p>

                            <p>
                                As Sheree continues her successful journey, Investax is honoured to be her trusted financial partner, providing tailored solutions to meet her business and investment needs. Together, we celebrate her achievements and look forward to witnessing the continued growth of Orbell Family Lawyers and her flourishing property portfolio.
                            </p>


                        </div>

                        <!-- links -->
                        <div class="client-links">

                            <!-- site link -->
                            <a class="single-link" href="https://www.orbellfamilylawyers.com.au" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/globe-icon.svg" alt="">
                            </a>

                        </div>

                    </div>

                </div>

                <!-- single clients -->
                <div class="row align-items-center single-client">

                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Con and Nick Aifantis: The Visionaries behind Pool and Spa Warehouse
                        </div>

                        <div class="short-desc">
                            <p>
                                Con and Nick Aifantis, the masterminds behind the highly successful business venture, Pool and Spa Warehouse, have left an indelible mark on the industry. When we first crossed paths with Con and Nick, they were driven by a single store and ambitious dreams. Their innate business acumen and impeccable decision-making skills propelled them to establish multiple thriving stores, demonstrating their unwavering commitment to success.
                            </p>
                            <p>
                                Con and Nick's relentless work ethic, coupled with their sharp business acumen, sets them apart as true exemplars of entrepreneurship. Their journey not only showcases the power of determination but also serves as an inspiration to aspiring business owners.
                            </p>
                            <p>
                                In addition to their accomplishments in the business realm, Con and Nick have also demonstrated their prowess as astute property investors. Recognizing their potential, Investax Group has been privileged to assist them in shaping their business and investment structures. Our team has worked closely with Con and Nick to develop strategies that align with their goals, ensuring their business and property investments thrive.
                            </p>
                            <p>
                                Con and Nick Aifantis embody the essence of hard work and strategic thinking, leaving an indelible impact on the industry. We are honoured to have played a part in their journey and continue to support their ongoing success.
                            </p>
                        </div>

                        <!-- links -->
                        <div class="client-links">

                            <!-- site link -->
                            <a class="single-link" href="https://poolandspawarehouse.com.au/" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/globe-icon.svg" alt="">
                            </a>

                        </div>

                    </div>

                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/pool-spa.jpg" alt="">
                    </div>

                </div>

                <!-- single clients -->
                <div class="row align-items-center single-client">

                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/mnkatelier-web.png" alt="">
                    </div>

                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Kobe and Milly Kan - Pioneers in Property Investment and Fashion Excellence
                        </div>

                        <div class="short-desc">
                            <p>Kobe and Milly, two ambitious sisters, are not only successful property investors but also talented young entrepreneurs. From the very beginning of their property investment and business endeavours, we have had the privilege of standing by their side, offering support and expert guidance at every step of their remarkable journey. Our comprehensive assistance has covered a wide range of areas, including providing valuable advice on the most suitable ownership structures for their thriving business and lucrative property investments.</p>
                            <p>It is with great excitement that we extend an invitation to you to explore their awe-inspiring business website,&nbsp;<a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__mnkatelier.co_discount_MNKAMINFAM15&amp;d=DwMGaQ&amp;c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&amp;r=9563S5mlHthBuw7nPcERm_3_9Nz-tPJZvWINZTVhni4&amp;m=jIgZgwFYQxyxrWxZdp30j-Gf14DKu7SOBEbkWT8ZSgRLMPs-5tw7zXnrKxYWZJvE&amp;s=ct--O58gVwEQ_zfiExR_iBMV7osfVSx_xNY-hB44p3A">MNK Atelier</a>. Here, you will witness firsthand the dazzling culmination of their entrepreneurial spirit and unparalleled fashion industry expertise. Kobe and Milly’s profound understanding of the fashion world prompted them to establish a brand that caters to the discerning clientele seeking high-end clothing and exquisite designs.</p>
                            <p>We take immense pride in being a trusted partner throughout their remarkable growth, ensuring their business and property ventures thrive with optimal strategies and solutions. As you peruse MNK Atelier’s website, you will experience their unwavering passion for fashion and witness their unwavering commitment to delivering nothing short of excellence in every garment they create.</p>
                            <p>Join us in celebrating Kobe and Milly’s remarkable achievements as they continue to make waves in both the property investment and fashion industries. By exploring MNK Atelier’s website, you will immerse yourself in a world of luxury, creativity, and unparalleled craftsmanship, all meticulously crafted under the visionary leadership of these two exceptional sisters.</p>
                            <p>With utmost kindness, they are extending a generous 20% discount to all Investax clients! Simply use the code “INVEST20” to avail of this special offer.&nbsp;</p>

                        </div>

                        <!-- links -->
                        <div class="client-links">

                            <!-- site link -->
                            <a class="single-link" href="https://mnkatelier.co/discount/MNKAMINFAM15" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/globe-icon.svg" alt="">
                            </a>

                            <!-- facebook link -->
                            <a class="single-link" href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.facebook.com_MNKAtelier&amp;d=DwMFaQ&amp;c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&amp;r=82mEQzNTT1kXAhCDNmAihBJ7i71WDR1IZ-Xp-FXrqGo&amp;m=sx8sVUZSGzDpOBEW4NKSwt2PP5oKLz6jACC6HKgHcwk&amp;s=HxgrV75VcWRWMr8K5O4gd1gJnKskYFsboRG09MNq_9g" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/facebook-black.svg" alt="">
                            </a>

                            <!-- instagram link -->
                            <a class="single-link" href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.instagram.com_mnk-5Fatelier_&amp;d=DwMFaQ&amp;c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&amp;r=82mEQzNTT1kXAhCDNmAihBJ7i71WDR1IZ-Xp-FXrqGo&amp;m=sx8sVUZSGzDpOBEW4NKSwt2PP5oKLz6jACC6HKgHcwk&amp;s=3cVxjY4I7kTXiJlKP1V5NSflwo5h4z3tBjI5b8bTqQE" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/instagram-black.svg" alt="">
                            </a>

                        </div>

                    </div>

                </div>

                <!-- single clients -->
                <div class="row align-items-center single-client">
                    
                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Tim's Journey with Investax - Building Success in Business and Property Investment
                        </div>

                        <div class="short-desc">
                            <p>Tim is the driving force behind Oz Strut, a prominent supplier of various fittings and fastening tools to the construction industry. With his exceptional business acumen, Tim has played a pivotal role in establishing and nurturing the growth of the company. He not only serves as the brilliant mind behind the business but also puts in relentless hard work to ensure its success.</p>
                            <p>Beyond being an outstanding businessman, Tim has also proven to be an excellent property investor. Recognizing the value of passive investment, he actively pursues opportunities to generate passive income. His keen interest in property investment has led him to build a remarkable property portfolio, which includes commercial warehouses and other assets.</p>
                            <p>Throughout his journey, Investax has been a trusted partner by Tim’s side. Since the very inception of his business, we have been involved, supporting him during the startup phase and continuing to assist him to this day. Together, we have created multiple business and asset structures, ensuring the seamless operation of his group’s business and investment ventures.</p>
                            <p>Tim’s unwavering dedication and vision for success have made us proud to be a part of his journey. At Investax, we remain fully committed to providing him with the best financial solutions, enabling him to achieve even greater heights in both business and property investment. Our enduring partnership with Tim is a testament to the value of long-term collaboration and the shared pursuit of success.</p>
                            <p>If you’re interested in learning more about Oz Strut and the comprehensive range of fittings and fastening tools they offer to the construction industry, we invite you to explore their website at your convenience. Feel free to visit <a href="https://ozstrut.com.au/" target="_blank">OZSTRUT – Delivering Solutions</a>.</p>
                        </div>


                        <div class="client-links">

                            <!-- site link -->
                            <a class="single-link" href="https://ozstrut.com.au/" target="_blank">
                                <img src="<?php echo (get_template_directory_uri()) ?>/images/globe-icon.svg" alt="">
                            </a>

                        </div>

                    </div>


                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/oz_strut-cover.png" alt="">
                    </div>


                </div>

                <!-- single clients -->
                <div class="row align-items-center single-client">

                    <div class="col-12 col-md-6 client-image">
                        <img src="<?php echo (get_template_directory_uri()) ?>/images/client-img-blur-1.jpg" alt="">
                    </div>

                    <div class="col-12 col-md-6 clients-details">

                        <div class="client-title">
                            Peter and Nat – Medical Professionals and Property Investors
                        </div>

                        <div class="short-desc">
                            <p>
                                What makes Peter and Nat a truly remarkable pair is their outstanding teamwork. Peter's expertise as an exceptional doctor combined with Nat's invaluable assistance has transformed them into an extraordinary team of property investors. While Peter focuses on his medical practice, Nhat takes charge of portfolio management and cash flow, all while skilfully balancing these responsibilities with raising three children. She is not just an exceptional mother but also the strong pillar supporting their successful investment portfolio.
                            </p>
                            <p>
                                For more than a decade, Investax has been diligently overseeing their work, providing crucial support in various investment structures, including a Self-Managed Superfund. We are truly grateful for their unwavering support and loyalty over the years. Their trust in our services and partnership has been an immense honor, and it fuels our dedication to delivering the best solutions
                            </p>
                        </div>

                    </div>

                </div>


                <!-- <button class="view-more">View More</button> -->

            </div>
        </div>
    </section>
</main>
<style>
    main {
        padding: 0px !important;
    }

    .our-clients {
        font-family: "Montserrat", sans-serif;
    }

    .our-clients .comp-title {
        margin-top: 2rem;
        color: #fff;
        background: #282828;
        padding: 0.2rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        width: -moz-fit-content;
        width: fit-content;
    }

    .our-clients hr {
        border-top: 2px solid #282828;
        margin-top: unset;
    }

    .our-clients .all-clients {
        padding: 2rem 0;
    }

    .our-clients .all-clients .single-client {
        margin-bottom: 3.5rem;
        line-height: 1.4;
    }

    .our-clients .all-clients .single-client .client-image {
        overflow: hidden;
    }

    .our-clients .all-clients .single-client .client-image .bg-img {
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }

    .our-clients .all-clients .single-client .client-image .img {
        width: 100%;
    }

    .our-clients .all-clients .single-client .clients-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .our-clients .all-clients .single-client .clients-details .client-title {
        font-weight: 700;
        font-size: 1.5rem;
        text-align: left;
        text-transform: capitalize;
        color: #333333;
    }

    .our-clients .all-clients .single-client .clients-details .short-desc {
        font-weight: 500;
    }

    .our-clients .all-clients .single-client .clients-details .short-desc p {
        font-size: 0.85rem;
        margin-bottom: 0.75rem;
        font-weight: 500;
        text-align: justify;
        color: #333;
    }

    .our-clients .all-clients .single-client .clients-details .client-links {
        margin-top: 0.25rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .our-clients .all-clients .single-client .clients-details .single-link {
        width: 1.8rem;
        height: 1.8rem;
        padding: 0.25rem;
        transition: all 0.35s;
        cursor: pointer;
    }

    .our-clients .all-clients .single-client .clients-details .single-link:hover {
        transform: scale(1.1);
    }

    .our-clients .all-clients .single-client .clients-details .single-link img {
        width: 100% !important;
        height: 100% !important;
    }

    .our-clients .all-clients .view-more {
        margin-top: 3rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0.5rem 2rem;
        background: #9e6d2d;
        border: none;
        width: -moz-fit-content;
        width: fit-content;
        letter-spacing: 2px;
        font-weight: 600;
        transition: all 0.3s;
    }

    .our-clients .all-clients .view-more:hover {
        background: #714c1c;
    }

    /*# sourceMappingURL=meet-the-clients.css.map */
</style>
<?php get_footer(); ?>