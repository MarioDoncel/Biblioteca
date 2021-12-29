import { createGlobalStyle} from 'styled-components'

// CSS RESET

export const GloblaStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;

    color:#fff;
    font-family: 'Roboto', sans-serif;
}
body{
    font-size: 1.2rem;
    
}

#root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background: radial-gradient(68.98% 68.98% at 50% 13.36%, #75D6F4 2.3%, #010101 100%);
}

@media(min-width:600px){
    :root{
        font-size: 18px;
    }
}

`