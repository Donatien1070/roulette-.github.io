print("")
print("Bienvenue dans le casino de Gogo le Rigolo.")
print("")

import random
import time

liste_couleurs = ["noir", "rouge"]

time.sleep(2)

print("")
print("Le seul jeu à ce jour est la roulette!")
print("")
#demande si parier juste une couleur 

print("")
user_bet_color_yn = input("Si vous voulez parier sur une couleur ? si NON vous parirer sur un nombre et un couleur . oui /non :  ")

# si / sinon
if user_bet_color_yn == ("oui"):
      print("")
      print("d'accord choisiser entre noir ou rouge : ")
      print("")

      user_bet_color = input("")
      couleur_aléatoire = random.choice(liste_couleurs)

      time.sleep(5)

      print("")
      print("Couleur du joueur :", user_bet_color)
      print("")
      print("Couleur tirée au sort :", couleur_aléatoire)
      if user_bet_color == couleur_aléatoire : 
         print("")
         print("Félicitations ! Vous avez gagné !")
      else :
         print("")
         print("Dommage, meilleure chance la prochaine fois.")

else :  

 print("")
 print("Choisissez un nombre entre 0 et 36.") 
 print("")

 user_input_chiffre = input("Chiffre: ")
 if user_input_chiffre == "0":
    print("")
    print("La couleur est automatiquement Vert")
    print("")
    user_input_couleur = "Vert"
 else: 
    print("Choisissez une couleur entre Noir et Rouge.")
    print("")
    user_input_couleur = input("Couleur: ")

    nombre_aléatoire = random.randint(0, 36)
    couleur_aléatoire = random.choice(liste_couleurs)

    time.sleep(5)
    print("")
    print("Couleur du joueur :", user_input_couleur)
    print("Nombre du joueur :", user_input_chiffre) 
    print("")
    print("Couleur tirée au sort :", couleur_aléatoire)
    print("Nombre tiré au sort :", nombre_aléatoire)

    if user_input_chiffre == nombre_aléatoire and user_input_couleur == couleur_aléatoire :
     print("")
     print("Félicitations ! Vous avez gagné !")
    else:
     print("")
     print("Dommage, meilleure chance la prochaine fois.")
