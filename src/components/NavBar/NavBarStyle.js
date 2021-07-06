export const navBarStyle = theme => {
    return ({
        containerNav:{
            backgroundColor: 'white',
        },
        toolbar: {
            padding: '3px 20px 2px 20px',
        },
        logo:{
            marginRight: '50px',
        },
        links:{
            marginRight: '50px',
            fontSize: '2em',
            fontFamily: 'Acme , sans-serif',
            textDecoration: 'none',
            position: 'relative',
            '&:after':{
                content: '',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%',
                height: '3px',
                transform: 'scaleX(0%)',
                backgroundColor: '#20C2F7',
                transition: 'transform 0.3s'
            },
            '&:hover:after':{
                transform: 'scaleX(100%)',
            },
            '&:hover':{
                color: '#20C2F7',
                
            }
        },
        link:{
            marginRight: '600px',
            fontSize: '2em',
            fontFamily: 'Acme , sans-serif',
            textDecoration: 'none',
            position: 'relative',
            '&:after':{
                content: '',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%',
                height: '3px',
                transform: 'scaleX(0%)',
                backgroundColor: '#20C2F7',
                transition: 'transform 0.3s'
            },
            '&:hover:after':{
                transform: 'scaleX(100%)',
            },
            '&:hover':{
                color: '#20C2F7',
                
            }
        }
    });
}