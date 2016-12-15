<section class="fifty-fifty-section page-flexible-section <?php echo $padding_classes; ?>">
    <div class="image item <?php echo $content_pos; ?>">
	<?php
	$fifty_image = wp_get_attachment_image_src( $image, 'cgd_50_50_img' )[0];
	?>
	<div class="bg" style="background: url('<?php echo $fifty_image; ?>') no-repeat 50% 50%; background-size: cover;"></div>
    <div class="wrap inside-content-wrap">
	<div class="content-section item <?php echo $content_pos; ?>">
		<?php if ( ! empty( $content ) ) : ?>
			<?php echo $content ?>
		<?php endif; ?>
	</div>
</div>
</div>
</section>
