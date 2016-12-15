<?php

return (object) array(
	'acf_name'  => 'fifty_fifty_section',
	'options'   => (object) array(
		'func'      => function ($padding_classes = '') {
			$p_loc = FlexibleContentSectionUtility::getSectionsDirectory();
			$i_loc = "$p_loc/fifty-fifty";

			$item = "$i_loc/item.php";

			$content = get_sub_field('fifty_image_content');
			$content_pos = get_sub_field('fifty_position');
			$image = get_sub_field('fifty_image');

			require( $item );
		},
		'has_padding'   => false
	)
);
