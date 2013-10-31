/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'editor.js',
            'core/browser.js',
            'core/utils.js',
            'core/EventBase.js',
            'core/dtd.js',
            'core/domUtils.js',
            'core/Range.js',
            'core/Selection.js',
            'core/Editor.js',
            'core/filterword.js',
            'core/node.js',
            'core/htmlparser.js',
            'core/filternode.js',
            'plugins/inserthtml.js',
            'plugins/image.js',
            'plugins/justify.js',
            'plugins/font.js',
            'plugins/link.js',
            'plugins/print.js',
            'plugins/paragraph.js',
            'plugins/horizontal.js',
            'plugins/cleardoc.js',
            'plugins/undo.js',
            'plugins/paste.js',
            'plugins/list.js',
            'plugins/source.js',
            'plugins/enterkey.js',
            'plugins/preview.js',
            'plugins/basestyle.js',
            'plugins/video.js',
            'plugins/selectall.js',
            'plugins/removeformat.js',
            'plugins/keystrokes.js',
            'plugins/dropfile.js',
            'adapter/adapter.js'
        ],
        baseURL = '../_src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
