<?php
$titleBalise = 'Philippe Joulot';
$titlePage = 'Philippe Joulot, développeur logiciel/web';

include('includes/header.php');

?>

<div id="dashHashtag">
	<h2>#ILoveTheWeb #IAmAMozillian</h2>
	<p>Je m’appelle Philippe, je suis passionné par le web et l'Open Source.<br/> Je m'implique notamment pour Mozilla ainsi que d'autres projets libristes.</p>
	<img class="photo" src="images/me.png" alt="Philippe Joulot">
</div>
<div class="lineDesign"></div>
<div id="dash">
	<div id="dashContent" class="dashAccueil">
		<a href="cv.html">
			<p>Professionnel</p>
			<img src="images/accueil-template.png" alt="template Joomla" height="220" width="220">
			<p>Retrouvez mon parcours scolaire et professionnel</p>
		</a>
		<a href="projets-benevoles.html">
			<p>Associations et projets bénévoles</p>
			<img src="images/accueil-site.png" alt="template Joomla" height="220" width="220">
			<p>Besoin d'un développeur pour un projet bénévole? Offrez-moi un chocolat chaud et je verrai ce que je peux faire pour vous.</p>
		</a>
		<a href="projets-personnels.html">
			<p>Projets personnels</p>
			<img src="images/accueil-formation.png" alt="template Joomla" height="220" width="220">
			<p>Cette section vous présentera les projets personnels sur lesquels j'ai travaillés ou travaille encore actuellement.</p>
		</a>
	</div>
</div>

<?php
include('includes/footer.php');
?>