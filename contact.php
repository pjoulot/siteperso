<?php
$titleBalise = 'Philippe Joulot - Contact';
$titlePage = 'Contact';

include('includes/header.php');

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
		   <p><input type="submit" name="envoyer" value="Envoyer" /></p>
		</form>
	</div>
</div>

<?php
include('includes/footer.php');
?>