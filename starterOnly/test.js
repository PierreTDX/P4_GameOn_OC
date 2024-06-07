// Fonction générique pour vérifier si la date est valide
// et si l'âge est compris entre 18 et 120 ans
// qui prend comme paramètre une date
function validateBirthdateFormatAndAge(date) {
    console.log("valeur de la date de naissance", date);
    try {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
        console.log("Format de date est KO", date);
        return false;
      }
      const birthDateObj = new Date(date);
      const age = calculateAge(birthDateObj);
      if (age < 18 || age > 120) {
        console.log("Age KO", age);
        return false;
      }
      console.log("Date de naissance et âge OK", date, age);
      return true;
    } catch (error) {
      console.log("Erreur inconnue au niveau de la date de naissance", error);
      return false;
    }
  }
  
  // Fonction pour calculer l'âge à partir de la date de naissance
  function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }
  