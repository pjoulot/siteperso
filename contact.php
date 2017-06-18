<?php
$titleBalise = 'Philippe Joulot - Contact';
$titlePage = 'Contact';

include('includes/header.php');

$message = "";
$displayMessage = "";
$valid_mail = "";
$valid_envoi = 0;

function sendMail($destinataire, $emetteur, $sujet, $message) {

	$headers = "From: \"$emetteur\"<$emetteur>\n";
	$headers .= "Reply-To: $emetteur\n";
	$headers .= 'Content-Type: text/html; charset="utf-8"'."\n";
	$headers .= 'Content-Transfer-Encoding: 8bit';
	
	$ok = mail($destinataire, utf8_decode($sujet), $message, $headers);
	
	return $ok;
}

if(!empty($_POST['envoyer'])) {
	if (!empty($_POST['pseudo']) AND !empty($_POST['adresse_mail']) AND empty($_POST['mail']) AND !empty($_POST['objet']) AND !empty($_POST['contenu_message']))
		{
		// Stockage des données du formulaire
		$pseudo = stripslashes(htmlspecialchars($_POST['pseudo'],ENT_QUOTES));
		$adresse_mail = stripslashes(htmlspecialchars($_POST['adresse_mail'],ENT_QUOTES));
		$objet = stripslashes(htmlspecialchars($_POST['objet']));
		$contenu_message = stripslashes(htmlspecialchars($_POST['contenu_message'],ENT_QUOTES));
		
		//On affiche le message
		$displayMessage = " class=\"display\" ";
		
		$destinataire="philippe.joulot@laposte.net";
		$personne = "Philippe Joulot";
		
		// Ecriture du message à envoyer
		$message .= "<html>\n";
		$message .= "<head><title>$objet</title></head>\n";
		$message .= "<body>\n";
		$message .= "<b>Objet du message:</b> $objet<br/>\n";
		$message .= "Message envoyé par <font color=\"green\">$pseudo</font> et son adresse mail est <font color=\"green\">$adresse_mail</font><br/>\n";
		$message .= "<b>Message:</b><br/>\n";
		$message .= "$contenu_message\n";
		$message .= "</body>\n";
		$message .= "</html>\n";
		
		if (!(preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $adresse_mail)))
		{
			$valid_mail='<span class="red gras">E-mail invalide</span>';
			$valid_envoi=1;
		}
		else
		{
			$valid_mail='<span class="green gras">E-mail valide</span>';
		}
		
		// Envoi du message
		
		if($valid_envoi == 0) {
			$ok = sendMail($destinataire,$adresse_mail,$objet,$message);
			if ($ok == TRUE) 
			{
				$message = "<p class=\"valide\">Votre message a bien été envoyé. Merci.</p>";
			}
			else
			{
				$message = "<p class=\"erreur\">Une erreur interne est survenue. Veuillez réessayer. Si le problème persiste, veuillez contacter un administrateur.</p>";
			}
		}
		else {
			$message = "<p class=\"erreur\">Une erreur de saisie a été commise au niveau de la saisie du formulaire. Merci de corriger celui-ci.</p>";
		}
	}
	else {
		$message = "<p class=\"erreur\">Veuillez renseigner tous les champs du formulaire. Merci.</p>";
	}
}

?>

<div id="dash">
	<div id="dashContent">
		<form action="contact.html" method="post">
		   <p>Vous avez besoin de me contacter? Envoyez-moi un message en remplissant le formulaire ci-dessous:</p>
		   <?php echo($message); ?>
		   <p><label class="gras">Nom</label> : <input type="text" name="pseudo" value="" /> </p>
		   <p><label class="gras">Adresse mail</label> : <input type="text" name="adresse_mail" size="30" value="" /> <?php echo($valid_mail);?></p>
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