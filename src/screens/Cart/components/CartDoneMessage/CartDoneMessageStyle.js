export const cartDoneMessageStyle = () => {
    return({
        messageOrder:{
            textAlign: 'center',
            margin: '40px 0 30px 0',
            '& > h3':{
                marginBottom: '25px',
            },
            '& > p':{
                marginTop: '25px',
                fontSize: '1.2em',
            }
        },
        container:{
            display: 'flex',
            justifyContent: 'center',
        },
        button:{
            alignSelf: 'center',
            textDecoration: 'none',
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
            '& > span':{
                textTransform: 'capitalize'
            },
            '&:hover':{
                opacity: '0.8',
                backgroundColor: '#44af79'
            }
        },
    })
}