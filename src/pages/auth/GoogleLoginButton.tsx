// import { Button } from "@material-ui/core"
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {startLoginGoogle}from"../../redux/actions/"


export const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
  const [user, setUser] = useState(undefined)

  const handleGoogleSignIn = (res: CredentialResponse) => {
    // console.log(res)
    if (!res.clientId || !res.credential) return
    
    dispatch(startLoginGoogle(res));
      // Implement your login mutations and logic here.
      // Set cookies, call your backend, etc. 
  
      // setUser(eval.data?.login.user)

      // console.log(user)
    }

    const initializeGsi = () => {
      // Typescript will complain about window.google
      // Add types to your `react-app-env.d.ts` or //@ts-ignore it.
      if (!window.google || gsiScriptLoaded) return

      setGsiScriptLoaded(true)
      google.accounts.id.initialize({
        client_id: "727616130057-5d80d13l0pl7j3rdrf6hc51796i6auqb.apps.googleusercontent.com",
        callback: handleGoogleSignIn,
      })
      // google.accounts.id.prompt(notification => {
          
      // });
    }
  useEffect(() => {
    // if (user?._id || gsiScriptLoaded) return

    

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.onload = initializeGsi
    script.async = true
    script.id = "google-client-script"
    document.querySelector("body")?.appendChild(script)

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel()
      document.getElementById("google-client-script")?.remove()
    }
  }, [handleGoogleSignIn, initializeGsi, user?._id])






return <div 
        
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="Continuar con Google"
          data-size="large"
          data-logo_alignment="center">
        

        </div>

}