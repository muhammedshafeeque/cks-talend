import { signInWithPhoneNumber,RecaptchaVerifier} from 'firebase/auth'
import {auth} from '../Firebase/Firebase-config'

class AuthService{

    requestOTP=(mobile)=>{

        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
          );
          recaptchaVerifier.render();
          return signInWithPhoneNumber(auth, '+918075806497', recaptchaVerifier);
        // this.generateReCaptcha()
        
        // const appVerifier = window.recaptchaVerifier;

        // signInWithPhoneNumber(auth,'+918075806497',appVerifier).then((confirmationResult)=>{
        //     window.confirmationResult = confirmationResult;
        // }).catch((error)=>{
        //     console.log(error)
        // })

      
    }
}
export default new AuthService