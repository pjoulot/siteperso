<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <title><?php echo($titleBalise);?></title>
  <meta name="viewport" content="width=device-width, user-scalable=yes" />
  <link rel="stylesheet" href="css/style.css" />

</head>

<body>

<nav>
	<div id="menuMobile">
		<a href="http://www.philippejoulot.fr"><div class="logoWebsite"></div></a>
		<div class="buttonMenu" onclick="menuShow();"></div>
	</div>
	<ul id="mainMenu">
	   <li><a href="http://www.philippejoulot.fr"><div class="logoWebsite"></div></a></li>
	   <li><a href="cv.html#"><span>CV</span></a></li>
	   <li><a href="projets-benevoles.html"><span>Projets bénévoles</span></a></li>
	   <li><a href='projets-personnels.html'><span>Projets personnels</span></a></li>
	   <li><a href="a-propos.html"><span>A Propos</span></a></li>
	   <li><a href="contact.html"><span>Contact</span></a></li>
	</ul>
</nav>
<h1 id="descSite">
	<?php echo($titlePage);?>
</h1>

<div class="lineDesign"></div>