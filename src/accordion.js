import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const createAccordionDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/accordion/';
    const sassDir = './assets/styles/sections/';

    mkdirp.sync(dir);
    mkdirp.sync(sassDir);
    fs.writeFileSync(dir + 'function.php', createFunctionFile());
    console.log('creating function.php');
    fs.writeFileSync(dir + 'item.php', createItemFile());
    console.log('creating item.php');
    fs.writeFileSync(sassDir + '_accordion.scss', createSassFile());
    console.log('creating _accordion.scss');
};

const createFunctionFile = () => {
    return '<?php \n' +
    'return (object) array( \n' +
    '    \'acf_name\' => \'accordion_section\', \n' +
    '    \'options\' => (options) array( \n' +
    '        \'func\' => function($padding_classes = \'\') { \n' +
    '            $p_loc = FlexibleContentSectionUtility::getSectionsDirectory(); \n' +
    '            $sb_loc = "$p_loc/accordion" \n' +
    '            $item = "$sb_loc/item.php" \n' +
    '            require($item) \n' +
    '        } \n' +
    '        \'has_padding\' => true \n' +
    '    ) \n' +
    ');';
};

const createItemFile = () => {
    return '<div class="accordion-section page-content-section <?php echo $padding_classes; ?>"> \n' +
    '    <div class="wrap"> \n' +
    '        <?php if ( get_sub_field(\'title\') ): ?> \n' +
    '            <div class="title-wrap"> \n' +
    '                <h2 class="title"><?php the_sub_field( \'title\' ); ?></h2> \n' +
    '                <?php if ( get_sub_field( \'sub-title\' ) ): ?> \n' +
    '                    <div class="desc"><?php the_sub_field( \'sub-title\' ); ?></div> \n' +
    '                <?php endif; ?> \n' +
    '            </div> \n' +
    '        <?php endif; ?> \n' +
    '        <?php if( have_rows( \'accordion_repeator\' ) ): ?> \n' +
    '            <div class="accordion-wrap"> \n' +
    '                <?php while( have_rows( \'accordion_repeator\' ) ): the_row(); ?> \n' +
    '                    <?php \n' +
    '                    $d_name = get_sub_field( \'title\' ); \n' +
    '                    $d_info = get_sub_field( \'content\' ); \n' +
    '                    ?> \n' +
    '                    <div class="accordion-row"> \n' +
    '                        <div class="accordion-title"> \n' +
    '                            <div class="title"><?php echo $d_name; ?></div> \n' +
    '                                <svg class="icon-plus" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon class="plus_fill" fill="#a6a6a6" points="80.2,51.6 51.4,51.6 51.4,22.6 48.9,22.6 48.9,51.6 19.9,51.6 19.9,54.1 48.9,54.1 48.9,83.1   51.4,83.1 51.4,54.1 80.4,54.1 80.4,51.6 "/></svg> \n' +
    '                            </div> \n' +
    '                        <div class="accordion-info"> \n' +
    '                            <?php echo $d_info; ?> \n' +
    '                        </div> \n' +
    '                    </div> \n' +
    '                <?php endwhile; ?> \n' +
    '            </div> \n' +
    '        <?php endif; ?> \n' +
    '    </div> \n' +
'</div>';
};

const createSassFile = () => {
    return '$accordion-template-close-color: #fff; \n' +
    '$accordion-template-title-hover-color: #fff; \n' +
    '$accordion-template-info-color: #686868; \n' +
    '\n' +
    '.accordion-section { \n' +
    '    box-sizing: border-box; \n' +
    '\n' +
	'.title { \n' +
	'	font-weight: 700; \n' +
	'	text-transform: uppercase; \n' +
	'} \n' +
    '\n' +
	'.desc { \n' +
	'	margin-bottom: 2em; \n' +
	'} \n' +
    '\n' +
	'.accordion-row { \n' +
	'	margin-bottom: 15px; \n' +
    '\n' +
	'	&:last-child { \n' +
	'		margin-bottom: 0; \n' +
	'	} \n' +
    '\n' +
	'	.accordion-title { \n' +
    '       @include transition($base-duration $base-timing); \n' +
	'		padding: 10px 20px; \n' +
	'		background: $dark-gray; \n' +
	'		color: #fff; \n' +
	'		text-transform: uppercase; \n' +
	'		position: relative; \n' +
	'		font-weight: 700; \n' +
	'		cursor: pointer; \n' +
	'		border: $base-border; \n' +
    '\n' +
	'		svg { \n' +
    '           @include transform(translateY(-50%)); \n' +
    '           @include transition($base-duration $base-timing); \n' +
	'			position: absolute; \n' +
	'			top: 50%; \n' +
	'			right: 15px; \n' +
	'			width: 30px; \n' +
	'			height: 30px; \n' +
	'			cursor: pointer; \n' +
    '\n' +
	'			path, polygon { \n' +
	'				fill: $accordion-template-close-color; \n' +
	'			} \n' +
	'		} \n' +
    '\n' +
	'		&:hover { \n' +
	'			border: 1px solid transparent; \n' +
	'			background: $action-color; \n' +
	'		} \n' +
    '\n' +
	'		&.active { \n' +
	'			border: 1px solid transparent; \n' +
	'			background: $action-color; \n' +
	'			svg { @include transform(translateY(-50%) rotate(45deg)); } \n' +
	'		} \n' +
	'	} \n' +
    '\n' +
	'	.accordion-info { \n' +
	'		display: none; \n' +
	'		color: $accordion-template-info-color; \n' +
	'		padding: 20px 20px 5px 20px; \n' +
	'		box-sizing: border-box; \n' +
    '\n' +
	'		* { \n' +
	'			margin-bottom: 0; \n' +
	'	    } \n' +
	'	} \n' +
    '\n' +
	'	&:first-child { padding-top: 0; } \n' +
	'   &:last-child { \n' +
	'		padding-bottom: 0; \n' +
	'		border-bottom: none; \n' +
	'	} \n' +
	'} \n' +
'}';
};

export default createAccordionDir;
