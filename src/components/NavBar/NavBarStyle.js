export const navBarStyle = theme => {
    return ({
        containerNav:{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#a8dd81',
            '& > a':{
                fontFamily: 'Frijole',
                fontSize: '2em',
                color: 'white',
                marginRight: '50px',
                textDecoration: 'none',
                '& > img':{
                    marginLeft: '800px',
                }
            },
            '& > div > a':{
                fontFamily: 'Special Elite',
                fontSize: '1.2em',
                color: 'white',
                marginRight: '20px',
                textDecoration: 'none',
            }
        }
    })
}