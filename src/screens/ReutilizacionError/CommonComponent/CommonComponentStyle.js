export const commonComponentStyle = theme => {
    return ({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& > div':{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                '& > h1':{
                    position: 'absolute',
                    top: '5%',
                    fontFamily: '',
                    fontWeight: '',
                    color: 'black',
                    fontSize: '1.5rem',
                    '& + img':{
                        marginTop: '70px',
                        width: 'clamp(10em,100%,30em)',
                        '@media (max-width: 700px) and (orientation: landscape)':{
                            width: 'clamp(10em,100%,20em)'
                        }
                    }
                }
            },
            '& > button':{
                alignSelf: 'center',
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
                '& > span':{
                    textTransform: 'capitalize'
                },
                '&:hover':{
                    opacity: '0.8',
                    backgroundColor: '#44af79'
                }
            }
        }
    })
};