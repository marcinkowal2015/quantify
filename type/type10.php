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
                <?php _e('Szybki kontakt' , 'quantify') ?>
            </div>
            <?php if ( is_active_sidebar( 'side_bar' ) ) : ?>
                <?php dynamic_sidebar( 'side_bar' ); ?>
            <?php endif; ?>
        </div>
    </div>
</div>