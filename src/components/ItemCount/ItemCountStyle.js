export const itemCountStyle = theme => {
    return ({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '10px',
            '& > h5':{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '0.8em'
            },
            '& > div':{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > button':{
                    alignSelf: 'center',
                    fontSize: '1.2em',
                    borderRadius: '20px',
                    backgroundColor: '#44af79',
                    color: 'white',
                    marginBottom: '10px',
                    border: 'none',
                    fontFamily: '',
                    fontweight: 'bold',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease',
                    [theme.breakpoints.between('xs', 'md')]:{
                        fontSize: '0.9em'
                    },
                    '&:hover':{
                        opacity: '0.8',
                        backgroundColor: '#44af79'
                    },
                },
                '& > h4':{
                    paddingBottom: '8px',
                    margin: '10px',
                    fontSize: '1.1em',
                }
            },
            '& > button':{
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
            }
        }
    });
};
