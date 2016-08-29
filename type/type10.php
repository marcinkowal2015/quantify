<div class="contact">
    <div class="contact__main">
        <div class="contact__main__thumbnail">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="contact__main__info">

            <div class="contact__main__info__content">
                <?php the_content() ?>
            </div>
        </div>
    </div>
    <div class="contact__side">
        <div class="contact-form">
            <div class="contact-form__title">
                Szybki kontakt
            </div>
            <?php echo do_shortcode('[sform id=\'423\']') ?>
        </div>
    </div>
</div>