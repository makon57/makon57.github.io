function include(file) {

    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}
include("https://www.wpromotions.eu/confetti.min.js")


<script>confetti.start()</script>
<script>setTimeout(function(){confetti.stop();},3000)</script>
