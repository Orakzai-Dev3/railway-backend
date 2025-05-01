
const db = require('../config/config.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();


const get_data_by_id = async (req, res) => {
    try {
        const { id } = req.query;
        
        if (!id) {
            return res.status(400).json({ error: 'ID parameter is required' });
        }

        console.log(`Fetching product with ID: ${id}`); // Debug log

        const sql = 'SELECT * FROM PRODUCT WHERE ID = ?';
        const [results] = await db.query(sql,[id]);
        
        console.log('Query results:', results); // Debug log

        if (!results || results.length === 0) {
            return res.status(404).json({ 
                error: 'Product not found',
                debug: {
                    searchedId: id,
                    query: sql
                }
            });
        }

        res.json(results[0]); // Return first result if exists
    } catch(e) {
        console.error("DB error", e);
        res.status(500).json({ 
            error: 'Internal server error',
            details: e.message // Safely show error message
        });
    }
};
const get_role = async(req,res)=>{
    try{
        const token=req.cookies.token
        if(!token){
           return  res.json({message:'Unotherized',})
        }
        const converted_token = jwt.verify(token,process.env.JWT_SECRET)
         return res.json({message:'Otherized',role:converted_token.role ,email:converted_token.email})
        
    }catch(err){
       return  res.json('something went wrong')

    }
}




// const Signup = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         console.log(req.body)

//         // Validate required fields
//         if (!name || !email || !password) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Check if user already exists
//         const checkSql = 'SELECT * FROM users WHERE name=? AND email = ?';
//         const [existingUser] = await db.query(checkSql, [name,email]);

//         if (existingUser) {
//             return res.status(409).json({ message: 'User already registered' });
//         }

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Insert new user (role will automatically be set to 'user')
//         const insertSql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//         const [result] = await db.query(insertSql, [name, email, hashedPassword]);

//         // Get the newly created user with default role
//         const getUserSql = 'SELECT id, name, email, role FROM users WHERE id = ?';
//         const [newUser] = await db.query(getUserSql, [result.insertId]);

//         // Success response
//         res.status(201).json({ 
//             message: 'User registered successfully',
//             user: newUser
//         });

//     } catch (err) {
//         console.error('Signup error:', err);
//         res.status(500).json({ 
//             message: 'Internal server error',
//             error: err.message 
//         });
//     }
// };
const Signup = async (req, res) => {
    try {
        const { name, email: rawEmail, password } = req.body;
        const email = rawEmail.trim().toLowerCase(); // Normalize email

        console.log('Registration attempt for:', { name, email });

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const checkSql = 'SELECT * FROM users WHERE BINARY email = ?';
        const [checkResponse] = await db.query(checkSql, [email]);
        
        console.log('Check response:', checkResponse); // Debug log

        if (checkResponse && checkResponse.length > 0) {
            console.log('User exists:', checkResponse[0]); // Debug log
            return res.status(409).json({ message: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const insertSql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const [insertResult] = await db.query(insertSql, [name, email, hashedPassword]);

        // Success response
        res.status(201).json({ 
            success: true,
            message: 'User registered successfully',
            userId: insertResult.insertId
        });

    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ 
            success: false,
            message: 'Registration failed',
            error: err.message 
        });
    }
};



const Login = async (req, res) => {
    try {
        const { email: rawEmail, password } = req.body;
        
        // Validate input
        if (!rawEmail || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const email = rawEmail.trim().toLowerCase();

        // Check if user exists (with await)
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (!users || users.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // Compare passwords (with await)
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            {
                user_id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET, // Changed from process.env.JWT for better convention
            { expiresIn: '1h' }
        );

        // Set secure cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000,
            path: '/',
        });

        // Return success response (excluding password)
        const { password: _, ...userWithoutPassword } = user;
        
        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: userWithoutPassword
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ 
            success: false,
            message: 'Login unsuccessful',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
};

 


// const Create_Order = async (req, res) => {
//   console.log('Request received - Method:', req.method);
//   console.log('Request body:', req.body);
//   console.log('Cookies:', req.cookies);

//   let connection;
//   try {
//     // 1. Authentication check
//     const token = req.cookies.token;
//     console.log('Token:', token);
    
//     if (!token) {
//       console.log('No token found - unauthorized');
//       return res.status(401).json({ 
//         success: false,
//         message: 'Unauthorized',
//         redirect: '/signin' 
//       });
//     }

//     // 2. Validate request body
//     const { shippinginfo, productinfo } = req.body;
//     console.log('Shipping info:', shippinginfo);
//     console.log('Product info:', productinfo);
    
//     if (!shippinginfo || !productinfo) {
//       console.log('Missing shipping or product info');
//       return res.status(400).json({ 
//         success: false,
//         message: 'Shipping and product information required' 
//       });
//     }

//     // 3. Verify token
//     const converted_token = jwt.verify(token, process.env.JWT_SECRET);
//     const user_id = converted_token.user_id;
//     // user_id he orders or order_items sy forign link hai yh he order_id hai orders may or yh he order_id hai order_items may
//     console.log('User ID from token:', user_id);

//     // 4. Get database connection
//     connection = await db.getConnection();
//     await connection.beginTransaction();
//     console.log('Database connection established');

//     // 5. Insert main order record (FIXED TYPO)
//     const [orderResult] = await connection.query(
//       `INSERT INTO orders (
//         order_id,
//         full_name,
//         address,
//         city,
//         state,
//         postal_code,
//         country
//       ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//       [
//         user_id,
//         shippinginfo.fullName,
//         shippinginfo.address,
//         shippinginfo.city,
//         shippinginfo.state,
//         shippinginfo.zipCode,
//         shippinginfo.country
//       ]
//     );
    

//     // 6. Insert order items
//     console.log('Processing order items...');
//     for (const item of productinfo.cart_Items) {
//       console.log('Processing item:', item.id);
//       await connection.query(
//         `INSERT INTO order_items (
//           order_id,
//           product_id,
//           quantity,
//           price,
//           product_name,
//           image_url
//         ) VALUES (?, ?, ?, ?, ?, ?)`,
//         [
//           user_id,
//           item.id,
//           item.quantity,
//           item.price,
//           item.name,
//           item.image
//         ]
//       );
//     }

//     // 7. Update product stock
//     console.log('Updating product stock...');
//     for (const item of productinfo.cart_Items) {
//       const [updateResult] = await connection.query(
//         `UPDATE product
//         SET stock = stock - ? 
//         WHERE id = ? AND stock >= ?`,
//         [item.quantity, item.id, item.quantity]
//       );

//       if (updateResult.affectedRows === 0) {
//         throw new Error(`Insufficient stock for product ${item.id}`);
//       }
//     }

//     await connection.commit();
//     console.log('Transaction committed');

//     return res.status(201).json({
//       success: true,
      
//       message: 'Order created successfully',
//       data: {
        
//         totalAmount: productinfo.total_Amount,
//         items: productinfo.cart_Items
//       }
//     });

//   } catch (err) {
//     console.error('ERROR:', err);
    
//     if (connection) await connection.rollback();
    
//     if (err.name === 'JsonWebTokenError') {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid token',
//         redirect: '/signin'
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: 'Failed to create order',
//       error: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   } finally {
//     if (connection) {
//       connection.release();
//       console.log('Database connection released');
//     }
//   }
// };
const Create_Order = async (req, res) => {
  console.log('Order creation request received');
  let connection;

  try {
    // 1. Authentication check
    const token = req.cookies.token;
    if (!token) {
      console.log('No token found - unauthorized');
      return res.status(401).json({ 
        success: false,
        message: 'Unauthorized - Please login first',
        redirect: '/signin' 
      });
    }

    // 2. Validate request body
    const { shippinginfo, productinfo } = req.body;
    if (!shippinginfo || !productinfo || !productinfo.cart_Items || productinfo.cart_Items.length === 0) {
      console.log('Invalid request data');
      return res.status(400).json({ 
        success: false,
        message: 'Shipping information and at least one product item is required' 
      });
    }

    // 3. Verify token and get user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.user_id;
    console.log(`Processing order for user ID: ${user_id}`);

    // 4. Get DB connection and start transaction
    connection = await db.getConnection();
    await connection.beginTransaction();
    console.log('Database transaction started');

    // 5. Insert main order record (Assuming 'orders' table has auto-increment order_id)
    const [orderResult] = await connection.query(
      `INSERT INTO orders (
        order_id,
        full_name,
        address,
        city,
        state,
        postal_code,
        country
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
        shippinginfo.fullName,
        shippinginfo.address,
        shippinginfo.city,
        shippinginfo.state,
        shippinginfo.zipCode,
        shippinginfo.country
      ]
    );

    const orderId = orderResult.insertId;
    console.log(`Order created with ID: ${orderId}`);

    // 6. Insert order items
    console.log(`Inserting ${productinfo.cart_Items.length} order items`);
    for (const item of productinfo.cart_Items) {
      await connection.query(
        `INSERT INTO order_items (
          order_id,
          product_id,
          product_name,
          quantity,
          price,
          image_url
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          orderId,
          item.id,
          item.name,
          item.quantity,
          item.price,
          item.image
        ]
      );
      console.log(`Item ${item.id} added to order`);
    }

    // 7. Update product stock levels
    console.log('Updating product stock levels');
    for (const item of productinfo.cart_Items) {
      const [updateResult] = await connection.query(
        `UPDATE product
         SET stock = stock - ?
         WHERE id = ? AND stock >= ?`,
        [item.quantity, item.id, item.quantity]
      );
      if (updateResult.affectedRows === 0) {
        throw new Error(`Insufficient stock for product ${item.id}`);
      }
      console.log(`Stock updated for product ${item.id}`);
    }

    // 8. Commit transaction
    await connection.commit();
    console.log('Transaction successfully committed');

    // 9. Send success response
    return res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: {
        orderId,
        totalAmount: productinfo.totalPrice,
        items: productinfo.cart_Items,
        shippingAddress: shippinginfo
      }
    });
  } catch (err) {
    console.error('Order creation failed:', err);
    if (connection) {
      await connection.rollback();
      console.log('Transaction rolled back');
    }

    // Handle JWT errors
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid authentication token',
        redirect: '/signin'
      });
    }

    if (err.message.includes('Insufficient stock')) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  } finally {
    if (connection) {
      connection.release();
      console.log('Database connection released');
    }
  }
};


// const get_User_ordered_Items = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     console.log(token);
//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized', redirect: '/signin' });
//     }

//     const converted_token = jwt.verify(token, process.env.JWT_SECRET);
//     const user_id = converted_token.user_id; //3

//     // Query to get the order for the user
//     const [orders] = await db.query('SELECT * FROM orders WHERE order_id = ?', [user_id]);

//     if (!orders || orders.length === 0) {
//       return res.status(404).json({ message: 'No orders found for this user' });
//     }

//     const orderId = orders[0].id;
//     console.log('order_id', orderId);

//     // Query to get order items
//     const [order_items] = await db.query('SELECT * FROM order_items WHERE order_id = ?', [orderId]);

//     const Data = {
//       order: orders[0],
//       items: order_items
//     };

//     res.status(200).json(Data);
//   } catch (err) {
//     console.log('error',err)
//     console.log('error', err);
//     res.status(500).json({ message: 'something went wrong' });
//   }
// };
const get_User_ordered_Items = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Unauthorized', redirect: '/signin' });

    const { user_id } = jwt.verify(token, process.env.JWT_SECRET);

    // 1. Get ALL orders for this user
    const [orders] = await db.query('SELECT * FROM orders WHERE order_id = ?', [user_id]);
    
    if (!orders?.length) return res.status(404).json({ message: 'No orders found' });

    // 2. Get order IDs for batch query
    const orderIds = orders.map(o => o.id);

    // 3. Get ALL items for ALL orders in one query
    const [order_items] = await db.query('SELECT * FROM order_items WHERE order_id IN (?)', [orderIds]);

    // 4. Organize items by order ID
    const itemsByOrderId = order_items.reduce((acc, item) => {
      acc[item.order_id] = acc[item.order_id] || [];
      acc[item.order_id].push(item);
      return acc;
    }, {});

    // 5. Combine orders with their items
    const result = orders.map(order => ({
      ...order,
      items: itemsByOrderId[order.id] || []
    }));

    res.status(200).json(result);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const get_all_admin_orders = async (req, res) => {
  try {
    const [orders] = await db.query('SELECT * FROM ORDERS');
    const [orderItems] = await db.query('SELECT * FROM ORDER_ITEMS');

    // Create a map to quickly associate items with their order
    const orderItemsMap = {};

    // Initialize the map with order IDs as keys and empty arrays as values
    for (const order of orders) {
      orderItemsMap[order.id] = [];
    }

    // Populate the map with items
    for (const item of orderItems) {
      if (orderItemsMap[item.order_id]) {
        orderItemsMap[item.order_id].push(item);
      }
    }

    // Construct the final array of orders with their items
    const result = orders.map(order => ({
      ...order,
      items: orderItemsMap[order.id] || [],
    }));
      res.json(result);
  } catch (err) {
    console.log('........error........', err);
    res.status(500).json({ error: err.message });
  }
};

const log_out = async (req, res) => {
  try {
    // 1. Get token from cookies
    const token = req.cookies.token;
    
    // 2. Check if token exists
    if (!token) {
      return res.status(400).json({ 
        success: false,
        message: 'No token found in cookies' 
      });
    }

    // 3. Optional: Verify token before clearing (recommended)
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // You can log the logout or add to blacklist here
      console.log(`User ${decoded.userId} logged out`);
    } catch (err) {
      console.log('Token verification failed during logout:', err.message);
      // Still proceed to clear the cookie even if verification fails
    }

    // 4. Clear the cookie with proper options
    res.clearCookie('token', {
      httpOnly: true,       // Essential for security
       // HTTPS in production
      sameSite: 'strict',   // CSRF protection
      path: '/',            // Same path as when cookie was set
      domain: process.env.COOKIE_DOMAIN // If using cross-subdomain cookies
    });

    // 5. Send success response
    res.status(200).json({ 
      success: true,
      message: 'Successfully logged out' 
    });

  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error during logout' 
    });
  }
};





module.exports = {get_all_admin_orders,get_User_ordered_Items,Create_Order,get_data_by_id,Signup,Login,get_role}