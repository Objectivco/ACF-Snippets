<?php

return (object) array(
	'acf_name'  => 'tile_section',
	'options'   => (object) array(
		'func'      => function ($padding_classes = '') {

			$p_loc = FlexibleContentSectionUtility::getSectionsDirectory();
			$i_loc = "$p_loc/tiles";

			$start = "$i_loc/start.php";
			$end = "$i_loc/end.php";
			$item = "$i_loc/item.php";

			require($start);

			require($item);

			require($end);
		},
		'has_padding'   => false
	)
);
