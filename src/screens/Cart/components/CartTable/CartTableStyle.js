export const cartTableStyle = theme => {
    return({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '120px'
        },
        headerTable:{
            backgroundColor: '#e6e6e6'
        },
        tableContainer:{
            width: '90%',
            margin: '2% auto 6% auto'
        },
        imgProducto:{
            maxWidth: '8rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        },
        root:{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '5%'
        }
    })
}