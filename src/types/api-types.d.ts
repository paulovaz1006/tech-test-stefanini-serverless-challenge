responseData: { 
    // resposta com descrição e corpo da resposta 
    200 : { 
        description : 'isso correu bem' , 
        bodyType : 'helloPostResponse' , 
    } ,

    // resposta com apenas uma descrição 
    400 : { 
        description : 'failed Post' , 
    } , 
    // abreviação para apenas uma descrição 
    502 : 'server error' , 
}