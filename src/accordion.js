import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const createAccordionDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/accordion/';

    mkdirp.sync(dir);
    fs.writeFileSync(dir + 'function.php', createFunctionFile());
    console.log('creating function.php');
    fs.writeFileSync(dir + 'item.php', createItemFile());
    console.log('creating item.php');
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
    return '<?php \n' +
    '$content = get_sub_field(\'content\'); \n' +
    '?>\n' +
    '<div class="accordion-section page-content-section <?php echo $padding_classes; ?>"> \n' +
    '    <div class="wrap"> \n' +
    '        <?php echo do_shortcode( $content ); ?> \n' +
    '    </div> \n' +
    '</div>';
};

export default createAccordionDir;
