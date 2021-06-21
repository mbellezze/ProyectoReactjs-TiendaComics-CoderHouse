export const navBarStyle = theme => {
    return ({
        containerNav:{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            '& > a > img':{
            },
            '& > div > a':{
                fontFamily: 'Comic sans',
                fontSize: '1.6em',
                color: 'black',
                marginRight: '20px',
                textDecoration: 'none',
            }
        },
        logo: {
            marginRight: '50px',
        }
    })
}