//Ham them du lieu vao API tu URL va goi callback khi hoan thanh
function addDataToAPI(url, data, callback){
    fetch(url,
                {
                    method: 'POST',
                    headers: {'Content - Type' : 'application/json'},
                    body: JSON.stringify(data)
                }
        )
    .then(response => {
        if(!response.ok){
            throw new Error('Loi khi them du lieu vao API');
        }
        return response.json();
    })
    .then(result => {
        callback(null, result);
    })
    .catch(error => {
        callback(error, null);
    })
}

//Ham callback de xu ly ket qua sau khi them du lieu thanh cong
function handleAddDataResponse(error, result){
    if(error){
        console.error('Loi', error.message);
    }else{
        console.log('Du lieu da duoc them vao API thanh cong', result);
        //Xu ly ket qua tai day
    }
}


//URL cua API can them du lieu
// const apiURL = 'http://api.example.com/addData';

const apiURL = 'http://656d3ffbbc5618d3c22ee91.mockapi.io/product';

//Du lieu can them vao API 
const newData = {
    name: 'John Doe_Mr Dinh_VTC',
    price: 30,
}

//Goi ham de them du lieu vao API tu URL va truyen ham callback de xu ly
addDataToAPI(apiURL, newData, handleAddDataResponse);