import React from 'react'
import "./style.css";

const Register = () => {
  return (
    <div className="flex flex-row justify-center p-40">
        <form class="formReg">
            <p class="titleReg">Créer un nouveau compte </p>
            <p class="messageReg">Créer un compte vous permet d'acheter nos produits. </p>
                <div class="flexReg">
                <label>
                    <input required="" placeholder="" type="text" class="inputReg"/>
                    <span>Prénom</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" class="inputReg"/>
                    <span>Nom</span>
                </label>
            </div>  
                    
            <label>
                <input required="" placeholder="" type="email" class="inputReg"/>
                <span>Email</span>
            </label> 
                
            <label>
                <input required="" placeholder="" type="password" class="inputReg"/>
                <span>Mot de passe</span>
            </label>
            <label>
                <input required="" placeholder="" type="password" class="inputReg"/>
                <span>Confirmer votre mot de passe</span>
            </label>
            <button class="submitReg">Enregistrer</button>
            <p class="signinReg">Vous avez déjà un compte ? <a href="./Connexion">Connexion</a> </p>
        </form>
    </div>
  )
}

export default Register