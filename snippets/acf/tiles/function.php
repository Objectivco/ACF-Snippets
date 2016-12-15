<?php

return (object) array(
	'acf_name'  => 'tile_section',
	'options'   => (object) array(
		'func'      => function ($padding_classes = '') {

			$p_loc = FlexibleContentSectionUtility::getSectionsDirectory();
			$i_loc = "$p_loc/tiles";
			$item = "$i_loc/item.php";

			require($item);

		},
		'has_padding'   => false
	)
);
