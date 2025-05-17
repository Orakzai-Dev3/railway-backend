const db = require('../config/config.js');


get_aviator_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Aviator Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
get_Biker_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Biker Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_Bomber_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Bomber Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_Cafe_racer_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Cafe Racer Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_puffer_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Puffer Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_Shearling_leather_jackets = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Shearling Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_vests = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Vests Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_coat_and_blazer = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Custom Coats';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_custom_aviator_jacket = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Custom Aviator Jacket';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_portfolios = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Leather Portfolios';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_passport_holder = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Passport Holder';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_duffel_bags = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Duffle Bags';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_corporate_gifts = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      const values =['Leather Wallet','Leather Portfolios','Passport Holder']
      query = 'SELECT * FROM product Where category IN(?,?,?)'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_wallet = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Leather Wallet';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_backpacks = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Leather Backpacks';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  get_leather_handbags = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      let category = 'Leather Handbags';
      const values =[category]
      query = 'SELECT * FROM product Where category=?'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  get_leather_bags = async (req, res) => {
    try {
      const { price, size, color , sort } = req.query;
      
      console.log("Request body:", req.query); 
      const values =['Duffle Bags','Duffle Bags','Leather Backpacks']
      query = 'SELECT * FROM product Where category IN(?,?,?)'
      
      
      if(price){

        if(price == 'Upto$540'){
        query += ' AND NewPrice <= ?';
        values.push(540);}
        else if(price == '550-$560'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(price);
        }
        else if(price == '$560-$600'){
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }

      if(size){
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }

      if(color){
        query += ' AND color = ?';
        values.push(color);
      }

      if(sort){
        if(sort == 'High to low'){
          query += ' ORDER BY NewPrice DESC';
        }
        else if(sort == 'Low to High'){
          query += ' ORDER BY NewPrice ASC';
        }
      }


      const [result] = await db.query(query, values);
      console.log("Fetched jackets:", result); // add this
        res.json(result);


      
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  get_leather_scin = async (req, res) => {
    try {
      const { price, size, color, sort, gender } = req.query;
  
      console.log("Request query:", req.query);
  
      const values = [];
      let query = 'SELECT * FROM product WHERE 1=1';
  
      // Price filter
      if (price) {
        if (price === 'Upto$540') {
          query += ' AND NewPrice <= ?';
          values.push(540);
        } else if (price === '550-$560') {
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(550, 560);
        } else if (price === '$560-$600') {
          query += ' AND NewPrice BETWEEN ? AND ?';
          values.push(560, 600);
        }
      }
  
      // Size filter
      if (size) {
        query += ' AND FIND_IN_SET(?, sizes)';
        values.push(size);
      }
  
      // Gender filter
      if (gender) {
        query += ' AND gender = ?';
        values.push(gender);
      }
  
      // Color filter
      if (color) {
        query += ' AND color = ?';
        values.push(color);
      }
  
      // Sorting
      if (sort) {
        if (sort === 'High to low') {
          query += ' ORDER BY NewPrice DESC';
        } else if (sort === 'Low to High') {
          query += ' ORDER BY NewPrice ASC';
        }
      }
  
      const [result] = await db.query(query, values);
      console.log("Fetched products:", result);
      res.json(result);
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  
 

  
module.exports = {get_leather_scin,get_leather_bags,get_corporate_gifts,get_aviator_leather_jackets, get_Biker_leather_jackets, get_Bomber_leather_jackets, get_Cafe_racer_leather_jackets, get_puffer_leather_jackets, get_Shearling_leather_jackets, get_leather_vests, get_coat_and_blazer,get_custom_aviator_jacket ,get_leather_wallet,get_leather_portfolios,get_leather_passport_holder,get_leather_duffel_bags,get_leather_backpacks,get_leather_handbags};


