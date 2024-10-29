const apiURL = 'https://671a2956acf9aa94f6a966e3.mockapi.io/';

// Hàm để tạo nhà hàng mới
function createRestaurant(data, callback) {
    fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => callback(null, result))
    .catch(error => callback(error, null));
}

// Hàm để lấy danh sách nhà hàng
function getRestaurants(callback) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Hàm để cập nhật thông tin nhà hàng
function updateRestaurant(id, data, callback) {
    fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => callback(null, result))
    .catch(error => callback(error, null));
}

// Hàm để xóa nhà hàng
function deleteRestaurant(id, callback) {
    fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => callback(null, result))
    .catch(error => callback(error, null));
}

// Hàm callback để hiển thị danh sách nhà hàng
function displayRestaurants() {
    getRestaurants((error, data) => {
        if (error) {
            console.error('Lỗi khi lấy danh sách nhà hàng:', error);
            return;
        }
        const restaurantList = document.getElementById('restaurantList');
        restaurantList.innerHTML = '';
        data.forEach(restaurant => {
            const li = document.createElement('li');
            li.textContent = `${restaurant.name} - ${restaurant.address} - ${restaurant.rating}`;
            const editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.onclick = () => loadRestaurantData(restaurant);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.onclick = () => deleteRestaurant(restaurant.id, displayRestaurants);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            restaurantList.appendChild(li);
        });
    });
}

// Hàm để tải dữ liệu nhà hàng vào form để sửa
function loadRestaurantData(restaurant) {
    document.getElementById('restaurantId').value = restaurant.id;
    document.getElementById('name').value = restaurant.name;
    document.getElementById('address').value = restaurant.address;
    document.getElementById('rating').value = restaurant.rating;
}

// Hàm xử lý khi submit form
document.getElementById('restaurantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('restaurantId').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const rating = parseFloat(document.getElementById('rating').value);

    const newData = { name, address, rating };

    if (id) {
        // Nếu có ID thì cập nhật nhà hàng
        updateRestaurant(id, newData, (error, result) => {
            if (error) {
                console.error('Lỗi khi cập nhật nhà hàng:', error);
            } else {
                displayRestaurants();
                this.reset();
            }
        });
    } else {
        // Nếu không có ID thì tạo mới nhà hàng
        createRestaurant(newData, (error, result) => {
            if (error) {
                console.error('Lỗi khi thêm nhà hàng:', error);
            } else {
                displayRestaurants();
                this.reset();
            }
        });
    }
});

// Lấy danh sách nhà hàng khi tải trang
document.addEventListener('DOMContentLoaded', displayRestaurants);
