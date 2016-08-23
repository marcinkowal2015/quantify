<div class="contact">
    <div class="contact__main">
        <div class="contact__main__thumbnail">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="contact__main__info">
            <div class="contact__main__info__upper">
                <div class="contact__main__info__upper__name">
                    <?php echo get_field('imie') ?>
                </div>
                <div class="contact__main__info__upper__job">
                    <?php echo get_field('stanowisko') ?>
                </div>
                <div class="contact__main__info__upper__phone">
<?php echo get_field('telefon') ?>
                </div>
            </div>
            <div class="contact__main__info__lower">
                <div class="contact__main__info__lower__email-1">
                    <p>Zapytania ofertowe:</p>
                    <?php echo get_field('zapytania_ofertowe') ?>
                </div>
                <div class="contact__main__info__lower__email-2">
                    <p>Praca:</p>
                    <?php echo get_field('praca') ?>
                </div>
            </div>
        </div>
    </div>
    <div class="contact__side">
        <div class="contact-form">
            <div class="contact-form__title">
                Szybki kontakt
            </div>
            <?php echo do_shortcode('[sform id=\'266\']') ?>
        </div>
    </div>
</div>