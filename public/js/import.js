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
        var file = "imports/" + $(this).data('import') + ".html";
        var hasJs = $(this).data('script');
        $(this).load(file, loadJs);

        function loadJs()
        {
            if (hasJs == true)
            {
                console.log(hasJs);
                var jsPath = "js/" + $(this).data('import') + ".js";
                $.getScript(jsPath);
            }
        }
    })
})