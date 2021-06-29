export const confirmarCompraStyle = theme => {
    return ({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        link:{
            textDecoration: 'none',
            alignSelf: 'center',
            fontSize: '1.2em',
            borderRadius: '20px',
            backgroundColor: '#44af79',
            color: 'white',
            padding: '0.5em 1em',
            marginTop: '20px',
            border: 'none',
            fontFamily: '',
            fontweight: 'bold',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
            '& > span':{
                textTransform: 'capitalize'
            },
            '&:hover':{
                opacity: '0.8',
                backgroundColor: '#44af79'
            }
        },
    });
}