export const navBarStyle = theme => {
    return ({
        containerNav:{
            backgroundColor: 'white',
            position: 'relative',
        },
        toolbar: {
            padding: '3px 20px 2px 20px',
            [theme.breakpoints.between('xs', 'md')]:{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'start',
            },
        },
        logo:{
            marginRight: '60px',
            [theme.breakpoints.between('xs', 'md')]:{
                width: '90px',
                height: '60px',
                marginRight: '0'
            },
        },
        links:{
            marginRight: '50px',
            color: '#125D98',
            fontSize: '2em',
            fontFamily: 'Acme , sans-serif',
            textDecoration: 'none',
            position: 'relative',
            backgroundImage: 'linear-gradient(currentColor, currentColor)',
            backgroundPosition: '50% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '0% 2px',
            transition: 'background-size .5s',
            [theme.breakpoints.between('xs', 'md')]:{
                marginRight: '0',
                fontSize: '1.2em',
            },
            '&:hover':{
                backgroundSize: '100% 2px',
                color: '#D44000',
            }
        },
        link:{
            marginRight: '540px',
            color: '#125D98',
            fontSize: '2em',
            fontFamily: 'Acme , sans-serif',
            textDecoration: 'none',
            position: 'relative',
            backgroundImage: 'linear-gradient(currentColor, currentColor)',
            backgroundPosition: '50% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '0% 2px',
            transition: 'background-size .5s',
            [theme.breakpoints.between('xs', 'md')]:{
                marginRight: '0',
                fontSize: '1.2em',
            },
            '&:hover':{
                backgroundSize: '100% 2px',
                color: '#D44000',
            }
        },
    });
}