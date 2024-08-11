// const YoutubeUser = require('../models/YoutubeUser')

// exports.createUser = async (req, res) => {

//   const { accountName } = req.body;

//   try {
//     // Check if the accountId already exists
//     const existingUser = await YoutubeUser.findOne({ accountName });

//     if (existingUser) {
//       // If accountId exists, send a response indicating a conflict
//       console.log(existingUser)
//       // return res.status(409).json({ message: 'Account with this accountId already exists', accountInfo: existingUser });
//       return res.json({ message: 'Account with this accountId already exists', accountInfo: existingUser });

//     }

//     // If accountId does not exist, create and save the new user
//     const newUser = new YoutubeUser(req.body);
//     const user = await newUser.save();
//     // res.status(201).json({ message: 'New account register successful', accountInfo: user });
//     res.json({ message: 'New account register successful', accountInfo: user });

//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.getAllUsers = async (req, res) => {
//   const users = await YoutubeUser.find();
//   res.status(200).json(users);
// };

// const YoutubeUser = require('../models/YoutubeUser')

const Table = require('../models/Table')

exports.uploadTableData = async (req, res) => {
  console.log(req.body)
    const { tableHtml } = req.body;
  
    try {
      // Create a new Table document
      const newTable = new Table({
        tableData: tableHtml,
        updateDate: new Date() // Set the current date
      });
  
      // Save the document to the database
      await newTable.save();
  
      res.status(201).json({ message: "Table data uploaded successfully" });
    } catch (error) {
      console.error("Error updating table data:", error);
      res.status(500).json({ message: "Error updating table data" });
    }
  };
