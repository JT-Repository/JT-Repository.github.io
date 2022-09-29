<!DOCTYPE html>
<html lang="en-GB">
<head>
<title>muneo - bespoke responsive website solutions - client portfolio</title>
<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="muneo">
<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes"> 
<meta name="mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> 
<meta name="HandheldFriendly" content="true">
<!--[if IEMobile]>
<meta http-equiv="cleartype" content="on">
<![endif]-->
<!--[if lt IE 9]>     
<div class="chromeframe">
<p><b>You appear to be using an outdated browser.</b> Please upgrade your browser by following this <a href="http://browsehappy.com/" title="Upgrade your browser today" target="_blank">link</a>. Alternatively, please <a href="http://www.google.com/chromeframe/?redirect=true" target="_blank">install Google Chrome Frame</a> for a better view of this site and many others.</p>
<![endif]-->
   
<link rel="canonical" href="http://www.muneo.co.uk/client-portfolio.php" />
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/text.css" />
<link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/menu.css" />
<link rel="stylesheet" href="css/forms.css" />
    
<link href="http://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet" type="text/css">

<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" sizes="196x196" href="large-icon.png">
<!-- For iPad with high-resolution Retina display running iOS ≥ 7: -->
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152-precomposed.png">
<!-- For iPad with high-resolution Retina display running iOS ≤ 6: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png">
<!-- For iPhone with high-resolution Retina display running iOS ≥ 7: -->
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120-precomposed.png">
<!-- For iPhone with high-resolution Retina display running iOS ≤ 6: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
<!-- For the iPad mini and the first- and second-generation iPad on iOS ≥ 7: -->
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76-precomposed.png">
<!-- For the iPad mini and the first- and second-generation iPad on iOS ≤ 6: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
<!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

</head>

<body id="portfolio">
    
<a class="back-to-top" href="#top" title="Click here to return to the top of the page."></a>
    
<header class="header">
    
    <a class="logo" href="index.php" title="muneo responsive websites logo"></a>

    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item"><a class="about" href="about.php" title="">about<span>muneo</span></a></li>
            <li class="nav-item"><a class="services" href="design-services.php" title="">design<span>services</span></a></li>
            <li class="nav-item current"><a class="portfolio" href="client-portfolio.php" title="">client<span>portfolio</span></a></li>
            <li class="nav-item"><a class="contact" href="contact.php" title="">get in<span>touch</span></a></li>
       </ul>
    </nav>
    
</header>

<a name="top"></a>
<div class="container">

<div class="row">

    <div class="responsive-full-width">
        <div class="inflated">
            
            <h1>client <strong>portfolio</strong></h1>
            <p>Awaiting content...please come back soon.</p>
            
        </div>
    </div>
    
</div> <!--- END .row --->
    
</div> <!--- END .container --->

<footer>
 
    <div class="row">
        
        <div class="responsive-one-third">
            <div class="inflated">
                <div class="feedback">
                    <h3>client<br/><em>feedback</em></h3>
                    <p>Please take a few moments to read some of the lovely feedback that we have received from our satisfied customers. <a class="" href="contact.php" title=""><strong>You may even want to leave your own?</strong></a></p>
                    <ul id="testimonials">  
                        <li>
                            <blockquote><small></small><span><a class="" href="" title="" target="_blank"></a></span></blockquote>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="responsive-one-third">
            <div class="inflated">
                <div class="projects">
                    <h3>recent<br/><em>projects</em></h3>
                    <p>Please have a browse through some our most recent projects. You may see a design or specific elements from a site that you would like to incorporate into your own.</p>
                    <a class="" href="" title="">
                        <img class="" src="../img/test-screen.png" title="" />
                    </a>
                    <a class="" href="" title="">
                        <img class="" src="../img/test-screen.png" title="" />
                    </a>
                    <a class="" href="" title="">
                        <img class="" src="../img/test-screen.png" title="" />
                    </a>
                    <a class="" href="" title="">
                        <img class="" src="../img/test-screen.png" title="" />
                    </a>
                </div>
            </div>
        </div>
        
        <div class="responsive-one-third">
            <div class="inflated">
                <div class="get-in-touch">
                    <h3>get in<br/><em>touch</em></h3>
                    <p><strong>Do you have a question?</strong> Please send us your query and one of the team will get back to you as soon as they become available.</p>
                    
                    <?php 
                            $action=$_REQUEST['action']; 
                            if ($action=="") /* display the contact form */
                                { 
                            ?>
                    
                    <form autocomplete="on" action="" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="action" value="submit">
                    <label>your <strong>name</strong></label>
                    <input id="name" name="name" type="text" class="" value="" tabindex="1" title="Please enter your name.">
                    <label>your <strong>email address</strong></label>
                    <input id="email" name="email" type="email" spellcheck="false" value="" tabindex="2" title="Please enter your email address.">
                    <label>your <strong>message</strong></label>
                    <textarea id="message" name="message" spellcheck="true" tabindex="3" title="Please enter your question or personal message."></textarea>
                    <input id="submit" name="submit" type="submit" value="Send us your enquiry.">
                    </form>
                    
                    <?php 
                        
                            }  
                            else /* send the submitted data */
                        { 
                        $name=$_REQUEST['name']; 
                        $email=$_REQUEST['email']; 
                        $message=$_REQUEST['message']; 
                        if (($name=="")||($email=="")||($message=="")) 
                            { 
                            echo "All fields are required, please complete <a href=\"\">the form</a> and resubmit."; 
                            } 
                        else{         
                            $from="From: $name<$email>\r\nReturn-path: $email"; 
                            $subject="Message sent via the website contact form"; 
                            mail("sales@muneo.co.uk", $subject, $message, $from);
                            echo "<p><strong>Your enquiry has been sent.</strong><br/><br/>One of the team will be in touch soon.</p>";
                            } 
                        }   
                    ?>
                    
                </div>
            </div>
        </div>
        
        <div class="responsive-full-width">
            <div class="inflated">
                <div class="legal">
                    <a class="logo" href="index.php" title="Return to the homepage."></a>
                    <p>
                        <em>muneo</em>. All rights reserved.
                        <span>
                            <a class="" href="privacy-policy.php" title="Link to our Privacy Policy">Privacy Policy</a>
                            <a class="" href="terms-and-conditions.php" title="Link to our Terms &amp; Conditions">Website Terms</a>
                            <a class="" href="sitemap.php" title="Link to our Sitemap">Site Map</a>
                        </span>
                    </p>
                </div>
            </div>  
        </div>
        
    </div> <!--- END .row --->

</footer>
    
<script src="js/modernizr.js"></script>
<script src="js/jquery.respond.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.menu.js"></script>

<script>
    
$.fn.mobileFix = function (options) {
    var $parent = $(this),
    $fixedElements = $(options.fixedElements);

    $(document)
    .on('focus', options.inputElements, function(e) {
        $parent.addClass(options.addClass);
    })
    .on('blur', options.inputElements, function(e) {
        $parent.removeClass(options.addClass);

        // Fix for some scenarios where you need to start scrolling
        setTimeout(function() {
            $(document).scrollTop($(document).scrollTop())
        }, 1);
    });

    return this; // Allowing chaining
};

// Only on touch devices
if (Modernizr.touch) {
    $("body").mobileFix({ // Pass parent to apply to
        inputElements: "input,textarea,select", // Pass activation child elements
        addClass: "fixfixed" // Pass class name
    });
}
    
/* testimonial randomiser */
this.randomtip = function(){
    var length = $("#testimonials li").length;
    var ran = Math.floor(Math.random()*length) + 1;
    $("#testimonials li:nth-child(" + ran + ")").show();
};

$(document).ready(function(){	
    randomtip();
});

/* google analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-50141706-1', 'muneo.co.uk');
ga('send', 'pageview');
    
</script>

</body>
</html>