

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // 发送 POST 请求到后端
    fetch('https://chinaonekitchen.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // 显示后端返回的响应
    })
    .catch(error => {
        console.error('Error:', error);
    });
  });







  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // 获取表单数据
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mainDish1Qty = parseInt(document.getElementById('mainDish1').value);
    const mainDish2Qty = parseInt(document.getElementById('mainDish2').value);
    const mainDish3Qty = parseInt(document.getElementById('mainDish3').value);
    const mainDish4Qty = parseInt(document.getElementById('mainDish4').value);
    const mainDish5Qty = parseInt(document.getElementById('mainDish5').value);
    const mainDish6Qty = parseInt(document.getElementById('mainDish6').value);
    // 其他菜品的数量也要获取...
  
    // 菜品价格
    const prices = {
      mainDish1: 15.00,
      mainDish2: 16.00,
      mainDish3: 18.00,
      mainDish4: 14.00,
      mainDish5: 17.00,
      mainDish6: 20.00,
      // 其他菜品价格...
    };
  
    // 计算总价
    const totalPrice = 
      mainDish1Qty * prices.mainDish1 +
      mainDish2Qty * prices.mainDish2 +
      mainDish3Qty * prices.mainDish3 +
      mainDish4Qty * prices.mainDish4 +
      mainDish5Qty * prices.mainDish5 +
      mainDish6Qty * prices.mainDish6;
      // 加上其他菜品的总价...
  
    // 更新总价显示
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
  
    // 发送数据到后端 (用 fetch 或其他方式)
    const orderData = {
      name,
      phone,
      order: {
        mainDish1Qty,
        mainDish2Qty,
        mainDish3Qty,
        mainDish4Qty,
        mainDish5Qty,
        mainDish6Qty,
        // 其他菜品的数量...
      },
      notes: document.getElementById('notes').value,
      totalPrice: totalPrice.toFixed(2)
    };
  
    fetch('https://chinaonekitchen.com/submit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
      alert('订单提交成功');
    })
    .catch(error => {
      alert('提交失败，请重试');
    });
  });
  



