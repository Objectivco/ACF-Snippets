<?php

return (object) array(
	'acf_name'  => 'content_section',
	'options'   => (object) array(
	'func'      => function ($padding_classes = '') {
		$p_loc = FlexibleContentSectionUtility::getSectionsDirectory();
		$fcta_loc = "$p_loc/content";
		$item = "$fcta_loc/item.php";

		$content = get_sub_field( 'content' );

		require($item);
	},
	'has_padding'   => true
	)
);
