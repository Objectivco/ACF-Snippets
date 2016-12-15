'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createContentDir = function createContentDir() {
    console.log('creating the files...');

    var dir = './partials/sections/content/';

    _mkdirp2.default.sync(dir);
    _fs2.default.writeFileSync(dir + 'function.php', createFunctionFile());
    console.log('creating function.php');
    _fs2.default.writeFileSync(dir + 'item.php', createItemFile());
    console.log('creating item.php');
};

var createFunctionFile = function createFunctionFile() {
    return '<?php \n' + 'return (object) array( \n' + '    \'acf_name\' => \'content_section\', \n' + '    \'options\' => (options) array( \n' + '        \'func\' => function($padding_classes = \'\') { \n' + '            $p_loc = FlexibleContentSectionUtility::getSectionsDirectory(); \n' + '            $sb_loc = "$p_loc/content" \n' + '            $item = "$sb_loc/item.php" \n' + '            require($item) \n' + '        } \n' + '        \'has_padding\' => true \n' + '    ) \n' + ');';
};

var createItemFile = function createItemFile() {
    return '<?php \n' + '$content = get_sub_field(\'content\'); \n' + '?>\n' + '<div class="content-section page-content-section <?php echo $padding_classes; ?>"> \n' + '    <div class="wrap"> \n' + '        <?php echo do_shortcode( $content ); ?> \n' + '    </div> \n' + '</div>';
};

exports.default = createContentDir;