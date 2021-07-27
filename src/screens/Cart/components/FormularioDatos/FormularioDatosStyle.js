export const formularioDatosStyle = theme => {
    return ({
        root:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'lightblue'
        },
        text:{
            textAlign: 'center',
            marginBottom: '2%',
            [theme.breakpoints.between('xs', 'md')]:{
                fontSize: '1.2em'
            },
        },
        inputs:{
            width: '30%',
            marginBottom: '2%',
        },
        submmitButton:{
            alignSelf: 'center',
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
            [theme.breakpoints.between('xs', 'md')]:{
                fontSize: '0.9em'
            },
            '& > span':{
                textTransform: 'capitalize'
            },
            '&:hover':{
                opacity: '0.8',
                backgroundColor: '#44af79'
            }
        },
        actionsContainer:{
            flexDirection: 'column',
            alignItems: 'center',
        },
        totalContainer:{
            fontSize: '1.3em',
            [theme.breakpoints.between('xs', 'md')]:{
                fontSize: '0.9em'
            },
        }
    })
}