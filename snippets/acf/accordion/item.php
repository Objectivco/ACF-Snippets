<section class="accordion-block page-flexible-section <?php echo $padding_classes; ?>">
	<div class="wrap wrap_thin inside-content-wrap">
		<?php if(get_sub_field('accordion_heading')): ?>
		<div class="title-wrap">
			<h3 class="title"><?php the_sub_field('accordion_heading'); ?></h3>
			<div class="desc"><?php the_sub_field('accordion_description'); ?></div>
		</div>
		<?php endif; ?>
		<?php if( have_rows('accordion_repeater') ): ?>
			<div class="accordion-wrap">
				<?php while( have_rows('accordion_repeater') ): the_row();
					$d_name = get_sub_field('title');
					$d_info = get_sub_field('content');
					do_action( 'accordion_row', $d_name, $d_info, false, null );
					?>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
