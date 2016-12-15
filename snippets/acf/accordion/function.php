<?php

return (object) array(
	'acf_name'  => 'accordion_section',
	'options'   => (object) array(
	'func'      => function ($padding_classes = '') {
		$p_loc = FlexibleContentSectionUtility::getSectionsDirectory();
		$sb_loc = "$p_loc/accordion";
		$item = "$sb_loc/item.php";

		require($item);
	},
	'has_padding'   => true
	)
);
