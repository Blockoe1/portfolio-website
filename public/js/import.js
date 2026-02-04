// Note to self: jQuery .load() function takes an absolute path from the project root.
// $(function ()
// {
//     $("#navbar").load("navbar.html");
// });
// $(function ()
// {
//     $("#footer").load("footer.html");
// });
// $(function ()
// {
//     $("#footer-a").load("footer-a.html");
// });

$(function(){
    var imports = $('[data-import]');
    $.each(imports, function() {
        var file = $(this).data('import') + ".html";
        var jsPath = $(this).data('script') + ".js";
        $(this).load(file, loadJs);

        function loadJs()
        {
            // If no script is specified, ignore it.
            if (jsPath != "undefined.js")
            {
                $.getScript(jsPath);
            }
        }
    })
})