<div class="type07">
    <div class="type07__main">
        <div class="type07__main__image">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="type07__main__business-type">
            <div class="type07__main__business-type__title active">B2B</div>
            <div class="type07__main__business-type__title">B2C</div>
        </div>
        <div class="type07__main__content">
            <div class="type07__main__content__item active"><?php echo get_field('b2b') ?></div>
            <div class="type07__main__content__item"><?php echo get_field('b2c') ?></div>
        </div>
    </div>
    <div class="type07__side">
        <?php get_template_part('siblings-menu') ?>
        <div class="learn-more">
            <div class="learn-more__title">
                Dowiedz się więcej
            </div>
            <div class="learn-more__link">
                <?php $dictionary = get_field('slownik_badawczy');?>
                <a href="<?php echo get_permalink($dictionary->post_parent)?>">Słownik badawczy</a> » <a href="<?php echo get_permalink($dictionary->ID)?>"><?php the_title()?></a>
            </div>
            <div class="learn-more__link">
                <?php $article = get_field('artykul');  ?>
                <a href="<?php echo get_permalink($article->post_parent)?>">Artykuły</a> » <a href="<?php echo get_permalink($article->ID)?>"><?php the_title()?></a>
            </div>
        </div>
        <div class="contact-form">
            <div class="contact-form__title">
                Szybki kontakt
            </div>
            <?php echo do_shortcode('[sform id=\'266\']') ?>
        </div>
    </div>
</div>