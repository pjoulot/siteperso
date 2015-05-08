<?php
$titleBalise = 'Philippe Joulot - Contact';
$titlePage = 'Contact';

include('includes/header.php');

if (!empty($_POST['pseudo']) AND !empty($_POST['adresse_mail']) AND empty($_POST['bot']) AND !empty($_POST['objet']) AND !empty($_POST['contenu_message']))
	{
	// Stockage des données du formulaire
    $pseudo = stripslashes(htmlspecialchars($_POST['pseudo'],ENT_QUOTES));
	$adresse_mail = stripslashes(htmlspecialchars($_POST['adresse_mail'],ENT_QUOTES));
	$importance = stripslashes(htmlspecialchars($_POST['importance'],ENT_QUOTES));
	$objet = stripslashes(htmlspecialchars($_POST['objet']));
	$contenu_message = stripslashes(htmlspecialchars($_POST['contenu_message'],ENT_QUOTES));

	
}

?>

<div id="dash">
	<div id="dashContent">
		<form action="contact.html" method="post">
		   <p>Vous avez besoin de me contacter? Envoyez-moi un message en remplissant le formulaire ci-dessous:</p>
		   <p><label class="gras">Nom</label> : <input type="text" name="pseudo" value="" /> </p>
		   <p><label class="gras">Adresse mail</label> : <input type="text" name="adresse_mail" size="30" value="" /> </p>
		   <p><label class="gras">Objet</label> : 
		   <select name="objet">
			   <option >Questions</option>
			   <option >Stage</option>
			   <option >Offre d'emploi</option>
			   <option >Demande de partenariat</option>
			   <option >Autres</option>
		   </select>
		   </p>
		   <p><label class="gras">Contenu du message</label>: <br/>
			<textarea name="contenu_message" rows="12" cols="50"></textarea>
		   </p>
		   <!-- Champ mail à ne pas remplir - pour les bots -->
		   <p><input type="text" name="mail" value="" /></p>
		   <p><input type="submit" name="envoyer" value="Envoyer" /></p>
		</form>
	</div>
</div>

<?php
include('includes/footer.php');
?>