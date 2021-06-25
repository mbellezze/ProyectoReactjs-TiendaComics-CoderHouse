export const navBarStyle = theme => {
    return ({
        containerNav:{
            position: 'static',
            backgroundColor: 'white',
        },
        toolbar: {
            padding: '10px 20px 10px 20px',
        },
        logo:{
            marginRight: '50px',
        },
        botones:{
            fontSize: '1.5em',
            fontFamily: 'Helvetica',
            '&:hover':{
                color: 'crimson',
                backgroundColor: 'transparent'
            }
        }
    })
}