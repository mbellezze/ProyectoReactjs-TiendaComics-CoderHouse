export const finalizarCompraStyle = theme => {
    return ({
        text:{
            textAlign: 'center',
            marginBottom: '2%',
        },
        inputs:{
            width: '30%',
            marginBottom: '2%'
        },
        buttons:{
            marginTop: '20px',
            alignSelf: 'center',
            textDecoration: 'none',
            marginRight: '1em',
            fontSize: '1.2em',
            borderRadius: '20px',
            backgroundColor: '#44af79',
            color: 'white',
            padding: '0.5em 1em',
            marginBottom: '10px',
            border: 'none',
            fontFamily: '',
            fontweight: 'bold',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
            '&:hover':{
                opacity: '0.8',
                backgroundColor: '#44af79'
            }
        }
    })
}