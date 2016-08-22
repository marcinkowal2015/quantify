<div class="article">
    <div class="article__main">
        <div class="article__main__container">
            <div class="article__main__details">
                <p>Opublikowano <?php the_date('j F Y') ?></p>
                <p><?php the_tags('Tagi: ') ?></p>
            </div>
            <div class="article__main__author">
                <?php $author_post = get_field('autor') ?>
                <?php
                // override $post
                $post = $author_post;
                setup_postdata( $post );  ?>

                <div class="article__main__author__thumbnail">
                    <?php the_post_thumbnail() ?>
                </div>
                <div class="article__main__author__info">
                    <div class="article__main__author__info__name"><?php echo get_the_title() ?></div>
                    <div class="article__main__author__info__job"><?php echo get_field('stanowisko') ?></div>
                </div>
                <?php wp_reset_postdata(); ?>
            </div>
            <div class="article__main__content">
                <?php the_content() ?>
            </div>
        </div>
    </div>
    <div class="article__side">
        <div class="article__side__menu">
            <div class="article__side__menu__title">
                MENU
            </div>
            <div class="article__side__menu__item">
                Work in progress
            </div>
        </div>
    </div>
</div>