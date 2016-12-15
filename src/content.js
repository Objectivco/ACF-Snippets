import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const createContentDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/content/';

    mkdirp.sync(dir);
    fs.writeFileSync(dir + 'function.php', createFunctionFile());
    fs.writeFileSync(dir + 'item.php', createItemFile());
    fs.writeFileSync(sassDir + '_content.scss', createSassFile());

};

const createFunctionFile = () => {
    return '<?php \n' +
    'return (object) array( \n' +
    '    \'acf_name\' => \'content_section\' \n' +
    '    \'options\' => (options) array( \n' +
    '        \'func\' => function($padding_classes = \'\') { \n' +
    '            $p_loc = FlexibleContentSectionUtility::getSectionsDirectory(); \n' +
    '            $sb_loc = "$p_loc/content" \n' +
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
    '<div class="content-section page-content-section <?php echo $padding_classes; ?>"> \n' +
    '    <div class="wrap"> \n' +
    '        <?php echo do_shortcode( $content ); ?> \n' +
    '    </div> \n' +
    '</div>';
};

export default createContentDir;
